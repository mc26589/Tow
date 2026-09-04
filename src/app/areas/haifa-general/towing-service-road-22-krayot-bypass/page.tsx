import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 (עוקף קריות) - שירות מהיר 24/7 | מחיר הוגן",
  description: "נתקעתם בכביש 22 עוקף קריות? גרר זמין 24/7 לכל סוגי הרכבים. הגעה מהירה, מחיר אטרקטיבי ושירות מקצועי. אל תעמדו בסיכון – התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/towing-service-road-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות - כביש 22",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$$, $",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8190",
      "longitude": "35.0630"
    },
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">גרר רכבים תקועים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8 leading-relaxed">
            נתקעתם עם הרכב בכביש 22? אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4. 
            אנו מציעים מחירים הוגנים ושירות מהיר לכל אורך ציר עוקף קריות, 24 שעות ביממה.
            זקוקים לעזרה גם באזורים סמוכים? אנו מציעים גם שירותי <Link href="/areas/haifa-general/emergency-car-recovery-ditch-route-4-check-post" className="underline font-bold">חילוץ רכב בצומת צ'ק פוסט</Link> או <Link href="/areas/haifa-general/grar-zol-lerchev-takua-bekiryat-yam" className="underline font-bold">גרר זול לרכב תקוע בקרית ים</Link>.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לגרר
            </a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>
      
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
        <ul className="space-y-4 text-lg mb-12">
          <li>✓ זמינות מלאה 24/7 לכל קריאה בכביש עוקף קריות.</li>
          <li>✓ הגעה מהירה לנקודת התקיעה, גם בעומסי תנועה.</li>
          <li>✓ שירות מקצועי ומיומן לרכבים פרטיים, מסחריים ורכבי 4x4.</li>
          <li>✓ שקיפות מלאה ומחירים הוגנים ללא "הפתעות" בחיוב.</li>
        </ul>

        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה בכביש 22</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">תוך כמה זמן הגרר מגיע לכביש 22?</h3>
              <p>אנו משתדלים להגיע לכל נקודה על ציר עוקף קריות בזמן הקצר ביותר האפשרי, לרוב תוך דקות ספורות מרגע הקריאה.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם גוררים רכבים מסחריים?</h3>
              <p>כן, אנו נותנים מענה גם לרכבים מסחריים ולרכבים כבדים יותר. לצרכי מורכבים יותר כגון <Link href="/areas/haifa-general/heavy-duty-truck-towing-kiryat-haim-industrial-zone" className="text-blue-600">גרירת משאיות בקרית חיים</Link>, נשמח לייעץ טלפונית.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם ניתן להזמין שירות אם הרכב תקוע בגלל תקר (פנצ'ר)?</h3>
              <p>בהחלט. אנו מציעים שירותי דרך הכוללים החלפת גלגל או גרירה במידת הצורך. לפתרונות ספציפיים באזור, ניתן לבדוק גם <Link href="/areas/haifa-general/flat-tire-roadside-assistance-kiryat-yam-beach" className="text-blue-600">סיוע בתקרים בקרית ים</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}