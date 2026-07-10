import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ רכב מבוץ בכרמל | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ באזור הכרמל? אנו מציעים חילוץ רכב מקצועי ומהיר לכל סוגי הרכבים. מחירים נוחים, ציוד מתקדם וזמינות מלאה מסביב לשעון. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/car-rescue-from-mud-carmel-area",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$ - $$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "34.9896"
    },
    "serviceType": "חילוץ רכב מבוץ"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">חילוץ רכב מבוץ באזור הכרמל</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב בבוץ באזור הכרמל? הצוות שלנו מתמחה בחילוץ רכבים פרטיים ו-4x4 ששקעו בדרכי עפר ובשטח. 
            אנו מציעים חילוץ מקצועי לכל מי שזקוק לפתרון מהיר של <Link href="/areas/haifa-general/car-extraction-from-mud-carmel-reserve-haifa" className="underline">חילוץ מרכבי בוץ בשמורת הכרמל</Link> והסביבה.
            חשוב להבהיר: השירות מיועד לרכבים בלבד (איננו מספקים חילוץ לאופנועים).
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בכרמל?</h2>
        <ul className="space-y-4 text-lg">
          <li>✓ זמינות מלאה 24/7 לכל קריאת חילוץ באזור הכרמל.</li>
          <li>✓ ציוד חילוץ מתקדם המותאם לדרכי עפר ובוץ.</li>
          <li>✓ מחירים הוגנים ושקיפות מלאה מול הלקוח.</li>
          <li>✓ צוות מיומן ומקצועי עם ניסיון רב בחילוצי שטח.</li>
        </ul>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ רכב מבוץ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">כמה זמן לוקח לכם להגיע לחילוץ בכרמל?</h3>
              <p>אנו שואפים להגיע לכל נקודה באזור הכרמל בזמן הקצר ביותר. למידע על אזורים מרוחקים יותר כמו <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot">אזור צומת הצ'ק פוסט</Link>, ניתן להתעדכן מול המוקד הטלפוני שלנו.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">האם אתם מחלצים רכבים ששקעו בבוץ כבד?</h3>
              <p>כן, אנו ערוכים לכל סוגי החילוץ. אם רכבכם נתקע בתנאי קיצון, הצוות המיומן שלנו יגיע עם הציוד המתאים כדי לחלץ את הרכב בבטחה ולמנוע נזקים מיותרים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}