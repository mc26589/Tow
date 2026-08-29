import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה כרמל",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Car Recovery and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            נתקעתם בבוץ? אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח (4x4) באזור הכרמל. 
            שירות מהיר, מקצועי ובטוח 24/7. שימו לב: איננו מספקים שירותי חילוץ לאופנועים.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">למה לבחור בנו לחילוץ בכרמל?</h2>
          <ul className="grid md:grid-cols-3 gap-8">
            <li className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="font-bold text-xl mb-2">זמינות מלאה</h3>
              <p>אנו זמינים 24 שעות ביממה, 7 ימים בשבוע, לכל קריאת חילוץ באזור חיפה והכרמל.</p>
            </li>
            <li className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="font-bold text-xl mb-2">ציוד מקצועי</h3>
              <p>שימוש בציוד חילוץ מתקדם המותאם במיוחד לרכבים שנתקעו בבוץ ובדרכי עפר קשות.</p>
            </li>
            <li className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="font-bold text-xl mb-2">מחירים הוגנים</h3>
              <p>אנו מציעים שירות מקצועי במחירים הוגנים ושקופים. צרו קשר לקבלת הצעת מחיר בטלפון.</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}