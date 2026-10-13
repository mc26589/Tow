import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מיידי ומזומן - שירות 24/7",
  description: "צריכים לפנות רכב ישן? קונה רכבים לפירוק בחיפה והקריות בפינוי מיידי ובמזומן. מחיר הוגן, הגעה מהירה ושירות מקצועי לכל סוגי הרכבים. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/scrap-car-buyer-haifa-krayot-immediate-removal"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פינוי רכבים לפירוק חיפה והקריות",
    "areaServed": ["Haifa", "Kiryat Ata", "Kiryat Bialik", "Kiryat Motzkin", "Kiryat Yam"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות – פינוי מיידי במזומן</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב ישן או מושבת? אנו קונים רכבים מכל סוג, מגיעים במהירות לחיפה, קריות והסביבה ומשלמים במקום.</p>
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
        <h2 className="text-3xl font-bold mb-6">שירות פינוי רכבים מקצועי באזור הצפון</h2>
        <p className="mb-4">
          אנו מתמחים בקניית רכבים לפירוק בחיפה והקריות. אם הרכב שלכם עומד ללא שימוש, עבר תאונה או שאינו עובר טסט, אנו נגיע עד אליכם. 
          למי שמחפש פתרונות דומים, ניתן להתרשם גם משירותי <Link href="/areas/haifa-general/car-scrapping-haifa-krayot" className="text-blue-600 underline">פירוק רכבים באזור חיפה והקריות</Link> או 
          מפתרונות ספציפיים כמו <Link href="/areas/haifa-general/cash-for-junk-cars-for-parts-kiryat-motzkin-immediate-pickup" className="text-blue-600 underline">קניית רכבים לפירוק בקרית מוצקין</Link>. 
          זקוקים לעזרה בדרכים? ראו גם <Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="text-blue-600 underline">גרירה לאחר תאונה בכביש 22</Link>.
        </p>
        <p className="font-semibold text-red-600">
          לתשומת לבכם: השירות מיועד לרכבים בעלי 4 גלגלים ומעלה בלבד. איננו מטפלים באופנועים.
        </p>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על פינוי רכבים לפירוק</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">האם אתם מפנים רכבים ללא טסט?</h3>
              <p>כן, אנו קונים רכבים ללא טסט, רכבים אחרי תאונות או רכבים שלא מניעים בכל אזור חיפה והקריות.</p>
            </div>
            <div>
              <h3 className="font-bold">מהו טווח המחירים לרכב לפירוק?</h3>
              <p>המחיר משתנה בהתאם לסוג הרכב, מצבו המכני ושנת הייצור. צרו קשר לקבלת הצעת מחיר הוגנת ומיידית.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם מספקים שירותי גרירה לרכבים תקינים?</h3>
              <p>כן, בנוסף לפירוק, אנו מציעים שירותי גרירה מגוונים, כולל <Link href="/areas/haifa-general/cheap-towing-kiryat-motzkin-fair-price" className="text-blue-600 underline">שירותי גרר זולים בקרית מוצקין</Link> וסביבתה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}