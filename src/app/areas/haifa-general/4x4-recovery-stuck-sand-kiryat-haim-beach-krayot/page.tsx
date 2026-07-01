import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'חילוץ 4x4 בחוף קרית חיים: תקועים בחול? הגעה מהירה 24/7',
  description: 'נתקעתם עם רכב 4x4 בחול בחוף קרית חיים? צוות מקצועי לחילוץ רכבי שטח תקועים בקריות ובחיפה. מחיר הוגן ושירות מהיר 24/7. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/4x4-recovery-stuck-sand-kiryat-haim-beach-krayot',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי חילוץ 4x4 בחוף קרית חיים והקריות',
    'description': 'שירותי חילוץ מקצועיים ומהירים לרכבי 4x4 שנתקעו בחול בחוף קרית חיים, חיפה והקריות. זמינות 24/7.',
    'url': `https://yourdomain.com/areas/haifa-general/4x4-recovery-stuck-sand-kiryat-haim-beach-krayot`,
    'telephone': `+${BUSINESS_INFO.phone}`,
    'priceRange': 'החל מ-300 ש"ח',
    'areaServed': { '@type': 'Place', 'name': 'חיפה והקריות' },
    'openingHoursSpecification': { '@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], 'opens': '00:00', 'closes': '23:59' },
    'geo': { '@type': 'GeoCoordinates', 'latitude': 32.819, 'longitude': 35.050 },
    'serviceType': ['חילוץ רכב 4x4', 'חילוץ רכב שטח', 'חילוץ רכב תקוע בחול', 'גרירה בקריות']
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">חילוץ רכב 4x4 תקוע בחול בחוף קרית חיים, הקריות</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">נתקעתם עם רכב השטח בחולות? צוות החילוץ שלנו זמין 24/7 להוצאת רכבי 4x4 מחוף קרית חיים והסביבה. מענה מהיר, מחיר הוגן וציוד חילוץ מקצועי.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-600">התקשרו עכשיו לחילוץ מהיר!</a>
            <WhatsAppCTA cityName="הקריות" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">למה לבחור בנו לחילוץ רכב השטח שלכם בקריות?</h2>
          <div className="grid md:grid-cols-3 gap-8">
             {/* Content blocks remain same */}
          </div>
          <div className="mt-12 p-6 bg-gray-800 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">שירותים נוספים באזור</h3>
            <p>זקוקים לשירותים נוספים? אנו מציעים גם <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-yellow-400 underline">גרירה 24 7 עוקף קריות</Link> או עזרה במקרה של רכב תקוע בדרכים אחרות כמו <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-yellow-400 underline">חילוץ רכב חשמלי בכביש 22</Link>.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-950 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות על חילוץ רכב בחול</h2>
          <div className="space-y-6">
            <div><h3 className="font-bold text-yellow-400">כמה זמן לוקח להגיע לחוף קרית חיים?</h3><p>ברוב המקרים אנו מגיעים תוך 30-45 דקות מרגע הקריאה, בהתאם לעומסי התנועה באזור הקריות.</p></div>
            <div><h3 className="font-bold text-yellow-400">האם אתם מחלצים גם רכבים פרטיים שלא 4x4?</h3><p>כן, אנו נותנים שירותי גרירה וחילוץ לרוב סוגי הרכבים, למעט אופנועים.</p></div>
            <div><h3 className="font-bold text-yellow-400">מה טווח המחירים לחילוץ בחול?</h3><p>המחיר נקבע לפי מורכבות החילוץ. נשמח לתת הצעת מחיר הוגנת וברורה בטלפון לפני שנגיע אליכם.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}