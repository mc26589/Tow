import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ שטח 4x4 בבוץ ביערות הכרמל | הגעה מהירה 24/7",
  description: "נתקעתם בבוץ ביערות הכרמל? צוות חילוץ 4x4 מקצועי בדרך אליכם. שירות מהיר, אמין ומחיר הוגן בכל אזור חיפה והסביבה. התקשרו עכשיו לחילוץ מיידי!",
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">שירות חילוץ שטח 4x4 בבוץ ביערות הכרמל ובאזור חיפה</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? צוות החילוץ שלנו בדרך אליכם. שירות מקצועי, מהיר ובטוח לרכבי 4x4.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
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
          נתקעתם בבוץ עם רכב השטח שלכם ביערות הכרמל? אנו מספקים שירותי חילוץ 4x4 מהירים ומקצועיים. לרכבים שזקוקים לעזרה ספציפית, אנו מציעים גם שירותי <Link href="/areas/haifa-general/car-extraction-from-mud-carmel-reserve-haifa" className="text-blue-400 underline">חילוץ מהבוץ בשמורת הכרמל</Link> או <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-400 underline">חילוץ רכב מבוץ באזור הכרמל</Link>. הצוות שלנו מצויד בציוד גרירה מתקדם המאפשר לנו להגיע לנקודות מבודדות בבטחה.
        </p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו לחילוץ שטח?</h3>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>זמינות מלאה: שירות חילוץ 24/7 לכל סוגי רכבי ה-4x4.</li>
          <li>מומחיות מקומית: הכרה מעמיקה של שבילי יערות הכרמל והסביבה.</li>
          <li>ציוד ייעודי: כננות וציוד מקצועי לחילוץ רכבים ששקעו בבוץ.</li>
          <li>שירות הוגן: מחירים שקופים ושירות אדיב.</li>
        </ul>
        
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mt-10">
          <h4 className="text-xl font-bold mb-4">שאלות נפוצות</h4>
          <div className="space-y-4">
            <div>
              <p className="font-bold">כמה זמן לוקח לכם להגיע ליערות הכרמל?</p>
              <p className="text-neutral-400">אנו משתדלים להגיע לכל נקודה ביערות הכרמל בזמן הקצר ביותר, בדרך כלל תוך כ-30 עד 60 דקות מרגע הקריאה.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם מחלצים גם אופנועים שנתקעו בשטח?</p>
              <p className="text-neutral-400">חשוב להבהיר: אנו מתמחים בחילוץ רכבי שטח, פרטיים ומסחריים בלבד. איננו מספקים שירותי חילוץ לאופנועים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}