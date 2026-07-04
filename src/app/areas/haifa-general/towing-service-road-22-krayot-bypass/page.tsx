import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בכביש 22 עוקף קריות | שירות 24/7",
  description: "נתקעתם בכביש 22 עוקף קריות? צוות חילוץ מקצועי בדרך אליכם. שירות מהיר לרכבים פרטיים ומסחריים. זמינות מלאה 24/7."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ רכב חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22 עוקף קריות" },
    "priceRange": "$",
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8156", "longitude": "35.0653" },
    "serviceType": "חילוץ רכב תקוע"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב בכביש 22? אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4. 
            חשוב לציין: איננו מספקים שירותי חילוץ לאופנועים. 
            אנו מציעים מחירים הוגנים ושירות מהיר לכל אורך עוקף קריות.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold text-lg text-center hover:bg-gray-100 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בכביש 22?</h2>
        <ul className="space-y-4 text-lg">
          <li>✓ זמינות מלאה 24/7 לכל קריאה בכביש 22.</li>
          <li>✓ הגעה מהירה לכל נקודה לאורך עוקף קריות.</li>
          <li>✓ צוות מיומן ומקצועי עם ציוד חילוץ מתקדם.</li>
          <li>✓ שקיפות מלאה ומחירים הוגנים ללא הפתעות.</li>
        </ul>
      </section>
    </main>
  );
}