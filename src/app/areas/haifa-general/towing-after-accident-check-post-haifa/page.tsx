import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרר לאחר תאונה בצומת הצק פוסט חיפה | הגעה מהירה 24/7',
  description: 'נתקעתם לאחר תאונה בצומת הצק פוסט בחיפה? גרר מקצועי וזמין 24/7. הגעה תוך 30 דקות, שירות אמין ומחיר הוגן. התקשרו עכשיו!',
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
          <h1 className='text-3xl md:text-5xl font-bold mb-6'>גרר רכב לאחר תאונה בצומת הצק פוסט חיפה – 24/7</h1>
          <p className='text-lg md:text-xl mb-8'>נתקעתם לאחר תאונה בצומת הצק פוסט? צוות הגרר שלנו בדרך אליכם עם מענה מהיר ומקצועי.</p>
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
        <h2 className='text-2xl font-bold mb-4'>שירותי גרירה מקצועיים בצומת הצק פוסט</h2>
        <p className='mb-4'>
          אנו מתמחים בפינוי רכבים לאחר תאונות דרכים באזור צומת הצק פוסט והסביבה. הצוות שלנו מיומן בטיפול ברכבים פרטיים, רכבים מסחריים ורכבי 4x4. אם אתם מחפשים <Link href='/areas/haifa-general/affordable-towing-check-post-haifa' className='text-blue-600 underline'>שירותי גרר זולים בצומת הצק פוסט</Link>, אנחנו כאן עבורכם.
        </p>
        <p className='mb-4'>
          זקוקים לחילוץ מיוחד? אנו מציעים גם <Link href='/areas/haifa-general/jeep-towing-after-accident-check-post-haifa' className='text-blue-600 underline'>שירותי גרירת ג'יפים לאחר תאונה</Link> או חילוץ מהיר עבור <Link href='/areas/haifa-general/fast-towing-services-road-22-krayot-bypass' className='text-blue-600 underline'>נסיעה על כביש 22 עוקף קריות</Link>. אנו מבטיחים הגעה מהירה, פינוי בטוח מהצומת העמוס ומחירים נוחים.
        </p>
      </section>

      <section className='py-12 bg-gray-50 container mx-auto px-4'>
        <h2 className='text-2xl font-bold mb-6'>שאלות נפוצות על גרירה בצומת הצק פוסט</h2>
        <div className='space-y-4'>
            <div>
                <h3 className='font-bold'>תוך כמה זמן אתם מגיעים לצומת?</h3>
                <p>אנו מבינים שהזמן קריטי. הודות למיקומנו האסטרטגי סביב חיפה, אנו מבטיחים זמני תגובה מהירים במיוחד.</p>
            </div>
            <div>
                <h3 className='font-bold'>האם אתם גוררים רכבים לכל יעד?</h3>
                <p>כן, אנו מפנים את הרכב לכל יעד שתבחרו – למוסך הקרוב, לביתכם או למגרש אחסון בתיאום מראש.</p>
            </div>
            <div>
                <h3 className='font-bold'>מה העלות של גרירה לאחר תאונה?</h3>
                <p>אנו מציעים מחירים הוגנים ותחרותיים. העלות משתנה בהתאם למרחק הגרירה וסוג הרכב. צרו קשר לקבלת הצעת מחיר מדויקת.</p>
            </div>
        </div>
      </section>
    </main>
  );
}