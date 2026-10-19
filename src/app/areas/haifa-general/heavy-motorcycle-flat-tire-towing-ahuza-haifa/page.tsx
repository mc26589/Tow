import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרירה וחילוץ באחוזה חיפה | שירות 24/7 | מחיר הוגן',
  description: 'נתקעת באחוזה חיפה? אנו מציעים שירותי גרירה מקצועיים, חילוץ רכבים וטיפול בפנצ\'ר 24/7. הגעה מהירה ומחירים נוחים. התקשרו עכשיו לקבלת סיוע!',
  alternates: { canonical: '/areas/haifa-general/heavy-motorcycle-flat-tire-towing-ahuza-haifa' }
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה וחילוץ בחיפה והקריות',
    'description': 'שירותי גרירה וחילוץ מהירים ומקצועיים לרכבים פרטיים ומסחריים בחיפה והסביבה.',
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
            נתקעתם בדרך? אנו מספקים שירותי גרירה באחוזה 24 שעות ביממה. בין אם מדובר ברכב פרטי או מסחרי, הצוות שלנו יגיע לסייע במהירות. זקוקים גם לפתרונות נוספים? אנו מציעים גם <Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="underline font-bold">גרירה בצ\'ק פוסט</Link> ובכל אזורי חיפה. שימו לב: שירותינו אינם כוללים גרירת אופנועים.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg">התקשרו עכשיו - הגעה מהירה</a>
            <WhatsAppCTA cityName="חיפה" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">שאלות נפוצות על שירותי גרירה באחוזה</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">תוך כמה זמן תגיעו אלי באחוזה?</h3>
              <p>אנו משתדלים להגיע לכל קריאה באזור אחוזה והסביבה תוך זמן קצר. השירות שלנו זמין גם אם נתקעתם באזורים מאתגרים, בדומה לשירותי <Link href="/areas/haifa-general/emergency-tow-stuck-car-stella-maris-haifa-hills" className="text-blue-400">חילוץ בסטלה מאריס</Link> וסביבת הכרמל.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">האם אתם מטפלים ברכבים תקועים בבוץ או בשטח?</h3>
              <p>כן, אנו מספקים פתרונות חילוץ לרכבים פרטיים. למידע נוסף על מקרים מורכבים, ניתן לעיין במידע על <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-region" className="text-blue-400">חילוץ רכבים בבוץ באזור הכרמל</Link>.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">מה עושים במקרה של תקלה בדרך לאזור הצפון?</h3>
              <p>אם נתקעתם בדרכים ראשיות או באזור הקריות, אנו מציעים מענה מקצועי גם דרך <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-400">גרירה בכביש 22</Link> במחיר תחרותי.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}