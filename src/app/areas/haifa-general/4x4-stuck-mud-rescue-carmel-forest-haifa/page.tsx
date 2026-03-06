import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ 4x4 שנתקע בבוץ ביער הכרמל חיפה – זמינות 24/7",
  description: "נתקעתם עם רכב שטח 4x4 בבוץ עמוק ביער הכרמל או באזור חיפה והקריות? אנו מספקים שירותי חילוץ מקצועיים ומהירים לרכבי שטח 4x4 שנתקעו, זמינים 24/7. מחירים הוגנים.",
  keywords: ["חילוץ 4x4", "רכב שטח נתקע בבוץ", "יער הכרמל", "חיפה", "גרירה 4x4", "שירותי דרך חיפה", "חילוץ רכבים 24/7"],
  openGraph: {
    title: "חילוץ 4x4 שנתקע בבוץ ביער הכרמל חיפה – זמינות 24/7",
    description: "נתקעתם עם רכב שטח 4x4 בבוץ עמוק ביער הכרמל או באזור חיפה והקריות? אנו מספקים שירותי חילוץ מקצועיים ומהירים לרכבי שטח 4x4 שנתקעו, זמינים 24/7. מחירים הוגנים.",
    url: "https://yourdomain.com/4x4-stuck-mud-rescue-carmel-forest-haifa",
    images: [
      {
        url: "https://yourdomain.com/images/4x4-rescue-carmel.jpg",
        alt: "רכב 4x4 נחלץ מבוץ ביער הכרמל",
      },
    ],
  },
  alternates: {
    canonical: "https://yourdomain.com/4x4-stuck-mud-rescue-carmel-forest-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה 24/7 בחיפה והקריות",
    "description": "חילוץ 4x4 שנתקע בבוץ ביער הכרמל חיפה, גרירת רכבים פרטיים, מסחריים ושטח בחיפה והקריות. זמינות 24/7.",
    "url": "https://yourdomain.com/4x4-stuck-mud-rescue-carmel-forest-haifa",
    "image": "https://yourdomain.com/images/4x4-rescue-carmel.jpg",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$",
    "areaServed": [
      {
        "@type": "City",
        "name": "חיפה"
      },
      {
        "@type": "City",
        "name": "הקריות"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.788,
      "longitude": 35.000
    },
    "serviceType": [
      "חילוץ רכבי שטח",
      "גרירת 4x4",
      "חילוץ מבוץ",
      "שירותי דרך",
      "גרירת רכבים פרטיים",
      "גרירת רכבים מסחריים"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section - SGE Answer-first */}
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            חילוץ 4x4 שנתקע בבוץ ביער הכרמל חיפה – זמינות 24/7
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            נתקעתם עם רכב שטח 4x4 בבוץ עמוק ביער הכרמל או באזור חיפה והקריות? אנו מספקים שירותי חילוץ מקצועיים ומהירים לרכבי שטח 4x4 שנתקעו, זמינים עבורכם 24 שעות ביממה, 7 ימים בשבוע.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300 font-bold py-3 px-8 rounded-full text-lg">
              התקשרו עכשיו
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-gray-900 text-gray-200 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-400">
              למה לבחור בנו לחילוץ 4x4 ביער הכרמל?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  מומחיות בחילוץ שטח קשה
                </h3>
                <p className="text-lg leading-relaxed">
                  יער הכרמל ידוע בשביליו המאתגרים, בוץ עמוק ומכשולים טבעיים. צוות החילוץ שלנו מנוסה במיוחד בהתמודדות עם תנאי שטח קשים אלו. אנו מצוידים ברכבי חילוץ ייעודיים, כננות חזקות וכלים מתקדמים המאפשרים לנו לחלץ את רכב ה-4x4 שלכם בבטחה ובמהירות, ללא נזקים נוספים.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  זמינות 24/7 ומענה מהיר
                </h3>
                <p className="text-lg leading-relaxed">
                  תקלות ונתקעויות בשטח קורות לרוב ברגעים הכי פחות צפויים, ולעיתים קרובות בשעות הלילה המאוחרות או בסופי שבוע. אנו מבינים זאת ומציעים שירותי חילוץ 4x4 ביער הכרמל ובכל אזור חיפה והקריות, 24 שעות ביממה, 7 ימים בשבוע. התקשרו אלינו ונגיע אליכם במהירות האפשרית.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  מחירים הוגנים ושקיפות מלאה
                </h3>
                <p className="text-lg leading-relaxed">
                  אנו מאמינים בשקיפות מלאה ובמחירים הוגנים עבור שירותי החילוץ שלנו. תקבלו הצעת מחיר ברורה ומפורטת בטלפון, ללא הפתעות. המטרה שלנו היא לספק לכם שירות מקצועי ואמין במחיר משתלם, כדי שתוכלו לחזור לשגרה במהרה.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  שירותי גרירה וחילוץ נוספים
                </h3>
                <p className="text-lg leading-relaxed">
                  בנוסף לחילוץ רכבי 4x4 מבוץ, אנו מציעים מגוון רחב של שירותי גרירה וחילוץ לרכבים פרטיים, רכבים מסחריים ורכבי שטח מכל סוג. בין אם נתקעתם עקב תקלה מכנית, תאונה או כל סיבה אחרת – אנחנו כאן כדי לעזור. אנו לא מספקים שירותי גרירה לאופנועים.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">
              איך מזמינים שירות חילוץ 4x4 ביער הכרמל?
            </h2>
            <p className="text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              תהליך הזמנת שירות החילוץ פשוט ומהיר:
            </p>
            <ol className="list-decimal list-inside text-left max-w-xl mx-auto text-lg space-y-3">
              <li>
                <span className="font-semibold text-white">צרו קשר:</span> התקשרו אלינו מיד או שלחו הודעת וואטסאפ.
              </li>
              <li>
                <span className="font-semibold text-white">ספרו לנו מה קרה:</span> תארו את מיקומכם המדויק ביער הכרמל (ככל הניתן) ואת מצב הרכב.
              </li>
              <li>
                <span className="font-semibold text-white">קבלו הצעת מחיר:</span> נספק לכם הצעת מחיר הוגנת בטלפון.
              </li>
              <li>
                <span className="font-semibold text-white">אנחנו בדרך:</span> צוות החילוץ שלנו יצא אליכם מיד עם הציוד המתאים.
              </li>
            </ol>
          </section>

          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">
              זקוקים לחילוץ 4x4 ביער הכרמל חיפה?
            </h2>
            <p className="text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              אל תהססו! אנו כאן כדי לספק לכם שירות חילוץ מהיר, בטוח ומקצועי.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <WhatsAppCTA cityName="Haifa and Krayot" />
              <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300 font-bold py-3 px-8 rounded-full text-lg">
                התקשרו עכשיו לקבלת עזרה
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}