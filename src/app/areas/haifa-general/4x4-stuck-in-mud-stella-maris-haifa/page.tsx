import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday", "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8315", "longitude": "34.9735" },
    "priceRange": "$",
    "serviceType": "4x4 Off-road recovery and towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב 4x4 שנתקע בבוץ באזור סטלה מאריס חיפה</h1>
          <p className="text-xl mb-8 leading-relaxed">
            נתקעתם עם רכב השטח בבוץ באזור סטלה מאריס? אנו מספקים שירותי חילוץ מקצועיים לרכבי 4x4, רכבים פרטיים ומסחריים. הצוות שלנו ערוך לכל תרחיש שטח ומגיע במהירות לכל נקודה בחיפה והקריות.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בסטלה מאריס?</h2>
          <ul className="space-y-4 text-lg">
            <li>✓ זמינות 24/7 לכל קריאת חילוץ בחיפה.</li>
            <li>✓ ציוד חילוץ מתקדם לרכבי 4x4 ששקעו בבוץ או בחול.</li>
            <li>✓ מחירים הוגנים ושירות אדיב ומקצועי.</li>
            <li>✓ מומחיות בחילוץ רכבים פרטיים ומסחריים (שימו לב: איננו מחלצים אופנועים).</li>
          </ul>
        </div>
      </section>
    </main>
  );
}