import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ בכרמל | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעת בבוץ באזור הכרמל? אנו מתמחים בחילוץ רכבי שטח ופרטיים בדרכי עפר ובשטח. שירות מקצועי, זמין 24/7. לחצו לקבלת עזרה מיידית!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-region",
  },
};

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
            שירות מהיר, מקצועי ובטוח 24/7. ניתן להיעזר גם בשירותי <Link href="/areas/haifa-general/off-road-rescue-carmel-forest-danya" className="underline font-semibold">חילוץ שטח באזור דניה והיער</Link>. שימו לב: איננו מספקים שירותי חילוץ לאופנועים.
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
          <h2 className="text-3xl font-bold mb-12 text-center">שאלות נפוצות על חילוץ בכרמל</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">כמה זמן לוקח לכם להגיע?</h3>
              <p>באזור הכרמל והסביבה אנו משתדלים להגיע לכל קריאת חילוץ בזמן קצר ככל הניתן בהתאם לתנאי השטח.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">האם אתם מחלצים רכבים שננעלו בשטח?</h3>
              <p>כן, אנו מתמחים בחילוצי שטח ובוץ. לבעיות אחרות בכרמל, ניתן לבדוק גם <Link href="/areas/haifa-general/emergency-towing-horev-ahuza-haifa" className="text-blue-600 underline">גרירת חירום באזור חורב-אחוזה</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}