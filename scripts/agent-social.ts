import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const FB_PAGE_ACCESS_TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
const FB_PAGE_ID = process.env.FACEBOOK_PAGE_ID;

if (!GEMINI_API_KEY) {
  console.error("Missing GEMINI_API_KEY environment variable. Exiting.");
  process.exit(1);
}

console.log("Environment check:");
console.log("- GEMINI_API_KEY:", GEMINI_API_KEY ? "Present (masked)" : "MISSING");
console.log("- FACEBOOK_PAGE_ID:", FB_PAGE_ID ? FB_PAGE_ID : "MISSING");
console.log("- FACEBOOK_PAGE_ACCESS_TOKEN:", FB_PAGE_ACCESS_TOKEN ? "Present (masked)" : "MISSING");
console.log("- IS_DRY_RUN:", process.argv.includes('--dry-run'));

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const IS_DRY_RUN = process.argv.includes('--dry-run');

async function postToFacebook(message: string, link: string) {
  if (IS_DRY_RUN) {
    console.log("[Dry Run] Would post to Facebook:");
    console.log(`Message: ${message}`);
    console.log(`Link: ${link}`);
    return;
  }

  if (!FB_PAGE_ACCESS_TOKEN || !FB_PAGE_ID) {
    console.warn("Missing Facebook credentials. Skipping post.");
    return;
  }

  // Basic validation: Page tokens usually start with EAA...
  if (!FB_PAGE_ACCESS_TOKEN.startsWith('EAA') && !FB_PAGE_ACCESS_TOKEN.startsWith('EA')) {
    console.warn("Warning: FACEBOOK_PAGE_ACCESS_TOKEN does not look like a standard Page Access Token (usually starts with EAA..).");
    console.log(`Token starts with: ${FB_PAGE_ACCESS_TOKEN.substring(0, 4)}... (Length: ${FB_PAGE_ACCESS_TOKEN.length})`);
  }

  try {
    const url = `https://graph.facebook.com/v19.0/${FB_PAGE_ID}/feed`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        link,
        access_token: FB_PAGE_ACCESS_TOKEN
      })
    });

    const result = await response.json();
    if (result.error) {
      console.error("Facebook API Error Details:");
      console.error("- Message:", result.error.message);
      console.error("- Type:", result.error.type);
      console.error("- Code:", result.error.code);
      console.error("- Trace ID:", result.error.fbtrace_id);
      
      if (result.error.code === 190) {
        console.warn("\n[Hint] Error 190 usually means the token is invalid, expired, or malformed.");
        console.warn("Please ensure you copied the 'Page Access Token' from the Meta for Developers dashboard, NOT the App Secret or a Client Token.");
        console.warn("A valid Page Access Token usually starts with 'EAA...'.");
      }
    } else {
      console.log("Successfully posted to Facebook Page! Post ID:", result.id);
    }
  } catch (error) {
    console.error("Failed to post to Facebook:", error);
  }
}

async function runSocialSEOAgency() {
  const model = genAI.getGenerativeModel({ 
    model: "gemini-3.1-flash-lite-preview",
    generationConfig: { responseMimeType: "application/json" }
  }); 

  console.log("Analyzing existing content...");

  let areasContent = "";
  try {
    const areasPath = path.join(process.cwd(), "src", "app", "areas", "haifa-general");
    const files = fs.readdirSync(areasPath);
    areasContent = files.slice(0, 10).join(", ");
  } catch (e) {
    console.warn("Could not read areas directory.");
  }

  const prompt = `
אתה סוכן SEO ומומחה תוכן לגרר מפרץ אקספרס בחיפה. 
המטרה שלך היא להפיק שני דברים:
1. מאמר SEO חדש לבלוג באתר.
2. פוסט שיווקי ומניע לפעולה לדף הפייסבוק שלנו שיקשר למאמר.

אלה הנושאים הקיימים: ${areasContent}

המאמר צריך להיות עד 350 מילים, בסגנון אנושי, מועיל ואמפתי לנהגים שנתקעו.

דגשים חשובים לפוסט בפייסבוק:
- הפוסט צריך להיות קליל, לכלול אימוג'ים.
- חובה לכלול הנעה לפעולה (CTA) חזקה שקוראת לאנשים להיכנס לאתר.
- חובה להשתמש במחרוזת [LINK] במקום שבו אתה רוצה שהקישור לאתר יופיע.
- אסור בהחלט לכלול מספרי טלפון בפוסט. אנחנו רוצים שאנשים יכנסו לאתר.

הפק מבנה JSON (ללא Markdown) המכיל:
{
  "slug": "english-url-slug",
  "title": "כותרת המאמר",
  "description": "תיאור SEO קצר",
  "category": "טיפים לנהגים",
  "article_content": "תוכן המאמר ב-HTML (h2, h3, p)",
  "fb_post_message": "תוכן הפוסט לפייסבוק הכולל את [LINK]",
  "fb_image_prompt": "מתאר תמונה ריאליסטי ודרמטי לפוסט בפייסבוק (באנגלית)",
  "author": "המוסכניק הוירטואלי - גרר חיפה"
}
`;

  try {
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.warn("Standard JSON.parse failed, attempting robust extraction...");
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          data = JSON.parse(jsonMatch[0]);
        } catch (innerError) {
          console.error("Robust extraction also failed.");
          console.error("Raw Response:", responseText);
          throw innerError;
        }
      } else {
        console.error("No JSON-like structure found in response.");
        console.error("Raw Response:", responseText);
        throw parseError;
      }
    }

    const date = new Date().toISOString().split("T")[0];
    
    const newGuide = {
      slug: data.slug,
      title: data.title,
      description: data.description,
      category: data.category,
      publishDate: date,
      readTime: "3 דקות",
      author: data.author,
      content: data.article_content
    };

    const articleLink = `https://grar-haifa.vercel.app`;
    const fbMessage = data.fb_post_message.replace(/\[LINK\]/g, articleLink);

    console.log("\nGenerated Content:");
    console.log("- Title:", newGuide.title);
    console.log("- Slug:", newGuide.slug);
    console.log("- Link:", articleLink);
    console.log("- FB Message:", fbMessage);
    console.log("- FB Image Prompt:", data.fb_image_prompt);

    if (!IS_DRY_RUN) {
      const guidesPath = path.join(process.cwd(), "src", "lib", "guides.ts");
      let guidesFileContent = fs.readFileSync(guidesPath, "utf-8");

      const insertIndex = guidesFileContent.lastIndexOf("];");
      if (insertIndex !== -1) {
        const prefix = guidesFileContent.trim().endsWith("[];") ? "" : ",";
        const newGuideCode = JSON.stringify(newGuide, null, 4);
        
        guidesFileContent =
          guidesFileContent.slice(0, insertIndex) +
          prefix + "\n" + newGuideCode + "\n" +
          guidesFileContent.slice(insertIndex);

        fs.writeFileSync(guidesPath, guidesFileContent);
        console.log(`Added new guide: ${newGuide.title}`);
      }
    } else {
      console.log("[Dry Run] Would add guide:", newGuide.title);
    }

        // Post to Facebook
        await postToFacebook(fbMessage, articleLink);

  } catch (error) {
    console.error("Operation failed:", error);
  }
}

runSocialSEOAgency();

