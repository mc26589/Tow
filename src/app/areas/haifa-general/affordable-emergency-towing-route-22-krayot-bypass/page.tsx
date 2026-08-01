import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירה בכביש 22 עוקף קריות | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בכביש 22? אנו מספקים שירותי גרירה מקצועיים ומהירים לעוקף קריות 24/7. הגעה מהירה, שירות אדיב ומחיר הוגן לכל סוגי הרכבים. התקשרו עכשיו!",
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
    "priceRange": "$$,$",
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
        "name": "מה לעשות במקרה של תאונה בכביש 22?",
        "acceptedAnswer": { "@type": "Answer", "text": "במקרה של תאונה יש לפנות את הרכב מהנתיב במהירות ובבטחה. אנו מתמחים בפינוי מהיר." }
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
            זקוקים לסיוע במקרה של תאונה? אנו מציעים שירות מיוחד של <Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="underline font-semibold">גרירה לאחר תאונה בכביש 22</Link>.
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
            <li>✓ שירות אדיב ושקוף במחיר הוגן.</li>
            <li>✓ מומחים לרכבים פרטיים, מסחריים ורכבי שטח.</li>
            <li>✓ שירות ממוקד עבור <Link href="/areas/haifa-general/motorcycle-towing-accident-road-22-kiryat-ata" className="text-blue-400">גרירת אופנועים לאחר תאונה בכביש 22</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה בעוקף קריות</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
            <div>
              <h3 className="font-bold">באילו רכבים אתם מטפלים?</h3>
              <p className="text-gray-600">אנו נותנים שירות לרכבים פרטיים, רכבים מסחריים ורכבי 4x4.</p>
            </div>
            <div>
              <h3 className="font-bold">מה טווח המחירים לגרירה בכביש 22?</h3>
              <p className="text-gray-600">אנו מציעים מחירים הוגנים ותחרותיים. המחיר נקבע לפי מרחק הגרירה וסוג הרכב. צרו קשר לקבלת הצעת מחיר מדויקת.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם גוררים גם לאחר תאונות?</h3>
              <p className="text-gray-600">כן, אנו מספקים מענה מהיר במיוחד למקרים של רכבים תקועים או לאחר תאונות דרכים לאורך כביש 22.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}