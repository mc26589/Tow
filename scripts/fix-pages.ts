import { GoogleGenerativeAI } from '@google/generative-ai';
import * as fs from 'fs';
import * as path from 'path';

// Assuming GEMINI_API_KEY is in the env
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const APP_DIR = path.join(process.cwd(), 'src', 'app', 'areas', 'haifa-general');

async function fixPage(filePath: string) {
    console.log(`Fixing: ${filePath}`);
    const content = fs.readFileSync(filePath, 'utf-8');

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash", generationConfig: { responseMimeType: "text/plain" } });

    const systemPrompt = `
        You are an elite Next.js developer. I am giving you a React Server Component for a towing company website.
        The current page violates our new content standards. 
        You MUST refactor the page.tsx content following these STRICT rules:
        
        1. **Language:** Translate ALL visible English text (Hero, paragraphs, lists) to natural, persuasive Hebrew. Do not leave any English text in the UI. Keep code, JSON-LD, metadata keys, and variable names in English.
        2. **Contact Info:** Remove any hardcoded phone numbers (e.g., 050-1234567). Instead, import:
           \`import { WhatsAppCTA } from "@/components/whatsapp-cta";\`
           \`import { BUSINESS_INFO } from "@/lib/data";\`
           And use \`<WhatsAppCTA cityName="חיפה (או שם האזור)" />\` for WhatsApp, and \`href={\`tel:+\${BUSINESS_INFO.phone}\`}\` for standard phone links. Use the phone number from BUSINESS_INFO.phone (do not hardcode).
        3. **Pricing:** Remove any exact prices (like "250 ILS"). Replace with general statements like "מחירים הוגנים", "מחיר זול".
        4. **Design:** Ensure the Hero section uses the dark theme: \`<section className="gradient-trust text-white py-14 md:py-20">\` (Do not use bg-white or bg-blue-800, use our standard gradient-trust class). Ensure the rest of the page looks premium and matches the dark/trust aesthetic if needed, or clean light layout with standard tailwind classes.

        Return ONLY the raw Next.js 14 RSC TypeScript code for the file (start with the imports, end with the export default function) so I can directly save it to the file. DO NOT WRAP WITH \`\`\`tsx or markdown.
    `;

    try {
        const result = await model.generateContent({
            contents: [
                { role: "user", parts: [{ text: systemPrompt }] },
                { role: "user", parts: [{ text: `Here is the current file:\n\n${content}` }] }
            ],
            generationConfig: { temperature: 0.2 }
        });

        let newCode = result.response.text();
        newCode = newCode.replace(/```tsx/g, '').replace(/```typescript/g, '').replace(/```/g, '').trim();

        fs.writeFileSync(filePath, newCode);
        console.log(`Successfully fixed: ${filePath}`);
    } catch (err) {
        console.error(`Failed on ${filePath}`, err);
    }
}

async function run() {
    const files = fs.readdirSync(APP_DIR, { withFileTypes: true });
    for (const f of files) {
        if (f.isDirectory()) {
            const pagePath = path.join(APP_DIR, f.name, 'page.tsx');
            if (fs.existsSync(pagePath)) {
                await fixPage(pagePath);
            }
        }
    }
    console.log("Done refactoring existing pages.");
}

run();
