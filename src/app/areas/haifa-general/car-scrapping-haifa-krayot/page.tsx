import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות - הגעה מהירה ומחיר הוגן",
  description: "צריכים לפנות רכב ישן? קונה רכבים לפירוק בחיפה והקריות במחיר הוגן! שירות 24/7, הגעה מהירה לכל אזורי הצפון. התקשרו עכשיו לקבלת הצעה משתלמת!",
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
    "priceRange": "$",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות – שירות מהיר ומקצועי</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או תקול? אנו כאן בשבילכם 24/7.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות קניית רכבים לפירוק באזור הצפון</h2>
        <p className="mb-4">אנו מתמחים בפינוי רכבים מכל סוג: רכבים פרטיים, מסחריים ורכבי 4x4. השירות שלנו זמין באזור הצפון, כולל <Link href="/areas/haifa-general/buying-cars-for-scrap-check-post-haifa" className="text-blue-600 underline">קניית רכבים לפירוק בצ'ק פוסט</Link> ובאזור <Link href="/areas/haifa-general/buying-cars-for-scrap-ahoza-haifa" className="text-blue-600 underline">קניית רכבים לפירוק באחוזה</Link>. חשוב להדגיש: אנו לא מטפלים באופנועים.</p>
        <p>השירות כולל הגעה מהירה לבית הלקוח, פינוי הרכב ומתן הצעת מחיר הוגנת במקום. אם הרכב זקוק לגרירה מהירה, ניתן להיעזר בשירותינו גם ב-<Link href="/areas/haifa-general/towing-service-road-22-krayot" className="text-blue-600 underline">כביש 22</Link>.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על פירוק רכבים בחיפה</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">האם אתם קונים רכבים ללא טסט?</h3>
              <p>כן, אנו קונים רכבים בכל מצב, גם כאלו שאינם מניעים או ללא טסט.</p>
            </div>
            <div>
              <h3 className="font-bold">מהו אזור הפעילות שלכם?</h3>
              <p>אנו פרוסים בכל אזור חיפה, הקריות, וכן בערים סמוכות כמו קרית ים וקרית ביאליק.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם מפנים גם גרוטאות רכב?</h3>
              <p>בהחלט, אנו מספקים שירותי <Link href="/areas/haifa-general/junk-car-removal-kiryat-yam-immediate-pickup" className="text-blue-600 underline">פינוי גרוטאות רכב בקרית ים</Link> באופן מיידי.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}