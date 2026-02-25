import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://grar-haifa.vercel.app';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${baseUrl}/google-sitemap.xml`,
    };
}
