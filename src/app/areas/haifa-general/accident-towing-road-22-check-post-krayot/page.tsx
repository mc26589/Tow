import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";

export const metadata: Metadata = {
  title: "גרר תאונה כביש 22 וצ'ק פוסט | הגעה מהירה 24/7 - מחיר הוגן",
  description: "נתקעתם בכביש 22 או בצ'ק פוסט לאחר תאונה? שירות גרירה מקצועי זמין 24/7. הגעה מהירה, מחיר הוגן ושירות אמין. התקשרו עכשיו לחילוץ המהיר ביותר באזור!",
  alternates: {
    canonical: "/areas/haifa-general/accident-towing-road-22-check-post-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "35.0350" },
    "priceRange": "$$, שירות במחיר הוגן",
    "serviceType": "Accident Towing and Roadside Assistance"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר תאונה כביש 22 וצ'ק פוסט – חילוץ מהיר 24/7</h1>
          <p className="text-xl mb-8">תקועים לאחר תאונה בכביש 22 או צומת צ'ק פוסט? צוות הגרר המקצועי שלנו בדרך אליכם עם מחיר הוגן ושירות מהיר.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition">
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה וחילוץ מקצועיים לאחר תאונה</h2>
        <p className="mb-4">
          אנו מתמחים בפינוי רכבים לאחר תאונות באזור כביש עוקף קריות (כביש 22) וצומת צ'ק פוסט. בין אם מדובר בתאונה קלה או חמורה, אנו מציעים <Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="text-blue-400 underline">שירותי גרירה דחופים בכביש 22</Link> ובצמתים המרכזיים. זקוקים לפתרון משלים? אנו מספקים גם <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-400 underline">גרירת חירום בצ'ק פוסט ובחיפה</Link> במחיר הוגן.
          במידה והרכב ניזוק קשות, ניתן לפנות אלינו גם לבירור לגבי <Link href="/areas/haifa-general/buy-cars-for-scrap-check-post-haifa" className="text-blue-400 underline">פינוי רכבים לפירוק בצ'ק פוסט</Link>.
        </p>
        
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 my-8">
          <h3 className="text-2xl font-semibold mb-4">למה לבחור בנו?</h3>
          <ul className="list-disc pr-5 space-y-2">
            <li>זמינות מלאה 24/7 לכל אזור חיפה והקריות.</li>
            <li>מומחיות בפינוי מהיר מצירים מהירים כגון כביש 22.</li>
            <li>שקיפות מלאה ומחיר הוגן ללא הפתעות.</li>
            <li>טיפול מקצועי ברכבים פרטיים ומסחריים (איננו גוררים אופנועים).</li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על גרירה בציר 22 וצ'ק פוסט</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg">כמה זמן לוקח לגרר להגיע לצ'ק פוסט?</h4>
              <p>הצוות שלנו מכיר היטב את צירי התנועה באזור חיפה והקריות. אנו משתדלים להגיע לכל קריאה ב<Link href="/areas/haifa-general/fast-towing-flat-tire-road-22-check-post" className="text-blue-400 underline">גרירת רכב בכביש 22</Link> בזמן המהיר ביותר האפשרי.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">האם אתם מציעים שירות גרירה זול באזור?</h4>
              <p>בהחלט. אנו מציעים <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-400 underline">שירותי גרירה משתלמים בצ'ק פוסט ובקריות</Link>, תוך דגש על איכות עבודה גבוהה.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">מה עושים אם הרכב מושבת לחלוטין לאחר התאונה?</h4>
              <p>אם הרכב לא ניתן לתיקון, אנו מציעים שירות של <Link href="/areas/haifa-general/car-scrapping-haifa-krayot" className="text-blue-400 underline">פירוק רכבים באזור חיפה והקריות</Link> עם פינוי מהיר מהשטח.</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}