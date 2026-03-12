import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ קרית מוצקין",
    "areaServed": "קרית מוצקין",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8356",
      "longitude": "35.0731"
    },
    "priceRange": "$",
    "serviceType": "Commercial Truck Accident Recovery and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכבים מסחריים ומשאיות בקרית מוצקין – שירות גרירה 24/7</h1>
          <p className="text-xl mb-8 max-w-2xl">
            אנו מתמחים בחילוץ מקצועי של רכבים מסחריים, משאיות קלות ורכבי 4x4 לאחר תאונות או תקלות מורכבות בקרית מוצקין והסביבה. השירות זמין 24 שעות ביממה, 7 ימים בשבוע. חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="קרית מוצקין" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לשירות
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ רכב מסחרי?</h2>
          <ul className="space-y-4 text-lg">
            <li>✓ זמינות מלאה 24/7 לכל קריאה בקרית מוצקין.</li>
            <li>✓ ציוד חילוץ מתקדם המותאם למשאיות ורכבים מסחריים.</li>
            <li>✓ צוות מיומן ומנוסה בטיפול בתאונות דרכים.</li>
            <li>✓ מחירים הוגנים ושקיפות מלאה מול הלקוח.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}