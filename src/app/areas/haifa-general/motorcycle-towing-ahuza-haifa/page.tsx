import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
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
      "latitude": "32.7940",
      "longitude": "34.9896"
    },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר לאופנוע כבד באחוזה חיפה - שירותי גרירה מקצועיים לרכבים</h1>
          <p className="text-xl mb-8">אנו מתמחים בגרירת רכבים, רכבי שטח ומסחריות. שימו לב: איננו מספקים שירותי גרירה לאופנועים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">שירותי גרירה וחילוץ באחוזה</h2>
          <p className="mb-4">
            נתקעת עם הרכב באזור אחוזה? הצוות שלנו ערוך ומוכן להעניק לך שירות מקצועי, מהיר ואמין 24 שעות ביממה. 
            אנו מבינים את החשיבות של הגעה מהירה ללקוח ומציעים פתרונות גרירה מתקדמים לכל סוגי הרכבים הפרטיים והמסחריים.
          </p>
          <p className="font-semibold text-red-600">
            הערה חשובה: השירות שלנו מיועד לרכבים בלבד. איננו ערוכים לשינוע אופנועים או אופנועים כבדים.
          </p>
          <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">למה לבחור בנו?</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>זמינות מלאה 24/7 בכל אזור חיפה והקריות</li>
              <li>ציוד גרירה חדיש ומתוחזק</li>
              <li>צוות מיומן ומקצועי</li>
              <li>מחירים הוגנים ושקופים</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}