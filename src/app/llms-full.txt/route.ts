import { CITIES } from "@/lib/data";
import { GUIDES } from "@/lib/guides";
import { buildEntityMarkdown, buildGuideMarkdown } from "@/lib/agent-markdown";

// /llms-full.txt — the whole knowledge base in a single Markdown document, so an agent
// can ingest everything with one request instead of crawling hundreds of HTML pages.
export const revalidate = 86400;

export async function GET() {
    const sections: string[] = [];

    sections.push(buildEntityMarkdown({}));
    for (const city of CITIES) {
        sections.push(buildEntityMarkdown({ city: city.slug }));
    }
    for (const guide of [...GUIDES].sort((a, b) => b.publishDate.localeCompare(a.publishDate))) {
        sections.push(buildGuideMarkdown(guide));
    }

    return new Response(sections.join("\n\n"), {
        headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate",
        },
    });
}

