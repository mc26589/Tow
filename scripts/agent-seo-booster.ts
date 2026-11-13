import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";
import ts from "typescript";
import { assertSafeToWrite } from "./lib/validate-code";
import { fetchGscLowCtrPages, type GscQueryMetric } from "./lib/gsc-client";

dotenv.config({ path: ".env.local" });

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
    console.error("❌ GEMINI_API_KEY is required in environment variables.");
    process.exit(1);
}

const IS_DRY_RUN = process.argv.includes("--dry-run");
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-3.1-flash-lite-preview",
    generationConfig: { responseMimeType: "application/json" }
});

const AREAS_DIR = path.join(process.cwd(), "src", "app", "areas");
const GUIDES_FILE = path.join(process.cwd(), "src", "lib", "guides.ts");
const CACHE_FILE = path.join(process.cwd(), "scripts", "gsc-optimized-cache.json");
const COOLDOWN_DAYS = 14;
const MAX_PAGES_PER_RUN = 5;

interface CandidateTarget {
    route: string;
    kind: "guide" | "spoke";
    filePath: string;
    slug: string;
    currentTitle: string;
    currentDescription: string;
    impressions: number;
    clicks: number;
    position: number;
    topQueries: GscQueryMetric[];
}

interface GeminiBatchItem {
    route: string;
    title: string;
    description: string;
    reasoning: string;
}

function loadOptimizedCache(): Record<string, string> {
    if (!fs.existsSync(CACHE_FILE)) return {};
    try {
        return JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8"));
    } catch {
        return {};
    }
}

function saveOptimizedCache(cache: Record<string, string>) {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), "utf-8");
}

function isInCooldown(lastDateIso: string | undefined): boolean {
    if (!lastDateIso) return false;
    const diffMs = Date.now() - new Date(lastDateIso).getTime();
    return diffMs < COOLDOWN_DAYS * 24 * 60 * 60 * 1000;
}

function getPropName(prop: ts.ObjectLiteralElementLike): string {
    if (
        ts.isPropertyAssignment(prop) &&
        prop.name &&
        (ts.isIdentifier(prop.name) || ts.isStringLiteral(prop.name))
    ) {
        return prop.name.text;
    }
    return "";
}

function extractSpokeMeta(filePath: string): { title: string; description: string; hasHighCtr: boolean } | null {
    const src = fs.readFileSync(filePath, "utf-8");
    const sf = ts.createSourceFile(filePath, src, ts.ScriptTarget.Latest, true);
    let metaObj: ts.ObjectLiteralExpression | null = null;

    sf.forEachChild((node) => {
        if (ts.isVariableStatement(node)) {
            const decl = node.declarationList.declarations[0];
            if (decl && ts.isIdentifier(decl.name) && decl.name.text === "metadata" && decl.initializer && ts.isObjectLiteralExpression(decl.initializer)) {
                metaObj = decl.initializer;
            }
        }
    });

    if (!metaObj) return null;

    const props = (metaObj as ts.ObjectLiteralExpression).properties;
    const titleProp = props.find((p) => getPropName(p) === "title");
    const descProp = props.find((p) => getPropName(p) === "description");

    let currentTitle = "";
    if (titleProp && ts.isPropertyAssignment(titleProp)) {
        if (ts.isStringLiteralLike(titleProp.initializer)) {
            currentTitle = titleProp.initializer.text;
        } else if (ts.isObjectLiteralExpression(titleProp.initializer)) {
            const absProp = titleProp.initializer.properties.find((p) => getPropName(p) === "absolute");
            if (absProp && ts.isPropertyAssignment(absProp) && ts.isStringLiteralLike(absProp.initializer)) {
                currentTitle = absProp.initializer.text;
            }
        }
    }

    let currentDescription = "";
    if (descProp && ts.isPropertyAssignment(descProp) && ts.isStringLiteralLike(descProp.initializer)) {
        currentDescription = descProp.initializer.text;
    }

    const hasHighCtr = src.includes("absolute:") && (src.includes("054-917-4414") || src.includes("displayPhone"));
    return { title: currentTitle, description: currentDescription, hasHighCtr };
}

