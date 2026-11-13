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

