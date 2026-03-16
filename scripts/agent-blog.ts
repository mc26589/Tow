/**
 * Blog Agent — Automated article generator for GRAR towing website
 * 
 * Uses Google Trends + Gemini AI to generate high-quality Hebrew articles
 * about trending car problems people search for.
 * 
 * Topic strategy (3 tiers):
 *   1. Google Trends daily automotive trends (Israel)
 *   2. Related queries from seed keywords
 *   3. Gemini AI fallback — ask for a new topic dynamically
 * 
 * Run: npm run agent:blog
 * Dry run: npm run agent:blog -- --dry-run
 * Scheduled: Twice per week via GitHub Actions
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";
import * as dotenv from 'dotenv';
import { getTrendingTopicForArticle } from './lib/trends-fetcher';

dotenv.config({ path: '.env.local' });

// ============================================
// Configuration
// ============================================

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
    console.error("❌ GEMINI_API_KEY is required");
    process.exit(1);
}

const IS_DRY_RUN = process.argv.includes('--dry-run');
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const GUIDES_FILE = path.join(__dirname, "..", "src", "lib", "guides.ts");

// ============================================
// Main Logic
// ============================================

async function main() {
    console.log("🚀 Blog Agent Starting...\n");

    // 1. Read existing guides to find used slugs/topics
    const guidesContent = fs.readFileSync(GUIDES_FILE, "utf-8");
    const existingSlugs = Array.from(guidesContent.matchAll(/slug:\s*"([^"]+)"/g)).map(m => m[1]);
    const existingTitles = Array.from(guidesContent.matchAll(/title:\s*"([^"]+)"/g)).map(m => m[1]);
    console.log(`📚 Found ${existingSlugs.length} existing articles`);

    // 2. Get a trending topic from Google Trends
    console.log("📈 Fetching Google Trends...");
    const trendResult = await getTrendingTopicForArticle(existingTitles);

    let topicText: string;
    let keywordsText: string;
    let topicSource: string;

    if (trendResult) {
        topicText = trendResult.topic;
        keywordsText = trendResult.keywords.join(', ');
        topicSource = trendResult.source;
        console.log(`🔥 Trend found (${topicSource}): "${topicText}"`);
        console.log(`   Keywords: ${keywordsText}`);
    } else {
        // Fallback: Ask Gemini to suggest a new topic
        console.log("🤖 No trends found. Asking Gemini to suggest a topic...");
        const suggestion = await suggestTopicWithGemini(existingTitles);
        if (!suggestion) {
            console.error("❌ Could not generate a topic. Exiting.");
            return;
        }
        topicText = suggestion.topic;
        keywordsText = suggestion.keywords;
        topicSource = 'gemini-suggestion';
        console.log(`💡 Gemini suggested: "${topicText}"`);
    }

    // 3. Generate article with Gemini
    console.log(`\n✍️  Generating article about: "${topicText}"`);
    const article = await generateArticle(topicText, keywordsText);
    if (!article) {
        console.error("❌ Failed to generate article");
        return;
    }

    // Ensure unique slug
    let slug = article.slug;
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
    appendArticle(article);
    console.log("✅ Article appended to guides.ts");
    console.log(`📊 Topic source: ${topicSource}`);

    // Git operations are handled by the GitHub Actions workflow
    // (not in-script) to prevent rebase conflicts
    console.log("\n🎉 Blog Agent finished. Workflow will commit & push.");
}

// ============================================
// Gemini Topic Suggestion (Fallback)
// ============================================

async function suggestTopicWithGemini(existingTitles: string[]): Promise<{ topic: string; keywords: string } | null> {
    const titlesList = existingTitles.slice(-15).join('\n- ');

    const prompt = `אתה מומחה SEO לאתר של חברת גרירת רכבים "גרר מפרץ אקספרס" בחיפה והקריות.

הנה כותרות המאמרים שכבר קיימים באתר:
- ${titlesList}

תציע נושא חדש למאמר שעדיין לא כתוב, שיהיה רלוונטי לנהגים בישראל ובמיוחד באזור חיפה.
תבחר נושא שאנשים מחפשים בגוגל לפני שהם צריכים גרר (תקלות רכב, בטיחות, תחזוקה, אירועי חירום).

החזר JSON בלבד (בלי markdown):
{
    "topic": "הנושא המוצע",
    "keywords": "מילות מפתח מופרדות בפסיקים"
}`;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text()
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

async function generateArticle(topic: string, keywords: string): Promise<GeneratedArticle | null> {
    const today = new Date().toISOString().split("T")[0];

    const categories = [
        "טיפים לנהגים", "אבחון תקלות", "תחזוקה",
        "בטיחות בדרכים", "רכב חשמלי", "שירותי גרירה"
    ];

    const prompt = `אתה כותב תוכן לבלוג של חברת גרירת רכבים בחיפה והקריות בשם "גרר מפרץ אקספרס". 

הנושא למאמר: ${topic}
מילות מפתח: ${keywords}
קטגוריות אפשריות: ${categories.join(', ')}

הנחיות כתיבה:
1. כתוב בעברית עממית, ידידותית, חמה ואנושית — כאילו חבר טוב שמבין ברכבים מדבר איתך
2. השתמש באימוג'ים (בינוני, לא מוגזם) כדי להקל על הקריאה
3. אורך: 800-1200 מילים
4. מבנה: h2 לכותרות ראשיות, h3 לכותרות משנה, p לפסקאות, ul/ol לרשימות, strong להדגשות
5. התוכן חייב להיות מועיל ואיכותי באמת — לא סתם מאמר שיווקי, אלא מידע אמיתי שעוזר לאנשים
6. בסוף המאמר, הוסף CTA עדין ונחמד (לא אגרסיבי) לגרר מפרץ אקספרס שזמינים 24/7 בחיפה והקריות
7. אל תשתמש במילים כמו "לסיכום" או "בסופו של דבר" — סיים בצורה טבעית
8. הוסף הקשר מקומי — רחובות/שכונות בחיפה, כבישים ידועים (כביש 22, עוקף קריות, סטלה מאריס), מזג אוויר מקומי
9. הפוך את המאמר למשהו שאנשים ישתפו עם חברים שיש להם בעיה ברכב
10. בחר את הקטגוריה המתאימה ביותר מהרשימה

החזר את התשובה בפורמט JSON בלבד (בלי markdown, בלי backticks):
{
    "slug": "english-url-slug-in-kebab-case",
    "title": "כותרת מושכת בעברית (עד 70 תווים)",
    "description": "תיאור מטא של 150-160 תווים בעברית",
    "category": "קטגוריה מהרשימה",
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
// Run
// ============================================

main().catch(console.error);
