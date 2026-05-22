import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ שטח חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa" },
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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">חילוץ שטח בוץ בכרמל: רכב תקוע? אנחנו בדרך אליך</h1>
          <p className="text-xl mb-8">חילוץ מקצועי, מהיר ובטוח לרכבים שנתקעו בבוץ. מחירים הוגנים ושירות ללא פשרות.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לחילוץ מיידי
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי חילוץ שטח בכרמל</h2>
        <p className="mb-4">נתקעתם בבוץ במהלך טיול או נסיעה בשטח הכרמל? הצוות שלנו ערוך ומוכן להגיע לכל נקודה עם ציוד חילוץ ייעודי. אנו מתמחים בחילוץ רכבי 4x4, רכבים פרטיים ומסחריים.</p>
        <p className="font-semibold text-red-600">שימו לב: איננו מספקים שירותי חילוץ או גרירה לאופנועים.</p>
        <div className="mt-8 p-6 bg-gray-50 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">למה לפנות אלינו?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>מענה מהיר לכל אזורי הכרמל והסביבה.</li>
            <li>ציוד חילוץ מתקדם לבוץ וחול.</li>
            <li>צוות מיומן ומנוסה בחילוצי שטח מורכבים.</li>
            <li>שקיפות מלאה והצעת מחיר הוגנת בטלפון.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}