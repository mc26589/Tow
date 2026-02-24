import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@supabase/supabase-js';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

const OTHERS_INTENTS = ['vehicle', 'situation', 'price', 'complementary'];

// --- Helper Functions ---

async function fetchWeatherStatus(location: string): Promise<{ isEmergency: boolean; context: string | null }> {
    // 1. קריאה ל-API של מזג אוויר חינמי (למשל, OpenWeatherMap)
    // אם מזג האוויר סוער בחיפה (גשם חזק, שלג, הצפות):
    // return { isEmergency: true, context: "סופה עזה והצפות בכרמל" };
    return { isEmergency: false, context: null };
}

async function getMissingMicroLocations(): Promise<any[]> {
    // שליפה של מיקומים שעדיין לא כיסינו בצורה מספקת
    const { data } = await supabase.from('micro_locations').select('*');
    return data || [];
}

// --- Main Agent Action 1: The Researcher ---

async function runLocalResearcher() {
    console.log("Starting Local Researcher...");

    // Setup Gemini 2.0 Flash with low temperature for factual trend extraction
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const weather = await fetchWeatherStatus("Haifa");

    let systemPrompt = `
        You are an elite Local SEO expert. We provide towing services in Haifa and the Krayot area (Israel).
        Based on the 4 intents (Vehicle: e.g., heavy motorcycles. Situation: e.g., mud rescue in Carmel. Price: e.g., cheap towing. Complementary: e.g., buying cars for parts),
        Output exactly 5 highly specific, long-tail local search queries that people are likely searching for RIGHT NOW.
        Focus on hyper-local topography (e.g., Ahuzah, Check Post, Route 22).

        Output format must be a strictly valid JSON array of strings: ["query 1", "query 2", ...]
    `;

    if (weather.isEmergency) {
        systemPrompt += `\nEMERGENCY SEO MODE ACTIVATED: The weather is severe (${weather.context}). Focus queries on storm-related towing (e.g., flooded cars, accidents).`;
    }

    try {
        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: systemPrompt }] }],
            generationConfig: {
                temperature: 0.3, // Low temperature for consistency
                responseMimeType: "application/json",
            }
        });

        const textResponse = result.response.text();
        const trends: string[] = JSON.parse(textResponse);
        console.log("Trends Discovered:", trends);

        // Map these to intents/locations conceptually and save to Supabase
        // (In a real scenario, you'd use Gemini again or exact string matching to link to specific UUIDs in Supabase)

        for (const query of trends) {
            const { error } = await supabase.from('local_trends').insert({
                query: query,
                source: 'gemini',
                is_emergency: weather.isEmergency,
                emergency_context: weather.context,
                status: 'pending' // Ready for Builder Agent
            });
            if (error) console.error("Error saving trend:", error.message);
        }

        console.log("Researcher finished.");
    } catch (e) {
        console.error("Agent failed:", e);
    }
}

runLocalResearcher();
