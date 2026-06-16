import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ משאיות ורכבים מסחריים בקרית מוצקין 24/7 | שירות מהיר",
  description: "זקוקים לחילוץ רכב מסחרי או משאית בקרית מוצקין? שירות גרירה 24/7, צוות מיומן ומחירים הוגנים. הגעה מהירה לכל קריאה - התקשרו עכשיו!",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכבים מסחריים ומשאיות בקרית מוצקין – שירות גרירה 24/7</h1>
          <p className="text-xl mb-8 max-w-2xl">
            אנו מתמחים בחילוץ מקצועי של רכבים מסחריים, משאיות קלות ורכבי 4x4 לאחר תאונות או תקלות מורכבות בקרית מוצקין והסביבה. השירות זמין 24 שעות ביממה, 7 ימים בשבוע. חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים, אך נשמח לסייע במקרי חירום אחרים כמו <Link href="/areas/haifa-general/affordable-car-towing-kiryat-motzkin-24-7" className="underline">גרירה רגילה בקרית מוצקין</Link>.
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
            <li>✓ ציוד חילוץ מתקדם המותאם למשאיות ורכבים מסחריים.</li>
            <li>✓ צוות מיומן ומנוסה בטיפול בתאונות דרכים.</li>
            <li>✓ מחירים הוגנים ושקיפות מלאה מול הלקוח.</li>
          </ul>
          <p>זקוקים לשירותי גרירה נוספים באזור? עיינו במידע על <Link href="/areas/haifa-general/accident-towing-road-22-check-post-krayot" className="underline text-blue-400">חילוץ מתאונות בכביש 22</Link> או <Link href="/areas/haifa-general/emergency-towing-road-22-kiryat-ata-interchange" className="underline text-blue-400">גרירה דחופה במחלף קרית אתא</Link>.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ רכבים מסחריים</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">האם אתם מבצעים חילוץ של רכבים תקועים בדרכים עפר?</h3>
              <p>כן, אנו נותנים מענה לחילוצי שטח ורכבים מסחריים תקועים. במקרים של רכבים קלים בבוץ, מומלץ לבדוק גם את שירותי <Link href="/areas/haifa-general/emergency-mud-rescue-carmel-forest-haifa" className="underline text-blue-600">חילוץ בוץ בכרמל</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם השירות כולל פינוי רכבים לאחר תאונה?</h3>
              <p>בהחלט. אנו ערוכים לטפל בכל סוגי הרכבים המסחריים לאחר תאונה ופינויים לכל יעד שתבחרו. אם מדובר ברכב ישן שאינו ראוי לתיקון, אנו עוסקים גם ב-<Link href="/areas/haifa-general/cash-for-scrap-cars-kiryat-motzkin" className="underline text-blue-600">קניית רכבים לפירוק בקרית מוצקין</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}