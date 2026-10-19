import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "שירותי גרירה בצ'ק פוסט | הגעה תוך 30 דקות | מחיר הוגן 24/7",
  description: "נתקעתם עם הרכב בצ'ק פוסט? שירותי גרירה וחילוץ מהירים ומקצועיים במחיר הוגן. זמינות 24/7 לכל סוגי הרכבים. התקשרו עכשיו להגעה מהירה!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-services-check-post",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
    "areaServed": "Haifa and Krayot",
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
    "serviceType": ["Towing Service", "Roadside Assistance"]
  };

  return (
    <main className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה זולים באזור צ'ק פוסט</h1>
          <p className="text-xl mb-8">זקוקים לגרר בצ'ק פוסט? אנחנו כאן כדי לחלץ אתכם בבטחה ובמחיר משתלם, 24 שעות ביממה.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה בצ'ק פוסט?</h2>
        <p className="mb-4">
          אנו מתמחים בחילוץ רכבים פרטיים, רכבים מסחריים ורכבי 4x4. אם נתקעתם בדרכים, אנו מציעים שירותי 
          <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-600 underline font-semibold"> גרירה בכביש 22 </Link> 
          וכן סיוע ב-<Link href="/areas/haifa-general/affordable-electric-car-towing-check-post-krayot" className="text-blue-600 underline font-semibold"> גרירת רכבים חשמליים </Link>. אנו מציעים גם פתרונות של <Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-blue-600 underline">חילוץ לאחר תאונה בצומת צ'ק פוסט</Link>. חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>זמינות מלאה 24/7 לכל אזור צ'ק פוסט והקריות.</li>
          <li>מחירים הוגנים ושקופים ללא הפתעות.</li>
          <li>צוות מקצועי ומנוסה בטיפול בדרכים.</li>
          <li>ציוד גרירה חדיש המבטיח שמירה על הרכב שלכם.</li>
        </ul>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על שירותי גרירה בצ'ק פוסט</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">כמה זמן לוקח לגרר להגיע לצ'ק פוסט?</h3>
              <p>בזכות מיקומנו האסטרטגי בציר חיפה-קריות, אנו מגיעים לרוב הקריאות בצ'ק פוסט תוך זמן קצר מאוד.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם אתם קונים רכבים לפירוק באזור?</h3>
              <p>כן, אנו מספקים שירותי <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot" className="text-blue-600 underline">קניית רכבים לפירוק בצ'ק פוסט</Link> בתשלום הוגן ומיידי לכל רכב ישן או פגום.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם אתם מבצעים גרירה במחיר זול?</h3>
              <p>אנו מקפידים על מדיניות של מחיר הוגן ותחרותי לכל סוגי הגרירה באזור, ללא תוספות מיותרות.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}