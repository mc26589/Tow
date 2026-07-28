import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'חילוץ 4x4 מבוץ ביער הכרמל חיפה | הגעה מהירה 24/7',
  description: 'נתקעתם עם רכב השטח בבוץ ביער הכרמל? שירות חילוץ 4x4 מקצועי בחיפה והסביבה. זמינות 24/7, הגעה מהירה ומחיר הוגן. התקשרו עכשיו!',
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
            מחפשים <Link href="/areas/haifa-general/off-road-rescue-stuck-in-mud-carmel" className="text-blue-400 underline">off road rescue stuck in mud carmel</Link>? אנחנו מתמחים במתן פתרונות בשטח סבוך. אם רכבכם נתקע, ניתן גם לבדוק את השירות שלנו עבור <Link href="/areas/haifa-general/car-stuck-in-mud-rescue-carmel-forest-haifa" className="text-blue-400 underline">car stuck in mud rescue carmel forest haifa</Link> לפתרונות מהירים.
          </p>
          
          <h3 className="text-2xl font-bold mt-10 mb-6">שאלות נפוצות</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">כמה זמן לוקח לחילוץ להגיע ליער הכרמל?</h4>
              <p>אנו משתדלים להגיע לכל נקודה ביער הכרמל בחיפה במינימום זמן בהתאם לתנאי השטח.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם מחלצים גם רכבים פרטיים?</h4>
              <p>כן, אנו נותנים מענה לחילוץ רכבים פרטיים ומסחריים שנתקעו בדרכי עפר.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם מבצעים גרירת אופנועים?</h4>
              <p>חשוב להדגיש: אנו מתמקדים בחילוץ רכבים בלבד ואיננו מספקים שירותי גרירה לאופנועים.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}