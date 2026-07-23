import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה קריות",
    "areaServed": { "@type": "Place", "name": "כביש 22, קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8191", "longitude": "35.0633" },
    "priceRange": "$",
    "serviceType": "Emergency Roadside Assistance and Towing"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">שירותי גרירה דחופים בכביש 22 קריות</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            נתקעתם בכביש עוקף קריות? אנו כאן בשבילכם 24/7 עם מענה מהיר, מקצועי ובמחירים הוגנים. שירות גרירה לרכבים פרטיים, מסחריים ו-4x4.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
        <ul className="space-y-4 text-neutral-300">
          <li>✓ הגעה מהירה לכל נקודה לאורך כביש 22.</li>
          <li>✓ צוות מיומן ומקצועי עם ציוד גרירה מתקדם.</li>
          <li>✓ שירות אמין במחירים הוגנים ללא הפתעות.</li>
          <li>✓ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
        </ul>
        <p className="mt-8 text-sm text-neutral-500">
          *הערה: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח. איננו מספקים שירותי גרירה לאופנועים.
        </p>
      </section>
    </main>
  );
}