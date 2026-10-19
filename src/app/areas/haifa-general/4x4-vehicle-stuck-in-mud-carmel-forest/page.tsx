import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ 4X4 ביערות הכרמל | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם עם רכב שטח בבוץ ביערות הכרמל? אנו מציעים חילוץ 4X4 מקצועי, מהיר ובטוח 24/7. הגעה תוך 30 דקות לכל נקודה בכרמל. התקשרו עכשיו לחילוץ!",
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
            נתקעתם עם רכב השטח בבוץ העמוק של יערות הכרמל? אנו מספקים <Link href="/areas/haifa-general/emergency-mud-rescue-carmel-forest-haifa" className="underline">שירותי חילוץ שטח מקצועיים</Link> ומהירים לכל סוגי רכבי ה-4X4. 
            הצוות שלנו מצויד בציוד גרירה מתקדם המותאם לתנאי שטח קשים ומגיע לכל נקודה באזור הכרמל. אם אתם זקוקים גם ל
            <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-region" className="underline font-semibold">חילוץ רכב פרטי בבוץ באזור הכרמל</Link> או לשירות 
            <Link href="/areas/haifa-general/emergency-tow-stuck-car-stella-maris-haifa-hills" className="underline font-semibold">חילוץ רכב תקוע בסטלה מאריס</Link>, אנו כאן עבורכם.
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
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע לכל קריאה ביערות הכרמל.</li>
          <li>ציוד חילוץ ייעודי לרכבי שטח ששקעו בבוץ עמוק או בנחלים.</li>
          <li>ניסיון עשיר בטיפול בתנאי שטח מורכבים ושבילים צרים.</li>
          <li>שקיפות מלאה במחירים ושירות אדיב ללא הפתעות.</li>
        </ul>
        <p className="mt-6 text-gray-700">
          חשוב לציין: אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4X4. השירות ניתן לאזור הכרמל והסביבה. למקרים של 
          <Link href="/areas/haifa-general/4x4-recovery-stuck-sand-kiryat-haim-beach-krayot" className="text-blue-600">חילוץ רכב ששקע בחול בקרית חיים</Link>, אנו מציעים שירות נפרד. שירותינו אינם כוללים חילוץ אופנועים.
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ שטח בכרמל</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">מהו זמן ההגעה הממוצע לחילוץ ביערות הכרמל?</h3>
              <p>אנו משתדלים להגיע בתוך זמן קצר ככל הניתן. זמני ההגעה תלויים במיקום המדויק של הרכב ובמצב העומסים בדרכי העפר ביום הקריאה.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם מבצעים חילוץ לרכבים פרטיים רגילים?</h3>
              <p>בהחלט. אנו נותנים מענה מקצועי גם לרכבים פרטיים שנתקעו בדרכי עפר באזור, ומספקים שירותי <Link href="/areas/haifa-general/emergency-mud-recovery-service-carmel-forest-haifa" className="text-blue-600">חילוץ רכב מבוץ באזור הכרמל</Link> במחיר הוגן ומשתלם.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם ניתן להזמין חילוץ גם אם נתקעתי בכביש מרכזי ליד הכרמל?</h3>
              <p>בוודאי. אנו מספקים מענה גם בכבישים המקיפים, כולל שירותי <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-600">חילוץ רכב בדרך 22</Link> וסביבת הצ'ק פוסט.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}