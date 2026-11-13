/**
 * Trends Fetcher — Shared module for SEO Researcher, Blog Agent, and Social Agent
 *
 * Combines multiple real-time trend & SEO research sources:
 *   1. Google Trends Israel live RSS (https://trends.google.com/trending/rss?geo=IL)
 *   2. Supabase `local_trends` populated by the Local Researcher SEO agent (scripts/researcher.ts)
 *   3. Google Suggest (Autocomplete) live Hebrew queries for Haifa/Krayot & automotive
 *   4. google-trends-api relatedQueries fallback
 *   5. Open-Meteo real-time Haifa weather check for storm/winter emergency relevance
 */

// @ts-ignore — google-trends-api has no types
import googleTrends from 'google-trends-api';
import type { SupabaseClient } from '@supabase/supabase-js';
import { fetchGscTrendingTopicCandidates } from './gsc-client';

export interface TrendTopic {
    title: string;
    trafficVolume: string;
    relatedQueries: string[];
}

export interface WeatherStatus {
    isEmergency: boolean;
    context: string | null;
    summary: string;
}

// Automotive & local Haifa/Krayot seed keywords
const SEED_KEYWORDS = [
    'גרירת רכב חיפה',
    'תקלה ברכב בחורף',
    'פנצ\'ר בכביש מהיר',
    'מצבר מת ברכב',
    'תאונת דרכים מה לעשות',
    'גרירת רכב חשמלי',
    'בדיקת רכב לפני חורף',
    'התחממות מנוע בעליה',
    'תקלה בגיר אוטומטי',
    'נורות אזהרה ברכב',
    'חילוץ רכב מחניון תת קרקעי',
    'חילוץ שטח 4x4 כרמל',
    'רכב נתקע במנהרות הכרמל',
    'תדלוק שגוי ברכב',
    'מפתח ננעל בתוך הרכב',
    'מחיר גרירת רכב',
];

const SUGGEST_SEEDS = [
    'גרירת רכב חיפה ',
    'רכב נתקע ',
    'נורת אזהרה ברכב ',
    'רכב חשמלי תקלה ',
    'מצבר רכב ',
    'התחממות מנוע ',
    'גיר אוטומטי תקלה ',
    'פנצ\'ר ',
];

const AUTO_KEYWORDS = [
    'רכב', 'מכונית', 'גרירה', 'גרר', 'תאונ', 'כביש', 'נסיעה',
    'מנוע', 'בלם', 'צמיג', 'פנצ', 'מצבר', 'סוללה', 'חשמלי',
    'דלק', 'בנזין', 'סולר', 'מוסך', 'טסט', 'ביטוח', 'נהיג',
    'חניה', 'חנייה', 'מהירות', 'טסלה', 'byd', 'גיר', 'שמן',
    'קירור', 'חורף', 'גשם', 'סופה', 'הצפה', 'ברד', 'ערפל',
    'פקק', 'מנהרות הכרמל', 'כביש 22', 'כביש 4', 'כביש 75',
];

const EXCLUDED_CITIES = [
    'תל אביב', 'ירושלים', 'באר שבע', 'אילת', 'נתניה', 'רמת גן',
    'פתח תקווה', 'ראשון לציון', 'אשדוד', 'אשקלון', 'רחובות',
    'בני ברק', 'הרצליה', 'חולון', 'בת ים', 'רעננה', 'כפר סבא',
    'הוד השרון', 'לוד', 'רמלה', 'מודיעין', 'טבריה', 'צפת',
    'נצרת', 'דימונה', 'אופקים', 'שדרות', 'גוש דן', 'איילון',
];

const STOP_WORDS = new Set([
    'רכב', 'ברכב', 'לרכב', 'של', 'על', 'עם', 'את', 'או', 'מה', 'איך', 'למה',
    'כמה', 'בחיפה', 'חיפה', 'והקריות', 'קריות', 'בקריות', 'בצפון', 'מדריך',
    'המלא', 'השלם', 'טיפים', 'לנהגים', 'גרר', 'גרירת', 'גרירה', 'חילוץ', 'שירותי',
]);

function extractTopicTokens(text: string): string[] {
    return text
        .replace(/[^\u0590-\u05FFa-zA-Z0-9\s]/g, ' ')
        .toLowerCase()
        .split(/\s+/)
        .filter((w) => w.length >= 3 && !STOP_WORDS.has(w));
}

export function isTopicCovered(candidate: string, existingTitles: string[]): boolean {
    const cleanCandidate = candidate.trim().toLowerCase();
    if (!cleanCandidate) return true;

    const candidateTokens = extractTopicTokens(cleanCandidate);

    for (const title of existingTitles) {
        const lowerTitle = title.toLowerCase();
        if (lowerTitle.includes(cleanCandidate) || cleanCandidate.includes(lowerTitle)) {
            return true;
        }
        if (candidateTokens.length >= 2) {
            const titleTokens = new Set(extractTopicTokens(lowerTitle));
            const overlap = candidateTokens.filter((t) => titleTokens.has(t)).length;
            if (overlap >= Math.min(2, candidateTokens.length)) {
                return true;
            }
        }
    }
    return false;
}

