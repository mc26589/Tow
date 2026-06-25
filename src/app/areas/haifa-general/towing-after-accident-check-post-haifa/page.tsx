import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרר לאחר תאונה בצומת הצ\'ק פוסט חיפה | שירות 24/7 | מחיר הוגן',
  description: 'נתקעתם לאחר תאונה בצומת הצ\'ק פוסט בחיפה? אנו מציעים שירותי גרירה מקצועיים, מהירים ובמחיר הוגן. הגעה תוך דקות לכל סוגי הרכבים. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/towing-after-accident-check-post-haifa',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה חיפה והקריות',
    'areaServed': 'Haifa and Krayot',
    'priceRange': 'הוגן',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.7940',
      'longitude': '35.0250',
    },
    'serviceType': 'Towing service after accident',
  };

  return (
    <main>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className='gradient-trust text-white py-14 md:py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-3xl md:text-5xl font-bold mb-6'>גרר רכב לאחר תאונה בצומת הצ'ק פוסט חיפה – שירות מהיר ומקצועי</h1>
          <p className='text-lg md:text-xl mb-8'>נתקעתם לאחר תאונה בצומת הצ'ק פוסט? הצוות המקצועי שלנו בדרך אליכם עם ציוד גרירה מתקדם.</p>
          <div className='flex flex-col md:flex-row gap-4 justify-center'>
            <WhatsAppCTA cityName='Haifa and Krayot' />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className='bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition'
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className='py-12 container mx-auto px-4'>
        <h2 className='text-2xl font-bold mb-4'>שירותי גרירה מקצועיים בצומת הצ'ק פוסט</h2>
        <p className='mb-4'>
          אנו מתמחים בפינוי רכבים לאחר תאונות דרכים באזור צומת הצ'ק פוסט והסביבה. הצוות שלנו מיומן בטיפול ברכבים פרטיים, רכבים מסחריים ורכבי 4x4. אם אתם מחפשים <Link href='/areas/haifa-general/cheap-towing-check-post-junction' className='text-blue-600 underline'>שירותי גרר זולים בצומת הצ'ק פוסט</Link>, אנחנו כאן עבורכם.
        </p>
        <p className='mb-4'>
          חשוב להדגיש: אנו לא מספקים שירותי גרירה לאופנועים. אנו מבינים את הלחץ הכרוך בתאונת דרכים ומבטיחים הגעה מהירה, פינוי בטוח של הרכב מהצומת העמוס, ומחירים הוגנים ללא הפתעות.
        </p>
        <p>
            זקוקים לשירותים נוספים באזור חיפה? אנו מציעים מענה לכל צורך, החל מ-<Link href='/areas/haifa-general/commercial-truck-accident-recovery-kiryat-motzkin-24-7' className='text-blue-600 underline'>חילוץ משאיות מסחריות בקריות</Link> ועד גרירה לרכבים ישנים.
        </p>
      </section>

      <section className='py-12 bg-gray-50 container mx-auto px-4'>
        <h2 className='text-2xl font-bold mb-6'>שאלות נפוצות על גרירה בצומת הצ'ק פוסט</h2>
        <div className='space-y-4'>
            <div>
                <h3 className='font-bold'>תוך כמה זמן אתם מגיעים לצומת?</h3>
                <p>אנו מבינים שהזמן קריטי לאחר תאונה. אנו מציבים צוותים זמינים סביב חיפה והצ'ק פוסט כדי להבטיח הגעה מהירה במיוחד.</p>
            </div>
            <div>
                <h3 className='font-bold'>האם אתם גוררים רכבים למוסך או למגרש?</h3>
                <p>אנו מפנים את הרכב לכל יעד שתבחרו – למוסך הקרוב, לביתכם או לכל מגרש אחסון בתיאום מראש.</p>
            </div>
        </div>
      </section>
    </main>
  );
}
