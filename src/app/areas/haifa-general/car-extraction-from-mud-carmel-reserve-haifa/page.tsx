import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'חילוץ רכב מבוץ בשמורת הכרמל | חילוץ מהיר 24/7 - הגעה תוך 30 דקות',
  description: 'נתקעתם בבוץ בשמורת הכרמל? אנו מספקים חילוץ שטח מקצועי 24/7 לכל סוגי הרכבים. הגעה מהירה, מחיר הוגן ושירות אדיב. התקשרו עכשיו לחילוץ מהיר!',
  alternates: {
    canonical: 'https://yourdomain.com/areas/haifa-general/car-extraction-from-mud-carmel-reserve-haifa',
  },
};

function JsonLd() {
  const jsonLdData = {
    '@context': 'http://schema.org',
    '@type': 'AutoTowing',
    'name': 'חילוץ רכב מבוץ בשמורת הכרמל חיפה',
    'description': 'שירותי חילוץ רכב מקצועיים מבוץ בשמורת הכרמל, חיפה והסביבה. צוות מנוסה וזמין 24/7.',
    'url': 'https://yourdomain.com/areas/haifa-general/car-extraction-from-mud-carmel-reserve-haifa',
    'telephone': `+${BUSINESS_INFO.phone}`,
    'priceRange': '$$ - $$$',
    'areaServed': {
      '@type': 'Place',
      'name': 'חיפה ושמורת הכרמל',
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 32.745,
        'longitude': 35.005
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}

export default function Page() {
  return (
    <>
      <JsonLd />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            חילוץ רכב מבוץ בשמורת הכרמל – חילוץ מהיר 24/7
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            נתקעתם בדרכי העפר של הכרמל? אל תסתכנו. אנו מתמחים ב- <Link href="/areas/haifa-general/off-road-rescue-carmel-forest-danya" className="underline text-blue-300">חילוץ רכב מבוץ בשמורת הכרמל ודניה</Link> במהירות ומקצועיות. זמינים לכל קריאה בחיפה.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והכרמל" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-gray-900 hover:bg-gray-200 transition-colors py-3 px-8 rounded-full text-lg shadow-lg">
              חייגו עכשיו לחילוץ מהיר
            </a>
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <section className="mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-primary-400">שאלות נפוצות על חילוץ בשמורת הכרמל</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="font-bold mb-2">תוך כמה זמן תגיעו לחלץ אותי מהכרמל?</h3>
                <p className="text-gray-300">הצוותים שלנו ערוכים ופרוסים באזור דניה והכרמל. אנו מגיעים במהירות האפשרית לכל נקודה בשמורה.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="font-bold mb-2">מה כולל שירות החילוץ מהבוץ?</h3>
                <p className="text-gray-300">מעבר לחילוץ מהבוץ, אנו מספקים <Link href="/areas/haifa-general/emergency-towing-horev-ahuza-haifa" className="text-primary-400 underline">שירותי גרירה דחופים באחוזה וחיפה</Link> במידה והרכב זקוק לטיפול במוסך.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="font-bold mb-2">האם אתם נותנים שירות גם ברכבים חשמליים?</h3>
                <p className="text-gray-300">כן, אנו מספקים מענה מקצועי גם למקרים של <Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-primary-400 underline">חילוץ וגרירת רכבים חשמליים באזור חיפה</Link> ושמורת הטבע.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}