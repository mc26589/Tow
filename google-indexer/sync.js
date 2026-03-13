const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

// Configuration
const SITEMAP_URL = 'https://grar-haifa.vercel.app/sitemap.xml';
const CACHE_FILE = path.join(__dirname, 'indexed_cache.json');
const KEY_PATH = path.join(__dirname, 'service-account-keys.json');
const MAX_URLS_PER_RUN = 190; // Keep safely below the 200 quota

// Initialize auth
const auth = new google.auth.GoogleAuth({
    keyFile: KEY_PATH,
    scopes: ['https://www.googleapis.com/auth/indexing'],
});

const indexing = google.indexing({ version: 'v3', auth });

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchSitemapUrls(sitemapUrl) {
    try {
        const response = await fetch(sitemapUrl);
        if (!response.ok) throw new Error(`HTTP ${response.status} when fetching sitemap`);

        const xmlText = await response.text();
        const urls = [];

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
        return urls;
    } catch (err) {
        console.error('Error fetching sitemap:', err.message);
        return [];
    }
}

function loadCache() {
    if (fs.existsSync(CACHE_FILE)) {
        try {
            return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
        } catch (err) {
            console.error('Error reading cache file:', err);
        }
    }
    return {}; // { "url": "lastmod_date" }
}

function saveCache(cache) {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf-8');
}

async function run() {
    console.log(`fetching sitemap from ${SITEMAP_URL}...`);
    const allUrls = await fetchSitemapUrls(SITEMAP_URL);
    console.log(`Found ${allUrls.length} total URLs in sitemap.`);

    const cache = loadCache();
    let urlsToProcess = [];

    // Figure out which URLs need indexing
    for (const urlObj of allUrls) {
        const { loc, lastmod } = urlObj;

        // If not in cache, or if the sitemap lastmod is newer than what we have in cache
        let needsIndexing = false;
        if (!cache[loc]) {
            needsIndexing = true;
        } else if (lastmod && cache[loc] !== lastmod) {
            needsIndexing = true;
        }

        if (needsIndexing) {
            urlsToProcess.push(urlObj);
        }
    }

    console.log(`Found ${urlsToProcess.length} URLs that need indexing based on cache.`);

    if (urlsToProcess.length === 0) {
        console.log('Nothing to do! All pages are up to date.');
        return;
    }

    // Limit to quota limits
    if (urlsToProcess.length > MAX_URLS_PER_RUN) {
        console.log(`Limiting to ${MAX_URLS_PER_RUN} URLs to stay within daily quota.`);
        urlsToProcess = urlsToProcess.slice(0, MAX_URLS_PER_RUN);
    }

    let successCount = 0;
    let failedCount = 0;

    for (let i = 0; i < urlsToProcess.length; i++) {
        const { loc, lastmod } = urlsToProcess[i];

        try {
            await indexing.urlNotifications.publish({
                requestBody: {
                    url: loc,
                    type: 'URL_UPDATED',
                },
            });
            console.log(`[${i + 1}/${urlsToProcess.length}] ✅ Indexed: ${loc}`);

            // Re-update cache on success to remember that we pushed it
            cache[loc] = lastmod || new Date().toISOString();
            successCount++;

            // Save cache frequently in case process crashes
            if (i % 10 === 0) saveCache(cache);

        } catch (error) {
            // Check if error is quota exceeded
            if (error.message.includes('Quota exceeded')) {
                console.log(`\n❌ Quota Exceeded! Stopping execution for today. We'll continue tomorrow.`);
                break;
            }
            console.error(`[${i + 1}/${urlsToProcess.length}] ❌ Error indexing ${loc}:`, error.message);
            failedCount++;
        }

        // Delay to not trigger rate limit within the minute
        await sleep(1000);
    }

    // Final save
    saveCache(cache);

    console.log(`\n✅ Finished sync run.`);
    console.log(`Total URLs processed today: ${successCount}`);
    console.log(`Failed URLs today: ${failedCount}`);

    const remaining = (await fetchSitemapUrls(SITEMAP_URL)).filter(u => {
        return !cache[u.loc] || (u.lastmod && cache[u.loc] !== u.lastmod)
    }).length;

    console.log(`Remaining URLs to index in future runs: ${remaining}`);
}

// Start
run();
