import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import * as dotenv from 'dotenv';
import { assertSafeToWrite } from './lib/validate-code';

dotenv.config({ path: '.env.local' });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

const APP_DIR = path.join(process.cwd(), 'src', 'app', 'areas');

// --- Main Agent Action 2: The Next.js RSC & SGE Builder ---

async function buildSGERoute(trendQuery: string, locationSlug: string, locationCity: string) {
    console.log(`Building Route for: ${trendQuery} in ${locationCity}...`);
    const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview", generationConfig: { responseMimeType: "application/json" } });

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
        8.  **Imports:** DO NOT ADD ANY MOCK DEFINITIONS OR PLACEHOLDERS for BUSINESS_INFO or WhatsAppCTA. Assume the imports are fully functional. Your returned code must use the imports directly.
        9.  **Structured Data:** Generate exact \`AutoTowing\` JSON-LD schema. Includes areaServed (\${locationCity}), openingHoursSpecification (24/7), geo-coordinates (approximate for the area), priceRange ("$"), and serviceType.
        10. **CRITICAL - Quote Escaping:** \`rsc_code\` will be written to disk verbatim as a .tsx file, so it MUST be syntactically valid TypeScript/JSX. Hebrew text often contains גרשיים (a double-quote mark used mid-word for abbreviations, e.g. סופ"ש, בע"מ, ק"מ, סל"ד, ת"א, צה"ל, ח"כ, מת"ם, בג"ץ). NEVER write one of these raw inside a double-quoted JS string literal (e.g. \`"...הלילה והסופ"ש."\`) — the bare \`"\` will terminate the string early and break compilation. For every such abbreviation inside a double-quoted string, you MUST either: (a) escape it as \\" (e.g. \`"...הלילה והסופ\\"ש."\`), or (b) rewrite that specific string using backticks instead of double quotes, or (c) avoid the abbreviation entirely (e.g. write "סוף השבוע" instead of "סופ"ש"). This applies to every string field you output, including "h1_title", "sge_html", "json_ld" values, and especially "rsc_code". Before finalizing your answer, re-scan every double-quoted string you wrote for a bare " next to a Hebrew letter and fix it.

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
        const targetFile = path.join(targetDir, 'page.tsx');

        // Guardrail: never write AI-generated code that is syntactically
        // broken or contains an unescaped Hebrew גרשיים inside a
        // double-quoted string — this is exactly what broke every
        // deployment on 2026-09-03. Fail loudly instead of committing it.
        const check = assertSafeToWrite(output.rsc_code, targetFile);
        if (!check.ok) {
            console.error(`Builder produced unsafe code for ${targetFile}, refusing to write it.\n${check.reason}`);
            return false;
        }

        // 1. Write the physical page.tsx
        fs.mkdirSync(targetDir, { recursive: true });
        fs.writeFileSync(targetFile, output.rsc_code);
        console.log(`Created route: ${targetFile}`);

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
