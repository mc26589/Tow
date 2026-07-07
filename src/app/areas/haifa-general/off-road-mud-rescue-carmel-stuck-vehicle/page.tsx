import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'חילוץ שטח ובוץ בכרמל | הגעה מהירה 24/7 | מחיר הוגן',
  description: 'נתקעתם בבוץ בכרמל? שירות חילוץ שטח מקצועי לרכבי 4x4 ופרטיים בחיפה. הגעה מהירה, ציוד מתקדם ומחירים הוגנים. התקשרו עכשיו לחילוץ!',
  alternates: {
    canonical: '/areas/haifa-general/off-road-mud-rescue-carmel-stuck-vehicle',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי חילוץ שטח חיפה והקריות',
    'areaServed': { '@type': 'City', 'name': 'Haifa and Krayot' },
    'openingHoursSpecification': { '@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], 'opens': '00:00', 'closes': '23:59' },
    'geo': { '@type': 'GeoCoordinates', 'latitude': '32.7940', 'longitude': '34.9896' },
    'priceRange': '$',
    'serviceType': 'Off-road vehicle recovery and mud rescue'
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">חילוץ שטח בוץ בכרמל: רכב תקוע? אנחנו בדרך אליך</h1>
          <p className="text-xl mb-8">חילוץ מקצועי לרכבי שטח ופרטיים בחיפה והקריות. זמינים לכל קריאה 24/7.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition-colors"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h2>זקוקים לחילוץ שטח מהיר בבוץ של הכרמל?</h2>
          <p>אם הרכב שלכם נתקע בבוץ באזורי השטח של הכרמל, אתם זקוקים למענה מקצועי ומיידי. אנו מתמחים בחילוצי שטח מורכבים לרכבי 4x4, רכבים פרטיים ורכבים מסחריים שנתקעו בתנאי שטח קשים. אם אתם זקוקים לשירותים משלימים באזור, אנו מציעים גם <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa">חילוץ שטח ביערות הכרמל</Link> או <Link href="/areas/haifa-general/urgent-mud-rescue-4x4-towing-carmel-forest-trails-haifa">חילוץ דחוף בדרכי עפר</Link>.</p>
          
          <h3>למה לבחור בנו?</h3>
          <ul>
            <li>זמינות 24/7 לכל אזור הכרמל והסביבה.</li>
            <li>ציוד חילוץ מתקדם לקרקע בוצית.</li>
            <li>הצעת מחיר הוגנת ושקופה בטלפון.</li>
          </ul>

          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mt-8">
            <p className="font-bold">הערה חשובה:</p>
            <p>אנו מתמחים בחילוץ רכבים, רכבי שטח ורכבים מסחריים בלבד. איננו מספקים שירותי חילוץ או גרירה לאופנועים.</p>
          </div>

          <div className="mt-12">
            <h3>שאלות נפוצות על חילוץ שטח בכרמל</h3>
            <dl>
              <dt className="font-bold mt-4">תוך כמה זמן תגיעו לחלץ אותי בכרמל?</dt>
              <dd className="text-neutral-400">אנו משתדלים להגיע לכל נקודה בכרמל תוך זמן קצר, בהתאם למצב התנועה ותנאי השטח.</dd>
              <dt className="font-bold mt-4">האם המחיר לחילוץ בוץ יקר?</dt>
              <dd className="text-neutral-400">אנו מקפידים על מחירים הוגנים ושקופים, המותאמים למורכבות החילוץ ללא הפתעות.</dd>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}