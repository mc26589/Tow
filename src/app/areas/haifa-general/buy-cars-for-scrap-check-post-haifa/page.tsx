import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וקניית רכבים לפירוק חיפה",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "35.0240"
    },
    "priceRange": "$",
    "serviceType": "Car Scrap and Towing Services"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">קונה רכבים לפירוק במצב נסיעה או תקול באזור צ'ק פוסט חיפה</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          מחפשים למכור רכב לפירוק באזור צ'ק פוסט? אנו מתמחים בפינוי וקניית רכבים מכל הסוגים: רכבים במצב נסיעה, רכבים תקולים, רכבים לאחר תאונה או רכבים ללא טסט. השירות שלנו מהיר, אמין ומקצועי. חשוב לציין: אנו מתמחים ברכבים פרטיים, מסחריים ורכבי 4x4 בלבד, ואיננו מטפלים באופנועים.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <WhatsAppCTA cityName="חיפה והקריות" />
          <a 
            href={`tel:+${BUSINESS_INFO.phone}`} 
            className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
          >
            התקשרו עכשיו להצעת מחיר
          </a>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי רכבים בצ'ק פוסט?</h2>
        <ul className="space-y-4 text-lg">
          <li>✅ <strong>זמינות מלאה:</strong> שירות מהיר באזור חיפה והקריות.</li>
          <li>✅ <strong>הוגנות:</strong> אנו מציעים הצעת מחיר הוגנת עבור הרכב שלכם בהתאם למצבו.</li>
          <li>✅ <strong>מקצועיות:</strong> פינוי בטוח ומסודר של רכבים תקולים או מושבתים.</li>
          <li>✅ <strong>טיפול בכל סוגי הרכבים:</strong> רכבים פרטיים, מסחריים ורכבי שטח (לא כולל אופנועים).</li>
        </ul>
      </section>
    </main>
  );
}