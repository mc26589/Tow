import { BUSINESS_INFO } from "./data";

export const NEIGHBORHOODS = [
    { slug: "romema", name_he: "רוממה", city_slug: "haifa" },
    { slug: "denya", name_he: "דניה", city_slug: "haifa" },
    { slug: "merkaz-hakarmel", name_he: "מרכז הכרמל", city_slug: "haifa" },
    { slug: "neve-shaanan", name_he: "נווה שאנן", city_slug: "haifa" },
    { slug: "ahuza", name_he: "אחוזה", city_slug: "haifa" },
    { slug: "moshava-germanit", name_he: "מושבה גרמנית", city_slug: "haifa" },
    { slug: "hadar-elyon", name_he: "הדר עליון", city_slug: "haifa" },
    { slug: "merkazit-hof-hacarmel", name_he: "התחנה המרכזית (חוף הכרמל)", city_slug: "haifa" },
    { slug: "givat-alonim", name_he: "גבעת אלונים", city_slug: "kiryat-ata" },
    { slug: "mishkenot-omanim", name_he: "משכנות אמנים", city_slug: "kiryat-motzkin" },
    { slug: "savyoney-yam", name_he: "סביוני ים", city_slug: "kiryat-bialik" },
    { slug: "psagot-yam", name_he: "פסגות ים", city_slug: "kiryat-yam" }
];

export const ROADS = [
    { slug: "highway-22", name_he: "כביש 22 (עוקף קריות)", region: "north" },
    { slug: "carmel-tunnels", name_he: "מנהרות הכרמל", region: "haifa" },
    { slug: "highway-75", name_he: "כביש 75 (העמקים)", region: "north" },
    { slug: "highway-4-south", name_he: "כביש 4 (דרום חיפה)", region: "haifa" },
    { slug: "highway-79", name_he: "כביש 79 (צומת סומך)", region: "north" },
    { slug: "highway-70-yagur", name_he: "כביש 70 (יגור)", region: "north" },
    { slug: "freud-road", name_he: "דרך פרויד (חיפה)", region: "haifa" },
    { slug: "pica-road", name_he: "דרך פיק\"א (חיפה)", region: "haifa" }
];

export const WARNING_LIGHTS = [
    { slug: "red-engine-light", name_he: "נורת מנוע אדומה", severity: "red", description: "עצור מיד! נזק למנוע אפשרי." },
    { slug: "battery-light", name_he: "נורת מצבר (אלטרנטור)", severity: "red", description: "בעיה בטעינת המצבר או באלטרנטור." },
    { slug: "oil-pressure", name_he: "נורת לחץ שמן", severity: "red", description: "לחץ שמן נמוך - סכנת הרס מוחלט למנוע." },
    { slug: "temperature", name_he: "נורת חום מנוע", severity: "red", description: "המנוע מתחמם - לעצור מיד למנוע שריפת ראש מנוע." },
    { slug: "brakes-warning", name_he: "נורת בלמים אדומה", severity: "red", description: "בעיה במערכת הבלמים - מסוכן להמשיך לנסוע." },
    { slug: "power-steering", name_he: "נורת הגה כוח", severity: "red", description: "כשל בהגה כוח, הופך את השליטה ברכב למסוכנת וקשה." },
    { slug: "transmission-warning", name_he: "נורת תיבת הילוכים אדומה", severity: "red", description: "התחממות או כשל בגיר. המשך נסיעה יכול להרוס את הגיר כליל." },
    { slug: "yellow-engine-light", name_he: "נורת מנוע צהובה (Check Engine)", severity: "yellow", description: "תקלה כללית במנוע או פליטה. בטוח לנסוע למוסך קרוב, אבל אל תתעלמו." }
];

export const HAZARDS = [
    { slug: "underground-parking", name_he: "חילוץ מחניון תת קרקעי", description: "גרר נמוך לחילוץ מחניונים תת קרקעיים." },
    { slug: "mud-rescue", name_he: "חילוץ משטח ובוץ", description: "ג'יפ חילוץ 4X4 לתנאי שטח קשים." },
    { slug: "locked-keys", name_he: "מפתח נעול ברכב", description: "פריצה בטוחה ללא נזק לרכב." },
    { slug: "wrong-fuel", name_he: "תדלוק שגוי", description: "שאיבת דלק במקום למניעת נזק המנוע." },
    { slug: "flood-rescue", name_he: "חילוץ מהצפה", description: "חילוץ מהיר משלוליות עמוקות בחיפה העיר התחתית או מתחת לגשרים." },
    { slug: "highway-flat-tire", name_he: "פנצ'ר בכביש מהיר", description: "החלפת גלגל או חילוץ בכבישים מהירים מסוכנים (כמו כביש 22), בלי לסכן את חייכם בשוליים." }
];

export const B2B_INDUSTRIES = [
    { slug: "taxis", name_he: "נהגי מוניות", description: "שירות גרירה מהיר ומקצועי המותאם במיוחד לנהגי מוניות שצריכים לחזור לעלות על ההגה כמה שיותר מהר. אפשרות לחשבונית עסקית במקום." },
    { slug: "delivery-scooters", name_he: "קטנועי משלוחים (שליחים)", description: "חילוץ קטנועי וולט/משלוחים באמצעות נגרר ייעודי לדו-גלגלי, בלי להמתין שעות לניידת שירות." },
    { slug: "leasing-fleets", name_he: "רכבי ליסינג והשכרה", description: "פתרון לחברות והשכרות. גרירה ישירה למוסכי הסדר כולל כל האישורים הנדרשים מהביטוח במקרה תאונה." },
    { slug: "work-vehicles", name_he: "משאיות ורכבי עבודה", description: "גרירת משאיות עד 12 טון, מיניבוסים ורכבי מסחריים עם ציוד כבד. גרירה עם משקפיים (Underlift)." }
];

export const DESTINATIONS = [
    { slug: "toyota-matam", name_he: "מוסך מורשה טויוטה מתם", type: "garage" },
    { slug: "hyundai-check-post", name_he: "מרכז שירות יונדאי צ'ק פוסט", type: "garage" },
    { slug: "tesla-haifa", name_he: "מוסך טסלה (Tesla) חיפה", type: "garage" },
    { slug: "mivdak-kiryat-ata", name_he: "מכון טסטים מבדק קרית אתא", type: "testing-center" },
    { slug: "pancheria-check-post", name_he: "פאנצ'ריה צ'ק פוסט", type: "tire-repair" }
];

export function findNeighborhood(slug: string) {
    return NEIGHBORHOODS.find((n) => n.slug === slug);
}

export function findRoad(slug: string) {
    return ROADS.find((r) => r.slug === slug);
}

export function findWarningLight(slug: string) {
    return WARNING_LIGHTS.find((l) => l.slug === slug);
}

export function findHazard(slug: string) {
    return HAZARDS.find((h) => h.slug === slug);
}

export function findB2BIndustry(slug: string) {
    return B2B_INDUSTRIES.find((b) => b.slug === slug);
}

export function findDestination(slug: string) {
    return DESTINATIONS.find((d) => d.slug === slug);
}

export function getPseoWhatsAppLink(customMessage: string) {
    return `${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent(customMessage)}`;
}
