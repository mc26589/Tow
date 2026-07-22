import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר זול בצ'ק פוסט חיפה – הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בצ'ק פוסט? גרר זול בחיפה והקריות זמין עבורכם 24/7. שירותי חילוץ מהירים לרכבים פרטיים ומסחריים במחיר משתלם. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-check-post-haifa"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
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
      "latitude": "32.7940",
      "longitude": "35.0230"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול לצ'ק פוסט חיפה – שירות חילוץ מהיר ומקצועי 24/7</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם באזור הצ'ק פוסט או בצומת הראשי? אנו כאן כדי לסייע לכם במהירות ובמחיר הוגן. 
            אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4. 
            שימו לב: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו באזור הצ'ק פוסט?</h2>
          <ul className="space-y-4 text-gray-300">
            <li>✓ זמינות מלאה 24/7 לכל קריאה באזור המפרץ.</li>
            <li>✓ מחירים הוגנים ושקופים ללא הפתעות.</li>
            <li>✓ היכרות מעמיקה עם צירי התנועה בחיפה והקריות.</li>
            <li>✓ ציוד גרירה חדיש ומקצועי לכל סוגי הרכבים.</li>
          </ul>
          <div className="mt-8">
            <p className="text-sm text-gray-400">מחפשים שירותים נוספים? בדקו גם את <Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-blue-400 underline">שירות גרירה לאחר תאונה בצומת צ'ק פוסט</Link> או <Link href="/areas/haifa-general/cheap-towing-check-post-haifa-fast-service" className="text-blue-400 underline">שירותי גרר מהירים באזור חיפה</Link>.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">כמה זמן לוקח לכם להגיע לצ'ק פוסט?</h3>
              <p className="text-gray-700">ברוב המקרים, אנו מגיעים למוקד הצ'ק פוסט תוך 30-45 דקות מרגע הקריאה, בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם גוררים רכבים מכל סוג?</h3>
              <p className="text-gray-700">אנו מתמחים ברכבים פרטיים, מסחריים ורכבי שטח. איננו נותנים שירות לאופנועים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}