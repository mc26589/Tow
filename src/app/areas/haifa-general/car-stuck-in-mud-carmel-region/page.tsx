import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ בכרמל | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם עם הרכב בבוץ באזור הכרמל? אנו מציעים שירותי חילוץ מהירים לרכבים שנתקעו בשטח ובדרכי עפר. מחיר הוגן, צוות מיומן וזמינות מסביב לשעון. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-region",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ רכב בחיפה והכרמל",
    "areaServed": { "@type": "Place", "name": "אזור הכרמל, חיפה" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$$,$",
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
            נתקעתם עם הרכב בבוץ באזור הכרמל? אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח ששקעו בדרכי עפר בוציות. 
            אנו מעניקים פתרונות בשטח לרבות <Link href="/areas/haifa-general/off-road-rescue-carmel-forest-danya" className="underline">חילוץ רכב תקוע באזור דניה ויערות הכרמל</Link>. 
            בנוסף, אנו מספקים שירותי גרירה מקצועיים גם לאזור אחוזה במקרה של תקלות טכניות, עם זמינות 24/7 וציוד חילוץ מתקדם.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="חיפה והכרמל" />
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
            <li>ציוד חילוץ מותאם לרכבים פרטיים ורכבי 4x4.</li>
            <li>הגעה מהירה לכל נקודה באזור הכרמל והסביבה הקרובה.</li>
            <li>שירות אדיב ומקצועי המעניק לכם שקט נפשי במחיר הוגן.</li>
          </ul>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על חילוץ רכב בשטח</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg">תוך כמה זמן תגיעו לחלץ אותי באזור הכרמל?</h4>
                <p>אנו משתדלים להגיע לכל נקודה בכרמל תוך זמן קצר, בהתאם לעומסי התנועה ולתנאי השטח.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">באילו מקרים ניתן להסתייע בכם?</h4>
                <p>אנו מחלצים רכבים שנתקעו בבוץ, שקעו בדרכי עפר או זקוקים ל<Link href="/areas/haifa-general/car-towing-rescue-ahuzah-haifa-not-motorcycles" className="underline">גרירה מהירה באזור אחוזה</Link> וסביבתה.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">מהו טווח המחירים לחילוץ?</h4>
                <p>המחיר נקבע בהתאם למורכבות החילוץ. נשמח לתת הצעת מחיר הוגנת ושקופה בטלפון ללא התחייבות.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}