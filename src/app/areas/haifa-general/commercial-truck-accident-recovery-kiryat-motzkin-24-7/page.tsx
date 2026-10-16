import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ משאיות בקרית מוצקין 24/7 - הגעה מהירה ומחיר הוגן",
  description: "נתקעתם עם רכב מסחרי או משאית בקרית מוצקין? צוות מומחים זמין לחילוץ מקצועי וגרירה 24/7. הגעה מהירה, מחיר הוגן ושירות שקוף. התקשרו עכשיו!",
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
            נתקעתם עם רכב מסחרי או משאית בקרית מוצקין? אנו מספקים פתרון מיידי לכל סוגי התקלות. לזמינות בכבישים המהירים, בדקו את שירותי ה-<Link href="/areas/haifa-general/emergency-light-truck-towing-route-22-krayot-bypass" className="underline">חילוץ למשאיות קלות בכביש 22 עוקף קריות</Link>.
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
          <p>זקוקים לסיוע ממוקד? ראו גם את שירותי ה-<Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-bialik-industrial-zone" className="underline text-blue-400">גרירה באזור התעשייה קרית ביאליק</Link> או <Link href="/areas/haifa-general/affordable-car-towing-kiryat-motzkin-24-7" className="underline text-blue-400">גרירת רכב פרטי בקרית מוצקין</Link>.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ רכבים מסחריים</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">האם אתם מבצעים חילוץ מורכב מחוץ לכביש?</h3>
              <p>כן, אנו נותנים מענה מקצועי גם בתנאי שטח. אם נתקעתם בדרכים לא סלולות, מומלץ להיעזר בשירותי ה-<Link href="/areas/haifa-general/4x4-mud-rescue-carmel" className="underline text-blue-600">חילוץ מהשטח</Link> שלנו.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">מה העלות של גרירת רכב מסחרי כבד?</h3>
              <p>המחיר נקבע בהתאם למשקל הרכב, מרחק הגרירה ומורכבות החילוץ. למי שמחפש פתרונות זולים בצירים הראשיים, ניתן לבדוק גם את שירותי ה-<Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="underline text-blue-600">גרירה בצומת צ'ק פוסט</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם אתם מפנים גם רכבים מסחריים ישנים לפירוק?</h3>
              <p>בהחלט. אנו מציעים מענה מלא, כולל <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal" className="underline text-blue-600">קניית רכבים לפירוק באזור חיפה והקריות</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}