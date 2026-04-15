import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרר לאופנוע כבד באחוזה חיפה | שירותי גרירה לרכבים",
  description: "מחפשים גרר באחוזה חיפה? אנו מתמחים בגרירת רכבים, רכבים מסחריים ורכבי שטח. שימו לב: איננו מספקים שירותי גרירה לאופנועים."
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
      "latitude": "32.7940",
      "longitude": "34.9896"
    },
    "priceRange": "$",
    "serviceType": "Car Towing and Roadside Assistance"
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
          <p className="text-xl mb-8">חשוב לדעת: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4 בלבד. איננו מספקים שירותי גרירה לאופנועים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לשירות גרירה
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים באחוזה</h2>
          <p className="mb-4">אם נתקעת עם רכבך באזור אחוזה, אנו כאן כדי לספק מענה מהיר ומקצועי. אנו מציעים שירותי גרירה 24/7 במחירים הוגנים לכל סוגי הרכבים (למעט אופנועים).</p>
          <ul className="list-disc list-inside space-y-2">
            <li>חילוץ רכבים תקועים 24/7</li>
            <li>גרירת רכבים מסחריים ורכבי שטח</li>
            <li>שירות אמין ומקצועי בחיפה והקריות</li>
            <li>הצעת מחיר הוגנת בטלפון</li>
          </ul>
        </div>
      </section>
    </main>
  );
}