// ============================================
// Static data for SEO generation
// Used by generateStaticParams and components
// ============================================

export const CITIES = [
    { slug: "haifa", name_he: "חיפה" },
    { slug: "krayot", name_he: "הקריות" },
    { slug: "kiryat-ata", name_he: "קרית אתא" },
    { slug: "kiryat-motzkin", name_he: "קרית מוצקין" },
    { slug: "kiryat-bialik", name_he: "קרית ביאליק" },
    { slug: "kiryat-yam", name_he: "קרית ים" },
    { slug: "kiryat-haim", name_he: "קרית חיים" },
    { slug: "kiryat-shmuel", name_he: "קרית שמואל" },
    { slug: "yokneam", name_he: "יקנעם" },
    { slug: "kiryat-tivon", name_he: "קרית טבעון" },
    { slug: "rekhasim", name_he: "רכסים" },
    { slug: "akko", name_he: "עכו" },
    { slug: "nesher", name_he: "נשר" },
    { slug: "tirat-carmel", name_he: "טירת כרמל" },
] as const;

export const VEHICLES = [
    // Core specialized vehicle categories (consolidated to prevent pSEO cannibalization)
    { slug: "electric", name_he: "רכב חשמלי", category: "general" as const },
    { slug: "commercial", name_he: "רכב מסחרי", category: "general" as const },
    { slug: "suv", name_he: "ג'יפ / 4X4", category: "general" as const },
] as const;

export const BUSINESS_INFO = {
    name: "גרר מפרץ אקספרס - שירותי גרירה",
    phone: "972549174414",
    displayPhone: "054-917-4414",
    whatsappBase: "https://wa.me/972549174414",
    description: "שירותי גרירה מהירים ומקצועיים בצפון הארץ. הגעה מהירה, מחירים הוגנים, 24/7.",
    areas: "חיפה והקריות, טירת כרמל, נשר, עכו, יקנעם, קרית טבעון, רכסים",
    // Entity-triangulation links (GEO / Local SEO): AI answer engines and Google cross-check
    // these profiles against the on-site NAP (Name, Address, Phone) to verify the business is
    // real and trustworthy before citing it. Fill in the real URLs once available — an empty
    // or placeholder URL here is worse than omitting it, so leave an entry blank/commented out
    // until you have the actual link.
    sameAs: [
        // "https://www.google.com/maps/place/YOUR_GOOGLE_BUSINESS_PROFILE_ID",
        // "https://www.facebook.com/YOUR_PAGE",
        // "https://www.instagram.com/YOUR_HANDLE",
        // "https://www.waze.com/he/live-map/directions/YOUR_WAZE_PIN",
        // "https://www.d144.co.il/YOUR_LISTING",
    ] as string[],
} as const;

export const OWNER_INFO = {
    name: "אביעד סטין",
    jobTitle: "בעלים ומנהל מקצועי",
    description: "מומחה לחילוץ וגרירה עם מעל 15 שנות ניסיון בשטח. מתמחה בחילוצי תאונות מורכבים וגרירת רכבים פרטיים ומסחריים.",
    experience: "15+ שנים",
    image: "/images/owner.jpg", // Placeholder for actual image
} as const;

// Helper: find city/vehicle by slug
export function findCity(slug: string) {
    return CITIES.find((c) => c.slug === slug);
}

export function findVehicle(slug: string) {
    return VEHICLES.find((v) => v.slug === slug);
}

// Helper: generate WhatsApp link with pre-filled message
export function getWhatsAppLink(cityName?: string, vehicleName?: string) {
    let message = "היי, ";
    if (vehicleName && cityName) {
        message += `נתקעתי עם ה${vehicleName} שלי ב${cityName}, אפשר עזרה?`;
    } else if (cityName) {
        message += `נתקעתי ב${cityName}, אפשר עזרה?`;
    } else {
        message += "אני צריך שירותי גרירה, אפשר עזרה?";
    }
    return `${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent(message)}`;
}
