import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 קריות | הגעה מהירה 24/7 – מחיר הוגן",
  description: "נתקעתם בכביש 22 עוקף קריות? גרר מהיר ומקצועי לרכבים פרטיים ומסחריים. הגעה מהירה לכל נקודה, מחיר הוגן ושירות אדיב 24/7. התקשרו עכשיו להצלת הרכב!",
  alternates: {
    canonical: "/areas/haifa-general/fast-towing-road-22-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בכביש 22 וקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22, חיפה והקריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "מחיר הוגן ושקוף",
    "serviceType": "גרירת רכבים וחילוץ דרך",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8191", "longitude": "35.0553" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר מהיר לכביש 22 קריות – חילוץ מקצועי לכל סוגי הרכבים</h1>
          <p className="text-xl mb-8 max-w-2xl">
            זקוקים לגרר בכביש עוקף קריות? אנו מספקים מענה חירום 24/7. אם אתם זקוקים לשירות מקצועי באזור צומת מרכזי, ניתן לראות את הפתרונות שלנו עבור <Link href="/areas/haifa-general/cheap-towing-check-post-haifa-fast-service" className="underline font-bold">גרירה מהירה בצ'ק פוסט</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
        <ul className="grid md:grid-cols-3 gap-8">
          <li className="p-6 border rounded-xl">
            <h3 className="font-bold text-xl mb-2">זמינות 24/7</h3>
            <p>שירות גרירה מסביב לשעון, גם בסופי שבוע וחגים, כדי שלא תישאר תקוע בכביש מהיר.</p>
          </li>
          <li className="p-6 border rounded-xl">
            <h3 className="font-bold text-xl mb-2">מומחיות בנתיבי עוקף קריות</h3>
            <p>ניסיון רב בחילוץ וגרירה באזור עמוס זה, כולל <Link href="/areas/haifa-general/cheap-towing-check-post-junction" className="text-blue-600 underline">שירותי גרר זולים בצומת צ'ק פוסט</Link>.</p>
          </li>
          <li className="p-6 border rounded-xl">
            <h3 className="font-bold text-xl mb-2">מחירים הוגנים</h3>
            <p>שקיפות מלאה והצעת מחיר הוגנת בטלפון לפני תחילת העבודה – ללא הפתעות.</p>
          </li>
        </ul>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירה בכביש 22</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">תוך כמה זמן הגרר מגיע לכביש 22?</h3>
              <p>אנו משתדלים להגיע לכל נקודה על ציר כביש 22 בזמן הקצר ביותר, תוך התחשבות בעומסי התנועה באזור הקריות.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם גוררים רכבים חשמליים תקועים?</h3>
              <p>כן, אנו מציעים שירות מיוחד עבור <Link href="/areas/haifa-general/electric-vehicle-breakdown-towing-route-22-krayot-bypass" className="text-blue-600 underline">גרירה בטוחה לרכבים חשמליים בכביש 22</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם עוסקים בפינוי רכבים ישנים?</h3>
              <p>כן, בנוסף לגרירה, אנו מבצעים <Link href="/areas/haifa-general/car-scrapping-haifa-krayot" className="text-blue-600 underline">פינוי רכבים לגריטה ופירוק באזור חיפה והקריות</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}