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
      "latitude": 32.762,
      "longitude": 35.015
    },
    "serviceType": "SUV Mud Rescue and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">חילוץ רכב שטח תקוע בבוץ באזור אוניברסיטת חיפה</h1>
          <p className="text-xl mb-8 leading-relaxed">
            נתקעתם עם ה-SUV בדרכי העפר או בשוליים הבוציים סביב אוניברסיטת חיפה? אנו מתמחים בחילוץ רכבי שטח, רכבי 4x4 ורכבים פרטיים ששקעו בבוץ. הצוות המיומן שלנו מכיר היטב את תוואי השטח של הכרמל ומגיע במהירות לכל נקודה באזור האוניברסיטה כדי להוציא אתכם בבטחה.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ באזור חיפה?</h2>
          <ul className="space-y-4 text-lg">
            <li>✓ זמינות 24/7 לכל קריאת חילוץ באזור האוניברסיטה והכרמל.</li>
            <li>✓ ציוד חילוץ מקצועי המותאם לרכבי שטח ו-SUV.</li>
            <li>✓ מחירים הוגנים ושירות אדיב ללא הפתעות.</li>
            <li>✓ מומחיות בחילוץ בתנאי שטח מורכבים.</li>
          </ul>
          <p className="mt-8 text-sm text-gray-400">
            *הערה: אנו מתמחים בחילוץ רכבים, רכבי שטח ורכבים מסחריים. איננו מספקים שירותי חילוץ או גרירה לאופנועים.
          </p>
        </div>
      </section>
    </main>
  );
}