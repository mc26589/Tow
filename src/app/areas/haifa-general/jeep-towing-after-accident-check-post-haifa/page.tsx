import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר ג'יפים בצ'ק פוסט חיפה - שירות מהיר ומקצועי 24/7",
  description: "נתקעתם עם הג'יפ לאחר תאונה בצ'ק פוסט חיפה? גרר חירום זמין 24/7 להגעה מהירה ומחיר הוגן. פינוי בטוח לכל היעדים. התקשרו עכשיו לקבלת סיוע מיידי!",
  keywords: "גרר ג'יפים, גרר לאחר תאונה, צ'ק פוסט חיפה, גרר חיפה, גרר קריות, גרר 24/7, חילוץ ג'יפים, גרר רכבי שטח",
  alternates: {
    canonical: "https://www.yourdomain.com/areas/haifa-general/jeep-towing-after-accident-check-post-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "גרר חירום חיפה והקריות",
    "description": "שירותי גרר חירום מקצועיים לג'יפים ורכבים לאחר תאונה באזור צ'ק פוסט חיפה.",
    "url": "https://www.yourdomain.com/areas/haifa-general/jeep-towing-after-accident-check-post-haifa",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "areaServed": { "@type": "Place", "name": "חיפה והקריות" },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            גרר ג'יפים לאחר תאונה בצ'ק פוסט חיפה והקריות
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            זקוקים לשירותי גרר מהירים לג'יפ שלכם? אנו מספקים מענה חירום 24/7 באזור צ'ק פוסט. אם אתם זקוקים גם ל-
            <Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="underline">שירותי גרר במחיר נוח בצ'ק פוסט</Link> או חילוץ בכבישים מהירים כמו ה-
            <Link href="/areas/haifa-general/fast-towing-services-road-22-krayot-bypass" className="underline">גרר מהיר בכביש 22 עוקף קריות</Link>, אנו כאן עבורכם.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg"
            >
              התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">למה לבחור בנו לגרר ג'יפים?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">זמינות 24/7</h3>
              <p className="text-gray-300">אנחנו זמינים עבורכם בכל שעה ובכל יום בשבוע, כולל סופי שבוע וחגים.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">מומחיות בדרכים</h3>
              <p className="text-gray-300">מתמחים בחילוץ גם בתנאי שטח קשים, בדומה לשירותי <Link href="/areas/haifa-general/emergency-mud-rescue-carmel-forest-haifa" className="text-blue-300 underline">חילוץ מבוץ באזור הכרמל</Link>.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">ציוד מתקדם</h3>
              <p className="text-gray-300">ציוד מקצועי לג'יפים ורכבי 4x4 המבטיח הובלה בטוחה ללא נזקים נוספים.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-950 text-white">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-2xl md:text-4xl font-bold mb-6">שאלות נפוצות</h2>
           <div className="max-w-2xl mx-auto text-right">
             <div className="mb-6">
               <h3 className="font-bold">האם אתם מספקים גרר לאופנועים?</h3>
               <p>לא, אנו מתמקדים בגרר ג'יפים, רכבים פרטיים ומסחריים בלבד.</p>
             </div>
             <div className="mb-6">
               <h3 className="font-bold">האם המחיר נקבע לפי מרחק?</h3>
               <p>המחיר מושפע מהמיקום ומהמרחק ליעד. אנו מקפידים על מחיר הוגן ותחרותי לכל לקוח.</p>
             </div>
           </div>
        </div>
      </section>
    </>
  );
}