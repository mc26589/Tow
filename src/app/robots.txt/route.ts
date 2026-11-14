// /robots.txt — served as a route handler (instead of app/robots.ts) because Next's
// MetadataRoute.Robots type cannot express the `Content-Signal` directive.
//
// Content Signals (contentsignals.org) declare what crawled content may be USED for:
//   search   = classic search index & snippets
//   ai-input = real-time AI answers / RAG / grounding  -> this is what earns AI citations
//   ai-train = training / fine-tuning of models        -> puts the brand into model memory
// For a local business that wants to be recommended by AI assistants, all three = yes.

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://grar-haifa.vercel.app";

// AI / LLM crawlers explicitly allow-listed for GEO. Named explicitly (in addition to `*`)
// so nobody accidentally disallows them later without noticing.
const AI_CRAWLERS = [
    "GPTBot",            // OpenAI (training)
    "OAI-SearchBot",     // OpenAI (ChatGPT Search index)
    "ChatGPT-User",      // OpenAI (live browsing on behalf of a user)
    "ClaudeBot",         // Anthropic (training)
    "Claude-SearchBot",  // Anthropic (search index)
    "Claude-User",       // Anthropic (live fetch on behalf of a user)
    "PerplexityBot",     // Perplexity (index)
    "Perplexity-User",   // Perplexity (live fetch)
    "Google-Extended",   // Gemini / AI Overviews training opt-in
    "Applebot-Extended", // Apple Intelligence
    "Bingbot",           // Bing — also powers ChatGPT Search & Copilot grounding
    "DuckAssistBot",     // DuckDuckGo AI answers
    "meta-externalagent",// Meta AI
    "Amazonbot",         // Alexa / Amazon AI
    "MistralAI-User",    // Mistral Le Chat
    "CCBot",             // Common Crawl (feeds many open LLMs)
    "Bytespider",        // ByteDance
    "cohere-ai",
    "Diffbot",
    "YouBot",
];

export function GET() {
    const body = `# ${SITE_URL}
# AI agents: a token-efficient index of this site is at ${SITE_URL}/llms.txt
# Every key page has a Markdown twin: append ".md" or send "Accept: text/markdown".

User-agent: *
Content-Signal: search=yes, ai-input=yes, ai-train=yes
Allow: /
Disallow: /api/cron/
Disallow: /api/webhook/

${AI_CRAWLERS.map((ua) => `User-agent: ${ua}`).join("\n")}
Content-Signal: search=yes, ai-input=yes, ai-train=yes
Allow: /
Disallow: /api/cron/
Disallow: /api/webhook/

Sitemap: ${SITE_URL}/sitemap.xml
`;

    return new Response(body, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=86400, s-maxage=86400",
        },
    });
}

