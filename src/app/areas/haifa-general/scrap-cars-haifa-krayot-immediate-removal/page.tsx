import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פינוי רכבים לפירוק חיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "34.9896"
    },
    "priceRange": "$",
    "serviceType": "Scrap Car Removal"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            נתקעתם עם רכב ישן, מושבת או רכב לאחר תאונה? אנו כאן כדי לסייע. אנו קונים רכבים לפירוק בחיפה והקריות ומבצעים פינוי מיידי ללא עלות נוספת. השירות שלנו מיועד לרכבים פרטיים, רכבים מסחריים ורכבי 4x4. חשוב לציין: אנו לא מטפלים באופנועים.
          </p>
          <div className="flex flex-wrap gap-4">
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

      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
          <ul className="space-y-4 text-lg">
            <li>✓ פינוי מיידי מהשטח בחיפה ובכל אזור הקריות.</li>
            <li>✓ הצעת מחיר הוגנת ומשתלמת במקום.</li>
            <li>✓ שירות מקצועי, אמין ומהיר לכל סוגי הרכבים (למעט אופנועים).</li>
            <li>✓ טיפול בכל הבירוקרטיה הנדרשת לפירוק רכב.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}