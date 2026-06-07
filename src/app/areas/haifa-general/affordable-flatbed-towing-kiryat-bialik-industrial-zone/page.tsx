import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר שטוח באזור התעשייה קריית ביאליק | מחיר הוגן 24/7",
  description: "נתקעתם באזור התעשייה קריית ביאליק? גרר שטוח מקצועי במחיר הוגן, הגעה מהירה, שירות לרכבים פרטיים ומסחריים. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-flatbed-towing-kiryat-bialik-industrial-zone",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Kiryat Bialik",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8350",
      "longitude": "35.0750"
    },
    "serviceType": "Flatbed Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרירת רכב על גבי משטח (גרר שטוח) באזור התעשייה קריית ביאליק במחיר הוגן</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב תקול באזור התעשייה של קריית ביאליק? אנו מציעים שירותי גרירה מקצועיים על גבי משטח (גרר שטוח) לרכבים פרטיים, מסחריים ורכבי 4x4. אם אתם זקוקים גם לשירותי עזר בכבישים סמוכים, ראו את השירות שלנו עבור <Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="underline">כביש 22 עוקף קריות</Link>.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="קריית ביאליק" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לגרירה באזור התעשייה?</h2>
        <ul className="space-y-4 text-lg mb-8">
          <li>✓ <strong>ציוד מתקדם:</strong> שימוש בגרר שטוח המבטיח הובלה בטוחה ללא נזקים לרכב.</li>
          <li>✓ <strong>זמינות מלאה:</strong> מענה מהיר לכל קריאה באזור התעשייה של קריית ביאליק.</li>
          <li>✓ <strong>מומחיות:</strong> אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח.</li>
          <li>✓ <strong>חשוב לדעת:</strong> השירות מיועד לרכבים בלבד (איננו גוררים אופנועים).</li>
        </ul>

        <div className="mt-12 bg-gray-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירה באזור התעשייה</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg">כמה זמן לוקח לגרר להגיע לאזור התעשייה בקריית ביאליק?</h3>
              <p>אנו משתדלים להגיע בתוך זמן קצר ככל הניתן, בהתאם לעומסי התנועה בצירים המרכזיים כמו <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן">עוקף קריות</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם קונים רכבים תקולים לפירוק?</h3>
              <p>כן, אנו מספקים שירותי פינוי וקניית רכבים לפירוק, ניתן לבדוק אפשרויות נוספות בקישור של <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included">קניית רכבים לפירוק עם גרר</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}