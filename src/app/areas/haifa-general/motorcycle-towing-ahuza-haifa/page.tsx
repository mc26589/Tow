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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר לאופנוע כבד באחוזה חיפה - שירותי גרירה לרכבים ורכבי שטח</h1>
          <p className="text-xl mb-8">חשוב לדעת: אנו מתמחים בגרירת רכבים, רכבים מסחריים ורכבי 4x4 בלבד. איננו מספקים שירותי גרירה לאופנועים.</p>
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

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים בחיפה</h2>
          <p className="mb-4">נתקעת עם הרכב באזור אחוזה? הצוות שלנו זמין 24/7 למתן מענה מהיר ומקצועי לכל סוגי הרכבים (פרטיים, מסחריים ושטח).</p>
          <p>אנו מציעים שירות אמין, מחירים הוגנים וזמינות מלאה בכל רחבי חיפה והקריות.</p>
        </div>
      </section>
    </main>
  );
}