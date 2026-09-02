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
      "latitude": "32.8158",
      "longitude": "35.0567"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר דחוף לכביש 22 קריות</h1>
          <p className="text-xl mb-8">נתקעתם בכביש 22? אנו כאן בשבילכם. שירות גרירה מקצועי, מהיר ובטוח לכל סוגי הרכבים (למעט אופנועים).</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לגרר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירות גרירה בכביש 22?</h2>
        <ul className="space-y-4 text-lg">
          <li>✓ הגעה מהירה לכל נקודה בכביש 22 (עוקף קריות).</li>
          <li>✓ שירות 24/7 ללא הפסקה, גם בסופי שבוע וחגים.</li>
          <li>✓ מחירים הוגנים ושקופים – הצעת מחיר בטלפון.</li>
          <li>✓ צוות מיומן ומקצועי לטיפול ברכבים פרטיים, מסחריים ו-4x4.</li>
        </ul>
        <p className="mt-8 text-gray-600">
          חשוב לציין: אנו מתמחים בגרירת רכבים פרטיים ומסחריים בלבד. איננו מספקים שירותי גרירה לאופנועים.
        </p>
      </section>
    </main>
  );
}