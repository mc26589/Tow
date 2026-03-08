import { BUSINESS_INFO } from "./data";

export const NEIGHBORHOODS = [
    // Haifa
    { slug: "romema", name_he: "רוממה", city_slug: "haifa" },
    { slug: "denya", name_he: "דניה", city_slug: "haifa" },
    { slug: "merkaz-hakarmel", name_he: "מרכז הכרמל", city_slug: "haifa" },
    { slug: "neve-shaanan", name_he: "נווה שאנן", city_slug: "haifa" },
    { slug: "ahuza", name_he: "אחוזה", city_slug: "haifa" },
    { slug: "moshava-germanit", name_he: "מושבה גרמנית", city_slug: "haifa" },
    { slug: "hadar-elyon", name_he: "הדר עליון", city_slug: "haifa" },
    { slug: "bat-galim", name_he: "בת גלים", city_slug: "haifa" },
    { slug: "sderot-moriah", name_he: "שדרות מוריה", city_slug: "haifa" },
    { slug: "karmeliya", name_he: "כרמליה", city_slug: "haifa" },
    { slug: "stella-maris", name_he: "סטלה מאריס", city_slug: "haifa" },

    // Kiryat Ata
    { slug: "givat-alonim", name_he: "גבעת אלונים", city_slug: "kiryat-ata" },
    { slug: "kiryat-binyamin", name_he: "קרית בנימין", city_slug: "kiryat-ata" },
    { slug: "kiryat-nahum", name_he: "קרית נחום", city_slug: "kiryat-ata" },
    { slug: "kiryat-frostig", name_he: "קרית פרוסטיג", city_slug: "kiryat-ata" },
    { slug: "zvolun-street", name_he: "רחוב זבולון", city_slug: "kiryat-ata" },

    // Kiryat Motzkin
    { slug: "mishkenot-omanim", name_he: "משכנות אמנים", city_slug: "kiryat-motzkin" },
    { slug: "neve-ganim", name_he: "נווה גנים", city_slug: "kiryat-motzkin" },
    { slug: "sderot-goshen", name_he: "שדרות גושן", city_slug: "kiryat-motzkin" },
    { slug: "motzkin-vatika", name_he: "מוצקין הוותיקה", city_slug: "kiryat-motzkin" },

    // Kiryat Bialik
    { slug: "savyoney-yam", name_he: "סביוני ים", city_slug: "kiryat-bialik" },
    { slug: "tzur-shalom", name_he: "צור שלום", city_slug: "kiryat-bialik" },
    { slug: "afek", name_he: "אפק", city_slug: "kiryat-bialik" },
    { slug: "keren-hayesod", name_he: "רחוב קרן היסוד", city_slug: "kiryat-bialik" },

    // Kiryat Yam
    { slug: "psagot-yam", name_he: "פסגות ים", city_slug: "kiryat-yam" },
    { slug: "kiryat-yam-a", name_he: "קרית ים א'", city_slug: "kiryat-yam" },
    { slug: "kiryat-yam-b", name_he: "קרית ים ב'", city_slug: "kiryat-yam" },
    { slug: "almogim", name_he: "אלמוגים", city_slug: "kiryat-yam" },
    { slug: "sderot-pinhas-lavon", name_he: "שדרות פנחס לבון", city_slug: "kiryat-yam" },

    // Kiryat Haim
    { slug: "ma'aravit", name_he: "מערבית", city_slug: "kiryat-haim" },
    { slug: "mizrahit", name_he: "מזרחית", city_slug: "kiryat-haim" },
    { slug: "achi-eilat", name_he: "רחוב אח\"י אילת", city_slug: "kiryat-haim" },

    // Kiryat Shmuel
    { slug: "merkaz-hakirya", name_he: "מרכז הקריה", city_slug: "kiryat-shmuel" },

    // Yokneam
    { slug: "yokneam-illit", name_he: "יקנעם עילית", city_slug: "yokneam" },
    { slug: "ramat-haemek", name_he: "רמת העמק", city_slug: "yokneam" },
    { slug: "givat-yaara", name_he: "גבעת יערה", city_slug: "yokneam" },

    // Kiryat Tivon
    { slug: "kiryat-haroshet", name_he: "קרית חרושת", city_slug: "kiryat-tivon" },
    { slug: "elroai", name_he: "אלרואי", city_slug: "kiryat-tivon" },
    { slug: "ramat-tivon", name_he: "רמת טבעון", city_slug: "kiryat-tivon" },
    { slug: "merkaz-tivon", name_he: "מרכז טבעון", city_slug: "kiryat-tivon" },

    // Rekhasim
    { slug: "hesed-leavraham", name_he: "שכונת חסד לאברהם", city_slug: "rekhasim" },
    { slug: "givat-hareichman", name_he: "שכונת גבעת הרייכמן", city_slug: "rekhasim" },
    { slug: "shikun-sela", name_he: "שיכון סלע", city_slug: "rekhasim" },

    // Akko
    { slug: "old-city", name_he: "העיר העתיקה", city_slug: "akko" },
    { slug: "ben-ami", name_he: "רחוב בן עמי", city_slug: "akko" },
    { slug: "ben-gurion", name_he: "שכונת בן גוריון", city_slug: "akko" },
    { slug: "shikun-3", name_he: "שיכון 3", city_slug: "akko" },

    // Nesher
    { slug: "tel-hanan", name_he: "תל חנן", city_slug: "nesher" },
    { slug: "ben-dor", name_he: "בן דור", city_slug: "nesher" },
    { slug: "ramot-yitzhak", name_he: "רמות יצחק", city_slug: "nesher" },
    { slug: "givat-amos", name_he: "גבעת עמוס", city_slug: "nesher" },
    { slug: "givat-nesher", name_he: "גבעת נשר", city_slug: "nesher" }
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
    // Standard lights
    { slug: "red-engine-light", name_he: "נורת מנוע אדומה", severity: "red", description: "עצור מיד! נזק למנוע אפשרי." },
    { slug: "battery-light", name_he: "נורת מצבר (אלטרנטור)", severity: "red", description: "בעיה בטעינת המצבר או באלטרנטור." },
    { slug: "oil-pressure", name_he: "נורת לחץ שמן", severity: "red", description: "לחץ שמן נמוך - סכנת הרס מוחלט למנוע." },
    { slug: "temperature", name_he: "נורת חום מנוע", severity: "red", description: "המנוע מתחמם - לעצור מיד למנוע שריפת ראש מנוע." },
    { slug: "brakes-warning", name_he: "נורת בלמים אדומה", severity: "red", description: "בעיה במערכת הבלמים - מסוכן להמשיך לנסוע." },
    { slug: "power-steering", name_he: "נורת הגה כוח", severity: "red", description: "כשל בהגה כוח, הופך את השליטה ברכב למסוכנת וקשה." },
    { slug: "transmission-warning", name_he: "נורת תיבת הילוכים אדומה", severity: "red", description: "התחממות או כשל בגיר. המשך נסיעה יכול להרוס את הגיר כליל." },
    { slug: "yellow-engine-light", name_he: "נורת מנוע צהובה (Check Engine)", severity: "yellow", description: "תקלה כללית במנוע או פליטה. בטוח לנסוע למוסך קרוב, אבל אל תתעלמו." },

    // Car-specific common breakdowns
    { slug: "toyota-hybrid-battery", name_he: "תקלת סוללה היברידית קורולה/יאריס", severity: "red", description: "תקלת מערכת היברידית בטויוטה שורפת את מחשב הרכב אם ממשיכים לנסוע. נדרשת גרירה למוסך מורשה טויוטה." },
    { slug: "hyundai-kia-dct-overheat", name_he: "התחממות גיר רובוטי יונדאי/קיה", severity: "red", description: "התחממות גיר DCT בדגמי יונדאי טוסון או קיה ספורטאז'. חובה לעצור ולהזמין גרר למניעת הרס המצמדים." },
    { slug: "vag-dsg-mechatronic", name_he: "תקלת מחשב גיר DSG סקודה/סיאט", severity: "red", description: "תקלה במכטרוניקס של גיר DSG בדגמי סקודה אוקטביה או סיאט לאון. הרכב נתקע בהילוך או לא משלב הילוכים." },
    { slug: "tesla-12v-dead", name_he: "מצבר 12V מת בטסלה", severity: "yellow", description: "מצבר 12V פרק לחלטין או תקול בטסלה. הרכב מושבת ולא ניתן לפתוח דלתות או לנסוע. נדרש חילוץ יצירתי והחלפת מצבר במרכז שירות." },
    { slug: "chevrolet-cruze-overheat", name_he: "התחממות מנוע משאבת מים שברולט", severity: "red", description: "תקלה נפוצה של נזילת מים/התחממות מנוע בשברולט קרוז או טראקס. גרירה דחופה למניעת שריפת אטם ראש מנוע." }
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
