/** @type {import('next').NextConfig} */
const REMOVED_ICE_VEHICLES = [
    'private-car',
    'pickup',
    'toyota',
    'hyundai',
    'kia',
    'mazda',
    'skoda',
    'seat',
    'volkswagen',
    'chevrolet',
    'nissan',
    'renault',
    'suzuki',
    'peugeot',
].join('|');

const NON_HAIFA_CITIES = [
    'krayot',
    'kiryat-ata',
    'kiryat-motzkin',
    'kiryat-bialik',
    'kiryat-yam',
    'kiryat-haim',
    'kiryat-shmuel',
    'yokneam',
    'kiryat-tivon',
    'rekhasim',
    'akko',
    'nesher',
    'tirat-carmel',
].join('|');

const NON_HAIFA_KRAYOT_CITIES = [
    'kiryat-ata',
    'kiryat-motzkin',
    'kiryat-bialik',
    'kiryat-yam',
    'kiryat-haim',
    'kiryat-shmuel',
    'yokneam',
    'kiryat-tivon',
    'rekhasim',
    'akko',
    'nesher',
    'tirat-carmel',
].join('|');

const GUIDE_REDIRECT_GROUPS = [
    {
        destination: '/guides/haifa-emergency-towing-guide',
        slugs: [
            'stuck-in-haifa-guide',
            'car-malfunction-haifa-guide',
            'car-breakdown-haifa-krayot-guide',
            'car-towing-guide-haifa-krayot',
            'takala-barechev-haifa-krayot-madrikh',
            'gerar-rechev-tel-aviv-madrikh-haifa',
            'car-towing-haifa-guide',
            'griyrat-rekhev-haifa-sos',
            'greerat-rechev-haifa-krayot-madrikh-mele',
            'car-breakdown-haifa-krayot-towing-guide',
            'haifa-krayot-car-towing-guide',
            'car-towing-haifa-krayot-complete-guide',
            'gerar-haifa-krayot-madrikh-likrat-tekala',
        ],
    },
    {
        destination: '/guides/winter-vehicle-preparation-checklist',
        slugs: ['hakhnat-rekhev-lakhorf-haifa-krayot-madrikh'],
    },
    {
        destination: '/guides/hilutz-shetah-haifa-gerar',
        slugs: [
            'haifa-krayot-towing-guide-from-mud-to-sand',
            'stuck-in-mud-carmel-forest-tips',
            'stuck-in-mud-carmel-forest-rescue',
            'hilutz-shetach-haifa-krayot-madrikh-mugran',
        ],
    },
    {
        destination: '/guides/electric-car-towing-haifa-guide',
        slugs: [
            'blog-1773560833779',
            'used-electric-car-towing-haifa',
            'electric-car-price-haifa-krayot',
            'rkv-hashmali-mechir-haifa-krayot',
            'electric-car-second-hand-haifa-krayot-guide',
            'recommended-electric-car-haifa-towing',
        ],
    },
    {
        destination: '/guides/automatic-transmission-repair-haifa',
        slugs: [
            'automatic-gearbox-repair-cost-haifa-krayot',
            'automatic-transmission-haifa-krayot-guide',
            'automatic-transmission-guide-haifa-krayot',
            'automatic-transmission-repair-cost-haifa',
        ],
    },
    {
        destination: '/guides/accident-today-haifa-first-steps',
        slugs: [
            'taunat-drakhim-haifa-krayot-ma-laasot',
            'taunat-drakhim-etmol-haifa-krayot',
            'taunat-drakhim-ynet-haifa-krayot',
        ],
    },
    {
        destination: '/guides/libra-car-insurance-haifa-tow',
        slugs: [
            'car-insurance-haifa-towing-peace-of-mind',
            'wobi-bituach-rechev-haifa-krayot',
            'bituach-rechev-libra-haifa-krayot-grar-mifratz-express',
            'car-insurance-comparison-haifa-krayot',
        ],
    },
    {
        destination: '/guides/tashlum-test-larchev-haifa-krayot',
        slugs: [
            'tipim-letest-larechev-haifa-krayot',
            'car-test-payment-haifa-krayot',
            'hakhanat-harechev-latest-haifa-krayot-madrikh-male',
            'expired-car-test-haifa-consequences',
        ],
    },
    {
        destination: '/guides/car-battery-troubleshooting-haifa-krayot',
        slugs: [
            'car-battery-guide-haifa-krayot',
            'car-wont-start-haifa-dead-battery-guide',
            'car-battery-price-haifa-2026',
        ],
    },
    {
        destination: '/guides/buying-car-haifa-pre-purchase-inspection-guide',
        slugs: [
            'car-inspection-haifa-peace-of-mind',
            'bedikat-rechev-haifa-krayot-madrikh',
            'buying-used-car-haifa-krayot-guide',
        ],
    },
    {
        destination: '/guides/flat-tire-complete-guide-for-drivers',
        slugs: [
            'tikun-pancher-haifa-krayot-madrikh-mele',
            'tikun-pancher-haifa-krayot',
            'haifa-flat-tire-guide',
            'flat-tire-haifa-guide',
            'flat-tire-haifa-krayot-guide',
        ],
    },
    {
        destination: '/guides/strange-engine-noises-when-to-call-tow',
        slugs: ['car-error-code-guide-haifa'],
    },
    {
        destination: '/guides/engine-oil-5w30-haifa-krayot-guide',
        slugs: [
            'shmen-menoah-10w40-madrih-tahzuka-haifa-krayot',
            'engine-oil-change-haifa-krayot-guide',
        ],
    },
    {
        destination: '/guides/car-brakes-haifa-safety-guide',
        slugs: ['brakes-car-guide-haifa-krayot'],
    },
    {
        destination: '/guides/car-ac-problems-haifa-diagnosis',
        slugs: ['car-air-conditioning-haifa-krayot-tips'],
    },
    {
        destination: '/guides/dashboard-warning-lights-complete-guide',
        slugs: [
            'warning-lights-car-haifa-krayot',
            'warning-lights-car-haifa-krayot-guide',
        ],
    },
    {
        destination: '/guides/engine-overheating-warning-signs',
        slugs: [
            'rechav-mitachamem-haifa-madrikh-nehag',
            'car-overheating-haifa-guide',
            'rechev-mitachmem-haifa-krayot-madrikh-male',
        ],
    },
];

