import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import Script from 'next/script';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'גרירת רכב בכביש 22 חיפה - שירות 24/7 הגעה מהירה ומחיר הוגן',
  description: 'נתקעת בכביש 22? שירותי גרירה וחילוץ מקצועיים לרכב בחיפה והקריות 24/7. הגעה מהירה, שירות אמין ומחיר הוגן. התקשרו עכשיו!',
  alternates: { canonical: '/areas/haifa-general/towing-stuck-vehicle-road-22-haifa' },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    name: 'שירותי גרירה וחילוץ 24/7 בכביש 22 חיפה והקריות',
    description: 'שירותי גרירה וחילוץ מהירים ומקצועיים לרכבים פרטיים, מסחריים ורכבי שטח (4x4) בכביש 22 חיפה והקריות.',
    url: `https://yourdomain.com/areas/haifa-general/towing-stuck-vehicle-road-22-haifa`,
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
            נתקעת עם הרכב בכביש עוקף קריות? אנו זמינים 24/7 לכל תקלה. שירותי גרירה וחילוץ מהירים לרכבים פרטיים, מסחריים ורכבי שטח.
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
            <h2 className="text-2xl font-bold text-blue-400 mb-4">שירות גרירה מומלץ בכביש 22</h2>
            <p className="text-lg mb-4">
              אם אתם מחפשים <Link href="/areas/haifa-general/sherutei-grira-hilutz-krayot-kavish-22" className="text-blue-300 underline">שירותי גרירה וחילוץ מקצועיים בקריות ובכביש 22</Link>, הצוות שלנו ערוך לתת מענה מידי. אנו מבצעים גם חילוץ מקצועי לכל סוגי הרכבים.
            </p>
          </section>
          <section className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">שאלות נפוצות בנושא גרירה בכביש 22</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg">מהו זמן ההגעה הממוצע בכביש 22?</h4>
                <p>אנו מבינים את הדחיפות ומגיעים לכל נקודה לאורך כביש עוקף קריות בזמן מהיר.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">האם אתם נותנים שירות גרירה גם לאזור צ'ק פוסט?</h4>
                <p>בהחלט, אנו מציעים <Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="text-blue-300 underline">שירות גרירה משתלם בצ'ק פוסט חיפה</Link> ומספקים מענה מהיר לכל נהג שתקוע באזור.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">האם ניתן לפנות רכב ישן מהדרך?</h4>
                <p>במידה והרכב אינו בר תיקון, אנו מציעים שירות <Link href="/areas/haifa-general/pinui-rechev-grotah-grira-check-post-haifa-krayot-lechalafim" className="text-blue-300 underline">פינוי רכב גרוטאה וגרירה באזור חיפה והקריות</Link>.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}