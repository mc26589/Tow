import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Car Scrap and Towing"
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
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן? אנו קונים רכבים לפירוק במחירים הוגנים ובשירות מהיר בכל אזור חיפה והקריות.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפירוק רכבים?</h2>
          <p className="mb-4">אנו מתמחים בפינוי רכבים מכל הסוגים: רכבים פרטיים, מסחריים ורכבי שטח. השירות שלנו כולל גרירה ופינוי מקצועי ללא עלות נוספת.</p>
          <p className="text-red-400 font-semibold">הערה חשובה: אנו לא מטפלים באופנועים. השירות מיועד לרכבים בלבד.</p>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">השירותים שלנו כוללים:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>קניית רכבים לפירוק במצב נסיעה או מושבתים</li>
              <li>פינוי רכבים לאחר תאונות</li>
              <li>שירות מהיר בחיפה, קרית אתא, קרית ביאליק, קרית מוצקין וקרית ים</li>
              <li>הצעת מחיר הוגנת ומיידית בטלפון</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}