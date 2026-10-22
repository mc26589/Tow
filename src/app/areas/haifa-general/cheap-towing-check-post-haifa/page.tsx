import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בצק פוסט חיפה - הגעה תוך 30 דקות | שירות 24/7",
  description: "נתקעתם בצק פוסט? מחפשים גרר אמין במחיר הוגן? אנו מספקים שירותי גרירה מקצועיים 24/7 לכל סוגי הרכבים באזור הצק פוסט וציר 22. התקשרו עכשיו לקבלת שירות מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-check-post-haifa"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות - צק פוסט",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול בצק פוסט חיפה – חילוץ מהיר 24/7</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם באזור הצק פוסט או על ציר כביש 22? אנו כאן כדי לסייע לכם במהירות ובמחיר הוגן. 
            אנו מתמחים בגרירת רכבים פרטיים ומסחריים. זקוקים לסיוע דחוף בדרך? ראו את שירותי ה-<Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="text-yellow-300 underline font-semibold">גרירה דחופה בכביש 22</Link> שלנו.
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
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו באזור הצק פוסט?</h2>
          <ul className="space-y-4 text-gray-300">
            <li>✓ הגעה מהירה לצק פוסט, דרך 22 והסביבה.</li>
            <li>✓ מחירים הוגנים ושקופים - ללא הפתעות בחיוב.</li>
            <li>✓ זמינות מלאה 24/7 לחילוץ רכבים תקועים.</li>
            <li>✓ שירות מקיף כולל <Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-blue-400 underline">גרירה לאחר תאונה בצק פוסט</Link>.</li>
            <li>✓ פתרונות מקצועיים לבעיות מורכבות כמו <Link href="/areas/haifa-general/buying-cars-for-scrap-check-post-haifa" className="text-blue-400 underline">קניית רכבים לפירוק בצק פוסט</Link> במקום.</li>
            <li>✓ שירותי דרך בטוחים המותאמים לרכבים מכל הסוגים, ללא חריגות.</li>
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">מה זמן ההגעה המשוער לצומת הצק פוסט?</h3>
              <p className="text-gray-700">בדרך כלל אנו מגיעים תוך 30-45 דקות, תלוי בעומסי התנועה בציר הראשי ובשעה ביום.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם נותנים שירות גם לקריות?</h3>
              <p className="text-gray-700">בוודאי. אנו מספקים מענה מלא לכל אזור חיפה והקריות, כולל שירותי <Link href="/areas/haifa-general/towing-services-road-22-krayot-bypass" className="text-blue-600 underline">גרירה בכביש 22 עוקף קריות</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">מה לעשות במקרה של תאונה בצומת?</h3>
              <p className="text-gray-700">במצב של תאונה, בטיחות היא לפני הכל. פנו אלינו ואנו נגיע עם גרר מקצועי לפינוי הרכב במהירות לכל יעד שתבחרו.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}