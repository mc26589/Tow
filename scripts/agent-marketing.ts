import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";
import { chromium } from "playwright";
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

// --- ENV VARS ---
const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!; // Or service role key
const EMAIL_USER = process.env.EMAIL_USER; // e.g., your gmail address
const EMAIL_PASS = process.env.EMAIL_PASS; // e.g., your gmail app password

// Validate critical env vars
if (!GEMINI_API_KEY || !SUPABASE_URL || !SUPABASE_KEY) {
    console.error("Missing necessary environment variables. Exiting.");
    process.exit(1);
}

// --- INITIALIZE CLIENTS ---
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Default nodemailer transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: EMAIL_USER || "fake-email@example.com",
        pass: EMAIL_PASS || "fake-password",
    },
});

async function getContactedGarages(): Promise<string[]> {
    const { data, error } = await supabase
        .from("garage_outreach")
        .select("name");

    if (error) {
        console.error("Error fetching contacted garages:", error);
        return [];
    }
    return data.map((g) => g.name);
}

async function logContactedGarage(garage: { name: string; email: string; phone: string; address: string; notes?: string }) {
    const { error } = await supabase.from("garage_outreach").insert([
        {
            name: garage.name,
            email: garage.email,
            phone: garage.phone,
            address: garage.address,
            notes: garage.notes || "Sent automated initial offer via Email",
        },
    ]);

    if (error) {
        console.error(`Error logging garage ${garage.name}:`, error);
    } else {
        console.log(`Successfully logged: ${garage.name}`);
    }
}

