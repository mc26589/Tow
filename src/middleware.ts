import { NextRequest, NextResponse } from "next/server";
import { CITIES, VEHICLES } from "@/lib/data";

// ============================================
// Markdown content negotiation for AI agents
// --------------------------------------------
// - `GET /haifa/electric` with `Accept: text/markdown`  -> clean Markdown
// - `GET /haifa/electric.md`                             -> clean Markdown
// - Everything else                                      -> normal HTML (+ `Vary: Accept`)
// Kept intentionally tiny: imports only the slug lists, never the heavy guide content.
// ============================================

function hasMarkdownTwin(path: string): boolean {
    const parts = path.split("/").filter(Boolean);
    if (parts.length === 0) return true;
    if (parts.length === 1 && parts[0] === "index") return true;
    if (parts[0] === "guides") return parts.length <= 2;
    const isCity = CITIES.some((c) => c.slug === parts[0]);
    if (isCity && parts.length === 1) return true;
    if (isCity && parts.length === 2) return VEHICLES.some((v) => v.slug === parts[1]);
    return false;
}

function prefersMarkdown(accept: string | null): boolean {
    if (!accept) return false;
    const a = accept.toLowerCase();
    if (!a.includes("text/markdown")) return false;
    // Browsers always send text/html; only negotiate when markdown is explicitly preferred
    // (listed before text/html, or html absent).
    const md = a.indexOf("text/markdown");
    const html = a.indexOf("text/html");
    return html === -1 || md < html;
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const isMdUrl = pathname.endsWith(".md");
    const basePath = isMdUrl ? pathname.slice(0, -3) || "/" : pathname;

    if ((isMdUrl || prefersMarkdown(request.headers.get("accept"))) && hasMarkdownTwin(basePath)) {
        const url = request.nextUrl.clone();
        url.pathname = `/api/md${basePath === "/" ? "/index" : basePath}`;
        url.search = "";
        return NextResponse.rewrite(url);
    }

    const res = NextResponse.next();
    if (hasMarkdownTwin(pathname)) {
        res.headers.set("Vary", "Accept");
        const mdPath = pathname === "/" ? "/index.md" : `${pathname.replace(/\/$/, "")}.md`;
        res.headers.set("Link", `<${mdPath}>; rel="alternate"; type="text/markdown"`);
    }
    return res;
}

export const config = {
    // Skip Next internals, API routes and static assets (but DO match *.md).
    matcher: ["/((?!_next/|api/|images/|favicon\\.ico|.*\\.(?:png|jpe?g|gif|svg|webp|ico|txt|xml|html|js|css|json)$).*)"],
};
