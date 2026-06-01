import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פירוק רכבים חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Car Scrap and Removal"
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
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן? אנו קונים רכבים לפירוק בחיפה והקריות במחירים הוגנים. שירות מהיר, אמין ומקצועי לכל סוגי הרכבים.</p>
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
          <p className="mb-4">אנו מתמחים בפינוי וקניית רכבים לפירוק מכל הסוגים: רכבים פרטיים, רכבים מסחריים ורכבי 4x4. אנו מציעים שירות מהיר באזור חיפה והקריות.</p>
          <p className="text-red-400 font-semibold">חשוב להבהיר: איננו מטפלים באופנועים. השירות מיועד לרכבים בלבד.</p>
          <ul className="mt-6 space-y-2">
            <li>✓ הצעת מחיר הוגנת בטלפון</li>
            <li>✓ פינוי מהיר מהשטח</li>
            <li>✓ שירות מקצועי ואמין</li>
          </ul>
        </div>
      </section>
    </main>
  );
}