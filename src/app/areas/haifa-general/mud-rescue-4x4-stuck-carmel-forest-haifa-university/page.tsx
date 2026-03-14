import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ שטח חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7625",
      "longitude": "35.0150"
    },
    "priceRange": "$",
    "serviceType": "4x4 Mud Rescue and Off-road Recovery"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">חילוץ שטח 4x4 בבוץ: תקועים ביערות הכרמל ליד אוניברסיטת חיפה?</h1>
          <p className="text-lg mb-8">
            נתקעתם בבוץ באזור יערות הכרמל? הצוות המקצועי שלנו מתמחה בחילוצי 4x4 ורכבים מסחריים בתנאי שטח קשים. 
            אנו מגיעים במהירות לכל נקודה באזור אוניברסיטת חיפה והסביבה. 
            חשוב לציין: אנו מתמחים ברכבים ורכבי שטח בלבד ואיננו מספקים שירותי חילוץ לאופנועים.
          </p>
          <div className="flex flex-col gap-4 max-w-sm">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black font-bold py-4 px-6 rounded-lg text-center hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לחילוץ ביערות הכרמל?</h2>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות 24/7 לכל קריאת חילוץ בשטח.</li>
          <li>ציוד חילוץ מתקדם המותאם לבוץ עמוק ותנאי שטח מאתגרים.</li>
          <li>ניסיון רב בחילוץ רכבי 4x4 באזור הכרמל.</li>
          <li>מחירים הוגנים ושירות אדיב ומקצועי.</li>
        </ul>
      </section>
    </main>
  );
}