/**
 * Blog Agent — Automated article generator for GRAR towing website
 * 
 * Uses Gemini AI to generate high-quality Hebrew articles about car problems
 * that people search for before they need a tow truck.
 * 
 * Run: npm run agent:blog
 * Scheduled: Twice per week via GitHub Actions
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

// ============================================
// Configuration
// ============================================

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
    console.error("❌ GEMINI_API_KEY is required");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const GUIDES_FILE = path.join(__dirname, "..", "src", "lib", "guides.ts");

// ============================================
// Topic Pool — Pre-tow search intent topics
// ============================================

const TOPIC_POOL = [
    {
        topic: "מה לעשות כשהרכב לא עובר בטסט (מבחן רישוי)",
        keywords: "טסט, מבחן רישוי, רכב לא עובר טסט",
        category: "טיפים לנהגים"
    },
    {
        topic: "איך לבדוק רכב משומש לפני קנייה — צ'ק ליסט מלא",
        keywords: "בדיקת רכב משומש, קניית רכב יד שנייה",
        category: "טיפים לנהגים"
    },
    {
        topic: "הגה רוטט בזמן נסיעה? הסיבות ומה לעשות",
        keywords: "הגה רוטט, וויברציה הגה, רעידות נסיעה",
        category: "אבחון תקלות"
    },
    {
        topic: "ריחות מוזרים מהרכב — מדריך לזיהוי תקלות לפי ריח",
        keywords: "ריח שריפה מרכב, ריח מתוק מרכב, ריח בנזין",
        category: "אבחון תקלות"
    },
    {
        topic: "בלמים לא מגיבים כמו פעם? מתי זה מסוכן",
        keywords: "בלמים חלשים, בעיית בלמים, רפדות בלמים",
        category: "אבחון תקלות"
    },
    {
        topic: "גיר אוטומטי מתנהג מוזר — סימנים לתקלה",
        keywords: "תקלת גיר, גיר אוטומטי, הרכב קופץ בהילוכים",
        category: "אבחון תקלות"
    },
    {
        topic: "סוללת רכב חשמלי — כל מה שצריך לדעת על טווח ותקלות",
        keywords: "רכב חשמלי, סוללת רכב חשמלי, טווח רכב חשמלי",
        category: "רכב חשמלי"
    },
    {
        topic: "מה לעשות אחרי תאונת דרכים — צעד אחרי צעד",
        keywords: "תאונת דרכים, מה לעשות אחרי תאונה, דיווח תאונה",
        category: "בטיחות בדרכים"
    },
    {
        topic: "נסיעה בגשם: 10 טיפים שיכולים להציל חיים",
        keywords: "נסיעה בגשם, החלקת רכב, כביש רטוב",
        category: "בטיחות בדרכים"
    },
    {
        topic: "מערכת מיזוג לא מקררת? הסיבות הנפוצות ביותר",
        keywords: "מזגן לא עובד, מזגן רכב, מזגן לא מקרר",
        category: "אבחון תקלות"
    },
    {
        topic: "רכב עושה בעיות בעלייה — תקלות נפוצות בכבישים תלולים",
        keywords: "רכב לא עולה, עלייה כרמל, רכב חלש בעלייה",
        category: "אבחון תקלות"
    },
    {
        topic: "מתי מחליפים תזמון (רצועת טיימינג) ולמה זה קריטי",
        keywords: "רצועת טיימינג, תזמון מנוע, החלפת טיימינג",
        category: "תחזוקה"
    },
    {
        topic: "חורף בחיפה: איך הגשמים פוגעים ברכב ומה אפשר לעשות",
        keywords: "נזקי חורף רכב, חלודה, מים ברכב",
        category: "תחזוקה"
    },
    {
        topic: "איך להתניע רכב עם כבלים — מדריך נכון ובטוח",
        keywords: "התנעה עם כבלים, ג'אמפ לרכב, מצבר מת",
        category: "טיפים לנהגים"
    },
    {
        topic: "מה ההבדל בין גרירה רגילה לגרירה על מגש ומתי צריכים מה",
        keywords: "סוגי גרירה, גרר מגש, גרירת רכב",
        category: "טיפים לנהגים"
    },
    {
        topic: "הרכב מוציא עשן — מה הצבע אומר על התקלה",
        keywords: "עשן מרכב, עשן לבן מהאגזוז, עשן כחול",
        category: "אבחון תקלות"
    },
    {
        topic: "דליפת שמן מהמנוע — כמה זה רציני?",
        keywords: "דליפת שמן, כתם שמן מתחת לרכב, שמן מנוע",
        category: "אבחון תקלות"
    },
    {
        topic: "תחזוקת רכב בסיסית — 10 דברים שכל נהג חייב לבדוק",
        keywords: "תחזוקת רכב, טיפול שוטף, בדיקת רכב",
        category: "תחזוקה"
    },
    {
        topic: "רכב לא ננעל או לא נפתח? בעיות שלט רחוק ומנעול",
        keywords: "שלט רחוק רכב, מפתח רכב לא עובד, מנעול רכב",
        category: "אבחון תקלות"
    },
    {
        topic: "קניתם רכב חשמלי? 8 דברים שכדאי לדעת על גרירת רכב חשמלי",
        keywords: "גרירת רכב חשמלי, גרר לרכב חשמלי, טסלה גרירה",
        category: "רכב חשמלי"
    },
];


// ============================================
// Main Logic
// ============================================

async function main() {
    console.log("🚀 Blog Agent Starting...\n");

    // 1. Read existing guides to find used slugs/topics
    const guidesContent = fs.readFileSync(GUIDES_FILE, "utf-8");
    const existingSlugs = Array.from(guidesContent.matchAll(/slug:\s*"([^"]+)"/g)).map(m => m[1]);
    console.log(`📚 Found ${existingSlugs.length} existing articles`);

    // 2. Filter out already-used topics (by checking if keywords appear in existing content)
    const availableTopics = TOPIC_POOL.filter(t => {
        const topicSlug = slugify(t.topic);
        return !existingSlugs.some(s => s === topicSlug) &&
               !guidesContent.includes(t.topic);
    });

    if (availableTopics.length === 0) {
        console.log("✅ All topics have been covered! No new article needed.");
        return;
    }

    // 3. Pick a random topic
    const topic = availableTopics[Math.floor(Math.random() * availableTopics.length)];
    console.log(`✍️  Generating article: "${topic.topic}"`);

    // 4. Generate article with Gemini
    const article = await generateArticle(topic);
    if (!article) {
        console.error("❌ Failed to generate article");
        return;
    }

    console.log(`📝 Generated: "${article.title}" (${article.readTime})`);

    // 5. Append to guides.ts
    appendArticle(article);
    console.log("✅ Article appended to guides.ts");

    // 6. Git commit & push
    try {
        execSync("git add src/lib/guides.ts", { stdio: "pipe" });
        execSync(`git commit -m "blog: ${article.title}"`, { stdio: "pipe" });
        execSync("git push", { stdio: "pipe" });
        console.log("🚀 Pushed to GitHub — Vercel will deploy automatically");
    } catch (err) {
        console.log("⚠️  Git push skipped (may need manual push)");
    }

    console.log("\n🎉 Blog Agent finished successfully!");
}

// ============================================
// Article Generation
// ============================================

interface GeneratedArticle {
    slug: string;
    title: string;
    description: string;
    category: string;
    publishDate: string;
    readTime: string;
    author: string;
    content: string;
}

async function generateArticle(topic: { topic: string; keywords: string; category: string }): Promise<GeneratedArticle | null> {
    const today = new Date().toISOString().split("T")[0];

    const prompt = `אתה כותב תוכן לבלוג של חברת גרירת רכבים בחיפה והקריות בשם "גרר מפרץ אקספרס". 

הנושא למאמר: ${topic.topic}
מילות מפתח: ${topic.keywords}
קטגוריה: ${topic.category}

הנחיות כתיבה:
1. כתוב בעברית עממית, ידידותית, חמה ואנושית — כאילו חבר טוב שמבין ברכבים מדבר איתך
2. השתמש באימוג'ים (בינוני, לא מוגזם) כדי להקל על הקריאה
3. אורך: 800-1200 מילים
4. מבנה: h2 לכותרות ראשיות, h3 לכותרות משנה, p לפסקאות, ul/ol לרשימות, strong להדגשות
5. התוכן חייב להיות מועיל ואיכותי באמת — לא סתם מאמר שיווקי, אלא מידע אמיתי שעוזר לאנשים
6. בסוף המאמר, הוסף CTA עדין ונחמד (לא אגרסיבי) לגרר מפרץ אקספרס שזמינים 24/7 בחיפה והקריות
7. אל תשתמש במילים כמו "לסיכום" או "בסופו של דבר" — סיים בצורה טבעית
8. הוסף הקשר מקומי — רחובות בחיפה, כבישים ידועים, מזג אוויר מקומי
9. הפוך את המאמר למשהו שאנשים ישתפו עם חברים שיש להם בעיה ברכב

החזר את התשובה בפורמט JSON בלבד (בלי markdown, בלי backticks):
{
    "title": "כותרת מושכת בעברית (עד 70 תווים)",
    "description": "תיאור מטא של 150-160 תווים בעברית",
    "readTime": "X דקות",
    "content": "תוכן HTML מלא עם h2, h3, p, ul, ol, strong"
}`;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        
        // Clean up the response — remove markdown code blocks if present
        const cleaned = text
            .replace(/```json\s*/gi, "")
            .replace(/```\s*/g, "")
            .trim();

        const parsed = JSON.parse(cleaned);

        return {
            slug: slugify(topic.topic),
            title: parsed.title,
            description: parsed.description,
            category: topic.category,
            publishDate: today,
            readTime: parsed.readTime || "5 דקות",
            author: "המוסכניק הוירטואלי - גרר חיפה",
            content: parsed.content,
        };
    } catch (err) {
        console.error("Error generating article:", err);
        return null;
    }
}

// ============================================
// File Manipulation
// ============================================

function appendArticle(article: GeneratedArticle) {
    let content = fs.readFileSync(GUIDES_FILE, "utf-8");

    // Escape backticks and backslashes in the article content for template literal
    const escapedContent = article.content
        .replace(/\\/g, "\\\\")
        .replace(/`/g, "\\`")
        .replace(/\$\{/g, "\\${");

    const newEntry = `
    {
        slug: "${article.slug}",
        title: "${article.title.replace(/"/g, '\\"')}",
        description: "${article.description.replace(/"/g, '\\"')}",
        category: "${article.category}",
        publishDate: "${article.publishDate}",
        readTime: "${article.readTime}",
        author: "${article.author}",
        content: \`
            ${escapedContent}
        \`
    }`;

    // Find the closing ]; of the GUIDES array and insert before it
    const closingIndex = content.lastIndexOf("];");
    if (closingIndex === -1) {
        console.error("Could not find end of GUIDES array");
        return;
    }

    // Add comma after last entry and insert new one
    const before = content.substring(0, closingIndex).trimEnd();
    const after = content.substring(closingIndex);

    // Check if last char before ]; is } — we need a comma
    const needsComma = before.trimEnd().endsWith("}");
    
    content = before + (needsComma ? "," : "") + "\n" + newEntry + "\n" + after;

    fs.writeFileSync(GUIDES_FILE, content, "utf-8");
}

// ============================================
// Utilities
// ============================================

function slugify(text: string): string {
    return text
        .replace(/[^\w\s-]/g, "")  // Remove non-word chars (keeps Hebrew too)
        .replace(/[\s_]+/g, "-")    // Replace spaces with hyphens
        .replace(/-+/g, "-")        // Remove duplicate hyphens
        .toLowerCase()
        .substring(0, 80)           // Limit length
        // For Hebrew text, create a transliterated slug
        .replace(/[א-ת]/g, "")     // Remove Hebrew chars for slug
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
        || `blog-${Date.now()}`;    // Fallback
}

// ============================================
// Run
// ============================================

main().catch(console.error);
