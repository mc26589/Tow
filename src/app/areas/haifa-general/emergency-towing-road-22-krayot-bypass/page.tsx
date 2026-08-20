import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה עוקף קריות",
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
      "latitude": "32.8158",
      "longitude": "35.0653"
    },
    "serviceType": "Emergency Roadside Assistance and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה דחופים בכביש 22 עוקף קריות – מענה מהיר 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? הצוות שלנו בדרך אליכם עם שירות גרירה מקצועי ואמין.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי חילוץ וגרירה בכביש 22</h2>
        <p className="mb-4">אנו מספקים מענה מהיר לכל נהג שנתקע בציר עוקף קריות. השירות שלנו כולל גרירת רכבים פרטיים, רכבי 4x4 ורכבים מסחריים קלים.</p>
        <p className="mb-4 font-semibold text-red-600">חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.</p>
        <p>אנו מתחייבים למחירים הוגנים ושירות אדיב בכל שעות היממה.</p>
      </section>
    </main>
  );
}