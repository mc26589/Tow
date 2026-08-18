import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "כביש 22 עוקף קריות",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8190",
      "longitude": "35.0630"
    },
    "priceRange": "$",
    "serviceType": "Emergency Roadside Assistance and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר דחוף לרכב תקוע בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם בכביש 22? הצוות המקצועי שלנו זמין עבורכם 24/7 לחילוץ מהיר ובטוח. 
            אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4. 
            חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
          <ul className="grid md:grid-cols-3 gap-8">
            <li className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">זמינות מלאה</h3>
              <p>שירות 24 שעות ביממה, 7 ימים בשבוע, גם בחגים ובסופי שבוע.</p>
            </li>
            <li className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">מחירים הוגנים</h3>
              <p>אנו מאמינים בשקיפות מלאה. קבלו הצעת מחיר הוגנת ומשתלמת בטלפון.</p>
            </li>
            <li className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">מקצועיות ובטיחות</h3>
              <p>ציוד גרירה מתקדם וצוות מיומן שמכיר כל פינה בכביש עוקף קריות.</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}