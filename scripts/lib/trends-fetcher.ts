/**
 * Google Trends Fetcher — Shared module for all agents
 * 
 * Fetches trending automotive/towing topics from Google Trends (Israel)
 * and provides them to agent-blog.ts and agent-social.ts for diverse,
 * up-to-date content generation.
 */

// @ts-ignore — google-trends-api has no types
import googleTrends from 'google-trends-api';

export interface TrendTopic {
    title: string;
    trafficVolume: string;
    relatedQueries: string[];
}

// Automotive-related seed keywords to query Google Trends
const SEED_KEYWORDS = [
    'גרירת רכב',
    'תקלה ברכב',
    'פנצ\'ר',
    'מצבר רכב',
    'תאונת דרכים',
    'רכב חשמלי',
    'בדיקת רכב',
    'טסט לרכב',
    'שמן מנוע',
    'בלמים רכב',
    'התחממות מנוע',
    'גיר אוטומטי',
    'מזגן רכב',
    'חילוץ שטח',
    'ביטוח רכב',
    'מוסך חיפה',
];

/**
 * Fetch daily trending searches from Google Trends (Israel)
 * and filter for automotive-relevant topics
 */
export async function fetchDailyTrends(): Promise<TrendTopic[]> {
    try {
        const result = await googleTrends.dailyTrends({
            geo: 'IL',
        });

        const parsed = JSON.parse(result);
        const trendingSearches = parsed?.default?.trendingSearchesDays?.[0]?.trendingSearches || [];

        // Automotive keywords to filter by
        const autoKeywords = [
            'רכב', 'מכונית', 'גרירה', 'גרר', 'תאונ', 'כביש', 'נסיעה',
            'מנוע', 'בלם', 'צמיג', 'פנצ', 'מצבר', 'סוללה', 'חשמלי',
            'דלק', 'בנזין', 'סולר', 'מוסך', 'טסט', 'ביטוח', 'נהיג',
            'חניה', 'חנייה', 'משטרה', 'קנס', 'מהירות', 'car', 'drive',
            'tesla', 'טסלה', 'byd', 'גיר', 'שמן', 'קירור', 'חורף',
            'גשם', 'שטף', 'הצפה',
        ];

        const autoTrends: TrendTopic[] = trendingSearches
            .filter((t: any) => {
                const title = (t.title?.query || '').toLowerCase();
                const articles = (t.articles || []).map((a: any) => (a.title || '').toLowerCase()).join(' ');
                const combined = `${title} ${articles}`;
                return autoKeywords.some(kw => combined.includes(kw));
            })
            .slice(0, 5)
            .map((t: any) => ({
                title: t.title?.query || '',
                trafficVolume: t.formattedTraffic || '',
                relatedQueries: (t.relatedQueries || []).map((q: any) => q.query || ''),
            }));

        return autoTrends;
    } catch (err) {
        console.warn('⚠️  Could not fetch daily trends:', (err as Error).message);
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

        const all = [...risingQueries, ...topQueries]
            .map((q: any) => q.query || '')
            .filter(Boolean)
            .slice(0, 10);

        return all;
    } catch (err) {
        console.warn(`⚠️  Could not fetch related queries for "${keyword}":`, (err as Error).message);
        return [];
    }
}

/**
 * Get a trending automotive topic with related queries.
 * Tries daily trends first, then falls back to related queries from seed keywords.
 */
export async function getTrendingTopicForArticle(existingTitles: string[]): Promise<{
    topic: string;
    keywords: string[];
    source: 'daily-trends' | 'related-queries' | 'seed-rotation';
} | null> {
    // Strategy 1: Check daily trends for automotive topics
    const dailyTrends = await fetchDailyTrends();
    if (dailyTrends.length > 0) {
        // Pick one that doesn't overlap with existing titles
        for (const trend of dailyTrends) {
            const isDuplicate = existingTitles.some(title =>
                title.includes(trend.title) || trend.title.includes(title)
            );
            if (!isDuplicate) {
                return {
                    topic: trend.title,
                    keywords: [trend.title, ...trend.relatedQueries.slice(0, 3)],
                    source: 'daily-trends',
                };
            }
        }
    }

    // Strategy 2: Pick a random seed and get related queries
    const shuffledSeeds = [...SEED_KEYWORDS].sort(() => Math.random() - 0.5);
    for (const seed of shuffledSeeds.slice(0, 3)) {
        const related = await fetchRelatedQueries(seed);
        if (related.length > 0) {
            // Find something not yet covered
            for (const query of related) {
                const isDuplicate = existingTitles.some(title =>
                    title.includes(query) || query.includes(title)
                );
                if (!isDuplicate) {
                    return {
                        topic: query,
                        keywords: [query, seed],
                        source: 'related-queries',
                    };
                }
            }
        }
    }

    // Strategy 3: Rotate through seeds directly
    const unusedSeed = shuffledSeeds.find(seed =>
        !existingTitles.some(title => title.includes(seed))
    );
    if (unusedSeed) {
        return {
            topic: unusedSeed,
            keywords: [unusedSeed],
            source: 'seed-rotation',
        };
    }

    return null;
}
