import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22 עוקף קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8190", "longitude": "35.0630" },
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
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה דחופים כביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב בכביש 22? אנו מציעים שירותי גרירה וחילוץ מקצועיים, מהירים ובטוחים. 
            אנו מתמחים ברכבים פרטיים, מסחריים ורכבי 4x4. 
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
          <ul className="grid md:grid-cols-3 gap-8">
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">זמינות 24/7</h3>
              <p>אנחנו כאן בשבילכם בכל שעה, גם בלילה ובסופי שבוע, כדי שלא תשארו תקועים על עוקף קריות.</p>
            </li>
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">מחירים הוגנים</h3>
              <p>שירות מקצועי במחיר משתלם. קבלו הצעת מחיר שקופה בטלפון ללא הפתעות.</p>
            </li>
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">ציוד חדיש</h3>
              <p>צי גוררים מתקדם המבטיח גרירה בטוחה ושמירה על הרכב שלכם לאורך כל הדרך.</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}