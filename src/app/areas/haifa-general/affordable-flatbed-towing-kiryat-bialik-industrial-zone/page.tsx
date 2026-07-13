import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר שטוח באזור התעשייה קריית ביאליק | 24/7 הגעה מהירה",
  description: "נתקעתם באזור התעשייה קריית ביאליק? שירות גרר שטוח מקצועי במחיר הוגן. זמינות 24/7 לרכבים פרטיים ומסחריים. התקשרו עכשיו להגעה מהירה!",
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
    "priceRange": "$$,$",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרירת רכב על גבי משטח (גרר שטוח) באזור התעשייה קריית ביאליק</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב תקול באזור התעשייה של קריית ביאליק? אנו מציעים שירותי גרירה מקצועיים על גבי משטח (גרר שטוח) לרכבים פרטיים, מסחריים ורכבי 4x4. אם אתם זקוקים גם לשירותי עזר בכבישים סמוכים, ראו את השירות שלנו עבור <Link href="/areas/haifa-general/affordable-24-7-towing-kiryat-bialik-flat-tire" className="underline">סיוע נוסף בקריית ביאליק</Link> או <Link href="/areas/haifa-general/cheap-towing-check-post-kiryat-ata" className="underline">גרירה באזור קריית אתא</Link>.</p>
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
          <li>✓ <strong>ציוד מתקדם:</strong> שימוש בגרר שטוח המבטיח הובלה בטוחה ללא נזקים.</li>
          <li>✓ <strong>זמינות מלאה:</strong> מענה מהיר 24/7 לכל קריאה באזור התעשייה.</li>
          <li>✓ <strong>מומחיות:</strong> מומחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח.</li>
          <li>✓ <strong>חשוב לדעת:</strong> השירות מיועד לרכבים בלבד (איננו גוררים אופנועים).</li>
        </ul>

        <div className="mt-12 bg-gray-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירה בקריית ביאליק</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg">כמה זמן לוקח לגרר להגיע?</h3>
              <p>אנו משתדלים להגיע בתוך זמן קצר ככל הניתן. לעיתים אנו מספקים שירות גם לתושבים הזקוקים ל-<Link href="/areas/haifa-general/affordable-car-towing-kiryat-motzkin-24-7" className="text-blue-600">גרירה בקריית מוצקין</Link> הסמוכה.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">מה עושים עם רכב שלא ניתן לתקן?</h3>
              <p>אם הרכב הושבת, אנו מספקים פתרונות פינוי. למידע נוסף בקרו בדף <Link href="/areas/haifa-general/kone-rehavim-lepiruk-haifa-krayot" className="text-blue-600">קניית רכבים לפירוק בחיפה והקריות</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם גוררים רכבים מהשטח?</h3>
              <p>במידה ונתקעתם בחולות או בדרכי עפר באזור, אנו ממליצים לעיין במידע על <Link href="/areas/haifa-general/4x4-recovery-stuck-sand-kiryat-haim-beach-krayot" className="text-blue-600">חילוץ רכבי 4x4 מהשטח</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}