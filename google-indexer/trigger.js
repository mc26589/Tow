const http = require('http');

async function trigger() {
    try {
        console.log('Fetching sitemap URLs...');
        const fetchRes = await fetch('http://localhost:3000/api/fetch-sitemap', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sitemapUrl: 'https://grar-haifa.vercel.app/sitemap.xml' })
        });

        const fetchData = await fetchRes.json();
        if (fetchData.error) throw new Error(fetchData.error);

        const urls = fetchData.urls.map(u => u.loc);
        console.log(`Found ${urls.length} URLs. Starting indexing...`);

        const indexRes = await fetch('http://localhost:3000/api/index-urls', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ urls })
        });

        // The response is a Server-Sent Events stream, we can read it line by line
        const reader = indexRes.body.getReader();
        const decoder = new TextDecoder('utf-8');
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');
            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    try {
                        const data = JSON.parse(line.substring(6));
                        if (data.type === 'completed') {
                            console.log('✅ Indexing Push Complete.');
                        } else if (data.message) {
                            console.log(data.message);
                        }
                    } catch (e) { }
                }
            }
        }
    } catch (err) {
        console.error('Error during indexing:', err.message);
    }
}

trigger();
