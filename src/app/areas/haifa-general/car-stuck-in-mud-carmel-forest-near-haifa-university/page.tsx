import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ ליד אוניברסיטת חיפה | הגעה מהירה 24/7",
  description: "נתקעתם בבוץ באוניברסיטת חיפה או ביערות הכרמל? שירות חילוץ מקצועי, מחיר הוגן, הגעה מהירה לכל נקודה בשטח. צריכים עזרה? התקשרו עכשיו!",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">רכב תקוע בבוץ באוניברסיטת חיפה? חילוץ מהיר ליערות הכרמל</h1>
          <p className="text-xl mb-6">נתקעתם בדרכי העפר סביב אוניברסיטת חיפה? צוות המומחים שלנו זמין 24/7 עם ציוד חילוץ מתקדם לחילוץ מהיר ובטוח של הרכב שלכם מהבוץ.</p>
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
        <h2 className="text-2xl font-bold mb-4">שירותי חילוץ שטח מתקדמים בכרמל</h2>
        <p className="mb-4">הצוות שלנו מתמחה בטיפול במצבי <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-region" className="text-blue-600 underline">חילוץ רכב תקוע בבוץ בכל אזור הכרמל</Link> והיערות הסמוכים. אם הרכב שקע עמוק, אנו מציעים גם <Link href="/areas/haifa-general/suv-stuck-in-mud-rescue-haifa-university" className="text-blue-600 underline">suv stuck in mud rescue haifa university</Link> מקצועי ומדויק. עבור מקרים מורכבים יותר, אנו זמינים עם <Link href="/areas/haifa-general/urgent-mud-rescue-4x4-towing-carmel-forest-trails-haifa" className="text-blue-600 underline">urgent mud rescue 4x4 towing carmel forest trails haifa</Link> לכל סוגי הרכבים.</p>
        <p className="text-red-600 font-bold mb-4">לתשומת לבכם: השירות מיועד לרכבים פרטיים ומסחריים בלבד. איננו מחלצים אופנועים.</p>
        <p className="mb-4">אנו מקפידים על מחיר הוגן ושקיפות מלאה. אם אתם זקוקים לחילוץ דחוף, צרו קשר לקבלת הערכת מחיר הוגנת ומהירה.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ רכב באזור הכרמל</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">תוך כמה זמן תגיעו לאזור אוניברסיטת חיפה?</h3>
              <p>ברוב המקרים אנו מגיעים תוך זמן קצר, שכן הצוותים שלנו ערוכים ופרוסים לחילוץ מהיר בחיפה ובסביבת יערות הכרמל.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם מחלצים רכבים ששקעו עמוק בבוץ?</h3>
              <p>כן, אנו ערוכים עם ציוד חילוץ כבד וייעודי המותאם גם לרכבים פרטיים ששקעו בבוץ עמוק בשטח.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם ניתן לקבל הצעת מחיר בטלפון?</h3>
              <p>בהחלט. אנו מקפידים על מחיר הוגן וברור עוד לפני תחילת העבודה כדי שתוכלו לקבל שירות רגוע ללא הפתעות.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}