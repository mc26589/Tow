import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BUSINESS_INFO } from "@/lib/data";
import { WhatsAppCTA } from "@/components/whatsapp-cta";

export const metadata: Metadata = {
  title: "חילוץ 4x4 מבוץ ביער הכרמל | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ ביער הכרמל? חילוץ שטח מקצועי 4x4 בחיפה והסביבה. ציוד כבד, מחיר הוגן וזמינות 24/7. הגעה מהירה לשטח - התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/hilutz-4x4-butz-carmel-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ 4x4 מבוץ ביער הכרמל חיפה",
    "description": "שירותי חילוץ שטח מקצועיים לרכבי 4x4 וג'יפים שנתקעו בבוץ בדרכי יער הכרמל. זמינות 24/7, מחירים הוגנים.",
    "url": "https://yourdomain.com/areas/haifa-general/hilutz-4x4-butz-carmel-haifa",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "₪₪",
    "areaServed": [
      { "@type": "Place", "name": "חיפה" },
      { "@type": "Place", "name": "יער הכרמל" },
      { "@type": "Place", "name": "נשר" }
    ],
    "serviceType": ["חילוץ 4x4 מבוץ", "גרירת רכבי שטח", "חילוץ רכב תקוע"],
    "image": "/images/4x4-mud-rescue.jpg"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ 4x4 מבוץ ביער הכרמל – זמינות 24/7</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            נתקעתם בבוץ? הצוות המיומן שלנו מספק שירותי <Link href="/areas/haifa-general/off-road-mud-rescue-carmel-private-car" className="underline font-semibold">חילוץ רכבי שטח בחיפה</Link> ומבטיח הגעה מהירה לכל נקודה ביער הכרמל.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והכרמל" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 flex items-center justify-center space-x-2 text-lg">
              <span>התקשרו עכשיו לחילוץ מהיר</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary-light">מומחים בחילוצי שטח מורכבים</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg mb-4">
                השטח בכרמל דורש ניסיון רב. אנו מבצעים חילוצים בדרכים בוציות, תוך שימוש בציוד כבד המותאם לכל סוגי הרכבים. אם נתקעתם באזור אחוזה או קרוב לאוניברסיטה, נגיע אליכם במהירות עם שירות <Link href="/areas/haifa-general/car-towing-rescue-ahuzah-haifa-not-motorcycles" className="text-blue-400 font-bold">חילוץ רכבים באחוזה חיפה</Link>.
              </p>
              <p className="text-lg mb-4">
                זקוקים לשירותי גרירה לאחר החילוץ? אנו מציעים מענה מלא, כולל <Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="text-blue-400 font-bold">שירותי גרירה מתקדמים</Link> למוסכים מובילים באזור.
              </p>
            </div>
            <div className="flex justify-center">
              <Image src="/images/4x4-mud-rescue.jpg" alt="חילוץ 4x4 מבוץ בכרמל" width={600} height={400} className="rounded-lg shadow-xl" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white text-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות - חילוץ שטח בחיפה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">האם אתם מחלצים מכל נקודה ביער?</h3>
              <p>כן, אנו מכירים את כל השבילים המרכזיים והצדדיים, ומספקים פתרונות מקצועיים גם במקומות עם גישה מאתגרת ובוץ כבד.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">כמה זמן לוקח לכם להגיע ליער הכרמל?</h3>
              <p>הצוות שלנו פועל בפריסה ארצית וזמינה, אנו שואפים להגעה מהירה תוך זמן קצר מרגע הקריאה, בהתאם לתנאי השטח.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם אתם קונים רכבים תקועים שאינם ניתנים לתיקון?</h3>
              <p>בהחלט. אנו מספקים גם שירותי <Link href="/areas/haifa-general/buying-cars-for-scrap-haifa-krayot" className="text-blue-600 font-bold">קניית רכבים לפירוק בחיפה והקריות</Link> במחיר הוגן ובתשלום במזומן במקום.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}