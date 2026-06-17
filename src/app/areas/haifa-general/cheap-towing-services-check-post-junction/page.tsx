import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
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
      "longitude": "35.0230"
    },
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה זולים בצומת צ'ק פוסט</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב בצומת צ'ק פוסט? אנו מציעים שירותי גרירה מקצועיים, מהירים ובמחירים הוגנים. 
            אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4. 
            חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors"
            >
              חייגו עכשיו להצעת מחיר
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בצומת צ'ק פוסט?</h2>
          <ul className="grid md:grid-cols-3 gap-8">
            <li className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">זמינות 24/7</h3>
              <p>אנחנו כאן בשבילכם בכל שעה, גם בסופי שבוע וחגים.</p>
            </li>
            <li className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">מחירים הוגנים</h3>
              <p>שירות גרירה איכותי במחיר משתלם ללא הפתעות.</p>
            </li>
            <li className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">מקצועיות וניסיון</h3>
              <p>צוות מיומן שמכיר את אזור חיפה והקריות על בוריו.</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}