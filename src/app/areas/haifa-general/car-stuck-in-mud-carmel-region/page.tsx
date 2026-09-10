import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ באזור הכרמל | הגעה מהירה 24/7",
  description: "נתקעתם עם הרכב בבוץ בכרמל? אנו מציעים שירותי חילוץ רכב תקוע בבוץ באזור הכרמל והסביבה. מחיר הוגן ושירות מהיר. התקשרו עכשיו לחילוץ מקצועי!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-region",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ רכב בחיפה והקריות",
    "areaServed": { "@type": "Place", "name": "אזור הכרמל, חיפה" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "חילוץ רכב תקוע בבוץ"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל</h1>
          <p className="text-xl mb-8">
            נתקעתם עם הרכב בבוץ באזור הכרמל? אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4 שנתקעו בדרכי עפר או בשטח בוצי. 
            אנו מציעים פתרונות מקצועיים גם למקרים מורכבים כמו <Link href="/areas/haifa-general/urgent-mud-rescue-4x4-towing-carmel-forest-trails-haifa" className="underline">חילוץ 4x4 בשבילי הכרמל</Link>. 
            הצוות שלנו זמין 24/7 עם ציוד חילוץ מתקדם כדי להחזיר אתכם לכביש במהירות ובמחירים הוגנים.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בכרמל?</h2>
          <ul className="list-disc list-inside space-y-4 text-lg mb-8">
            <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>מומחיות בחילוץ רכבים שנתקעו בבוץ ובתוואי שטח מאתגר.</li>
            <li>ציוד חילוץ מתקדם המותאם לרכבים פרטיים, מסחריים ו-4x4.</li>
            <li>הגעה מהירה לכל נקודה באזור הכרמל והסביבה.</li>
            <li>שירות אדיב ומקצועי במחירים הוגנים.</li>
          </ul>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על חילוץ רכב בבוץ</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg">תוך כמה זמן תגיעו לחלץ אותי באזור הכרמל?</h4>
                <p>אנו משתדלים להגיע לכל נקודה באזור הכרמל תוך זמן קצר מרגע הקריאה, בהתאם לעומסי התנועה.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">האם אתם מחלצים גם רכבים שאינם 4x4?</h4>
                <p>כן, אנו מחלצים רכבים פרטיים ומסחריים מכל סוג שנתקעו בדרכי עפר או בוץ, תוך שימוש בציוד מתאים.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">מהו טווח המחירים לחילוץ שטח?</h4>
                <p>המחיר נקבע בהתאם למורכבות החילוץ ומיקום הרכב. נשמח לתת הצעת מחיר הוגנת בטלפון.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}