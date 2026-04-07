import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ רכב בחיפה והקריות",
    "areaServed": { "@type": "Place", "name": "אזור הכרמל, חיפה והקריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "חילוץ רכב תקוע בבוץ"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? צוות המומחים שלנו זמין 24/7 לחילוץ מהיר, בטוח ומקצועי באזור הכרמל והסביבה. אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ו-4x4. (הערה: איננו מספקים שירותי חילוץ לאופנועים).</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לחילוץ באזור הכרמל?</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>ציוד חילוץ מתקדם המותאם לתנאי שטח ובוץ.</li>
          <li>צוות מיומן המכיר היטב את דרכי הכרמל.</li>
          <li>מחירים הוגנים ושירות אדיב ללא הפתעות.</li>
        </ul>
      </section>
    </main>
  );
}