/**
 * Autonomous 4-Day Technical SEO & Content Expansion Engine
 *
 * Cycle flow:
 * 1. Pull latest 4 available GSC days vs preceding 28 days (`scripts/lib/gsc-client.ts`).
 * 2. Check Supabase `seo_cycles_log` (+ local fallback cache) to enforce 12-day per-URL cooldown.
 * 3. Use Gemini API to:
 *    - Upgrade Striking Distance pages (pos 5-20): title, meta description, H2, FAQPage items, internal links.
 *    - Rewrite Low-CTR Top 1-5 pages (<3% CTR): 24/7, fast arrival, fair price, 054-917-4414 hooks.
 *    - Create at most 1-2 rich Hebrew guides ONLY for uncovered GSC query clusters (no thin pSEO).
 * 4. Validate TypeScript/TSX syntax (`assertSafeToWrite`) and run Build Gate (`npm run lint` + `npm run build`).
 *    - On failure: rollback all modified files and log error to `seo_cycles_log`.
 *    - On success: log structured cycle results to `seo_cycles_log`, prepend `SEO_CHANGELOG.md`, and ping IndexNow.
 *
 * Usage:
 *   npx tsx scripts/autonomous-seo-cycle.ts
 *   npx tsx scripts/autonomous-seo-cycle.ts --dry-run
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { execSync } from "child_process";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";
import ts from "typescript";
import { CITIES, VEHICLES } from "../src/lib/data";
import { HAZARDS, NEIGHBORHOODS, ROADS, WARNING_LIGHTS } from "../src/lib/data-pseo";
import { GUIDES, type Guide, type GuideFAQ } from "../src/lib/guides";
import {
    fetchGscComparisonReport,
    type GscComparisonPage,
    type GscComparisonReport,
    type GscUncoveredCluster,
} from "./lib/gsc-client";
import { assertSafeToWrite } from "./lib/validate-code";

dotenv.config({ path: ".env.local" });

const IS_DRY_RUN = process.argv.includes("--dry-run");
const COOLDOWN_DAYS = 12;
const MAX_STRIKING_UPDATES = 3;
const MAX_LOW_CTR_UPDATES = 3;
const MAX_NEW_GUIDES = 2;
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://grar-haifa.vercel.app").replace(/\/$/, "");
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "9ff0a4d0411d84e78baa80b315ec684f";

const GUIDES_FILE = path.join(process.cwd(), "src", "lib", "guides.ts");
const CACHE_FILE = path.join(process.cwd(), ".cache", "seo-cycles-history.json");
const CHANGELOG_FILE = path.join(process.cwd(), "SEO_CHANGELOG.md");

const STATIC_ROUTE_FILES: Record<string, string> = {
    "/": path.join(process.cwd(), "src", "app", "page.tsx"),
    "/about": path.join(process.cwd(), "src", "app", "about", "page.tsx"),
    "/facts": path.join(process.cwd(), "src", "app", "facts", "page.tsx"),
    "/emergency-guide": path.join(process.cwd(), "src", "app", "emergency-guide", "page.tsx"),
    "/milon/towing-cost": path.join(process.cwd(), "src", "app", "milon", "towing-cost", "page.tsx"),
    "/areas": path.join(process.cwd(), "src", "app", "areas", "page.tsx"),
};

interface CycleActionOptimization {
    route: string;
    bucket: "striking_distance" | "low_ctr";
    title: string;
    description: string;
    h2SectionHtml?: string;
    addedFaqs?: GuideFAQ[];
    internalLinkSourceSlug?: string;
    internalLinkSentence?: string;
    reasoning: string;
}

interface NewGuidePlan {
    slug: string;
    title: string;
    description: string;
    category: string;
    readTime: string;
    content: string;
    faqs: GuideFAQ[];
    linkingGuideSlug?: string;
    linkingParagraphHtml?: string;
    reasoning: string;
}

interface CycleHistoryCache {
    urlTimestamps: Record<string, string>;
}

function getSupabaseClient(): SupabaseClient | null {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) return null;
    return createClient(url, key, { auth: { persistSession: false } });
}

function loadLocalCooldownCache(): Record<string, string> {
    if (!fs.existsSync(CACHE_FILE)) return {};
    try {
        const parsed = JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8")) as CycleHistoryCache;
        return parsed.urlTimestamps || {};
    } catch {
        return {};
    }
}

function saveLocalCooldownCache(timestamps: Record<string, string>) {
    fs.mkdirSync(path.dirname(CACHE_FILE), { recursive: true });
    const payload: CycleHistoryCache = { urlTimestamps: timestamps };
    fs.writeFileSync(CACHE_FILE, JSON.stringify(payload, null, 2), "utf-8");
}

function isWithinCooldown(lastIso: string | undefined): boolean {
    if (!lastIso) return false;
    const ms = Date.now() - new Date(lastIso).getTime();
    return ms < COOLDOWN_DAYS * 24 * 60 * 60 * 1000;
}

async function loadCooldownMap(supabase: SupabaseClient | null): Promise<Record<string, string>> {
    const merged: Record<string, string> = { ...loadLocalCooldownCache() };
    if (!supabase) return merged;

    const cutoffIso = new Date(Date.now() - COOLDOWN_DAYS * 24 * 60 * 60 * 1000).toISOString();
    const { data, error } = await supabase
        .from("seo_cycles_log")
        .select("cycle_started_at, optimized_urls, created_urls")
        .eq("status", "success")
        .gte("cycle_started_at", cutoffIso)
        .order("cycle_started_at", { ascending: false });

    if (error) {
        console.warn(`⚠️ Failed loading seo_cycles_log cooldowns from Supabase: ${error.message}`);
        return merged;
    }

    for (const row of data || []) {
        const tsIso = String(row.cycle_started_at);
        const urls = [...(row.optimized_urls || []), ...(row.created_urls || [])] as string[];
        for (const u of urls) {
            if (!merged[u] || tsIso > merged[u]) {
                merged[u] = tsIso;
            }
        }
    }
    return merged;
}

function buildCanonicalRoutesSet(): Set<string> {
    const routes = new Set<string>(["/", "/about", "/facts", "/emergency-guide", "/milon/towing-cost", "/areas", "/guides"]);
    for (const c of CITIES) {
        routes.add(`/${c.slug}`);
        for (const v of VEHICLES) {
            routes.add(`/${c.slug}/${v.slug}`);
        }
    }
    for (const h of HAZARDS) {
        routes.add(`/hazards/${h.slug}/haifa`);
        routes.add(`/hazards/${h.slug}/krayot`);
    }
    for (const l of WARNING_LIGHTS) {
        routes.add(`/warning-lights/${l.slug}/haifa`);
    }
    for (const n of NEIGHBORHOODS) {
        routes.add(`/locations/${n.city_slug}/${n.slug}`);
    }
    for (const r of ROADS) {
        routes.add(`/roads/${r.slug}`);
    }
    for (const g of GUIDES) {
        routes.add(`/guides/${g.slug}`);
    }
    return routes;
}

function getPropName(prop: ts.ObjectLiteralElementLike): string {
    if (ts.isPropertyAssignment(prop) && prop.name && (ts.isIdentifier(prop.name) || ts.isStringLiteral(prop.name))) {
        return prop.name.text;
    }
    return "";
}

function extractStaticPageMeta(filePath: string): { title: string; description: string } | null {
    if (!fs.existsSync(filePath)) return null;
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

    let title = "";
    if (titleProp && ts.isPropertyAssignment(titleProp)) {
        if (ts.isStringLiteralLike(titleProp.initializer)) {
            title = titleProp.initializer.text;
        } else if (ts.isObjectLiteralExpression(titleProp.initializer)) {
            const absProp = titleProp.initializer.properties.find((p) => getPropName(p) === "absolute");
            if (absProp && ts.isPropertyAssignment(absProp) && ts.isStringLiteralLike(absProp.initializer)) {
                title = absProp.initializer.text;
            }
        }
    }

    let description = "";
    if (descProp && ts.isPropertyAssignment(descProp) && ts.isStringLiteralLike(descProp.initializer)) {
        description = descProp.initializer.text;
    }

    return title && description ? { title, description } : null;
}

function updateStaticPageMetaSource(filePath: string, currentSrc: string, newTitle: string, newDesc: string): string | null {
    const sf = ts.createSourceFile(filePath, currentSrc, ts.ScriptTarget.Latest, true);
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
    if (!titleProp || !ts.isPropertyAssignment(titleProp) || !descProp || !ts.isPropertyAssignment(descProp)) {
        return null;
    }

    const titleIsObject = ts.isObjectLiteralExpression(titleProp.initializer);
    const edits = [
        {
            start: titleProp.initializer.getStart(sf),
            end: titleProp.initializer.getEnd(),
            text: titleIsObject ? `{ absolute: ${JSON.stringify(newTitle)} }` : JSON.stringify(newTitle),
        },
        {
            start: descProp.initializer.getStart(sf),
            end: descProp.initializer.getEnd(),
            text: JSON.stringify(newDesc),
        },
    ].sort((a, b) => b.start - a.start);

    let updated = currentSrc;
    for (const edit of edits) {
        updated = updated.slice(0, edit.start) + edit.text + updated.slice(edit.end);
    }
    return updated;
}

function containsBannedContent(text: string): boolean {
    return /גרירת אופנוע|שירותי גרירה לאופנוע|קונה רכבים לפירוק|גרוטאות/i.test(text);
}

function isBannedClusterTopic(cluster: GscUncoveredCluster): boolean {
    const combined = `${cluster.representativeQuery} ${cluster.relatedQueries.join(" ")}`.toLowerCase();
    if (/פירוק|גרוטא|אופנוע|קטנוע|scrap|junk|פתח תקווה|שגריר/.test(combined)) return true;
    // Block thin city x car-brand permutations
    const matchesBrand = /\b(toyota|mazda|hyundai|kia|skoda|seat|volkswagen|טויוטה|מאזדה|יונדאי|קיה|סקודה|סיאט)\b/.test(combined);
    const matchesCity = /חיפה|קריות|עכו|נשר|יקנעם|טבעון|רכסים|טירת כרמל/.test(combined);
    return matchesBrand && matchesCity;
}

async function generateJsonWithGemini<T>(prompt: string): Promise<T | null> {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.warn("⚠️ GEMINI_API_KEY missing; skipping AI generation.");
        return null;
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const preferredModel = process.env.GEMINI_MODEL || "gemini-2.5-flash";
    const candidates = Array.from(new Set([preferredModel, "gemini-3.1-flash-lite-preview"]));

    for (const modelName of candidates) {
        try {
            const model = genAI.getGenerativeModel({
                model: modelName,
                generationConfig: { responseMimeType: "application/json" },
            });
            const result = await model.generateContent(prompt);
            const raw = result.response.text().trim();
            const cleaned = raw.replace(/^```json\s*/i, "").replace(/```$/i, "").trim();
            return JSON.parse(cleaned) as T;
        } catch (err: any) {
            console.warn(`⚠️ Gemini call failed on model "${modelName}": ${err.message}`);
        }
    }
    return null;
}

function applyGuideArrayEdits(currentGuides: Guide[], newGuides: Guide[], sourceStr: string): string {
    const today = new Date().toISOString().split("T")[0];
    const sf = ts.createSourceFile(GUIDES_FILE, sourceStr, ts.ScriptTarget.Latest, true);
    let arrayLit: ts.ArrayLiteralExpression | null = null;

    sf.forEachChild((node) => {
        if (ts.isVariableStatement(node)) {
            const decl = node.declarationList.declarations[0];
            if (decl && ts.isIdentifier(decl.name) && decl.name.text === "GUIDES" && decl.initializer && ts.isArrayLiteralExpression(decl.initializer)) {
                arrayLit = decl.initializer;
            }
        }
    });

    if (!arrayLit) {
        throw new Error("Could not locate exported GUIDES array literal in src/lib/guides.ts");
    }

    const prefix = sourceStr.slice(0, (arrayLit as ts.ArrayLiteralExpression).getStart(sf));
    const suffix = sourceStr.slice((arrayLit as ts.ArrayLiteralExpression).getEnd());

    const merged = [...newGuides.map((g) => ({ ...g, publishDate: today })), ...currentGuides];
    const serialized = JSON.stringify(merged, null, 4);
    return `${prefix}${serialized}${suffix}`;
}

function recordBackup(backups: Map<string, string>, filePath: string) {
    if (!backups.has(filePath) && fs.existsSync(filePath)) {
        backups.set(filePath, fs.readFileSync(filePath, "utf-8"));
    }
}

function restoreBackups(backups: Map<string, string>) {
    for (const [filePath, original] of Array.from(backups.entries())) {
        fs.writeFileSync(filePath, original, "utf-8");
    }
}

function runCommandChecked(command: string): { ok: true } | { ok: false; output: string } {
    try {
        execSync(command, { stdio: "pipe", encoding: "utf-8" });
        return { ok: true };
    } catch (err: any) {
        const stdout = String(err.stdout || "");
        const stderr = String(err.stderr || "");
        return { ok: false, output: `${stdout}\n${stderr}`.trim().slice(-2500) };
    }
}

function formatChangelogSection(params: {
    startedAt: string;
    report: GscComparisonReport;
    optimizedUrls: string[];
    createdUrls: string[];
    skippedCooldownUrls: string[];
    optimizations: CycleActionOptimization[];
    createdGuides: NewGuidePlan[];
}): string {
    const dateLabel = params.startedAt.slice(0, 16).replace("T", " ");
    const r = params.report.recentWindow;
    const b = params.report.baselineWindow;

    const lines: string[] = [
        `## מחזור אופטימיזציה אוטונומי — ${dateLabel} UTC`,
        "",
        `- **נתוני GSC (4 ימים אחרונים ${r.startDate}..${r.endDate}):** ${r.clicks} קליקים, ${r.impressions} חשיפות, CTR ${(r.avgCtr * 100).toFixed(2)}%, מיקום ממוצע ${r.avgPosition}`,
        `- **בסיס השוואה (28 ימים ${b.startDate}..${b.endDate}):** ${b.clicks} קליקים, ${b.impressions} חשיפות, CTR ${(b.avgCtr * 100).toFixed(2)}%, מיקום ממוצע ${b.avgPosition}`,
        `- **עמודים ששודרגו (${params.optimizedUrls.length}):** ${params.optimizedUrls.length ? params.optimizedUrls.join(", ") : "ללא שינוי"}`,
        `- **עמודים חדשים שנוצרו (${params.createdUrls.length}):** ${params.createdUrls.length ? params.createdUrls.join(", ") : "ללא (אין אשכולות חסרים מתאימים)"}`,
        `- **דילוג צינון 12 יום (${params.skippedCooldownUrls.length}):** ${params.skippedCooldownUrls.length ? params.skippedCooldownUrls.join(", ") : "ללא"}`,
    ];

    if (params.optimizations.length > 0) {
        lines.push("", "### פירוט שינויי אופטימיזציה:");
        for (const opt of params.optimizations) {
            lines.push(`- \`${opt.route}\` [${opt.bucket}]: ${opt.title} — ${opt.reasoning}`);
        }
    }

    if (params.createdGuides.length > 0) {
        lines.push("", "### מדריכים חדשים מבוססי דאטה:");
        for (const g of params.createdGuides) {
            lines.push(`- \`/guides/${g.slug}\`: ${g.title} — ${g.reasoning}`);
        }
    }

    lines.push("", "---", "");
    return lines.join("\n");
}

