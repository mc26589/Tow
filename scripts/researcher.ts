import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import {
    fetchDailyTrends,
    fetchGoogleSuggestQueries,
    fetchHaifaWeather,
    isTopicCovered,
} from './lib/trends-fetcher';

dotenv.config({ path: '.env.local' });

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!GEMINI_API_KEY || !SUPABASE_URL || !SUPABASE_KEY) {
    console.error('Missing GEMINI_API_KEY or Supabase environment variables.');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function runLocalResearcher() {
    console.log('Starting Local Researcher (Weather + Live Trends + Google Suggest + SEO AI)...');

    const modelName = process.env.GEMINI_MODEL || 'gemini-3.1-flash-lite-preview';
    const model = genAI.getGenerativeModel({ model: modelName });

    const [weather, dailyTrends, suggestA, suggestB] = await Promise.all([
        fetchHaifaWeather(),
        fetchDailyTrends(),
        fetchGoogleSuggestQueries('גרירת רכב חיפה '),
        fetchGoogleSuggestQueries('תקלה ברכב '),
    ]);

    // Load existing guides and recent trends so we don't research duplicates
    let existingTitles: string[] = [];
    try {
        const guidesPath = path.join(process.cwd(), 'src', 'lib', 'guides.ts');
        const guidesContent = fs.readFileSync(guidesPath, 'utf-8');
        existingTitles = Array.from(guidesContent.matchAll(/["']?title["']?\s*:\s*"((?:[^"\\]|\\.)*)"/g)).map((m) =>
            m[1].replace(/\\"/g, '"')
        );
    } catch {
        // ignore
    }

    const { data: recentTrends } = await supabase
        .from('local_trends')
        .select('query')
        .order('id', { ascending: false })
        .limit(30);

    const existingTrendQueries = (recentTrends || []).map((r) => r.query).filter(Boolean);
    const allCovered = [...existingTitles, ...existingTrendQueries];

    const todayStr = new Date().toISOString().split('T')[0];
    const liveSignals = [
        ...dailyTrends.map((t) => `${t.title} (${t.trafficVolume || 'trending'})`),
        ...suggestA,
        ...suggestB,
    ].slice(0, 15);

    let systemPrompt = `
        You are an elite Local SEO & Search Trend Researcher in Israel.
        Today's date is ${todayStr}. Current local context: ${weather.summary}.
        We provide 24/7 towing and roadside rescue services in Haifa and the Krayot area ONLY (חיפה, קריות, נשר, טירת כרמל, עכו, יקנעם, טבעון).
        NOTE: We do NOT tow motorcycles (אופנועים).

        Live Israeli search signals right now:
        ${liveSignals.length > 0 ? liveSignals.map((s) => `- ${s}`).join('\n') : '- (Use current seasonal & local driving trends in Haifa/Krayot)'}

        Topics/queries ALREADY covered (DO NOT repeat these):
        ${allCovered.slice(-25).map((t) => `- ${t}`).join('\n')}

        Output exactly 5 fresh, high-CTR, high-intent Hebrew long-tail search queries or article/landing-page topics that drivers in Haifa & Krayot are searching for RIGHT NOW.
        Cover diverse angles: EV battery/towing, steep hills/Carmel Tunnels, winter/rain hazards, dashboard warning lights, parking garage rescue, or local roads (Route 22, Route 4, Freud, Check Post).

        Output format must be a strictly valid JSON array of Hebrew strings: ["query 1", "query 2", ...]
    `;

    if (weather.isEmergency) {
        systemPrompt += `\nEMERGENCY SEO MODE ACTIVATED: Severe weather in Haifa (${weather.context}). Prioritize storm/flood/slippery-road towing queries.`;
    }

    try {
        const result = await model.generateContent({
            contents: [{ role: 'user', parts: [{ text: systemPrompt }] }],
            generationConfig: {
                temperature: 0.4,
                responseMimeType: 'application/json',
            },
        });

        const textResponse = result.response.text();
        const trends: string[] = JSON.parse(textResponse);
        console.log('Trends Discovered:', trends);

        let inserted = 0;
        for (const query of trends) {
            if (!query || isTopicCovered(query, allCovered)) {
                console.log(`⏭️ Skipping already-covered trend: "${query}"`);
                continue;
            }
            const { error } = await supabase.from('local_trends').insert({
                query,
                source: liveSignals.length > 0 ? 'gemini+live-trends' : 'gemini',
                is_emergency: weather.isEmergency,
                emergency_context: weather.context,
                status: 'pending',
            });
            if (error) {
                console.error('Error saving trend:', error.message);
            } else {
                inserted++;
            }
        }

        console.log(`Researcher finished. Inserted ${inserted} new unique trends.`);
    } catch (e) {
        console.error('Agent failed:', e);
        process.exit(1);
    }
}

runLocalResearcher();
