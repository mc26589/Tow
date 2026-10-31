import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בכביש 22 (עוקף קריות) | שירות מהיר 24/7",
  description: "נתקעת בכביש 22 עם רכב חשמלי? מומחי גרירה בטוחה עם ציוד מתקדם לשמירה על הסוללה. הגעה מהירה לכל הקריות במחיר הוגן. זמינים 24/7. התקשרו עכשיו!",
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
            נתקעת עם הרכב החשמלי בדרך? אנו מציעים <Link href="/areas/haifa-general/emergency-breakdown-towing-route-22-krayot-bypass" className="underline">שירות גרירת חירום בכביש 22</Link> המותאם לרכבים חשמליים רגישים. אם נתקעת בשל חוסר טעינה, אנו מספקים <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="underline">שירות פריקת סוללה וגרירה בכביש 22</Link> המגן על הסוללה. מחפשים גם <Link href="/areas/haifa-general/towing-services-road-22-krayot-bypass" className="underline">שירותי גרירה מקצועיים בציר עוקף קריות</Link>? הצוות שלנו זמין 24/7.
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
          <li>שימוש בגרר מתקדם למניעת נזק למערכות ההנעה החשמליות.</li>
          <li>פתרונות חילוץ לרכבים תקועים ב-<Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-600">אזור צ'ק פוסט והסביבה</Link>.</li>
          <li>מחירים הוגנים ושקופים - ללא הפתעות בדרך.</li>
          <li>סיוע מקצועי גם במקרים של <Link href="/areas/haifa-general/towing-for-scrap-kiryat-bialik-road-22" className="text-blue-600">פינוי רכב תקוע לצורך גריטה</Link>.</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">שאלות נפוצות</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">איך מגררים רכב חשמלי ללא נזק לסוללה?</h3>
            <p>אנו משתמשים בגרר עם הרמה מלאה או עגלה ייעודית שמונעת מהגלגלים המניעים להסתובב, מה שמבטיח הגנה על המנוע והסוללה בזמן הגרירה.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם מספקים חילוץ לרכב שנתקע ללא חשמל?</h3>
            <p>כן, אנו מבצעים גרירה מהירה לנקודת הטעינה הקרובה ביותר בקריות או לכל יעד לבחירתך, תוך שמירה על כללי הבטיחות בכבישים המהירים.</p>
          </div>
          <div>
            <h3 className="font-bold">מהו זמן ההגעה הממוצע בכביש 22?</h3>
            <p>אנו מבינים את הדחיפות בעצירה בכביש מהיר ושואפים להגיע לנקודת התקיעה במינימום זמן מרגע הקריאה, בהתאם לעומסי התנועה בציר עוקף קריות.</p>
          </div>
        </div>
      </section>
    </main>
  );
}