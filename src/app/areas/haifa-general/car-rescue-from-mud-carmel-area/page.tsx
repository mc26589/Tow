import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'חילוץ רכב מבוץ בכרמל | הגעה מהירה 24/7 | מחיר הוגן',
  description: 'נתקעתם בבוץ באזור הכרמל? אנו מציעים חילוץ רכב מקצועי ומהיר לכל סוגי הרכבים, כולל רכבי 4x4. מחירים הוגנים, ציוד חילוץ מתקדם וזמינות מסביב לשעון. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/car-rescue-from-mud-carmel-area',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי חילוץ וגרירה חיפה והקריות',
    'areaServed': 'Haifa and Krayot',
    'priceRange': '$-$$',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.7940',
      'longitude': '34.9896',
    },
    'serviceType': 'חילוץ רכב מבוץ',
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">חילוץ רכב מבוץ באזור הכרמל</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב בבוץ באזור הכרמל? הצוות שלנו מתמחה בחילוץ רכבים פרטיים ו-4x4 ששקעו בדרכי עפר ובשטח. 
            אנו מספקים מענה מקצועי הכולל גם <Link href="/areas/haifa-general/4x4-mud-rescue-towing-carmel-forest-trails-denia-haifa" className="underline">חילוץ 4x4 בשבילי יערות הכרמל ודניה</Link>. 
            השירות מתמקד בחילוץ רכבים מכל סוג (איננו מבצעים חילוץ אופנועים).
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="חיפה והכרמל" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בכרמל?</h2>
        <ul className="space-y-4 text-lg">
          <li>✓ זמינות מלאה 24/7 לכל קריאת חילוץ באזור הכרמל והסביבה.</li>
          <li>✓ ציוד חילוץ מתקדם המתאים לחילוץ רכב ששקע בבוץ כבד.</li>
          <li>✓ מחירים הוגנים ושקיפות מלאה – ללא הפתעות.</li>
          <li>✓ צוות מיומן עם ניסיון עשיר ב-<Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="underline">חילוצי שטח ובוץ ביערות הכרמל</Link>.</li>
        </ul>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ רכב מבוץ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">תוך כמה זמן תגיעו לחילוץ באזור הכרמל?</h3>
              <p>אנו משתדלים להגיע לכל נקודה במינימום זמן. אם אתם זקוקים לחילוץ דחוף, צרו קשר. ניתן לקרוא גם על <Link href="/areas/haifa-general/emergency-car-rescue-mud-carmel-forest" className="underline">שירותי חירום לחילוץ מבוץ בכרמל</Link> באתר שלנו.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">האם אתם מחלצים רכבים ששקעו עמוק בבוץ?</h3>
              <p>כן, אנו ערוכים לכל סוגי השקיעות. למידע נוסף על מקרים מורכבים יותר, ניתן לבדוק גם את השירות שלנו ל-<Link href="/areas/haifa-general/car-stuck-in-mud-rescue-carmel-forest-haifa" className="underline">חילוץ רכבים שנתקעו בבוץ בלב יערות הכרמל</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">האם אתם נותנים שירות גם מחוץ לכרמל?</h3>
              <p>כן, אנו נותנים שירותים בפריסה רחבה, כולל סיוע למי שזקוק ל-<Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="underline">שירותי גרירה זולים בצומת הצ'ק פוסט</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}