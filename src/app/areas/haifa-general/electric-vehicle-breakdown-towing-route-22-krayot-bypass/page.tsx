import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בכביש 22 עוקף קריות | הגעה מהירה 24/7",
  description: "נתקעת בכביש 22 עם רכב חשמלי? שירות גרירה מקצועי 24/7 המותאם לרכבי EV. הגעה מהירה, טיפול מוגן לסוללה ומחיר הוגן. התקשרו עכשיו לחילוץ מקצועי!",
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
            נתקעת עם הרכב החשמלי בכביש 22? אנו מציעים <Link href="/areas/haifa-general/towing-services-road-22-krayot" className="underline">שירותי גרירה בכביש 22 עוקף קריות</Link> מקצועיים ומיומנים לרכבי EV. אנו מבינים את הרגישות של סוללות ה-EV ומבצעים חילוץ בטוח ללא נזק. זקוקים גם ל-<Link href="/areas/haifa-general/emergency-light-truck-towing-route-22-krayot-bypass" className="underline">גרירת רכב מסחרי או קל בכביש 22</Link>? הצוות שלנו זמין עבורכם 24/7.
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
          <li>זמינות 24/7 לאורך כל ציר עוקף קריות.</li>
          <li>ציוד מתקדם לגרירה בטוחה של רכבים חשמליים (EV).</li>
          <li>ניסיון עשיר בחילוץ רכבים מכל סוג, כולל <Link href="/areas/haifa-general/urgent-towing-commercial-van-check-post-route-22" className="text-blue-600">גרירת רכבים מסחריים בצ'ק פוסט</Link>.</li>
          <li>מחירים הוגנים ושקופים - התחייבות לשירות אמין.</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">שאלות נפוצות (FAQ)</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">האם אתם גוררים רכבים חשמליים ללא נזק?</h3>
            <p>כן, אנו משתמשים בציוד ייעודי (עגלה/במה) המבטיח שהרכב לא יגרר על הגלגלים המניעים, תוך הגנה מלאה על הסוללה.</p>
          </div>
          <div>
            <h3 className="font-bold">מה עושים אם נתקעתי ללא טעינה בדרך?</h3>
            <p>אנו מציעים מענה מהיר של גרירה לנקודת הטעינה הקרובה. זקוקים לשירות באזורים נוספים? ראו גם <Link href="/areas/haifa-general/cheap-towing-kiryat-motzkin-fair-price" className="text-blue-600">גרירה זולה בקרית מוצקין</Link>.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם רוכשים רכבים ישנים לפירוק באזור?</h3>
            <p>כן, אנו מספקים שירותי פינוי וקנייה של רכבים ישנים. לפרטים נוספים ניתן להיכנס לעמוד <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot" className="text-blue-600">קניית רכבים לפירוק בחיפה והקריות</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}