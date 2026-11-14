import { MetadataRoute } from 'next';
import { CITIES, VEHICLES } from '@/lib/data';
import { GUIDES } from '@/lib/guides';
import { HAZARDS, NEIGHBORHOODS, ROADS, WARNING_LIGHTS } from '@/lib/data-pseo';

export const revalidate = 3600; // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://grar-haifa.vercel.app';
    const staticLastMod = new Date('2026-11-14T00:00:00Z');
    const latestGuideDate = GUIDES.reduce((latest, g) => {
        const d = new Date(g.publishDate);
        return !isNaN(d.getTime()) && d > latest ? d : latest;
    }, staticLastMod);

    // Core static pages
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: staticLastMod,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: staticLastMod,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/facts`,
            lastModified: staticLastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/emergency-guide`,
            lastModified: staticLastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/milon/towing-cost`,
            lastModified: staticLastMod,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/areas`,
            lastModified: staticLastMod,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
    ];

    // City Pillar pages (/haifa, /krayot, /tirat-carmel, etc.)
    const cityPillarUrls: MetadataRoute.Sitemap = CITIES.map((city) => ({
        url: `${baseUrl}/${city.slug}`,
        lastModified: staticLastMod,
        changeFrequency: 'weekly',
        priority: 0.95,
    }));

    // City x specialized vehicle pages (electric, commercial, suv only)
    const cityVehicleUrls: MetadataRoute.Sitemap = [];
    for (const city of CITIES) {
        for (const vehicle of VEHICLES) {
            cityVehicleUrls.push({
                url: `${baseUrl}/${city.slug}/${vehicle.slug}`,
                lastModified: staticLastMod,
                changeFrequency: 'weekly',
                priority: 0.85,
            });
        }
    }

    // Consolidated canonical pSEO routes (no city-multiplied bloat)
    const additionalPSEOUrls: MetadataRoute.Sitemap = [];

    // Hazards — only Haifa & Krayot hubs
    for (const citySlug of ['haifa', 'krayot'] as const) {
        for (const hazard of HAZARDS) {
            additionalPSEOUrls.push({
                url: `${baseUrl}/hazards/${hazard.slug}/${citySlug}`,
                lastModified: staticLastMod,
                changeFrequency: 'weekly',
                priority: 0.8,
            });
        }
    }

    // Warning Lights — canonical Haifa hub only
    for (const light of WARNING_LIGHTS) {
        additionalPSEOUrls.push({
            url: `${baseUrl}/warning-lights/${light.slug}/haifa`,
            lastModified: staticLastMod,
            changeFrequency: 'monthly',
            priority: 0.75,
        });
    }

    // Neighborhoods
    for (const neighborhood of NEIGHBORHOODS) {
        additionalPSEOUrls.push({
            url: `${baseUrl}/locations/${neighborhood.city_slug}/${neighborhood.slug}`,
            lastModified: staticLastMod,
            changeFrequency: 'weekly',
            priority: 0.8,
        });
    }

    // Major Roads
    for (const road of ROADS) {
        additionalPSEOUrls.push({
            url: `${baseUrl}/roads/${road.slug}`,
            lastModified: staticLastMod,
            changeFrequency: 'weekly',
            priority: 0.85,
        });
    }

    // Guides hub + canonical guides only
    const guideUrls: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/guides`,
            lastModified: latestGuideDate,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        ...GUIDES.map((guide) => ({
            url: `${baseUrl}/guides/${guide.slug}`,
            lastModified: new Date(guide.publishDate),
            changeFrequency: 'monthly' as const,
            priority: 0.75,
        })),
    ];

    const allUrlsMap = new Map<string, MetadataRoute.Sitemap[number]>();
    [...staticRoutes, ...cityPillarUrls, ...cityVehicleUrls, ...additionalPSEOUrls, ...guideUrls].forEach((item) => {
        if (!allUrlsMap.has(item.url)) {
            allUrlsMap.set(item.url, item);
        }
    });

    return Array.from(allUrlsMap.values());
}
