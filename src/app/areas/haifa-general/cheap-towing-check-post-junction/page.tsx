import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בצומת צ'ק פוסט | הגעה מהירה ב-30 דקות | 24/7",
  description: "נתקעתם בצומת צ'ק פוסט? גרר זול ומהיר לרכבים פרטיים ומסחריים. הגעה תוך 30 דקות לכל חיפה והקריות. זמינות 24/7 במחיר הוגן. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-check-post-junction",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "priceRange": "$$,$",
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7936", "longitude": "35.0253" },
    "serviceType": "Towing Service"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול בצומת צ'ק פוסט - זמינות מלאה 24/7</h1>
          <p className="text-xl mb-8">
            זקוקים לשירותי גרירה דחופים בצומת צ'ק פוסט? אנו מתמחים בחילוץ רכבים ומתן <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="underline font-semibold">שירותי גרירה מקצועיים בצומת צ'ק פוסט והקריות</Link>. 
            נתקעתם עם רכב מושבת? במידה והרכב הושבת כליל, ניתן גם לבדוק איתנו אפשרויות ל-<Link href="/areas/haifa-general/buying-cars-for-scrap-check-post-haifa" className="underline font-semibold">מכירת רכבים לפירוק בצ'ק פוסט</Link>.
            חשוב להדגיש: השירות מיועד לרכבים פרטיים ומסחריים בלבד (לא מספקים שירותי גרירה לאופנועים). מחירים הוגנים ושקיפות מלאה מובטחים.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בצומת צ'ק פוסט?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות מלאה 24 שעות ביממה, כולל חגים ושבתות.</li>
            <li>✓ הגעה מהירה לכל נקודה בצומת צ'ק פוסט, כולל קרבה ל-<Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-400">כביש 22 (עוקף קריות)</Link>.</li>
            <li>✓ מחיר זול, תחרותי והוגן - ללא עלויות נסתרות.</li>
            <li>✓ שירות בטוח ומקצועי לרכבים תקועים כולל סיוע ב-<Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-400">גרירת רכבים לאחר תאונה בכביש 22</Link>.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">שאלות נפוצות</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold">מהו זמן ההגעה הממוצע לגרר בצומת צ'ק פוסט?</h4>
              <p>אנו ממוקמים במיקום אסטרטגי המאפשר הגעה לרוב הקריאות בצומת צ'ק פוסט והסביבה תוך 20-30 דקות.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם גוררים רכבים מכל הסוגים?</h4>
              <p>אנו גוררים רכבים פרטיים, רכבי שטח ורכבים מסחריים קלים. השירות אינו כולל גרירת אופנועים.</p>
            </div>
            <div>
              <h4 className="font-bold">מהו טווח המחירים לגרירה בצ'ק פוסט?</h4>
              <p>אנו מתחייבים למחיר הוגן ותחרותי המותאם למרחק הנסיעה ולאופי התקלה. ניתן ליצור קשר לקבלת הצעת מחיר מדויקת ללא הפתעות.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}