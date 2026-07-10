import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ משאיות ורכבים מסחריים בקרית מוצקין - שירות 24/7 מהיר",
  description: "נתקעתם עם רכב מסחרי או משאית בקרית מוצקין? חילוץ מקצועי ומהיר 24/7 במחיר הוגן. הגעה מהירה לכל קריאה. התקשרו עכשיו לשירות מומחים!",
  alternates: {
    canonical: "/areas/haifa-general/commercial-truck-accident-recovery-kiryat-motzkin-24-7",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ משאיות קרית מוצקין",
    "areaServed": "קרית מוצקין",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8356",
      "longitude": "35.0731"
    },
    "priceRange": "$$, $$$$",
    "serviceType": "Commercial Truck Accident Recovery and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכבים מסחריים ומשאיות בקרית מוצקין – שירות 24/7</h1>
          <p className="text-xl mb-8 max-w-2xl">
            אנו מתמחים בחילוץ מקצועי של רכבים מסחריים, משאיות קלות ורכבי 4x4 לאחר תאונות או תקלות מורכבות בקרית מוצקין. השירות זמין 24/7. לצרכי גרירה נוספים באזור, אנו ממליצים על <Link href="/areas/haifa-general/emergency-light-truck-towing-route-22-krayot-bypass" className="underline">חילוץ משאיות קלות בכביש 22</Link>.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="קרית מוצקין" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לשירות
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ רכב מסחרי?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות מלאה 24/7 לכל קריאה בקרית מוצקין.</li>
            <li>✓ ציוד חילוץ כבד המותאם למשאיות ורכבים מסחריים.</li>
            <li>✓ צוות מקצועי המיומן בטיפול בתאונות דרכים מורכבות.</li>
            <li>✓ מחירים הוגנים ושירות ללא הפתעות.</li>
          </ul>
          <p>זקוקים לשירותים ספציפיים? עיינו גם ב-<Link href="/areas/haifa-general/heavy-duty-truck-towing-kiryat-haim-industrial-zone" className="underline text-blue-400">גרירת משאיות כבדות באזור התעשייה קרית חיים</Link> או <Link href="/areas/haifa-general/commercial-van-accident-recovery-check-post-junction-haifa" className="underline text-blue-400">חילוץ ואן מסחרי בצומת הצ'ק פוסט</Link>.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ רכבים מסחריים בקריות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">האם אתם מספקים חילוץ למשאיות תקועות בשטח?</h3>
              <p>כן, אנו נותנים מענה לחילוצי שטח ומשאיות. במידה ומדובר ברכב פרטי שנתקע בדרכי עפר, ניתן להסתייע ב-<Link href="/areas/haifa-general/car-extraction-from-mud-carmel-reserve-haifa" className="underline text-blue-600">חילוץ רכבים מבוץ באזור הכרמל</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">מה עושים עם רכב מסחרי ישן שלא ראוי לנסיעה?</h3>
              <p>אנו מציעים שירות פינוי מקצועי. לבעלי רכבים ישנים, אנו מספקים פתרונות של <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal" className="underline text-blue-600">קניית רכבים לפירוק באזור חיפה והקריות</Link> עם פינוי מיידי.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם יש לכם שירותים מוזלים באזור צומת הצ'ק פוסט?</h3>
              <p>בהחלט, אנו מציעים שירותי <Link href="/areas/haifa-general/cheap-towing-check-post-kiryat-ata" className="underline text-blue-600">גרירה זולה בצ'ק פוסט וקרית אתא</Link> לכל סוגי הרכבים הקלים והמסחריים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}