import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר ג'יפים בצ'ק פוסט חיפה | הגעה תוך 30 דקות | 24/7",
  description: "נתקעתם עם הג'יפ לאחר תאונה בצ'ק פוסט חיפה? גרר חירום מקצועי זמין 24/7. שירות מהיר, מחיר הוגן וטיפול בטוח לרכב שטח. התקשרו עכשיו לסיוע מיידי!",
  keywords: "גרר ג'יפים, גרר לאחר תאונה, צ'ק פוסט חיפה, גרר חיפה, חילוץ ג'יפים, גרר 24/7, פינוי רכב לאחר תאונה",
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
            זקוקים לשירותי גרר מהירים לג'יפ שלכם? אנו מספקים מענה חירום 24/7. אם אתם זקוקים ל- 
            <Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="underline">שירותי גרר במחיר נוח בצ'ק פוסט</Link> או עזרה מקצועית כמו 
            <Link href="/areas/haifa-general/emergency-car-recovery-ditch-route-4-check-post" className="underline">חילוץ רכב מתעלה בכביש 4</Link>, צוות הגרר המומחה שלנו כאן עבורכם.
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
              <p className="text-gray-300">מתמחים בחילוץ בתנאי שטח מורכבים, בדומה לשירותי <Link href="/areas/haifa-general/4x4-stuck-mud-rescue-carmel-forest-haifa" className="text-blue-300 underline">חילוץ 4x4 בבוץ בכרמל</Link>.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">ציוד מתקדם</h3>
              <p className="text-gray-300">ציוד מקצועי לג'יפים המבטיח הובלה בטוחה. זקוקים גם ל- <Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="text-blue-300 underline">גרר לאחר תאונה בכביש 22</Link>? הגעתם למקום הנכון.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-950 text-white">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-2xl md:text-4xl font-bold mb-6">שאלות נפוצות</h2>
           <div className="max-w-2xl mx-auto text-right space-y-6">
             <div>
               <h3 className="font-bold text-lg">האם אתם מפנים רכבים גם מאזור כביש 4?</h3>
               <p>כן, אנו מבצעים חילוץ וגרר לאורך כל ציר כביש 4, כולל אזור צ'ק פוסט וחיבורים לעוקף קריות.</p>
             </div>
             <div>
               <h3 className="font-bold text-lg">האם המחיר לגרירת ג'יפ יקר יותר מרכב רגיל?</h3>
               <p>גרירת ג'יפים דורשת ציוד מתאים ומומחיות בשינוע רכבי שטח. אנו מתחייבים למחיר הוגן ושקוף ללא הפתעות.</p>
             </div>
             <div>
               <h3 className="font-bold text-lg">האם אתם מציעים שירות גרירה גם לגרט?</h3>
               <p>אנו מתמקדים בחילוץ וגרירה לאחר תאונות או תקלה. במידה והרכב במצב טוטאל-לוס, אנו יכולים לסייע בהפניה לשירותי <Link href="/areas/haifa-general/car-scrapping-haifa-krayot" className="text-blue-300 underline">פירוק רכבים באזור חיפה והקריות</Link>.</p>
             </div>
           </div>
        </div>
      </section>
    </>
  );
}