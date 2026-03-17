import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ קריות וחיפה",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8156", "longitude": "35.0653" },
    "priceRange": "$",
    "serviceType": "Emergency Electric Vehicle Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירות גרירה דחוף לרכב חשמלי שנתקע ללא סוללה בכביש 22 בקריות</h1>
          <p className="text-xl mb-8">נתקעתם ללא סוללה בכביש 22? אנו מספקים מענה מהיר ומקצועי לרכבים חשמליים. חשוב לציין: אנו מתמחים ברכבים פרטיים, מסחריים ו-4x4, ואיננו מספקים שירותי גרירה לאופנועים.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ הרכב החשמלי שלכם?</h2>
        <ul className="space-y-4 text-lg">
          <li>✓ זמינות 24/7 לכל אורך כביש 22 והקריות.</li>
          <li>✓ ציוד גרירה מתקדם המותאם למשקל ולמבנה של רכבים חשמליים.</li>
          <li>✓ צוות מיומן המכיר את נהלי הבטיחות של רכבים חשמליים.</li>
          <li>✓ שקיפות מלאה ומחירים הוגנים ללא הפתעות.</li>
        </ul>
      </section>
    </main>
  );
}