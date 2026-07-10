import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ שטח ורכב תקוע בבוץ בכרמל | שירות 24/7 מהיר",
  description: "נתקעתם בבוץ בדרכי הכרמל? חילוץ שטח מקצועי לרכבים תקועים באזור חיפה והסביבה. מענה מהיר, מחיר הוגן ושירות 24/7. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/off-road-mud-rescue-carmel-stuck-vehicle",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "חילוץ שטח וגרירה בחיפה והכרמל",
    "areaServed": { "@type": "City", "name": "Haifa and Carmel" },
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
          <p className="text-xl mb-8">חילוץ מקצועי, מהיר ובטוח לרכבים ששקעו בבוץ באזור הכרמל והסביבה. הגעה מהירה לכל נקודה.</p>
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
        <p className="mb-4">נתקעתם בבוץ בדרכי העפר של הכרמל? הצוות שלנו זמין עבורכם 24/7. אנו מתמחים ב-<Link href="/areas/haifa-general/car-extraction-from-mud-carmel-reserve-haifa" className="text-blue-600 underline">חילוץ רכב תקוע בבוץ באזור הכרמל</Link> ונותנים מענה לרכבי 4x4, רכבים פרטיים ומסחריים.</p>
        <p className="mb-4">אנו מקפידים על מחירים הוגנים ושירות אדיב. אם אתם זקוקים לשירותי גרירה נוספים באזור, תוכלו להתרשם משירותינו כגון <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600 underline">גרירה במחיר משתלם בצ'ק פוסט</Link>.</p>
        
        <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות</h3>
            <div className="space-y-4">
                <div>
                    <h4 className="font-bold">כמה זמן לוקח לכם להגיע לחילוץ בכרמל?</h4>
                    <p>אנו משתדלים להגיע לכל נקודה בכרמל תוך זמן קצר ככל הניתן בהתאם לתנאי השטח והתנועה.</p>
                </div>
                <div>
                    <h4 className="font-bold">האם אתם מחלצים אופנועים?</h4>
                    <p>חשוב לציין: השירות שלנו מיועד לרכבים פרטיים, מסחריים ו-4x4. איננו מספקים שירותי חילוץ לאופנועים.</p>
                </div>
            </div>
        </div>

        <div className="mt-8 p-6 bg-gray-900 text-white rounded-xl">
          <h3 className="text-2xl font-bold mb-4">זקוקים להצעת מחיר או חילוץ מיידי?</h3>
          <p>צרו איתנו קשר בטלפון או בוואטסאפ לקבלת מענה מהיר ומקצועי.</p>
        </div>
      </section>
    </main>
  );
}