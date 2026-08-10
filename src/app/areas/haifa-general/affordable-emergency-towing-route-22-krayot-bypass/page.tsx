import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירה בכביש 22 עוקף קריות | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בכביש 22? שירותי גרירה מקצועיים ומהירים לעוקף קריות 24/7. הגעה מהירה, שירות אדיב ומחיר הוגן לכל סוגי הרכבים. התקשרו עכשיו לקבלת סיוע!",
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
        "name": "האם אתם נותנים שירות גרירה גם לאזור צ'ק פוסט?",
        "acceptedAnswer": { "@type": "Answer", "text": "כן, אנו מספקים שירותי גרירה מקיפים גם באזור הצ'ק פוסט והחיבורים לכביש 22. למידע נוסף בקרו בדף גרירת רכבים תקיעים בצ'ק פוסט." }
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
            נתקעתם עם הרכב בכביש 22? אנו מציעים מענה מהיר ומקצועי לכל סוגי הרכבים הפרטיים והמסחריים. 
            זקוקים לסיוע באזור צ'ק פוסט והסביבה? אנו מציעים פתרונות מהירים גם עבור <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="underline font-semibold">שירותי גרירת רכבים תקיעים בצ'ק פוסט</Link>.
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
            <li>✓ הגעה מהירה לנקודת התקיעה בבטחה.</li>
            <li>✓ שירות אדיב ושקוף במחיר הוגן.
            </li>
            <li>✓ מומחים לרכבים פרטיים ומסחריים כבדים.
            </li>
            <li>✓ שירות משלים עבור <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-400">גרירת רכבים תקועים בכביש 22 ובצ'ק פוסט</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה בעוקף קריות</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
            <div>
              <h3 className="font-bold">באילו רכבים אתם מטפלים?</h3>
              <p className="text-gray-600">אנו נותנים שירות לרכבים פרטיים, מסחריים ורכבי 4x4. אם נתקעת בשטח, אנו מציעים גם פתרונות מקצועיים כמו <Link href="/areas/haifa-general/4x4-vehicle-stuck-in-mud-carmel-forest" className="text-blue-600 underline">חילוץ רכבי 4x4 שנתקעו בבוץ</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold">מה טווח המחירים לגרירה בכביש 22?</h3>
              <p className="text-gray-600">אנו מציעים מחירים הוגנים ותחרותיים בהתאם למרחק הגרירה וסוג הרכב. המטרה שלנו היא לתת מענה משתלם לכל תקלה בדרך.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם קונים רכבים תקועים ללא יכולת תיקון?</h3>
              <p className="text-gray-600">כן, במידה והרכב במצב של אובדן גמור, ניתן לבדוק שירותי <Link href="/areas/haifa-general/sell-damaged-car-for-parts-haifa-immediate-pickup" className="text-blue-600 underline">מכירת רכב לפירוק בחיפה</Link> במקום לגרור לתיקון.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}