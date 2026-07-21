import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פינוי וקניית רכבים לפירוק",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8156",
      "longitude": "35.0675"
    },
    "serviceType": "Car Scrap and Removal"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בקריות עם פינוי מיידי</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            נתקעתם עם רכב ישן, מושבת או רכב לאחר תאונה? אנו מציעים שירות מקצועי של קניית רכבים לפירוק באזור הקריות והסביבה. אנו מתחייבים לפינוי מיידי, שירות אדיב ומחירים הוגנים עבור הרכב שלכם.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
          <ul className="space-y-4 text-lg">
            <li>✓ פינוי מיידי מכל נקודה בקריות ובחיפה.</li>
            <li>✓ קניית רכבים פרטיים, מסחריים ורכבי 4x4.</li>
            <li>✓ שירות אמין, מהיר ומקצועי.</li>
            <li>✓ הצעת מחיר הוגנת בטלפון.</li>
          </ul>
          <p className="mt-8 text-sm text-gray-400">
            *שימו לב: אנו מתמחים ברכבים פרטיים ומסחריים בלבד. איננו מספקים שירותי פינוי או קנייה לאופנועים.
          </p>
        </div>
      </section>
    </main>
  );
}