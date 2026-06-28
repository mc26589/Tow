import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ שטח 4x4 בבוץ ביערות הכרמל | זמינות 24/7 בחיפה",
  description: "נתקעתם בבוץ בדרכי הכרמל? שירות חילוץ 4x4 מקצועי, מהיר וזמין 24/7 באזור חיפה והסביבה. מחיר הוגן וחילוץ ללא נזק לרכב. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/urgent-mud-rescue-4x4-towing-carmel-forest-trails-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": "Haifa and Krayot",
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
    "serviceType": "4x4 Mud Rescue and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ שטח 4x4 בבוץ: שירותי גרירה דחופים ביערות הכרמל וחיפה</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות המקצועי שלנו בדרך אליכם לחילוץ מהיר ובטוח.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">זקוקים לחילוץ דחוף בבוץ בדרכי יערות הכרמל?</h2>
        <p className="mb-4">אנו מספקים מענה מיידי ומקצועי לחילוץ רכבי 4x4 שנתקעו בבוץ עמוק, בשבילי יערות הכרמל ובאזורי השטח של חיפה והקריות. לחילוצים נוספים באזור, ניתן לעיין גם ב- <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-region" className="text-blue-600 underline">שירותי חילוץ רכב בבוץ באזור הכרמל</Link> או <Link href="/areas/haifa-general/4x4-rescue-mud-carmel-forest-haifa-university" className="text-blue-600 underline">חילוץ 4x4 ליד אוניברסיטת חיפה</Link>.</p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו לחילוץ שטח?</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות 24/7: אנחנו כאן בשבילכם בכל שעה.</li>
          <li>מומחיות ב-4x4: ניסיון רב בחילוץ רכבי שטח וג'יפים.</li>
          <li>ציוד מקצועי: כננות וציוד גרירה ייעודי.</li>
          <li>מחירים הוגנים: שירות מקצועי במחיר הוגן.</li>
        </ul>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על חילוץ שטח</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">האם אתם מחלצים רכבים שנתקעו עמוק בבוץ בסטלה מאריס?</p>
              <p>כן, אנו נותנים מענה גם באזור <Link href="/areas/haifa-general/4x4-stuck-in-mud-stella-maris-haifa" className="text-blue-600">סטלה מאריס</Link> וסביבתה.</p>
            </div>
            <div>
              <p className="font-bold">מהו טווח המחירים לחילוץ?</p>
              <p>המחיר נקבע לפי מורכבות החילוץ והמרחק. אנו מתחייבים למחיר הוגן ושקוף ללא הפתעות.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-100 rounded-lg">
          <p className="font-bold">חשוב לציין: אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4. איננו מספקים שירותי חילוץ או גרירה לאופנועים.</p>
        </div>
      </section>
    </main>
  );
}