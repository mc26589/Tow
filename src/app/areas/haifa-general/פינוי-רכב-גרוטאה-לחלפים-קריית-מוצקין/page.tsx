import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import Script from 'next/script';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'פינוי רכב גרוטאה לחלפים בקריית מוצקין | קונה רכבים במזומן 24/7',
  description: 'נתקעתם עם רכב ישן? פינוי רכב גרוטאה לחלפים בקריית מוצקין במזומן! גרירה חינם, שירות מהיר והוגן 24/7. הגעה תוך 30 דקות - התקשרו עכשיו!',
  alternates: {
    canonical: 'https://yourdomain.com/areas/haifa-general/פינוי-רכב-גרוטאה-לחלפים-קריית-מוצקין',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה ופינוי רכבים חיפה והקריות',
    'description': 'שירותי גרירה ופינוי רכבי גרוטאה לחלפים בקריית מוצקין, חיפה והקריות. קונים רכבים לפירוק במזומן.',
    'url': `https://yourdomain.com/areas/haifa-general/פינוי-רכב-גרוטאה-לחלפים-קריית-מוצקין`,
    'image': 'https://yourdomain.com/images/towing-truck.jpg',
    'priceRange': '₪',
    'telephone': `+${BUSINESS_INFO.phone}`,
    'areaServed': [
      { '@type': 'City', 'name': 'קריית מוצקין' },
      { '@type': 'City', 'name': 'חיפה' },
      { '@type': 'City', 'name': 'קריות' },
      { '@type': 'City', 'name': 'קריית ביאליק' },
      { '@type': 'City', 'name': 'קריית ים' },
      { '@type': 'City', 'name': 'קריית אתא' }
    ],
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59'
    },
    'geo': { '@type': 'GeoCoordinates', 'latitude': 32.815, 'longitude': 35.075 },
    'serviceType': ['פינוי רכב גרוטאה', 'קניית רכבים לפירוק', 'גרירת רכבים', 'קניית רכבים במזומן']
  };

  return (
    <>
      <Script id='json-ld-auto-towing' type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className='gradient-trust text-white py-14 md:py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-6xl font-extrabold leading-tight mb-4'>פינוי רכב גרוטאה לחלפים בקריית מוצקין</h1>
          <p className='text-xl md:text-2xl mb-8 max-w-3xl mx-auto'>קונים רכבים ישנים, תקולים ולפירוק במזומן! שירות גרירה מהיר מהיום להיום בפריסה רחבה.</p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <WhatsAppCTA cityName='קריית מוצקין' />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300'>התקשרו אלינו עכשיו</a>
          </div>
        </div>
      </section>

      <section className='bg-gray-900 text-white py-12 md:py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-6 text-primary-400'>פינוי מקצועי של רכבים ישנים באזור הקריות</h2>
          <p className='text-lg mb-6'>מחפשים <Link href='/areas/haifa-general/sell-damaged-car-for-parts-haifa-immediate-pickup' className='text-blue-400 underline'>קונה רכבים לפירוק בחיפה והסביבה</Link>? אנחנו כאן בקריית מוצקין זמינים לתת לכם שירות מלא. בדומה לשירותי <Link href='/areas/haifa-general/buy-cars-for-scrap-kiryat-yam-rothschild' className='text-blue-400 underline'>פינוי רכבים בקריית ים</Link>, אנו מעניקים מענה מהיר לכל סוגי הרכבים.</p>

          <h3 className='text-2xl font-bold mt-10 mb-6 text-primary-400'>למה לבחור בנו בקריית מוצקין?</h3>
          <ul className='list-disc list-inside text-lg space-y-3 mb-8'>
            <li><strong>מחיר הוגן במזומן:</strong> קונים רכבים מכל הסוגים במחיר משתלם.</li>
            <li><strong>גרירה חינם:</strong> שירות מקצועי ללא עלות נוספת.</li>
            <li><strong>מענה לתושבי הצפון:</strong> אם אתם זקוקים גם לשירותי <Link href='/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot' className='text-blue-400 underline'>גרירת רכב בצ'ק פוסט</Link>, נשמח לסייע.</li>
          </ul>

          <div className='mt-12 p-8 bg-gray-800 rounded-xl'>
            <h3 className='text-2xl font-bold mb-6 text-primary-400'>שאלות נפוצות</h3>
            <div className='space-y-4'>
                <div><p className='font-bold'>האם אתם קונים רכבים ללא טסט?</p><p>כן, אנו רוכשים רכבים ישנים, תקולים או ללא טסט ומשלמים במזומן במקום.</p></div>
                <div><p className='font-bold'>האם הגרירה כרוכה בתשלום נוסף?</p><p>לא, במסגרת שירות פינוי רכבי גרוטאה, הגרירה ניתנת ללא עלות נוספת ללקוחותינו בקריית מוצקין והסביבה.</p></div>
                <div><p className='font-bold'>מהו טווח ההגעה שלכם בצפון?</p><p>אנו פרוסים בכל אזור חיפה, הקריות, צ'ק פוסט והסביבה ומתחייבים למענה מהיר.</p></div>
            </div>
          </div>

          <div className='text-center mt-12 bg-gray-800 p-8 rounded-xl'>
            <h3 className='text-2xl font-bold mb-4'>צריכים עזרה עם רכב תקול?</h3>
            <WhatsAppCTA cityName='קריית מוצקין' />
          </div>
        </div>
      </section>
    </>
  );
}