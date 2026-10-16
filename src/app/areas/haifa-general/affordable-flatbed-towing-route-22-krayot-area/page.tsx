import type { Metadata } from "next";
import Script from 'next/script';
import Link from 'next/link';
import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: "גרר בכביש 22 (עוקף קריות) | שירות מהיר תוך 30 דקות - 24/7",
  description: "נתקעתם בכביש 22? גרר מפרץ אקספרס מספק גרירת רכבים מקצועית 24/7. הגעה מהירה, מחיר הוגן ושירות אדיב. התקשרו עכשיו להצעה משתלמת!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "גרר מפרץ אקספרס",
    "description": "שירותי גרירה וחילוץ מהירים בכביש 22 עוקף קריות והסביבה. זמינות 24/7, מקצועיות ומחיר הוגן.",
    "url": `https://www.towingrescuehaifa.co.il/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area`,
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "$$, $$$",
    "areaServed": [
      { "@type": "Place", "name": "כביש 22" },
      { "@type": "Place", "name": "קריות" },
      { "@type": "Place", "name": "חיפה" }
    ],
    "serviceType": ["גרירת רכבים", "חילוץ דרך", "שירותי גרירה 24/7"]
  };

  return (
    <>
      <Script
        id="json-ld-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            גרר בכביש 22 (עוקף קריות) - הגעה מהירה תוך 30 דקות
          </h1>
          <p className="mt-2 text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            נתקעתם בדרך? צוות גרר מפרץ אקספרס כאן בשבילכם 24 שעות ביממה. שירות מקצועי, ציוד חדיש ומחירים נוחים לכל רכב.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <WhatsAppCTA cityName="כביש 22 קריות" />
             <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white rounded-full px-7 py-3.5 font-semibold text-base border border-white/25 hover:bg-white/25 transition-colors w-full sm:w-auto justify-center">
                📞 חייגו עכשיו: {BUSINESS_INFO.phone}
             </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-4 py-12">
        <p className="text-lg mb-6 leading-relaxed text-gray-800">
          התקעות בכביש 22 היא סיטואציה לא נעימה, אך עם השירותים שלנו, אתם בידיים בטוחות. אם אתם זקוקים לטיפול בטעינת מצבר או שירותים דומים, תוכלו להיעזר בשירותי <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-600 underline">electric vehicle flat battery towing route 22 krayot</Link> שלנו. במידה ואתם צריכים לפנות רכב שאינו תקין לטיפול, אנו זמינים גם עבור <Link href="/areas/haifa-general/towing-for-scrap-kiryat-bialik-road-22" className="text-blue-600 underline">towing for scrap kiryat bialik road 22</Link>. אנו מתמחים גם בגרירה של משאיות קלות עבור <Link href="/areas/haifa-general/emergency-light-truck-towing-route-22-krayot-bypass" className="text-blue-600 underline">emergency light truck towing route 22 krayot bypass</Link>.
        </p>

        <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">למה לבחור בנו בכביש 22?</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li><strong>זמינות מלאה:</strong> שירות גרירה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li><strong>מחיר הוגן:</strong> שירות מקצועי במחירים שפויים ללא הפתעות.</li>
            <li><strong>ציוד חדיש:</strong> גרירת רכבים בבטחה מלאה עם משאיות גרר מתקדמות.</li>
            <li><strong>מומחיות מקומית:</strong> הכרה מלאה של צירי התנועה באזור הקריות, עוקף קריות וחיפה.</li>
          </ul>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900">שאלות ותשובות (FAQ)</h2>
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg">מהו זמן ההגעה המשוער בכביש 22?</h3>
            <p className="text-gray-700">אנחנו מבינים שאתם בלחץ בגלל העומס; אנו שואפים להגיע לכל נקודה בכביש 22 תוך כ-30 דקות מרגע הקריאה, בכפוף לעומסי התנועה באזור.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg">האם אתם מטפלים גם ברכבים ישנים לפירוק?</h3>
            <p className="text-gray-700">כן, אם הרכב אינו ראוי לתיקון, אנו מציעים שירות <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal" className="text-blue-600 underline">buy cars for scrap haifa krayot immediate removal</Link> כולל פינוי הרכב מהשטח.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">האם אתם מספקים שירותי גרירה בקריית ביאליק?</h3>
            <p className="text-gray-700">בהחלט. מעבר לכביש 22, אנו זמינים לכל קריאה של <Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-bialik-industrial-zone" className="text-blue-600 underline">affordable flatbed towing kiryat bialik industrial zone</Link> למתן שירות מהיר וזול באזורכם.</p>
          </div>
        </div>
      </section>
    </>
  );
}