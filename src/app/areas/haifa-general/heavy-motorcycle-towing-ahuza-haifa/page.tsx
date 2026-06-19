import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">גרר לאופנועים כבדים באחוזה חיפה - שירות מקצועי לרכבים ורכבי שטח</h1>
          <p className="text-lg md:text-xl mb-8">אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4. שים לב: איננו מספקים שירותי גרירה לאופנועים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
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

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה באזור אחוזה</h2>
        <p className="mb-4">
          אנו מבינים את הצורך במענה מהיר ומקצועי באזור אחוזה והסביבה. למרות שאיננו מטפלים באופנועים, אנו ערוכים לכל קריאה עבור רכבים פרטיים ורכבי שטח עם ציוד חדיש ומחירים הוגנים.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>זמינות 24/7 לכל סוגי הרכבים (למעט אופנועים)</li>
          <li>צוות מיומן ומקצועי</li>
          <li>הגעה מהירה לכל נקודה באחוזה ובחיפה</li>
          <li>שקיפות מלאה והצעת מחיר בטלפון</li>
        </ul>
      </section>
    </main>
  );
}