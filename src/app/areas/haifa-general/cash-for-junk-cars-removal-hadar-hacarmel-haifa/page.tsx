import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday-Sunday", "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8095", "longitude": "34.9955" },
    "priceRange": "$",
    "serviceType": "Junk Car Removal"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">פינוי רכבים לפירוק בהדר הכרמל חיפה – קניית רכבים ללא תנועה במזומן</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            נתקעתם עם רכב ישן או מושבת בהדר הכרמל? אנו מתמחים בפינוי רכבים ללא תנועה, רכבים לפירוק ורכבים לאחר תאונה. השירות שלנו מהיר, מקצועי ומותאם לתושבי חיפה והקריות. שימו לב: אנו מתמחים ברכבים פרטיים, מסחריים ורכבי 4x4 בלבד. איננו מספקים שירותי פינוי לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
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
            <li>✓ פינוי מהיר ומקצועי מכל נקודה בהדר הכרמל.</li>
            <li>✓ הצעת מחיר הוגנת במזומן עבור הרכב שלכם.</li>
            <li>✓ טיפול בכל סוגי הרכבים (פרטיים, מסחריים, 4x4).</li>
            <li>✓ שירות זמין 24/7 לכל צורך דחוף.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}