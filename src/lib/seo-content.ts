// ============================================
// SEO Content Spinner for Programmatic Generation
// Eliminates Duplicate Content Issues
// ============================================

import { BUSINESS_INFO } from "./data";

// Simple deterministic PRNG (Pseudo-Random Number Generator) based on a string seed
// This ensures /haifa/toyota always gets the same random numbers, but /akko/toyota gets different ones.
function seededRandom(seed: string) {
    let h = 0xdeadbeef;
    for (let i = 0; i < seed.length; i++) {
        h = Math.imul(h ^ seed.charCodeAt(i), 2654435761);
    }
    return function () {
        h = Math.imul(h ^ (h >>> 16), 2246822507);
        h = Math.imul(h ^ (h >>> 13), 3266489909);
        return (h ^= h >>> 16) >>> 0;
    };
}

// Utility to randomly select from an array based on the seeded generator
export function randomize<T>(arr: readonly T[], rng: () => number): T {
    return arr[rng() % arr.length];
}

// ============================================
// 1. Spintax Variations for UI Elements
// ============================================

const HERO_VERBS = [
    "נתקעתם עם",
    "האוטו לא מניע?",
    "מחפשים גרירה דחופה ל",
    "צריכים חילוץ מהיר ל",
    "הרכב נתקע? שירות גרירה מיוחד ל",
];

const HERO_TIME_PROMISES = [
    "מגיעים אליכם תוך 30 דקות",
    "זמן הגעה משוער: עד חצי שעה",
    "צוות קרוב בדרך אליכם מיידית",
    "שירותי דרך מהירים מסביב לשעון",
    "הגעה מהירה מובטחת באזור",
];

export function generateHeroText(city: string, vehicle: string) {
    const rng = seededRandom(`${city}-${vehicle}-hero`);
    const verb = randomize(HERO_VERBS, rng);
    const time = randomize(HERO_TIME_PROMISES, rng);

    if (verb.includes("?")) {
        return `${verb} אנחנו מתמחים בחילוץ ${vehicle} באזור ${city}. ${time} עם ציוד ששומר על הרכב שלכם. מחירים הוגנים וללא הפתעות.`;
    }
    return `${verb} ה${vehicle} ב${city}? ${time} עם ציוד מקצועי ומותאם. אצלנו המחיר ידוע מראש.`;
}

// Variations for the 3 'Why Choose Us' boxes
export function generateValueProps(city: string, vehicle: string) {
    const rng = seededRandom(`${city}-${vehicle}-props`);

    const prop1Variations = [
        {
            title: `הגעה אקספרס ל${city}`,
            desc: `פרוסים בכל שכונות ${city}. זמן תגובה של עד 30 דקות בממוצע. לא נשאיר אתכם לחכות בצד הכביש.`,
        },
        {
            title: `זמינות מיידית באזור ${city}`,
            desc: `הגררים שלנו נמצאים עכשיו ב${city} והסביבה. קריאה שלכם - ואנחנו סוגרים כיוון אליכם באופן מיידי.`,
        },
        {
            title: `שירות גרירה מהיר ב${city}`,
            desc: `מכירים את פקקי התנועה ואת הקיצורים. הנהג הקרוב ביותר ב${city} בדרך אליכם כבר עכשיו.`,
        }
    ];

    const prop2Variations = [
        {
            title: `מחיר הוגן וללא עוקץ`,
            desc: `מתחייבים למחיר סופי מראש. מה שסיכמנו בטלפון - זה מה שאתם משלמים. בלי אותיות קטנות.`,
        },
        {
            title: `תמחור בשקיפות מלאה`,
            desc: `קבלו הצעת מחיר מסודרת לפני שאנחנו מדליקים מנוע. אמינות ויושרה חשובים לנו יותר מכל.`,
        },
        {
            title: `מחירון זול ומשתלם`,
            desc: `שירותי דרך וגרירה במחירים המשתלמים באזור. תעריפי לילה וסופ"ש ברורים מראש.`,
        }
    ];

    const prop3Variations = [
        {
            title: `התמחות בגרירת ${vehicle}`,
            desc: `הגררים שלנו מצוידים היטב לקשירה טכנית ובטוחה של דגמי ${vehicle} כדי למנוע נזק לשלדה או לפגושים.`,
        },
        {
            title: `מיומנות חילוץ ל-${vehicle}`,
            desc: `ניסיון רב בחילוץ ובהעמסה של ${vehicle}. יורדים לפרטים הקטנים כך שהרכב שלכם בידיים בטוחות.`,
        },
        {
            title: `בטיחות מקסימלית ל${vehicle}`,
            desc: `משתמשים במיכשור חדיש בלבד שלא שורט ולא מעקם. אנו מבינים את המשמעות של שמירה על ה${vehicle} שלכם.`,
        }
    ];

    return [
        randomize(prop1Variations, rng),
        randomize(prop2Variations, rng),
        randomize(prop3Variations, rng),
    ];
}

