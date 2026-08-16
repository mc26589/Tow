import type { Metadata } from "next";
import Script from 'next/script';
import Link from 'next/link';
import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: "גרר בכביש 22 עוקף קריות | הגעה מהירה 24/7 - מחיר הוגן",
  description: "נתקעתם בכביש 22? גרר מפרץ אקספרס מספקים שירותי גרירה מקצועיים ומהירים 24/7. הגעה מהירה תוך 30 דקות למגוון רכבים. התקשרו עכשיו להצעה משתלמת!",
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
            גרר בכביש 22 (עוקף קריות) - הגעה מהירה 24/7
          </h1>
          <p className="mt-2 text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            נתקעתם בדרך? צוות גרר מפרץ אקספרס כאן בשבילכם. שירות מקצועי, ציוד חדיש ומחירים נוחים לכל נהג.
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
          התקעות בכביש 22 היא סיטואציה לא נעימה, אך עם שירותי <Link href="/areas/haifa-general/emergency-towing-road-22-krayot" className="text-blue-600 underline">emergency towing road 22 krayot</Link> שלנו, אתם לא לבד. אנו מספקים מענה מהיר לכל סוגי הרכבים הפרטיים. צריכים עזרה באזורים קרובים? ניתן גם להיעזר בשירותי <Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="text-blue-600 underline">cheap towing check post haifa</Link> המיועדים למתקעים בצומת העמוס.
        </p>

        <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">למה לבחור בנו בכביש 22?</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li><strong>זמינות מלאה:</strong> שירות גרירה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li><strong>מחיר הוגן:</strong> שירות מקצועי במחירים שפויים, ללא ניצול מצבי חירום.</li>
            <li><strong>ציוד חדיש:</strong> גרירת רכבים בבטחה מלאה תוך שמירה על הרכב.</li>
            <li><strong>מומחיות מקומית:</strong> הכרה מלאה של צירי התנועה באזור הקריות וחיפה.</li>
          </ul>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900">שאלות ותשובות (FAQ)</h2>
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg">מהו זמן ההגעה המשוער בכביש 22?</h3>
            <p className="text-gray-700">אנחנו מבינים שאתם בלחץ; אנו שואפים להגיע לכל נקודה בכביש 22 תוך זמן קצר מרגע הקריאה, בהתאם לעומסי התנועה.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg">האם אתם קונים רכבים תקועים במקום?</h3>
            <p className="text-gray-700">כן, אם הרכב אינו ראוי לתיקון, אנו מציעים שירות <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-towing-included" className="text-blue-600 underline">buy cars for scrap haifa krayot towing included</Link> לכל רכב ישן או פגום.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">האם ניתן להזמין גרירה דחופה לקריות?</h3>
            <p className="text-gray-700">בהחלט. מעבר לשירות בכביש 22, אנו זמינים לכל קריאה של <Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="text-blue-600 underline">emergency towing cheap kiryat bialik</Link> למתן שירות מהיר וזול באזורכם.</p>
          </div>
        </div>
      </section>
    </>
  );
}