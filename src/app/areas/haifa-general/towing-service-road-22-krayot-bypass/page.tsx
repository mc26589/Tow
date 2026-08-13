import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 עוקף קריות | שירות מהיר 24/7 | מחיר הוגן",
  description: "נתקעתם עם הרכב בכביש 22 עוקף קריות? הגעה מהירה תוך דקות! שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים 24/7. התקשרו עכשיו להצעה הוגנת!",
  alternates: {
    canonical: "/areas/haifa-general/towing-service-road-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בכביש 22 עוקף קריות",
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
      "latitude": "32.8156",
      "longitude": "35.0650"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכבים בכביש 22 עוקף קריות – חילוץ מהיר 24/7</h1>
          <p className="text-xl mb-8 leading-relaxed">
            נתקעתם עם הרכב בכביש 22? אנו כאן לשירותכם עם ציוד חדיש לחילוץ רכבים פרטיים, מסחריים ורכבי 4x4. 
            אנו מספקים מענה מהיר לכל מי שנמצא על עוקף קריות וזקוק לשירות גרירה אמין. 
            חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים. בין אם מדובר בתקלה מכנית או צורך בפינוי מהיר, אנו כאן למענכם.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="כביש 22 עוקף קריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות מלאה 24/7 לכל קריאה בכביש עוקף קריות.</li>
            <li>✓ הגעה מהירה לנקודת התקיעה סמוך לצומת צ'ק פוסט והקריות.</li>
            <li>✓ שירות מקצועי לרכבים פרטיים, מסחריים ו-4x4 עם הציוד המתקדם ביותר.</li>
            <li>✓ מחירים הוגנים ושקיפות מלאה – ללא הפתעות.</li>
          </ul>
          <div className="mt-8 p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold mb-4">שירותים נוספים באזור:</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              <li><Link href="/areas/haifa-general/cheap-towing-check-post-haifa-fast-service" className="text-blue-400 hover:underline">שירות גרירה מהיר בצומת צ'ק פוסט</Link></li>
              <li><Link href="/areas/haifa-general/electric-vehicle-breakdown-towing-route-22-krayot-bypass" className="text-blue-400 hover:underline">גרירת רכב חשמלי בכביש 22</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירה בכביש 22</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg">כמה זמן לוקח לגרר להגיע לעוקף קריות?</h4>
              <p>אנו פרוסים במוקדים אסטרטגיים ומשתדלים להגיע לכל נקודה בכביש 22 תוך זמן קצר מרגע הקריאה.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">האם אתם גוררים רכבים חשמליים?</h4>
              <p>כן, יש לנו ציוד מותאם לכל סוגי הרכבים, כולל רכבים חשמליים עם מערכות בלימה אלקטרוניות. ראו גם: <Link href="/areas/haifa-general/electric-vehicle-breakdown-towing-route-22-krayot-bypass" className="text-blue-600 underline">גרירת רכבים חשמליים</Link>.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">מהו טווח המחירים לגרירה?</h4>
              <p>המחיר נקבע לפי מרחק הגרירה וסוג הרכב. אנו מקפידים על מחירים הוגנים ושקופים לכל לקוח.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}