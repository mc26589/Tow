import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "שירותי גרירה בכביש 22 עוקף קריות | זמינות 24/7 ומחיר הוגן",
  description: "נתקעתם בכביש 22 עוקף קריות? אנו מציעים שירותי גרירה מהירים, מקצועיים ובמחיר הוגן 24/7 לכל סוגי הרכבים. התקשרו עכשיו להגעה מהירה!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה דחופים עוקף קריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$",
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
        "acceptedAnswer": { "@type": "Answer", "text": "אנו שואפים להגיע לכל קריאה בכביש 22 תוך זמן מינימלי, בהתאם לעומסי התנועה באזור." }
      },
      {
        "@type": "Question",
        "name": "האם אתם גוררים גם אופנועים?",
        "acceptedAnswer": { "@type": "Answer", "text": "לא, איננו מספקים שירותי גרירה לאופנועים, אלא לרכבים פרטיים ומסחריים בלבד." }
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
            נתקעתם עם הרכב בכביש 22? אנו מציעים מענה מהיר, מקצועי ובמחיר הוגן לכל סוגי הרכבים הפרטיים והמסחריים. 
            צריכים גם שירותי <Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="underline">גרירה בשינוע (גרר משטח)</Link>? אנחנו כאן.
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
            <li>✓ שירות אדיב ומקצועי במחיר הוגן ושקוף.</li>
            <li>✓ מומחים לרכבים פרטיים, מסחריים ורכבי שטח.</li>
            <li>✓ שירות משלים: <Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="text-blue-400">גרירה מהירה מצומת צ'ק פוסט</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">שאלות נפוצות (FAQ)</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="font-bold">באילו רכבים אתם מטפלים?</p>
            <p className="text-gray-600 mb-4">אנו נותנים שירות לרכבים פרטיים, רכבים מסחריים ורכבי 4x4. איננו מטפלים באופנועים.</p>
            <p className="font-bold">מה טווח המחירים?</p>
            <p className="text-gray-600">אנו מציעים מחירים הוגנים ותחרותיים. ניתן ליצור קשר לקבלת הצעת מחיר מדויקת לפי מיקום התקיעה.</p>
          </div>
        </div>
      </section>
    </main>
  );
}