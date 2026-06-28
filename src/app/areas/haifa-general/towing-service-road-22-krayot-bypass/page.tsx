import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 עוקף קריות | שירות מהיר 24/7 | מחיר הוגן",
  description: "נתקעתם עם הרכב בכביש 22 עוקף קריות? גרר מקצועי זמין 24/7 להגעה מהירה לכל נקודה בדרך. שירות אמין במחיר הוגן ללא הפתעות. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/towing-service-road-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22 עוקף קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "Towing and Roadside Assistance",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8190", "longitude": "35.0630" }
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">גרר רכבים תקועים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? אנחנו בדרך אליכם עם שירות גרירה מהיר ומקצועי.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition"
            >
              חיוג מהיר לגרר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי חילוץ וגרירה בכביש 22</h2>
        <p className="mb-4">אם הרכב שלכם שבק חיים בכביש 22, אל תמתינו שעות. אנו מספקים מענה מהיר לכל סוגי הרכבים הפרטיים והמסחריים. למי שמחפש פתרונות נוספים, ניתן לבדוק גם <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-400 underline">שירותי חירום בכביש 22</Link> או <Link href="/areas/haifa-general/affordable-car-towing-kiryat-motzkin-24-7" className="text-blue-400 underline">גרירה בקריות</Link>. אנו מבינים את הדחיפות שבחילוץ מהיר בכביש מהיר ועמוס.</p>
        <p className="text-red-400 font-semibold mb-4">חשוב להבהיר: אנו מתמחים ברכבים בלבד ואיננו מספקים שירותי גרירה לאופנועים.</p>
        
        <div className="mt-12 bg-neutral-900 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה בכביש 22</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">כמה זמן לוקח לגרר להגיע לכביש 22?</h3>
              <p>אנו משתדלים להגיע לכל נקודה לאורך עוקף קריות בזמן מהיר ככל הניתן בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם גוררים גם רכבי שטח?</h3>
              <p>כן, אנו נותנים מענה לרכבים פרטיים, מסחריים ורכבי 4x4. אם נתקעתם מחוץ לכביש, תוכלו לראות גם מידע על <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-region" className="text-blue-400 underline">חילוצי שטח באזור הכרמל</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}