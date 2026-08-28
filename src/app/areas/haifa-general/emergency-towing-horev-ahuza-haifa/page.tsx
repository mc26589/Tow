import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרר בחורב ואחוזה, חיפה | הגעה תוך 30 דק\' | שירות 24/7',
  description: 'נתקעתם עם הרכב בחורב או באחוזה בחיפה? גרירה מקצועית, הגעה מהירה, ומחיר הוגן. זמינות 24/7 לכל סוגי הרכבים. התקשרו עכשיו להצלה מהירה!',
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
          <li>✓ זמינות מלאה 24/7, כולל שירותי <Link href="/areas/haifa-general/motorcycle-towing-ahuza-haifa" className="text-blue-600 underline font-semibold">גרירת אופנועים באזור אחוזה</Link>.</li>
          <li>✓ מחירים הוגנים ללא הפתעות – שקיפות היא המוטו שלנו.</li>
        </ul>
        <p>
          זקוקים לשירותים נוספים? אנו מספקים מענה גם ל-<Link href="/areas/haifa-general/mud-rescue-4x4-carmel-forest-haifa" className="text-blue-600 underline">חילוץ רכבי שטח מהבוץ ביערות הכרמל</Link> או עזרה ברכבים שאינם מניעים בדרכים המרכזיות כמו <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-600 underline">גרירה דחופה בציר הצ'ק פוסט</Link>.
        </p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירה בחורב-אחוזה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">כמה זמן לוקח לגרר להגיע לאזור אחוזה?</h3>
              <p>ברוב המקרים, הגרר שלנו יגיע אליכם תוך 20 עד 30 דקות מרגע הקריאה, בהתאם לעומסי התנועה באזור ציר חורב.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם נותנים שירות חילוץ מחניונים סגורים?</h3>
              <p>כן, אנו ערוכים למתן שירותי גרירה וחילוץ מחניונים תת-קרקעיים (כמו גרנד קניון או חורב) באמצעות ציוד מותאם.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">מה עושים אם הרכב נתקע מחוץ לעיר?</h3>
              <p>אנו מציעים פריסה רחבה. אם אתם תקועים בדרך לעיר, ניתן להיעזר בשירותי <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-blue-600 underline">גרירה 24/7 בכביש עוקף קריות</Link> לקבלת מענה מהיר.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
