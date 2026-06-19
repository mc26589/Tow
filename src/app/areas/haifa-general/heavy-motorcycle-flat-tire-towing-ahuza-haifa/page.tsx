import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרירת רכב באחוזה חיפה - שירות מקצועי 24/7 | מחיר הוגן',
  description: 'נתקעת באחוזה חיפה עם פנצ\'ר או תקלה? אנו מעניקים שירותי גרירה לרכבים פרטיים ומסחריים 24/7. הגעה מהירה, מחיר שקוף ושירות אדיב. התקשרו עכשיו!',
  alternates: { canonical: '/areas/haifa-general/heavy-motorcycle-flat-tire-towing-ahuza-haifa' }
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה וחילוץ בחיפה והקריות',
    'description': 'שירותי גרירה וחילוץ מהירים ומקצועיים לרכבים פרטיים, מסחריים ו-4X4 בחיפה והסביבה. זמינות 24/7.',
    'areaServed': [{ '@type': 'Place', 'name': 'חיפה' }, { '@type': 'Place', 'name': 'אחוזה, חיפה' }],
    'openingHoursSpecification': { '@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], 'opens': '00:00', 'closes': '23:59' },
    'geo': { '@type': 'GeoCoordinates', 'latitude': 32.7940, 'longitude': 34.9896 },
    'priceRange': '₪',
    'url': 'https://yourdomain.com/areas/haifa-general/heavy-motorcycle-flat-tire-towing-ahuza-haifa',
    'telephone': `+${BUSINESS_INFO.phone}`
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">שירותי גרירת רכבים מקצועיים באחוזה, חיפה</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            זקוקים לשירותי גרירה באחוזה? למרות שאיננו מספקים שירותי גרירת אופנועים, אנו מומחים בחילוץ רכבים פרטיים, מסחריים ו-4X4 בחיפה והסביבה.
            מחפשים <Link href="/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing" className="underline">גרירה במחיר הוגן באחוזה</Link>? הגעתם למקום הנכון.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg">התקשרו עכשיו לקבלת שירות מהיר</a>
            <WhatsAppCTA cityName="חיפה" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">שאלות נפוצות על שירותי גרירה בחיפה</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">האם אתם מספקים גרירת אופנועים?</h3>
              <p>לא, אנו מתמחים אך ורק בגרירת רכבים פרטיים, רכבי שטח ורכבים מסחריים קלים.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">האם אתם נותנים שירות גם במקרה של פנצ'ר באחוזה?</h3>
              <p>בהחלט. אם נתקעתם באזור אחוזה עם פנצ'ר שאינכם מצליחים לתקן, צוות הגרירה שלנו יגיע לחלץ אתכם בבטחה.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">מהם אזורי השירות שלכם בחיפה?</h3>
              <p>אנו פרוסים בכל רחבי חיפה, לרבות נווה שאנן, מרכז הכרמל, אחוזה והסביבה. למידע נוסף, ניתן לעיין גם בשירותי <Link href="/areas/haifa-general/car-scrapping-neve-shaanan-haifa" className="text-blue-400">גרירה בנווה שאנן</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}