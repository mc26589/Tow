/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static export for maximum performance
    // Remove this if you need server-side features later
    // output: 'export',
    async rewrites() {
        return [
            {
                source: '/sitemap-v2.xml',
                destination: '/sitemap.xml',
            },
        ];
    },
};

export default nextConfig;
