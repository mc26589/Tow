import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרר בכביש 22 עוקף קריות - שירות מהיר 24/7 | מחיר הוגן',
  description: 'נתקעת בכביש 22 עוקף קריות? הגרר שלנו בדרך אליך! שירותי חילוץ מהירים, אמינים ומקצועיים לכל סוגי הרכבים במחיר משתלם. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/towing-service-road-22-krayot-bypass',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה חיפה והקריות',
    'areaServed': 'Haifa and Krayot',
    'priceRange': '$',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.8156',
      'longitude': '35.0653',
    },
    'serviceType': 'Towing Service',
  };

  return (
    <main>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className='gradient-trust text-white py-14 md:py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>גרר רכבים תקועים בכביש 22 עוקף קריות</h1>
          <p className='text-xl mb-8'>נתקעתם בדרך? צוות הגרירה שלנו בדרך אליכם. שירות מהיר, אמין ומקצועי לרכבים פרטיים ומסחריים.</p>
          <div className='flex flex-col md:flex-row gap-4 justify-center'>
            <a href={`tel:+${BUSINESS_INFO.phone}`} className='bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition'>
              התקשרו עכשיו לחילוץ
            </a>
            <WhatsAppCTA cityName='Haifa and Krayot' />
          </div>
        </div>
      </section>

      <section className='py-12 container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-6'>שירותי גרירה מקצועיים בכביש 22</h2>
        <p className='mb-4'>
          כביש 22 הוא עורק תחבורה מרכזי. אם חיפשתם <Link href='/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot' className='text-blue-600 underline'>שירות גרירה משתלם בצק פוסט וקריות</Link>, הגעתם למקום הנכון.
          אנו מתמחים בחילוץ רכבים תקועים, החלפת גלגלים והתנעות, תוך שמירה על כללי הבטיחות.
        </p>
        <p className='mb-4'>
          זקוקים לחילוץ רכב מסחרי כבד יותר? אנו מציעים גם <Link href='/areas/haifa-general/emergency-light-truck-towing-route-22-krayot-bypass' className='text-blue-600 underline'>שירותי גרירת רכב מסחרי קל בכביש 22</Link> במקצועיות רבה.
        </p>
        <p className='mb-4'><strong>חשוב לדעת:</strong> אנו מתמחים ברכבים פרטיים, רכבי 4x4 ורכבים מסחריים. איננו מספקים שירותי גרירה לאופנועים.</p>
        
        <div className='mt-10 p-6 bg-gray-50 rounded-lg'>
          <h3 className='text-2xl font-bold mb-4'>שאלות נפוצות</h3>
          <div className='space-y-4'>
            <div>
              <p className='font-bold'>תוך כמה זמן הגרר מגיע לכביש 22?</p>
              <p>אנו משתדלים להגיע לכל נקודה על ציר עוקף קריות בזמן המהיר ביותר האפשרי, לרוב תוך דקות ספורות מרגע הקריאה.</p>
            </div>
            <div>
              <p className='font-bold'>האם אתם מציעים מחיר זול לגרירה?</p>
              <p>אנו מקפידים על מחירים הוגנים ושקופים. למידע נוסף על <Link href='/areas/haifa-general/cheap-towing-check-post-kiryat-ata' className='text-blue-600 underline'>גרירה זולה באזור קרית אתא</Link> והסביבה, פנו אלינו טלפונית.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}