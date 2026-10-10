import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר זול בצק פוסט חיפה | הגעה מהירה תוך 30 דקות | 24/7",
  description: "נתקעתם בצק פוסט? מחפשים גרר זול ואמין? אנו מספקים שירותי גרירה מקצועיים 24/7 לרכבים ורכבים מסחריים. הגעה מהירה, מחיר הוגן ושירות ללא פשרות. התקשרו עכשיו!",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול לצק פוסט חיפה – חילוץ מהיר 24/7</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם באזור הצק פוסט או על ציר כביש 22? אנו כאן כדי לסייע לכם במהירות ובמחיר הוגן. 
            אנו מתמחים בגרירת רכבים פרטיים ומסחריים. זקוקים לסיוע דחוף בדרך? ראו את שירותי ה-<Link href="/areas/haifa-general/emergency-towing-road-22-krayot" className="text-yellow-300 underline font-semibold">גרירה דחופה בכביש 22</Link> שלנו.
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
            <li>✓ שירות אמין הכולל <Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="text-blue-400 underline">גרר זול בצק פוסט</Link> מורשה.</li>
            <li>✓ שירות מיוחד לתיקון דרך קל או <Link href="/areas/haifa-general/fast-towing-flat-tire-road-22-check-post" className="text-blue-400 underline">החלפת גלגל בכביש 22</Link>.</li>
            <li>✓ שירותים נוספים כגון <Link href="/areas/haifa-general/car-scrapping-haifa-krayot" className="text-blue-400 underline">פינוי רכבים לפירוק בצק פוסט</Link>.</li>
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
              <h3 className="font-bold text-xl">האם אתם מציעים שירות גם לאופנועים?</h3>
              <p className="text-gray-700">כן, אנו מספקים <Link href="/areas/haifa-general/heavy-motorcycle-breakdown-towing-route-22-check-post-haifa" className="text-blue-600 underline">גרירת אופנועים בצק פוסט</Link> בצורה בטוחה ומקצועית.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם מגיעים גם לקריות הסמוכות?</h3>
              <p className="text-gray-700">בהחלט. אנו מספקים שירותי גרירה מקיפים לכל אזור חיפה, הקריות וציר כביש 22.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}