async function findLocalGarages(previouslyContacted: string[]) {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    console.log("Locating 5 new garages in the Haifa/Krayot area...");

    const skipCondition = previouslyContacted.length > 0
        ? `\nIMPORTANT: Do NOT include any of the following garages. We have already contacted them:\n${previouslyContacted.join(", ")}`
        : "";

    const prompt = `
  You are an expert local business researcher in Israel. 
  Your goal is to find exactly 5 real auto repair shops (מוסכים) located in the Haifa and Krayot area (חיפה והקריות).
  ${skipCondition}
  
  For each garage, try your best to find a valid public email address, phone number, and a WEBSITE URL (אתר אינטרנט).
  If you cannot find an email or website, try to guess or leave it empty, but prioritize garages that have visible contact info online.
  IMPORTANT: The website must be a valid http/https URL if it exists, otherwise leave it empty.
  
  Please return a JSON array (no markdown block, just raw JSON) containing exactly 5 objects with this format:
  [
    {
      "name": "שם המוסך",
      "email": "email@example.com",
      "phone": "04-1234567",
      "address": "כתובת המוסך בחיפה/קריות",
      "website": "https://www.example.co.il",
      "reason": "Why this garage is a good fit"
    }
  ]
  `;

    try {
        const result = await model.generateContent(prompt);
        let responseText = result.response.text().trim();

        // Clean markdown formatting if present
        responseText = responseText.replace(/^\`\`\`json/m, '').replace(/\`\`\`$/m, '').trim();

        const garages = JSON.parse(responseText);
        return garages;
    } catch (error) {
        console.error("Error generating garages from Gemini:", error);
        return [];
    }
}

async function sendWebsiteMessage(url: string, garageName: string): Promise<boolean> {
    if (!url || !url.startsWith("http")) return false;

    console.log(`Attempting to send message via website for ${garageName} at ${url}...`);
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    let success = false;
    try {
        await page.goto(url, { waitUntil: 'load', timeout: 30000 });

        // Basic heuristic to find contact page if we are not on one
        const contactLinks = await page.$$("a:has-text('צור קשר'), a:has-text('contact'), a[href*='contact']");
        if (contactLinks.length > 0) {
            await contactLinks[0].click();
            await page.waitForLoadState('load');
        }

        const message = "שלום מצוות תכנון מוסכים (הודעה אוטומטית לבדיקה).\nאני מאיר מגרר חיפה.\nאנו מציעים שירותי גרירה אמינים, זמינים וזולים באזור חיפה והקריות. נשמח לשתף פעולה ולספק שירותי גרירה ללקוחות המוסך שלכם כשנדרש.\nלשמירת קשר והזמנות מהירות: 054-9174414 | grar-haifa.vercel.app\nנשמח לשמוע מכם!";

        // Attempt to fill forms
        const nameInputs = await page.$$("input[name*='name'], input[placeholder*='שם'], input[id*='name']");
        const phoneInputs = await page.$$("input[name*='phone'], input[name*='tel'], input[placeholder*='טלפון'], input[id*='phone']");
        const emailInputs = await page.$$("input[name*='email'], input[placeholder*='מייל'], input[placeholder*='דוא\"ל'], input[type='email']");
        const messageInputs = await page.$$("textarea, input[name*='message'], input[placeholder*='הודעה']");
        const submitButtons = await page.$$("button[type='submit'], input[type='submit'], button:has-text('שלח'), button:has-text('send')");

        if (nameInputs.length > 0 && messageInputs.length > 0 && submitButtons.length > 0) {
            if (nameInputs[0]) await nameInputs[0].fill("מאיר - גרר חיפה");
            if (phoneInputs.length > 0 && phoneInputs[0]) await phoneInputs[0].fill("054-9174414");
            if (emailInputs.length > 0 && emailInputs[0]) await emailInputs[0].fill(EMAIL_USER || "mocohen2025@gmail.com");
            if (messageInputs[0]) await messageInputs[0].fill(message);

            // Click the submit button on the form
            await submitButtons[0].click();
            console.log(`Successfully submitted form on ${url} for ${garageName}`);
            success = true;
        } else {
            console.log(`Could not find a valid contact form on ${url}`);
        }
    } catch (error) {
        console.error(`Failed to automate website for ${garageName}:`, error);
    } finally {
        await browser.close();
    }

    return success;
}

async function sendEmailOffer(garage: { name: string; email: string }) {
    if (!EMAIL_USER || !EMAIL_PASS) {
        console.log(`[DRY RUN] Would send email to ${garage.name} (${garage.email})`);
        return true;
    }

    const mailOptions = {
        from: EMAIL_USER,
        to: garage.email,
        subject: "שירותי גרירה מקצועיים - שיתוף פעולה עם גרר חיפה",
        html: `
      <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>שלום לצוות ${garage.name},</h2>
        <p>שמי מאיר מ<a href="https://grar-haifa.vercel.app">גרר חיפה</a>.</p>
        <p>אנו מציעים שירותי גרירה אמינים, זמינים וזולים באזור חיפה והקריות. נשמח לשתף פעולה ולספק שירותי גרירה ללקוחות המוסך שלכם כשנדרש.</p>
        <p><strong>למה לעבוד איתנו?</strong></p>
        <ul>
          <li>זמינות גבוהה והגעה מהירה בכל שעות הפעילות.</li>
          <li>מחירים הוגנים שמשתלמים גם לכם וגם ללקוחות שלכם.</li>
          <li>צוות מקצועי ומנוסה, שומרים על הרכבים מכל משמר.</li>
        </ul>
        <br/>
        <p>לשמירת קשר והזמנות מהירות:</p>
        <p>📞 <strong>054-9174414</strong></p>
        <p>🌐 <strong><a href="https://grar-haifa.vercel.app/">grar-haifa.vercel.app</a></strong></p>
        <br/>
        <p>נשמח לשמוע מכם ולסייע כשצריך!</p>
        <p>בברכה,<br/>מאיר - גרר חיפה</p>
      </div>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Sent email to ${garage.name} (${garage.email})`);
        return true;
    } catch (error) {
        console.error(`Failed to send email to ${garage.email}:`, error);
        return false;
    }
}

async function runGarageMarketing() {
    console.log("Starting Garage Marketing Agent...");

    // 1. Fetch previously contacted to avoid duplicates
    const previouslyContacted = await getContactedGarages();
    console.log(`Found ${previouslyContacted.length} previously contacted garages.`);

    // 2. Discover 5 new garages
    const newGarages = await findLocalGarages(previouslyContacted);
    if (newGarages.length === 0) {
        console.log("No new garages found. Exiting.");
        return;
    }

    console.log(`Found ${newGarages.length} new garages to contact:`);

    for (const garage of newGarages as any[]) {
        console.log(`- ${garage.name} (Email: ${garage.email || 'None'}, Web: ${garage.website || 'None'})`);

        let contacted = false;
        let method = "";

        // 3a. Try Website Contact Form first
        if (garage.website && garage.website !== "null" && garage.website !== "undefined") {
            contacted = await sendWebsiteMessage(garage.website, garage.name);
            if (contacted) method = "Website Form";
        }

        // 3b. Fallback to Email if website form failed or didn't exist
        if (!contacted && garage.email && garage.email !== "null" && garage.email !== "undefined" && garage.email !== "לא ידוע" && garage.email !== "אין") {
            contacted = await sendEmailOffer(garage);
            if (contacted) method = "Email";
        }

        if (!contacted) {
            console.log(`Could not contact ${garage.name} via website or email. Logging anyway.`);
            method = "None / Manual";
        }

        // 4. Log to Supabase
        garage.notes = `Contacted via: ${method}`;
        await logContactedGarage(garage);
    }

    console.log("Garage Marketing Agent run complete.");
}

runGarageMarketing();
