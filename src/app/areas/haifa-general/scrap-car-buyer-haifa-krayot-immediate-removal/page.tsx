import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מיידי ומזומן",
  description: "מוכרים רכב לפירוק בחיפה והקריות? אנו מציעים שירות פינוי רכבים מיידי, הצעת מחיר הוגנת במקום ושירות מקצועי 24/7. התקשרו עכשיו לקבלת הצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/scrap-car-buyer-haifa-krayot-immediate-removal"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פינוי וקניית רכבים לפירוק חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "Scrap Car Removal",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או תקול? אנו כאן בשבילכם 24/7 עם שירות מהיר, אמין ומקצועי.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות פינוי רכבים לפירוק בחיפה והקריות</h2>
        <p className="mb-4">אנו מתמחים בקניית רכבים לפירוק מכל הסוגים: רכבים פרטיים, מסחריים ורכבי שטח (4x4). אנו מציעים שירות פינוי מיידי ללא עלות, תוך מתן הצעת מחיר הוגנת במקום. אם הרכב שלכם תקוע באזור <Link href="/areas/haifa-general/buying-cars-for-scrap-check-post-haifa" className="text-blue-600 underline">צ'ק פוסט</Link> או <Link href="/areas/haifa-general/buy-cars-for-scrap-kiryat-yam-rothschild" className="text-blue-600 underline">קריית ים</Link>, אנו נגיע במהירות.</p>
        <p className="mb-4 font-semibold text-red-600">שים לב: איננו מספקים שירותי פינוי או קנייה לאופנועים.</p>
        <p>הצוות שלנו מכיר היטב את אזור חיפה והקריות ומבטיח הגעה מהירה לכל כתובת, תוך עמידה בלוחות זמנים קפדניים. אנו מספקים פתרונות גם למי שזקוק לשירותי גרירה דחופים, כגון <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600 underline">גרירה בצ'ק פוסט</Link> או חילוץ רכב תקוע.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על פירוק רכבים באזור חיפה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">האם אתם קונים כל סוג רכב לפירוק?</h3>
              <p>אנו קונים מגוון רחב של רכבים: רכבים שירדו מהכביש, רכבים עם תקלות מנוע, ורכבים ישנים. לצערנו, איננו עוסקים בפירוק אופנועים.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">תוך כמה זמן תגיעו לפנות את הרכב?</h3>
              <p>השירות שלנו באזור חיפה והקריות הוא מיידי. אנו מתחייבים ללוחות זמנים מהירים כדי לפנות את המטרד מהשטח שלכם בהקדם האפשרי.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">מה קורה אם הרכב שלי תקוע במקום מרוחק?</h3>
              <p>בין אם הרכב בבית או תקוע בדרך, אנו מנוסים בחילוץ וגרירה באזורים מורכבים. במידה ומדובר בתקלה ולא בפירוק, תוכלו לבדוק שירותים נוספים כגון <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-area" className="text-blue-600 underline">חילוץ רכב מהבוץ בכרמל</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}