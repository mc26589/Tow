import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר זול בצ'ק פוסט חיפה | הגעה תוך 30 דקות | 24/7",
  description: "נתקעתם בצ'ק פוסט? גרר זול בחיפה זמין 24/7. הגעה מהירה, מחיר הוגן ושירות מקצועי לרכבים פרטיים ומסחריים. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-check-post-haifa"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות - צ'ק פוסט",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול לצ'ק פוסט חיפה – חילוץ מהיר 24/7</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם באזור הצ'ק פוסט או על ציר כביש 22? אנו כאן כדי לסייע לכם במהירות ובמחיר הוגן. 
            אנו מתמחים בגרירת רכבים פרטיים ומסחריים. זקוקים לסיוע דחוף בדרך? ראו את שירותי ה-<Link href="/areas/haifa-general/emergency-towing-road-22-kiryat-ata-interchange" className="text-yellow-300 underline font-semibold">גרירה דחופה בכביש 22</Link> שלנו.
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
            <li>✓ הגעה מהירה לצ'ק פוסט, דרך 22 והסביבה.</li>
            <li>✓ מחירים הוגנים ושקופים - ללא הפתעות בחיוב.</li>
            <li>✓ זמינות מלאה 24/7 לחילוץ רכבים תקועים.</li>
            <li>✓ שירות אמין הכולל <Link href="/areas/haifa-general/cheap-towing-services-check-post" className="text-blue-400 underline">גרר זול בצק פוסט</Link> מקצועי.</li>
            <li>✓ פתרונות מתקדמים עבור <Link href="/areas/haifa-general/flatbed-towing-electric-car-dead-battery-check-post-haifa" className="text-blue-400 underline">גרירת רכב חשמלי עם מצבר ריק</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">מה זמן ההגעה המשוער לצומת הצ'ק פוסט?</h3>
              <p className="text-gray-700">בדרך כלל אנו מגיעים תוך 30-45 דקות, תלוי בעומסי התנועה בציר הראשי של חיפה ובשעה ביום.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם מספקים שירותי גרירה לרכבים חשמליים?</h3>
              <p className="text-gray-700">כן, אנו מציעים <Link href="/areas/haifa-general/emergency-towing-electric-car-route-22-krayot" className="text-blue-600 underline">שירותי חילוץ רכב חשמלי בכביש 22</Link> עם ציוד מתקדם.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">מה לעשות אם הרכב הושבת כליל?</h3>
              <p className="text-gray-700">אנו מספקים פתרונות פינוי. במקרים של רכב ישן, ניתן לבדוק איתנו <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot" className="text-blue-600 underline">פינוי רכבים לפירוק בחיפה</Link> בצורה מקצועית.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}