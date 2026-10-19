import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בכביש 22 (עוקף קריות) | שירות מהיר 24/7",
  description: "נתקעת בכביש 22 עם רכב חשמלי? מומחי גרירה בטוחה ושמירה על הסוללה. הגעה מהירה לכל הקריות במחיר הוגן. שירות זמין 24/7 לכל תקלה. התקשרו עכשיו!",
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
            נתקעת עם הרכב החשמלי בדרך? אנו מציעים <Link href="/areas/haifa-general/emergency-breakdown-towing-route-22-krayot-bypass" className="underline">שירות גרירת חירום בכביש 22</Link> המותאם לרכבים חשמליים רגישים. אנו משתמשים בציוד הרמה מתקדם למניעת נזק לסוללה ולמערכת ההנעה. זקוקים גם ל-<Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="underline">גרירת רכב זולה באזור צ'ק פוסט</Link>? הצוות שלנו זמין 24/7 לחילוץ בטוח.
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
          <li>זמינות 24/7 לאורך כל ציר עוקף קריות המהיר.</li>
          <li>ציוד גרירה מתקדם ללא גלגול הרכב, להגנה מושלמת על הסוללה.</li>
          <li>פתרונות חילוץ לרכבים תקועים ב-<Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="text-blue-600">אזור צ'ק פוסט והסביבה</Link>.</li>
          <li>מחירים הוגנים ושקופים - ללא הפתעות בדרך.</li>
          <li>סיוע במגוון מקרים: מרכב תקוע עקב תאונה ועד רכב שנתקע ללא טעינה.</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">שאלות נפוצות (FAQ)</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">איך מגררים רכב חשמלי מבלי להזיק לסוללה?</h3>
            <p>אנו משתמשים בגרר במת הרמה או עגלה ייעודית המונעת סיבוב של הגלגלים המניעים, כך שמערכות הרכב נשארות מוגנות לחלוטין בזמן ההובלה.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם מספקים חילוץ גם במקרה של תאונה בנתיבי כביש 22?</h3>
            <p>כן, אנו מבצעים חילוץ בטוח ומקצועי לרכבים לאחר תאונה בצירי התנועה המהירים באזור חיפה והקריות, תוך הקפדה על כללי הבטיחות בכביש.</p>
          </div>
          <div>
            <h3 className="font-bold">נתקעתי ללא חשמל באמצע הדרך, מה האפשרויות שלי?</h3>
            <p>אנו נגרור את הרכב לעמדת הטעינה הקרובה ביותר או לכל יעד שתבחר באזור הקריות או חיפה, תוך שירות מהיר ואדיב בכל שעה.</p>
          </div>
        </div>
      </section>
    </main>
  );
}