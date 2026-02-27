const express = require('express');
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Path to the service account key
const KEY_PATH = path.join(__dirname, 'service-account-keys.json');

// Ensure key exists
if (!fs.existsSync(KEY_PATH)) {
    console.error('ERROR: service-account-keys.json not found in the root directory.');
    process.exit(1);
}

// Set up Google JWT auth
// We need 'indexing' for the Push API, and 'webmasters.readonly' for URL Inspection API
const auth = new google.auth.GoogleAuth({
    keyFile: KEY_PATH,
    scopes: [
        'https://www.googleapis.com/auth/indexing',
        'https://www.googleapis.com/auth/webmasters.readonly'
    ],
});

const indexing = google.indexing({
    version: 'v3',
    auth: auth,
});

const searchconsole = google.searchconsole({
    version: 'v1',
    auth: auth,
});

// Sleep helper to avoid hitting API rate limits instantly
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Endpoint to fetch sitemap and parse URLs and their lastmod dates
app.post('/api/fetch-sitemap', async (req, res) => {
    const { sitemapUrl } = req.body;
    if (!sitemapUrl) {
        return res.status(400).json({ error: 'Sitemap URL is required' });
    }

    try {
        const response = await fetch(sitemapUrl);
        if (!response.ok) throw new Error(`HTTP ${response.status} when fetching sitemap`);

        const xmlText = await response.text();
        const urls = [];

        // Parse <url> blocks to extract <loc> and <lastmod>
        const urlsetRegex = /<url>([\s\S]*?)<\/url>/g;
        let urlsetMatch;
        while ((urlsetMatch = urlsetRegex.exec(xmlText)) !== null) {
            const urlBlock = urlsetMatch[1];
            const locMatch = /<loc>(.*?)<\/loc>/.exec(urlBlock);
            const lastmodMatch = /<lastmod>(.*?)<\/lastmod>/.exec(urlBlock);

            if (locMatch) {
                urls.push({
                    loc: locMatch[1].trim(),
                    lastmod: lastmodMatch ? lastmodMatch[1].trim() : null
                });
            }
        }

        res.json({ urls });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Endpoint to inspect a specific batch of URLs via GSC URL Inspection API
app.post('/api/inspect-urls', async (req, res) => {
    const { urls, siteUrl } = req.body;

    if (!urls || !Array.isArray(urls)) {
        return res.status(400).json({ error: 'Invalid payload. "urls" array is required.' });
    }
    if (!siteUrl) {
        return res.status(400).json({ error: 'siteUrl is required for inspection.' });
    }

    // Use Server-Sent Events (SSE) to stream output back to the client
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    res.write(`data: ${JSON.stringify({ type: 'info', message: `🔍 Starting inspection for ${urls.length} URLs...` })}\n\n`);

    for (let i = 0; i < urls.length; i++) {
        const urlObj = urls[i];
        if (!urlObj || !urlObj.loc) continue;

        try {
            const inspectionRes = await searchconsole.urlInspection.index.inspect({
                requestBody: {
                    inspectionUrl: urlObj.loc,
                    siteUrl: siteUrl,
                    languageCode: 'he-IL'
                }
            });

            const indexStatusResult = inspectionRes.data.inspectionResult.indexStatusResult;

            // Send back the detailed result
            res.write(`data: ${JSON.stringify({
                type: 'success',
                url: urlObj.loc,
                lastmod: urlObj.lastmod,
                coverageState: indexStatusResult.coverageState,
                lastCrawlTime: indexStatusResult.lastCrawlTime,
                indexingState: indexStatusResult.indexingState,
                message: `[${i + 1}/${urls.length}] Inspected: ${urlObj.loc}`
            })}\n\n`);
        } catch (error) {
            console.error(`Error inspecting ${urlObj.loc}:`, error.message);
            res.write(`data: ${JSON.stringify({
                type: 'error',
                url: urlObj.loc,
                message: `[${i + 1}/${urls.length}] ERROR inspecting ${urlObj.loc}: ${error.message}`
            })}\n\n`);
        }

        // Wait 2000ms between inspection requests as it has a lower quota limit
        await sleep(2000);
    }

    res.write('data: {"type": "completed"}\n\n');
    res.end();
});

// Endpoint to request indexing (Push API)
app.post('/api/index-urls', async (req, res) => {
    const { urls } = req.body; // array of string URLs

    if (!urls || !Array.isArray(urls)) {
        return res.status(400).json({ error: 'Invalid payload. "urls" array is required.' });
    }

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    res.write(`data: ${JSON.stringify({ type: 'info', message: `🚀 Starting Indexing Push for ${urls.length} URLs.` })}\n\n`);

    for (let i = 0; i < urls.length; i++) {
        const url = urls[i].trim();
        if (!url) continue;

        try {
            await indexing.urlNotifications.publish({
                requestBody: {
                    url: url,
                    type: 'URL_UPDATED',
                },
            });

            res.write(`data: ${JSON.stringify({ type: 'success', url, message: `[${i + 1}/${urls.length}] SUCCESS: Pushed to Google` })}\n\n`);
        } catch (error) {
            console.error(`Error indexing ${url}:`, error.message);
            res.write(`data: ${JSON.stringify({ type: 'error', url, message: `[${i + 1}/${urls.length}] ERROR pushing ${url}: ${error.message}` })}\n\n`);
        }

        // Wait 1000ms between requests mapping (Google limit is usually lower but safe 1000ms)
        await sleep(1000);
    }

    res.write('data: {"type": "completed"}\n\n');
    res.end();
});

app.listen(PORT, () => {
    console.log(`\n======================================================`);
    console.log(`🚀 Google Indexing API + GSC Dashboard running at: http://localhost:${PORT}`);
    console.log(`======================================================\n`);
});
