import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ רכב חיפה והקריות",
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
      "latitude": "32.7625",
      "longitude": "35.0150"
    },
    "serviceType": "Off-road vehicle recovery and towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב שטח בוץ ושביל יער כרמל סמוך לאוניברסיטת חיפה</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם בבוץ או בשטח טרשי באזור יערות הכרמל ליד אוניברסיטת חיפה? אנו מתמחים בחילוצי שטח מקצועיים לרכבי 4x4 ורכבים פרטיים. 
            הצוות שלנו זמין 24/7 להגעה מהירה לכל נקודה בשבילי הכרמל.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בשטח?</h2>
          <ul className="space-y-4 text-gray-300">
            <li>✓ מומחיות בחילוצי שטח, בוץ וחול באזור הכרמל.</li>
            <li>✓ ציוד חילוץ מתקדם המתאים לרכבי שטח ורכבים פרטיים.</li>
            <li>✓ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>✓ מחירים הוגנים ושירות אדיב ומקצועי.</li>
          </ul>
          <p className="mt-8 text-sm text-gray-400">
            *הערה: השירות ניתן לרכבים פרטיים, מסחריים ורכבי שטח בלבד. איננו מספקים שירותי חילוץ או גרירה לאופנועים.
          </p>
        </div>
      </section>
    </main>
  );
}