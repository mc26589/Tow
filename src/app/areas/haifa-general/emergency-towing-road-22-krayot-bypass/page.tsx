import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "כביש 22 עוקף קריות, חיפה והקריות",
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
    "priceRange": "$",
    "serviceType": "Emergency Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר דחוף לרכב תקוע בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8 max-w-3xl">
            נתקעתם בכביש 22? אנו מספקים שירותי גרירה מקצועיים ומהירים לכל סוגי הרכבים הפרטיים, המסחריים ורכבי 4x4. 
            חשוב לציין: איננו מספקים שירותי גרירה לאופנועים. אנו מתמחים בחילוץ רכבים תקועים בבטחה ובמהירות.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
        <ul className="space-y-4 text-lg">
          <li>✓ זמינות מלאה 24/7 לכל קריאה דחופה.</li>
          <li>✓ הגעה מהירה לכל נקודה לאורך כביש עוקף קריות.</li>
          <li>✓ צוות מיומן ומקצועי עם ציוד גרירה חדיש.</li>
          <li>✓ מחירים הוגנים ושירות אדיב ללא הפתעות.</li>
        </ul>
      </section>
    </main>
  );
}