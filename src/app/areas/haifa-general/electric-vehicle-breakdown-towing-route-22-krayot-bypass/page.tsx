import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בכביש 22 עוקף קריות | הגעה תוך 30 דקות",
  description: "נתקעת בכביש 22 עם רכב חשמלי? שירות גרירה מומחה ל-EV עם שמירה על הסוללה. מחיר הוגן, זמינות 24/7 באזור הקריות. התקשרו עכשיו לחילוץ מהיר!",
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
            נתקעת עם הרכב החשמלי בדרך? אנו מספקים <Link href="/areas/haifa-general/sherutei-grira-hilutz-krayot-kavish-22" className="underline">שירותי גרירה בכביש 22 עוקף קריות</Link> מותאמים במיוחד לרכבים חשמליים. אנו דואגים לגרירה בטוחה ללא פגיעה בסוללה ובמערכות הרגישות. זקוקים גם ל-<Link href="/areas/haifa-general/towing-stuck-vehicle-road-22-haifa" className="underline">גרירה דחופה בכביש 22</Link>? הצוות שלנו זמין עבורכם 24/7.
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
          <li>שירות מקצועי גם עבור <Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="text-blue-600">גרירת רכבים באזור צ'ק פוסט</Link>.</li>
          <li>מחירים הוגנים ושקופים - התחייבות לשירות מצוין.</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">שאלות נפוצות (FAQ)</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">כיצד גוררים רכב חשמלי ללא נזק לסוללה?</h3>
            <p>אנו משתמשים בגרר במת הרמה או עגלה ייעודית המונעת גלגול של הגלגלים המניעים, מה שמבטיח הגנה מלאה על מערכות החשמל.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם מבצעים חילוצים גם במקרה של תאונה?</h3>
            <p>כן, אנו מספקים מענה מלא, כולל <Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-blue-600">חילוץ רכבים לאחר תאונה</Link> בבטחה ובמהירות.</p>
          </div>
          <div>
            <h3 className="font-bold">מה עושים עם רכב ישן שאינו נוסע?</h3>
            <p>אנו מטפלים בפינוי רכבים. ניתן לבדוק את עמוד <Link href="/areas/haifa-general/buy-cars-for-scrap-krayot-immediate-removal" className="text-blue-600">קניית רכבים לפירוק בקריות</Link> לפרטים נוספים.</p>
          </div>
        </div>
      </section>
    </main>
  );
}