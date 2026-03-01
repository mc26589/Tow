import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";

// הגדרת מטא-דאטה עבור הדף
export const metadata: Metadata = {
  title: "חילוץ רכב מבוץ בשמורת הכרמל חיפה | שירות 24/7",
  description: "זקוקים לחילוץ רכב מבוץ בשמורת הכרמל בחיפה? אנו מספקים שירותי חילוץ מהירים ומקצועיים 24/7 לרכבים פרטיים, מסחריים ו-4X4. התקשרו עכשיו!",
  keywords: ["חילוץ רכב מבוץ", "שמורת הכרמל", "חיפה", "חילוץ רכב", "גרירה חיפה", "שירותי דרך", "חילוץ 4X4"],
  alternates: {
    canonical: "https://yourdomain.com/car-extraction-from-mud-carmel-reserve-haifa", // יש לעדכן לדומיין האמיתי
  },
};

// קומפוננטת JSON-LD לנתונים מובנים
function JsonLd() {
  const jsonLdData = {
    "@context": "http://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "description": "שירותי חילוץ רכב מבוץ בשמורת הכרמל חיפה, גרירה וחילוץ 24/7 בחיפה והקריות. מענה מהיר ומקצועי לכל סוגי הרכבים (פרטיים, מסחריים, 4X4).",
    "url": "https://yourdomain.com/car-extraction-from-mud-carmel-reserve-haifa", // יש לעדכן לדומיין האמיתי
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$",
    "areaServed": {
      "@type": "Place",
      "name": "חיפה והקריות",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.745, // קואורדינטות משוערות למרכז שמורת הכרמל
        "longitude": 35.005
      }
    },
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
    "serviceType": [
      "חילוץ רכב מבוץ",
      "גרירת רכב",
      "חילוץ שטח",
      "שירותי דרך",
      "חילוץ 4X4"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}

// קומפוננטת הדף הראשית (Server Component)
export default function Page() {
  return (
    <>
      <JsonLd />

      {/* Hero Section - SGE Answer-first */} 
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            חילוץ רכב מבוץ בשמורת הכרמל חיפה – שירות מהיר ומקצועי 24/7
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            זקוקים לחילוץ רכב מבוץ בשמורת הכרמל בחיפה? אנו מספקים שירותי חילוץ רכב מהירים, מקצועיים ובטוחים 24 שעות ביממה, 7 ימים בשבוע, לכל סוגי הרכבים – פרטיים, מסחריים ורכבי שטח 4X4. צוותי החילוץ שלנו מצוידים בציוד מתקדם ובעלי היכרות מעמיקה עם תוואי השטח באזור שמורת הכרמל, מה שמבטיח חילוץ יעיל ומהיר גם בתנאים מאתגרים.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300 font-semibold py-3 px-8 rounded-full text-lg shadow-lg"
            >
              <i className="fa-solid fa-phone ml-2"></i> חייגו עכשיו
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Sections */} 
      <main className="bg-gray-900 text-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* למה לבחור בנו? */} 
          <section className="mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-primary-400">
              למה לבחור בנו לחילוץ רכב בשמורת הכרמל?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold mb-3 text-white">זמינות 24/7</h3>
                <p className="text-gray-300">אנו זמינים עבורכם בכל שעה, בכל יום, כולל סופי שבוע וחגים. לעולם לא תישארו לבד בשטח.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold mb-3 text-white">מענה מהיר</h3>
                <p className="text-gray-300">צוותי החילוץ שלנו פרוסים באזור חיפה והקריות ומגיעים אליכם במהירות האפשרית, גם לנקודות מרוחקות בשמורה.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold mb-3 text-white">ציוד חילוץ מתקדם</h3>
                <p className="text-gray-300">אנו מצוידים ברכבי חילוץ ייעודיים ובציוד חדיש ומתקדם, המאפשר חילוץ בטוח ויעיל מכל מצב – בוץ עמוק, חול טובעני או שטח סלעי.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold mb-3 text-white">צוות מנוסה ומקצועי</h3>
                <p className="text-gray-300">הנהגים והמחלצים שלנו מיומנים ובעלי ניסיון רב בחילוצי שטח מורכבים, עם דגש על בטיחות הרכב והנוסעים.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold mb-3 text-white">היכרות מעמיקה עם השטח</h3>
                <p className="text-gray-300">הכרת תוואי השטח והדרכים בשמורת הכרמל מאפשרת לנו להגיע אליכם במהירות ולבצע את החילוץ ביעילות מרבית.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold mb-3 text-white">מחירים הוגנים</h3>
                <p className="text-gray-300">אנו מציעים שירות מקצועי במחירים הוגנים ותחרותיים. קבלו הצעת מחיר בטלפון ללא התחייבות.</p>
              </div>
            </div>
          </section>

          {/* השירותים שלנו בשמורת הכרמל */} 
          <section className="mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-primary-400">
              השירותים שלנו בשמורת הכרמל ובחיפה
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold mb-3 text-white">חילוץ רכבים מבוץ ושטח</h3>
                <p className="text-gray-300">מומחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4X4 שנתקעו בבוץ, חול או תנאי שטח קשים באזור שמורת הכרמל ובסביבתה.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold mb-3 text-white">גרירת רכבים</h3>
                <p className="text-gray-300">שירותי גרירה מקצועיים לכל יעד לאחר החילוץ, או במקרה של תקלה מכנית, תאונה ועוד.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold mb-3 text-white">שירותי דרך</h3>
                <p className="text-gray-300">סיוע מהיר במקרים של פנצ'ר (החלפת גלגל), התנעת רכב, אספקת דלק ועוד, כדי שתוכלו לחזור לדרך במהירות.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold mb-3 text-white">חילוץ רכבי 4X4</h3>
                <p className="text-gray-300">התמחות מיוחדת בחילוץ רכבי שטח מכל מצב, תוך שימוש בטכניקות וציוד המותאמים לרכבים אלו.</p>
              </div>
            </div>
          </section>

          {/* איך זה עובד? */} 
          <section className="mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-primary-400">
              נתקעתם בבוץ בשמורת הכרמל? כך תקבלו עזרה במהירות:
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-lg max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl">
              <li>
                <span className="font-semibold text-white">התקשרו אלינו:</span> חייגו למספר הטלפון שלנו או שלחו הודעת וואטסאפ. אנו זמינים 24/7.
              </li>
              <li>
                <span className="font-semibold text-white">פרטו את המיקום:</span> ספרו לנו היכן נתקעתם בשמורת הכרמל (ככל שתוכלו לדייק, כך נגיע מהר יותר) ומה מצב הרכב.
              </li>
              <li>
                <span className="font-semibold text-white">צוות בדרך:</span> צוות חילוץ מקצועי ומצויד יצא אליכם מיד עם קבלת הקריאה.
              </li>
              <li>
                <span className="font-semibold text-white">חילוץ בטוח ומהיר:</span> נחלץ את רכבכם בבטחה ובמקצועיות, ונבטיח שתחזרו לדרך או ליעדכם במהירות.
              </li>
            </ol>
          </section>

          {/* קריאה לפעולה סופית */} 
          <section className="text-center bg-gray-800 p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-primary-400">
              אל תחכו! קבלו עזרה מקצועית עכשיו!
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              נתקעתם בבוץ בשמורת הכרמל? אל תנסו לחלץ את הרכב לבד ותסכנו נזקים נוספים. צרו קשר וצוות מקצועי יגיע אליכם במהירות.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <WhatsAppCTA cityName="Haifa and Krayot" />
              <a
                href={`tel:+${BUSINESS_INFO.phone}`}
                className="bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300 font-semibold py-3 px-8 rounded-full text-lg shadow-lg"
              >
                <i className="fa-solid fa-phone ml-2"></i> חייגו לקבלת הצעת מחיר
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
