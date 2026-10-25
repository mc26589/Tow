import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב בצ'ק פוסט חיפה 24/7 | מחיר הוגן והגעה תוך 30 דקות",
  description: "נתקעתם בצומת צ'ק פוסט? גרר זמין 24/7 לכל סוגי הרכבים. שירות מהיר, מחיר הוגן ללא הפתעות והגעה מהירה לשטח. התקשרו עכשיו להגעה מיידית!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חירום חיפה והקריות",
    "description": "שירותי גרירת רכב חירום מהירים בצומת צ'ק פוסט חיפה והסביבה. זמינות 24/7 במחירים נוחים.",
    "url": `https://www.yourdomain.com/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa`,
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$$",
    "areaServed": {
      "@type": "Place",
      "name": "חיפה והקריות",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.795,
        "longitude": 35.015
      }
    }
  };

  return (
    <>
      <Script
        id="json-ld-auto-towing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            גרירת רכב חירום בצומת צ'ק פוסט חיפה – זמינות 24/7
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            נתקעתם עם הרכב באזור התעשייה צ'ק פוסט? הצוות שלנו זמין עבורכם מסביב לשעון עם ציוד חדיש למתן פתרון מהיר במחיר הוגן ללא הפתעות בחיוב.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300 font-semibold py-3 px-8 rounded-full shadow-lg text-lg"
            >
              התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">למה לבחור בנו לגרירה בצ'ק פוסט?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">מענה מהיר לצ'ק פוסט</h3>
              <p>אנחנו מכירים כל עומס תנועה באזור. למידע על נתיבי גישה דחופים, ניתן להיעזר בשירות <Link href="/areas/haifa-general/towing-services-road-22-krayot-bypass" className="underline text-blue-400">גרירה בכביש 22 עוקף קריות</Link>.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">גרירת רכבים מסחריים</h3>
              <p>אנו מטפלים בכל סוגי הרכבים הפרטיים והמסחריים הקלים. לבעלי עסקים שנתקעו, ראו <Link href="/areas/haifa-general/urgent-towing-commercial-van-check-post-route-22" className="underline text-blue-400">גרירה דחופה לרכב מסחרי</Link>.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">פינוי רכבים לגריטה</h3>
              <p>הרכב שבק חיים ולא שווה לתקן? אנו מבצעים פינוי מהיר במחיר הוגן, בדומה לשירות <Link href="/areas/haifa-general/towing-for-scrap-kiryat-bialik" className="underline text-blue-400">גרירה לפירוק בקרית ביאליק</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות על גרירת רכב בצ'ק פוסט</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">האם אתם מגיעים לכל אזור התעשייה?</h3>
              <p>כן, אנו נותנים מענה מלא לכל אזור צ'ק פוסט, לרבות הצמתים הסמוכים והחיבורים המהירים.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם ניתן להזמין גרירה בשעות הלילה?</h3>
              <p>בהחלט. אנו פעילים 24 שעות ביממה, כולל בסוף השבוע ובחגים, כדי להבטיח שלא תישארו תקועים בכביש.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">איך נקבע מחיר הגרירה?</h3>
              <p>התמחור מבוסס על מרחק הגרירה המדויק וסוג הרכב. אנו מקפידים על שקיפות מלאה ומחיר הוגן לפני יציאת הגרר.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}