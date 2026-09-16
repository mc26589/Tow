import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ בוץ 4x4 ביערות הכרמל | הגעה מהירה 24/7",
  description: "נתקעתם בבוץ ביערות הכרמל? שירות חילוץ 4x4 מקצועי, הגעה מהירה לכל נקודה ליד אוניברסיטת חיפה והכרמל. מחיר הוגן וצוות מיומן זמין 24/7. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/mud-rescue-4x4-carmel-forest-haifa"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ רכב חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7625",
      "longitude": "35.0150"
    },
    "priceRange": "$",
    "serviceType": "Mud Rescue and Off-road Recovery"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">חילוץ בוץ לרכב 4x4 ביערות הכרמל ליד אוניברסיטת חיפה</h1>
          <p className="text-xl mb-8">נתקעתם בשטח? צוות החילוץ המקצועי שלנו בדרך אליכם עם ציוד ייעודי לכל סוגי השקיעות.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי חילוץ שטח מקצועיים בכרמל</h2>
        <p className="mb-4">
          אנו מתמחים בחילוץ רכבי 4x4 ורכבי שטח ששקעו בבוץ באזור יערות הכרמל וסביבת האוניברסיטה. 
          למי שמחפש פתרונות נוספים באזור, ניתן להיעזר בשירותי <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-region" className="text-blue-400 underline">חילוץ רכב שקוע בבוץ באזור הכרמל</Link> או לבדוק 
          <Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="text-blue-400 underline">שירותי גרירה במחיר נוח בצומת צק פוסט</Link>.
        </p>
        <p className="mb-4">
          הצוות שלנו מכיר היטב את תוואי השטח המורכב סביב חיפה. אנו מגיעים עם ציוד חילוץ חזק כדי להבטיח שהרכב שלכם יחולץ ללא נזקים. 
          אם נתקלתם בתקלה נוספת בדרכים, אנו מציעים גם פתרונות כגון <Link href="/areas/haifa-general/emergency-towing-electric-car-route-22-krayot" className="text-blue-400 underline">חילוץ רכב חשמלי באזור כביש 22</Link>.
        </p>
        
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mt-8">
          <h3 className="text-2xl font-semibold mb-4">למה לבחור בנו?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות 24/7 לכל קריאה בלב היער והשטח</li>
            <li>ציוד חילוץ מתקדם לרכבי 4x4 ורכבי פנאי</li>
            <li>הגעה מהירה לכל נקודה ביערות הכרמל והסביבה</li>
            <li>שקיפות מלאה ומחיר הוגן ללא הפתעות</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-neutral-900">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ שטח בכרמל</h2>
            <div className="space-y-6">
                <div>
                    <h4 className="font-bold text-xl">תוך כמה זמן תגיעו לחילוץ ביערות הכרמל?</h4>
                    <p className="text-neutral-400">אנו שואפים להגיע לכל נקודה בטווח זמן קצר ככל הניתן, בהתאם לתנאי השטח ועומסי התנועה באזור הכרמל.</p>
                </div>
                <div>
                    <h4 className="font-bold text-xl">האם אתם מבצעים חילוץ אופנועים?</h4>
                    <p className="text-neutral-400">השירות שלנו מתמקד בחילוץ רכבים ורכבי 4x4 בלבד. איננו מספקים שירותי חילוץ או גרירה לאופנועים.</p>
                </div>
                <div>
                    <h4 className="font-bold text-xl">מה עושים כשנתקעים בבוץ עמוק?</h4>
                    <p className="text-neutral-400">הכי חשוב: אל תמשיכו ללחוץ על הגז כי זה יגרום לרכב לשקוע עמוק יותר. צרו איתנו קשר מיד והישארו במיקום בטוח עד הגעתנו.</p>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}