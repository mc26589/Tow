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
    "serviceType": ["Car Towing", "Roadside Assistance", "4x4 Recovery"]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">גרר לאופנוע כבד באחוזה חיפה - שירותי גרירה לרכבים ורכבי שטח</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            חשוב להבהיר: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4. איננו מספקים שירותי גרירה לאופנועים. אם נתקעת עם רכבך באזור אחוזה, אנו כאן לשירותך 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשר עכשיו
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">למה לבחור בנו לשירותי גרירה בחיפה?</h2>
          <ul className="space-y-4 text-gray-300">
            <li>✓ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>✓ מענה מהיר לכל שכונות חיפה והקריות.</li>
            <li>✓ צוות מקצועי ומנוסה בחילוץ רכבים.</li>
            <li>✓ מחירים הוגנים ושקיפות מלאה.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}