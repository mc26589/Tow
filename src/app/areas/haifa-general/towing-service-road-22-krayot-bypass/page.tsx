import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 עוקף קריות | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בכביש 22? שירות גרירה מקצועי ומהיר לכל סוגי הרכבים בציר עוקף קריות. זמינות 24/7, מחירים נוחים ושירות אדיב. התקשרו עכשיו!");",
  alternates: {
    canonical: "/areas/haifa-general/towing-service-road-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בכביש 22 עוקף קריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$$,$",
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
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">גרר רכבים תקועים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8 leading-relaxed">
            נתקעתם עם הרכב בכביש 22? אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4. 
            חשוב להבהיר: אנו לא מספקים שירותי גרירה לאופנועים. 
            אנו מציעים שירות מקצועי, אמין ובמחירים הוגנים לכל תושבי האזור והנוסעים בציר עוקף קריות.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לגרר
            </a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>
      
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
        <ul className="list-disc pr-6 space-y-4">
          <li>זמינות מלאה 24/7 לכל קריאה בכביש עוקף קריות.</li>
          <li>ציוד גרירה מתקדם המתאים לרכבים פרטיים, מסחריים ו-4x4.</li>
          <li>הגעה מהירה לכל נקודה לאורך הציר.</li>
          <li>שירות אדיב ומקצועי במחירים הוגנים ללא הפתעות.</li>
          <li>צריכים שירות משלים באזור? בדקו גם את <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-600 underline">השירות המהיר שלנו בכביש 22</Link>.</li>
        </ul>
      </section>

      <section className="py-12 container mx-auto px-4 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה בכביש 22</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg">תוך כמה זמן הגרר מגיע לכביש 22?</h3>
            <p>אנו משתדלים להגיע לכל נקודה בכביש עוקף קריות בזמן המהיר ביותר האפשרי, לרוב תוך דקות ספורות מרגע הקריאה.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">האם אתם גוררים גם משאיות קלות?</h3>
            <p>כן, אנו מספקים שירותי גרירה לרכבים פרטיים, מסחריים ו-4x4. למידע נוסף ניתן להתרשם מ-<Link href="/areas/haifa-general/sherutei-grira-hilutz-krayot-kavish-22" className="text-blue-600">שירותי הגרירה והחילוץ שלנו בקריות</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}