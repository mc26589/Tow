import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
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
      "longitude": "34.9896"
    },
    "serviceType": "4x4 Mud Rescue and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ שטח 4x4 בבוץ: שירותי גרירה דחופים ביערות הכרמל וחיפה</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות המקצועי שלנו בדרך אליכם לחילוץ מהיר ובטוח.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">זקוקים לחילוץ דחוף בבוץ בדרכי יערות הכרמל?</h2>
        <p className="mb-4">אנו מספקים מענה מיידי ומקצועי לחילוץ רכבי 4x4 שנתקעו בבוץ עמוק, בשבילי יערות הכרמל ובאזורי השטח של חיפה והקריות. הצוות שלנו מצויד בציוד חילוץ מתקדם המותאם במיוחד לתנאי שטח קשים, ומבטיח חילוץ בטוח ללא נזק לרכבכם.</p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו לחילוץ שטח?</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות 24/7: אנחנו כאן בשבילכם בכל שעה.</li>
          <li>מומחיות ב-4x4: ניסיון רב בחילוץ רכבי שטח וג'יפים.</li>
          <li>ציוד מקצועי: כננות וציוד גרירה ייעודי.</li>
          <li>מחירים הוגנים: שירות מקצועי במחיר הוגן.</li>
        </ul>

        <div className="mt-8 p-6 bg-gray-100 rounded-lg">
          <p className="font-bold">חשוב לציין: אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4. איננו מספקים שירותי חילוץ או גרירה לאופנועים.</p>
        </div>
      </section>
    </main>
  );
}