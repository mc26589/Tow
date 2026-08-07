import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרירת רכב וטיפול בפנצ\'ר באחוזה חיפה | הגעה מהירה 24/7',
  description: 'נתקעת באחוזה חיפה? אנו מספקים שירותי גרירה מקצועיים וסיוע בהחלפת גלגל (פנצ\'ר) 24/7. מחירים הוגנים ושירות אדיב. התקשרו עכשיו!',
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
          <h1 className="text-3xl md:text-5xl font-bold mb-6">שירותי גרירה וחילוץ רכבים באחוזה, חיפה</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            זקוקים לשירותי גרירה באחוזה? הצוות שלנו זמין עבורכם 24/7. אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ו-4X4. מחפשים <Link href="/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing" className="underline font-bold">גרירה במחיר הוגן באחוזה</Link>? אנו כאן עם שירות מקצועי ומהיר. 
            שימו לב: שירותינו אינם כוללים גרירת אופנועים, אך נשמח לסייע בכל תקלה ברכב.
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
              <h3 className="text-xl font-semibold mb-2">מה כולל שירות החילוץ שלכם באחוזה?</h3>
              <p>אנו מספקים פתרונות גרירה מלאים לרכבים תקועים, עזרה בהתנעת מצבר וטיפול בפנצ\'רים. לבעלי רכבי יוקרה, אנו מציעים גם שירותי <Link href="/areas/haifa-general/affordable-low-clearance-sports-car-towing-ahuzah-haifa" className="text-blue-400">גרירת רכבי ספורט נמוכים</Link> בבטחה.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">האם אתם מספקים גרירת אופנועים?</h3>
              <p>לא, אנו מתמקדים אך ורק ברכבים פרטיים ומסחריים. אם אתם מחפשים מענה ספציפי לאופנוע, מומלץ לבדוק את שירותי ה-<Link href="/areas/haifa-general/motorcycle-towing-ahuza-haifa" className="text-blue-400">גרירת אופנועים באחוזה</Link> אצל מומחים בתחום.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">אילו עוד אזורים אתם משרתים בחיפה?</h3>
              <p>השירות שלנו פעיל בכל חיפה והקריות. אם נתקעתם בדרכים ראשיות או באזורים סמוכים, אנו מציעים גם <Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="text-blue-400">גרירה בצ'ק פוסט</Link> ובכל אזור הצפון.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}