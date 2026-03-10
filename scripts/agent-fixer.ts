import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

const PROJECT_ROOT = process.cwd();

async function runFixerLoop() {
    console.log("🚀 Starting Autonomous Fixer Agent...");

    // 1. Fetch analyzed metrics that haven't been implemented yet
    const { data: recommendations, error } = await supabase
        .from('performance_metrics')
        .select('*')
        .eq('status', 'analyzed')
        .order('created_at', { ascending: true });

    if (error) {
        console.error("❌ Failed to fetch recommendations:", error);
        return;
    }

    if (!recommendations || recommendations.length === 0) {
        console.log("✅ No pending recommendations found. System is optimized.");
        return;
    }

    console.log(`🔍 Found ${recommendations.length} recommendations to review.`);

    const model = genAI.getGenerativeModel({ 
        model: "gemini-3.1-flash-lite-preview",
        generationConfig: { responseMimeType: "application/json" }
    });

    for (const rec of recommendations) {
        const routePath = rec.route_path;
        console.log(`🛠️ Processing: ${routePath}`);

        // Smarter path resolution
        let localPath = resolvePath(routePath);
        
        if (!localPath || !fs.existsSync(localPath)) {
            console.warn(`⚠️ Could not resolve file for: ${routePath}. Skipping...`);
            continue;
        }

        console.log(`📍 Resolved to: ${localPath}`);
        const currentCode = fs.readFileSync(localPath, 'utf-8');
        const aiRec = rec.ai_recommendation_json;

        console.log(`🤖 AI Suggestion: ${aiRec.action}`);

        const prompt = `
            You are an expert Next.js Recovery Engineer. 
            Goal: Implement a performance fix based on a Core Web Vitals report.
            
            Current Page Code:
            \`\`\`tsx
            ${currentCode}
            \`\`\`
            
            Performance Issue:
            LCP: ${rec.lcp_ms}ms, INP: ${rec.inp_ms}ms, CLS: ${rec.cls_score}
            
            Suggested Fix:
            ${aiRec.action}
            Summary: ${aiRec.summary}
            
            CRITICAL REVIEW:
            1. Does this fix make sense for this specific code?
            2. Will it break the UI or TypeScript types?
            3. Is there a better/safer way to implement it?
            
            Provide the ENTIRE updated file content if you proceed. 
            If the fix is unnecessary or dangerous, set "applied" to false.

            Output JSON format:
            {
              "applied": boolean,
              "reasoning": "Explain why you applied or skipped.",
              "updatedCode": "The full code of page.tsx if applied is true, else empty string."
            }
        `;

        try {
            const result = await model.generateContent(prompt);
            const responseText = result.response.text();
            const decision = JSON.parse(responseText);

            if (decision.applied && decision.updatedCode) {
                console.log(`✅ Applying fix to ${localPath}`);
                fs.writeFileSync(localPath, decision.updatedCode, 'utf-8');

                // Update Supabase
                await supabase.from('performance_metrics')
                    .update({
                        status: 'implemented',
                        fixer_notes: decision.reasoning,
                        implemented_at: new Date().toISOString()
                    })
                    .eq('id', rec.id);
                
                console.log(`✨ Status updated to 'implemented' for ${routePath}`);
            } else {
                console.log(`⏭️ AI decided to skip fix. Reason: ${decision.reasoning}`);
                
                // Update Supabase to skipped so we don't keep retrying
                 await supabase.from('performance_metrics')
                    .update({
                        status: 'skipped',
                        fixer_notes: decision.reasoning
                    })
                    .eq('id', rec.id);
            }

        } catch (e) {
            console.error(`❌ Fix execution failed for ${routePath}:`, e);
        }
    }

    console.log("🏁 Fixer loop completed.");
}

/**
 * Highly resilient path resolver for Next.js App Router.
 * Maps URL paths to physical page.tsx files, handling dynamic segments.
 */
function resolvePath(routePath: string): string | null {
    const cleanPath = routePath.startsWith('/') ? routePath.slice(1) : routePath;
    const parts = cleanPath.split('/').filter(p => p);

    // 1. Direct match check
    const directPath = path.join(PROJECT_ROOT, 'src', 'app', ...parts, 'page.tsx');
    if (fs.existsSync(directPath)) return directPath;

    // 2. Recursive dynamic matching
    return findDynamicMatch(path.join(PROJECT_ROOT, 'src', 'app'), parts);
}

function findDynamicMatch(currentDir: string, parts: string[]): string | null {
    if (parts.length === 0) {
        const pagePath = path.join(currentDir, 'page.tsx');
        return fs.existsSync(pagePath) ? pagePath : null;
    }

    const [currentPart, ...remaining] = parts;
    const nextPathStatic = path.join(currentDir, currentPart);

    // Try static folder first
    if (fs.existsSync(nextPathStatic)) {
        const result = findDynamicMatch(nextPathStatic, remaining);
        if (result) return result;
    }

    // Try dynamic folder match [segment]
    const items = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const item of items) {
        if (item.isDirectory() && item.name.startsWith('[') && item.name.endsWith(']')) {
            const result = findDynamicMatch(path.join(currentDir, item.name), remaining);
            if (result) return result;
        }
    }

    return null;
}

runFixerLoop().catch(console.error);
