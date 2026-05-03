import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פירוק רכבים חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "Car Scrap and Removal",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות</h1>
          <p className="text-xl mb-8">שירות מקצועי, מהיר והוגן לפינוי וקניית רכבים לפירוק. אנו קונים רכבים פרטיים, מסחריים ורכבי שטח.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפירוק רכבים?</h2>
          <p className="mb-4">אנו מציעים שירות אמין לתושבי חיפה והקריות. אנו קונים רכבים במצבים שונים: רכבים לאחר תאונה, רכבים ישנים, רכבים ללא טסט או רכבים תקולים.</p>
          <p className="font-semibold text-red-400">חשוב להבהיר: אנו לא מטפלים באופנועים. השירות מיועד לרכבים פרטיים, מסחריים ורכבי 4x4 בלבד.</p>
          <ul className="mt-6 space-y-2">
            <li>✓ הערכת מחיר הוגנת בטלפון</li>
            <li>✓ פינוי מהיר מהשטח</li>
            <li>✓ שירות מקצועי ואדיב</li>
          </ul>
        </div>
      </section>
    </main>
  );
}