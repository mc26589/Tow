import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Haifa",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8315",
      "longitude": "34.9755"
    },
    "priceRange": "$",
    "serviceType": "Emergency Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            גרר חירום לרכב תקוע בעלייה לסטלה מאריס חיפה – שירות מהיר 24/7
          </h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם בעלייה לסטלה מאריס? אל תסתכנו. צוות המומחים שלנו בדרך אליכם עם ציוד גרירה מתקדם לרכבים פרטיים, מסחריים ורכבי 4x4.
          </p>
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

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לחילוץ בסטלה מאריס?</h2>
          <p className="mb-4">העלייה לסטלה מאריס דורשת מיומנות וציוד מתאים. אנו מתמחים בחילוץ רכבים באזורים הרריים ותלולים בחיפה. חשוב לציין: אנו מעניקים שירות לרכבים פרטיים, מסחריים ורכבי שטח בלבד. איננו מספקים שירותי גרירה לאופנועים.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>הגעה מהירה לכל נקודה בסטלה מאריס ובחיפה.</li>
            <li>מחירים הוגנים ושקופים ללא הפתעות.</li>
            <li>צוות מנוסה בחילוץ רכבים תקועים בשיפועים חדים.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}