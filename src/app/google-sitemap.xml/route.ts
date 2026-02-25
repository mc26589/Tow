import { supabase } from '@/lib/supabase';
import { CITIES, VEHICLES } from '@/lib/data';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://grar-haifa.vercel.app';

    // Fetch all published dynamic pages from Supabase
    const { data: spokePages, error } = await supabase
        .from('spoke_pages')
        .select('route_path')
        .eq('is_published', true);

    if (error) {
        console.error('Error fetching spoke pages for sitemap:', error);
    }

    const dynamicUrls = (spokePages || []).map((page) => ({
        url: `${baseUrl}${page.route_path}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    // Generate all 220 city/vehicle static combinations
    const cityVehicleUrls = [];
    for (const city of CITIES) {
        for (const vehicle of VEHICLES) {
            cityVehicleUrls.push({
                url: `${baseUrl}/${city.slug}/${vehicle.slug}`,
                lastModified: new Date().toISOString(),
                changeFrequency: 'weekly',
                priority: 0.9,
            });
        }
    }

    // Define core static routes
    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily',
            priority: 1,
        }
    ];

    const allUrls = [...staticRoutes, ...cityVehicleUrls, ...dynamicUrls];

    // Build the XML string manually
    const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
    const xmlBody = allUrls.map((item) => `
    <url>
        <loc>${item.url}</loc>
        <lastmod>${item.lastModified}</lastmod>
        <changefreq>${item.changeFrequency}</changefreq>
        <priority>${item.priority}</priority>
    </url>`).join('');
    const xmlFooter = `\n</urlset>`;

    return new Response(xmlHeader + xmlBody + xmlFooter, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
            'Surrogate-Control': 'no-store'
        },
    });
}
