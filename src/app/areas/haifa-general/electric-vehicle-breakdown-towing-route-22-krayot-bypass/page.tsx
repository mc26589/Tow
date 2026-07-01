import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בכביש 22 עוקף קריות | שירות 24/7 מהיר",
  description: "נתקעת בכביש 22 עוקף קריות עם הרכב החשמלי? שירות גרירה מקצועי ומיומן לרכבים חשמליים, זמינות 24/7, הגעה מהירה ומחיר הוגן. התקשרו עכשיו!",
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
    "priceRange": "$",
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
            נתקעת עם הרכב החשמלי בכביש 22? אנו מתמחים בחילוץ וגרירה של רכבים חשמליים והיברידיים. הצוות שלנו מבין את הרגישות המיוחדת בטיפול בסוללות וברכבים אלקטרוניים. אם נתקעת בדרך ואתה מחפש <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="underline">גרירה במקרה של סוללה ריקה בכביש 22</Link>, אנחנו הכתובת. זקוקים לסיוע נוסף באזור? בדקו גם את שירותי ה<Link href="/areas/haifa-general/accident-towing-road-22-check-post-krayot" className="underline">גרירה לאחר תאונה בכביש 22 וצ'ק פוסט</Link>.
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
          <li>ציוד מתקדם לגרירה בטוחה של רכבים חשמליים.</li>
          <li>הגעה מהירה ומקצועית ללא עיכובים מיותרים.</li>
          <li>מחירים הוגנים ושקופים לכל סוגי התקלות.</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">שאלות נפוצות (FAQ)</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">האם אתם גוררים רכבים חשמליים ללא נזק?</h3>
            <p>כן, אנו משתמשים בציוד ייעודי המבטיח גרירה בטוחה לרכבים חשמליים, תוך הגנה על המערכת החשמלית וסוללת הרכב.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם מספקים שירותי גרירה נוספים בקריות?</h3>
            <p>בהחלט, אנו מציעים שירותי <Link href="/areas/haifa-general/cheap-towing-kiryat-motzkin-fair-price" className="text-blue-600">גרירה זולה בקרית מוצקין</Link> וכן שירותי <Link href="/areas/haifa-general/buying-junk-cars-for-parts-kiryat-bialik-immediate-removal" className="text-blue-600">פינוי רכבים לפירוק בקרית ביאליק</Link>.</p>
          </div>
          <div>
            <h3 className="font-bold">איך נקבע המחיר לגרירה בכביש 22?</h3>
            <p>המחיר נקבע בהתאם למרחק הגרירה והשעה, תוך הקפדה על <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-blue-600">שירות גרירה 24/7 במחיר הוגן</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}