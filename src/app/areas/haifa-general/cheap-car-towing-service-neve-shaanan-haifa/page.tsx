import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירות גרירה נווה שאנן חיפה",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": 32.7833, "longitude": 35.0000 },
    "priceRange": "$",
    "serviceType": "Car Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירות גרירת רכב זול בנווה שאנן חיפה 24/7</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב בנווה שאנן? אנו מספקים שירותי גרירה מקצועיים, מהירים ובמחירים הוגנים ללא תחרות. 
            הצוות שלנו זמין 24 שעות ביממה, 7 ימים בשבוע, כדי להבטיח שתחזרו לשגרה במהירות. 
            אנו מתמחים בגרירת רכבים פרטיים, רכבים מסחריים ורכבי 4x4. 
            חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition text-center"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירות גרירה בנווה שאנן?</h2>
          <ul className="grid md:grid-cols-3 gap-8">
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">זמינות מלאה</h3>
              <p>שירות 24/7 לכל תרחיש, גם בשעות הקטנות של הלילה ובסופי שבוע.</p>
            </li>
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">מחירים הוגנים</h3>
              <p>אנו מאמינים בשקיפות מלאה ומציעים הצעת מחיר משתלמת בטלפון.</p>
            </li>
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">מקצועיות וניסיון</h3>
              <p>צוות מיומן המכיר היטב את כל רחובות נווה שאנן והסביבה.</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}