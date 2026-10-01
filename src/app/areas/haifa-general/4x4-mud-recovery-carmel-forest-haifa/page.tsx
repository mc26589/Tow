import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ שטח 4x4 בבוץ ביערות הכרמל | הגעה תוך 30 דקות!",
  description: "נתקעתם עם רכב השטח בבוץ ביערות הכרמל? צוות חילוץ 4x4 מקצועי עם כננות בדרך אליכם! שירות מהיר, אמין ומחיר הוגן בכל אזור חיפה. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$$, $$$",
    "serviceType": "4x4 Mud Recovery"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">חילוץ שטח 4x4 בבוץ ביערות הכרמל: הגעה מהירה!</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? אל תנסו להמשיך להילחם – צוות החילוץ שלנו עם כננות עוצמתיות בדרך אליכם. שירות מקצועי לרכבי שטח ו-4x4 בפריסה ארצית באזור חיפה.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">חילוץ 4x4 מקצועי ומיידי בתוואי השטח של הכרמל</h2>
        <p className="mb-4">
          השטח של יערות הכרמל טומן בחובו סכנות לנהגים. אם שקעתם, אנו מספקים שירותי <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-region" className="text-blue-400 underline">חילוץ רכב מבוץ באזור הכרמל</Link> במהירות. אנו מטפלים גם במקרים מורכבים יותר כמו <Link href="/areas/haifa-general/car-rescue-mud-carmel-forest-nesher-24-7" className="text-blue-400 underline">חילוץ רכב מבוץ ביערות הכרמל ונס הר</Link> או צורך ב-<Link href="/areas/haifa-general/cheap-towing-services-check-post" className="text-blue-400 underline">גרירה משתלמת באזור הצ'ק פוסט</Link> במידה והרכב נפגע.
        </p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו לחילוץ שטח בכרמל?</h3>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>זמינות מלאה: חילוץ 24/7 לכל סוגי רכבי ה-4x4.</li>
          <li>ניסיון מקומי: הכרת השבילים של <Link href="/areas/haifa-general/off-road-rescue-carmel-forest-haifa-university" className="text-blue-400 underline">יערות הכרמל ואוניברסיטת חיפה</Link>.</li>
          <li>ציוד מתקדם: שימוש בכננות מקצועיות לחילוץ ללא נזק לשלדה.</li>
        </ul>
        
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mt-10">
          <h4 className="text-xl font-bold mb-4">שאלות נפוצות על חילוצי שטח</h4>
          <div className="space-y-4">
            <div>
              <p className="font-bold">תוך כמה זמן תגיעו לחלץ אותי?</p>
              <p className="text-neutral-400">אנו מתחייבים להגעה מהירה, בדרך כלל תוך 30-60 דקות, בהתאם למיקום המדויק.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם מבצעים גרירה במקרה של נזק?</p>
              <p className="text-neutral-400">בהחלט. אנו מספקים פתרונות גרירה מקצועיים, כולל ל-<Link href="/areas/haifa-general/towing-road-22-krayot-bypass" className="text-blue-400 underline">גרירה בכביש 22 עוקף קריות</Link>.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם מחלצים אופנועים בשטח?</p>
              <p className="text-neutral-400">חשוב להבהיר: אנו מתמחים בחילוץ רכבי שטח, ג'יפים וטנדרים בלבד, ולא איננו מחלצים אופנועים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}