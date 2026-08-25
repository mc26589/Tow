import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "שירותי גרירה בצ'ק פוסט - 24/7 מחיר הוגן | הגעה מהירה",
  description: "זקוקים לשירותי גרירה בצומת צ'ק פוסט? גרירה וחילוץ רכבים 24/7 במחיר הוגן ושירות מקצועי. הגעה מהירה לכל נקודה בצ'ק פוסט והסביבה. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-services-check-post-junction"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
    "areaServed": "חיפה והקריות",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7885",
      "longitude": "35.0253"
    },
    "serviceType": "Towing Service"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירותי גרירה זולים בצומת צ'ק פוסט</h1>
          <p className="text-xl mb-8 leading-relaxed">
            זקוקים לשירותי גרירה בצומת צ'ק פוסט? אנו מתמחים בחילוץ וגרירת רכבים פרטיים, רכבים מסחריים ורכבי 4x4 באזור חיפה והקריות. 
            אנו מציעים מחירים הוגנים ושירות מקצועי 24 שעות ביממה. מחפשים גם <Link href="/areas/haifa-general/buying-cars-for-scrap-check-post-haifa" className="underline">קניית רכבים לפירוק בצ'ק פוסט</Link>? אנחנו כאן לכל צורך.
            חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד הגרירה
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בצומת צ'ק פוסט?</h2>
        <ul className="space-y-4 text-lg mb-8">
          <li>✓ זמינות מלאה 24/7 לכל קריאה באזור הצ'ק פוסט וכביש 22 הסמוך, ראו <Link href="/areas/haifa-general/towing-service-road-22-krayot" className="text-blue-600">שירותי גרירה בכביש 22</Link>.</li>
          <li>✓ מחירים הוגנים ושקופים ללא הפתעות.</li>
          <li>✓ צוות מיומן עם ציוד גרירה מתקדם לכל סוגי הרכבים (למעט אופנועים).</li>
          <li>✓ הגעה מהירה לכל נקודה בצומת ובסביבתה, כולל חילוץ מרכבים תקועים בדרכים.</li>
        </ul>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירה בצ'ק פוסט</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold">תוך כמה זמן תגיעו לצומת צ'ק פוסט?</h4>
              <p>אנו פרוסים באזור חיפה והקריות ועושים את המירב להגיע לכל קריאה בצ'ק פוסט תוך זמן קצר מאוד.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם גוררים רכבים חשמליים?</h4>
              <p>כן, אנו מספקים <Link href="/areas/haifa-general/affordable-electric-car-towing-check-post-krayot" className="text-blue-600">שירותי גרירה לרכב חשמלי בצ'ק פוסט</Link> ובסביבתה.</p>
            </div>
            <div>
              <h4 className="font-bold">מהו טווח המחירים לשירותי גרירה?</h4>
              <p>המחיר תלוי במרחק הגרירה וסוג הרכב, אך אנו ידועים במתן מחיר הוגן ושקוף ללא עלויות נסתרות.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}