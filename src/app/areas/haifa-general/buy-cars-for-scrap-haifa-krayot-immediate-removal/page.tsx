import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מיידי ותשלום במזומן",
  description: "צריכים לפנות רכב ישן או תקול? אנו קונים רכבים לפירוק בחיפה והקריות עם פינוי מיידי מהשטח. מחיר הוגן ותשלום במקום. התקשרו עכשיו לקבלת הצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פינוי וקניית רכבים לפירוק בחיפה",
    "areaServed": ["Haifa", "Krayot"],
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
    "priceRange": "$",
    "serviceType": "Car Scrap Removal"
  };

  return (
    <main className="bg-neutral-950 min-h-screen text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב ישן? אנו מספקים שירותי פינוי מקצועיים וקניית רכבים לפירוק לתושבי הצפון. זמינות 24/7.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
          <p className="mb-4">אנו מציעים פתרון כולל לכל סוגי הרכבים. אם אתם מחפשים <Link href="/areas/haifa-general/buying-old-cars-parts-kiryat-haim-krayot" className="text-blue-400 underline">פירוק רכבים בקרית חיים</Link> או בכל אזור אחר בקריות, אנחנו הכתובת. אנו מבצעים פינוי מהיר, מסודר והוגן.</p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>פינוי מיידי מהשטח</li>
            <li>תשלום הוגן במקום</li>
            <li>טיפול בכל סוגי הרכבים הפרטיים, המסחריים ורכבי 4x4</li>
            <li>זמינות מלאה 24/7</li>
          </ul>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">שאלות נפוצות</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold">באילו אזורים אתם פועלים?</h4>
              <p className="text-neutral-300">אנו פועלים בכל אזור חיפה, הקריות, וכן מספקים שירותי חילוץ נוספים כמו <Link href="/areas/haifa-general/cheap-towing-check-post-junction" className="text-blue-400 underline">גרירה בצומת צ'ק פוסט</Link>.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם קונים כל סוג רכב?</h4>
              <p className="text-neutral-300">אנו קונים את רוב סוגי הרכבים למעט אופנועים. אם הרכב תקוע בשטח, נוכל לסייע גם בחילוץ, בדומה לשירותי <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-region" className="text-blue-400 underline">חילוץ רכב תקוע בבוץ</Link> באזור הכרמל.</p>
            </div>
          </div>

          <p className="text-sm text-neutral-400 italic mt-12">
            *הערה: השירות אינו כולל פינוי או טיפול באופנועים או דו-גלגליים מכל סוג.
          </p>
        </div>
      </section>
    </main>
  );
}