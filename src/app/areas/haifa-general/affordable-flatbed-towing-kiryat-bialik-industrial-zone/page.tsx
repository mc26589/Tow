import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Kiryat Bialik",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8350",
      "longitude": "35.0750"
    },
    "serviceType": "Flatbed Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרירת רכב על גבי משטח (גרר שטוח) באזור התעשייה קריית ביאליק במחיר הוגן</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב תקול באזור התעשייה של קריית ביאליק? אנו מציעים שירותי גרירה מקצועיים על גבי משטח (גרר שטוח) לרכבים פרטיים, מסחריים ורכבי 4x4. אנו מתחייבים למחירים הוגנים, זמינות גבוהה ושירות אדיב.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לגרירה באזור התעשייה?</h2>
        <ul className="space-y-4 text-lg">
          <li>✓ <strong>ציוד מתקדם:</strong> שימוש בגרר שטוח המבטיח הובלה בטוחה ללא נזקים לרכב.</li>
          <li>✓ <strong>זמינות מלאה:</strong> מענה מהיר לכל קריאה באזור התעשייה של קריית ביאליק.</li>
          <li>✓ <strong>מומחיות:</strong> אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח.</li>
          <li>✓ <strong>חשוב לדעת:</strong> השירות מיועד לרכבים בלבד. איננו מספקים שירותי גרירה לאופנועים.</li>
        </ul>
      </section>
    </main>
  );
}