import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בסטלה מאריס חיפה - חילוץ רכב תקוע 24/7 | מחיר הוגן",
  description: "נתקעתם עם הרכב בעליות של סטלה מאריס? גרר חירום זמין 24/7 בחיפה. חילוץ מקצועי לרכב פרטי, מסחרי ו-4X4. הגעה מהירה, מחיר הוגן. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/emergency-tow-stuck-car-stella-maris-haifa-hills",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרר חירום חיפה והקריות",
    "description": "שירותי גרר וחילוץ רכבים 24/7 בחיפה, בדגש על אזור סטלה מאריס והכרמל.",
    "url": "https://www.yourdomain.com/areas/haifa-general/emergency-tow-stuck-car-stella-maris-haifa-hills",
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "$$,$",
    "areaServed": {
      "@type": "Place",
      "name": "חיפה, הכרמל וסטלה מאריס",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.8185,
        "longitude": 34.9795
      }
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "serviceType": ["גרר חירום", "חילוץ רכב", "גרירה בכרמל"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            גרר בסטלה מאריס חיפה – חילוץ מהיר לרכבים תקועים 24/7
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            נתקעתם בעליות התלולות של סטלה מאריס? אנו מספקים שירותי גרר וחילוץ מהירים ואמינים לרכבים פרטיים, מסחריים ו-4X4 באזור חיפה והכרמל. מענה אנושי 24/7, מחירים הוגנים וזמני הגעה קצרים.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              התקשרו אלינו עכשיו לגרר מהיר!
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">שירותי גרירה מקצועיים באזור הכרמל וחיפה</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">למה לבחור בנו בסטלה מאריס?</h3>
              <p className="mb-4">
                העליות והירידות בכרמל דורשות מומחיות וציוד גרירה מתאים. אנו מנוסים מאוד בחילוץ רכבים באזור זה, כולל מקרים של <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-300 underline">חילוץ רכב מבוץ באזור הכרמל</Link> או תקלות טכניות בעליות המפותלות.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">שירותים משלימים</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>זמינות 24/7 לכל סוגי הרכבים (למעט אופנועים).</li>
                <li>גרירה מהירה למוסך או לבית הלקוח במחיר הוגן.</li>
                <li>סיוע ברכבים תקועים בדרכים צרות ומורכבות.</li>
                <li><Link href="/areas/haifa-general/cheap-private-car-towing-ahuza-haifa" className="text-blue-300 underline">גרר זול לרכב פרטי באחוזה וחיפה</Link>.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות (FAQ)</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h4 className="font-bold text-lg text-blue-400">כמה זמן לוקח לגרר להגיע לסטלה מאריס?</h4>
              <p>בדרך כלל אנו מגיעים לכל נקודה באזור חיפה וסטלה מאריס תוך 30-45 דקות, בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg text-blue-400">האם אתם גוררים רכבים מכל הסוגים?</h4>
              <p>אנו גוררים רכבים פרטיים, רכבי שטח (4X4) ורכבים מסחריים קלים. שימו לב: איננו מספקים שירותי גרירה לאופנועים.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
