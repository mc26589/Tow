import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ רכב בחיפה והקריות",
    "areaServed": { "@type": "Place", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Off-road mud rescue and towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">חילוץ שטח בוץ בכרמל רכב תקוע</h1>
          <p className="text-xl mb-8">
            נתקעת בבוץ בדרכי העפר של הכרמל? אנו מספקים שירותי חילוץ מקצועיים לרכבים פרטיים, רכבי 4x4 ומסחריות. 
            חשוב לציין: אנו לא מספקים שירותי חילוץ לאופנועים. אנו מתמחים בחילוץ רכבים ששקעו בבוץ עמוק, 
            תוך שמירה על שלמות הרכב ובטיחות הנוסעים.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold text-center"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לחילוץ בכרמל?</h2>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות מלאה 24/7 לכל אזור הכרמל והקריות.</li>
          <li>ציוד חילוץ מתקדם המתאים לתנאי שטח ובוץ.</li>
          <li>צוות מיומן ומנוסה בחילוצי שטח מורכבים.</li>
          <li>מחירים הוגנים ושירות אדיב.</li>
        </ul>
      </section>
    </main>
  );
}