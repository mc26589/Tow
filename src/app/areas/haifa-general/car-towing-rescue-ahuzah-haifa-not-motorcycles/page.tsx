import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב באחוזה חיפה 24/7 | שירות מהיר ומחיר הוגן",
  description: "נתקעתם באחוזה, חיפה? שירותי גרירה וחילוץ לרכב פרטי ומסחרי 24/7. הגעה מהירה, מחיר הוגן ושירות מקצועי. התקשרו עכשיו לפתרון מיידי!",
  alternates: {
    canonical: "/areas/haifa-general/car-towing-rescue-ahuzah-haifa-not-motorcycles",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "description": "שירותי גרירה וחילוץ 24/7 לרכבים פרטיים, מסחריים ו-4X4 באזור אחוזה, חיפה. אנו לא מספקים שירותי גרירה לאופנועים.",
    "url": "https://yourdomain.com/areas/haifa-general/car-towing-rescue-ahuzah-haifa-not-motorcycles",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$$,$",
    "areaServed": {
      "@type": "Place",
      "name": "אחוזה, חיפה"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.818,
      "longitude": 34.99
    },
    "serviceType": ["גרירת רכב", "חילוץ רכב", "שירותי דרך"]
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            גרירת רכב באחוזה, חיפה - שירות מקצועי 24/7
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            זקוקים לגרר באחוזה? שירות אמין ומהיר לרכב פרטי, מסחרי ו-4X4. מגיעים לכל נקודה בכרמל.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition shadow-lg flex items-center justify-center gap-2">
              <span>התקשרו עכשיו</span>
            </a>
            <WhatsAppCTA cityName="חיפה" />
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <section className="bg-gray-900 p-8 rounded-lg border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-red-400">גרירה וחילוץ מקצועי באחוזה</h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            אם הרכב נתקע, בין אם מדובר בבעיות מצבר או <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-region" className="text-blue-400 underline">חילוץ רכב תקוע בבוץ באזור הכרמל</Link>, אנו כאן לעזור. חשוב לציין: אנו מתמחים ברכבים בלבד, ובמקרה של צורך באופנועים אנו ממליצים לחפש פתרונות ייעודיים אחרים. אנו מבצעים גרירה בטוחה לכל סוגי הרכבים באחוזה ובסביבה הקרובה.
          </p>
        </section>

        <section className="mb-12 bg-gray-900 p-8 rounded-lg border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">שאלות נפוצות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-300">תוך כמה זמן הגרר מגיע לאחוזה?</h3>
              <p>אנו מבינים את הדחיפות ומקפידים על הגעה מהירה ככל הניתן לכל נקודה באחוזה ובחיפה בכלל.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-300">האם אתם מספקים שירותים נוספים באזור?</h3>
              <p>כן, אנו נותנים מענה רחב הכולל גם <Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-400 underline">גרירה והתנעה לרכבים חשמליים באחוזה</Link> ופתרונות נוספים לדרכים.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-300">האם אתם גוררים רכבים מחוץ לחיפה?</h3>
              <p>אנו פועלים בפריסה רחבה. אם אתם זקוקים לשירות באזור הקריות, ניתן לבדוק גם אפשרויות ל-<Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-400 underline">שירותי גרירה בצ'ק פוסט והקריות</Link>.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}