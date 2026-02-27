// ============================================
// Static data for SEO generation
// Used by generateStaticParams and components
// ============================================

export const CITIES = [
    { slug: "haifa", name_he: "חיפה" },
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
] as const;

export const VEHICLES = [
    // General types
    { slug: "private-car", name_he: "רכב פרטי", category: "general" as const },
    { slug: "commercial", name_he: "רכב מסחרי", category: "general" as const },
    { slug: "electric", name_he: "רכב חשמלי", category: "general" as const },
    { slug: "pickup", name_he: "טנדר", category: "general" as const },
    { slug: "suv", name_he: "ג'יפ / 4X4", category: "general" as const },
    // Brands
    { slug: "toyota", name_he: "טויוטה", category: "brand" as const },
    { slug: "hyundai", name_he: "יונדאי", category: "brand" as const },
    { slug: "kia", name_he: "קיה", category: "brand" as const },
    { slug: "mazda", name_he: "מאזדה", category: "brand" as const },
    { slug: "skoda", name_he: "סקודה", category: "brand" as const },
    { slug: "seat", name_he: "סיאט", category: "brand" as const },
    { slug: "volkswagen", name_he: "פולקסווגן", category: "brand" as const },
    { slug: "chevrolet", name_he: "שברולט", category: "brand" as const },
    { slug: "nissan", name_he: "ניסאן", category: "brand" as const },
    { slug: "renault", name_he: "רנו", category: "brand" as const },
    { slug: "suzuki", name_he: "סוזוקי", category: "brand" as const },
    { slug: "peugeot", name_he: "פיג'ו", category: "brand" as const },
    { slug: "tesla", name_he: "טסלה", category: "brand" as const },
    { slug: "byd", name_he: "BYD", category: "brand" as const },
    { slug: "geely", name_he: "ג'ילי", category: "brand" as const },
] as const;

export const BUSINESS_INFO = {
    name: "גרר מפרץ אקספרס - שירותי גרירה",
    phone: "972549174414",
    whatsappBase: "https://wa.me/972549174414",
    description: "שירותי גרירה מהירים ומקצועיים בצפון הארץ. הגעה מהירה, מחירים הוגנים, 24/7.",
    areas: "חיפה והקריות, עכו, יקנעם, קרית טבעון, רכסים",
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
