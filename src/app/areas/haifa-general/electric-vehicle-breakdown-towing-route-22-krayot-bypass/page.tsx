import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בכביש 22 עוקף קריות | הגעה מהירה 24/7",
  description: "נתקעת בכביש 22 עוקף קריות עם הרכב החשמלי? שירות גרירה מקצועי וזמין 24/7. הגעה מהירה, טיפול עדין בסוללה ומחיר הוגן. צריכים עזרה? התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/electric-vehicle-breakdown-towing-route-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בכביש 22 עוקף קריות",
    "areaServed": { "@type": "Place", "name": "כביש 22 עוקף קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$$, $$",
    "serviceType": "גרירת רכב חשמלי",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8190", "longitude": "35.0630" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">גרירת רכב חשמלי תקוע בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">
            נתקעת עם הרכב החשמלי בכביש 22? אנו מתמחים בחילוץ וגרירה מקצועית. הצוות שלנו מבין את הרגישות המיוחדת של מערכות חשמל וסוללות רכב. אם נתקעת בדרך, כדאי לדעת שאנו מציעים גם <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="underline">גרירה דחופה בכביש 22 וצ'ק פוסט</Link> במחיר נוח, או סיוע של <Link href="/areas/haifa-general/emergency-light-truck-towing-route-22-krayot-bypass" className="underline">גרירת רכב מסחרי קל בכביש 22</Link>.
          </p>
          <div className="flex flex-col gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-blue-900 font-bold py-3 px-6 rounded-lg text-center hover:bg-gray-100 transition-colors"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לגרירה בכביש 22?</h2>
        <ul className="list-disc pr-6 space-y-2 mb-8">
          <li>זמינות 24/7 לכל אורך ציר עוקף קריות.</li>
          <li>ציוד מתקדם לגרירה בטוחה של רכבים חשמליים (EV).</li>
          <li>מומחיות בטיפול בבעיות סוללה ופריקה בכביש המהיר.</li>
          <li>מחירים הוגנים ושקופים ללא הפתעות.</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">שאלות נפוצות (FAQ)</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">האם אתם גוררים רכבים חשמליים ללא נזק?</h3>
            <p>כן, אנו משתמשים בציוד ייעודי המבטיח גרירה בטוחה לרכבים חשמליים, תוך הגנה על המערכת החשמלית וסוללת הרכב.</p>
          </div>
          <div>
            <h3 className="font-bold">מה עושים אם נתקעתי עם רכב חשמלי ללא טעינה בדרך?</h3>
            <p>אנו מציעים מענה מהיר של גרירה מכל נקודה בכביש 22 לנקודת הטעינה הקרובה ביותר. ניתן להיעזר בשירותי <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600">גרירה זולה בצ'ק פוסט והקריות</Link>.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם נותנים שירות גם לרכבים ישנים לפירוק באזור?</h3>
            <p>כן, אנו מספקים שירותי <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal" className="text-blue-600">פינוי רכבים לפירוק בחיפה והקריות</Link> באופן מיידי.</p>
          </div>
        </div>
      </section>
    </main>
  );
}