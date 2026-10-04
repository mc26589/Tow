import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בצומת צ'ק פוסט והקריות: שירות זול ומהיר 24/7",
  description: "נתקעתם בצומת צ'ק פוסט? שירות גרר זול, מקצועי ומהיר לכל סוגי הרכבים באזור הקריות. הגעה תוך 30-45 דקות. התקשרו עכשיו להזמנת גרר!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-check-post-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
    "areaServed": "חיפה והקריות",
    "priceRange": "$$, $",
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
    "serviceType": ["גרירת רכבים פרטיים", "גרירת רכבים מסחריים", "חילוץ רכבים תקועים"]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול בצומת צ'ק פוסט והקריות – הגעה מהירה 24/7</h1>
          <p className="text-xl mb-8">
            נתקעתם עם הרכב בצומת צ'ק פוסט? אנו מציעים שירותי גרירה אמינים במחירים הוגנים לרכבים פרטיים ומסחריים. במידה ואתם זקוקים לחילוץ מורכב בדרכים הראשיות, מומלץ לעיין בשירותי <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="underline font-bold">גרירה דחופה בכביש 22</Link> או לבדוק אפשרויות ל-<Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="underline font-bold">שירות גרר זול בקרית ביאליק</Link>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              התקשרו עכשיו להזמנת גרר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בשירות הגרירה שלנו בצ'ק פוסט?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות מלאה 24/7 – אנחנו כאן בשבילכם בכל שעות היממה.</li>
            <li>✓ הגעה מהירה לצומת צ'ק פוסט ולכל רחבי הקריות והסביבה.</li>
            <li>✓ מחירים הוגנים ללא "הפתעות" בחיוב הסופי.</li>
            <li>✓ התמחות ברכבים חשמליים כולל סיוע במצבים של <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="underline">גרירת רכב חשמלי עם מצבר פרוק</Link>.</li>
          </ul>
          
          <div className="mt-12 bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">שאלות נפוצות</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold">מהו זמן ההגעה הממוצע לאזור צ'ק פוסט?</p>
                <p>הצוות שלנו מכיר היטב את צירי התנועה בחיפה. זמן ההגעה המשוער לצומת צ'ק פוסט נע בין 30 ל-45 דקות, בהתאם לעומסי התנועה בזמן הקריאה.</p>
              </div>
              <div>
                <p className="font-bold">האם אתם מספקים שירותי גרירה לרכבים שנתקעו בכביש 22?</p>
                <p>כן, אנו נותנים מענה מקצועי לכל הצירים המרכזיים באזור. למידע נוסף ניתן לבקר בדף המוקדש ל-<Link href="/areas/haifa-general/emergency-towing-electric-car-route-22-krayot" className="underline">גרירת רכבים חשמליים בכביש 22</Link>.</p>
              </div>
              <div>
                <p className="font-bold">האם אתם גוררים אופנועים?</p>
                <p>לא, אנו מתמחים בגרירת רכבים פרטיים ומסחריים בלבד ולא מספקים שירותי גרירה לאופנועים.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}