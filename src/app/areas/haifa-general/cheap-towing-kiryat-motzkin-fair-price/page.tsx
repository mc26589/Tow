import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בקריות",
    "areaServed": "Kiryat Motzkin",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8285",
      "longitude": "35.0705"
    },
    "serviceType": "Towing Service"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול בקרית מוצקין מחיר הוגן</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם עם הרכב? אנו מציעים שירותי גרירה מקצועיים, מהירים ובמחיר הוגן לתושבי קרית מוצקין והסביבה. 
            אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי שטח. 
            שימו לב: השירות אינו כולל גרירת אופנועים.
          </p>
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

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו?</h2>
          <ul className="space-y-4 text-lg">
            <li>✓ זמינות 24/7 לכל קריאה בקרית מוצקין</li>
            <li>✓ מחירים הוגנים ושקופים ללא הפתעות</li>
            <li>✓ צוות מיומן ומקצועי עם ציוד חדיש</li>
            <li>✓ התמחות ברכבים פרטיים, מסחריים ו-4x4</li>
          </ul>
        </div>
      </section>
    </main>
  );
}