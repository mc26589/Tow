import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכב בצ'ק פוסט וכביש 22 | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעת בצ'ק פוסט או בכביש 22? שירותי גרירה מקצועיים ומהירים 24/7 לכל סוגי הרכבים. הגעה תוך 30 דקות. התקשרו עכשיו לחילוץ מהיר במחיר ללא תחרות!",
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
    "priceRange": "מחיר הוגן",
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
            שירותי גרירה וחילוץ מקצועיים במחלף צ'ק פוסט וכביש 22
          </h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעת בדרך? הצוות שלנו זמין 24/7 לחילוץ מהיר של רכבים פרטיים ומסחריים. הגעה מהירה באזור חיפה והקריות במחיר הוגן ושירות ללא פשרות.
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
        <h2 className="text-2xl font-bold mb-4">זקוק לגרירה באזור הצ'ק פוסט וכביש 22?</h2>
        <p className="mb-4">
          אם נתקעת באזור הצ'ק פוסט, אנו מציעים <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-600 underline">שירותי גרירה מהירים בכביש 22</Link> במחירים נוחים. אנו מספקים מענה מקצועי גם במקרים של <Link href="/areas/haifa-general/towing-after-accident-check-post-haifa" className="text-blue-600 underline">גרירה לאחר תאונה בצ'ק פוסט חיפה</Link> לכל סוגי הרכבים.
        </p>
        <p className="mb-4">
          במידה והרכב סובל מתקלה חשמלית או מצבר פרוק, אנו מציעים פתרון ייעודי של <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-600 underline">גרירת רכב חשמלי בכביש 22</Link>.
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה וחילוץ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">מה לעשות כשהרכב נתקע בכביש 22 או בצ'ק פוסט?</h3>
              <p>חשוב להפעיל אורות מהבהבים, להתרחק מהכביש ולעמוד במקום בטוח. לאחר מכן, התקשרו אלינו בהקדם. אנו מספקים מענה מהיר ופריסה רחבה בכל אזור חיפה והקריות.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם מספקים חילוץ לרכבים שנתקעו בבוץ?</h3>
              <p>כן, אנו מתמחים גם ב-<Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="text-blue-600 underline">חילוץ 4x4 מהבוץ באזור הכרמל</Link> ובדרכים לא סלולות.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">כיצד נקבע מחיר הגרירה?</h3>
              <p>המחיר נקבע לפי מרחק הגרירה, סוג הרכב ושעת הקריאה. אנו מתחייבים לשקיפות מלאה ולמחיר הוגן בהתאם למקובל בשוק הגרירה באזור חיפה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}