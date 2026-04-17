import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ רכב שקוע בחול חוף בת גלים חיפה | שירות 24/7",
  description: "נתקעתם בחול בחוף בת גלים? אנו מציעים שירותי חילוץ רכב מקצועיים, מהירים ובטוחים. זמינים 24/7 לכל סוגי הרכבים."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ רכב חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8319", "longitude": "34.9756" },
    "priceRange": "$",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב שקוע בחול חוף בת גלים חיפה</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב בחולות חוף בת גלים? אל תנסו להמשיך ללחוץ על הגז כדי לא לשקוע עמוק יותר. 
            אנו מתמחים בחילוץ רכבים פרטיים, רכבי שטח ורכבים מסחריים ששקעו בחול. 
            הצוות שלנו מצויד בציוד חילוץ מתקדם ומגיע לכל נקודה בחוף בת גלים במהירות שיא.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בחוף בת גלים?</h2>
          <ul className="space-y-4 text-gray-700">
            <li>✓ זמינות מלאה 24/7 לכל מקרי החירום בחוף.</li>
            <li>✓ ניסיון רב בחילוץ רכבים מתוואי חול עמוק.</li>
            <li>✓ מחירים הוגנים ושקיפות מלאה מול הלקוח.</li>
            <li>✓ שירות מקצועי לרכבים פרטיים ורכבי 4x4.</li>
          </ul>
          <p className="mt-6 text-sm text-gray-500">
            *שימו לב: אנו מספקים שירותי חילוץ לרכבים, רכבים מסחריים ורכבי שטח בלבד. איננו מספקים שירותי חילוץ לאופנועים.
          </p>
        </div>
      </section>
    </main>
  );
}