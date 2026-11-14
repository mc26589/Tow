import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';

const SITE_URL = 'https://grar-haifa.vercel.app/';
const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GSC_SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';

interface ServiceAccountKey {
    client_email: string;
    private_key: string;
}

export interface GscQueryMetric {
    query: string;
    impressions: number;
    clicks: number;
    position: number;
}

export interface GscPageOpportunity {
    route: string;
    impressions: number;
    clicks: number;
    ctr: number;
    position: number;
    topQueries: GscQueryMetric[];
}

export interface GscTopicCandidate {
    topic: string;
    impressions: number;
    position: number;
}

function loadServiceAccountKey(): ServiceAccountKey | null {
    const envRaw = process.env.GCP_SA_KEY;
    if (envRaw && envRaw.trim()) {
        try {
            const parsed = JSON.parse(envRaw);
            if (parsed.client_email && parsed.private_key) return parsed;
        } catch {
            try {
                const decoded = Buffer.from(envRaw, 'base64').toString('utf8');
                const parsed = JSON.parse(decoded);
                if (parsed.client_email && parsed.private_key) return parsed;
            } catch {
                // ignore invalid base64/json
            }
        }
    }

    const keyPath = path.join(process.cwd(), 'google-indexer', 'service-account-keys.json');
    if (fs.existsSync(keyPath)) {
        try {
            const parsed = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
            if (parsed.client_email && parsed.private_key) return parsed;
        } catch {
            return null;
        }
    }
    return null;
}

function base64UrlEncode(input: Buffer | string): string {
    const buf = typeof input === 'string' ? Buffer.from(input, 'utf8') : input;
    return buf.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

async function getAccessToken(): Promise<string | null> {
    const sa = loadServiceAccountKey();
    if (!sa) return null;

    const now = Math.floor(Date.now() / 1000);
    const header = base64UrlEncode(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
    const payload = base64UrlEncode(
        JSON.stringify({
            iss: sa.client_email,
            scope: GSC_SCOPE,
            aud: TOKEN_URL,
            exp: now + 3600,
            iat: now,
        })
    );

    const signingInput = `${header}.${payload}`;
    const signer = crypto.createSign('RSA-SHA256');
    signer.update(signingInput);
    const signature = base64UrlEncode(signer.sign(sa.private_key));
    const jwt = `${signingInput}.${signature}`;

    const resp = await fetch(TOKEN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            assertion: jwt,
        }),
    });

    if (!resp.ok) {
        const errText = await resp.text();
        throw new Error(`GSC OAuth error (${resp.status}): ${errText}`);
    }

    const data = (await resp.json()) as { access_token?: string };
    return data.access_token || null;
}

interface SearchAnalyticsRow {
    keys: string[];
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
}

