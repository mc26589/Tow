import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ בכרמל | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ באזור הכרמל? שירות חילוץ רכב מהיר ומקצועי 24/7. ציוד שטח מתקדם לכל סוגי הרכבים. מחירים הוגנים והגעה מהירה. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-area",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ רכב בבוץ באזור הכרמל",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$$, $$$",
    "serviceType": "Car recovery from mud and off-road towing"
  };

  return (
    <main className="bg-neutral-950 min-h-screen text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל – הגעה מהירה 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות שלנו מומחה בחילוצי שטח ומגיע אליכם עם ציוד כננות מתקדם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="הכרמל וחיפה" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">זקוקים לחילוץ רכב שנתקע בבוץ באזור הכרמל?</h2>
        <p className="mb-4">
          אם הרכב שלכם שקע בבוץ בדרכי העפר של הכרמל, אל תנסו להמשיך ללחוץ על הגז. צרו קשר עם מומחי <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-400 underline">car rescue from mud carmel area</Link> כדי למנוע נזק נוסף לרכב. אנו מעניקים שירות מקצועי גם למטיילים שזקוקים ל-<Link href="/areas/haifa-general/emergency-car-rescue-mud-carmel-forest" className="text-blue-400 underline">emergency car rescue mud carmel forest</Link> ומגיעים לכל נקודה באזור.
        </p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו?</h3>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>זמינות מלאה 24/7 לכל אזור הכרמל והסביבה.</li>
          <li>ניסיון עשיר בחילוץ רכבים פרטיים, מסחריים ו-4x4 מבוץ עמוק.</li>
          <li>שימוש בציוד שטח מתקדם וכננות כוח להבטחת חילוץ בטוח.</li>
          <li>מחירים הוגנים ושירות אדיב ללא הפתעות.</li>
        </ul>

        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <h3 className="text-xl font-bold mb-4">שאלות נפוצות (FAQ)</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">מהו זמן ההגעה המשוער לחילוץ בכרמל?</p>
              <p className="text-neutral-400">אנו שואפים להגיע לכל נקודה בכרמל תוך זמן קצר, לרוב תוך כ-30-45 דקות, בהתאם לתנאי השטח ועומסי התנועה.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם מספקים גם שירותי גרירה רגילים?</p>
              <p className="text-neutral-400">כן, בנוסף לחילוצי שטח, אנו מציעים שירותי גרירה מקצועיים. אם אתם זקוקים לשירות אחר, תוכלו לבדוק אצלנו גם <Link href="/areas/haifa-general/fast-towing-road-22-krayot" className="text-blue-400 underline">fast towing road 22 krayot</Link>.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-xl border border-neutral-800">
          <p className="text-sm text-neutral-400">
            <strong>הערה חשובה:</strong> אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4. איננו מספקים שירותי חילוץ או גרירה לאופנועים. במקרה של רכב שהורד מהכביש או הוגדר כגרוטאה, ניתן לבדוק אפשרות ל-<Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal" className="text-blue-400 underline">buy cars for scrap haifa krayot immediate removal</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}