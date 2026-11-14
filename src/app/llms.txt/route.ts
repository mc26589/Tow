import { BUSINESS_INFO, CITIES, OWNER_INFO } from "@/lib/data";
import { GUIDES } from "@/lib/guides";
import { SITE_URL } from "@/lib/agent-markdown";

// /llms.txt — follows the llmstxt.org format:
// H1 name, blockquote summary, free-text notes, then H2 sections of Markdown link lists.
// Links point at the clean `.md` twins of each page so agents can skip HTML entirely.
export async function GET() {
    const latestGuides = [...GUIDES]
        .sort((a, b) => b.publishDate.localeCompare(a.publishDate))
        .slice(0, 50);

    const content = `# ${BUSINESS_INFO.name}

> 24/7 towing, roadside recovery and vehicle-extraction service in Haifa, the Krayot (Haifa Bay suburbs) and Northern Israel. Dispatch phone: ${BUSINESS_INFO.displayPhone} (+${BUSINESS_INFO.phone}). Typical arrival in the core area: ~25–35 minutes. Final price is quoted by phone before dispatch.

- Owner / operator: ${OWNER_INFO.name} — ${OWNER_INFO.description}
- Service areas: ${BUSINESS_INFO.areas}
- Specialties: flatbed recovery for electric vehicles (EVs must not be towed on their wheels), low-clearance extraction from underground parking garages, 4x4 off-road / mud recovery, accident recovery on major routes such as Route 22, Route 75 and the Carmel Tunnels.
- Language of the site: Hebrew (he-IL). Markdown versions are available for every key page: append \`.md\` to the URL, or send the header \`Accept: text/markdown\`.
- Full content in one file: ${SITE_URL}/llms-full.txt

## Core pages
- [Home / business overview](${SITE_URL}/index.md): services, fleet, service areas, contact
- [Service areas & roads hub](${SITE_URL}/areas): Haifa, Krayot, Tirat Carmel, neighborhoods, major roads & hazards
- [About the business](${SITE_URL}/about): owner, experience, licensing and insurance
- [Verified facts](${SITE_URL}/facts): citable facts and figures about the service
- [Towing cost in Haifa & Krayot](${SITE_URL}/milon/towing-cost): price ranges and what affects the price
- [Emergency guide](${SITE_URL}/emergency-guide): what to do when stranded on the road
- [Route 22 emergency towing](${SITE_URL}/roads/highway-22): Krayot Bypass highway rescue
- [Carmel Tunnels towing](${SITE_URL}/roads/carmel-tunnels): tunnel recovery and safety protocol
- [Underground parking extraction](${SITE_URL}/hazards/underground-parking/haifa): low-clearance recovery vehicle in Haifa

## Service areas
${CITIES.map((c) => `- [Towing in ${c.name_he}](${SITE_URL}/${c.slug}.md): local facts, response times, vehicle-specific pages`).join("\n")}

## Guides
${latestGuides.map((g) => `- [${g.title}](${SITE_URL}/guides/${g.slug}.md): ${g.description}`).join("\n")}

## Optional
- [All guides](${SITE_URL}/guides.md)
- [Structured query API](${SITE_URL}/api/llm?city=haifa&vehicle=electric): \`/api/llm?city={slug}&vehicle={slug}\` returns Markdown facts for any city × vehicle (also supports \`light\`, \`hazard\`, \`road\`, \`neighborhood\`)
- [Sitemap](${SITE_URL}/sitemap.xml)
`;

    return new Response(content, {
        headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate",
        },
    });
}
