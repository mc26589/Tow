import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ שטח 4x4 בבוץ ביערות הכרמל | הגעה תוך 30 דקות!",
  description: "נתקעתם בבוץ ביערות הכרמל? צוות חילוץ 4x4 מקצועי בדרך אליכם! שירות מהיר, אמין ומחיר הוגן בכל אזור חיפה והצפון. התקשרו עכשיו לחילוץ מיידי!",
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
    "priceRange": "$",
    "serviceType": "4x4 Mud Recovery and Towing"
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
          <p className="text-xl mb-8">נתקעתם בבוץ? אל תנסו להמשיך להילחם – צוות החילוץ שלנו עם כננות עוצמתיות בדרך אליכם. שירות מקצועי, מהיר ובטוח לרכבי שטח.</p>
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
          השטח של יערות הכרמל טומן בחובו סכנות לנהגים לא מנוסים. אם שקעתם בבוץ, אנו מספקים שירותי חילוץ מהירים. אנו מטפלים גם במקרים מורכבים יותר כמו <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-400 underline">חילוץ רכב מבוץ באזור הכרמל</Link> או צורך ב-<Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="text-blue-400 underline">גרירה משתלמת מאזור הצ'ק פוסט</Link> במידה והרכב נפגע מהעומס.
        </p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו לחילוץ שטח בכרמל?</h3>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>זמינות מלאה: חילוץ 24/7 לכל סוגי רכבי ה-4x4 והשטח.</li>
          <li>ניסיון מקומי: הכרת השבילים והדרכים העוקפות של יערות הכרמל.</li>
          <li>ציוד מתקדם: שימוש בכננות מקצועיות לחילוץ ללא נזק לשלדת הרכב.</li>
          <li>שירות מקצועי: מענה מהיר גם בדרכים מבודדות.</li>
        </ul>
        
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mt-10">
          <h4 className="text-xl font-bold mb-4">שאלות נפוצות על חילוצי שטח</h4>
          <div className="space-y-4">
            <div>
              <p className="font-bold">תוך כמה זמן תגיעו לחלץ אותי ביערות הכרמל?</p>
              <p className="text-neutral-400">אנו מתחייבים להגעה מהירה ככל הניתן, בדרך כלל תוך 30-60 דקות, בהתאם למיקום המדויק ולתנאי השטח.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם מחלצים גם במקרים שנדרשת גרירה לאחר החילוץ?</p>
              <p className="text-neutral-400">בהחלט. במידה והרכב ניזוק ולא ניתן להמשיך בנסיעה, אנו מספקים פתרונות גרירה מקצועיים, כולל ל-<Link href="/areas/haifa-general/urgent-towing-commercial-van-check-post-route-22" className="text-blue-400 underline">גרירת רכבים מסחריים באזור ציר 22</Link>.</p>
            </div>
            <div>
              <p className="font-bold">האם השירות כולל חילוץ אופנועים?</p>
              <p className="text-neutral-400">חשוב להבהיר: אנו מתמחים בחילוץ רכבי שטח (ג'יפים, טנדרים, רכבי 4x4) בלבד, ואיננו מבצעים חילוץ לאופנועים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}