// ============================================
// 2. Semantic Hidden Injections (sr-only)
// Specifically built for Googlebot density without visual spam
// ============================================
const SEO_HIDDEN_KEYWORDS = [
    "מצבר מת", "פנצ'ר", "רכב לא מניע", "תאונת דרכים", "חילוץ מגובה",
    "רכב תקוע בחול", "מפתח ננעל ברכב", "חילוץ שטח", "גרירה מהירה למוסך",
    "שירותי דרך 24/7", "מוסך נייד", "גרירת אופנועים במקביל", "החלפת גלגל"
];

export function generateHiddenText(citySlug: string, cityName: string, vehicleName: string) {
    const rng = seededRandom(`${citySlug}-${vehicleName}-hidden`);

    // Pick 3 random extreme keywords
    const k1 = randomize(SEO_HIDDEN_KEYWORDS, rng);
    const k2 = randomize(SEO_HIDDEN_KEYWORDS, () => rng() + 1);
    const k3 = randomize(SEO_HIDDEN_KEYWORDS, () => rng() + 2);

    return `מעבר לשירותי גרירה סטנדרטיים, סיירת ${BUSINESS_INFO.name} מספקת מענה מלא המכסה מקרים כמו ${k1}, ${k2} ואפילו ${k3} באזור ${cityName}. אנו מבינים שגרירת ${vehicleName} מצריכה ידע מקצועי וזהירות יתרה, ולכן צוות החילוץ שלנו ערוך לכל תרחיש בכל שעה ביום. אם אתם מחפשים מענה מידי, שירותי הדרך שלנו מותאמים אישית לתושבי ${cityName} וסביבתה הקרובה. מחפשים שירות אמין במרכז ${cityName}? אנחנו כאן.`;
}

// ============================================
// 3. Dynamic FAQs for Schema JSON-LD and Display
// ============================================
export interface FAQItem {
    question: string;
    answer: string;
}

export function generateFAQs(cityName: string, vehicleName: string): FAQItem[] {
    const rng = seededRandom(`${cityName}-${vehicleName}-faq`);

    const potentialFaqs = [
        {
            question: `כמה זמן לוקח לגרר להגיע ל${cityName}?`,
            answer: `זמן ההגעה הממוצע שלנו בתוך ${cityName} הוא עד 30 דקות. הניידות שלנו כבר מסתובבות באזור ולכן התגובה מהירה.`
        },
        {
            question: `האם יש לכם ניסיון עם גרירה ספציפית של ${vehicleName}?`,
            answer: `בהחלט. יש לנו ניסיון רב, ציוד מתאים ורצועות עיגון מיוחדות שמתאימות לטיפול ברכבי ${vehicleName} כדי להבטיח שלמות מוחלטת של הפח והשלדה בנסיעה.`
        },
        {
            question: `האם שירות הגרירה שלכם פעיל בשבתות ב${cityName}?`,
            answer: `כן! ${BUSINESS_INFO.name} מספק שירותי חילוץ וגרירה 24 שעות ביממה, 7 ימים בשבוע, כולל סופי שבוע וחגים לכל תושבי ${cityName}.`
        },
        {
            question: `איך מחושב מחיר הגרירה של ${vehicleName}?`,
            answer: `העלות נקבעת על פי מרחק הגרירה (מ-${cityName} ואל יעד המוסך) וכן על פי נגישות הרכב בעת התקלה. אנו מתחייבים לספק מחיר סופי ומדויק בטלפון לפני ההגעה.`
        },
        {
            question: `האם אפשר להצטרף לנהג הגרר מ${cityName} עד למוסך?`,
            answer: `ברוב הגררים שלנו יש מקום לנוסע התלווה לנהג (לפי תקנות תעבורה). מומלץ לוודא זאת איתנו בשיחת הטלפון.`
        },
        {
            question: `נתקעתי בחניון תת-קרקעי ב${cityName}. האם אתם יכולים למשוך משם ${vehicleName}?`,
            answer: `תלוי בגובה התקרה של החניון, אך לרוב נוכל להגיע עם רכב חילוץ נמוך מיוחד (טנדר חילוץ) ולמשוך את ה${vehicleName} שלכם עד לרחוב הראשי ב${cityName} ומשם להעמיסו על הגרר הגדול.`
        }
    ];

    // Select exactly 3 unique FAQs based on the seed
    const selected: FAQItem[] = [];
    const usedIndices = new Set<number>();

    while (selected.length < 3) {
        let h = Math.imul(rng() ^ (rng() >>> 16), 2246822507);
        const nextVal = (h ^= h >>> 16) >>> 0;
        const index = nextVal % potentialFaqs.length;
        if (!usedIndices.has(index)) {
            usedIndices.add(index);
            selected.push(potentialFaqs[index]);
        }
    }

    return selected;
}
