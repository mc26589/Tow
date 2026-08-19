import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 עוקף קריות - שירות מהיר 24/7 | מחיר הוגן",
  description: "נתקעתם בכביש 22 עוקף קריות? צוות גרירה מיומן בדרך אליכם! שירות חילוץ מהיר לרכבים פרטיים ומסחריים 24/7. מחיר הוגן ושקיפות מלאה. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/emergency-towing-road-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בכביש 22 עוקף קריות",
    "areaServed": "כביש 22 עוקף קריות",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8190",
      "longitude": "35.0630"
    },
    "priceRange": "$",
    "serviceType": "Emergency Roadside Assistance and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר דחוף לרכב תקוע בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם בכביש 22? הצוות המקצועי שלנו זמין עבורכם 24/7 לחילוץ מהיר ובטוח. 
            אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4. 
            חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
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
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
          <ul className="grid md:grid-cols-3 gap-8">
            <li className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">זמינות מלאה</h3>
              <p>שירות 24 שעות ביממה, 7 ימים בשבוע, גם בחגים ובסופי שבוע. זקוקים גם ל-<Link href="/areas/haifa-general/emergency-breakdown-towing-route-22-krayot-bypass" className="underline">שירות גרירת חירום בכביש 22</Link>? אנחנו כאן.</p>
            </li>
            <li className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">מחירים הוגנים</h3>
              <p>אנו מאמינים בשקיפות מלאה. קבלו הצעת מחיר הוגנת ומשתלמת בטלפון. מחפשים גם <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="underline">שירותי רכב חשמלי בכביש 22</Link>?</p>
            </li>
            <li className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">מקצועיות ובטיחות</h3>
              <p>ציוד גרירה מתקדם וצוות מיומן. אם נתקעתם בדרכים הסמוכות, אנו נותנים שירות גם ל-<Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-bialik-industrial-zone" className="underline">גרירה באזור התעשייה קרית ביאליק</Link>.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות על גרירה בכביש 22</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-bold text-lg">תוך כמה זמן אתם מגיעים לכביש עוקף קריות?</h3>
              <p>זמן ההגעה משתנה בהתאם לעומסי התנועה, אך אנו עושים מאמצים להגיע תוך זמן קצר מרגע הקריאה.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם גוררים רכבים חשמליים?</h3>
              <p>כן, אנו מספקים פתרונות מתקדמים עבור <Link href="/areas/haifa-general/electric-vehicle-accident-towing-route-22-krayot-bypass" className="underline">גרירת רכב חשמלי לאחר תאונה</Link> או תקלה.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם ניתן להזמין גרירה בשעות הלילה?</h3>
              <p>בהחלט. אנו פעילים 24/7 לכל תרחיש, כולל חילוץ ותמיכה לאורך כל תוואי כביש 22.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}