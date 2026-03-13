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
      console.error("Facebook API Error:", result.error);
    } else {
      console.log("Successfully posted to Facebook Page!");
    }
  } catch (error) {
    console.error("Failed to post to Facebook:", error);
  }
}

async function runSocialSEOAgency() {
  const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" }); 

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
הפוסט לפייסבוק צריך להיות קליל, לכלול אימוג'ים, ולהזמין אנשים לקרוא את המדריך המלא.

הפק מבנה JSON (ללא Markdown) המכיל:
{
  "slug": "english-url-slug",
  "title": "כותרת המאמר",
  "description": "תיאור SEO קצר",
  "category": "טיפים לנהגים",
  "article_content": "תוכן המאמר ב-HTML (h2, h3, p)",
  "fb_post_message": "תוכן הפוסט לפייסבוק",
  "author": "המוסכניק הוירטואלי - גרר חיפה"
}
`;

  try {
    const result = await model.generateContent(prompt);
    const responseText = result.response.text().replace(/\`\`\`json/g, "").replace(/\`\`\`/g, "").trim();

    const data = JSON.parse(responseText);
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
    const articleLink = `https://grar-haifa.com/guides/${newGuide.slug}`;
    await postToFacebook(data.fb_post_message, articleLink);

  } catch (error) {
    console.error("Operation failed:", error);
  }
}

runSocialSEOAgency();

