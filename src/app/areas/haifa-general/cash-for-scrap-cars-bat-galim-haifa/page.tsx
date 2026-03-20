import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8268",
      "longitude": "34.9765"
    },
    "priceRange": "$",
    "serviceType": "Scrap car removal and towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">קניית רכבים לפירוק בבת גלים חיפה – פינוי מיידי ומזומן במקום</h1>
          <p className="text-xl mb-8">
            אנו מספקים שירות מהיר ומקצועי לפינוי רכבים לפירוק בבת גלים ובכל אזור חיפה. אם ברשותכם רכב ישן, מושבת או רכב שאינו בנסיעה, אנו נגיע לפנות אותו באופן מיידי. אנו מתמחים ברכבים פרטיים, מסחריים ורכבי 4x4 ומציעים תשלום הוגן במזומן. חשוב לציין: איננו מטפלים באופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי רכב בבת גלים?</h2>
        <ul className="space-y-4 text-lg">
          <li>✓ פינוי מיידי מהשטח בתיאום מראש.</li>
          <li>✓ תשלום הוגן במזומן עבור הרכב שלכם.</li>
          <li>✓ שירות מקצועי לכל סוגי הרכבים (פרטי, מסחרי, 4x4).</li>
          <li>✓ זמינות 24/7 לכל קריאה באזור חיפה והקריות.</li>
        </ul>
      </section>
    </main>
  );
}