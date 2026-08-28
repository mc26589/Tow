import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | מזומן במקום ושירות 24/7",
  description: "מעוניינים למכור רכב לפירוק בחיפה והקריות? אנו קונים רכבים מכל הסוגים במחיר הוגן, פינוי מהיר ושירות 24/7. הגעה לכל אזור הצפון. התקשרו עכשיו לקבלת הצעה!",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות – שירות מהיר ומחיר הוגן</h1>
          <p className="text-xl mb-8">תקועים עם רכב ישן? קונים רכבים לפירוק בפריסה ארצית מהירה. שירות אמין ומקצועי 24/7.</p>
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
        <p className="mb-4">אנו מתמחים בפינוי כל סוגי הרכבים: פרטיים, מסחריים ו-4x4. אם אתם מחפשים <Link href="/areas/haifa-general/scrap-car-removal-for-parts-kiryat-motzkin" className="text-blue-600 underline">פינוי רכבים לפירוק בקרית מוצקין</Link> או באזור הצ'ק פוסט, הגעתם למקום הנכון. אנו מספקים מענה מהיר גם למי שמחפש <Link href="/areas/haifa-general/cash-for-scrap-cars-kiryat-motzkin" className="text-blue-600 underline">קניית רכבים לפירוק במזומן בקרית מוצקין</Link>.</p>
        <p className="mb-4">זקוקים לפינוי דחוף עקב תאונה בכביש 22? אנו מבצעים גם <Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="text-blue-600 underline">גרירת רכבים לאחר תאונה בכביש 22</Link>. שימו לב: אנו לא עוסקים בפירוק אופנועים.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על פירוק רכבים</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">באילו אזורים אתם פועלים בחיפה והקריות?</h3>
              <p>אנו פרוסים בכל רחבי חיפה, הקריות, וכן בערים סמוכות. ניתן לתאם פינוי גם ב-<Link href="/areas/haifa-general/buy-cars-for-scrap-kiryat-yam-rothschild" className="text-blue-600 underline">קרית ים רחוב רוטשילד</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם רוכשים רכבים במצב גרוטאה?</h3>
              <p>בהחלט. אנו קונים רכבים ללא טסט, רכבים אחרי תאונה או כאלו שלא מניעים. השירות שלנו כולל הגעה עם גרר ופינוי מהיר ללא עלות נוספת.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">מה טווח המחירים לרכב לפירוק?</h3>
              <p>המחיר נקבע לפי סוג הרכב, השנה ומצבו המכני. אנו מתחייבים להצעת מחיר הוגנת ומשתלמת ביחס לשוק.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}