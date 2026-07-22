import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ בכרמל | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ באזור הכרמל? אנו מספקים שירותי חילוץ מקצועיים לרכבי שטח ופרטיים. הגעה מהירה, צוות מנוסה ומחיר הוגן. התקשרו עכשיו לחילוץ!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-region"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "אזור הכרמל, חיפה" },
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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות שלנו בדרך אליכם. שירות מקצועי לרכבים פרטיים ו-4x4.</p>
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
        <h2 className="text-3xl font-bold mb-6">זקוקים לחילוץ רכב שנתקע בבוץ באזור הכרמל?</h2>
        <p className="mb-4">אם הרכב שלכם שקע בבוץ בדרכי העפר או בשטחים הפתוחים של הכרמל, אנו כאן כדי לסייע לכם באופן מיידי. אנו מבצעים חילוצים גם בקרבת נקודות ספציפיות כמו <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-forest-near-haifa-university" className="text-blue-600 font-semibold underline">חילוץ רכב בבוץ ליד אוניברסיטת חיפה</Link> או באזור נשר, למידע נוסף ראו <Link href="/areas/haifa-general/car-rescue-mud-carmel-forest-nesher-24-7" className="text-blue-600 font-semibold underline">חילוץ רכב בבוץ יערות הכרמל ונשר</Link>.</p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו?</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות מלאה 24/7 לכל אזור הכרמל.</li>
          <li>ניסיון רב בחילוץ רכבים ששקעו בבוץ עמוק.</li>
          <li>ציוד חילוץ מקצועי המגן על הרכב שלכם.</li>
          <li>מחירים הוגנים ושירות אדיב.</li>
        </ul>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">כמה זמן לוקח לכם להגיע לחילוץ בכרמל?</p>
              <p>אנו שואפים להגיע לכל נקודה באזור הכרמל תוך זמן קצר ככל הניתן בהתאם לתנאי השטח והתנועה.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם מחלצים רכבים שנתקעו בדרכי עפר?</p>
              <p>כן, אנו מתמחים בחילוצי שטח, דרכי עפר, ומקומות מאתגרים שבהם רכב רגיל לא יכול לסייע.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-100 rounded-lg">
          <p className="font-bold">הערה חשובה: אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח. איננו מספקים שירותי חילוץ או גרירה לאופנועים.</p>
        </div>
      </section>
    </main>
  );
}