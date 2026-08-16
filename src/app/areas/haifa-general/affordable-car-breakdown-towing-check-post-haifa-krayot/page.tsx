import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירה בצ'ק פוסט חיפה והקריות | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בצומת צ'ק פוסט? שירותי גרירה וחילוץ רכב בחיפה והקריות במחיר הוגן. זמינות 24/7, מענה מהיר ומקצועי לכל סוגי הרכבים. התקשרו עכשיו לקבלת שירות!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בצ'ק פוסט חיפה והקריות",
    "areaServed": ["Haifa", "Krayot", "Check Post"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "35.0230"
    },
    "priceRange": "$$,$",
    "serviceType": "Car Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            שירותי גרירה וחילוץ רכב בצומת צ'ק פוסט, חיפה והקריות - 24/7
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            נתקעתם עם הרכב? אנו זמינים עבורכם באזור הצ'ק פוסט, חיפה והקריות. מציעים פתרונות מהירים, ממקצועיים ועד <Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="underline font-semibold">שירותי גרירה זולים בצומת צ'ק פוסט</Link> לכל רכב פרטי או מסחרי. חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו להזמנת גרר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">למה לבחור בשירותי הגרירה שלנו?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">זמינות מלאה 24/7</h3>
              <p>שירותי <Link href="/areas/haifa-general/emergency-towing-road-22-krayot" className="text-blue-400">חילוץ דחוף בכביש 22 בקריות</Link> ובכל אזור חיפה והצפון, בכל שעה.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">מחיר הוגן ושקיפות</h3>
              <p>מחירים ללא הפתעות. אנו מציעים שירות מותאם לתושבי האזור עם דגש על איכות ומקצועיות.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">פתרונות מתקדמים</h3>
              <p>זקוקים לעזרה בדרכים? אנו מציעים גם <Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="text-blue-400">שירותי גרירה בקרית ביאליק</Link> במחיר משתלם במיוחד.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות (FAQ)</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h3 className="font-bold text-xl">האם אתם מגיעים לכל אזור הצ'ק פוסט?</h3>
            <p>כן, אנו פועלים בפריסה רחבה בחיפה, צומת צ'ק פוסט, הקריות וצירי התנועה המרכזיים כמו כביש 22.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">מה לעשות אם נתקעתי עם רכב ישן?</h3>
            <p>בנוסף לגרירה, אנו מציעים שירות <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-towing-included" className="text-blue-600 font-medium">קניית רכבים לפירוק בחיפה והקריות כולל גרירה</Link>. פנו אלינו לקבלת הצעת מחיר.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">האם אתם מבצעים חילוץ רכבי שטח?</h3>
            <p>כן, אנו מספקים גם <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="text-blue-600 font-medium">חילוץ שטח 4x4 ביערות הכרמל</Link> במקרה הצורך.</p>
          </div>
        </div>
      </section>
    </main>
  );
}