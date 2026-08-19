import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר זול בצ'ק פוסט והקריות | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם באזור צ'ק פוסט או הקריות? גרר מקצועי וזמין 24/7. שירותי גרירה לרכבים פרטיים ומסחריים במחיר משתלם. התקשרו עכשיו להגעה מהירה!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-check-post-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": ["Haifa", "Check Post", "Krayot"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "35.0348"
    },
    "priceRange": "$",
    "serviceType": ["Emergency Towing", "Roadside Assistance"]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול באזור צ'ק פוסט והקריות</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם בדרך? אנו מציעים שירותי גרירה מקצועיים, מהירים ובמחיר הוגן באזור צ'ק פוסט, מפרץ חיפה והקריות. 
            אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4. אם נתקעתם בדרכים המהירות, תוכלו להיעזר בשירותי <Link href="/areas/haifa-general/emergency-breakdown-towing-route-22-krayot-bypass" className="underline font-semibold">גרירה בחירום בכביש 22 עוקף קריות</Link>. 
            שימו לב: השירות אינו כולל גרירת אופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו?</h2>
          <ul className="space-y-4 text-lg">
            <li>✓ זמינות מלאה 24/7 לכל אזור הצ'ק פוסט והקריות.</li>
            <li>✓ מחירים הוגנים ושקופים ללא הפתעות.</li>
            <li>✓ צוות מיומן עם ציוד גרירה חדיש.</li>
            <li>✓ התמחות ברכבים פרטיים, מסחריים ורכבי שטח.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירה בצ'ק פוסט והקריות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">תוך כמה זמן הגרר מגיע?</h3>
              <p>אנו משתדלים להגיע לכל נקודה בצ'ק פוסט, הקריות ומפרץ חיפה בזמן המהיר ביותר האפשרי, לרוב תוך דקות ספורות מרגע הקריאה.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם גוררים רכבים חשמליים?</h3>
              <p>כן, אנו ערוכים למתן שירות גם לרכבים חשמליים. למידע נוסף ניתן לבדוק גם את שירותי ה-<Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-600 hover:underline">גרירה לרכבים חשמליים בכביש 22</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">מה לעשות אם הרכב תקוע בשטח?</h3>
              <p>אנו מתמחים גם בחילוצי שטח קלים. אם נתקעתם באזורי עפר או בוץ, אנו ממליצים לעיין במידע על <Link href="/areas/haifa-general/car-rescue-mud-carmel-forest-nesher-24-7" className="text-blue-600 hover:underline">חילוץ רכב מבוץ באזור חיפה והסביבה</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}