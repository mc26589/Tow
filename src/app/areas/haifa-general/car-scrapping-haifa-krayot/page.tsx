import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | מזומן במקום | שירות 24/7",
  description: "רוצים למכור רכב לפירוק בחיפה והקריות? אנו קונים רכבים מכל הסוגים במחיר הוגן, פינוי מהיר והגעה לכל אזור הצפון. התקשרו עכשיו לקבלת הצעה משתלמת!",
  alternates: {
    canonical: "/areas/haifa-general/car-scrapping-haifa-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$$,$",
    "serviceType": "Car Scrapping and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות – שירות מהיר ומזומן במקום</h1>
          <p className="text-xl mb-8">תקועים עם רכב ישן או מושבת? אנו מבצעים קניית רכבים לפירוק בפריסה ארצית מהירה. שירות אמין, מקצועי וזמין 24/7.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">מומחים בפינוי וקניית רכבים לפירוק באזור הצפון</h2>
        <p className="mb-4">אנו מתמחים בפינוי כל סוגי הרכבים: פרטיים, מסחריים ורכבי שטח. אם אתם זקוקים לשירות של <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal" className="text-blue-600 underline">קניית רכבים לפירוק בחיפה והקריות עם פינוי מיידי</Link>, הגעתם למקום הנכון. אנו מספקים מענה מהיר גם במקרים של תקלות טכניות מורכבות, כולל <Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="text-blue-600 underline">גרירת רכבים על גרר בצירי התנועה המרכזיים</Link> כגון כביש 22.</p>
        <p className="mb-4">זקוקים לפינוי רכב לאחר תאונה או גרירה דחופה? צוות המומחים שלנו זמין עבורכם. שימו לב: אנו מבצעים פינוי וגרירה של רכבים ורכבים מסחריים בלבד, ולא עוסקים בגרירה או פינוי של אופנועים.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על פירוק רכבים בחיפה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">באילו אזורים אתם פועלים בחיפה והקריות?</h3>
              <p>אנו פרוסים בכל רחבי הצפון, כולל מתן שירותי <Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="text-blue-600 underline">גרירה זולה בצומת הצ'ק פוסט</Link> ושירותי גרירה מקצועיים באזור הקריות.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם רוכשים רכבים ללא טסט?</h3>
              <p>בהחלט. אנו קונים רכבים ללא טסט, רכבים אחרי תאונה או כאלו שלא מניעים. השירות שלנו כולל הגעה עם גרר ופינוי מהיר ללא עלות נוספת.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">מה טווח המחירים לרכב לפירוק?</h3>
              <p>המחיר נקבע לפי סוג הרכב, השנה ומצבו המכני. אנו מתחייבים להצעת מחיר הוגנת ומשתלמת עבור כל רכב, מתוך מטרה לתת לכם את השירות הטוב ביותר באזור.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}