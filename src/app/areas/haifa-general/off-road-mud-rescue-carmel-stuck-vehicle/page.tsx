import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Off-road mud rescue and towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ שטח בוץ בכרמל: רכב תקוע? אנחנו בדרך אליך</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעת בבוץ בדרכי העפר של הכרמל? אנו מספקים שירותי חילוץ שטח מקצועיים לרכבים פרטיים, רכבי 4x4 ורכבים מסחריים. 
            חשוב לציין: אנו לא מבצעים חילוץ או גרירה לאופנועים. אנו מתמקדים במתן מענה מהיר ומקצועי לרכבים בעלי 4 גלגלים ומעלה.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בכרמל?</h2>
          <ul className="space-y-4 text-gray-700">
            <li>✓ זמינות 24/7 לכל קריאת חילוץ בשטח.</li>
            <li>✓ ציוד חילוץ מתקדם המתאים לתנאי בוץ ושטח קשים.</li>
            <li>✓ צוות מיומן שמכיר את כל דרכי העפר באזור הכרמל.</li>
            <li>✓ מחירים הוגנים ושקופים - הצעת מחיר מסודרת בטלפון.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}