import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";

const BUSINESS_INFO_PLACEHOLDER = { phone: "0501234567", email: "info@example.com", address: "חיפה והקריות" };

export const metadata: Metadata = {
  title: "גרר לרכב שטח בקרית מוצקין | מחיר זול, הגעה מהירה 24/7",
  description: "נתקעתם עם רכב השטח בקרית מוצקין? גרר מקצועי וזול זמין עבורכם 24/7. הגעה מהירה לכל הקריות, ציוד גרירה מתקדם לכל סוגי הרכבים. התקשרו עכשיו!",
  alternates: { canonical: "https://yourdomain.com/areas/haifa-general/cheap-off-road-vehicle-towing-kiryat-motzkin" },
};

export default function Page() {
  const currentBusinessInfo = typeof BUSINESS_INFO !== 'undefined' ? BUSINESS_INFO : BUSINESS_INFO_PLACEHOLDER;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה 24/7 בקריות ובחיפה",
    "telephone": `+${currentBusinessInfo.phone}`,
    "areaServed": [{ "@type": "Place", "name": "קרית מוצקין" }, { "@type": "Place", "name": "הקריות" }, { "@type": "Place", "name": "חיפה" }],
    "serviceType": "גרירת רכבי שטח ורכבים פרטיים",
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" }
  };

  return (
    <>
      <Script id="json-ld-auto-towing" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">גרר זול לרכב שטח בקרית מוצקין – שירות 24/7</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">זקוקים לחילוץ? אנו מספקים שירותי גרירה מקצועיים לרכבי שטח באזור קרית מוצקין. נתקעתם בדרכים? אנו כאן לעזור.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${currentBusinessInfo.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full">התקשרו עכשיו: {currentBusinessInfo.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">למה לבחור בנו בקרית מוצקין?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">זמינות 24/7</h3>
              <p>גם אם אתם צריכים <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-300 underline">גרירת חירום בכביש 22</Link>, אנחנו כאן עבורכם.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">ניסיון בשטח</h3>
              <p>מתמחים ב-<Link href="/areas/haifa-general/car-stuck-in-mud-rescue-carmel-forest-haifa" className="text-blue-300 underline">חילוץ רכבים שנתקעו בבוץ</Link> ובדרכים משובשות.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-950 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div><h3 className="font-bold">מהו טווח המחירים לגרירת רכב שטח?</h3><p>המחיר הוגן ומשתנה בהתאם למרחק ולמורכבות החילוץ. נשמח לתת הצעת מחיר בטלפון.</p></div>
            <div><h3 className="font-bold">האם אתם גוררים אופנועים?</h3><p>לא, איננו מספקים שירותי גרירה לאופנועים, אך נשמח לסייע בגרירת רכבים ורכבי שטח.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}