import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בצ'ק פוסט והקריות | שירות מהיר ומחיר הוגן 24/7",
  description: "נתקעתם בצ'ק פוסט או בקריות? גרר זמין 24/7 לשירותי גרירה מקצועיים במחיר הוגן. הגעה מהירה לכל אזור חיפה והקריות. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-check-post-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט קריות",
    "areaServed": ["חיפה", "קריות", "צ'ק פוסט"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "35.0250"
    },
    "priceRange": "$",
    "serviceType": "Towing Service"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול באזור צ'ק פוסט קריות</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? אנו מציעים שירותי גרירה מהירים, אמינים ובמחירים הוגנים לכל סוגי הרכבים הפרטיים והמסחריים באזור צ'ק פוסט והקריות. זקוקים גם ל<Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="underline">שירות גרירה דחוף בכביש 22</Link>? אנחנו כאן בשבילכם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">למה לבחור בנו?</h2>
          <ul className="grid md:grid-cols-3 gap-8">
            <li className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="font-bold text-xl mb-2">זמינות 24/7</h3>
              <p>אנחנו זמינים עבורכם בכל שעה, גם בסופי שבוע וחגים.</p>
            </li>
            <li className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="font-bold text-xl mb-2">מחירים הוגנים</h3>
              <p>שירות מקצועי במחיר זול ומשתלם ללא הפתעות. במידה והרכב ישן, נשמח גם להציע <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included" className="text-blue-600">פינוי רכבים לפירוק באזור חיפה</Link>.</p>
            </li>
            <li className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="font-bold text-xl mb-2">מומחיות ברכבים</h3>
              <p>אנו מתמחים בגרירת רכבים פרטיים, מסחריים ו-4x4. שימו לב: איננו מספקים שירותי גרירה לאופנועים.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">תוך כמה זמן הגרר מגיע לצ'ק פוסט?</h3>
              <p>הצוותים שלנו פרוסים באזור צ'ק פוסט והקריות, מה שמאפשר לנו זמני הגעה מהירים מאוד, לרוב תוך פחות מ-30 דקות מרגע הקריאה.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם מפנים רכבים ללא טסט?</h3>
              <p>כן, אנו מספקים שירותי גרירה לרכבים מושבתים וכן מבצעים <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal" className="text-blue-600">קניית רכבים לפירוק בחיפה והקריות</Link> עם פינוי מיידי.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">מה עושים אם הרכב נתקע בשטח?</h3>
              <p>במידה ונתקעתם באזור חולי או בוצי, אנו מספקים גם שירותי חילוץ מורכבים. מומלץ לבדוק את השירותים שלנו כמו <Link href="/areas/haifa-general/4x4-recovery-stuck-sand-kiryat-haim-beach-krayot" className="text-blue-600">חילוץ 4x4 בחולות קרית חיים</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}