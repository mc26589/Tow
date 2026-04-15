import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים קריות",
    "areaServed": "Kiryat Bialik",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8250",
      "longitude": "35.0750"
    },
    "priceRange": "$",
    "serviceType": "Junk Car Removal and Auto Recycling"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קניית רכבים לפירוק בקרית ביאליק – פינוי מיידי מהשטח</h1>
          <p className="text-xl mb-8 max-w-2xl">
            זקוקים לפינוי רכב ישן או מושבת? אנו מתמחים בקניית רכבים לפירוק בקרית ביאליק עם שירות פינוי מהיר ומקצועי. אנו מטפלים ברכבים פרטיים, מסחריים ורכבי 4x4.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="קרית ביאליק" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לנציג
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שירות מקצועי לתושבי הקריות</h2>
          <p className="mb-4">אנו מציעים פתרון מלא לפינוי רכבים שאינם בשימוש. השירות כולל הגעה לכל נקודה בקרית ביאליק, הערכת מצב הרכב והצעת מחיר הוגנת במקום.</p>
          <div className="bg-red-50 border-r-4 border-red-500 p-4 mt-8">
            <p className="font-bold">חשוב לדעת:</p>
            <p>אנו מתמחים ברכבים בלבד. איננו מספקים שירותי פינוי או גרירה לאופנועים מכל סוג שהוא.</p>
          </div>
        </div>
      </section>
    </main>
  );
}