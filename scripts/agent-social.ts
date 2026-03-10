import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error("Missing GEMINI_API_KEY environment variable. Exiting.");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

async function runSocialSEOAgency() {
  const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" });

  console.log("Analyzing existing content for new social-style article...");

  // Read existing pSEO areas to know what's there
  let areasContent = "";
  try {
    const areasPath = path.join(process.cwd(), "src", "app", "areas", "haifa-general");
    const files = fs.readdirSync(areasPath);
    areasContent = files.slice(0, 10).join(", ");
  } catch (e) {
    console.warn("Could not read areas directory, continuing without it.");
  }

  const prompt = `
אתה סוכן SEO בעל אופי אנושי, קליל, ונעים, כמו בן אדם אמיתי שכותב פוסט ברשת חברתית או בלוג קליל.
המטרה שלך היא לעבור על נושאי הגרירה שכבר כיסינו באתר (גרירה בחיפה, חילוץ מבוץ, כביש 22 וכו') 
אלה הנושאים הקיימים: ${areasContent}

תפיק מאמר קצר (עד 350 מילים) בסגנון בלוג/פוסט זורם ומעניין ששווה לקרוא, המיועד לנהגים באזור חיפה והקריות. המאמר צריך לדבר בגובה העיניים, עם קצת הומור/אמפתיה לגבי להיתקע עם הרכב.
הפק מבנה JSON (ללא Markdown) המכיל:
{
  "slug": "url-friendly-slug-in-english",
  "title": "כותרת קלילה ומושכת",
  "description": "תיאור קצר ומעניין מיועד ל-SEO מאחורי הקלעים",
  "category": "טיפים לנהגים",
  "content": "תוכן המאמר מעוצב ב-HTML, כולל כותרות (h2, h3) ופסקאות. התוכן חייב להיות נעים לקריאה וקליל.",
  "author": "המוסכניק הוירטואלי - גרר חיפה"
}
`;

  try {
    const result = await model.generateContent(prompt);
    const responseText = result.response.text().replace(/\`\`\`json/g, "").replace(/\`\`\`/g, "").trim();

    const newGuide = JSON.parse(responseText);
    const date = new Date().toISOString().split("T")[0];
    newGuide.publishDate = date;
    newGuide.readTime = "2 דקות";

    const guidesPath = path.join(process.cwd(), "src", "lib", "guides.ts");
    let guidesFileContent = fs.readFileSync(guidesPath, "utf-8");

    // Extract the array, append the new object
    const newGuideCode = JSON.stringify({
      slug: newGuide.slug,
      title: newGuide.title,
      description: newGuide.description,
      category: newGuide.category,
      publishDate: newGuide.publishDate,
      readTime: newGuide.readTime,
      author: newGuide.author,
      content: newGuide.content
    }, null, 4);

    // Simple append before the last "];"
    const insertIndex = guidesFileContent.lastIndexOf("];");
    if (insertIndex !== -1) {
      guidesFileContent =
        guidesFileContent.slice(0, insertIndex) +
        ",\n" + newGuideCode + "\n" +
        guidesFileContent.slice(insertIndex);

      fs.writeFileSync(guidesPath, guidesFileContent);
      console.log(`Added new guide: ${newGuide.title} to src/lib/guides.ts`);
    } else {
      console.error("Could not find the guides array in src/lib/guides.ts");
    }

  } catch (error) {
    console.error("Failed to generate or parse social SEO content.", error);
  }
}

runSocialSEOAgency();