function extractGuidesMap(): Map<string, { title: string; description: string }> {
    const map = new Map<string, { title: string; description: string }>();
    if (!fs.existsSync(GUIDES_FILE)) return map;

    const src = fs.readFileSync(GUIDES_FILE, "utf-8");
    const sf = ts.createSourceFile(GUIDES_FILE, src, ts.ScriptTarget.Latest, true);

    function visit(node: ts.Node) {
        if (ts.isObjectLiteralExpression(node)) {
            const slugProp = node.properties.find((p) => getPropName(p) === "slug");
            if (slugProp && ts.isPropertyAssignment(slugProp) && ts.isStringLiteralLike(slugProp.initializer)) {
                const slug = slugProp.initializer.text;
                const titleProp = node.properties.find((p) => getPropName(p) === "title");
                const descProp = node.properties.find((p) => getPropName(p) === "description");
                const title = titleProp && ts.isPropertyAssignment(titleProp) && ts.isStringLiteralLike(titleProp.initializer)
                    ? titleProp.initializer.text
                    : "";
                const description = descProp && ts.isPropertyAssignment(descProp) && ts.isStringLiteralLike(descProp.initializer)
                    ? descProp.initializer.text
                    : "";
                if (slug && title) {
                    map.set(slug, { title, description });
                }
            }
        }
        ts.forEachChild(node, visit);
    }
    visit(sf);
    return map;
}

function getSpokePageFiles(dir: string): string[] {
    let results: string[] = [];
    if (!fs.existsSync(dir)) return results;
    for (const entry of fs.readdirSync(dir)) {
        const fullPath = path.join(dir, entry);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            results = results.concat(getSpokePageFiles(fullPath));
        } else if (entry === "page.tsx") {
            results.push(fullPath);
        }
    }
    return results;
}

function updateSpokeFileMetadata(filePath: string, newTitle: string, newDesc: string): boolean {
    let src = fs.readFileSync(filePath, "utf-8");
    const sf = ts.createSourceFile(filePath, src, ts.ScriptTarget.Latest, true);
    let metaObj: ts.ObjectLiteralExpression | null = null;

    sf.forEachChild((node) => {
        if (ts.isVariableStatement(node)) {
            const decl = node.declarationList.declarations[0];
            if (decl && ts.isIdentifier(decl.name) && decl.name.text === "metadata" && decl.initializer && ts.isObjectLiteralExpression(decl.initializer)) {
                metaObj = decl.initializer;
            }
        }
    });
    if (!metaObj) return false;

    const props = (metaObj as ts.ObjectLiteralExpression).properties;
    const titleProp = props.find((p) => getPropName(p) === "title");
    const descProp = props.find((p) => getPropName(p) === "description");
    if (!titleProp || !ts.isPropertyAssignment(titleProp) || !descProp || !ts.isPropertyAssignment(descProp)) {
        return false;
    }

    const edits = [
        {
            start: titleProp.initializer.getStart(sf),
            end: titleProp.initializer.getEnd(),
            text: `{ absolute: ${JSON.stringify(newTitle)} }`
        },
        {
            start: descProp.initializer.getStart(sf),
            end: descProp.initializer.getEnd(),
            text: JSON.stringify(newDesc)
        }
    ].sort((a, b) => b.start - a.start);

    for (const edit of edits) {
        src = src.slice(0, edit.start) + edit.text + src.slice(edit.end);
    }

    const check = assertSafeToWrite(src, filePath);
    if (!check.ok) {
        console.error(`❌ Refusing unsafe write to ${filePath}: ${check.reason}`);
        return false;
    }

    fs.writeFileSync(filePath, src, "utf-8");
    return true;
}

