import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פינוי וקניית רכבים לפירוק",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday", "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "Car Scrapping and Removal",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            אנו מציעים שירות מקצועי ומהיר לקניית רכבים לפירוק בחיפה והקריות. אם הרכב שלכם מושבת, עבר תאונה או שפשוט הגיע הזמן להיפרד ממנו, אנו נגיע לפנות אותו באופן מיידי. אנו מתמחים ברכבים פרטיים, מסחריים ורכבי 4x4. חשוב לציין: איננו מטפלים באופנועים.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
          <ul className="space-y-4 text-lg">
            <li>✓ פינוי מיידי מהשטח בחיפה והקריות.</li>
            <li>✓ הצעת מחיר הוגנת ומקצועית בטלפון.</li>
            <li>✓ שירות אמין, מהיר וללא בירוקרטיה מיותרת.</li>
            <li>✓ טיפול בכל סוגי הרכבים (פרטי, מסחרי, 4x4).</li>
          </ul>
        </div>
      </section>
    </main>
  );
}