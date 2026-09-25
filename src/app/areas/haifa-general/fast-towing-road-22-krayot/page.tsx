import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 עוקף קריות | הגעה תוך 30 דקות | 24/7",
  description: "נתקעתם בכביש 22 עוקף קריות? גרר מהיר 24/7 לכל סוגי הרכבים במחיר הוגן. הגעה מהירה לכל נקודה בציר. אל תחכו, התקשרו עכשיו להצלת הרכב!",
  alternates: {
    canonical: "/areas/haifa-general/fast-towing-road-22-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בכביש 22 וקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22, חיפה והקריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "מחיר הוגן ושקוף",
    "serviceType": "גרירת רכבים וחילוץ דרך",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8191", "longitude": "35.0553" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר מהיר לכביש 22 עוקף קריות – חילוץ מקצועי 24/7</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם על עוקף קריות? צוות הגרר שלנו ממתין לכם עם מענה חירום מהיר בכל שעות היממה. למידע נוסף על <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="underline font-bold">גרירה 24 7 עוקף קריות מחיר הוגן</Link> ושירותי חילוץ באזור, אנו כאן לשירותכם.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
        <ul className="grid md:grid-cols-3 gap-8">
          <li className="p-6 border rounded-xl">
            <h3 className="font-bold text-xl mb-2">זמינות 24 שעות</h3>
            <p>שירות גרירה מסביב לשעון, גם בסופי השבוע וחגים, כדי שלא תישאר תקוע בכביש מהיר ועמוס. גם אם נדרש <Link href="/areas/haifa-general/emergency-towing-road-22-kiryat-ata-interchange" className="text-blue-600 underline">emergency towing road 22 kiryat ata interchange</Link>, אנו כאן.</p>
          </li>
          <li className="p-6 border rounded-xl">
            <h3 className="font-bold text-xl mb-2">מקצועיות בנתיבי הקריות</h3>
            <p>מומחיות בחילוץ וגרירה באזור, כולל פתרונות מהירים לרכב פרטי. צריכים פתרון לגרר ללא נזק? <Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-bialik-industrial-zone" className="text-blue-600 underline">affordable flatbed towing kiryat bialik industrial zone</Link> זמין עבורכם.</p>
          </li>
          <li className="p-6 border rounded-xl">
            <h3 className="font-bold text-xl mb-2">מחירים הוגנים ושקופים</h3>
            <p>אנו מציעים שקיפות מלאה והצעת מחיר הוגנת כבר בטלפון, ללא הפתעות בעת הגעת הגרר.</p>
          </li>
        </ul>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירה בכביש 22</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">תוך כמה זמן הגרר מגיע לכביש 22?</h3>
              <p>אנו משתדלים להגיע לכל נקודה על ציר כביש 22 בזמן הקצר ביותר. ניתן לקבל מידע על חילוצי רכב בדרכים אצל המוקדנים שלנו.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם מציעים פתרונות גרירה לרכבים ישנים?</h3>
              <p>כן, אנו מבצעים שירותי פינוי וגרירה לרכבים שאינם תקינים, כולל שירותי <Link href="/areas/haifa-general/towing-for-scrap-kiryat-ata-road-22" className="text-blue-600 underline">towing for scrap kiryat ata road 22</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">מה עושים במקרה של תקלה ברכב חשמלי?</h3>
              <p>במידה ונתקעתם עם רכב חשמלי באזור הצ'ק פוסט, מומלץ להסתייע בשירות כגון <Link href="/areas/haifa-general/affordable-electric-car-towing-check-post-krayot" className="text-blue-600 underline">affordable electric car towing check post krayot</Link> לקבלת מענה מקצועי ובטוח.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}