import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "רכב תקוע בבוץ באוניברסיטת חיפה? חילוץ מהיר 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ ליד אוניברסיטת חיפה או ביערות הכרמל? שירות חילוץ רכב תקוע 24/7. הגעה מהירה, צוות מקצועי ומחיר הוגן. צריכים עזרה? התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-forest-near-haifa-university"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": "חיפה והקריות",
    "priceRange": "מחיר הוגן",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7625",
      "longitude": "35.0150"
    },
    "serviceType": "חילוץ רכב תקוע בבוץ, גרירת רכבים, חילוץ שטח"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">רכב תקוע בבוץ באזור יערות הכרמל ליד אוניברסיטת חיפה? חילוץ שטח מיידי</h1>
          <p className="text-xl mb-6">נתקעתם בבוץ בדרכי העפר סביב אוניברסיטת חיפה? אנו זמינים 24/7 עם ציוד חילוץ מתקדם לחילוץ מהיר ובטוח של הרכב שלכם.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי חילוץ מקצועיים בכרמל</h2>
        <p className="mb-4">הצוות שלנו מתמחה בטיפול במצבי <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-region" className="text-blue-600 underline">חילוץ רכב תקוע בבוץ בכל אזור הכרמל</Link> וביערות הסמוכים לאוניברסיטת חיפה. אם מדובר בשטח מאתגר יותר, אנו מספקים גם <Link href="/areas/haifa-general/car-extraction-from-mud-carmel-reserve-haifa" className="text-blue-600 underline">חילוץ רכבים מקצועי משמורת הכרמל</Link> בצורה בטוחה ושקופה.</p>
        <p className="text-red-600 font-bold mb-4">לתשומת לבכם: השירות מיועד לרכבים פרטיים ומסחריים בלבד, איננו מחלצים אופנועים.</p>
        <p className="mb-4">אנו מקפידים על מחיר הוגן ללא הפתעות. במידה ואתם זקוקים לשירותים נוספים באזור אחוזה והסביבה, אנו מציעים מענה כולל לכל דרישה בשטח.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ בחיפה והכרמל</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">כמה זמן לוקח לכם להגיע לאוניברסיטת חיפה?</h3>
              <p>ברוב המקרים אנו מגיעים תוך זמן קצר, שכן אנו ערוכים לחילוצים מהירים בחיפה ובאזור יערות הכרמל.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם מחלצים רכבים ששקעו עמוק בבוץ?</h3>
              <p>כן, אנו ערוכים עם ציוד ייעודי לחילוצי שטח ובוץ, גם עבור רכבים פרטיים וגם לרכבי שטח כבדים יותר.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם המחיר שקוף?</h3>
              <p>בהחלט. אנו מאמינים בשירות הוגן, נקיוב מחיר ברור לפני תחילת העבודה כדי שתוכלו להיות רגועים גם ברגעים מלחיצים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}