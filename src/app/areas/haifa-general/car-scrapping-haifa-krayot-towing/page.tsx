import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | שירות מהיר במקום 24/7",
  description: "צריכים לפנות רכב ישן? אנו קונים רכבים לפירוק בחיפה והקריות עם שירות גרירה מהיר ומחיר הוגן במזומן. פינוי רכב ללא כאב ראש – התקשרו עכשיו לקבלת הצעה!",
  alternates: {
    canonical: "/areas/haifa-general/car-scrapping-haifa-krayot-towing"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "34.9896"
    },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות | שירות גרירה ופינוי מהיר</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב ישן שתופס מקום? אנו קונים רכבים לפירוק מכל הסוגים ומספקים שירות גרירה מקצועי בחיפה והקריות.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">קניית רכבים לפירוק וגרירה באזור חיפה והקריות</h2>
        <p className="mb-4">אנו מציעים פתרון כולל לבעלי רכבים ישנים, תקולים או כאלו לאחר תאונה. אם אתם זקוקים ל- <Link href="/areas/haifa-general/scrap-car-buyer-haifa-krayot-immediate-removal" className="text-blue-600 underline">קונה רכבים לפירוק באזור חיפה והקריות</Link>, הגעתם למקום הנכון. השירות כולל פינוי מהיר עם גרר.</p>
        <p className="mb-4">צריכים עזרה נוספת בדרכים? אנו מספקים מענה למגוון מקרים, כולל <Link href="/areas/haifa-general/towing-service-road-22-krayot-bypass" className="text-blue-600 underline">שירותי גרירה בכביש 22 עוקף קריות</Link>. לתושבי הקריות, אנו מבצעים גם <Link href="/areas/haifa-general/car-scrapping-old-industrial-zone-kiryat-bialik" className="text-blue-600 underline">פירוק רכבים באזור התעשייה של קרית ביאליק</Link> ובסביבת <Link href="/areas/haifa-general/junk-car-removal-kiryat-yam-beach" className="text-blue-600 underline">קרית ים</Link>.</p>
        <p className="mb-4 font-semibold text-red-600">חשוב להבהיר: איננו מספקים שירותי גרירה או פירוק לאופנועים.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על פירוק רכבים בחיפה והסביבה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">באילו רכבים אתם מטפלים?</h3>
              <p>אנו קונים רכבים פרטיים, רכבים מסחריים ורכבי 4x4. אם נתקעתם באחוזה, ניתן להיעזר בשירותי <Link href="/areas/haifa-general/buying-cars-for-scrap-ahoza-haifa" className="text-blue-600 underline">קניית רכבים לפירוק באחוזה</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם מפנים רכבים ללא טסט?</h3>
              <p>כן, אנו קונים רכבים ללא טסט, רכבים מושבתים או רכבים שלא עוברים מכון רישוי. התשלום במזומן במעמד הפינוי.</p>
            </div>
            <div>
              <h3 className="font-bold">האם השירות כולל גרירה?</h3>
              <p>בהחלט. אנו מספקים שירותי גרירה מהירים לכל נקודה בחיפה והקריות, גם במקרי חירום כגון <Link href="/areas/haifa-general/grar-zol-lerchev-takua-bekiryat-yam" className="text-blue-600 underline">גרר זול לרכב תקוע בקרית ים</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}