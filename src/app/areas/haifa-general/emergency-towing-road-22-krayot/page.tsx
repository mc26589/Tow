import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 (עוקף קריות) - שירות מהיר 24/7 | מחיר הוגן",
  description: "נתקעתם בכביש 22? שירות גרירה מקצועי ומהיר לכל סוגי הרכבים באזור עוקף קריות. הגעה מהירה, שירות אדיב ומחירים נוחים. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/emergency-towing-road-22-krayot",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בכביש 22 קריות",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8158",
      "longitude": "35.0567"
    },
    "priceRange": "$$,$",
    "serviceType": "Emergency Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר דחוף לכביש 22 - עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? אנו מספקים שירותי גרירה מקצועיים ומהירים לאורך כביש 22. שירות בטוח לכל סוגי הרכבים הפרטיים והמסחריים.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לגרר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירות גרירה בכביש 22?</h2>
        <ul className="space-y-4 text-lg mb-8">
          <li>✓ הגעה מהירה לכל נקודה בכביש 22 (עוקף קריות) - חוסכים לכם זמן המתנה יקר.</li>
          <li>✓ שירות 24/7 ללא הפסקה, כולל סופי שבוע וחגים.</li>
          <li>✓ מחירים הוגנים ושקופים – מקבלים הצעת מחיר כבר בשיחת הטלפון.</li>
          <li>✓ ניסיון רב ב- <Link href="/areas/haifa-general/towing-stuck-car-road-22-krayot" className="text-blue-600 underline">חילוץ וגרירת רכבים תקועים</Link> בכל תנאי הדרך.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על גרירה בכביש 22</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-xl">כמה זמן לוקח לגרר להגיע לכביש 22?</h3>
            <p>אנו פרוסים באזור הקריות ומבטיחים זמן הגעה מהיר ככל הניתן בהתאם לעומסי התנועה.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">האם אתם גוררים אופנועים?</h3>
            <p>חשוב לציין: אנו מתמחים בגרירת רכבים פרטיים ומסחריים בלבד. אם אתם זקוקים לשירות אחר, ניתן לבדוק באזורנו שירותי <Link href="/areas/haifa-general/motorcycle-towing-road-22-krayot" className="text-blue-600 underline">גרירת אופנועים בכביש 22</Link>.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">מה לעשות אם הרכב נתקע במקום מסוכן?</h3>
            <p>ראשית, ודאו שכל הנוסעים מחוץ לרכב במקום בטוח, הדליקו אורות מצוקה והתקשרו אלינו בהקדם כדי שנגיע לחלץ אתכם בבטחה.</p>
          </div>
        </div>

        <p className="mt-8 text-gray-600 italic">
          *שירותי גרירה מקצועיים לכל תושבי הצפון, אנו זמינים לכל קריאה באזור חיפה והקריות.
        </p>
      </section>
    </main>
  );
}