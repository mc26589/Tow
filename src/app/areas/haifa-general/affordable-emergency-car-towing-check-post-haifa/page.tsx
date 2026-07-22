import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב בצ'ק פוסט חיפה 24/7 | מחיר הוגן, הגעה מהירה",
  description: "נתקעתם בצומת צ'ק פוסט? גרירת רכב חירום 24/7 במחיר הוגן. שירות מהיר, מקצועי ואמין לכל סוגי הרכבים. התקשרו עכשיו להגעה מיידית!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חירום חיפה והקריות",
    "description": "שירותי גרירת רכב חירום מהירים בצומת צ'ק פוסט חיפה. זמינות 24/7 לכל סוגי הרכבים במחירים נוחים.",
    "url": "https://www.yourdomain.com/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$$,$",
    "areaServed": {
      "@type": "Place",
      "name": "חיפה והקריות",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.795,
        "longitude": 35.015
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
      <Script
        id="json-ld-auto-towing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            גרירת רכב חירום בצומת צ'ק פוסט חיפה – זמינות 24/7
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            נתקעתם עם הרכב בצומת צ'ק פוסט בחיפה? אנו מציעים שירותי גרירה מקצועיים, מהירים ובמחיר הוגן ללא הפתעות. הצוות שלנו זמין לסייע לכם 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300 font-semibold py-3 px-8 rounded-full shadow-lg text-lg"
            >
              התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">למה לבחור בנו לגרירה בצ'ק פוסט?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">מהירות תגובה</h3>
              <p>הצוות שלנו מכיר את עומסי התנועה בצ'ק פוסט ויודע להגיע אליכם בזמן הקצר ביותר.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">מומחיות בתקלות</h3>
              <p>בין אם מדובר בתקלה מכנית או צורך ב-<Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="underline text-blue-400">שירותי גרירה לאחר תאונה</Link>, אנו כאן לעזור.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">מגוון פתרונות</h3>
              <p>אנו מציעים גם <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="underline text-blue-400">גרירת רכבים תקולים</Link> וקניית רכבים לפירוק במחיר הוגן.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות על גרירת רכב בצ'ק פוסט</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">כמה זמן לוקח לכם להגיע לצומת צ'ק פוסט?</h3>
              <p>בזכות מיקום הציוד שלנו באזור חיפה והקריות, אנו מגיעים לרוב תוך דקות ספורות לקריאה באזור הצומת.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם גוררים רכבים פרטיים ומסחריים?</h3>
              <p>כן, אנו נותנים שירות לרוב סוגי הרכבים הפרטיים והמסחריים הקלים. איננו מטפלים באופנועים.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">איך מתבצע התשלום על הגרירה?</h3>
              <p>התשלום נקבע מראש בצורה שקופה. אנו מקפידים על מחירים נוחים ללא "הפתעות" של הרגע האחרון.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">מה לעשות אם נתקעתי בדרך לעבודה?</h3>
              <p>ראשית, ודאו שאתם נמצאים בנקודה בטוחה, הדליקו אורות מצוקה והתקשרו אלינו. במידת הצורך, נבצע <Link href="/areas/haifa-general/emergency-roadside-assistance-flat-tire-route-22-kiryat-bialik" className="underline text-blue-600">חילוץ דרך מהיר</Link> כדי להחזיר אתכם לכביש.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}