async function queryGsc(accessToken: string, body: Record<string, unknown>): Promise<SearchAnalyticsRow[]> {
    const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/searchAnalytics/query`;
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (!resp.ok) {
        const errText = await resp.text();
        throw new Error(`GSC API error (${resp.status}): ${errText}`);
    }

    const data = (await resp.json()) as { rows?: SearchAnalyticsRow[] };
    return data.rows || [];
}

function formatDateDaysAgo(days: number): string {
    const d = new Date();
    d.setDate(d.getDate() - days);
    return d.toISOString().split('T')[0];
}

function normalizeRoute(fullUrl: string): string {
    if (fullUrl === SITE_URL || fullUrl === SITE_URL.slice(0, -1)) return '/';
    return '/' + fullUrl.replace(SITE_URL, '').replace(/^\/+/, '');
}

function isOffBrandScrap(str: string): boolean {
    return /scrap|junk|piruk|פירוק|גרוטא/i.test(str);
}

/**
 * Fetches real Google Search Console low-CTR pages alongside their top ranking queries.
 * Designed for low-token batched SEO/CTR optimization.
 */
export async function fetchGscLowCtrPages(days = 90, limit = 15): Promise<GscPageOpportunity[]> {
    try {
        const token = await getAccessToken();
        if (!token) return [];

        const startDate = formatDateDaysAgo(days);
        const endDate = formatDateDaysAgo(2); // GSC data usually lags ~2 days

        const [pageRows, qpRows] = await Promise.all([
            queryGsc(token, { startDate, endDate, dimensions: ['page'], rowLimit: 500 }),
            queryGsc(token, { startDate, endDate, dimensions: ['query', 'page'], rowLimit: 2500 }),
        ]);

        const queriesByRoute = new Map<string, GscQueryMetric[]>();
        for (const r of qpRows) {
            const route = normalizeRoute(r.keys[1]);
            const list = queriesByRoute.get(route) || [];
            list.push({
                query: r.keys[0],
                impressions: r.impressions,
                clicks: r.clicks,
                position: Number(r.position.toFixed(1)),
            });
            queriesByRoute.set(route, list);
        }

        const opportunities: Array<GscPageOpportunity & { score: number }> = [];

        for (const r of pageRows) {
            const route = normalizeRoute(r.keys[0]);
            if (isOffBrandScrap(route)) continue;
            if (r.impressions < 5) continue;
            if (r.ctr >= 0.08) continue; // Already >= 8% CTR

            const topQueries = (queriesByRoute.get(route) || [])
                .sort((a, b) => b.impressions - a.impressions)
                .slice(0, 5);

            // Striking distance (pos 2-30) gets 2.5x priority over deep pages
            const strikingWeight = r.position >= 2 && r.position <= 30 ? 2.5 : 1;
            const ctrGap = 1 - Math.min(r.ctr, 0.1) / 0.1;
            const score = r.impressions * strikingWeight * ctrGap;

            opportunities.push({
                route,
                impressions: r.impressions,
                clicks: r.clicks,
                ctr: r.ctr,
                position: Number(r.position.toFixed(1)),
                topQueries,
                score,
            });
        }

        return opportunities
            .sort((a, b) => b.score - a.score)
            .slice(0, limit)
            .map(({ score: _score, ...rest }) => rest);
    } catch (err: any) {
        console.warn(`⚠️ GSC fetchGscLowCtrPages failed: ${err.message}`);
        return [];
    }
}

/**
 * Finds real GSC search queries where the site already earns impressions (pos 5-45)
 * with 0 clicks and no dedicated guide yet — ideal low-cost blog article topics.
 */
export async function fetchGscTrendingTopicCandidates(existingTexts: string[], limit = 10): Promise<GscTopicCandidate[]> {
    try {
        const token = await getAccessToken();
        if (!token) return [];

        const startDate = formatDateDaysAgo(90);
        const endDate = formatDateDaysAgo(2);

        const rows = await queryGsc(token, {
            startDate,
            endDate,
            dimensions: ['query'],
            rowLimit: 500,
        });

        const normalizedExisting = existingTexts.map((t) => t.toLowerCase());
        const irrelevantPattern = /פתח תקווה|שגריר|5w30|פירוק|גרוטא|scrap|junk/i;

        const candidates: GscTopicCandidate[] = [];
        for (const r of rows) {
            const q = r.keys[0].trim();
            if (q.length < 4 || q.startsWith('"')) continue;
            if (isOffBrandScrap(q) || irrelevantPattern.test(q)) continue;
            if (r.impressions < 3 || r.clicks > 0) continue;
            if (r.position < 4 || r.position > 45) continue;

            const qLower = q.toLowerCase();
            const isCovered = normalizedExisting.some((title) => title.includes(qLower));
            if (isCovered) continue;

            candidates.push({
                topic: q,
                impressions: r.impressions,
                position: Number(r.position.toFixed(1)),
            });
        }

        return candidates.sort((a, b) => b.impressions - a.impressions).slice(0, limit);
    } catch (err: any) {
        console.warn(`⚠️ GSC fetchGscTrendingTopicCandidates failed: ${err.message}`);
        return [];
    }
}

export interface GscWindowSummary {
    startDate: string;
    endDate: string;
    clicks: number;
    impressions: number;
    avgCtr: number;
    avgPosition: number;
    activePages: number;
}

export interface GscComparisonPage {
    route: string;
    recentClicks: number;
    recentImpressions: number;
    recentCtr: number;
    recentPosition: number;
    baselineClicks: number;
    baselineImpressions: number;
    baselineCtr: number;
    baselinePosition: number;
    positionDelta: number; // positive = improved (moved closer to 1)
    topQueries: GscQueryMetric[];
}

export interface GscUncoveredCluster {
    representativeQuery: string;
    relatedQueries: string[];
    totalImpressions: number;
    bestPosition: number;
}

export interface GscComparisonReport {
    recentWindow: GscWindowSummary;
    baselineWindow: GscWindowSummary;
    strikingDistance: GscComparisonPage[];
    lowCtrTopPositions: GscComparisonPage[];
    uncoveredClusters: GscUncoveredCluster[];
    allBaselinePages: GscComparisonPage[];
}

function isIrrelevantOrBannedQuery(q: string): boolean {
    return /scrap|junk|piruk|פירוק|גרוטא|אופנוע|קטנוע|motorcycle|פתח תקווה|שגריר|מוקד תנועה/i.test(q);
}

function aggregateWindowStats(rows: SearchAnalyticsRow[], startDate: string, endDate: string): GscWindowSummary {
    const valid = rows.filter((r) => !isOffBrandScrap(normalizeRoute(r.keys[0])));
    const clicks = valid.reduce((sum, r) => sum + r.clicks, 0);
    const impressions = valid.reduce((sum, r) => sum + r.impressions, 0);
    const weightedPos = impressions > 0
        ? valid.reduce((sum, r) => sum + r.position * r.impressions, 0) / impressions
        : 0;
    return {
        startDate,
        endDate,
        clicks,
        impressions,
        avgCtr: impressions > 0 ? Number((clicks / impressions).toFixed(4)) : 0,
        avgPosition: Number(weightedPos.toFixed(2)),
        activePages: valid.length,
    };
}

/**
 * Fetches latest 4 available GSC days vs preceding 28 days, classifies Striking Distance (pos 5-20),
 * Low-CTR Top 1-5 (<3% CTR), and uncovered Hebrew query clusters.
 */
export async function fetchGscComparisonReport(
    existingCorpusTexts: string[],
    canonicalRoutes?: Set<string>
): Promise<GscComparisonReport | null> {
    const token = await getAccessToken();
    if (!token) {
        console.warn('⚠️ No GSC credentials found (GCP_SA_KEY or google-indexer/service-account-keys.json).');
        return null;
    }

    // GSC usually lags ~2-3 days; compare latest 4 available days vs preceding 28 days
    const recentEnd = formatDateDaysAgo(3);
    const recentStart = formatDateDaysAgo(6);
    const baselineEnd = formatDateDaysAgo(7);
    const baselineStart = formatDateDaysAgo(34);

    const [recentPages, baselinePages, combinedQueryPageRows, combinedQueryRows] = await Promise.all([
        queryGsc(token, { startDate: recentStart, endDate: recentEnd, dimensions: ['page'], rowLimit: 500 }),
        queryGsc(token, { startDate: baselineStart, endDate: baselineEnd, dimensions: ['page'], rowLimit: 1000 }),
        queryGsc(token, { startDate: baselineStart, endDate: recentEnd, dimensions: ['query', 'page'], rowLimit: 2500 }),
        queryGsc(token, { startDate: baselineStart, endDate: recentEnd, dimensions: ['query'], rowLimit: 1000 }),
    ]);

    const recentWindow = aggregateWindowStats(recentPages, recentStart, recentEnd);
    const baselineWindow = aggregateWindowStats(baselinePages, baselineStart, baselineEnd);

    const recentByRoute = new Map<string, SearchAnalyticsRow>();
    for (const r of recentPages) {
        const route = normalizeRoute(r.keys[0]);
        if (!isOffBrandScrap(route)) recentByRoute.set(route, r);
    }

    const baselineByRoute = new Map<string, SearchAnalyticsRow>();
    for (const r of baselinePages) {
        const route = normalizeRoute(r.keys[0]);
        if (!isOffBrandScrap(route)) baselineByRoute.set(route, r);
    }

    const queriesByRoute = new Map<string, GscQueryMetric[]>();
    for (const r of combinedQueryPageRows) {
        const query = r.keys[0].trim();
        const route = normalizeRoute(r.keys[1]);
        if (isIrrelevantOrBannedQuery(query) || isOffBrandScrap(route)) continue;
        const list = queriesByRoute.get(route) || [];
        list.push({
            query,
            impressions: r.impressions,
            clicks: r.clicks,
            position: Number(r.position.toFixed(1)),
        });
        queriesByRoute.set(route, list);
    }

    const allRoutes = Array.from(
        new Set<string>([...Array.from(recentByRoute.keys()), ...Array.from(baselineByRoute.keys())])
    );
    const allPages: GscComparisonPage[] = [];

    for (const route of allRoutes) {
        if (canonicalRoutes && canonicalRoutes.size > 0 && !canonicalRoutes.has(route)) {
            continue;
        }
        const rec = recentByRoute.get(route);
        const base = baselineByRoute.get(route);
        const recPos = rec ? Number(rec.position.toFixed(1)) : 0;
        const basePos = base ? Number(base.position.toFixed(1)) : 0;

        const topQueries = (queriesByRoute.get(route) || [])
            .sort((a, b) => b.impressions - a.impressions)
            .slice(0, 8);

        allPages.push({
            route,
            recentClicks: rec?.clicks ?? 0,
            recentImpressions: rec?.impressions ?? 0,
            recentCtr: rec ? Number(rec.ctr.toFixed(4)) : 0,
            recentPosition: recPos,
            baselineClicks: base?.clicks ?? 0,
            baselineImpressions: base?.impressions ?? 0,
            baselineCtr: base ? Number(base.ctr.toFixed(4)) : 0,
            baselinePosition: basePos,
            positionDelta: recPos > 0 && basePos > 0 ? Number((basePos - recPos).toFixed(1)) : 0,
            topQueries,
        });
    }

    const effectiveImpressions = (p: GscComparisonPage) => p.recentImpressions + p.baselineImpressions;
    const effectivePosition = (p: GscComparisonPage) =>
        p.recentImpressions >= 3 && p.recentPosition > 0 ? p.recentPosition : p.baselinePosition || p.recentPosition;
    const effectiveCtr = (p: GscComparisonPage) => {
        const totalImp = effectiveImpressions(p);
        if (totalImp === 0) return 0;
        return (p.recentClicks + p.baselineClicks) / totalImp;
    };

    const strikingDistance = allPages
        .filter((p) => {
            const pos = effectivePosition(p);
            return pos >= 5 && pos <= 20 && effectiveImpressions(p) >= 2;
        })
        .sort((a, b) => effectiveImpressions(b) - effectiveImpressions(a));

    const lowCtrTopPositions = allPages
        .filter((p) => {
            const pos = effectivePosition(p);
            const ctr = effectiveCtr(p);
            return pos >= 1 && pos <= 5 && ctr < 0.03 && effectiveImpressions(p) >= 2;
        })
        .sort((a, b) => effectiveImpressions(b) - effectiveImpressions(a));

    // Identify uncovered Hebrew query clusters
    const hebrewRe = /[\u0590-\u05FF]/;
    const corpusNormalized = existingCorpusTexts.map((t) => t.toLowerCase());
    const uncoveredQueries: Array<{ query: string; impressions: number; position: number }> = [];

    for (const r of combinedQueryRows) {
        const q = r.keys[0].trim();
        if (!hebrewRe.test(q) || q.length < 5 || q.startsWith('"')) continue;
        if (isIrrelevantOrBannedQuery(q)) continue;
        if (r.impressions < 3) continue;

        const significantTokens = q
            .toLowerCase()
            .replace(/[^\u0590-\u05FFa-z0-9\s]/g, ' ')
            .split(/\s+/)
            .filter((w) => w.length >= 3 && !['איך', 'כמה', 'מה', 'של', 'עם', 'או', 'על', 'את'].includes(w));

        if (significantTokens.length === 0) continue;

        const covered = corpusNormalized.some((doc) => {
            const matches = significantTokens.filter((tok) => doc.includes(tok));
            return matches.length >= Math.min(2, significantTokens.length);
        });

        if (!covered) {
            uncoveredQueries.push({
                query: q,
                impressions: r.impressions,
                position: Number(r.position.toFixed(1)),
            });
        }
    }

    // Group uncovered queries by shared stem overlap
    const clusters: GscUncoveredCluster[] = [];
    const sortedUncovered = uncoveredQueries.sort((a, b) => b.impressions - a.impressions);

    for (const item of sortedUncovered) {
        const tokens = item.query
            .toLowerCase()
            .replace(/[^\u0590-\u05FFa-z0-9\s]/g, ' ')
            .split(/\s+/)
            .filter((w) => w.length >= 3);

        const existingCluster = clusters.find((c) => {
            const rep = c.representativeQuery.toLowerCase();
            return tokens.some((tok) => rep.includes(tok));
        });

        if (existingCluster) {
            if (!existingCluster.relatedQueries.includes(item.query)) {
                existingCluster.relatedQueries.push(item.query);
            }
            existingCluster.totalImpressions += item.impressions;
            existingCluster.bestPosition = Math.min(existingCluster.bestPosition, item.position);
        } else {
            clusters.push({
                representativeQuery: item.query,
                relatedQueries: [item.query],
                totalImpressions: item.impressions,
                bestPosition: item.position,
            });
        }
    }

    return {
        recentWindow,
        baselineWindow,
        strikingDistance,
        lowCtrTopPositions,
        uncoveredClusters: clusters.sort((a, b) => b.totalImpressions - a.totalImpressions).slice(0, 5),
        allBaselinePages: allPages,
    };
}


