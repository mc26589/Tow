import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ 4x4 בבוץ סטלה מאריס חיפה | הגעה מהירה 24/7",
  description: "נתקעתם עם רכב השטח בבוץ בסטלה מאריס? חילוץ 4x4 מקצועי בחיפה והסביבה. מחיר הוגן, צוות מיומן וזמינות 24/7. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/4x4-stuck-in-mud-stella-maris-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8315", "longitude": "34.9735" },
    "priceRange": "$$, $$$",
    "serviceType": "4x4 Off-road recovery and towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב 4x4 שנתקע בבוץ באזור סטלה מאריס חיפה</h1>
          <p className="text-xl mb-8 leading-relaxed">
            נתקעתם עם רכב השטח בבוץ בסטלה מאריס? אל תנסו לצאת לבד. אנו מספקים שירותי חילוץ מקצועיים לרכבי 4x4, רכבים פרטיים ומסחריים. הצוות שלנו מגיע במהירות לכל נקודה בחיפה והכרמל.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בסטלה מאריס?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות 24/7 לכל קריאת חילוץ בחיפה והסביבה.</li>
            <li>✓ ציוד חילוץ מתקדם לרכבי 4x4 ששקעו בבוץ, חול או תנאי שטח קשים.</li>
            <li>✓ מחירים הוגנים ושירות שקוף ללא הפתעות.</li>
            <li>✓ ניסיון רב בחילוצי שטח מורכבים באזור הכרמל.</li>
          </ul>
          <div className="mt-8 p-4 bg-gray-800 rounded-lg">
            <h3 className="font-bold mb-2">שירותי חילוץ נוספים באזור:</h3>
            <div className="flex flex-col gap-2">
              <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="text-blue-400 hover:underline">חילוץ רכבים מבוץ בשמורת הכרמל</Link>
              <Link href="/areas/haifa-general/emergency-tow-stuck-car-stella-maris-haifa-hills" className="text-blue-400 hover:underline">חילוץ דחוף מרכב תקוע בגבעות סטלה מאריס</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על חילוץ שטח בחיפה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">האם אתם מחלצים מכל סוגי השטח בחיפה?</h3>
              <p>כן, אנו מתמחים בחילוץ רכבים שנתקעו בדרכי עפר, בוץ ואזורים הרריים. הניסיון שלנו כולל חילוצים מורכבים באזור סטלה מאריס, נחל שיח והכרמל.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">מהו זמן ההגעה הממוצע לחילוץ?</h3>
              <p>אנו מבינים את הדחיפות במצבי שטח ושואפים להגיע לכל נקודה בחיפה תוך זמן קצר ככל האפשר בהתאם לתנאי התנועה.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם מחלצים אופנועים שנתקעו בשטח?</h3>
              <p>לא, אנו מתמקדים בחילוץ רכבים פרטיים, רכבי שטח (4x4) ומסחריים בלבד ולא מבצעים חילוץ או גרירה לאופנועים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}