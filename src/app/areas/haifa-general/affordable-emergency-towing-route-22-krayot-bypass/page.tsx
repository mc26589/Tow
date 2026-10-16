import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירה בכביש 22 עוקף קריות | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בכביש 22? שירותי גרירה מקצועיים ומהירים לעוקף קריות 24/7. הגעה תוך זמן קצר, שירות אדיב ומחיר הוגן לכל סוגי הרכבים. התקשרו עכשיו לקבלת סיוע!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה דחופים עוקף קריות כביש 22",
    "areaServed": "Haifa and Krayot",
    "priceRange": "₪₪",
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
    "mainEntity": [
      {
        "@type": "Question",
        "name": "תוך כמה זמן אתם מגיעים לעוקף קריות?",
        "acceptedAnswer": { "@type": "Answer", "text": "אנו שואפים להגיע לכל קריאה בכביש 22 תוך זמן מינימלי, בהתאם לעומסי התנועה באזור הקריות וצ'ק פוסט." }
      },
      {
        "@type": "Question",
        "name": "האם אתם מספקים שירותי גרירה גם לרכבים חשמליים?",
        "acceptedAnswer": { "@type": "Answer", "text": "בהחלט, אנו מציעים שירות מומחה עבור פריקת סוללה ברכב חשמלי בכביש 22 והקריות." }
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה דחופים ובמחיר הוגן בכביש 22 עוקף קריות</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם עם הרכב בכביש 22? אנו מציעים מענה מהיר ומקצועי לכל סוגי הרכבים. מחפשים שירות מקיף? בדקו גם את שירותי <Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="underline font-semibold">גרירת פלטה בכביש 22</Link> ואת הפתרונות שלנו ל <Link href="/areas/haifa-general/emergency-light-truck-towing-route-22-krayot-bypass" className="underline font-semibold">גרירת משאיות קלות בעוקף קריות</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
          <ul className="space-y-4 text-gray-300">
            <li>✓ זמינות מלאה 24/7 לכל אורך עוקף קריות.</li>
            <li>✓ הגעה מהירה לנקודת התקיעה בבטחה עם ציוד מתקדם.</li>
            <li>✓ מומחיות מיוחדת ב <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-400">גרירת רכבים חשמליים בכביש 22</Link>.</li>
            <li>✓ פתרונות משלימים ל <Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="text-blue-400">שירותי גרירה זולים באזור הצ'ק פוסט</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה בעוקף קריות</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
            <div>
              <h3 className="font-bold">מה עושים אם הרכב מושבת סופית?</h3>
              <p className="text-gray-600">במקרים בהם התיקון לא משתלם, אנו מספקים גם שירותי <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal" className="text-blue-600 underline">קניית רכבים לפירוק בחיפה והקריות</Link> כולל פינוי מיידי מהדרך.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם גוררים רכבים מהשטח?</h3>
              <p className="text-gray-600">כן, אם נתקעתם באזור הררי או בדרכי עפר ליד הכביש המהיר, אנו מציעים שירות <Link href="/areas/haifa-general/off-road-mud-rescue-carmel-private-car" className="text-blue-600 underline">חילוץ רכבים מבוץ בכרמל</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold">האם השירות כולל גרירה לאזור התעשייה?</h3>
              <p className="text-gray-600">בוודאי, אנו מבצעים גרירות לאזור התעשייה בקרית ביאליק, למידע נוסף ראו <Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-bialik-industrial-zone" className="text-blue-600 underline">גרירת רכבים לאזור התעשייה קרית ביאליק</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}