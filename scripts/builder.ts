import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

const APP_DIR = path.join(process.cwd(), 'src', 'app', 'areas');

// --- Main Agent Action 2: The Next.js RSC & SGE Builder ---

async function buildSGERoute(trendQuery: string, locationSlug: string, locationCity: string) {
    console.log(`Building Route for: ${trendQuery} in ${locationCity}...`);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash", generationConfig: { responseMimeType: "application/json" } });

    // Enforce 10/10 E-E-A-T and SGE formatting with strict business rules
    const systemPrompt = `
        You are an elite Next.js (App Router) architect and Technical SEO.
        We provide zero-cost emergency towing and rescue in ${locationCity}, Israel.
        Create an SGE-optimized page for the exact long-tail search query: "${trendQuery}".

        STRICT Constraints:
        1.  **Language:** 100% Hebrew ONLY! Do not use any English in the text or headers.
        2.  **Contact Info:** NEVER hardcode phone numbers. You MUST import and use our official CTA components:
            \`import { WhatsAppCTA } from "@/components/whatsapp-cta";\`
            \`import { BUSINESS_INFO } from "@/lib/data";\`
            Use \`<WhatsAppCTA cityName="${locationCity}" />\` and buttons with \`href={\`tel:+\${BUSINESS_INFO.phone}\`}\` for regular calls.
        3.  **Pricing:** NEVER use exact prices (like "250 ILS" or "250 ש"ח"). Only use general statements like "מחירים הוגנים", "מחיר זול" or "הצעת מחיר בטלפון".
        4.  **Design:** Apply the official dark theme gradient to the HERO section: \`<section className="gradient-trust text-white py-14 md:py-20">\`. Ensure consistency with our premium dark UI, avoiding generic white backgrounds where possible.
        5.  **No Motorcycles:** We do NOT tow motorcycles (אופנועים). If the query mentions motorcycles, re-frame the page to state we specialize in cars, commercial vehicles, and 4x4s, and CANNOT assist with motorcycles.
        6.  **SGE Format:** Answer-first placement. Start the page content exactly addressing the query directly and factually (In Hebrew).
        7.  **RSC (Server Components):** The React component MUST be a Server Component (no 'use client'). You must use \`className\` instead of \`class\`.
        8.  **Structured Data:** Generate exact \`AutoTowing\` JSON-LD schema. Includes areaServed (${locationCity}), openingHoursSpecification (24/7), geo-coordinates (approximate for the area), priceRange ("$"), and serviceType.

        Output must be a valid JSON object with:
        {
          "slug": "url-friendly-english-translation-of-query",
          "h1_title": "Hebrew H1 targeting the exact query",
          "sge_html": "<section>The Answer-first content with injected E-E-A-T HTML</section>",
          "json_ld": { ... },
          "rsc_code": "The raw string of the fully functional Next.js page.tsx file containing the structured data and SGE HTML. Export default function Page() { ... }"
        }
    `;

    try {
        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: systemPrompt }] }],
            generationConfig: { temperature: 0.1 } // Extremely low temperature for coding precision
        });

        let text = result.response.text();
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const output = JSON.parse(text);

        // Safeguard against LLM using 'class=' instead of 'className='
        if (output.rsc_code) {
            output.rsc_code = output.rsc_code.replace(/ class=/g, ' className=');
        }

        const targetDir = path.join(APP_DIR, locationSlug, output.slug);

        // 1. Write the physical page.tsx
        fs.mkdirSync(targetDir, { recursive: true });
        fs.writeFileSync(path.join(targetDir, 'page.tsx'), output.rsc_code);
        console.log(`Created route: ${targetDir}/page.tsx`);

        // 2. Save state to Supabase Spoke Pages
        const { error } = await supabase.from('spoke_pages').insert({
            title: output.h1_title,
            slug: output.slug,
            sge_answer_html: output.sge_html,
            eeat_signals_json: { pricing: true, licensing: true, nap: true },
            structured_data_json: output.json_ld,
            route_path: `/areas/${locationSlug}/${output.slug}`,
            is_published: true
        });

        if (error) throw error;
        return true;
    } catch (e) {
        console.error("Builder failed:", e);
        return false;
    }
}

async function runBuilder() {
    console.log("Starting Spoke Builder Agent...");

    // Fetch pending trends
    const { data: trends, error } = await supabase
        .from('local_trends')
        .select('*, micro_locations(slug, city)')
        .eq('status', 'pending')
        .limit(3); // Process in batches to avoid Vercel timeouts

    if (error || !trends) {
        console.log("No pending trends found.");
        return;
    }

    for (const trend of trends) {
        const locationSlug = trend.micro_locations?.slug || 'haifa-general';
        const locationCity = trend.micro_locations?.city || 'Haifa and Krayot';

        const success = await buildSGERoute(trend.query, locationSlug, locationCity);
        if (success) {
            // Update status
            await supabase.from('local_trends').update({ status: 'completed', processed_at: new Date() }).eq('id', trend.id);
        } else {
            await supabase.from('local_trends').update({ status: 'failed' }).eq('id', trend.id);
        }
    }
}

runBuilder();
