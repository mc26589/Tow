import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "חילוץ רכבים בחיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Off-road vehicle recovery and towing"
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
          <p className="text-xl mb-8">נתקעתם בבוץ בכרמל? צוות החילוץ המקצועי שלנו זמין עבורכם 24/7 לחילוץ מהיר ובטוח.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי חילוץ שטח מקצועיים</h2>
        <p className="mb-4">אם הרכב שלכם נתקע בבוץ באזורי השטח של הכרמל, אנו כאן כדי לסייע. אנו מתמחים בחילוץ רכבי 4x4, רכבים פרטיים ומסחריים בתנאי שטח מאתגרים.</p>
        <p className="mb-4"><strong>שימו לב:</strong> אנו מתמחים בחילוץ רכבים בלבד ואיננו מספקים שירותי חילוץ לאופנועים.</p>
        <p>אנו מציעים שירות אמין במחירים הוגנים. צרו קשר לקבלת הצעת מחיר בטלפון והגעה מהירה לנקודה שלכם.</p>
      </section>
    </main>
  );
}