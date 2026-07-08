import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "priceRange": "$",
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "serviceType": "Off-road vehicle recovery and mud rescue"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ שטח בוץ בכרמל: רכב תקוע? אנחנו בדרך אליך</h1>
          <p className="text-xl mb-8">חילוץ מקצועי, מהיר ובטוח לרכבים ששקעו בבוץ באזור הכרמל והסביבה.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי חילוץ שטח מומחים</h2>
        <p className="mb-4">נתקעתם בבוץ בדרכי העפר של הכרמל? הצוות שלנו זמין עבורכם 24/7. אנו מציעים שירותי חילוץ מקצועיים לרכבי 4x4, רכבים פרטיים ומסחריים.</p>
        <p className="mb-4">אנו מקפידים על מחירים הוגנים ושירות אדיב. שימו לב: השירות אינו כולל חילוץ אופנועים.</p>
        <div className="mt-8 p-6 bg-gray-900 text-white rounded-xl">
          <h3 className="text-2xl font-bold mb-4">זקוקים להצעת מחיר או חילוץ מיידי?</h3>
          <p>צרו איתנו קשר בטלפון או בוואטסאפ לקבלת מענה מהיר.</p>
        </div>
      </section>
    </main>
  );
}