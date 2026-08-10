import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'חילוץ 4x4 מבוץ ביער הכרמל חיפה | הגעה מהירה 24/7 במחיר הוגן',
  description: 'נתקעתם עם רכב השטח בבוץ ביער הכרמל? שירות חילוץ 4x4 מקצועי בחיפה והסביבה. הגעה תוך זמן קצר, זמינות 24/7 ומחירים הוגנים. התקשרו עכשיו!',
  alternates: {
    canonical: 'https://yourdomain.com/areas/haifa-general/4x4-mud-recovery-carmel-haifa',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה וחילוץ חיפה והקריות',
    'description': 'שירותי חילוץ 4x4 מבוץ ביער הכרמל חיפה, גרירה וחילוץ רכבים 24/7.',
    'url': 'https://yourdomain.com/areas/haifa-general/4x4-mud-recovery-carmel-haifa',
    'telephone': `+${BUSINESS_INFO.phone}`,
    'priceRange': '₪',
    'areaServed': { '@type': 'Place', 'name': 'חיפה והקריות' },
    'geo': { '@type': 'GeoCoordinates', 'latitude': 32.789, 'longitude': 35.000 },
    'serviceType': ['חילוץ 4x4', 'חילוץ מבוץ', 'גרירת רכבי שטח']
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">חילוץ 4x4 מבוץ ביער הכרמל חיפה 24/7</h1>
          <p className="text-xl md:text-2xl mb-8">נתקעתם בשטח? צוות מקצועי לחילוץ רכבי שטח בחיפה והכרמל בדרך אליכם.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-lg transition duration-300 shadow-lg">
              התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">מומחים בחילוצי 4x4 ביער הכרמל</h2>
          <p className="text-lg mb-6 leading-relaxed">
            זקוקים לשירות מקצועי של <Link href="/areas/haifa-general/4x4-vehicle-stuck-in-mud-carmel-forest" className="text-blue-400 underline">4x4 vehicle stuck in mud carmel forest</Link>? אנו מתמחים בחילוץ רכבים מכל סוג בדרכי עפר. אם הרכב שלכם שקע באזור השמורות, אנו מספקים גם שירות <Link href="/areas/haifa-general/car-extraction-from-mud-carmel-reserve-haifa" className="text-blue-400 underline">car extraction from mud carmel reserve haifa</Link> מקצועי ומהיר. במידה ואתם באזור האוניברסיטה, זמין עבורכם שירות <Link href="/areas/haifa-general/4x4-rescue-mud-carmel-forest-haifa-university" className="text-blue-400 underline">4x4 rescue mud carmel forest haifa university</Link>.
          </p>
          
          <h3 className="text-2xl font-bold mt-10 mb-6">שאלות נפוצות</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold">כמה זמן לוקח לחילוץ להגיע ליער הכרמל?</h4>
              <p>אנו משתדלים להגיע לכל נקודה ביער הכרמל בחיפה במינימום זמן בהתאם לתנאי השטח והתנועה.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם מחלצים רכבים שקעו בבוץ כבד?</h4>
              <p>בהחלט. צוותי השטח שלנו מצוידים בציוד גרירה מתקדם המתאים בדיוק למקרים של <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-area" className="text-blue-400 underline">car stuck in mud carmel area</Link>.</p>
            </div>
            <div>
              <h4 className="font-bold">האם השירות כולל גרירה אם הרכב לא מניע?</h4>
              <p>כן, לאחר חילוץ הרכב מהבוץ במידת הצורך נבצע גרירה למוסך הקרוב, למעט אופנועים שאותם איננו גוררים.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}