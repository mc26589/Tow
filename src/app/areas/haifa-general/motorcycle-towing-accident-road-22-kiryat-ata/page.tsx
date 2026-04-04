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
      "longitude": "35.0610"
    },
    "priceRange": "$",
    "serviceType": "Towing and Roadside Assistance for Cars and Commercial Vehicles"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">גרר אופנוע כבד אחרי תאונה בכביש 22 מחלף קרית אתא</h1>
          <p className="text-lg mb-8">
            אנו מבינים את הדחיפות במקרה של תאונה בכביש 22. עם זאת, חשוב לציין כי אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4 בלבד. איננו מספקים שירותי גרירה לאופנועים מכל סוג שהוא.
          </p>
          <div className="flex flex-col gap-4">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold text-center"
            >
              התקשרו לייעוץ עבור רכבים
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה באזור הקריות</h2>
        <p>אנו מספקים שירותי גרירה מקצועיים לרכבים 24/7. אם נתקעתם עם רכבכם הפרטי או המסחרי באזור מחלף קרית אתא, הצוות שלנו ערוך להגיע במהירות ולהעניק לכם שירות אדיב במחירים הוגנים.</p>
      </section>
    </main>
  );
}