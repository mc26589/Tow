import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב מהחול בבת גלים חיפה | הגעה מהירה 24/7",
  description: "נתקעתם עם הרכב בחולות חוף בת גלים? אנו מספקים שירות חילוץ רכב מקצועי ומהיר לכל סוגי הרכבים. הגעה מהירה, מחיר הוגן ושירות 24/7. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-sand-bat-galim-haifa"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ רכב חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8319", "longitude": "34.9756" },
    "priceRange": "$",
    "serviceType": "Vehicle Recovery and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב שקוע בחול חוף בת גלים חיפה</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב בחולות חוף בת גלים? אל תנסו להמשיך ללחוץ על הגז - זה עלול להעמיק את השקיעה. 
            אנו מתמחים בחילוץ רכבים פרטיים, רכבי שטח ורכבים מסחריים ששקעו בחול. 
            הצוות שלנו מצויד בציוד חילוץ מתקדם ומגיע לכל נקודה בחוף בת גלים במהירות שיא כדי להחזיר אתכם לכביש בבטחה.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">מדוע כדאי להזמין שירות חילוץ בבת גלים מאיתנו?</h2>
          <ul className="space-y-4 text-gray-700">
            <li>✓ זמינות מלאה 24/7 לכל מקרי החירום בחוף - גם בסופי שבוע וחגים.</li>
            <li>✓ ניסיון עשיר בחילוץ רכבים מתוואי חול עמוק ללא גרימת נזק לשלדת הרכב.</li>
            <li>✓ מחירים הוגנים ושקיפות מלאה מול הלקוח - ללא הפתעות.</li>
            <li>✓ התמחות בחילוץ רכבים פרטיים ורכבי 4x4.</li>
          </ul>
          <p className="mt-6 text-gray-600">
            אנו מספקים שירותים נוספים באזור, כולל <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-600 underline">חילוץ רכב מהבוץ באזור הכרמל</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ רכב בחול</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">תוך כמה זמן תגיעו אלי לחוף בת גלים?</h3>
              <p className="text-gray-700">זמן ההגעה משתנה בהתאם לעומסי התנועה באזור, אך אנו עושים מאמץ להגיע לכל נקודה בבת גלים בטווח של כ-30 עד 45 דקות.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם מחלצים גם אופנועים שנתקעו?</h3>
              <p className="text-gray-700">לא, אנו מתמקדים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח בלבד ואיננו מספקים שירותי חילוץ לאופנועים.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">מה לעשות אם הרכב שקוע עמוק בחול?</h3>
              <p className="text-gray-700">הדבר הכי חשוב הוא לא לנסות להמשיך ללחוץ על הגז. במידה והרכב שקוע מדי, התקשרו אלינו בהקדם כדי למנוע נזק למנוע ולגיר.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}