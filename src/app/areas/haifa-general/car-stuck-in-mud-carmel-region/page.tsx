import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ באזור הכרמל | הגעה מהירה 24/7",
  description: "נתקעתם עם הרכב בבוץ בכרמל? צוות מקצועי לחילוץ רכבים ורכבי 4x4. שירות זמין 24/7 במחיר הוגן. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-region",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה כרמל",
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
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל</h1>
          <p className="text-lg mb-8">
            נתקעתם עם הרכב בבוץ באזור הכרמל? אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4 שנתקעו בדרכי עפר או בשטחים בוציים. 
            בין אם אתם זקוקים ל-<Link href="/areas/haifa-general/4x4-vehicle-stuck-in-mud-carmel-forest" className="underline">חילוץ רכב 4x4 בשטח</Link> או לשירותי גרירה כלליים, הצוות שלנו זמין 24/7.
            חשוב לציין: אנו לא מספקים שירותי חילוץ לאופנועים. נשמח לסייע בהחזרת הרכב שלכם לכביש במהירות ובבטחה.
          </p>
          <div className="flex flex-col gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black font-bold py-3 px-6 rounded-lg text-center hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ מיידי
            </a>
          </div>
        </div>
      </section>
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לחילוץ בכרמל?</h2>
        <ul className="list-disc pr-6 space-y-2 mb-8">
          <li>זמינות מלאה 24/7 לכל אזור הכרמל, כולל <Link href="/areas/haifa-general/car-extraction-from-mud-carmel-reserve-haifa" className="text-blue-600">חילוץ רכב מבוץ בשמורת הכרמל</Link>.</li>
          <li>ציוד חילוץ מתקדם ורכבי שטח המותאמים לתוואי הייחודי של אזור הכרמל והאוניברסיטה.</li>
          <li>שירות מקצועי, מהיר וקרוב לבית, עם התמחות ב-<Link href="/areas/haifa-general/4x4-rescue-mud-carmel-forest-haifa-university" className="text-blue-600">חילוץ בדרכי עפר ליד אוניברסיטת חיפה</Link>.</li>
          <li>מחירים הוגנים ושקיפות מלאה מול הלקוח.</li>
        </ul>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על חילוץ רכב בבוץ</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">כמה זמן לוקח לכם להגיע לחילוץ בכרמל?</h3>
              <p>זמן ההגעה משתנה בהתאם למיקום המדויק, אך אנו שואפים להגיע במהירות האפשרית לכל נקודה באזור הכרמל.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם מחלצים גם רכבי 4x4 תקועים?</h3>
              <p>כן, אנו מומחים בחילוץ רכבי שטח ו-4x4. למידע נוסף ניתן לבדוק גם את השירות שלנו ל-<Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="text-blue-600">חילוץ רכבי שטח ביערות הכרמל</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}