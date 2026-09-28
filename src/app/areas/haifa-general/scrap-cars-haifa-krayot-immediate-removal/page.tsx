import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קניית רכבים לפירוק בחיפה והקריות | פינוי מיידי ומזומן 24/7",
  description: "מוכרים רכב ישן או תקול? קניית רכבים לפירוק בחיפה והקריות עם פינוי מיידי, תשלום במזומן ומחיר הוגן. שירות מהיר ואמין 24/7 - התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/scrap-cars-haifa-krayot-immediate-removal"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירות קניית רכבים לפירוק בחיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$,$",
    "serviceType": "Scrap Car Removal",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "34.9896"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קניית רכבים לפירוק בחיפה והקריות - פינוי מיידי ותשלום הוגן</h1>
          <p className="text-xl mb-8">צריכים להיפטר מרכב ישן, מושבת או רכב לאחר תאונה? אנו מספקים שירותי פינוי מהירים ומקצועיים בכל אזור חיפה והקריות בכל שעה.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי רכבים לפירוק?</h2>
        <p className="mb-4">אנו מתמחים בפינוי רכבים מכל הסוגים: רכבים פרטיים, רכבים מסחריים ורכבי 4x4. אם נתקעתם בדרכים או שהרכב שלכם מושבת, אנו מציעים מענה מהיר. ניתן להיעזר בשירותינו גם למקרים כמו <Link href="/areas/haifa-general/towing-stuck-car-road-22-krayot" className="text-blue-600 underline">גרירת רכב בכביש 22</Link>, <Link href="/areas/haifa-general/emergency-car-recovery-ditch-route-4-check-post" className="text-blue-600 underline">חילוץ רכב מתעלה בכביש 4</Link> או <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600 underline">גרירת רכב תקוע באזור הצ׳ק פוסט</Link>.</p>
        <p className="mb-4 font-semibold text-red-600">שימו לב: איננו מספקים שירותי גרירה או פינוי לאופנועים מכל סוג שהוא.</p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות בנושא קניית רכבים לפירוק</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">האם אתם פעילים גם בקריות הספציפיות?</h3>
              <p>כן, אנו נותנים שירות מלא בכל אזור חיפה והקריות, לרבות שירותים ספציפיים כמו <Link href="/areas/haifa-general/scrap-car-removal-for-parts-kiryat-motzkin" className="text-blue-600">פינוי רכב לפירוק בקרית מוצקין</Link>, <Link href="/areas/haifa-general/buy-cars-for-scrap-kiryat-yam-rothschild" className="text-blue-600">קניית רכבים לפירוק בקרית ים</Link> ו-<Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="text-blue-600">גרירה וחילוץ בקרית ביאליק</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">איך מתבצע התשלום על הרכב?</h3>
              <p>התשלום על הרכב מתבצע במזומן במעמד הפינוי לאחר הערכת מצב הרכב והחלקים שניתן להפיק ממנו.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">האם אתם מטפלים בחילוצי שטח בחיפה?</h3>
              <p>בנוסף לפירוק רכבים, אנו מספקים שירותי חילוץ מקצועיים כמו <Link href="/areas/haifa-general/mud-rescue-4x4-stuck-carmel-forest-haifa-university" className="text-blue-600">חילוץ רכבי 4x4 שנתקעו בבוץ</Link> באזור הכרמל והאוניברסיטה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}