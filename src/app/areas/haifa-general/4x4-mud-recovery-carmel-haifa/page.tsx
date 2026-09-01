import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'חילוץ 4x4 מבוץ ביער הכרמל חיפה | הגעה מהירה 24/7',
  description: 'נתקעתם עם רכב השטח בבוץ ביער הכרמל? שירות חילוץ 4x4 מקצועי בחיפה והסביבה 24/7. הגעה מהירה, ציוד חילוץ מתקדם ומחיר הוגן. התקשרו עכשיו!',
  alternates: {
    canonical: 'https://yourdomain.com/areas/haifa-general/4x4-mud-recovery-carmel-haifa',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה וחילוץ 4x4 חיפה',
    'description': 'שירותי חילוץ 4x4 מבוץ ביער הכרמל, חילוץ רכבי שטח תקועים וגרירה 24/7.',
    'url': 'https://yourdomain.com/areas/haifa-general/4x4-mud-recovery-carmel-haifa',
    'telephone': `+${BUSINESS_INFO.phone}`,
    'priceRange': '₪',
    'areaServed': { '@type': 'Place', 'name': 'חיפה, יער הכרמל והסביבה' },
    'geo': { '@type': 'GeoCoordinates', 'latitude': 32.789, 'longitude': 35.000 },
    'serviceType': ['חילוץ 4x4', 'חילוץ מבוץ', 'גרירת רכבי שטח']
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">חילוץ 4x4 מבוץ ביער הכרמל חיפה 24/7</h1>
          <p className="text-xl md:text-2xl mb-8">נתקעתם בשטח? צוות מומחים לחילוץ רכבי שטח ו-4x4 בחיפה ובאזור יער הכרמל בדרך אליכם.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והכרמל" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-lg transition duration-300 shadow-lg">
              התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שירותי חילוץ שטח מקצועיים בכרמל</h2>
          <p className="text-lg mb-6 leading-relaxed">
            יער הכרמל מציע מסלולי טיול מאתגרים, אך לעיתים הרכב שוקע בבוץ עמוק. אנו מתמחים ב-<Link href="/areas/haifa-general/4x4-mud-rescue-towing-carmel-forest-trails-denia-haifa" className="text-blue-400 underline">4x4 mud rescue towing carmel forest trails denia haifa</Link> ומספקים מענה מהיר לכל רכבי ה-4x4. אם נתקעתם בדרכי עפר באזור האוניברסיטה או בשבילים המובילים לדניה, אנו כאן לעזור. במידה ואתם זקוקים גם ל-<Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-400 underline">affordable emergency car towing check post haifa</Link> לאחר החילוץ, נשמח להעניק מענה משלים.
          </p>
          
          <h3 className="text-2xl font-bold mt-10 mb-6">שאלות נפוצות על חילוץ בשטח</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold">תוך כמה זמן תגיעו לחילוץ ביער הכרמל?</h4>
              <p>הצוותים שלנו ערוכים 24/7 בחיפה והסביבה. אנו עושים את המירב להגיע לנקודת התקיעה שלכם ביער הכרמל בזמן הקצר ביותר, תוך התחשבות בתנאי השטח.</p>
            </div>
            <div>
              <h4 className="font-bold">מה עושים אם הרכב לא מניע אחרי החילוץ מהבוץ?</h4>
              <p>במידה והרכב ספג נזק מכני ואינו מניע, אנו נבצע גרירה מהירה למוסך הקרוב. למידע נוסף על שירותי גרירה כלליים באזור, ניתן לעיין ב-<Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-400 underline">affordable car breakdown towing check post haifa krayot</Link>.</p>
            </div>
            <div>
              <h4 className="font-bold">האם השירות מתאים לכל רכבי השטח?</h4>
              <p>כן, אנו מחלצים רכבי שטח מכל הסוגים שנתקעו בבוץ או בדרכי עפר. שימו לב: השירות אינו כולל חילוץ אופנועים.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}