async function pingIndexNow(routes: string[]) {
    if (routes.length === 0) return;
    const host = new URL(SITE_URL).host;
    const urlList = Array.from(
        new Set([...routes.map((r) => `${SITE_URL}${r}`), `${SITE_URL}/sitemap.xml`, `${SITE_URL}/llms.txt`])
    );
    try {
        const res = await fetch("https://api.indexnow.org/indexnow", {
            method: "POST",
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify({
                host,
                key: INDEXNOW_KEY,
                keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
                urlList,
            }),
        });
        console.log(`📡 IndexNow submitted ${urlList.length} URLs -> HTTP ${res.status}`);
    } catch (err: any) {
        console.warn(`⚠️ IndexNow notification skipped: ${err.message}`);
    }
}

async function insertCycleLog(
    supabase: SupabaseClient | null,
    payload: Record<string, unknown>
) {
    if (!supabase) return;
    const { error } = await supabase.from("seo_cycles_log").insert(payload);
    if (error) {
        console.warn(`⚠️ Failed to insert into Supabase seo_cycles_log: ${error.message}`);
    }
}

async function main() {
    const cycleStartedAt = new Date().toISOString();
    console.log(`🚀 Starting Autonomous 4-Day SEO Cycle (${IS_DRY_RUN ? "DRY RUN" : "LIVE"})...`);

    const supabase = getSupabaseClient();
    const cooldownMap = await loadCooldownMap(supabase);
    const canonicalRoutes = buildCanonicalRoutesSet();

    const existingCorpusTexts = [
        ...GUIDES.map((g) => `${g.slug} ${g.title} ${g.description} ${g.content.replace(/<[^>]+>/g, " ")}`),
        ...Object.keys(STATIC_ROUTE_FILES).map((r) => {
            const meta = extractStaticPageMeta(STATIC_ROUTE_FILES[r]);
            return meta ? `${r} ${meta.title} ${meta.description}` : r;
        }),
    ];

    const report = await fetchGscComparisonReport(existingCorpusTexts, canonicalRoutes);
    if (!report) {
        const msg = "GSC report unavailable (missing GCP_SA_KEY or API failure).";
        console.warn(`⚠️ ${msg}`);
        if (!IS_DRY_RUN) {
            await insertCycleLog(supabase, {
                cycle_started_at: cycleStartedAt,
                cycle_completed_at: new Date().toISOString(),
                status: "skipped",
                build_passed: false,
                error_message: msg,
            });
        }
        return;
    }

    console.log(
        `📊 GSC 4d (${report.recentWindow.startDate}..${report.recentWindow.endDate}): ` +
        `${report.recentWindow.clicks} clicks, ${report.recentWindow.impressions} imp | ` +
        `28d (${report.baselineWindow.startDate}..${report.baselineWindow.endDate}): ` +
        `${report.baselineWindow.clicks} clicks, ${report.baselineWindow.impressions} imp`
    );

    const skippedCooldownUrls: string[] = [];
    const filterCooldown = (pages: GscComparisonPage[], maxCount: number): GscComparisonPage[] => {
        const selected: GscComparisonPage[] = [];
        for (const p of pages) {
            const isEditableGuide = p.route.startsWith("/guides/") && GUIDES.some((g) => `/guides/${g.slug}` === p.route);
            const isEditableStatic = Boolean(STATIC_ROUTE_FILES[p.route]);
            if (!isEditableGuide && !isEditableStatic) continue;

            if (isWithinCooldown(cooldownMap[p.route])) {
                skippedCooldownUrls.push(p.route);
                continue;
            }
            selected.push(p);
            if (selected.length >= maxCount) break;
        }
        return selected;
    };

    const strikingTargets = filterCooldown(report.strikingDistance, MAX_STRIKING_UPDATES);
    const strikingRoutes = new Set(strikingTargets.map((t) => t.route));
    const lowCtrTargets = filterCooldown(
        report.lowCtrTopPositions.filter((p) => !strikingRoutes.has(p.route)),
        MAX_LOW_CTR_UPDATES
    );

    const uncoveredCandidates = report.uncoveredClusters
        .filter((c) => !isBannedClusterTopic(c))
        .slice(0, MAX_NEW_GUIDES);

    console.log(
        `🎯 Targets: ${strikingTargets.length} Striking Distance, ${lowCtrTargets.length} Low-CTR Top 1-5, ` +
        `${uncoveredCandidates.length} Uncovered Query Clusters (${skippedCooldownUrls.length} skipped by 12d cooldown)`
    );

    const buildCandidateContext = (p: GscComparisonPage, bucket: "striking_distance" | "low_ctr") => {
        if (p.route.startsWith("/guides/")) {
            const g = GUIDES.find((item) => `/guides/${item.slug}` === p.route);
            return {
                route: p.route,
                bucket,
                kind: "guide",
                currentTitle: g?.title || "",
                currentDescription: g?.description || "",
                existingFaqs: (g?.faqs || []).map((f) => f.question),
                impressions28d: p.baselineImpressions + p.recentImpressions,
                position: p.recentPosition || p.baselinePosition,
                ctrPercent: Number((((p.recentClicks + p.baselineClicks) / Math.max(1, p.recentImpressions + p.baselineImpressions)) * 100).toFixed(2)),
                topQueries: p.topQueries,
            };
        }
        const staticMeta = extractStaticPageMeta(STATIC_ROUTE_FILES[p.route]);
        return {
            route: p.route,
            bucket,
            kind: "static",
            currentTitle: staticMeta?.title || "",
            currentDescription: staticMeta?.description || "",
            impressions28d: p.baselineImpressions + p.recentImpressions,
            position: p.recentPosition || p.baselinePosition,
            ctrPercent: Number((((p.recentClicks + p.baselineClicks) / Math.max(1, p.recentImpressions + p.baselineImpressions)) * 100).toFixed(2)),
            topQueries: p.topQueries,
        };
    };

    const allOptimizationInputs = [
        ...strikingTargets.map((p) => buildCandidateContext(p, "striking_distance")),
        ...lowCtrTargets.map((p) => buildCandidateContext(p, "low_ctr")),
    ];

    let optimizations: CycleActionOptimization[] = [];
    if (allOptimizationInputs.length > 0) {
        const availableSourceGuides = GUIDES.map((g) => ({ slug: g.slug, title: g.title }));
        const optPrompt = `
You are an elite Hebrew Technical SEO engineer for "גרר מפרץ אקספרס" (Towing in Haifa, Krayot, Tirat Carmel, Nesher, Akko, 24/7, fast 25-30 min arrival, fair upfront pricing, phone: 054-917-4414).
Rules:
1. NO motorcycles towing (אופנועים) and NO scrap car buying (פירוק/גרוטאות).
2. NEVER put unescaped double quotes inside JSON strings or Hebrew גרשיים in double-quoted contexts (use single apostrophe ' or clean wording like 25 דק').
3. Titles <= 55 chars in Hebrew. Descriptions <= 155 chars in Hebrew and MUST include 24/7, arrival speed or fair price, and 054-917-4414.
4. For "striking_distance" guides (kind === "guide"): also provide h2SectionHtml (rich Hebrew <h3>/<p>/<ul> answering topQueries), 1-2 new addedFaqs based on topQueries, and pick one internalLinkSourceSlug from availableSourceGuides with a short <p> internalLinkSentence linking to that route.
5. For "low_ctr" items (pos 1-5): rewrite title & description to maximize clicks with urgency, 24/7 reliability, and 054-917-4414.

Targets:
${JSON.stringify(allOptimizationInputs, null, 2)}

availableSourceGuides:
${JSON.stringify(availableSourceGuides)}

Return JSON:
{
  "optimizations": [
    {
      "route": "...",
      "bucket": "striking_distance" | "low_ctr",
      "title": "...",
      "description": "...",
      "h2SectionHtml": "...",
      "addedFaqs": [{ "question": "...", "answer": "..." }],
      "internalLinkSourceSlug": "...",
      "internalLinkSentence": "<p>...</p>",
      "reasoning": "..."
    }
  ]
}`;
        const aiOpt = await generateJsonWithGemini<{ optimizations?: CycleActionOptimization[] }>(optPrompt);
        optimizations = (aiOpt?.optimizations || []).filter(
            (o) => !containsBannedContent(`${o.title} ${o.description} ${o.h2SectionHtml || ""}`)
        );
    }

    let createdGuides: NewGuidePlan[] = [];
    if (uncoveredCandidates.length > 0) {
        const existingGuideSlugs = GUIDES.map((g) => g.slug);
        const expansionPrompt = `
You are expanding content ONLY for uncovered Hebrew search clusters with proven GSC impressions for "גרר מפרץ אקספרס" (Haifa, Krayot, Tirat Carmel, Nesher, Akko, phone 054-917-4414).
Rules:
1. Output at most ${MAX_NEW_GUIDES} comprehensive Hebrew guides covering distinct uncovered query clusters below. Do NOT duplicate existing slugs: ${existingGuideSlugs.join(", ")}.
2. NO thin pSEO templates (no city x brand matrices), NO motorcycles, NO scrap buying.
3. Each guide MUST have:
   - slug: ASCII kebab-case (max 60 chars)
   - title: <= 55 chars Hebrew
   - description: <= 155 chars Hebrew including 24/7 + 054-917-4414
   - content: Rich Hebrew HTML (>= 350 words) with <h2>, <ol> action steps, a <table> with prices/times/comparison, and internal links (<a href="/haifa">, <a href="/milon/towing-cost">, etc.)
   - faqs: 3 real Q&As for FAQPage schema
   - linkingGuideSlug + linkingParagraphHtml: pick an existing guide slug to link to /guides/<new-slug>

Uncovered Clusters:
${JSON.stringify(uncoveredCandidates, null, 2)}

Existing guides for linking:
${JSON.stringify(GUIDES.slice(0, 12).map((g) => ({ slug: g.slug, title: g.title })))}

Return JSON:
{
  "guides": [
    {
      "slug": "...",
      "title": "...",
      "description": "...",
      "category": "...",
      "readTime": "5 דקות",
      "content": "...",
      "faqs": [{ "question": "...", "answer": "..." }],
      "linkingGuideSlug": "...",
      "linkingParagraphHtml": "<p>...</p>",
      "reasoning": "..."
    }
  ]
}`;
        const aiExp = await generateJsonWithGemini<{ guides?: NewGuidePlan[] }>(expansionPrompt);
        createdGuides = (aiExp?.guides || [])
            .filter((g) => /^[a-z0-9-]+$/.test(g.slug) && !existingGuideSlugs.includes(g.slug))
            .filter((g) => !containsBannedContent(`${g.title} ${g.description} ${g.content}`))
            .slice(0, MAX_NEW_GUIDES);
    }

    if (IS_DRY_RUN) {
        console.log("\n🧪 DRY RUN SUMMARY (no files written, no DB writes):");
        console.log(JSON.stringify({
            recentWindow: report.recentWindow,
            baselineWindow: report.baselineWindow,
            strikingTargets: strikingTargets.map((p) => p.route),
            lowCtrTargets: lowCtrTargets.map((p) => p.route),
            skippedCooldownUrls,
            uncoveredCandidates,
            plannedOptimizationsCount: optimizations.length,
            plannedNewGuidesCount: createdGuides.length,
        }, null, 2));
        return;
    }

    const backups = new Map<string, string>();
    const optimizedUrls: string[] = [];
    const createdUrls: string[] = [];

    try {
        const workingGuides: Guide[] = GUIDES.map((g) => ({
            ...g,
            faqs: g.faqs ? [...g.faqs] : undefined,
        }));
        let guidesModified = false;

        for (const opt of optimizations) {
            if (opt.route.startsWith("/guides/")) {
                const slug = opt.route.replace("/guides/", "");
                const targetGuide = workingGuides.find((g) => g.slug === slug);
                if (!targetGuide) continue;

                targetGuide.title = opt.title.slice(0, 60).trim();
                targetGuide.description = opt.description.slice(0, 160).trim();
                targetGuide.publishDate = new Date().toISOString().split("T")[0];

                if (opt.h2SectionHtml && !targetGuide.content.includes(opt.h2SectionHtml.slice(0, 30))) {
                    targetGuide.content = `${targetGuide.content}\n${opt.h2SectionHtml}`;
                }
                if (opt.addedFaqs && opt.addedFaqs.length > 0) {
                    const existingQs = new Set((targetGuide.faqs || []).map((f) => f.question));
                    const freshFaqs = opt.addedFaqs.filter((f) => !existingQs.has(f.question));
                    targetGuide.faqs = [...(targetGuide.faqs || []), ...freshFaqs];
                }
                if (opt.internalLinkSourceSlug && opt.internalLinkSentence && opt.internalLinkSourceSlug !== slug) {
                    const srcGuide = workingGuides.find((g) => g.slug === opt.internalLinkSourceSlug);
                    if (srcGuide && !srcGuide.content.includes(`/guides/${slug}`)) {
                        srcGuide.content = `${srcGuide.content}\n${opt.internalLinkSentence}`;
                    }
                }
                guidesModified = true;
                optimizedUrls.push(opt.route);
            } else if (STATIC_ROUTE_FILES[opt.route]) {
                const filePath = STATIC_ROUTE_FILES[opt.route];
                const currentSrc = fs.readFileSync(filePath, "utf-8");
                const nextSrc = updateStaticPageMetaSource(filePath, currentSrc, opt.title, opt.description);
                if (nextSrc && nextSrc !== currentSrc) {
                    const safety = assertSafeToWrite(nextSrc, filePath);
                    if (!safety.ok) {
                        throw new Error(`Unsafe TSX edit rejected for ${filePath}: ${safety.reason}`);
                    }
                    recordBackup(backups, filePath);
                    fs.writeFileSync(filePath, nextSrc, "utf-8");
                    optimizedUrls.push(opt.route);
                }
            }
        }

        const newGuideObjects: Guide[] = [];
        for (const plan of createdGuides) {
            const guideObj: Guide = {
                slug: plan.slug,
                title: plan.title.slice(0, 60).trim(),
                description: plan.description.slice(0, 160).trim(),
                category: plan.category || "מדריכי חילוץ",
                publishDate: new Date().toISOString().split("T")[0],
                readTime: plan.readTime || "5 דקות",
                author: "אביעד סטין",
                faqs: plan.faqs || [],
                content: plan.content,
            };
            newGuideObjects.push(guideObj);
            createdUrls.push(`/guides/${plan.slug}`);

            if (plan.linkingGuideSlug && plan.linkingParagraphHtml) {
                const linker = workingGuides.find((g) => g.slug === plan.linkingGuideSlug);
                if (linker && !linker.content.includes(`/guides/${plan.slug}`)) {
                    linker.content = `${linker.content}\n${plan.linkingParagraphHtml}`;
                }
            }
            guidesModified = true;
        }

        if (guidesModified) {
            const guidesSrc = fs.readFileSync(GUIDES_FILE, "utf-8");
            const nextGuidesSrc = applyGuideArrayEdits(workingGuides, newGuideObjects, guidesSrc);
            const safety = assertSafeToWrite(nextGuidesSrc, GUIDES_FILE);
            if (!safety.ok) {
                throw new Error(`Unsafe guides.ts edit rejected: ${safety.reason}`);
            }
            recordBackup(backups, GUIDES_FILE);
            fs.writeFileSync(GUIDES_FILE, nextGuidesSrc, "utf-8");
        }

        // Run Build Gate whenever source files changed
        if (backups.size > 0) {
            console.log("🔍 Running Build Gate: npm run lint + npm run build...");
            const lintRes = runCommandChecked("npm run lint --no-progress --no-audit --no-fund --loglevel=error");
            if (!lintRes.ok) {
                throw new Error(`npm run lint failed:\n${lintRes.output}`);
            }
            const buildRes = runCommandChecked("npm run build --no-progress --no-audit --no-fund --loglevel=error");
            if (!buildRes.ok) {
                throw new Error(`npm run build failed:\n${buildRes.output}`);
            }
            console.log("✅ Build Gate passed!");
        } else {
            console.log("ℹ️ No code changes needed this cycle; Build Gate skipped.");
        }

        // Persist cooldowns + SEO_CHANGELOG.md + Supabase success log
        const nowIso = new Date().toISOString();
        const nextCache = { ...cooldownMap };
        for (const u of [...optimizedUrls, ...createdUrls]) {
            nextCache[u] = nowIso;
        }
        saveLocalCooldownCache(nextCache);

        const changelogEntry = formatChangelogSection({
            startedAt: cycleStartedAt,
            report,
            optimizedUrls,
            createdUrls,
            skippedCooldownUrls,
            optimizations,
            createdGuides,
        });
        const existingChangelog = fs.existsSync(CHANGELOG_FILE) ? fs.readFileSync(CHANGELOG_FILE, "utf-8") : "";
        const header = "# יומן בקרה ושינויי SEO אוטונומי — גרר מפרץ אקספרס\n\n";
        const bodyWithoutHeader = existingChangelog.startsWith(header)
            ? existingChangelog.slice(header.length)
            : existingChangelog;
        fs.writeFileSync(CHANGELOG_FILE, `${header}${changelogEntry}${bodyWithoutHeader}`, "utf-8");

        await insertCycleLog(supabase, {
            cycle_started_at: cycleStartedAt,
            cycle_completed_at: nowIso,
            status: "success",
            gsc_window_recent: report.recentWindow,
            gsc_window_baseline: report.baselineWindow,
            insights_summary: {
                striking_distance_count: report.strikingDistance.length,
                low_ctr_count: report.lowCtrTopPositions.length,
                uncovered_clusters: report.uncoveredClusters,
                llms_txt_synced: true,
                optimizations,
                created_guides: createdGuides.map((g) => ({ slug: g.slug, title: g.title, reasoning: g.reasoning })),
            },
            optimized_urls: optimizedUrls,
            created_urls: createdUrls,
            added_redirects: [],
            skipped_cooldown_urls: skippedCooldownUrls,
            build_passed: true,
            error_message: null,
        });

        await pingIndexNow([...optimizedUrls, ...createdUrls]);
        console.log(`🎉 Autonomous SEO Cycle complete. Optimized: ${optimizedUrls.length}, Created: ${createdUrls.length}.`);
    } catch (err: any) {
        console.error(`❌ SEO Cycle failed; rolling back ${backups.size} modified file(s):`, err.message);
        restoreBackups(backups);
        await insertCycleLog(supabase, {
            cycle_started_at: cycleStartedAt,
            cycle_completed_at: new Date().toISOString(),
            status: "failed",
            gsc_window_recent: report.recentWindow,
            gsc_window_baseline: report.baselineWindow,
            insights_summary: {
                striking_distance_count: report.strikingDistance.length,
                low_ctr_count: report.lowCtrTopPositions.length,
                uncovered_clusters: report.uncoveredClusters,
            },
            optimized_urls: [],
            created_urls: [],
            skipped_cooldown_urls: skippedCooldownUrls,
            build_passed: false,
            error_message: String(err.message || err).slice(0, 4000),
        });
        process.exit(1);
    }
}

main().catch((err) => {
    console.error("Fatal error:", err);
    process.exit(1);
});
