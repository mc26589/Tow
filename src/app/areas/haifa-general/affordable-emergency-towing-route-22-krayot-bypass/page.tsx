import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
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
      "latitude": "32.8190",
      "longitude": "35.0630"
    },
    "serviceType": "Emergency Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה דחופים ובמחיר הוגן בכביש 22 עוקף קריות</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם עם הרכב בכביש 22? אנו מציעים מענה מהיר, מקצועי ובמחיר הוגן לכל סוגי הרכבים הפרטיים, המסחריים ורכבי 4x4. 
            חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
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
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
          <ul className="space-y-4 text-gray-300">
            <li>✓ זמינות מלאה 24/7 לכל אורך עוקף קריות.</li>
            <li>✓ הגעה מהירה לנקודת התקיעה.</li>
            <li>✓ שירות אדיב ומקצועי במחיר הוגן.</li>
            <li>✓ מומחים לרכבים פרטיים, מסחריים ו-4x4.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}