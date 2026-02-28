import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata = {
  title: "מי קונה רכבים ישנים לחלפים בקרית חיים והקריות? | גרירה ללא עלות",
  description: "אנו לא קונים רכבים לחלפים, אך מספקים שירותי גרירה ופינוי רכבים ישנים וגרוטאות ללא עלות בקרית חיים, הקריות וחיפה. גרירת רכבים פרטיים, מסחריים ו-4X4 24/7.",
  alternates: {
    canonical: "https://yourdomain.com/buying-old-cars-parts-kiryat-haim-krayot", // Placeholder, replace with actual domain
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": BUSINESS_INFO.name || "שירותי גרירה וחילוץ חירום חיפה והקריות", // Fallback if BUSINESS_INFO.name is not set
    "description": "שירותי גרירה וחילוץ חירום לרכבים פרטיים, מסחריים ורכבי שטח (4X4) בקרית חיים והקריות. פינוי רכבי גרוטאה והובלה לאחר מכירה לחלפים, ללא עלות.",
    "url": "https://yourdomain.com/buying-old-cars-parts-kiryat-haim-krayot", // Placeholder, replace with actual domain
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$",
    "areaServed": {
      "@type": "Place",
      "name": "חיפה והקריות",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.818, // Approximate center for Kiryat Haim / Krayot
        "longitude": 35.04 // Approximate center for Kiryat Haim / Krayot
      }
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "serviceType": ["גרירת חירום", "חילוץ רכבים", "פינוי רכבי גרוטאה", "הובלת רכבים לחלפים", "גרירת רכבים תקולים", "גרירת רכבים לאחר תאונה"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            מי קונה רכבים ישנים לחלפים בקרית חיים והקריות?
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            אנו מבינים את הצורך למצוא קונה לרכב ישן או לרכב המיועד לחלפים. חשוב לנו להבהיר כי אנו איננו עוסקים ברכישת רכבים ישנים או רכבים לחלפים.
            עם זאת, אם מכרתם רכב ישן לחלפים בקרית חיים, קרית מוצקין, קרית ים, קרית ביאליק או בכל אזור הקריות וחיפה, ואתם זקוקים לשירותי גרירה והובלה מקצועיים ואמינים – אנו כאן לשירותכם. אנו מספקים שירותי גרירה ופינוי רכבים ללא עלות, כולל רכבי גרוטאה, רכבים תקולים או רכבים לאחר תאונה, ליעד שתבחרו.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg"
            >
              התקשרו אלינו עכשיו
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            צריכים לגרור רכב ישן או גרוטאה בקרית חיים והקריות?
          </h2>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed">
            <p className="mb-6">
              גם אם מצאתם קונה לרכב הישן שלכם לחalפים, או אם הרכב שלכם הוגדר כגרוטאה וצריך לפנות אותו מהשטח, אתם זקוקים לשירותי גרירה מקצועיים. אנו מתמחים בגרירת רכבים פרטיים, רכבים מסחריים ורכבי שטח (4X4) בכל אזור חיפה והקריות, כולל קרית חיים, קרית מוצקין, קרית ים וקרית ביאליק. שירותי הגרירה שלנו ניתנים ללא עלות, 24 שעות ביממה, 7 ימים בשבוע.
            </p>
            <p className="mb-6 font-bold text-red-400">
              חשוב לדעת: אנו איננו גוררים אופנועים. התמחותנו היא ברכבים בלבד.
            </p>
            <p className="mb-6">
              בין אם הרכב שלכם תקוע, לא מניע, או שפשוט מכרתם אותו לחלפים וצריך להעביר אותו ליעד חדש – אנו נדאג לגרור אותו בבטחה וביעילות, ללא כל עלות מצידכם. אנו משרתים את כל תושבי קרית חיים והקריות, ומספקים פתרון מהיר ואמין לכל צורך בגרירה.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            למה לבחור בשירותי הגרירה והפינוי שלנו?
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-lg">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3 text-blue-300">שירות ללא עלות</h3>
              <p>גרירה ופינוי רכבים ללא כל חיוב באזור חיפה והקריות. אנו מאמינים בשירות שקוף והוגן.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3 text-blue-300">זמינות 24/7</h3>
              <p>אנו זמינים עבורכם בכל שעה, ביום ובלילה, כולל סופי שבוע וחגים, למענה מיידי.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3 text-blue-300">מקצועיות ואמינות</h3>
              <p>צוות מיומן וציוד גרירה מתקדם המבטיחים טיפול בטוח ויעיל ברכבכם, ללא נזקים.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3 text-blue-300">מענה מהיר</h3>
              <p>אנו מגיעים אליכם במהירות המרבית כדי לספק פתרון מיידי לכל מצב חירום.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg md:col-span-2">
              <h3 className="text-2xl font-semibold mb-3 text-blue-300">כיסוי נרחב</h3>
              <p>שירות בכל רחבי חיפה והקריות, כולל קרית חיים, קרית מוצקין, קרית ים, קרית ביאליק ועוד.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-950 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            לשירותי גרירה ופינוי רכבים ללא עלות בקרית חיים והקריות, צרו קשר עוד היום!
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg"
            >
              התקשרו אלינו עכשיו
            </a>
          </div>
        </div>
      </section>
    </>
  );
}