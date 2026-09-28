import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בקרית מוצקין | מזומן במקום - הגעה ב-30 דקות",
  description: "מחפשים קונה רכבים לפירוק בקרית מוצקין? קונים רכבים במזומן מכל סוג, כולל גרירה חינם ופינוי מהיר. שירות אמין ומקצועי. התקשרו עכשיו לקבלת הצעה!",
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
          <p className="text-xl mb-8">פינוי רכבים מהיר, הוגן ומקצועי ללא עלות גרירה. הגעה לכל אזור הקריות תוך דקות ספורות.</p>
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
        <p className="mb-4">אנו מציעים פתרון מלא לכל מי שמחפש קונה רכבים לפירוק בקרית מוצקין במזומן. אנו קונים רכבים במגוון מצבים: רכבים ישנים, רכבים לאחר תאונה או רכבים ללא טסט. למידע נוסף על תהליך הפירוק שלנו, בקרו בעמוד <Link href="/areas/haifa-general/scrap-car-removal-for-parts-kiryat-motzkin" className="text-blue-600 underline">פירוק רכבים לחלקים בקרית מוצקין</Link>.</p>
        <p className="mb-4">השירות כולל פינוי מקצועי לכל סוגי הרכבים. אם הרכב נתקע בדרך, אנו ממליצים על <Link href="/areas/haifa-general/affordable-car-towing-kiryat-motzkin-24-7" className="text-blue-600 underline">גרירת רכבים בקרית מוצקין 24/7</Link> במחיר הוגן.</p>
        
        <div className="bg-gray-100 p-6 rounded-lg mt-8">
          <h3 className="text-2xl font-bold mb-4">למה לבחור בנו?</h3>
          <p>אנו מתמחים בפינוי רכבים פרטיים ומסחריים. אנו דואגים לכל הניירת מול משרד התחבורה. זקוקים לשירותי עזר נוספים באזור? ראו את שירותי ה-<Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="text-blue-600 underline">גרירה בקרית ביאליק</Link> שלנו.</p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על פירוק רכבים</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">האם אתם קונים רכבים ללא טסט?</h3>
              <p>כן, אנו קונים רכבים ללא טסט, רכבים מושבתים או כאלו עם תקלות מנוע קשות, ומפנים אותם למגרש מורשה.</p>
            </div>
            <div>
              <h3 className="font-bold">מה טווח המחירים שאתם משלמים?</h3>
              <p>המחיר נקבע בהתאם למשקל הברזל, סוג הרכב והחלקים שניתן להפיק ממנו. אנו מתחייבים למחיר הוגן בשוק.</p>
            </div>
            <div>
              <h3 className="font-bold">האם השירות זמין גם באזורים סמוכים?</h3>
              <p>בוודאי, אנו פעילים בכל אזור הקריות וחיפה. ניתן להתרשם משירות נוסף שלנו ב-<Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal" className="text-blue-600 underline">קניית רכבים לפירוק בקריות ובחיפה</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}