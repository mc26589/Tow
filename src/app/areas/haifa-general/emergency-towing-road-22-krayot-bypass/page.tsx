import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22 עוקף קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "Emergency Towing and Roadside Assistance",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8156", "longitude": "35.0653" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר דחוף לכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8 max-w-3xl">
            נתקעתם בכביש 22? אנו מספקים שירותי גרירה וחילוץ דחופים לכל אורך כביש עוקף קריות. 
            הצוות המקצועי שלנו זמין 24/7 כדי להגיע אליכם במהירות, לחלץ את הרכב שלכם בבטחה ולפנות אותו לכל יעד שתבחרו.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה בכביש 22?</h2>
        <ul className="space-y-4 text-lg">
          <li>✓ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>✓ הגעה מהירה לכל נקודה בכביש 22 עוקף קריות.</li>
          <li>✓ שירות מקצועי לרכבים פרטיים, מסחריים ורכבי 4x4.</li>
          <li>✓ מחירים הוגנים ושקופים ללא הפתעות.</li>
          <li>✓ חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.</li>
        </ul>
      </section>
    </main>
  );
}