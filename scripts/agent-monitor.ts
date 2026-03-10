import { GoogleGenerativeAI } from "@google/generative-ai";
import fetch from "node-fetch";
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const VERCEL_PROJECT_ID = process.env.VERCEL_PROJECT_ID || "prj_Z3EjZfxuCOb3xVSDleCa91OwuDS0";

if (!GEMINI_API_KEY || !VERCEL_TOKEN) {
    console.error("Missing GEMINI_API_KEY or VERCEL_TOKEN environment variables. Exiting.");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

async function checkVercelDeployments() {
    console.log("Checking Vercel Deployments...");

    try {
        // Get latest deployments
        const response = await fetch(`https://api.vercel.com/v6/deployments?projectId=${VERCEL_PROJECT_ID}&limit=1`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${VERCEL_TOKEN}`
            }
        });

        const data: any = await response.json();
        if (!data.deployments || data.deployments.length === 0) {
            console.log("No deployments found.");
            return;
        }

        const latestDeployment = data.deployments[0];
        console.log(`Latest deployment state: ${latestDeployment.state}`);

        if (latestDeployment.state === "ERROR") {
            console.log(`Deployment ${latestDeployment.id} failed. Initiating AI fix strategy.`);

            // Step 1: Fetch logs (simplified) - usually done via events endpoint
            const logsResp = await fetch(`https://api.vercel.com/v2/deployments/${latestDeployment.id}/events`, {
                headers: { "Authorization": `Bearer ${VERCEL_TOKEN}` }
            });

            const logsData: any = await logsResp.json();
            const logsText = logsData.map((d: any) => d.text).join("\\n");

            // Step 2: Send to Gemini for analysis
            const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" });
            const prompt = `
You are an expert DevOps engineer. A Vercel deployment just failed.
Analyze these build logs, identify the exact cause of the failure, and propose the necessary terminal commands or fixes to resolve it remotely.

Logs limit analysis:
${logsText.substring(logsText.length - 2000)} // Pass last 2000 chars

Return a concise JSON object:
{
  "cause": "The error cause",
  "fix_strategy": "Explanation of fix",
  "requires_human": boolean
}
`;

            const analysisRaw = await model.generateContent(prompt);
            const analysisTxt = analysisRaw.response.text().replace(/```json/g, "").replace(/```/g, "").trim();
            const analysis = JSON.parse(analysisTxt);

            console.log("AI Analysis:", analysis);

            if (!analysis.requires_human) {
                console.log("AI suggests it can be fixed with another redeploy or a quick commit bypass.");
                // Option: Trigger another deploy via API or create an issue in Github via gh cli
                // We trigger a redeploy (perhaps without build cache)
                await fetch(`https://api.vercel.com/v13/deployments`, {
                    method: "POST",
                    headers: { "Authorization": `Bearer ${VERCEL_TOKEN}` },
                    body: JSON.stringify({
                        name: "grar-towing-seo",
                        target: "production",
                        project: VERCEL_PROJECT_ID,
                        source: "cli",
                        forceNew: true // Build without cache
                    })
                });
                console.log("Triggered a fresh redeploy to attempt auto-fix.");
            } else {
                console.error("AI determined the fix requires human intervention.");
            }
        } else {
            console.log("Deployment is successful/healthy. No action needed.");
        }
    } catch (error) {
        console.error("Monitor agent encountered an error:", error);
    }
}

checkVercelDeployments();
