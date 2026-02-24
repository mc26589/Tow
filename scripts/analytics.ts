import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@supabase/supabase-js';
import fetch from 'node-fetch'; // Requires node-fetch

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
const VERCEL_TOKEN = process.env.VERCEL_TOKEN;

// --- Main Agent Action 3: The Core Web Vitals Analytics Loop ---

async function fetchVercelAnalytics() {
    // 1. Fetch from Vercel Web Analytics API (Pseudo-code as their API structure varies)
    // https://vercel.com/docs/rest-api/endpoints#web-analytics
    const url = `https://api.vercel.com/v1/analytics/project/${process.env.VERCEL_PROJECT_ID}/metrics`;

    // For this demonstration, we mock the daily metrics returned by Vercel
    const mockMetrics = [
        { path: "/areas/haifa/motorcycle-towing", lcp: 2800, inp: 150, cls: 0.05, bounce: 65 }, // High LCP
        { path: "/areas/krayot/mud-rescue", lcp: 1400, inp: 350, cls: 0.15, bounce: 70 }      // High INP & CLS
    ];
    return mockMetrics;
}

async function runAnalyticsLoop() {
    console.log("Starting Core Web Vitals Loop...");
    const vitals = await fetchVercelAnalytics();

    // Save raw metrics to Supabase
    for (const v of vitals) {
        await supabase.from('performance_metrics').insert({
            route_path: v.path,
            date: new Date().toISOString().split('T')[0],
            lcp_ms: v.lcp,
            inp_ms: v.inp,
            cls_score: v.cls,
            bounce_rate: v.bounce,
            status: 'pending_analysis'
        });
    }

    // Analyze poor performers with Gemini
    const { data: poorPages } = await supabase
        .from('performance_metrics')
        .select('*')
        .eq('status', 'pending_analysis')
        .or('lcp_ms.gt.2500,inp_ms.gt.200,cls_score.gt.0.1');

    if (!poorPages || poorPages.length === 0) {
        console.log("No poor performing pages found. Architecture is 10/10.");
        return;
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash", generationConfig: { responseMimeType: "application/json" } });

    for (const page of poorPages) {
        const prompt = `
            You are an elite Next.js Performance Architect.
            Route: ${page.route_path}
            Metrics: LCP: ${page.lcp_ms}ms, INP: ${page.inp_ms}ms, CLS: ${page.cls_score}.
            
            Identify the primary bottleneck. Provide ONE strict, implementable Next.js technical improvement.
            Must output valid JSON:
            {
              "action": "The technical fix (e.g., 'Implement priority={true} on the hero next/image')",
              "summary": "15 words max summarizing the fix."
            }
        `;

        try {
            const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }] });
            const analysis = JSON.parse(result.response.text());

            console.log(`AI Suggestion for ${page.route_path}:`, analysis);

            // Update Supabase with the AI recommendation
            await supabase.from('performance_metrics')
                .update({
                    ai_recommendation_json: analysis,
                    status: 'analyzed'
                })
                .eq('id', page.id);

        } catch (e) {
            console.error(`Analysis failed for ${page.route_path}:`, e);
        }
    }
}

runAnalyticsLoop();
