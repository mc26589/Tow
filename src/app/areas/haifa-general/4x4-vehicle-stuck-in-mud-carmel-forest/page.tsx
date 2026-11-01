import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ 4X4 ביערות הכרמל | חילוץ שטח 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ ביערות הכרמל? אנו מציעים חילוץ 4X4 מקצועי, מהיר ובטוח 24/7. הגעה מהירה לכל נקודה בכרמל כולל אזור אוניברסיטת חיפה. התקשרו עכשיו לחילוץ!",
  alternates: {
    canonical: "/areas/haifa-general/4x4-vehicle-stuck-in-mud-carmel-forest",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ רכב חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7333",
      "longitude": "35.0000"
    },
    "serviceType": "4x4 Off-road recovery"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">חילוץ רכב 4X4 שקוע בבוץ ביערות הכרמל</h1>
          <p className="text-xl mb-8">
            נתקעתם עם רכב השטח בבוץ העמוק של יערות הכרמל? אנו מספקים שירותי חילוץ שטח מקצועיים ומהירים. צוות המומחים שלנו מנוסה במיוחד בחילוצים באזור <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-forest-near-haifa-university" className="underline">אוניברסיטת חיפה</Link> והסביבה. אנו זמינים 24 שעות ביממה לכל צורך, כולל חילוץ רכבים פרטיים שנתקעו בדרכי עפר.
          </p>
          <div className="flex gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בשטח?</h2>
        <ul className="list-disc pr-6 space-y-4">
          <li>זמינות מלאה 24 שעות ביממה לכל קריאה ביערות הכרמל.</li>
          <li>ציוד חילוץ ייעודי לרכבי 4X4 ורכבים פרטיים ששקעו בבוץ.</li>
          <li>מחיר הוגן ושקיפות מלאה ללא הפתעות בחיוב.</li>
          <li>הגעה מהירה לשבילים מורכבים ודרכי עפר צרות בכרמל.</li>
        </ul>
        <p className="mt-6 text-gray-700">
          אנו מציעים פתרונות חילוץ מגוונים, החל מניסור או גרירה בסיסית ועד לחילוץ מורכב בשטח. במידה ואתם זקוקים גם לשירותי <Link href="/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing" className="text-blue-600">גרירת רכב זולה באחוזה</Link>, אנו מספקים שירותים משלימים באזור.
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ שטח</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">האם אתם מחלצים רכבים ששקעו עמוק בבוץ?</h3>
              <p>כן, אנו מצוידים בכננות וציוד עזר המיועד בדיוק למצבים אלו של רכב שטח ששקע בבוץ ביערות הכרמל.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">כמה זמן לוקח להגיע לכרמל?</h3>
              <p>זמן ההגעה משתנה בהתאם למיקומכם המדויק, אך אנו עושים מאמץ להגיע תוך זמן קצר מרגע הקריאה.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">מה לעשות אם נתקעתי עם הרכב בדרכים מרכזיות באזור?</h3>
              <p>אם נתקעתם מחוץ לשטח, אנו נותנים מענה גם בכבישים המהירים, כגון <Link href="/areas/haifa-general/emergency-towing-road-22-krayot" className="text-blue-600">גרירת רכב בכביש 22</Link> ובכל צירי התנועה הראשיים של חיפה והקריות.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}