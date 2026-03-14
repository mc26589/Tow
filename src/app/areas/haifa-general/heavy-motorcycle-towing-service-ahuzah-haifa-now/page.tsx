import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Haifa and Krayot",
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
    "priceRange": "$",
    "serviceType": "Vehicle Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירות גרירה וחילוץ רכבים באחוזה חיפה</h1>
          <p className="text-lg mb-8">
            זקוק לחילוץ רכב באזור אחוזה? אנו מספקים שירותי גרירה מקצועיים לרכבים פרטיים, מסחריים ורכבי 4x4 בכל רחבי חיפה והקריות. 
            <strong>שימו לב: אנו לא מספקים שירותי גרירה לאופנועים.</strong>
            אנו מתחייבים למענה מהיר, שירות אדיב ומחירים הוגנים לכל קריאה.
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
          <h2 className="text-2xl font-bold mb-4">למה לבחור בנו באחוזה?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות 24/7 לכל קריאה בחיפה</li>
            <li>ציוד גרירה מתקדם לרכבים פרטיים ומסחריים</li>
            <li>צוות מיומן ומקצועי</li>
            <li>שקיפות מלאה ומחירים הוגנים</li>
          </ul>
        </div>
      </section>
    </main>
  );
}