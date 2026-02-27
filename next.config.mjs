/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static export for maximum performance
    // Remove this if you need server-side features later
    // output: 'export',
    async redirects() {
        return [
            {
                source: '/google-sitemap.xml',
                destination: '/sitemap.xml',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
