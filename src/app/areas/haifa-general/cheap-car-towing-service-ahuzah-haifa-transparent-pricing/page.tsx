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
  title: "שירותי גרירה באחוזה חיפה | מחיר הוגן | מענה מהיר 24/7",
  description: "תקועים באחוזה? שירותי גרירה מקצועיים, מחירים שקופים ללא הפתעות. זמינות 24/7 לכל סוגי הרכבים באזור חיפה. התקשרו עכשיו למענה מהיר!",
  alternates: {
    canonical: "https://yourdomain.com/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing",
  },
};

export default function Page() {
  const jsonLdData = {
    "@context": "http://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ באחוזה חיפה",
    "description": "שירותי גרירה זולים, מהירים ושקופים באחוזה חיפה ובכל אזור חיפה והקריות, 24/7. גרירת רכבים פרטיים, מסחריים ורכבי שטח.",
    "url": "https://yourdomain.com/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$$,$",
    "areaServed": {
      "@type": "Place",
      "name": "חיפה והקריות",
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
            שירותי גרירה באחוזה חיפה: מחירים שקופים ומענה מיידי 24/7
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            זקוקים לגרר באחוזה? אנו מספקים שירותי גרירה אמינים במחיר הוגן. טיפול מקצועי ברכבים פרטיים ומסחריים. התקשרו עכשיו וקבלו שירות מהיר.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg">
              התקשרו עכשיו: הצעה הוגנת
            </a>
            <WhatsAppCTA cityName="Haifa" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">למה לבחור בנו באזור חיפה?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg"><h3>שקיפות מחירים מלאה</h3><p>אין הפתעות בסוף הגרירה.</p></div>
            <div className="bg-gray-800 p-6 rounded-lg"><h3>זמינות ללא הפסקה</h3><p>מענה מהיר באחוזה ובכל חיפה 24/7.</p></div>
            <div className="bg-gray-800 p-6 rounded-lg"><h3>מומחים בחילוץ</h3><p>נתקעתם בדרכים לא סלולות? בדקו את השירות שלנו עבור <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-region" className="text-blue-400 underline">חילוץ רכב מבוץ באזור הכרמל</Link>.</p></div>
            <div className="bg-gray-800 p-6 rounded-lg"><h3>שירות לרכבים חשמליים</h3><p>נתקעתם ללא סוללה? קראו על <Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-400 underline">גרירת רכב חשמלי באחוזה</Link>.</p></div>
            <div className="bg-gray-800 p-6 rounded-lg"><h3>כיסוי ארצי ומקומי</h3><p>אנו מציעים גם פתרונות כגון <Link href="/areas/haifa-general/cheap-towing-check-post-krayot" className="text-blue-400 underline">גרירה זולה בצומת צ'ק פוסט</Link>.</p></div>
            <div className="bg-gray-800 p-6 rounded-lg"><h3>מקצועיות בטיפול</h3><p>צוות מנוסה המעניק לכם שקט נפשי מלא.</p></div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">שאלות נפוצות</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="p-4 bg-white rounded shadow"><strong>כמה עולה גרירה באחוזה?</strong><p>המחירים הוגנים ונקבעים לפי סוג הרכב והמרחק. התקשרו לקבלת הצעת מחיר מדויקת.</p></div>
            <div className="p-4 bg-white rounded shadow"><strong>האם אתם גוררים גם רכבים מסחריים?</strong><p>כן, אנו נותנים מענה לרכבים פרטיים ומסחריים קלים.</p></div>
            <div className="p-4 bg-white rounded shadow"><strong>האם אתם נותנים שירות גם מחוץ לאחוזה?</strong><p>בהחלט, אנו פעילים בכל אזור חיפה והקריות עם פריסה רחבה.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
