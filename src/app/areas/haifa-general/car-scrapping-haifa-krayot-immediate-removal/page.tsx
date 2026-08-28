import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מיידי | מחיר הוגן",
  description: "צריכים לפנות רכב לפירוק בחיפה והקריות? אנו מציעים קניית רכבים לפירוק במזומן, פינוי מיידי מהשטח ושירות מהיר. התקשרו עכשיו לקבלת הצעה משתלמת!",
  alternates: {
    canonical: "/areas/haifa-general/car-scrapping-haifa-krayot-immediate-removal",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פינוי וקניית רכבים לפירוק",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday", "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "Car Scrapping and Removal",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            אנו מציעים שירות מקצועי ומהיר לקניית רכבים לפירוק בחיפה והקריות. אם הרכב שלכם אינו נוסע, עבר תאונה או שפשוט הגיע הזמן להיפרד ממנו - אנו כאן עבורכם. אנו מפנים רכבים פרטיים, מסחריים ורכבי שטח (4x4) באופן מיידי. 
            חשוב לציין: השירות אינו כולל אופנועים.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ פינוי מיידי מהשטח בחיפה, קרית אתא, קרית ביאליק, קרית מוצקין וקרית ים.</li>
            <li>✓ הצעת מחיר הוגנת ומקצועית בטלפון.</li>
            <li>✓ טיפול מלא בכל סוגי הרכבים (פרטי, מסחרי, 4x4).</li>
            <li>✓ שירות אמין, מהיר וללא עיכובים מיותרים.</li>
          </ul>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-bold mb-4">שירותים נוספים באזורנו:</h3>
            <ul className="flex flex-wrap gap-3">
                <li><Link href="/areas/haifa-general/scrap-car-removal-for-parts-kiryat-motzkin" className="text-blue-600 underline">פירוק רכבים בקרית מוצקין</Link></li>
                <li><Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-600 underline">גרירת רכבים בצומת צ'ק פוסט</Link></li>
                <li><Link href="/areas/haifa-general/buy-cars-for-scrap-kiryat-yam-rothschild" className="text-blue-600 underline">קניית רכבים לפירוק בקרית ים</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על פינוי רכבים לפירוק</h2>
          <div className="space-y-6">
            <div>
                <h4 className="font-bold text-xl">כמה זמן לוקח פינוי רכב לפירוק?</h4>
                <p>אנו מציעים שירות פינוי מהיר במיוחד בכל אזור חיפה והקריות, לרוב תוך מספר שעות מהרגע שבו סגרנו את העסקה.</p>
            </div>
            <div>
                <h4 className="font-bold text-xl">האם אתם קונים כל רכב?</h4>
                <p>אנחנו רוכשים מגוון רחב של רכבים למטרות פירוק, החל מרכבים לאחר תאונה ועד רכבים ישנים שאינם עוברים טסט (למעט אופנועים).</p>
            </div>
            <div>
                <h4 className="font-bold text-xl">כיצד נקבע המחיר?</h4>
                <p>המחיר נקבע בהתאם למצב הרכב, הדגם והיכולת שלנו להפיק ממנו חלפים. אנו מקפידים על הצעת מחיר הוגנת ומשתלמת ללקוח.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}