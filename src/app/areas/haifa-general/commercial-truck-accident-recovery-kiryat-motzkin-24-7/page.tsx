import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ משאיות ורכב מסחרי בקרית מוצקין | הגעה מהירה 24/7",
  description: "נתקעתם עם משאית או רכב מסחרי בקרית מוצקין? צוות מומחים זמין 24/7 לחילוץ מהיר, גרירה מקצועית ומחיר הוגן. צריכים עזרה עכשיו? התקשרו אלינו!",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ משאיות ורכבים מסחריים בקרית מוצקין – שירות 24/7</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם רכב מסחרי, משאית או רכב עבודה בקרית מוצקין? אנו מציעים מענה מיידי, גרירה מקצועית וחילוץ מורכב לאחר תאונות. למידע על אזורים נוספים, ראו את שירותי ה-<Link href="/areas/haifa-general/towing-service-road-22-krayot" className="underline">גרירה וחילוץ בכביש 22 והקריות</Link>.
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
            <li>✓ זמינות מלאה 24/7 לכל קריאה בקרית מוצקין והסביבה.</li>
            <li>✓ ציוד חילוץ כבד המותאם למשאיות ורכבים מסחריים.</li>
            <li>✓ צוות מיומן בטיפול בתאונות דרכים מורכבות וחילוצים מהשטח.</li>
            <li>✓ מחירים הוגנים ושירות שקוף ללא הפתעות.</li>
          </ul>
          <p>זקוקים לסיוע ממוקד? בדקו גם את שירותי ה-<Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="underline text-blue-400">גרירת החירום בכביש עוקף קריות</Link> או את שירותי ה-<Link href="/areas/haifa-general/affordable-electric-car-towing-check-post-krayot" className="underline text-blue-400">גרירה לרכבים חשמליים בצ'ק פוסט והקריות</Link>.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ רכבים מסחריים</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">האם אתם מבצעים חילוץ מורכב מחוץ לכביש?</h3>
              <p>כן, אנו נותנים מענה מקצועי גם בתנאי שטח. במקרים של רכב פרטי שנתקע בבוץ או בדרכים לא סלולות, מומלץ להיעזר בשירותי ה-<Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="underline text-blue-600">חילוץ 4x4 מהשטח</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">מה העלות של גרירת רכב מסחרי כבד?</h3>
              <p>המחיר נקבע בהתאם למשקל הרכב, מרחק הגרירה ומורכבות החילוץ. למי שמחפש פתרונות זולים יותר באזור חיפה, ניתן לבדוק <Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="underline text-blue-600">גרירה זולה בצ'ק פוסט</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם אתם מפנים גם רכבים מסחריים ישנים?</h3>
              <p>בהחלט, אנו מציעים שירות של קניית רכבים לפירוק. לתושבי האזור, ניתן לפנות לשירות <Link href="/areas/haifa-general/car-scrapping-old-industrial-zone-kiryat-bialik" className="underline text-blue-600">פירוק רכבים באזור התעשייה קרית ביאליק</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}