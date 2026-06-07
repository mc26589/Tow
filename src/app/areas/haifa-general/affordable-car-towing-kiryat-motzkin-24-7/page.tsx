import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "שירותי גרירה בקרית מוצקין 24/7 | מחיר הוגן - הגעה מהירה",
  description: "נתקעתם עם הרכב בקרית מוצקין? גרר מקצועי זמין 24/7 לכל סוגי הרכבים במחיר הוגן. שירות מהיר, אמין ושקוף. התקשרו עכשיו לפתרון מיידי!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-car-towing-kiryat-motzkin-24-7",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה קרית מוצקין",
    "areaServed": "Kiryat Motzkin",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8285",
      "longitude": "35.0715"
    },
    "priceRange": "$",
    "serviceType": "Car Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירת רכב בקרית מוצקין 24/7 במחיר הוגן</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            נתקעתם עם הרכב בקרית מוצקין? אנו כאן בשבילכם 24/7. שירות גרירה מקצועי, אמין ובמחיר הוגן לכל סוגי הרכבים הפרטיים והמסחריים. במידה ואתם זקוקים לשירותים משלימים, ניתן להתרשם גם מ- <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="underline font-semibold">גרירה 24 7 עוקף קריות מחיר הוגן</Link>. שימו לב: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="קרית מוצקין" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">למה לבחור בנו?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">זמינות מלאה</h3>
              <p>אנו פועלים 24 שעות ביממה, 7 ימים בשבוע, כולל שבתות וחגים, כדי להבטיח שלא תישאר תקוע.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">מחירים הוגנים</h3>
              <p>אנו מאמינים בשקיפות מלאה. קבלו הצעת מחיר הוגנת ומשתלמת בטלפון ללא הפתעות מיותרות.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">מקצועיות וניסיון</h3>
              <p>צוות מיומן עם ציוד חדיש המבטיח גרירה בטוחה ושמירה על הרכב שלכם לאורך כל הדרך.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות על גרירת רכב בקרית מוצקין</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">תוך כמה זמן תגיעו אלי בקרית מוצקין?</h3>
              <p className="text-gray-700">אנו שואפים להגעה מהירה ככל הניתן, בדרך כלל תוך 30-45 דקות בהתאם לעומסי התנועה באזור הקריות.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">מה טווח המחירים לגרירה?</h3>
              <p className="text-gray-700">המחיר נקבע לפי מרחק הגרירה וסוג הרכב. אנו מתחייבים למחיר הוגן ומשתלם. להצעת מחיר מדויקת צרו קשר כעת.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם מספקים שירותי גרירה גם באזורים סמוכים?</h3>
              <p className="text-gray-700">כן, אנו נותנים מענה רחב. ראו לדוגמה: <Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-yam-disabled-vehicle" className="text-blue-600 hover:underline">affordable flatbed towing kiryat yam disabled vehicle</Link> וכן <Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="text-blue-600 hover:underline">affordable flatbed towing route 22 krayot area</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}