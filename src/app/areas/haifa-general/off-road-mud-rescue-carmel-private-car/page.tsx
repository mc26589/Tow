import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ שטח ובוץ בכרמל לרכב פרטי | הגעה מהירה 24/7",
  description: "נתקעתם בבוץ בכרמל? שירות חילוץ מקצועי לרכבים פרטיים ורכבי שטח בחיפה והסביבה. מחיר הוגן, מענה מיידי, הגעה מהירה. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/off-road-mud-rescue-carmel-private-car"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "חילוץ שטח ובוץ בכרמל",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$$,$",
    "serviceType": "Off-road mud rescue"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ שטח בוץ בכרמל לרכב פרטי - מגיעים אליכם!</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ באזור הכרמל? הצוות המקצועי שלנו בדרך אליכם לחילוץ בטוח ומהיר.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות חילוץ שטח מקצועי בכרמל</h2>
        <p className="mb-4">אנו מומחים בחילוץ רכבים פרטיים ששקעו בבוץ בדרכי עפר ובשטח בכרמל. אם אתם זקוקים לחילוץ מורכב יותר, תוכלו להיעזר בשירותי <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="text-blue-600 underline">4x4 mud recovery carmel forest haifa</Link> שלנו, או אם מדובר בחילוץ דחוף בדרכי היער, ראו <Link href="/areas/haifa-general/urgent-mud-rescue-4x4-towing-carmel-forest-trails-haifa" className="text-blue-600 underline">urgent mud rescue 4x4 towing carmel forest trails haifa</Link>.</p>
        <p>חשוב להדגיש: אנו מעניקים שירות לרכבים פרטיים, רכבי שטח ומסחריים. בטיחות הרכב שלכם היא בראש סדר העדיפויות שלנו במחיר הוגן.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על חילוץ שטח</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">כמה זמן לוקח לכם להגיע?</h3>
              <p>אנו משתדלים להגיע לכל נקודה בכרמל תוך זמן קצר מרגע הקריאה, בהתאם לתנאי השטח והמרחק.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם מחלצים גם אופנועים?</h3>
              <p>לא, אנו מתמחים בחילוץ רכבים פרטיים, רכבי שטח ומסחריים בלבד.</p>
            </div>
            <div>
              <h3 className="font-bold">מה טווח המחירים?</h3>
              <p>המחיר נקבע לפי מורכבות החילוץ ומיקום הרכב. אנו מקפידים על שקיפות ומחירים הוגנים לכל סוגי החילוצים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}