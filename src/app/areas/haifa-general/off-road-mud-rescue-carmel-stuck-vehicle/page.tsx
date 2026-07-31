import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ שטח בבוץ בכרמל | חילוץ רכב תקוע 24/7 | הגעה מהירה",
  description: "נתקעתם בבוץ בדרכי העפר בכרמל? צוות מקצועי לחילוץ רכב שטח ופרטי 24/7. מחיר הוגן, שירות מהיר ואמין. אל תתעכבו - התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/off-road-mud-rescue-carmel-stuck-vehicle",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "חילוץ רכבים בחיפה והכרמל",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Off-road vehicle recovery"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ שטח בוץ בכרמל: רכב תקוע? אנחנו בדרך אליך</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ בכרמל? צוות החילוץ המקצועי שלנו זמין עבורכם 24/7 לחילוץ מהיר ובטוח מהשטח.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="חיפה והכרמל" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי חילוץ שטח מקצועיים בכרמל</h2>
        <p className="mb-4">אם הרכב שלכם נתקע בבוץ באזורי השטח של הכרמל, אנו כאן כדי לסייע. אנו מתמחים בחילוץ רכבי 4x4, רכבים פרטיים ומסחריים בתנאי שטח מאתגרים. זקוקים לחילוץ דחוף? אנו מציעים גם שירותי <Link href="/areas/haifa-general/emergency-car-rescue-mud-carmel-forest" className="text-blue-600 hover:underline">חילוץ רכב מהשטח ביערות הכרמל</Link> במקצועיות רבה.</p>
        <p className="mb-4">זכרו, אם אתם נזקקים לסיוע נוסף באזור, ניתן לבדוק גם שירותי <Link href="/areas/haifa-general/fast-towing-road-22-krayot" className="text-blue-600 hover:underline">גרירה מהירה בכבישי הצפון</Link>.</p>
        <p><strong>שימו לב:</strong> אנו מתמחים בחילוץ רכבים בלבד ואיננו מספקים שירותי חילוץ לאופנועים.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ בשטח</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">כמה זמן לוקח לכם להגיע לחילוץ בכרמל?</h3>
              <p>אנו מבינים את הדחיפות ומשתדלים להגיע לכל נקודה בכרמל תוך זמן קצר מרגע הקריאה, בהתאם לתנאי השטח.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם מחלצים גם רכבים פרטיים שלא הם רכבי 4x4?</h3>
              <p>בהחלט. אנו ערוכים לחילוץ מגוון רחב של רכבים שנתקעו בבוץ או בחול, במחיר הוגן ושקוף.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}