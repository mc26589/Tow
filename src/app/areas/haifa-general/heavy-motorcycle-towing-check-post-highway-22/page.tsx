import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכב בצ'ק פוסט וכביש 22 | הגעה תוך 30 דקות - 24/7",
  description: "נתקעת בצ'ק פוסט או בכביש 22? שירותי גרירה מקצועיים ומהירים 24/7 לכל סוגי הרכבים. מחיר הוגן ושירות מצוין. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-check-post-highway-22"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$",
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
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            שירותי גרירה וחילוץ באזור מחלף צ'ק פוסט וכביש 22
          </h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעת בדרך? הצוות שלנו זמין 24/7 לחילוץ מהיר של רכבים פרטיים ומסחריים. הגעה מהירה באזור חיפה והקריות במחיר הוגן.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition"
            >
              התקשר עכשיו לחילוץ רכב
            </a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה מקצועיים בחיפה והקריות</h2>
        <p className="mb-4">
          אם נתקעת באזור הצ'ק פוסט, אנו מציעים <Link href="/areas/haifa-general/towing-road-22-krayot-bypass" className="text-blue-600 underline">שירותי גרירה מהירים בכביש 22</Link> במחירים נוחים. אנו מספקים מענה מקצועי גם למי שמחפש <Link href="/areas/haifa-general/cheap-towing-services-check-post" className="text-blue-600 underline">שירותי גרירה זולים בצ'ק פוסט</Link> ללא פשרה על האיכות.
        </p>
        <p className="mb-4">
          במידה והרכב ישן או מושבת, אנו ממליצים על <Link href="/areas/haifa-general/car-scrapping-haifa-krayot-immediate-removal" className="text-blue-600 underline">פינוי רכבים מהיר בחיפה והקריות</Link> או <Link href="/areas/haifa-general/cash-for-junk-cars-check-post-haifa" className="text-blue-600 underline">קניית רכבים לפירוק בצ'ק פוסט</Link>. אנו כאן לכל תקלה בדרכים.
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה וחילוץ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">מה לעשות כשהרכב נתקע בכביש 22 או בצ'ק פוסט?</h3>
              <p>חשוב להפעיל אורות מהבהבים, להתרחק מהכביש ולהתקשר אלינו בהקדם. אנו מספקים מענה מהיר לכל סוגי הרכבים הפרטיים והמסחריים באזור.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם מבצעים חילוצי שטח בקרבת חיפה?</h3>
              <p>כן, אנו מספקים שירותי <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-region" className="text-blue-600 underline">חילוץ רכב תקוע בבוץ באזור הכרמל</Link> וסביבתה, כולל טיפול ברכבי 4x4.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">מהו טווח המחירים לגרירה באזור הצ'ק פוסט?</h3>
              <p>המחיר נקבע לפי מרחק הגרירה וסוג הרכב. אנו מקפידים על שקיפות מלאה ומחיר הוגן ללא הפתעות, וזמינים 24/7 לכל קריאה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}