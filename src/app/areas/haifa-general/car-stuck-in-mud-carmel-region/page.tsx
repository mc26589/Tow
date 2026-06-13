import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ בכרמל | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ באזור הכרמל? אנחנו כאן לחלץ אתכם בבטחה. צוות מקצועי, ציוד חילוץ מתקדם ושירות 24/7. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-region"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Car recovery from mud and off-road towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות שלנו בדרך אליכם עם הציוד המתאים ביותר.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">זקוקים לחילוץ רכב שנתקע בבוץ באזור הכרמל?</h2>
        <p className="mb-4">אם הרכב שלכם שקע בבוץ בדרכי העפר או בשטחים הפתוחים של הכרמל, אתם זקוקים למענה מיידי ומקצועי. אנו מתמחים בחילוצי שטח מורכבים לרכבים פרטיים, רכבי 4x4 ורכבים מסחריים. במידה ואתם זקוקים לעזרה בדרכים בקרבת מקום, תוכלו להיעזר גם בשירותי <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="text-blue-600 underline">חילוץ שטח באזור יערות הכרמל</Link> או במיקומים ספציפיים כמו <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-forest-near-haifa-university" className="text-blue-600 underline">אוניברסיטת חיפה</Link>.</p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו לחילוץ בבוץ?</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות מלאה: שירות 24/7 בכל אזור חיפה והכרמל.</li>
          <li>מומחיות בשטח: ניסיון רב בחילוץ רכבים ששקעו בבוץ עמוק.</li>
          <li>ציוד מקצועי: שימוש בכננות וציוד גרירה המותאם לרכבים שאינם יכולים לצאת בכוחות עצמם.</li>
          <li>מחירים הוגנים: שירות מקצועי במחיר משתלם ללא הפתעות.</li>
        </ul>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על חילוץ רכב בבוץ</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">כמה זמן לוקח לכם להגיע לחילוץ בכרמל?</h4>
              <p>אנו עושים את מירב המאמצים להגיע תוך 30-60 דקות, בהתאם לעומסי התנועה ותנאי השטח.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם מחלצים גם רכבים ששקעו עמוק בבוץ?</h4>
              <p>כן, אנו מצוידים בציוד כננות מתקדם המיועד למצבי שקיעה מורכבים, גם בתנאי שטח קשים.</p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-600">
          חשוב לציין: אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח. איננו מספקים שירותי חילוץ או גרירה לאופנועים.
        </p>
      </section>
    </main>
  );
}