function updateGuideFileMetadata(updates: Array<{ slug: string; title: string; description: string }>): boolean {
    if (updates.length === 0) return false;
    let src = fs.readFileSync(GUIDES_FILE, "utf-8");
    const sf = ts.createSourceFile(GUIDES_FILE, src, ts.ScriptTarget.Latest, true);

    const bySlug = new Map(updates.map((u) => [u.slug, u]));
    const edits: Array<{ start: number; end: number; text: string }> = [];

    function visit(node: ts.Node) {
        if (ts.isObjectLiteralExpression(node)) {
            const slugProp = node.properties.find((p) => getPropName(p) === "slug");
            if (slugProp && ts.isPropertyAssignment(slugProp) && ts.isStringLiteralLike(slugProp.initializer)) {
                const match = bySlug.get(slugProp.initializer.text);
                if (match) {
                    const titleProp = node.properties.find((p) => getPropName(p) === "title");
                    const descProp = node.properties.find((p) => getPropName(p) === "description");
                    if (titleProp && ts.isPropertyAssignment(titleProp)) {
                        edits.push({
                            start: titleProp.initializer.getStart(sf),
                            end: titleProp.initializer.getEnd(),
                            text: JSON.stringify(match.title)
                        });
                    }
                    if (descProp && ts.isPropertyAssignment(descProp)) {
                        edits.push({
                            start: descProp.initializer.getStart(sf),
                            end: descProp.initializer.getEnd(),
                            text: JSON.stringify(match.description)
                        });
                    }
                }
            }
        }
        ts.forEachChild(node, visit);
    }
    visit(sf);

    if (edits.length === 0) return false;
    edits.sort((a, b) => b.start - a.start);
    for (const edit of edits) {
        src = src.slice(0, edit.start) + edit.text + src.slice(edit.end);
    }

    const check = assertSafeToWrite(src, GUIDES_FILE);
    if (!check.ok) {
        console.error(`❌ Refusing unsafe write to guides.ts: ${check.reason}`);
        return false;
    }

    fs.writeFileSync(GUIDES_FILE, src, "utf-8");
    return true;
}

