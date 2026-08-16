import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בכביש 22 עוקף קריות | הגעה מהירה 24/7",
  description: "נתקעת בכביש 22 עם רכב חשמלי? שירות גרירה מיומן 24/7 לרכבי EV. הגעה מהירה, שמירה על הסוללה ומחיר הוגן. התקשרו עכשיו לחילוץ מקצועי!",
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
            נתקעת עם הרכב החשמלי בדרך? אנו מספקים <Link href="/areas/haifa-general/emergency-towing-road-22-krayot-bypass" className="underline">שירותי גרירה בכביש 22 עוקף קריות</Link> מותאמים במיוחד לרכבים חשמליים. אנו דואגים לגרירה בטוחה ללא פגיעה בסוללה ובמערכות הרגישות. זקוקים גם ל-<Link href="/areas/haifa-general/emergency-towing-road-22-krayot" className="underline">גרירה דחופה בכביש 22</Link>? הצוות שלנו זמין עבורכם 24/7.
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
          <li>שירות מהיר ומקצועי גם עבור <Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="text-blue-600">גרירת רכבים זולה באזור צ'ק פוסט</Link>.</li>
          <li>מחירים הוגנים ושקופים - התחייבות לשירות מצוין.</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">שאלות נפוצות (FAQ)</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">כיצד גוררים רכב חשמלי ללא נזק לסוללה?</h3>
            <p>אנו משתמשים בגרר במת הרמה או עגלה ייעודית, המונעת גלגול של הגלגלים המניעים ומבטיחה הגנה מלאה על מערכות החשמל והסוללה של הרכב.</p>
          </div>
          <div>
            <h3 className="font-bold">מה עושים במקרה של תקלה טכנית או תאונה בדרך?</h3>
            <p>אנו מציעים מענה לכל סוגי התקלות. אם הרכב ניזוק קשות, אנו מספקים פתרונות מתקדמים כגון <Link href="/areas/haifa-general/sell-damaged-car-stuck-in-mud-carmel-area" className="text-blue-600">חילוץ רכבים תקועים</Link> ופינוי מהיר מהכביש.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם רוכשים רכבים ישנים לפירוק באזור?</h3>
            <p>כן, אנו מספקים שירותי פינוי וקנייה של רכבים ישנים. ניתן לבדוק את עמוד <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-towing-included" className="text-blue-600">קניית רכבים לפירוק בחיפה והקריות</Link> לפרטים נוספים.</p>
          </div>
        </div>
      </section>
    </main>
  );
}