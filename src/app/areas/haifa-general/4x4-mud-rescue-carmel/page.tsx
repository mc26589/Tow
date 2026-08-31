import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ שטח חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "4x4 Mud Rescue"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ שטח בוץ בכרמל רכב 4x4</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם בבוץ בדרכי העפר של הכרמל? אנו מתמחים בחילוץ רכבי 4x4 ורכבי שטח ששקעו בבוץ עמוק. 
            הצוות שלנו זמין 24/7 עם ציוד חילוץ מקצועי כדי להחזיר אתכם לדרך בבטחה.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ שטח?</h2>
          <ul className="space-y-4 text-lg">
            <li>✓ מומחיות בחילוץ רכבי 4x4 ורכבי שטח בתנאי בוץ קשים.</li>
            <li>✓ זמינות מלאה 24/7 בכל אזור הכרמל וחיפה.</li>
            <li>✓ ציוד חילוץ מתקדם המבטיח שמירה על שלמות הרכב.</li>
            <li>✓ מחירים הוגנים ושירות אדיב ומקצועי.</li>
          </ul>
          <p className="mt-8 text-sm text-gray-400">
            *שימו לב: אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4. איננו מספקים שירותי חילוץ או גרירה לאופנועים.
          </p>
        </div>
      </section>
    </main>
  );
}