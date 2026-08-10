import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בקרית ים 24/7 | שירות גרר משטח מהיר | מחיר הוגן",
  description: "נתקעתם עם הרכב בקרית ים? גרר משטח מקצועי 24/7 לכל סוגי הרכבים. הגעה מהירה, מחיר הוגן ושירות ללא תחרות. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-flatbed-towing-kiryat-yam-disabled-vehicle",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Kiryat Yam",
    "priceRange": "₪₪",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8358",
      "longitude": "35.0714"
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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">גרר בקרית ים: שירות גרירת משטח מהיר 24/7</h1>
          <p className="text-lg md:text-xl mb-8">זקוקים לגרר בקרית ים? אנו זמינים בכל שעות היממה לחילוץ רכבים תקולים. שירות אמין, מהיר ומקצועי.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold text-lg">
              התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
            <WhatsAppCTA cityName="קרית ים" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2>שירות גרירת רכב בקרית ים – מענה מהיר לכל תקלה</h2>
        <p className="mb-4">אם הרכב נתקע, שירות גרר המשטח שלנו מבטיח הובלה בטוחה למוסך או לכל יעד אחר. אנו משרתים את כל אזור הצפון, כולל מתן מענה דרך <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600 underline">affordable car breakdown towing check post haifa krayot</Link>. זקוקים לעזרה בקרבת מקום? אנו מספקים פתרונות גם למי שמחפש <Link href="/areas/haifa-general/affordable-24-7-towing-kiryat-bialik-flat-tire" className="text-blue-600 underline">affordable 24 7 towing kiryat bialik flat tire</Link> עבור רכבים פרטיים.</p>
        
        <h3>למה לבחור בגרר שלנו?</h3>
        <ul className="list-disc ml-6 mb-6">
          <li>זמינות 24/7: מגיעים לכל נקודה בקרית ים והסביבה.</li>
          <li>ציוד מקצועי: משטח גרירה למניעת נזקים לרכב.</li>
          <li>מחיר הוגן: ללא הפתעות, שקיפות מלאה.</li>
          <li>ניסיון עשיר: צוות מיומן בטיפול ברכבים תקולים.</li>
        </ul>

        <p className="mb-6">במידה והרכב שלכם מושבת ולא ניתן לתיקון, אנו עובדים בשיתוף פעולה עם שירותי <Link href="/areas/haifa-general/buy-cars-for-scrap-kiryat-yam-rothschild" className="text-blue-600 underline">buy cars for scrap kiryat yam rothschild</Link> כדי לפנות את הרכב בצורה מסודרת.</p>

        <section className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות</h3>
          <dl className="space-y-4">
            <div>
              <dt className="font-bold">מהו זמן ההגעה הממוצע בקרית ים?</dt>
              <dd>אנו משתדלים להגיע לכל קריאה תוך זמן קצר מרגע הפנייה, בהתאם לעומסי התנועה באזור הקריות.</dd>
            </div>
            <div>
              <dt className="font-bold">האם אתם גוררים רכבים מהעליות לכיוון הכרמל?</dt>
              <dd>בהחלט. אם נתקעתם באזורים מורכבים יותר, אנו מספקים שירותי <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-area" className="text-blue-600 underline">car stuck in mud carmel area</Link> מקיפים.</dd>
            </div>
            <div>
              <dt className="font-bold">האם השירות כולל גרירת רכבים ישנים לחלפים?</dt>
              <dd>כן, אם החלטתם לוותר על הרכב, ניתן להיעזר בשירותי <Link href="/areas/haifa-general/sell-damaged-car-for-parts-haifa-immediate-pickup" className="text-blue-600 underline">sell damaged car for parts haifa immediate pickup</Link>.</dd>
            </div>
          </dl>
        </section>
      </section>
    </main>
  );
}