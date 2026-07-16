import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב מהבוץ באוניברסיטת חיפה | הגעה מהירה 24/7",
  description: "נתקעתם בבוץ ליד אוניברסיטת חיפה? שירות חילוץ רכב שטח מקצועי ומהיר לכל סוגי הרכבים. מחיר הוגן, שירות אדיב וזמינות מלאה 24/7. התקשרו עכשיו לחילוץ בטוח!",
  alternates: {
    canonical: "/areas/haifa-general/suv-stuck-in-mud-rescue-haifa-university",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$$,$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.762,
      "longitude": 35.015
    },
    "serviceType": "SUV Mud Rescue and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">חילוץ רכב שטח תקוע בבוץ באזור אוניברסיטת חיפה</h1>
          <p className="text-xl mb-8 leading-relaxed">
            נתקעתם עם ה-SUV או הרכב הפרטי בדרכי העפר הבוציות סביב אוניברסיטת חיפה? אנו מתמחים בחילוץ רכבים ששקעו בבוץ בתוואי השטח המורכב של הכרמל. הצוות שלנו זמין 24/7 ומבטיח הגעה מהירה לכל נקודה באזור. צריכים עזרה נוספת בקרבת מקום? ניתן לפנות גם לשירות <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="underline font-bold">חילוץ רכב מבוץ באזור הכרמל</Link> או לשירותי גרירה מקצועיים ב-<Link href="/areas/haifa-general/cash-for-old-broken-car-neve-shaanan-haifa" className="underline font-bold">שכונת נווה שאנן הסמוכה</Link>.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ באזור חיפה?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות מלאה 24/7, כולל בסופי שבוע וחגים באזור האוניברסיטה.</li>
            <li>✓ ציוד חילוץ טכני מתקדם לרכבי 4x4, רכבי שטח ורכבים פרטיים.</li>
            <li>✓ שקיפות מלאה במחיר – מחיר הוגן לכל קריאה.
</li>
            <li>✓ היכרות עמוקה עם נתיבי הגישה, שבילי האוניברסיטה והיערות הסמוכים.</li>
          </ul>

          <div className="mt-12 border-t border-gray-700 pt-8">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על חילוץ בבוץ בחיפה</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg">תוך כמה זמן תגיעו לאוניברסיטה?</h4>
                <p className="text-gray-300">אנו מתחייבים להגעה מהירה לאזור האוניברסיטה והכרמל, בדרך כלל תוך זמן קצר מרגע קבלת הקריאה, בהתאם לעומסי התנועה.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">האם ניתן להזמין חילוץ גם אם הרכב לא רכב שטח?</h4>
                <p className="text-gray-300">בהחלט. אנו מחלצים רכבים פרטיים, רכבים מסחריים ו-SUV שנכנסו לבוץ בטעות. אם הגעתם לדרך עפר ונתקעתם, אנחנו כאן לעזור.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">מה טווח המחירים לחילוץ?</h4>
                <p className="text-gray-300">המחיר נקבע לפי מורכבות החילוץ וציוד הנדרש (כננת, רצועות וכד'). אנו מקפידים על מחיר הוגן ותחרותי לכל סוגי השירותים.</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            *הערה: השירות מיועד לרכבים בלבד (פרטיים, שטח ומסחריים). אין אנו מבצעים חילוץ אופנועים.
          </p>
        </div>
      </section>
    </main>
  );
}