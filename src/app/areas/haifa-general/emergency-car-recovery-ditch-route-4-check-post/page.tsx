import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'חילוץ רכב מתעלה בצומת צ\'ק פוסט | הגעה מהירה 24/7 | מחיר הוגן',
  description: 'נתקעתם בתעלה בכביש 4 צ\'ק פוסט? צוות מקצועי לחילוץ רכב לכל סוגי הרכבים. הגעה מהירה תוך 30 דקות לאזור חיפה והקריות. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/emergency-car-recovery-ditch-route-4-check-post',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי חילוץ וגרירה קריות וחיפה',
    'areaServed': 'Haifa and Krayot',
    'priceRange': 'מחיר הוגן',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.7940',
      'longitude': '35.0340',
    },
    'serviceType': 'Emergency Car Recovery',
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב מתעלה בכביש 4 ליד צומת צ\'ק פוסט</h1>
          <p className="text-xl mb-8">נתקעתם בתעלה? הצוות שלנו זמין 24/7 לחילוץ רכבים מקצועי באזור הצ\'ק פוסט וחיפה. שירות אמין במחיר הוגן.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שירותי חילוץ מקצועיים בצומת צ\'ק פוסט</h2>
          <p className="mb-4">אנו מתמחים בחילוץ רכבים שסטו מהכביש או נתקעו בתעלות. זקוקים ל<Link href="/areas/haifa-general/towing-after-accident-check-post-haifa" className="text-blue-400 underline">גרירה לאחר תאונה בצומת צ\'ק פוסט</Link>? הצוות שלנו זמין עבורכם. אם אתם זקוקים לשירותי גרירה רחבים יותר, אנו מציעים גם <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-blue-400 underline">גרירה 24/7 בעוקף קריות במחיר הוגן</Link>.</p>
          <p>חשוב לנו לציין כי אנו מתמקדים בחילוץ רכבים ואיננו מספקים שירותי חילוץ לאופנועים. אם הרכב הושבת לחלוטין, אנו מספקים פתרונות <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included" className="text-blue-400 underline">קניית רכבים לפירוק בחיפה כולל גרירה</Link>.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">כמה זמן לוקח לכם להגיע לצומת צ\'ק פוסט?</h3>
              <p>בדרך כלל אנו מגיעים לכל נקודה באזור הצ\'ק פוסט תוך 30 דקות. לעיתים אנו מספקים גם <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-600 underline">גרירת חירום בכביש 22 עוקף קריות</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">מה לעשות אם נתקעתי עם רכב חשמלי?</h3>
              <p>אנו מציעים שירותי <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-600 underline">גרירה לרכב חשמלי עם סוללה ריקה בכביש 22</Link> ומסייעים בפינוי מהיר מהכביש.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם מחלצים רכבים משטח בוצי?</h3>
              <p>כן, אנו ערוכים לחילוצי שטח, דומים ל<Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="text-blue-600 underline">חילוץ שטח 4X4 ביערות הכרמל</Link>, בהתאם לתנאי השטח.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}