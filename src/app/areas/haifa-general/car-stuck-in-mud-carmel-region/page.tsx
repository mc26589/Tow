import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ באזור הכרמל | שירות 24/7",
  description: "נתקעתם בבוץ בכרמל? שירות חילוץ רכבים מקצועי ומהיר באזור חיפה והקריות. חילוץ רכבי 4x4 ופרטיים. זמינים לכל קריאה."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה כרמל",
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
    "serviceType": "Vehicle Recovery and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            נתקעתם בבוץ באזור הכרמל? אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4 שנתקעו בתנאי שטח. 
            הצוות המיומן שלנו מגיע במהירות לכל נקודה באזור חיפה והקריות עם ציוד חילוץ מקצועי.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בכרמל?</h2>
        <ul className="space-y-4 text-lg">
          <li>✓ זמינות מלאה 24/7 לכל קריאה באזור הכרמל.</li>
          <li>✓ ציוד חילוץ מתקדם המותאם לרכבי 4x4 ורכבים פרטיים.</li>
          <li>✓ מחירים הוגנים ושקיפות מלאה מול הלקוח.</li>
          <li>✓ הגעה מהירה לכל נקודה בשטח או בדרכי עפר.</li>
        </ul>
        <p className="mt-8 text-sm text-gray-600">
          *שימו לב: אנו מספקים שירותי חילוץ לרכבים פרטיים, מסחריים ורכבי שטח בלבד. איננו מספקים שירותי חילוץ לאופנועים.
        </p>
      </section>
    </main>
  );
}