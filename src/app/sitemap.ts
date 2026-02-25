import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.grar-mifratz.co.il';

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

    // Define static routes
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        // Add other static routes here if applicable
    ];

    return [...staticRoutes, ...dynamicUrls];
}
