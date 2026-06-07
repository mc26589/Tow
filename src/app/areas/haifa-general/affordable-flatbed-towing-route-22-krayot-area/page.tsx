import type { Metadata } from "next";
import Script from 'next/script';
import Link from 'next/link';
import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: "גרר בכביש 22 עוקף קריות - שירות מהיר 24/7 | מחיר הוגן",
  description: "נתקעתם בדרכים? גרר מפרץ אקספרס מספקים שירותי גרירה מקצועיים בכביש 22 עוקף קריות. הגעה מהירה, מחיר הוגן וצוות אמין 24/7. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "גרר מפרץ אקספרס",
    "description": "גרר מפרץ אקספרס מספקים שירותי גרירה וחילוץ 24/7 בחיפה והקריות. הגעה מהירה, מחירים הוגנים ושירות מקצועי.",
    "url": "https://www.towingrescuehaifa.co.il/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area",
    "telephone": `tel:${BUSINESS_INFO.phone}`,
    "priceRange": "$",
    "areaServed": [
      { "@type": "Place", "name": "Haifa" },
      { "@type": "Place", "name": "Krayot" },
      { "@type": "Place", "name": "Route 22" }
    ],
    "serviceType": ["גרירת רכבים", "חילוץ דרך", "שירותי גרירה"]
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
            שירות גרירה מהיר בכביש 22 (עוקף קריות)
          </h1>
          <p className="mt-2 text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            נתקעתם בכביש 22? אנו כאן עבורכם. שירות גרירה וחילוץ מקצועי, הגעה מהירה ומחירים ללא תחרות.
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
          אנו מתמחים במתן פתרונות גרירה למגוון רחב של רכבים בכביש 22 ובאזור הקריות. בין אם הרכב נתקע מסיבות מכניות או לאחר תאונה, הצוות שלנו ערוך לתת מענה מיידי. זקוקים לשירות נוסף באזור? בדקו גם את שירותי ה-<Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-blue-600 underline">גרירה 24 7 עוקף קריות מחיר הוגן</Link> שלנו.
        </p>

        <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">למה לבחור בנו?</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li><strong>זמינות 24/7:</strong> כי אנחנו יודעים שתקלה לא מתואמת מראש.</li>
            <li><strong>מחיר הוגן:</strong> שקיפות מלאה ללא הפתעות בחיוב.</li>
            <li><strong>ציוד מתקדם:</strong> גרירת רכבים בבטחה מלאה.</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">שאלות נפוצות</h2>
          <div>
            <h3 className="font-bold text-lg">האם אתם גוררים רכבים בכביש 22 גם בשעות הלילה?</h3>
            <p className="text-gray-700">כן, אנו פועלים סביב השעון, 24 שעות ביממה, כדי להבטיח שלא תישאר תקוע בכביש 22.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">מהו טווח המחירים לגרירה באזור הקריות?</h3>
            <p className="text-gray-700">המחירים משתנים בהתאם למרחק ולמורכבות החילוץ, אך אנו תמיד שואפים לספק את המחיר המשתלם ביותר באזור.</p>
          </div>
        </div>
      </section>
    </>
  );
}