async function main() {
    console.log("🚀 Starting Low-Token GSC SEO & CTR Booster Agent...");

    const cache = loadOptimizedCache();
    const guidesMap = extractGuidesMap();
    const targets: CandidateTarget[] = [];
    const seenRoutes = new Set<string>();

    // 1. Fetch real low-CTR opportunities from Google Search Console
    console.log("📊 Querying Google Search Console for low-CTR pages...");
    const gscPages = await fetchGscLowCtrPages(90, 25);
    console.log(`🔍 GSC returned ${gscPages.length} candidate low-CTR pages.`);

    for (const gscPage of gscPages) {
        if (targets.length >= MAX_PAGES_PER_RUN) break;
        if (isInCooldown(cache[gscPage.route])) continue;

        if (gscPage.route.startsWith("/guides/")) {
            const slug = gscPage.route.replace(/^\/guides\//, "");
            const guide = guidesMap.get(slug);
            if (guide) {
                targets.push({
                    route: gscPage.route,
                    kind: "guide",
                    filePath: GUIDES_FILE,
                    slug,
                    currentTitle: guide.title,
                    currentDescription: guide.description,
                    impressions: gscPage.impressions,
                    clicks: gscPage.clicks,
                    position: gscPage.position,
                    topQueries: gscPage.topQueries
                });
                seenRoutes.add(gscPage.route);
            }
        } else if (gscPage.route.startsWith("/areas/")) {
            const rel = gscPage.route.replace(/^\/areas\//, "");
            const filePath = path.join(AREAS_DIR, rel, "page.tsx");
            if (fs.existsSync(filePath)) {
                const meta = extractSpokeMeta(filePath);
                if (meta) {
                    targets.push({
                        route: gscPage.route,
                        kind: "spoke",
                        filePath,
                        slug: path.basename(path.dirname(filePath)),
                        currentTitle: meta.title,
                        currentDescription: meta.description,
                        impressions: gscPage.impressions,
                        clicks: gscPage.clicks,
                        position: gscPage.position,
                        topQueries: gscPage.topQueries
                    });
                    seenRoutes.add(gscPage.route);
                }
            }
        }
    }

    // 2. If fewer than 3 targets came from GSC (e.g., all top GSC pages in 14d cooldown), top up with unoptimized spoke pages
    if (targets.length < 3) {
        const spokeFiles = getSpokePageFiles(AREAS_DIR);
        for (const filePath of spokeFiles) {
            if (targets.length >= 3) break;
            const slug = path.basename(path.dirname(filePath));
            if (/scrap|junk|piruk|פירוק|גרוטא/i.test(slug)) continue;
            const route = "/areas/" + path.relative(AREAS_DIR, filePath).replace(/\\/g, "/").replace(/\/page\.tsx$/, "");
            if (seenRoutes.has(route) || isInCooldown(cache[route])) continue;

            const meta = extractSpokeMeta(filePath);
            if (meta && !meta.hasHighCtr) {
                targets.push({
                    route,
                    kind: "spoke",
                    filePath,
                    slug,
                    currentTitle: meta.title,
                    currentDescription: meta.description,
                    impressions: 0,
                    clicks: 0,
                    position: 0,
                    topQueries: []
                });
                seenRoutes.add(route);
            }
        }
    }

    if (targets.length === 0) {
        console.log("✅ All eligible GSC & spoke pages are within 14-day optimization cooldown. 0 tokens spent!");
        return;
    }

    console.log(`🎯 Selected ${targets.length} pages for single-batch CTR optimization:`);
    for (const t of targets) {
        console.log(`   - ${t.route} (imp: ${t.impressions}, clicks: ${t.clicks}, pos: ${t.position})`);
    }

    // 3. ONE single ultra-compact batched Gemini call (< 1,000 tokens total!)
    const compactPayload = targets.map((t) => ({
        route: t.route,
        currentTitle: t.currentTitle,
        currentDescription: t.currentDescription,
        topQueries: t.topQueries.map((q) => `${q.query} (${q.impressions} imp, pos ${q.position})`)
    }));

    const prompt = `You are a Hebrew Google Search CTR expert for "גרר מפרץ אקספרס" (Haifa & Krayot towing service, 054-917-4414, 25 min ETA, 4.9★, starting 150 ₪, NO motorcycles, NO scrap car buying).
Rewrite title & meta description for each page to maximize CTR (target 10%+) matching its real Google Search Console queries:
Rules:
- title: STRICTLY <= 55 chars Hebrew, no brand suffix, front-load the top GSC query + urgency/price/rating hook (e.g. "24/7", "תוך 25 דק'", "מ-150 ₪", "⭐ 4.9", "[2026]").
- description: 125-155 chars Hebrew answering the query + arrival time (25 דק') + rating (4.9★) + phone CTA "054-917-4414".
- Avoid unescaped double-quotes mid-Hebrew words (never write סופ"ש in unescaped quotes; spell out או השתמש בגרש יחיד).

Input pages:
${JSON.stringify(compactPayload)}

Return a JSON array of objects:
[{"route": "...", "title": "...", "description": "...", "reasoning": "short summary"}]`;

    const response = await model.generateContent(prompt);
    const cleaned = response.response
        .text()
        .replace(/```json\s*/gi, "")
        .replace(/```\s*/g, "")
        .trim();

    const results: GeminiBatchItem[] = JSON.parse(cleaned);
    const todayIso = new Date().toISOString().split("T")[0];
    const guideUpdates: Array<{ slug: string; title: string; description: string }> = [];

    for (const item of results) {
        const target = targets.find((t) => t.route === item.route);
        if (!target || !item.title || !item.description) continue;

        console.log(`\n✨ ${target.route}`);
        console.log(`   Title: "${item.title}"`);
        console.log(`   Desc:  "${item.description}"`);
        console.log(`   Why:   ${item.reasoning}`);

        if (IS_DRY_RUN) continue;

        if (target.kind === "guide") {
            guideUpdates.push({ slug: target.slug, title: item.title, description: item.description });
            cache[target.route] = todayIso;
        } else {
            const ok = updateSpokeFileMetadata(target.filePath, item.title, item.description);
            if (ok) {
                cache[target.route] = todayIso;
                console.log(`   ✅ Updated spoke file.`);
            }
        }
    }

    if (!IS_DRY_RUN && guideUpdates.length > 0) {
        const ok = updateGuideFileMetadata(guideUpdates);
        if (ok) {
            console.log(`\n✅ Updated ${guideUpdates.length} guides in src/lib/guides.ts.`);
        }
    }

    if (IS_DRY_RUN) {
        console.log("\n🧪 [DRY RUN] No files modified.");
    } else {
        saveOptimizedCache(cache);
        console.log("\n🏁 Low-Token GSC SEO & CTR Booster finished.");
    }
}

main().catch((err) => {
    console.error("❌ SEO Booster error:", err);
    process.exit(1);
});
