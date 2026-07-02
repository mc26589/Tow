import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
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
      "latitude": "32.7940",
      "longitude": "34.9896"
    },
    "serviceType": "Emergency Vehicle Towing and Recovery"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בדרכים תלולות בחיפה</h1>
          <p className="text-xl mb-8">נתקעתם בעלייה תלולה? הצוות המקצועי שלנו מתמחה בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4 בדרכים המאתגרות של חיפה. אנו לא מטפלים באופנועים.</p>
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

      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לחילוץ בחיפה?</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>מענה מהיר 24/7 לכל שכונות חיפה והקריות.</li>
          <li>מומחיות בחילוץ בשיפועים חדים ודרכים תלולות.</li>
          <li>ציוד גרירה מתקדם המבטיח שמירה על הרכב שלכם.</li>
          <li>מחירים הוגנים ושירות אדיב ומקצועי.</li>
        </ul>
        <p className="mt-6 text-gray-600">
          חשוב לציין: אנו מתמחים ברכבים פרטיים ומסחריים בלבד. איננו מספקים שירותי גרירה או חילוץ לאופנועים.
        </p>
      </section>
    </main>
  );
}