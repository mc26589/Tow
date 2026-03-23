import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "קרית ים וקרית מוצקין" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "גרירת רכבים פרטיים, מסחריים ורכבי 4x4"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכב זול 24/7 מקרית ים לכיוון קרית מוצקין</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            נתקעתם עם הרכב? אנו כאן בשבילכם. שירות גרירה מקצועי, מהיר ובמחיר הוגן מקרית ים לכל יעד בקרית מוצקין. אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4. 
            (שימו לב: איננו מספקים שירותי גרירה לאופנועים).
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חייגו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">למה לבחור בנו?</h2>
          <ul className="grid md:grid-cols-3 gap-8">
            <li className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">זמינות 24/7</h3>
              <p>אנו עובדים מסביב לשעון, גם בשבתות וחגים, כדי להבטיח שלא תישאר תקוע.</p>
            </li>
            <li className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">מחירים הוגנים</h3>
              <p>שירות גרירה במחיר זול ומשתלם, ללא הפתעות מיותרות בדרך.</p>
            </li>
            <li className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">מקצועיות וניסיון</h3>
              <p>צוות מיומן עם ציוד גרירה מתקדם המבטיח שמירה על הרכב שלכם.</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}