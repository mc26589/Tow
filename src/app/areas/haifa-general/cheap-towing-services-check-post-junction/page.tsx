import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "שירותי גרירה בצ'ק פוסט | מחיר הוגן, הגעה מהירה 24/7",
  description: "נתקעתם בצומת צ'ק פוסט? אנו מציעים שירותי גרירה מקצועיים, אמינים ובמחיר זול לרכבים פרטיים ומסחריים. הגעה מהירה לכל אזור חיפה והצפון. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-services-check-post-junction",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בצ'ק פוסט",
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
            זקוקים לחילוץ מהיר בצומת צ'ק פוסט? אנו מתמחים במתן שירותי גרירה מקצועיים לרכבים פרטיים, מסחריים ורכבי 4x4. 
            אנו מציעים מחירים הוגנים ושירות זמין 24/7. אם נתקעתם בדרכים הסמוכות, ניתן גם להזמין <Link href="/areas/haifa-general/emergency-car-recovery-ditch-route-4-check-post" className="underline font-semibold">חילוץ רכב תקוע בדרכים</Link>.
            חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בצומת צ'ק פוסט?</h2>
          <ul className="space-y-4 text-lg">
            <li>✓ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>✓ הגעה מהירה לכל נקודה בצומת צ'ק פוסט והסביבה, כולל סיוע לבעלי רכבים עם מצבר ריק: <Link href="/areas/haifa-general/flatbed-towing-electric-car-dead-battery-check-post-haifa" className="text-blue-400 hover:underline">שירות גרירה לרכב חשמלי</Link>.</li>
            <li>✓ שירות אדיב ומקצועי במחירים הוגנים.</li>
            <li>✓ ציוד גרירה מתקדם המבטיח שמירה על הרכב שלכם.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על שירותי גרירה בצ'ק פוסט</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">תוך כמה זמן תגיעו לצומת צ'ק פוסט?</h3>
              <p>אנו משתדלים להגיע לכל קריאה באזור צומת צ'ק פוסט והקריות בזמן הקצר ביותר, לרוב תוך דקות ספורות מרגע הקריאה.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם מציעים שירות גם לאזור הקריות?</h3>
              <p>כן, אנו נותנים מענה רחב לכל אזור חיפה והקריות. במידה ואתם זקוקים לשירות באזור צפוני יותר, ניתן לבדוק גם <Link href="/areas/haifa-general/towing-stuck-car-road-22-krayot" className="text-blue-600 underline">גרירה בכביש 22</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}