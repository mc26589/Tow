import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "שירותי גרירה בצומת צ'ק פוסט | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בצומת צ'ק פוסט? שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים. מחיר הוגן, זמינות 24/7 והגעה מהירה לכל אזור חיפה והצפון. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-services-check-post-junction",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
    "areaServed": "חיפה והקריות",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7885",
      "longitude": "35.0253"
    },
    "serviceType": "Towing Service"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירותי גרירה זולים בצומת צ'ק פוסט והסביבה</h1>
          <p className="text-xl mb-8 max-w-2xl">
            זקוקים לחילוץ מהיר באזור צומת צ'ק פוסט? אנו מציעים שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים. 
            אם אתם זקוקים גם לפתרונות נוספים כמו <Link href="/areas/haifa-general/buying-cars-for-scrap-check-post-haifa" className="underline font-semibold">מכירת רכב לפירוק בצ'ק פוסט</Link> או עזרה בדרכים, אנחנו כאן עבורכם 24/7.
            שימו לב: השירות אינו כולל גרירת אופנועים.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בצומת צ'ק פוסט?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>✓ הגעה מהירה לכל נקודה בצומת צ'ק פוסט, כביש 22 וסביבת נשר.</li>
            <li>✓ מחירים הוגנים ושקופים ללא הפתעות.</li>
            <li>✓ מומחיות בחילוצי רכבים שונים, כולל <Link href="/areas/haifa-general/emergency-breakdown-towing-route-22-krayot-bypass" className="text-blue-400">גרירה בכביש 22</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על שירותי גרירה בצ'ק פוסט</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold">תוך כמה זמן תגיעו לצומת צ'ק פוסט?</h3>
            <p>הצוות שלנו פרוס באזור חיפה והקריות, מה שמאפשר לנו הגעה מהירה מאוד לצומת צ'ק פוסט ברוב שעות היום.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">האם אתם גוררים רכבים חשמליים?</h3>
            <p>כן, אנו נותנים מענה מתקדם, כולל <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-600">גרירת רכבים חשמליים</Link> בבטחה ובמקצועיות.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">מהו טווח המחירים לגרירה?</h3>
            <p>המחיר תלוי במרחק הגרירה ובסוג הרכב. אנו מתחייבים למחיר הוגן ותחרותי בשוק.</p>
          </div>
        </div>
      </section>
    </main>
  );
}