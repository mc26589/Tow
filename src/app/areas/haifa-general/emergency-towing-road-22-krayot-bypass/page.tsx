import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22 עוקף קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8190", "longitude": "35.0630" },
    "priceRange": "$",
    "serviceType": "Emergency Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה דחופים כביש 22 עוקף קריות</h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            זקוקים לחילוץ דחוף בכביש 22? אנו מתמחים במתן מענה מהיר לרכבים פרטיים, רכבים מסחריים ורכבי 4x4. 
            חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים. 
            הצוות שלנו ערוך להגיע לכל נקודה לאורך עוקף קריות בכל שעה, במחירים הוגנים ושירות ללא פשרות.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
          <ul className="space-y-4 text-gray-700">
            <li>✓ הגעה מהירה לכל נקודה בכביש עוקף קריות.</li>
            <li>✓ זמינות מלאה 24/7, כולל שבתות וחגים.</li>
            <li>✓ צוות מיומן ומקצועי לטיפול ברכבים פרטיים ומסחריים.</li>
            <li>✓ שקיפות מלאה ומחירים הוגנים ללא הפתעות.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}