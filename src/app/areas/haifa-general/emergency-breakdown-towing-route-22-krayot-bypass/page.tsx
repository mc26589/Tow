import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירה בכביש 22 (עוקף קריות) | שירות מהיר 24/7 | הגעה מהירה",
  description: "נתקעתם בכביש 22 עוקף קריות? צוות גרירה זמין 24/7 יגיע אליכם תוך דקות. שירות מקצועי לרכבים פרטיים ומסחריים במחיר הוגן. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/emergency-breakdown-towing-route-22-krayot-bypass"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ עוקף קריות",
    "areaServed": "Haifa and Krayot",
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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">שירותי גרירה וחילוץ דחופים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? הצוות המקצועי שלנו בדרך אליכם. הגעה מהירה, אמינה ומחיר הוגן לכל סוגי הרכבים 24/7.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
        <p className="mb-4">
          אנו מתמחים בחילוץ רכבים תקועים לאורך ציר עוקף קריות. זקוקים לשירותי 
          <Link href="/areas/haifa-general/towing-services-road-22-krayot" className="text-blue-600 underline"> גרירה בכביש 22</Link> 
          או מחפשים <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-600 underline">גרירת רכב בצ'ק פוסט</Link>? הצוות שלנו ערוך לכל תרחיש, כולל טיפול בבעיות סוללה עם <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-600 underline">חילוץ רכב חשמלי בכביש 22</Link>.
        </p>
        <ul className="list-disc pr-6 space-y-2 mb-8">
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>הגעה מהירה לכל נקודה בכביש 22 והסביבה.</li>
          <li>טיפול ברכבים פרטיים, מסחריים ורכבי שטח.</li>
          <li>מחירים הוגנים ושקופים ללא הפתעות.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">שאלות נפוצות</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">תוך כמה זמן תגיעו אלי בכביש 22?</h3>
            <p>אנו משתדלים להגיע לכל נקודה על ציר עוקף קריות במינימום זמן. זמני ההגעה תלויים בעומסי התנועה, אך תמיד נעשה את המירב להגיע אליכם במהירות האפשרית.</p>
          </div>
          <div>
            <h3 className="font-bold">מה עושים אם נגמרה הסוללה ברכב החשמלי?</h3>
            <p>אנחנו מציעים פתרונות ייעודיים, כולל <Link href="/areas/haifa-general/emergency-towing-electric-car-route-22-krayot" className="text-blue-600 underline">שירותי גרירה לרכב חשמלי בכביש 22</Link> לכל מטען קרוב.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם מציעים גרירה זולה באיזור הקריות?</h3>
            <p>כן, אנו מספקים פתרונות במחירים אטרקטיביים, כגון <Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="text-blue-600 underline">שירותי גרירה זולים בקרית ביאליק</Link> והסביבה.</p>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-600">
          *הערה: אנו מתמחים ברכבים בלבד ואיננו מספקים שירותי גרירה לאופנועים. למידע נוסף על <Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="text-blue-600 underline">גרירה זולה בצ'ק פוסט</Link> או חילוצים מיוחדים, ניתן לפנות למוקד שלנו.
        </p>
      </section>
    </main>
  );
}