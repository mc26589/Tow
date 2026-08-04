import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירה בצ'ק פוסט חיפה | מחיר הוגן | זמינות 24/7",
  description: "נתקעתם בצומת צ'ק פוסט? שירותי גרירה מקצועיים, מהירים ובמחירים הוגנים לרכבים פרטיים ומסחריים. הגעה מהירה, שירות אמין 24/7. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-services-check-post-junction"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
    "areaServed": "חיפה והקריות",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7885",
      "longitude": "35.0253"
    },
    "serviceType": "Towing Service"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירותי גרירה זולים בצומת צ'ק פוסט</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב בצומת צ'ק פוסט? אנו מציעים שירותי גרירה מקצועיים, מהירים ובמחירים הוגנים. 
            אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4. אם נתקעתם בדרכים, ניתן לבדוק גם אפשרויות ל-<Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="underline font-semibold">גרירת רכבים דחופה בצ'ק פוסט</Link>.
            חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בצומת צ'ק פוסט?</h2>
          <ul className="space-y-4 text-lg">
            <li>✓ זמינות מלאה 24/7 לכל קריאה באזור הצ'ק פוסט.</li>
            <li>✓ מחירים הוגנים ושקופים ללא הפתעות.</li>
            <li>✓ צוות מיומן עם ציוד גרירה חדיש ובטוח.</li>
            <li>✓ הגעה מהירה לכל נקודה בצומת ובסביבתה, כולל שירותים כמו <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-400 hover:underline">גרירה עקב תקלה בצ'ק פוסט</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על שירותי גרירה בצ'ק פוסט</h2>
          <div className="space-y-6 max-w-3xl">
            <div>
              <h3 className="text-xl font-bold">כמה זמן לוקח לגרר להגיע לצומת צ'ק פוסט?</h3>
              <p>ברוב המקרים, הגרר שלנו נמצא בקרבת מקום ויכול להגיע תוך זמן קצר מאוד. אנו מבינים את הדחיפות של היתקעות בכביש סואן כמו צ'ק פוסט.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם אתם גוררים רכבים חשמליים?</h3>
              <p>כן, אנו מציעים שירותי <Link href="/areas/haifa-general/affordable-electric-car-towing-check-post-krayot" className="text-blue-600 underline">גרירת רכבים חשמליים בצ'ק פוסט</Link> תוך הקפדה על נהלי בטיחות מחמירים.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">מה עושים אם הרכב מושבת לגמרי?</h3>
              <p>אם הרכב אינו בר תיקון, אנו יכולים לסייע בפינוי מהיר שלו, כולל אפשרויות של <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal" className="text-blue-600 underline">קניית רכבים לפירוק באזור חיפה והקריות</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}