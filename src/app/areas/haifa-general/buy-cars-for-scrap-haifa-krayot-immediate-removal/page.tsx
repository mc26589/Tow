import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים לפירוק",
    "areaServed": ["Haifa", "Krayot"],
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
    "serviceType": "Car Scrap Removal and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות – פינוי מיידי ומקצועי</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם עם רכב ישן, מושבת או רכב לאחר תאונה? אנו מספקים שירות קניית רכבים לפירוק בחיפה והקריות עם פינוי מיידי. 
            אנו מתמחים ברכבים פרטיים, מסחריים ורכבי 4x4. 
            שימו לב: השירות אינו כולל אופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
          <ul className="space-y-4 text-lg">
            <li>✓ פינוי מיידי מהשטח בחיפה ובכל אזור הקריות.</li>
            <li>✓ הצעת מחיר הוגנת ומשתלמת בטלפון.</li>
            <li>✓ שירות מקצועי, אמין ומהיר ללא כאבי ראש.</li>
            <li>✓ טיפול בכל סוגי הרכבים (פרטי, מסחרי, 4x4).</li>
          </ul>
        </div>
      </section>
    </main>
  );
}