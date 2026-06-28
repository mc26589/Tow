import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import Script from 'next/script';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'גרירת רכב בכביש 22 חיפה - שירות מקצועי 24/7 | מחיר הוגן',
  description: 'נתקעת עם רכב בכביש 22 בחיפה? אנו מספקים שירותי גרירה וחילוץ לרכבים פרטיים ומסחריים 24/7. הגעה מהירה, מקצועיות ללא פשרות. התקשרו עכשיו!',
  alternates: { canonical: '/areas/haifa-general/towing-stuck-vehicle-road-22-haifa' },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    name: 'שירותי גרירה וחילוץ 24/7 בחיפה והקריות',
    description: 'שירותי גרירה וחילוץ מהירים ומקצועיים לרכבים פרטיים, מסחריים ורכבי שטח (4x4) בכביש 22 חיפה.',
    url: 'https://yourdomain.com/towing-stuck-vehicle-road-22-haifa',
    telephone: `+${BUSINESS_INFO.phone}`,
    priceRange: '$-$$',
    areaServed: { '@type': 'Place', name: 'חיפה והקריות' },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
    geo: { '@type': 'GeoCoordinates', latitude: '32.7940', longitude: '34.9896' },
    serviceType: ['גרירת רכב פרטי', 'גרירת רכב מסחרי', 'גרירת רכב שטח 4x4', 'חילוץ רכב'],
  };

  return (
    <>
      <Script id="json-ld-auto-towing" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">שירותי גרירה וחילוץ לרכב בכביש 22, חיפה והקריות</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            נתקעת עם רכב בכביש 22? אנו כאן לעזור. צוות גרירה מקצועי זמין 24/7 לרכבים פרטיים, מסחריים ו-4x4.
            <strong className="block mt-2 text-red-400">חשוב: איננו מספקים שירותי גרירה לאופנועים.</strong>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-lg font-bold">התקשר עכשיו לשירות מהיר</a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>
      <main className="bg-gray-900 text-gray-200 py-12">
        <div className="container mx-auto px-4">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">שירות גרירה אמין בכביש עוקף קריות</h2>
            <p className="text-lg mb-4">אם אתם זקוקים ל- <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-300 underline">affordable emergency towing route 22 krayot bypass</Link>, הגעתם למקום הנכון. אנו מתמחים בחילוץ מהיר גם באזורים כמו <Link href="/areas/haifa-general/cheap-towing-check-post-junction" className="text-blue-300 underline">cheap towing check post junction</Link>.</p>
          </section>
          <section className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">שאלות נפוצות</h3>
            <div className="space-y-4">
              <div><h4 className="font-bold">מהו זמן ההגעה הממוצע בכביש 22?</h4><p>אנו שואפים להגיע לכל קריאה בכביש 22 ובאזור חיפה תוך זמן קצר מרגע הקריאה.</p></div>
              <div><h4 className="font-bold">האם אתם גוררים רכבי שטח?</h4><p>כן, אנו מספקים שירותי חילוץ וגרירה מתקדמים לכל סוגי הרכבים, כולל <Link href="/areas/haifa-general/cheap-off-road-vehicle-towing-kiryat-motzkin" className="text-blue-300 underline">cheap off road vehicle towing kiryat motzkin</Link>.</p></div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}