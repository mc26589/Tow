import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

function JsonLd<T>({ data }: { data: T }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const metadata: Metadata = {
  title: "גרר באחוזה חיפה - מחיר הוגן, הגעה תוך 30 דקות | 24/7",
  description: "נתקעתם באחוזה? שירותי גרירה באחוזה חיפה במחיר הוגן ושקוף. מענה מהיר 24/7 לכל סוגי הרכבים. ללא הפתעות, שירות מקצועי. התקשרו עכשיו!",
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
            שירותי גרירה באחוזה חיפה: שקיפות מלאה ומענה תוך דקות
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            זקוקים לגרר באחוזה? אנו כאן לשירותכם 24/7. שירות גרירה מקצועי במחיר הוגן. טיפול מיומן ברכבים בעליות המאתגרות של הכרמל.
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
            <div className="bg-gray-800 p-6 rounded-lg"><h3>שקיפות מחירים</h3><p>מחיר הוגן וקבוע מראש. זקוקים לפתרון משלים? בדקו <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-blue-400 underline">גרירה 24 7 עוקף קריות מחיר הוגן</Link>.</p></div>
            <div className="bg-gray-800 p-6 rounded-lg"><h3>חילוץ שטח בחיפה</h3><p>נתקעתם בבוץ? אנו מומחים ב<Link href="/areas/haifa-general/mud-rescue-4x4-stuck-carmel-forest-haifa-university" className="text-blue-400 underline">mud rescue 4x4 stuck carmel forest haifa university</Link>.</p></div>
            <div className="bg-gray-800 p-6 rounded-lg"><h3>זמינות בכל אזור</h3><p>פריסה רחבה מהכרמל ועד הקריות. למידע נוסף: <Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-bialik-industrial-zone" className="text-blue-400 underline">affordable flatbed towing kiryat bialik industrial zone</Link>.</p></div>
            <div className="bg-gray-800 p-6 rounded-lg"><h3>טיפול ברכב חשמלי</h3><p>נתקעתם ללא סוללה? פתרון מקצועי לרכבים חשמליים ברחבי העיר והקריות.</p></div>
            <div className="bg-gray-800 p-6 rounded-lg"><h3>מקצועיות בטיפול</h3><p>צוות מנוסה המעניק לכם שקט נפשי מלא בכל קריאה ובכל שעה.</p></div>
            <div className="bg-gray-800 p-6 rounded-lg"><h3>חילוץ מהיר</h3><p>מענה מיידי לרכבים תקועים בצירי תנועה מרכזיים ובתוך שכונת אחוזה.</p></div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">שאלות נפוצות על גרירה באחוזה</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="p-4 bg-white rounded shadow"><strong>כמה עולה גרירה באחוזה והכרמל?</strong><p>המחיר הוגן ומושפע מסוג הרכב והמרחק. אנו מתחייבים לשקיפות מלאה ללא עלויות נסתרות.</p></div>
            <div className="p-4 bg-white rounded shadow"><strong>האם אתם מסייעים ברכבים תקועים בשיפועים?</strong><p>כן, אנו ערוכים לחילוץ רכבים מכל סוגי השיפועים והכבישים התלולים המאפיינים את שכונת אחוזה.</p></div>
            <div className="p-4 bg-white rounded shadow"><strong>האם אתם מבצעים חילוצי שטח בקרבת חיפה?</strong><p>כן, אנו מבצעים גם <Link href="/areas/haifa-general/car-rescue-mud-carmel-forest-nesher-24-7" className="text-blue-400 underline">car rescue mud carmel forest nesher 24 7</Link> למקרים מורכבים.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}