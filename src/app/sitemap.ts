import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';
import { CITIES, VEHICLES } from '@/lib/data';
import { GUIDES } from '@/lib/guides';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://grar-haifa.vercel.app';

    // 1. Fetch dynamic spoke pages from Supabase
    const { data: spokePages, error } = await supabase
        .from('spoke_pages')
        .select('route_path')
        .eq('is_published', true);

    if (error) {
        console.error('Error fetching spoke pages for sitemap:', error);
    }

    const dynamicUrls: MetadataRoute.Sitemap = (spokePages || []).map((page) => ({
        url: `${baseUrl}${page.route_path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    // 2. Generate city/vehicle static combinations
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

    // 3. Guides - Index and Individual Articles
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

    // 4. Define core static routes
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

    return [...staticRoutes, ...cityVehicleUrls, ...guideUrls, ...dynamicUrls];
}
