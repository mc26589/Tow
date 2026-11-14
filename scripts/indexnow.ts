/**
 * IndexNow ping — instantly notifies Bing, Yandex, Seznam, Naver & co. about all site URLs.
 *
 * Why this matters for AI SEO: ChatGPT Search and Microsoft Copilot ground their answers
 * on Bing's index. Getting fresh/updated pages into Bing within minutes (instead of weeks)
 * directly shortens the time until AI assistants can cite them.
 *
 * Usage:  npx --yes tsx scripts/indexnow.ts            (all URLs from the live sitemap)
 *         npx --yes tsx scripts/indexnow.ts /haifa /guides/foo   (specific paths)
 */

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://grar-haifa.vercel.app").replace(/\/$/, "");
const KEY = process.env.INDEXNOW_KEY || "9ff0a4d0411d84e78baa80b315ec684f"; // must match public/<KEY>.txt

async function urlsFromSitemap(): Promise<string[]> {
    const res = await fetch(`${SITE_URL}/sitemap.xml`);
    if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
    const xml = await res.text();
    return Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) => m[1].trim());
}

async function main() {
    const args = process.argv.slice(2);
    const urls = args.length ? args.map((p) => (p.startsWith("http") ? p : `${SITE_URL}${p}`)) : await urlsFromSitemap();
    // Always include the agent-facing indexes.
    urls.push(`${SITE_URL}/llms.txt`, `${SITE_URL}/llms-full.txt`);

    const host = new URL(SITE_URL).host;
    const unique = Array.from(new Set(urls)).filter((u) => new URL(u).host === host);

    for (let i = 0; i < unique.length; i += 10000) {
        const batch = unique.slice(i, i + 10000);
        const res = await fetch("https://api.indexnow.org/indexnow", {
            method: "POST",
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify({ host, key: KEY, keyLocation: `${SITE_URL}/${KEY}.txt`, urlList: batch }),
        });
        console.log(`[IndexNow] submitted ${batch.length} URLs -> HTTP ${res.status} ${await res.text()}`);
        if (res.status >= 400) process.exitCode = 1;
    }
}

main().catch((e) => {
    console.error("[IndexNow] failed:", e);
    process.exit(1);
});

