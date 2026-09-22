import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב מהבוץ באוניברסיטת חיפה | 24/7 הגעה מהירה",
  description: "נתקעתם בבוץ ליד אוניברסיטת חיפה? שירות חילוץ מקצועי לרכבים פרטיים ושטח 24/7. הגעה מהירה, ציוד מתקדם ומחיר הוגן. התקשרו עכשיו לחילוץ בטוח!",
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
    "priceRange": "$$$",
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
            נתקעתם עם הרכב בדרכי העפר סביב אוניברסיטת חיפה? אנו מתמחים בחילוץ רכבים ששקעו בבוץ בתוואי השטח המורכב של הכרמל. הצוות שלנו זמין בכל ימות השבוע להגעה מהירה. צריכים עזרה נוספת בקרבת מקום? ניתן לפנות גם לשירות <Link href="/areas/haifa-general/off-road-mud-rescue-carmel-private-car" className="underline font-bold">חילוץ רכב מבוץ באזור הכרמל</Link> או לשירותי גרירה מקצועיים ב-<Link href="/areas/haifa-general/car-towing-rescue-ahuzah-haifa-not-motorcycles" className="underline font-bold">שכונת אחוזה הסמוכה</Link>.
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
            <li>✓ זמינות מלאה 24 שעות ביממה, כולל בסופי השבוע וחגים באזור האוניברסיטה.</li>
            <li>✓ ציוד חילוץ טכני מתקדם לרכבי 4x4 ורכבים פרטיים.</li>
            <li>✓ שקיפות מלאה במחיר - מחיר הוגן לכל קריאה.</li>
            <li>✓ היכרות עמוקה עם נתיבי הגישה והיערות הסמוכים לחיפה.</li>
          </ul>

          <div className="mt-12 border-t border-gray-700 pt-8">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על חילוץ בבוץ בחיפה</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg">תוך כמה זמן תגיעו לאוניברסיטה?</h4>
                <p className="text-gray-300">אנו מתחייבים להגעה מהירה לאזור האוניברסיטה והכרמל, בדרך כלל תוך זמן קצר מרגע קבלת הקריאה, בהתאם לעומסי התנועה באזור.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">האם ניתן להזמין חילוץ גם אם הרכב לא רכב שטח?</h4>
                <p className="text-gray-300">בהחלט. אנו מחלצים רכבים פרטיים ורכבים מסחריים שנכנסו בטעות לבוץ. אם נתקעתם בדרך עפר, אנחנו כאן לעזור.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">האם אתם מחלצים גם אופנועים באזור הכרמל?</h4>
                <p className="text-gray-300">חשוב להבהיר - השירות שלנו מתמקד בחילוץ רכבים בלבד (רכבים פרטיים, רכבי שטח ורכבים מסחריים). אין אנו מבצעים חילוץ אופנועים בכל אזור חיפה.</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            *הערה: השירות מיועד לרכבים בלבד. למידע נוסף על שירותים נוספים באזור, ניתן לבדוק גם <Link href="/areas/haifa-general/car-stuck-in-sand-bat-galim-haifa" className="underline">חילוץ רכב מהחול בבת גלים</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}