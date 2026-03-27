import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי לאחר תאונה בכביש 22 עוקף קריות | שירות 24/7",
  description: "זקוקים לגרירת רכב חשמלי בכביש 22 עוקף קריות? שירות גרירה מקצועי, בטוח ומהיר לרכבים חשמליים לאחר תאונה. זמינים 24/7 לתושבי חיפה והקריות."
};

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
      "latitude": "32.8156",
      "longitude": "35.0567"
    },
    "priceRange": "$",
    "serviceType": "Electric Vehicle Accident Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרירת רכב חשמלי לאחר תאונה בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם? הצוות שלנו בדרך אליכם. שירות מקצועי לרכבים חשמליים בלבד.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">מענה מקצועי לרכבים חשמליים</h2>
        <p className="mb-4">אנו מתמחים בגרירת רכבים חשמליים, רכבים פרטיים, רכבי 4x4 ורכבים מסחריים. חשוב לציין: <strong>איננו מספקים שירותי גרירה לאופנועים.</strong></p>
        <p>השירות שלנו מתבצע תוך הקפדה על נהלי בטיחות מחמירים לרכבים חשמליים, במחירים הוגנים ובהתחייבות למקצועיות ללא פשרות.</p>
      </section>
    </main>
  );
}