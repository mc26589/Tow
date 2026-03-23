import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה קרית ים",
    "areaServed": "קרית ים",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$",
    "serviceType": "Towing Service",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.835",
      "longitude": "35.070"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכב פרטי זול 24/7 בקרית ים</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב בקרית ים? אנו כאן בשבילכם. אנו מתמחים בגרירת רכבים פרטיים, רכבים מסחריים ורכבי 4x4 במחירים הוגנים וזמינות מלאה מסביב לשעון. 
            חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="קרית ים" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה בקרית ים?</h2>
          <ul className="grid md:grid-cols-3 gap-8">
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">זמינות 24/7</h3>
              <p>לא משנה מה השעה, הצוות שלנו ערוך ומוכן להגיע אליכם לכל נקודה בקרית ים והסביבה.</p>
            </li>
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">מחירים הוגנים</h3>
              <p>אנו מאמינים בשקיפות ומציעים מחיר זול והוגן ללא הפתעות מיותרות.</p>
            </li>
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">מקצועיות ללא פשרות</h3>
              <p>ציוד גרירה חדיש וצוות מיומן המבטיח שהרכב שלכם יגיע ליעדו בבטחה.</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}