/**
 * Fetch real-time Haifa weather from Open-Meteo (free, no key required).
 */
export async function fetchHaifaWeather(): Promise<WeatherStatus> {
    try {
        const url =
            'https://api.open-meteo.com/v1/forecast?latitude=32.794&longitude=34.9896&current=precipitation,rain,weather_code,wind_speed_10m';
        const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as {
            current?: {
                precipitation?: number;
                rain?: number;
                weather_code?: number;
                wind_speed_10m?: number;
            };
        };

        const current = data.current || {};
        const rain = Number(current.rain || 0);
        const precip = Number(current.precipitation || 0);
        const code = Number(current.weather_code || 0);
        const wind = Number(current.wind_speed_10m || 0);

        // WMO weather codes >= 51 indicate drizzle/rain/snow/thunderstorm
        const isRainy = rain > 0.5 || precip > 0.5 || code >= 51;
        const isWindy = wind >= 40;

        if (isRainy || isWindy) {
            const details = [
                isRainy ? `גשם/משקעים בחיפה (${Math.max(rain, precip)} מ"מ)` : '',
                isWindy ? `רוחות חזקות (${wind} קמ"ש)` : '',
            ]
                .filter(Boolean)
                .join(' ו');
            return {
                isEmergency: true,
                context: details,
                summary: `מזג אוויר חורפי/סוער באזור חיפה והקריות: ${details}`,
            };
        }

        const month = new Date().getMonth() + 1;
        const season =
            month >= 11 || month <= 3
                ? 'עונת החורף והגשמים בחיפה והקריות'
                : month >= 6 && month <= 9
                  ? 'ימי הקיץ החמים והעומס על המנוע והמזגן בחיפה והקריות'
                  : 'עונת המעבר בחיפה והקריות';

        return {
            isEmergency: false,
            context: null,
            summary: season,
        };
    } catch (err) {
        console.warn('⚠️  Could not fetch Haifa weather:', (err as Error).message);
        return {
            isEmergency: false,
            context: null,
            summary: 'מזג אוויר רגיל בחיפה והקריות',
        };
    }
}

function decodeXmlEntities(text: string): string {
    return text
        .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .trim();
}

/**
 * Fetch daily trending searches from Google Trends Israel live RSS feed
 * and filter for automotive/road/weather topics relevant to Northern Israel.
 */
export async function fetchDailyTrends(): Promise<TrendTopic[]> {
    try {
        const res = await fetch('https://trends.google.com/trending/rss?geo=IL', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; GrarHaifaSEOBot/1.0)',
            },
            signal: AbortSignal.timeout(8000),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const xml = await res.text();
        const items = Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/g));

        const autoTrends: TrendTopic[] = [];
        for (const match of items) {
            const block = match[1];
            const titleMatch = block.match(/<title>([\s\S]*?)<\/title>/);
            const trafficMatch = block.match(/<ht:approx_traffic>([\s\S]*?)<\/ht:approx_traffic>/);
            const newsTitles = Array.from(
                block.matchAll(/<ht:news_item_title>([\s\S]*?)<\/ht:news_item_title>/g)
            ).map((m) => decodeXmlEntities(m[1]));

            const title = titleMatch ? decodeXmlEntities(titleMatch[1]) : '';
            if (!title) continue;

            const combined = `${title} ${newsTitles.join(' ')}`.toLowerCase();
            const isAuto = AUTO_KEYWORDS.some((kw) => combined.includes(kw));
            const hasExcludedCity = EXCLUDED_CITIES.some((city) => combined.includes(city));

            if (isAuto && !hasExcludedCity) {
                autoTrends.push({
                    title,
                    trafficVolume: trafficMatch ? decodeXmlEntities(trafficMatch[1]) : '',
                    relatedQueries: newsTitles.slice(0, 3),
                });
            }
        }

        return autoTrends.slice(0, 5);
    } catch (err) {
        console.warn('⚠️  Could not fetch Google Trends RSS:', (err as Error).message);
        return [];
    }
}

/**
 * Fetch live Hebrew autocomplete suggestions from Google Suggest (Israel).
 */
export async function fetchGoogleSuggestQueries(seed: string): Promise<string[]> {
    try {
        const url = `https://suggestqueries.google.com/complete/search?client=firefox&hl=he&gl=IL&q=${encodeURIComponent(seed)}`;
        const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = (await res.json()) as [string, string[]];
        const suggestions = Array.isArray(data?.[1]) ? data[1] : [];

        return suggestions.filter((q) => {
            const lower = q.toLowerCase();
            const hasExcludedCity = EXCLUDED_CITIES.some((city) => lower.includes(city));
            // Filter out specific competitor company names
            const isCompetitorName = /אסולין|ספאריני|שגריר|איתוראן|ממסי|פמי/.test(lower);
            return q.trim().length > 6 && !hasExcludedCity && !isCompetitorName;
        });
    } catch (err) {
        console.warn(`⚠️  Could not fetch Google Suggest for "${seed}":`, (err as Error).message);
        return [];
    }
}

