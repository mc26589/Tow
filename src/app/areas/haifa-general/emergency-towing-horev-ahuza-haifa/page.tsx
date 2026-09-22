import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרר בחורב ואחוזה, חיפה | הגעה תוך 30 דק\' | מחיר הוגן',
  description: 'נתקעתם עם הרכב באזור חורב או אחוזה בחיפה? שירות גרירה 24/7, מקצועי ומהיר במחיר משתלם. חילוץ רכבים פרטיים ומסחריים. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/emergency-towing-horev-ahuza-haifa',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    name: 'שירותי גרירה חיפה והקריות',
    areaServed: 'חיפה',
    priceRange: '₪',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '32.7845',
      longitude: '34.9867',
    },
    serviceType: 'Emergency Towing',
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר חירום לרכב תקוע באזור חורב ואחוזה בחיפה</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב באזור חורב או אחוזה? אנו מציעים שירות חילוץ וגרירה מהיר ומקצועי לרכבים פרטיים ומסחריים. 
            זמינות מלאה 24/7 עם הגעה תוך דקות לכל ציר מרכזי על הכרמל. שקיפות מלאה ומחיר הוגן.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בשירות הגרירה שלנו בחורב-אחוזה?</h2>
        <ul className="space-y-4 text-lg mb-8">
          <li>✓ הגעה מהירה לכל נקודה בציר חורב-אחוזה והסביבה הקרובה.</li>
          <li>✓ צוות מקצועי ומנוסה לכל סוגי הרכבים (פרטי, רכבי שטח ומסחרי).</li>
          <li>✓ מענה מקצועי לבעלי רכבים הזקוקים ל-<Link href="/areas/haifa-general/car-towing-rescue-ahuzah-haifa-not-motorcycles" className="text-blue-600 underline font-semibold">שירותי חילוץ רכב באחוזה</Link>.</li>
          <li>✓ שירות לדו-גלגלי כבד: <Link href="/areas/haifa-general/heavy-motorcycle-breakdown-towing-ahuzah-haifa" className="text-blue-600 underline">גרירת אופנוע כבד תקוע באחוזה</Link>.</li>
          <li>✓ מחירים הוגנים ללא הפתעות – שקיפות היא המוטו שלנו.</li>
        </ul>
        <p>
          זקוקים לחילוץ מורכב? אנו מומחים ב-<Link href="/areas/haifa-general/off-road-mud-rescue-carmel-private-car" className="text-blue-600 underline">חילוץ רכבים מהבוץ ביערות הכרמל</Link> או עזרה דחופה לרכבים בנתיבים עמוסים כמו <Link href="/areas/haifa-general/towing-services-road-22-krayot-bypass" className="text-blue-600 underline">גרירה בכביש עוקף קריות</Link>.
        </p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירה בחורב-אחוזה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">תוך כמה זמן מגיע גרר לאזור אחוזה?</h3>
              <p>ברוב המקרים, הגרר שלנו יגיע אליכם תוך 20 עד 30 דקות מרגע הקריאה, בהתאם לעומסי התנועה בציר חורב.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם נותנים שירות חילוץ מחניונים סגורים?</h3>
              <p>כן, אנו ערוכים למתן שירותי גרירה וחילוץ מחניונים תת-קרקעיים באמצעות ציוד מותאם ונגיש לכל סוגי הרכבים.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם השירות זמין גם בסוף השבוע?</h3>
              <p>בוודאי, אנו מספקים שירותי גרירה 24 שעות ביממה, 7 ימים בשבוע, לכל אזור חיפה והצפון.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}