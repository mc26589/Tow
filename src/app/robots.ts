import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://grar-haifa.vercel.app';

    // AI / LLM crawlers explicitly allow-listed for GEO (Generative Engine Optimization).
    // These are named explicitly (in addition to the wildcard '*' rule below) so that
    // AI answer engines and their operators can verify at a glance that they are welcome,
    // and so nobody accidentally disallows them later without noticing.
    const aiCrawlers = [
        'GPTBot',            // OpenAI (ChatGPT training/browsing)
        'ChatGPT-User',      // OpenAI (ChatGPT live browsing)
        'OAI-SearchBot',     // OpenAI (ChatGPT Search)
        'PerplexityBot',     // Perplexity
        'Perplexity-User',
        'ClaudeBot',         // Anthropic (Claude)
        'Claude-User',
        'anthropic-ai',
        'Google-Extended',   // Google (Gemini / AI Overviews training)
        'CCBot',             // Common Crawl (feeds many LLMs)
        'Bytespider',        // ByteDance
        'Applebot-Extended', // Apple Intelligence
        'Amazonbot',         // Amazon (Alexa/AI)
        'meta-externalagent',// Meta AI
        'Diffbot',
        'YouBot',
    ];

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: aiCrawlers,
                allow: '/',
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
