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
      "longitude": "35.0260"
    },
    "priceRange": "$",
    "serviceType": "Flatbed towing for electric vehicles"
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
            גרירת רכב חשמלי עם מצבר פרוק בצ'ק פוסט חיפה – שירות מקצועי ומיידי
          </h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם עם רכב חשמלי באזור הצ'ק פוסט? אנו מספקים שירותי גרירה על גבי משטח (Flatbed) המותאמים במיוחד לרכבים חשמליים, תוך שמירה על בטיחות הרכב שלכם.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לגרירת רכב חשמלי?</h2>
        <ul className="list-disc pr-6 space-y-2">
          <li>שימוש בגרר משטח בלבד למניעת נזקים למערכת ההנעה.</li>
          <li>זמינות 24/7 באזור חיפה, הצ'ק פוסט והקריות.</li>
          <li>מומחיות בחילוץ רכבים חשמליים, היברידיים ורכבי 4x4.</li>
          <li>מחירים הוגנים ושירות אדיב ומקצועי.</li>
        </ul>
        <p className="mt-6 text-sm text-gray-600">
          *שימו לב: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח. איננו מספקים שירותי גרירה לאופנועים.
        </p>
      </section>
    </main>
  );
}