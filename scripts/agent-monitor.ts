import { GoogleGenerativeAI } from "@google/generative-ai";
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

        if (!response.ok) {
            throw new Error(`Vercel deployments API failed (${response.status}): ${await response.text()}`);
        }

        const data: any = await response.json();
        if (!data.deployments || data.deployments.length === 0) {
            console.log("No deployments found.");
            return;
        }

        const latestDeployment = data.deployments[0];
        const deploymentId = latestDeployment.uid || latestDeployment.id;
        console.log(`Latest deployment ${deploymentId} state: ${latestDeployment.state}`);

        if (latestDeployment.state === "ERROR") {
            console.log(`Deployment ${deploymentId} failed. Initiating AI fix strategy.`);

            // Step 1: Fetch build/event logs using the correct Vercel `uid`
            const logsResp = await fetch(`https://api.vercel.com/v2/deployments/${deploymentId}/events`, {
                headers: { "Authorization": `Bearer ${VERCEL_TOKEN}` }
            });

            if (!logsResp.ok) {
                throw new Error(`Vercel events API failed (${logsResp.status}): ${await logsResp.text()}`);
            }

            const logsData: any = await logsResp.json();
            const logsArray = Array.isArray(logsData) ? logsData : [];
            const logsText = logsArray
                .map((d: any) => d?.payload?.text || d?.text || "")
                .filter(Boolean)
                .join("\n");

            // Step 2: Send to Gemini for analysis
            const model = genAI.getGenerativeModel({
                model: process.env.GEMINI_MODEL || "gemini-3.1-flash-lite-preview",
                generationConfig: { responseMimeType: "application/json" }
            });
            const prompt = `
You are an expert DevOps engineer. A Vercel deployment just failed.
Analyze these build logs, identify the exact cause of the failure, and propose the necessary terminal commands or fixes to resolve it remotely.

Logs limit analysis:
${logsText.slice(-2000)}

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
                console.log("AI suggests it can be fixed with a fresh redeploy without cache.");
                const redeployResp = await fetch(`https://api.vercel.com/v13/deployments?forceNew=1`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${VERCEL_TOKEN}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: latestDeployment.name || "grar-haifa",
                        deploymentId,
                        target: latestDeployment.target || "production",
                        project: VERCEL_PROJECT_ID
                    })
                });
                if (!redeployResp.ok) {
                    throw new Error(`Vercel redeploy failed (${redeployResp.status}): ${await redeployResp.text()}`);
                }
                console.log("Triggered a fresh redeploy to attempt auto-fix.");
            } else {
                console.error("AI determined the fix requires human intervention.");
                process.exit(1);
            }
        } else {
            console.log("Deployment is successful/healthy. No action needed.");
        }
    } catch (error) {
        console.error("Monitor agent encountered an error:", error);
        process.exit(1);
    }
}

checkVercelDeployments();
