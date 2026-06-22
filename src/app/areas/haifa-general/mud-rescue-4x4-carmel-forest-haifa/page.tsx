import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ בוץ 4x4 ביערות הכרמל | חילוץ מהיר וזול 24/7",
  description: "נתקעתם בבוץ ביערות הכרמל? שירות חילוץ 4x4 מקצועי, הגעה מהירה לכל נקודה באזור אוניברסיטת חיפה והכרמל. מחיר הוגן, צוות מיומן וזמינות 24/7. התקשרו עכשיו!",
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
          <p className="text-xl mb-8">נתקעתם בשטח? צוות החילוץ המקצועי שלנו בדרך אליכם.</p>
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
        <h2 className="text-3xl font-bold mb-6">שירותי חילוץ שטח מקצועיים</h2>
        <p className="mb-4">
          אנו מתמחים בחילוץ רכבי 4x4, רכבי שטח ורכבים פרטיים ששקעו בבוץ באזור יערות הכרמל. 
          למי שזקוק לשירותי גרירה נוספים באזור, אנו מציעים גם <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-400 underline">שירותי גרירה באזור צומת צק פוסט</Link>.
        </p>
        <p className="mb-4">
          הצוות שלנו מכיר היטב את תוואי השטח סביב אוניברסיטת חיפה והכרמל. אנו מגיעים עם ציוד חילוץ ייעודי 
          כדי להבטיח שהרכב שלכם יחולץ ללא נזקים מיותרים. אם נתקלתם בבעיה דחופה בדרכים, ניתן לבדוק גם את שירותי <Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-haifa" className="text-blue-400 underline">חילוץ וגרירה 24/7 בצומת צק פוסט</Link>.
        </p>
        
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mt-8">
          <h3 className="text-2xl font-semibold mb-4">למה לבחור בנו?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות 24/7 לכל קריאה בשטח</li>
            <li>ציוד חילוץ מתקדם לרכבי 4x4 ורכבי שטח</li>
            <li>הגעה מהירה לכל נקודה ביערות הכרמל</li>
            <li>מחירים הוגנים ושירות אדיב ללא פשרות</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-neutral-900">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ שטח בכרמל</h2>
            <div className="space-y-6">
                <div>
                    <h4 className="font-bold text-xl">תוך כמה זמן תגיעו לחילוץ ביערות הכרמל?</h4>
                    <p className="text-neutral-400">אנו שואפים להגיע לכל נקודה בטווח זמן קצר מאוד, בהתאם לעומסי התנועה באזור הכרמל והגישה לשטח.</p>
                </div>
                <div>
                    <h4 className="font-bold text-xl">האם אתם מחלצים אופנועים ששקעו בבוץ?</h4>
                    <p className="text-neutral-400">אנו מתמקדים בחילוץ רכבים ורכבי 4x4 בלבד. איננו מספקים שירותי חילוץ לאופנועים.</p>
                </div>
                <div>
                    <h4 className="font-bold text-xl">מה לעשות כשהרכב שוקע בבוץ?</h4>
                    <p className="text-neutral-400">הדבר החשוב ביותר הוא לא ללחוץ על הגז בעוצמה שעלולה להעמיק את השקיעה. צרו איתנו קשר מיד לקבלת הכוונה מקצועית.</p>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}