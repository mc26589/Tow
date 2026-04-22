import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ רכב בחיפה והקריות",
    "areaServed": "Haifa and Krayot",
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
    "priceRange": "$",
    "serviceType": "Car recovery from mud and off-road towing"
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
          <p className="text-xl mb-8 leading-relaxed">
            נתקעתם עם הרכב בבוץ באזור הכרמל? אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4 שנתקעו בדרכי עפר או בשטחים בוציים. 
            חשוב לציין: אנו לא מספקים שירותי חילוץ לאופנועים. הצוות שלנו זמין 24/7 עם ציוד חילוץ מקצועי כדי להחזיר אתכם לכביש במהירות ובמחירים הוגנים.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition text-center"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בכרמל?</h2>
        <ul className="list-disc pr-6 space-y-4">
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>מומחיות בחילוץ רכבים מבוץ, חול ודרכי שטח באזור הכרמל.</li>
          <li>ציוד חילוץ מתקדם המותאם לרכבים פרטיים ומסחריים.</li>
          <li>שירות אדיב, מקצועי ומחירים הוגנים ללא הפתעות.</li>
        </ul>
      </section>
    </main>
  );
}