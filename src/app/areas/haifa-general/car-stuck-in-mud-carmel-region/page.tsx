import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ באזור הכרמל | שירות 24/7",
  description: "נתקעתם בבוץ באזור הכרמל? צוות חילוץ מקצועי זמין עבורכם 24/7. שירות מהיר, אמין ומחירים הוגנים לכל סוגי הרכבים."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ רכב בחיפה והקריות",
    "areaServed": { "@type": "Place", "name": "אזור הכרמל, חיפה" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "חילוץ רכב תקוע בבוץ"
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
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם בבוץ באזור הכרמל? אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח (4x4). 
            חשוב לציין: איננו מספקים שירותי חילוץ לאופנועים. 
            הצוות שלנו זמין 24/7 עם ציוד חילוץ מתקדם למתן מענה מהיר ומקצועי.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ באזור הכרמל?</h2>
        <ul className="space-y-4 text-lg">
          <li>✓ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>✓ ניסיון רב בחילוץ רכבים תקועים בבוץ ובשטח הררי.</li>
          <li>✓ מחירים הוגנים ושקיפות מלאה מול הלקוח.</li>
          <li>✓ הגעה מהירה לכל נקודה באזור הכרמל והסביבה.</li>
        </ul>
      </section>
    </main>
  );
}