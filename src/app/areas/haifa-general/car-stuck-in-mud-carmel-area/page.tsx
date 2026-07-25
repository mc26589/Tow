import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ בכרמל | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ באזור הכרמל? אנחנו כאן לחילוץ מהיר ומקצועי. צוות מנוסה עם ציוד שטח מתקדם. פועלים 24/7 לחילוץ רכבים פרטיים ו-4x4. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-area",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות שלנו בדרך אליכם עם ציוד חילוץ מתקדם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
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
          אם הרכב שלכם שקע בבוץ באזורי השטח של הכרמל, אל תנסו להמשיך ללחוץ על הגז – זה עלול להחמיר את המצב. אנו מתמחים בחילוצי שטח, רכבי 4x4 ורכבים פרטיים שנתקעו בדרכי עפר או בבוץ עמוק באזור חיפה והכרמל. לעיתים קרובות אנו מסייעים גם ב- <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="text-blue-400 underline">4x4 mud recovery carmel forest haifa</Link> עבור מטיילים שנתקעו בדרכים צדדיות.
        </p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו?</h3>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>זמינות מלאה 24/7 לכל אזור הכרמל.</li>
          <li>ניסיון רב בחילוץ רכבים מבוץ ותנאי שטח מורכבים.</li>
          <li>ציוד חילוץ מקצועי וכננות עוצמתיות.</li>
          <li>מחירים הוגנים ושירות אדיב.</li>
        </ul>

        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <h3 className="text-xl font-bold mb-4">שאלות נפוצות (FAQ)</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">תוך כמה זמן תגיעו לחלץ אותי בכרמל?</p>
              <p className="text-neutral-400">אנו שואפים להגיע לכל נקודה בכרמל תוך זמן קצר ככל האפשר, בהתאם לעומסי התנועה ותנאי השטח.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם מחלצים גם רכבים שאינם 4x4?</p>
              <p className="text-neutral-400">כן, אנו מחלצים רכבים פרטיים ומסחריים שנתקעו בדרכי עפר בוציות. למידע נוסף על סוגי חילוץ ספציפיים, ראו <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-400 underline">car rescue from mud carmel area</Link>.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-xl border border-neutral-800">
          <p className="text-sm text-neutral-400">
            <strong>הערה חשובה:</strong> אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4. איננו מספקים שירותי חילוץ או גרירה לאופנועים.
          </p>
        </div>
      </section>
    </main>
  );
}