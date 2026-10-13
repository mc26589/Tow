import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

function JsonLd<T>({ data }: { data: T }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const metadata: Metadata = {
  title: "גרר באחוזה חיפה: מחיר הוגן, הגעה מהירה תוך 30 דקות | 24/7",
  description: "נתקעתם עם הרכב באחוזה חיפה? אנו מציעים שירות גרירה מקצועי, שקוף ומהיר לכל סוגי הרכבים. הגעה תוך חצי שעה, מחירים ללא הפתעות. התקשרו עכשיו לקבלת שירות!",
  alternates: {
    canonical: "https://yourdomain.com/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing",
  },
};

export default function Page() {
  const jsonLdData = {
    "@context": "http://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ באחוזה חיפה",
    "description": "שירותי גרירה זולים, מהירים ושקופים באחוזה חיפה ובכל אזור חיפה והקריות, 24/7.",
    "url": "https://yourdomain.com/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$$,$",
    "areaServed": {
      "@type": "Place",
      "name": "חיפה, שכונת אחוזה",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.7940,
        "longitude": 34.9896
      }
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            שירותי גרירה באחוזה חיפה: שקיפות מלאה ומענה מהיר
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            זקוקים לגרר באחוזה? אנו מומחים בחילוץ רכבים פרטיים ומסחריים בעליות המאתגרות של הכרמל. צוות מקצועי זמין עבורכם 24 שעות ביממה, 7 ימים בשבוע.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg">
              התקשרו עכשיו: גרר זמין באחוזה
            </a>
            <WhatsAppCTA cityName="Haifa" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">למה לבחור בשירותי הגרירה שלנו בחיפה?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg"><h3>שקיפות מחירים</h3><p>מחיר הוגן וקבוע מראש. זקוקים לפתרון משלים באזור אחר? בדקו <Link href="/areas/haifa-general/cheap-towing-check-post-junction" className="text-blue-400 underline">שירות גרירה זול בצומת צק פוסט</Link>.</p></div>
            <div className="bg-gray-800 p-6 rounded-lg"><h3>חילוץ שטח בחיפה</h3><p>נתקעתם בבוץ? אנו מבצעים <Link href="/areas/haifa-general/4x4-stuck-mud-rescue-carmel-forest-haifa" className="text-blue-400 underline">חילוץ 4 על 4 בבוץ ביער הכרמל</Link> במקצועיות רבה.</p></div>
            <div className="bg-gray-800 p-6 rounded-lg"><h3>פריסה רחבה</h3><p>זקוקים לחילוץ מורכב? אנו מומחים ב<Link href="/areas/haifa-general/car-rescue-mud-carmel-forest-nesher-24-7" className="text-blue-400 underline">חילוץ רכב מבוץ באזור הכרמל ונשר</Link>.</p></div>
            <div className="bg-gray-800 p-6 rounded-lg"><h3>טיפול ברכב חשמלי</h3><p>נתקעתם ללא סוללה? אנו מעניקים שירותי גרירה ייעודיים לרכבים חשמליים ברחבי העיר חיפה והקריות.</p></div>
            <div className="bg-gray-800 p-6 rounded-lg"><h3>מקצועיות בטיפול</h3><p>צוות מנוסה עם ציוד חדיש המעניק שקט נפשי מלא בכל קריאה ובכל שעה ביום ובלילה.</p></div>
            <div className="bg-gray-800 p-6 rounded-lg"><h3>זמינות מיידית</h3><p>זקוקים לגרר באזור הצפון? לחצו כאן ל<Link href="/areas/haifa-general/affordable-24-7-towing-kiryat-bialik-flat-tire" className="text-blue-400 underline">גרירה זמינה 24 שעות בקרית ביאליק</Link>.</p></div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">שאלות נפוצות על גרירה באחוזה</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="p-4 bg-white rounded shadow"><strong>כמה עולה גרירה באחוזה והכרמל?</strong><p>המחיר הוגן ונקבע לפי מרחק וסוג הרכב. אנו מתחייבים לשקיפות מלאה ללא עלויות נסתרות או הפתעות.</p></div>
            <div className="p-4 bg-white rounded shadow"><strong>האם אתם מסייעים ברכבים תקועים בשיפועים?</strong><p>כן, אנו ערוכים לחילוץ רכבים מכל סוגי השיפועים והכבישים התלולים המאפיינים את שכונת אחוזה והסביבה.</p></div>
            <div className="p-4 bg-white rounded shadow"><strong>מה עושים במקרה של רכב שנתקע בשטח?</strong><p>אנו מציעים שירות מיוחד של <Link href="/areas/haifa-general/off-road-mud-rescue-carmel-private-car" className="text-blue-400 underline">חילוץ רכב פרטי מבוץ בכרמל</Link> עם הציוד המתאים ביותר.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}