/**
 * Fetch related queries for a seed keyword from Google Trends (Israel)
 */
export async function fetchRelatedQueries(keyword: string): Promise<string[]> {
    try {
        const result = await googleTrends.relatedQueries({
            keyword,
            geo: 'IL',
            hl: 'he',
        });

        const parsed = JSON.parse(result);
        const topQueries = parsed?.default?.rankedList?.[0]?.rankedKeyword || [];
        const risingQueries = parsed?.default?.rankedList?.[1]?.rankedKeyword || [];

        return [...risingQueries, ...topQueries]
            .map((q: any) => q.query || '')
            .filter((q: string) => {
                if (!q) return false;
                const lower = q.toLowerCase();
                return !EXCLUDED_CITIES.some((city) => lower.includes(city));
            })
            .slice(0, 10);
    } catch (err) {
        console.warn(`⚠️  Could not fetch related queries for "${keyword}":`, (err as Error).message);
        return [];
    }
}

/**
 * Get the hottest uncovered topic from all available SEO & trend sources.
 */
export async function getTrendingTopicForArticle(
    existingTitles: string[],
    options?: { supabase?: SupabaseClient }
): Promise<{
    topic: string;
    keywords: string[];
    source: 'gsc-opportunity' | 'daily-trends' | 'seo-researcher' | 'google-suggest' | 'related-queries' | 'seed-rotation';
    weatherContext?: string;
} | null> {
    const weather = await fetchHaifaWeather();
    const weatherContext = weather.summary;

    // Strategy 0: Real Google Search Console zero-click striking-distance queries (lowest cost, highest ROI)
    const gscCandidates = await fetchGscTrendingTopicCandidates(existingTitles, 8);
    for (const candidate of gscCandidates) {
        if (!isTopicCovered(candidate.topic, existingTitles)) {
            return {
                topic: candidate.topic,
                keywords: [candidate.topic, 'חיפה והקריות', 'גרר מפרץ אקספרס'],
                source: 'gsc-opportunity',
                weatherContext,
            };
        }
    }

    // Strategy 1: Live Google Trends RSS (Israel) automotive/weather/road topics
    const dailyTrends = await fetchDailyTrends();
    for (const trend of dailyTrends) {
        if (!isTopicCovered(trend.title, existingTitles)) {
            return {
                topic: trend.title,
                keywords: [trend.title, ...trend.relatedQueries.slice(0, 3)],
                source: 'daily-trends',
                weatherContext,
            };
        }
    }

    // Strategy 2: Hot local SEO trends discovered by scripts/researcher.ts in Supabase
    if (options?.supabase) {
        try {
            const { data: localTrends, error } = await options.supabase
                .from('local_trends')
                .select('query, is_emergency, emergency_context')
                .order('id', { ascending: false })
                .limit(25);

            if (!error && localTrends && localTrends.length > 0) {
                for (const row of localTrends) {
                    const q = (row.query || '').trim();
                    if (q && !isTopicCovered(q, existingTitles)) {
                        return {
                            topic: q,
                            keywords: [q, 'חיפה והקריות', 'גרר מפרץ אקספרס'],
                            source: 'seo-researcher',
                            weatherContext: row.emergency_context || weatherContext,
                        };
                    }
                }
            }
        } catch (err) {
            console.warn('⚠️  Could not read local_trends from Supabase:', (err as Error).message);
        }
    }

    // Strategy 3: Live Google Suggest queries for Israeli automotive/Haifa searches
    const shuffledSuggestSeeds = [...SUGGEST_SEEDS].sort(() => Math.random() - 0.5);
    for (const seed of shuffledSuggestSeeds.slice(0, 3)) {
        const suggestions = await fetchGoogleSuggestQueries(seed);
        for (const query of suggestions) {
            if (!isTopicCovered(query, existingTitles)) {
                return {
                    topic: query,
                    keywords: [query, seed.trim()],
                    source: 'google-suggest',
                    weatherContext,
                };
            }
        }
    }

    // Strategy 4: Google Trends related queries
    const shuffledSeeds = [...SEED_KEYWORDS].sort(() => Math.random() - 0.5);
    for (const seed of shuffledSeeds.slice(0, 2)) {
        const related = await fetchRelatedQueries(seed);
        for (const query of related) {
            if (!isTopicCovered(query, existingTitles)) {
                return {
                    topic: query,
                    keywords: [query, seed],
                    source: 'related-queries',
                    weatherContext,
                };
            }
        }
    }

    // Strategy 5: Uncovered seed rotation
    const unusedSeed = shuffledSeeds.find((seed) => !isTopicCovered(seed, existingTitles));
    if (unusedSeed) {
        return {
            topic: unusedSeed,
            keywords: [unusedSeed],
            source: 'seed-rotation',
            weatherContext,
        };
    }

    return null;
}