const AREA_TOPIC_REDIRECTS = [
    { pattern: '.*carmel-tunnels.*', destination: '/roads/carmel-tunnels' },
    { pattern: '.*road-22.*|.*route-22.*', destination: '/roads/highway-22' },
    { pattern: '.*underground.*|.*parking.*', destination: '/hazards/underground-parking/haifa' },
    { pattern: '.*mud.*|.*4x4.*|.*off-road.*', destination: '/hazards/mud-rescue/haifa' },
    { pattern: '.*electric.*|.*byd.*|.*tesla.*', destination: '/haifa/electric' },
    { pattern: '.*check-post.*', destination: '/locations/haifa/check-post' },
    { pattern: '.*ahuza.*', destination: '/locations/haifa/ahuza' },
    { pattern: '.*stella-maris.*', destination: '/locations/haifa/stella-maris' },
    { pattern: '.*bat-galim.*', destination: '/locations/haifa/bat-galim' },
    { pattern: '.*neve-shaanan.*', destination: '/locations/haifa/neve-shaanan' },
    { pattern: '.*kiryat-ata.*', destination: '/kiryat-ata' },
    { pattern: '.*kiryat-bialik.*', destination: '/kiryat-bialik' },
    { pattern: '.*kiryat-motzkin.*', destination: '/kiryat-motzkin' },
    { pattern: '.*kiryat-yam.*', destination: '/kiryat-yam' },
    { pattern: '.*kiryat-haim.*', destination: '/kiryat-haim' },
    { pattern: '.*krayot.*', destination: '/krayot' },
];

const nextConfig = {
    async redirects() {
        const guideRedirects = GUIDE_REDIRECT_GROUPS.flatMap(({ destination, slugs }) =>
            slugs.map((slug) => ({
                source: `/guides/${slug}`,
                destination,
                permanent: true,
            }))
        );

        const areaRedirects = [
            ...AREA_TOPIC_REDIRECTS.map(({ pattern, destination }) => ({
                source: `/areas/haifa-general/:slug(${pattern})`,
                destination,
                permanent: true,
            })),
            {
                source: '/areas/haifa-general/:slug*',
                destination: '/haifa',
                permanent: true,
            },
        ];

        return [
            {
                source: '/google-sitemap.xml',
                destination: '/sitemap.xml',
                permanent: true,
            },
            {
                source: '/sitemaps.xml',
                destination: '/sitemap.xml',
                permanent: true,
            },
            // Removed /destination and /b2b pSEO matrices
            {
                source: '/destination/:destination/:city',
                destination: '/:city',
                permanent: true,
            },
            {
                source: '/b2b/work-vehicles/:city',
                destination: '/:city/commercial',
                permanent: true,
            },
            {
                source: '/b2b/:industry/:city',
                destination: '/:city',
                permanent: true,
            },
            // Removed brand/type pSEO vehicle combinations
            {
                source: '/:city/:vehicle(tesla|byd|geely)',
                destination: '/:city/electric',
                permanent: true,
            },
            {
                source: `/:city/:vehicle(${REMOVED_ICE_VEHICLES})`,
                destination: '/:city',
                permanent: true,
            },
            // Consolidated warning-lights & hazards to canonical hub cities
            {
                source: `/warning-lights/:light/:city(${NON_HAIFA_CITIES})`,
                destination: '/warning-lights/:light/haifa',
                permanent: true,
            },
            {
                source: `/hazards/:hazard/:city(${NON_HAIFA_KRAYOT_CITIES})`,
                destination: '/hazards/:hazard/haifa',
                permanent: true,
            },
            ...areaRedirects,
            ...guideRedirects,
        ];
    },
};

export default nextConfig;
