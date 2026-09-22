import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ שטח ובוץ בכרמל | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ בדרכי העפר של הכרמל? מומחי חילוץ 4x4 זמינים 24/7. הגעה מהירה, ציוד מקצועי ושירות אמין במחיר הוגן. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/4x4-mud-rescue-carmel"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ שטח חיפה והכרמל",
    "areaServed": { "@type": "City", "name": "Haifa and Carmel" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "4x4 Mud Rescue"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ שטח ובוץ בכרמל – חילוץ 4x4 מקצועי ומהיר</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב בבוץ בדרכי העפר של הכרמל? אנו מתמחים בחילוץ רכבי שטח ששקעו בבוץ עמוק. 
            הצוות המיומן שלנו זמין 24/7 עם ציוד גרירה מתקדם כדי להחזיר אתכם לדרך בבטחה ובמינימום נזק.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והכרמל" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לחילוץ 24/7
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ שטח?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ מומחיות מוכחת בחילוץ רכבי 4x4 וג'יפים בתנאי שטח קשים.</li>
            <li>✓ זמינות מיידית לכל אזור הכרמל, דניה וסביבות חיפה.</li>
            <li>✓ ציוד חילוץ מתקדם הכולל כננות ורצועות מקצועיות.</li>
            <li>✓ שירותים משלימים זמינים כגון <Link href="/areas/haifa-general/off-road-mud-rescue-carmel-private-car" className="text-blue-400 underline">חילוץ רכב פרטי בבוץ בכרמל</Link> או <Link href="/areas/haifa-general/car-towing-rescue-ahuzah-haifa-not-motorcycles" className="text-blue-400 underline">שירותי גרירה בשכונת אחוזה</Link>.</li>
          </ul>
          
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על חילוץ שטח</h3>
          <div className="space-y-6">
            <div>
              <p className="font-bold">תוך כמה זמן תגיעו לחלץ אותי בכרמל?</p>
              <p className="text-gray-300">אנו פועלים בפריסה רחבה ומגיעים לכל נקודה בכרמל בזמן המהיר ביותר האפשרי. זמן ההגעה תלוי במיקום המדויק ובתנאי השטח.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם נותנים שירות גם מחוץ לדרכי העפר של הכרמל?</p>
              <p className="text-gray-300">בהחלט. אנו מספקים מענה כולל, כולל <Link href="/areas/haifa-general/fast-towing-flat-tire-road-22-check-post" className="text-blue-400 underline">שירותי גרירה מהירים בכביש 22</Link> וסיוע במקרים של <Link href="/areas/haifa-general/car-stuck-in-sand-bat-galim-haifa" className="text-blue-400 underline">רכב תקוע בחול בבת גלים</Link>.</p>
            </div>
            <div>
              <p className="font-bold">מה טווח המחירים לחילוץ שטח?</p>
              <p className="text-gray-300">המחיר נקבע בהתאם למורכבות החילוץ. אנו מקפידים על שקיפות מלאה ומחיר הוגן ללא הפתעות מיותרות.</p>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            *שימו לב: אנו מתמחים בחילוץ רכבים פרטיים ורכבי שטח. איננו מספקים שירותי חילוץ או גרירה לאופנועים.
          </p>
        </div>
      </section>
    </main>
  );
}