/**
 * Blog Agent — Automated article generator for GRAR towing website
 *
 * Uses live Google Trends RSS + SEO Researcher (`local_trends` in Supabase)
 * + Google Suggest + Haifa weather + Gemini AI to generate high-CTR,
 * up-to-date Hebrew articles every 3 days.
 *
 * Run: npm run agent:blog
 * Dry run: npm run agent:blog -- --dry-run
 * Scheduled: Every 3 days via GitHub Actions (.github/workflows/blog-agent.yml)
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import * as dotenv from "dotenv";
import { assertSafeToWrite } from "./lib/validate-code";
import { getTrendingTopicForArticle } from "./lib/trends-fetcher";

dotenv.config({ path: ".env.local" });

// ============================================
// Configuration
// ============================================

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
    console.error("❌ GEMINI_API_KEY is required");
    process.exit(1);
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = SUPABASE_URL && SUPABASE_KEY ? createClient(SUPABASE_URL, SUPABASE_KEY) : undefined;

const IS_DRY_RUN = process.argv.includes("--dry-run");
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
    model: process.env.GEMINI_MODEL || "gemini-3.1-flash-lite-preview",
    generationConfig: { responseMimeType: "application/json" },
});

const GUIDES_FILE = path.join(__dirname, "..", "src", "lib", "guides.ts");

// ============================================
// Main Logic
// ============================================

async function main() {
    console.log("🚀 Blog Agent Starting...\n");

    // 1. Read existing guides to find used slugs/topics (supports both JS and JSON-quoted keys)
    const guidesContent = fs.readFileSync(GUIDES_FILE, "utf-8");
    const existingSlugs = Array.from(guidesContent.matchAll(/["']?slug["']?\s*:\s*"([^"]+)"/g)).map((m) => m[1]);
    const existingTitles = Array.from(guidesContent.matchAll(/["']?title["']?\s*:\s*"((?:[^"\\]|\\.)*)"/g)).map((m) =>
        m[1].replace(/\\"/g, '"')
    );
    console.log(`📚 Found ${existingSlugs.length} existing articles`);

    // 2. Get a trending topic from Google Trends RSS / SEO Researcher / Google Suggest
    console.log("📈 Fetching SEO Research & Hot Trends...");
    const trendResult = await getTrendingTopicForArticle(existingTitles, { supabase });

    let topicText: string;
    let keywordsText: string;
    let topicSource: string;
    let weatherContext = "";

    if (trendResult) {
        topicText = trendResult.topic;
        keywordsText = trendResult.keywords.join(", ");
        topicSource = trendResult.source;
        weatherContext = trendResult.weatherContext || "";
        console.log(`🔥 Trend found (${topicSource}): "${topicText}"`);
        console.log(`   Keywords: ${keywordsText}`);
    } else {
        // Fallback: Ask Gemini to suggest a new topic
        console.log("🤖 No trends found. Asking Gemini to suggest a topic...");
        const suggestion = await suggestTopicWithGemini(existingTitles);
        if (!suggestion) {
            console.error("❌ Could not generate a topic. Exiting.");
            process.exit(1);
        }
        topicText = suggestion.topic;
        keywordsText = suggestion.keywords;
        topicSource = "gemini-suggestion";
        console.log(`💡 Gemini suggested: "${topicText}"`);
    }

    // 3. Generate article with Gemini
    console.log(`\n✍️  Generating article about: "${topicText}"`);
    const article = await generateArticle(topicText, keywordsText, weatherContext);
    if (!article) {
        console.error("❌ Failed to generate article");
        process.exit(1);
    }

    // Ensure unique slug
    let slug = article.slug
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
    if (!slug) {
        slug = `guide-${Date.now().toString(36)}`;
    }
    if (existingSlugs.includes(slug)) {
        slug = `${slug}-${Date.now().toString(36)}`;
        console.log(`⚠️  Slug collision detected, using: ${slug}`);
    }
    article.slug = slug;

    console.log(`📝 Generated: "${article.title}" (slug: ${article.slug})`);

    if (IS_DRY_RUN) {
        console.log("\n🧪 [DRY RUN] Would append article to guides.ts:");
        console.log(JSON.stringify(article, null, 2));
        console.log("\n🧪 [DRY RUN] No files modified.");
        return;
    }

    // 4. Append to guides.ts
    const ok = appendArticle(article);
    if (!ok) {
        console.error("❌ Failed to write article to guides.ts");
        process.exit(1);
    }

    console.log("✅ Article appended to guides.ts");
    console.log(`📊 Topic source: ${topicSource}`);
    console.log("\n🎉 Blog Agent finished. Workflow will commit & push.");
}

// ============================================
// Gemini Topic Suggestion (Fallback)
// ============================================

async function suggestTopicWithGemini(
    existingTitles: string[]
): Promise<{ topic: string; keywords: string } | null> {
    const titlesList = existingTitles.slice(-25).join("\n- ");
    const today = new Date().toISOString().split("T")[0];

    const prompt = `אתה מומחה SEO לאתר של חברת גרירת רכבים "גרר מפרץ אקספרס" בחיפה והקריות.
התאריך היום: ${today}.

הנה כותרות מאמרים שכבר קיימים באתר (אסור לחזור עליהם או לכתוב נושא דומה!):
- ${titlesList}

כללים חשובים:
- הנושא חייב להיות רלוונטי **רק** לאזור חיפה והקריות (קריית ביאליק, קריית מוצקין, קריית אתא, קריית ים, קריית חיים, נשר, טירת כרמל, עכו, יקנעם)
- אסור בשום אופן לכתוב על ערים אחרות (לא תל אביב, לא ירושלים, לא באר שבע)
- הנושא חייב להיות בתחום הרכב: גרירה, תקלות רכב, תחזוקה, אבחון בעיות, בטיחות בדרכים, חילוץ, רכב חשמלי, טיפולים (ללא אופנועים!)
- תבחר נושא חם, עדכני לעונה, שאנשים מחפשים בגוגל לפני שהם צריכים גרר

החזר JSON בלבד (בלי markdown):
{
    "topic": "הנושא המוצע",
    "keywords": "מילות מפתח מופרדות בפסיקים"
}`;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response
            .text()
            .replace(/```json\s*/gi, "")
            .replace(/```\s*/g, "")
            .trim();
        return JSON.parse(text);
    } catch (err) {
        console.error("Error getting topic suggestion:", err);
        return null;
    }
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

async function generateArticle(
    topic: string,
    keywords: string,
    weatherContext: string
): Promise<GeneratedArticle | null> {
    const today = new Date().toISOString().split("T")[0];
    const currentYear = new Date().getFullYear();

    const categories = [
        "טיפים לנהגים",
        "אבחון תקלות",
        "תחזוקה",
        "בטיחות בדרכים",
        "רכב חשמלי",
        "שירותי גרירה",
    ];

    const prompt = `אתה כותב תוכן מומחה ומומחה CTR (שיעור הקלקות בגוגל) לבלוג של חברת גרירת רכבים בחיפה והקריות בשם "גרר מפרץ אקספרס".

התאריך היום: ${today} (שנת ${currentYear}).
הקשר עונתי/מזג אוויר נוכחי: ${weatherContext || "חיפה והקריות"}
הנושא למאמר: ${topic}
מילות מפתח: ${keywords}
קטגוריות אפשריות: ${categories.join(", ")}

כללים חשובים (חובה לעקוב!):
- המאמר חייב להיות רלוונטי **רק** לאזור חיפה והקריות (כולל נשר, יקנעם, עכו, טבעון)
- אסור בשום אופן להזכיר או לכתוב על ערים אחרות (לא תל אביב, לא ירושלים, לא באר שבע)
- אנחנו לא גוררים אופנועים — המאמר מיועד לרכבים פרטיים, מסחריים, חשמליים ו-4x4 בלבד

הנחיות כתיבה ו-CTR גבוה (קריטי!):
1. **כותרת (title):** עד 55 תווים בלבד! בלי שם המותג בסוף. שתהיה מסקרנת ומושכת קליקים בגוגל — שלבו מספרים, שאלה ישירה או [${currentYear}] כשמתאים (למשל: "5 סימנים שהגיר עומד לשבוק — ואיך למנוע נזק [${currentYear}]"). הימנעו מכותרות גנריות כמו "המדריך המלא".
2. **תיאור מטא (description):** 130–155 תווים בלבד! תנו הצצה לתשובה מעשית + קריאה לפעולה + מספר הטלפון 054-917-4414 למקרה חירום.
3. כתוב בעברית טבעית, ידידותית, חמה ואנושית — כאילו מוסכניק מנוסה מחיפה מסביר לחבר.
4. אורך: 850–1200 מילים, מעמיק ומועיל באמת.
5. מבנה HTML: <h2> לכותרות ראשיות, <h3> למשנה, <p>, <ul>/<ol>, <strong>.
6. שלב 2–3 קישורים פנימיים רלוונטיים מתוך האתר בצורה טבעית בתוך הטקסט:
   - <a href="/milon/towing-cost">מחשבון עלות גרירה 2026</a>
   - <a href="/emergency-guide">מדריך חירום לרכב תקוע</a>
   - <a href="/haifa/electric">גרירת רכב חשמלי בחיפה</a>
   - <a href="/areas">כל אזורי השירות בצפון</a>
7. בסוף המאמר הוסף מקטע <h2>שאלות נפוצות</h2> עם 3 שאלות קצרות ותשובות ישירות (מעולה ל-AI Search ול-Featured Snippets).
8. הוסף הקשר מקומי אמיתי (דרך פרויד, כביש 22 עוקף קריות, מנהרות הכרמל, צומת הצ'ק פוסט, נווה שאנן, הקריות).
9. אל תשתמש ב"לסיכום" או "בסופו של דבר".

החזר JSON בלבד (בלי markdown, בלי backticks):
{
    "slug": "english-url-slug-in-kebab-case",
    "title": "כותרת מושכת קליקים עד 55 תווים",
    "description": "תיאור מטא 130-155 תווים כולל 054-917-4414",
    "category": "קטגוריה מהרשימה",
    "readTime": "X דקות",
    "content": "תוכן HTML מלא"
}`;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();

        const cleaned = text
            .replace(/```json\s*/gi, "")
            .replace(/```\s*/g, "")
            .trim();

        const parsed = JSON.parse(cleaned);

        return {
            slug: parsed.slug || `blog-${Date.now()}`,
            title: parsed.title,
            description: parsed.description,
            category: parsed.category || "טיפים לנהגים",
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

function appendArticle(article: GeneratedArticle): boolean {
    let content = fs.readFileSync(GUIDES_FILE, "utf-8");

    const escapedContent = article.content
        .replace(/\\/g, "\\\\")
        .replace(/`/g, "\\`")
        .replace(/\$\{/g, "\\${");

    const newEntry = `
    {
        slug: ${JSON.stringify(article.slug)},
        title: ${JSON.stringify(article.title)},
        description: ${JSON.stringify(article.description)},
        category: ${JSON.stringify(article.category)},
        publishDate: ${JSON.stringify(article.publishDate)},
        readTime: ${JSON.stringify(article.readTime)},
        author: ${JSON.stringify(article.author)},
        content: \`
            ${escapedContent}
        \`
    }`;

    const closingIndex = content.lastIndexOf("];");
    if (closingIndex === -1) {
        console.error("Could not find end of GUIDES array");
        return false;
    }

    const before = content.substring(0, closingIndex).trimEnd();
    const after = content.substring(closingIndex);
    const needsComma = before.trimEnd().endsWith("}");

    content = before + (needsComma ? "," : "") + "\n" + newEntry + "\n" + after;

    const check = assertSafeToWrite(content, GUIDES_FILE);
    if (!check.ok) {
        console.error(`❌ Refusing to write unsafe code to ${GUIDES_FILE}:\n${check.reason}`);
        return false;
    }

    fs.writeFileSync(GUIDES_FILE, content, "utf-8");
    return true;
}

// ============================================
// Run
// ============================================

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
