import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מיידי ומזומן - שירות 24/7",
  description: "נתקעתם עם רכב ישן? קונה רכבים לפירוק בחיפה והקריות במחיר הוגן. פינוי מהיר מהשטח, ללא כאב ראש ובמזומן. התקשרו עכשיו להצעת מחיר משתלמת!",
  alternates: {
    canonical: "/areas/haifa-general/scrap-cars-haifa-krayot-immediate-removal",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירות פינוי וקניית רכבים לפירוק חיפה והקריות",
    "areaServed": ["Haifa", "Krayot", "Kiryat Bialik", "Kiryat Yam", "Kiryat Motzkin"],
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
    "priceRange": "$$, $$$, $$$$",
    "serviceType": "Scrap Car Removal and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות - פינוי מהיר מהיום להיום</h1>
          <p className="text-xl mb-8">נמאס לכם מהרכב הישן שתופס מקום? אנו קונים רכבים לפירוק בחיפה והקריות במחיר הוגן. פינוי מקצועי, ללא עיכובים ובמזומן.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות פינוי וגרירת רכבים לפירוק באזור חיפה</h2>
        <p className="mb-4">אנו מציעים פתרון כולל לרכבים מושבתים, רכבים שעברו תאונה או רכבים שעמדו שנים ללא תנועה. אנו מספקים שירותים משלימים באזור, כגון <Link href="/areas/haifa-general/car-scrapping-neve-shaanan-haifa" className="text-blue-600 underline">פירוק רכבים בשכונת נווה שאנן בחיפה</Link> ושירותי <Link href="/areas/haifa-general/cash-for-scrap-cars-bat-galim-haifa" className="text-blue-600 underline">קניית רכבים לפירוק בבת גלים</Link>. חשוב להדגיש: איננו מטפלים באופנועים.</p>
        <p>אם הרכב נתקע בדרכים, ניתן להסתייע בשירותינו גם ב-<Link href="/areas/haifa-general/car-scrapping-old-industrial-zone-kiryat-bialik" className="text-blue-600 underline">פירוק רכבים באזור התעשייה הישן בקריית ביאליק</Link> או לבצע <Link href="/areas/haifa-general/junk-car-removal-kiryat-yam-immediate-pickup" className="text-blue-600 underline">פינוי רכבים לפירוק בקריית ים</Link> במהירות וביעילות.</p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">האם אתם מגיעים לכל שכונה בחיפה?</h3>
              <p>כן, אנו מבצעים גרירה ופינוי בכל אזור חיפה, כולל שכונות הכרמל, העיר התחתית והקריות, תוך שמירה על זמינות גבוהה.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">מה קורה עם ניירת הרכב?</h3>
              <p>אנו מסייעים בכל התהליך הבירוקרטי מול משרד התחבורה כדי להבטיח שהרכב ייגרע מהרישום כחוק, ללא שום כאב ראש עבורכם.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">איך קובעים מחיר לרכב לפירוק?</h3>
              <p>המחיר נקבע לפי מצב הרכב, שנתון וסוג הרכב. אנו מתחייבים להצעת מחיר הוגנת ומשתלמת מול השוק הנוכחי.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}