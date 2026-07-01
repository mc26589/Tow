import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר באחוזה חיפה 24/7 | שירותי גרירה מקצועיים - הגעה מהירה",
  description: "נתקעתם עם הרכב באחוזה חיפה? שירותי גרירה וחילוץ 24/7 במחיר הוגן. צוות מיומן, הגעה מהירה לכל אזור הכרמל. התקשרו עכשיו לקבלת שירות!",
  alternates: {
    canonical: "/areas/haifa-general/motorcycle-towing-ahuza-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Haifa",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה וחילוץ רכבים באחוזה, חיפה</h1>
          <p className="text-xl mb-8">זקוקים לגרר באזור אחוזה? אנו מעניקים שירותי גרירה לרכבים פרטיים ומסחריים 24 שעות ביממה.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="חיפה אחוזה" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">שירותי גרירה וחילוץ זמינים באחוזה</h2>
          <p className="mb-4">
            נתקעת עם הרכב באזור אחוזה? הצוות שלנו ערוך ומוכן להעניק לך שירות מקצועי, מהיר ואמין 24/7. 
            אנו מתמחים בחילוץ ושינוע רכבים מכל סוג. למידע נוסף על שירותים באזור, ניתן לעיין ב<Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-600 underline">חילוץ רכבים מבוץ באזור הכרמל</Link>.
          </p>
          <p className="font-semibold text-red-600 mb-6">
            הערה חשובה: השירות שלנו מיועד לרכבים בלבד. איננו ערוכים לשינוע אופנועים או אופנועים כבדים.
          </p>

          <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">שאלות נפוצות (FAQ)</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">כמה זמן לוקח לגרר להגיע לאחוזה?</h4>
                <p>אנו משתדלים להגיע לכל נקודה באחוזה ובסביבתה תוך זמן קצר ככל הניתן בהתאם לתנועה.</p>
              </div>
              <div>
                <h4 className="font-bold">האם אתם גוררים רכבים שנתקעו בשטח?</h4>
                <p>כן, אנו מספקים שירותי חילוץ למגוון מקרים. למידע על מקרים מורכבים ראו: <Link href="/areas/haifa-general/car-rescue-mud-carmel-forest-nesher-24-7" className="text-blue-600 underline">חילוץ רכבים ביערות הכרמל</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}