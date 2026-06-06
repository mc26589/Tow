import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
    console.error("❌ GEMINI_API_KEY is required in environment variables.");
    process.exit(1);
}

const IS_DRY_RUN = process.argv.includes("--dry-run");
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-3.1-flash-lite-preview",
    generationConfig: { responseMimeType: "application/json" }
});

const AREAS_DIR = path.join(process.cwd(), "src", "app", "areas");

interface PageInfo {
    filePath: string;
    route: string;
    slug: string;
    hasMetadata: boolean;
}

// Recursively find all page.tsx files
function getPageFiles(dir: string): string[] {
    let results: string[] = [];
    if (!fs.existsSync(dir)) return [];
    
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getPageFiles(filePath));
        } else if (file === "page.tsx") {
            results.push(filePath);
        }
    });
    return results;
}

async function main() {
    console.log("🚀 Starting SEO & CTR Booster Agent...");

    const pageFiles = getPageFiles(AREAS_DIR);
    console.log(`🔍 Found ${pageFiles.length} landing pages under areas/`);

    const allPages: PageInfo[] = [];
    for (const file of pageFiles) {
        const relative = path.relative(AREAS_DIR, file);
        // Normalize path separators to forward slashes for URLs
        const route = "/areas/" + relative.replace(/\\/g, "/").replace(/\/page\.tsx$/, "");
        const slug = path.basename(path.dirname(file));
        const content = fs.readFileSync(file, "utf-8");
        const hasMetadata = content.includes("export const metadata") || content.includes("export let metadata");
        
        allPages.push({ filePath: file, route, slug, hasMetadata });
    }

    // Prioritize pages without metadata
    let targetPages = allPages.filter(p => !p.hasMetadata).slice(0, 15);
    
    if (targetPages.length < 15) {
        const remainingCount = 15 - targetPages.length;
        const pagesWithMetadata = allPages.filter(p => p.hasMetadata);
        // Pick random pages that already have metadata for further optimization/internal link building
        const shuffled = pagesWithMetadata.sort(() => 0.5 - Math.random());
        targetPages.push(...shuffled.slice(0, remainingCount));
    }

    console.log(`🎯 Selected ${targetPages.length} pages for optimization this run.`);

    // Prepare a subset of other pages for internal link suggestions (Gemini will choose which to link)
    const linkSuggestions = allPages
        .sort(() => 0.5 - Math.random())
        .slice(0, 15)
        .map(p => ({
            slug: p.slug,
            route: p.route,
            suggestedAnchorText: p.slug.replace(/-/g, ' ')
        }));

    for (const page of targetPages) {
        console.log(`\n🛠️ Optimizing page: ${page.route}`);
        const currentCode = fs.readFileSync(page.filePath, "utf-8");

        const prompt = `
        You are an elite Next.js Performance & SEO Architect specializing in Hebrew search optimization and CTR boosting.
        Target Route: ${page.route}
        Page Slug: ${page.slug}

        Current Page Code:
        \`\`\`tsx
        ${currentCode}
        \`\`\`

        We need to optimize this page to increase both search impressions and clicks.

        STRICT SEO Requirements:
        1. **Metadata & Title Tag (CTR Booster):**
           - Ensure the page exports metadata: \`export const metadata: Metadata = { title: "...", description: "...", alternates: { canonical: "${page.route}" } }\`.
           - The title MUST be a highly compelling Hebrew search title (under 60-70 characters) targeting the exact topic. Include CTR hooks like "מחיר הוגן", "24/7", "שירות מהיר", "הגעה תוך 30 דקות", or specific neighborhood names.
           - The description MUST be a persuasive Hebrew meta description (under 150-160 characters) ending with a clear CTA (e.g. "התקשרו עכשיו!", "כנסו לפרטים!").
           - Make sure \`import type { Metadata } from "next";\` is added at the top if missing.
        
        2. **Internal Linking:**
           - Here is a list of other pages on the site that you can link to if relevant keywords appear in the text:
             ${JSON.stringify(linkSuggestions, null, 2)}
           - Use the Next.js \`<Link href="[route]">Hebrew Anchor Text</Link>\` component for these internal links.
           - Ensure \`import Link from "next/link";\` is added at the top if you inject links.
           - Links should be contextual and natural in the paragraphs.

        3. **Impression Booster (FAQ & Local Content):**
           - If the page lacks a Frequently Asked Questions (שאלות נפוצות) section or is thin on content, append a structured Hebrew FAQ section at the bottom (using standard HTML sections/divs) targeting long-tail LSI keywords (e.g. nearby streets, landmarks, warning lights, common car models, towing price ranges in general terms like "מחיר זול" or "מחיר הוגן").
           - Ensure you do NOT hardcode phone numbers (use \`BUSINESS_INFO.phone\` or \`<WhatsAppCTA cityName="..." />\` instead, assuming the imports are functional).
           - Do not tow motorcycles (אופנועים). Frame text to focus on cars/commercial vehicles if motorcycles are mentioned.

        4. **Code Quality:**
           - Do not change any business logic, existing layout structure, or component functionality.
           - Ensure the output is a valid React Server Component (no 'use client', no class instead of className).
           - The returned code must compile with absolutely zero syntax or TypeScript errors.

        Return a JSON response with this exact structure:
        {
          "optimized": boolean,
          "reasoning": "Brief explanation of what was added/optimized",
          "optimizedCode": "The full code of the page.tsx file"
        }
        `;

        try {
            const response = await model.generateContent(prompt);
            const textResponse = response.response.text();
            
            // Clean up code block ticks if Gemini returned them
            const cleaned = textResponse
                .replace(/```json\s*/gi, "")
                .replace(/```\s*/g, "")
                .trim();

            const result = JSON.parse(cleaned);

            if (result.optimized && result.optimizedCode) {
                console.log(`✅ AI Optimized page: ${page.route}`);
                console.log(`Reasoning: ${result.reasoning}`);
                
                if (IS_DRY_RUN) {
                    console.log(`🧪 [DRY RUN] Would write optimized code back to ${page.filePath}`);
                } else {
                    fs.writeFileSync(page.filePath, result.optimizedCode, "utf-8");
                    console.log(`✨ Successfully wrote updates to file.`);
                }
            } else {
                console.log(`⏭️ Page skipped. Reasoning: ${result.reasoning}`);
            }

        } catch (e) {
            console.error(`❌ Optimization failed for ${page.route}:`, e);
        }
    }

    console.log("\n🏁 SEO & CTR Booster Agent run completed.");
}

main().catch(console.error);
