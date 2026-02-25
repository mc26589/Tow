import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';
import { CITIES, VEHICLES } from '@/lib/data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://grar-haifa.vercel.app';

    // Fetch all published dynamic pages from Supabase
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

    // Generate all 220 city/vehicle static combinations
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

    // Define core static routes
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        }
    ];

    return [...staticRoutes, ...cityVehicleUrls, ...dynamicUrls];
}

