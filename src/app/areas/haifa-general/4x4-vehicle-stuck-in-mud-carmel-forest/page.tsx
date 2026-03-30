import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ רכב חיפה והקריות",
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
      "latitude": "32.7333",
      "longitude": "35.0000"
    },
    "serviceType": "4x4 Off-road recovery"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">חילוץ רכב 4X4 שקוע בבוץ יערות הכרמל</h1>
          <p className="text-xl mb-8">
            נתקעתם עם רכב השטח בבוץ העמוק של יערות הכרמל? אנו מספקים שירותי חילוץ שטח מקצועיים, מהירים ובטוחים לכל סוגי רכבי ה-4X4. 
            הצוות שלנו מצויד בציוד גרירה וחילוץ מתקדם המותאם לתנאי שטח קשים, ומגיע לכל נקודה מבודדת באזור הכרמל והסביבה.
          </p>
          <div className="flex gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בשטח?</h2>
        <ul className="list-disc pr-6 space-y-4">
          <li>זמינות מלאה 24/7 לכל קריאת חילוץ ביערות הכרמל.</li>
          <li>ציוד חילוץ ייעודי לרכבי 4X4 ששקעו בבוץ עמוק.</li>
          <li>צוות מיומן בעל ניסיון רב בחילוצי שטח מורכבים.</li>
          <li>מחירים הוגנים ושירות אדיב ללא הפתעות.</li>
        </ul>
        <p className="mt-6 text-gray-700">
          חשוב לציין: אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח (4X4). איננו מספקים שירותי חילוץ או גרירה לאופנועים.
        </p>
      </section>
    </main>
  );
}