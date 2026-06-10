import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב באחוזה חיפה 24/7 | מחיר הוגן ומקצועי (לא אופנועים)",
  description: "נתקעתם עם הרכב באחוזה, חיפה? שירותי גרירה וחילוץ 24/7 לרכב פרטי, מסחרי ו-4X4. הגעה מהירה, מחיר הוגן ושירות מקצועי. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/car-towing-rescue-ahuzah-haifa-not-motorcycles",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "description": "שירותי גרירה וחילוץ 24/7 לרכבים פרטיים, מסחריים ו-4X4 בחיפה, הקריות והסביבה. אנו לא מספקים שירותי גרירה לאופנועים, קטנועים או רכבים דו-גלגליים.",
    "url": "https://yourdomain.com/areas/haifa-general/car-towing-rescue-ahuzah-haifa-not-motorcycles",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$$,$",
    "areaServed": {
      "@type": "Place",
      "name": "חיפה והקריות"
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
            שירותי גרירה וחילוץ לרכבים באחוזה, חיפה - לא לאופנועים
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            נתקעתם עם רכב פרטי, מסחרי או 4X4 באחוזה, חיפה? אנו כאן לסייע 24/7 עם שירות מהיר, מקצועי ובמחיר הוגן.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition shadow-lg flex items-center justify-center gap-2">
              <span>התקשרו עכשיו</span>
            </a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <section className="bg-gray-900 p-8 rounded-lg border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-red-400">חשוב לדעת: אנו לא גוררים אופנועים</h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            אנו מתמחים ב<Link href="/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing" className="text-blue-400 underline">גרירת רכב באחוזה</Link> ובכל אזור חיפה עבור רכבים פרטיים, מסחריים ורכבי שטח. אם נתקעתם בדרכים, נשמח לספק שירות מקצועי 24/7.
          </p>
        </section>

        <section className="mb-12 bg-gray-900 p-8 rounded-lg border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">שאלות נפוצות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-300">תוך כמה זמן תגיעו לאחוזה?</h3>
              <p>זמן ההגעה משתנה בהתאם לעומסי התנועה באזור הכרמל, אך אנו משתדלים להגיע לכל קריאה במינימום זמן.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-300">האם אתם מספקים שירותי גרירה גם באזורים נוספים?</h3>
              <p>כן, אנו פעילים בכל רחבי חיפה והקריות. תוכלו למצוא מידע נוסף על <Link href="/areas/haifa-general/cheap-towing-services-check-post" className="text-blue-400 underline">גרירה בצ'ק פוסט</Link> או באזורים אחרים באתרנו.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}