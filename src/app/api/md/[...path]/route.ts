import { markdownForPath, markdownResponse, SITE_URL } from "@/lib/agent-markdown";

// Internal rewrite target for Markdown content negotiation (see src/middleware.ts):
//   /haifa/electric.md  (or Accept: text/markdown)  ->  /api/md/haifa/electric
// The page path travels in the URL path (not the query string) so it survives the rewrite.
export async function GET(_req: Request, { params }: { params: { path: string[] } }) {
    const path = "/" + (params.path || []).map((p) => decodeURIComponent(p)).join("/");
    const md = markdownForPath(path);
    if (!md) {
        return markdownResponse(
            `# 404 — No Markdown version for \`${path}\`\n\nSee the site index for AI agents: ${SITE_URL}/llms.txt\n`,
            undefined,
            404
        );
    }
    return markdownResponse(md, path === "/index" ? "/" : path);
}

