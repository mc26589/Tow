import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בכביש 22 (עוקף קריות) | שירות 24/7 מהיר",
  description: "נתקעת בכביש 22 עם רכב חשמלי? שירות גרירה מקצועי ומיומן ל-EV עם הגנה מלאה על הסוללה. מחיר הוגן, הגעה מהירה לכל הקריות. התקשרו עכשיו לחילוץ בטוח!",
  alternates: {
    canonical: "/areas/haifa-general/electric-vehicle-breakdown-towing-route-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה לרכב חשמלי בכביש 22 עוקף קריות",
    "areaServed": { "@type": "Place", "name": "כביש 22 עוקף קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "מחיר הוגן",
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
            נתקעת עם הרכב החשמלי בדרך? אנו מספקים <Link href="/areas/haifa-general/towing-stuck-car-road-22-krayot" className="underline">גרירת רכב תקוע בכביש 22</Link> המותאמת במיוחד לרכבים חשמליים. אנו משתמשים בגרר עגלה ייעודי המונע נזק למערכת ההנעה ולסוללה הרגישה. זקוקים גם ל-<Link href="/areas/haifa-general/flatbed-towing-electric-car-dead-battery-check-post-haifa" className="underline">גרירת רכב חשמלי בצ'ק פוסט</Link>? הצוות שלנו זמין 24/7 לחילוץ מהיר.
          </p>
          <div className="flex flex-col gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
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
          <li>זמינות 24/7 לאורך כל ציר עוקף קריות.</li>
          <li>ציוד עגלה מתקדם לגרירה בטוחה ללא נזק לרכבים חשמליים.</li>
          <li>פתרונות חילוץ מהירים גם באזורים סמוכים כמו <Link href="/areas/haifa-general/emergency-car-recovery-ditch-route-4-check-post" className="text-blue-600">חילוץ רכב תקוע בצ'ק פוסט</Link>.</li>
          <li>מחירים הוגנים ושקופים - התחייבות לשירות מצוין.</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">שאלות נפוצות (FAQ)</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">כיצד גוררים רכב חשמלי ללא נזק לסוללה?</h3>
            <p>אנו משתמשים בגרר במת הרמה או עגלה ייעודית המונעת גלגול של הגלגלים המניעים, מה שמבטיח הגנה מלאה על מערכות החשמל.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם מבצעים חילוצים גם במקרה של תאונה בכביש 22?</h3>
            <p>כן, אנו מספקים מענה מלא, כולל <Link href="/areas/haifa-general/emergency-car-recovery-ditch-route-4-check-post" className="text-blue-600">חילוץ רכבים לאחר תאונה</Link> בבטחה ובמהירות המרבית.</p>
          </div>
          <div>
            <h3 className="font-bold">מה עושים אם הסוללה התרוקנה באמצע הנסיעה?</h3>
            <p>במקרים של רכב חשמלי "מת", אנו נגרר את הרכב לעמדת הטעינה הקרובה ביותר ללא כל פגיעה במערכות הרכב.</p>
          </div>
        </div>
      </section>
    </main>
  );
}