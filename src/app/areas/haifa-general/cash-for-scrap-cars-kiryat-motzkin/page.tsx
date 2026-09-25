import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בקרית מוצקין | מזומן במקום - הגעה תוך 30 דקות",
  description: "מחפשים קונה רכבים לפירוק בקרית מוצקין? אנו קונים רכבים במזומן מכל הסוגים, גרירה חינם, הגעה מהירה לכל הקריות. שירות אמין ומקצועי. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/cash-for-scrap-cars-kiryat-motzkin"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים בקרית מוצקין",
    "areaServed": "Kiryat Motzkin",
    "priceRange": "החל מ-500 שקלים",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8356",
      "longitude": "35.0715"
    },
    "serviceType": "Scrap Car Removal"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בקרית מוצקין במזומן</h1>
          <p className="text-xl mb-8">פינוי רכבים מהיר, הוגן ומקצועי ללא עלות גרירה. הגעה לכל אזור הקריות תוך דקות.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="קרית מוצקין" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות קניית רכבים לפירוק בקרית מוצקין</h2>
        <p className="mb-4">אנו מציעים פתרון מלא לכל מי שמחפש קונה רכבים לפירוק בקרית מוצקין במזומן. אנו קונים רכבים במגוון מצבים: רכבים ישנים, רכבים לאחר תאונה, רכבים ללא טסט או רכבים עם תקלות מכניות. אם אתם זקוקים למידע נוסף, ניתן להסתכל על שירותינו בתחום ה- <Link href="/areas/haifa-general/scrap-car-removal-for-parts-kiryat-motzkin" className="text-blue-600 underline">פירוק רכבים לחלקים בקרית מוצקין</Link>.</p>
        <p className="mb-4">השירות כולל פינוי מקצועי לכל רכב. זקוקים גם לגרירה באזור? אנו ממליצים על <Link href="/areas/haifa-general/cheap-off-road-vehicle-towing-kiryat-motzkin" className="text-blue-600 underline">גרירת רכבי שטח בקרית מוצקין</Link> וסביבתה.</p>
        
        <div className="bg-gray-100 p-6 rounded-lg mt-8">
          <h3 className="text-2xl font-bold mb-4">למה לבחור בנו?</h3>
          <p>אנו מתמחים בפירוק רכבים פרטיים, מסחריים ורכבי ארבע על ארבע. אנו דואגים לאישור הורדה מהכביש ופינוי מהיר. זקוקים לשירות נוסף באזור הקריות? בדקו גם את שירותי ה- <Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-bialik-industrial-zone" className="text-blue-600 underline">גרירה בקרית ביאליק</Link> שלנו.</p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על פירוק רכבים</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">האם אתם קונים כל סוג של רכב?</h3>
              <p>אנו קונים רכבים פרטיים ומסחריים מכל הסוגים, ללא קשר למצבם המכני. איננו מטפלים באופנועים.</p>
            </div>
            <div>
              <h3 className="font-bold">מהו טווח המחירים לרכב לפירוק?</h3>
              <p>המחיר נקבע לפי סוג הרכב, גילו והמשקל שלו. אנו מציעים מחיר הוגן במזומן במקום.</p>
            </div>
            <div>
              <h3 className="font-bold">האם השירות כולל גרירה?</h3>
              <p>כן, אנו מבצעים פינוי עם גרר לכל רכב. למידע על גרירות נוספות באזור עוקף הקריות, בקרו ב- <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-blue-600 underline">גרירה 24 7 עוקף קריות מחיר הוגן</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}