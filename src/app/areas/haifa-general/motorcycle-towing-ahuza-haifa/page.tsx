import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
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
    "serviceType": "Towing and Roadside Assistance for Cars and 4x4"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">גרר לאופנוע כבד באחוזה חיפה - שירותי גרירה לרכבים ורכבי שטח</h1>
          <p className="text-lg mb-8">
            חשוב להבהיר: אנו מתמחים בשירותי גרירה וחילוץ מקצועיים לרכבים פרטיים, רכבים מסחריים ורכבי 4x4 בלבד. 
            נכון לעכשיו, איננו מספקים שירותי גרירה לאופנועים או אופנועים כבדים באזור אחוזה בחיפה. 
            אנו ממליצים לפנות לבעל מקצוע המתמחה בשינוע דו-גלגלי כדי להבטיח את שלמות הכלי שלכם.
          </p>
          <div className="flex gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה וחילוץ באזור חיפה</h2>
        <p>אנו מציעים שירותי גרירה מקצועיים לרכבים תקועים, רכבי שטח ורכבים מסחריים. אנו מקפידים על מחירים הוגנים ושירות מהיר לכל תושבי אחוזה והסביבה.</p>
      </section>
    </main>
  );
}