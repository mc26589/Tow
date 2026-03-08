import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';
import { CITIES, VEHICLES } from '@/lib/data';
import { GUIDES } from '@/lib/guides';
import { B2B_INDUSTRIES, DESTINATIONS, HAZARDS, NEIGHBORHOODS, ROADS, WARNING_LIGHTS } from '@/lib/data-pseo';
import fs from 'fs';
import path from 'path';

export const revalidate = 3600; // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://grar-haifa.vercel.app';

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ];

    // 1. Gen static cities/vehicles
    const cityVehicleUrls: MetadataRoute.Sitemap = [];
    for (const city of CITIES) {
        for (const vehicle of VEHICLES) {
            cityVehicleUrls.push({
                url: `${baseUrl}/${city.slug}/${vehicle.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.9,
            });
        }
    }

    // 1.5. Gen other dynamic pSEO routes
    const additionalPSEOUrls: MetadataRoute.Sitemap = [];

    // Hazards per city
    for (const city of CITIES) {
        for (const hazard of HAZARDS) {
            additionalPSEOUrls.push({
                url: `${baseUrl}/hazards/${hazard.slug}/${city.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8,
            });
        }
    }

    // B2B per city
    for (const city of CITIES) {
        for (const industry of B2B_INDUSTRIES) {
            additionalPSEOUrls.push({
                url: `${baseUrl}/b2b/${industry.slug}/${city.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8,
            });
        }
    }

    // Destinations
    for (const city of CITIES) {
        for (const destination of DESTINATIONS) {
            additionalPSEOUrls.push({
                url: `${baseUrl}/destination/${city.slug}/${destination.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8,
            });
        }
    }

    // Warning Lights
    for (const city of CITIES) {
        for (const light of WARNING_LIGHTS) {
            additionalPSEOUrls.push({
                url: `${baseUrl}/warning-lights/${light.slug}/${city.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8,
            });
        }
    }

    // Neighborhoods
    for (const neighborhood of NEIGHBORHOODS) {
        additionalPSEOUrls.push({
            url: `${baseUrl}/locations/${neighborhood.city_slug}/${neighborhood.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        });
    }

    // Roads
    for (const road of ROADS) {
        additionalPSEOUrls.push({
            url: `${baseUrl}/roads/${road.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        });
    }

    // 2. Gen Guides
    const guideUrls: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/guides`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        ...GUIDES.map((guide) => ({
            url: `${baseUrl}/guides/${guide.slug}`,
            lastModified: new Date(guide.publishDate),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        }))
    ];

    // 3. Fetch from Supabase (Spoke pages)
    let dynamicUrls: MetadataRoute.Sitemap = [];
    try {
        const { data: spokePages, error } = await supabase
            .from('spoke_pages')
            .select('route_path')
            .eq('is_published', true);

        if (!error && spokePages) {
            dynamicUrls = spokePages.map((page) => ({
                url: `${baseUrl}${page.route_path}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8,
            }));
        } else {
            console.error('Error fetching spoke pages for sitemap:', error);
        }
    } catch (err) {
        console.error('Failed to connect to Supabase for sitemap:', err);
    }

    // 4. Scan physical file system for AI generated pSEO pages (areas)
    const fsUrls: MetadataRoute.Sitemap = [];
    try {
        const areasDir = path.join(process.cwd(), 'src', 'app', 'areas');
        if (fs.existsSync(areasDir)) {
            const subAreas = fs.readdirSync(areasDir, { withFileTypes: true })
                .filter(dirent => dirent.isDirectory());

            for (const area of subAreas) {
                const subDirPath = path.join(areasDir, area.name);
                const pageDirs = fs.readdirSync(subDirPath, { withFileTypes: true })
                    .filter(dirent => dirent.isDirectory());

                for (const pageDir of pageDirs) {
                    const pagePath = path.join(subDirPath, pageDir.name, 'page.tsx');
                    if (fs.existsSync(pagePath)) {
                        fsUrls.push({
                            url: `${baseUrl}/areas/${area.name}/${pageDir.name}`,
                            lastModified: new Date(),
                            changeFrequency: 'weekly',
                            priority: 0.8,
                        });
                    }
                }
            }
        }
    } catch (err) {
        console.error('Failed to scan file system for sitemap:', err);
    }

    // Merge and deduplicate URLs
    const allUrlsMap = new Map<string, MetadataRoute.Sitemap[number]>();

    [...staticRoutes, ...cityVehicleUrls, ...additionalPSEOUrls, ...guideUrls, ...dynamicUrls, ...fsUrls].forEach(item => {
        if (!allUrlsMap.has(item.url)) {
            allUrlsMap.set(item.url, item);
        }
    });

    return Array.from(allUrlsMap.values());
}
