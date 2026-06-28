import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'שירותי גרירה וחילוץ באחוזה חיפה | הגעה מהירה 24/7 | מחיר הוגן',
  description: 'נתקעתם עם הרכב באזור אחוזה בחיפה? אנו מספקים שירותי גרירה וחילוץ מקצועיים לרכבים פרטיים, מסחריים ו-4x4. זמינות 24/7, מחיר הוגן ושירות מהיר. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/towing-service-heavy-motorcycle-breakdown-ahuzah-haifa',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה וחילוץ באחוזה חיפה',
    'areaServed': 'Haifa - Ahuzah',
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
    'priceRange': '$$',
    'serviceType': ['Car Towing', 'Commercial Vehicle Recovery', '4x4 Rescue'],
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה וחילוץ באחוזה חיפה: רכבים פרטיים, מסחריים ו-4x4</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב באזור אחוזה? הצוות שלנו זמין לתת מענה מקצועי לכל סוגי הרכבים. חשוב להבהיר: איננו מספקים שירותי גרירה לאופנועים, אך אנו מומחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח. זמינות מלאה 24/7 באזור הכרמל.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="אחוזה חיפה" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">מדוע לבחור בנו באזור אחוזה?</h2>
        <ul className="space-y-4 text-neutral-300">
          <li>✓ מענה מהיר לכל קריאה באזור אחוזה והכרמל.</li>
          <li>✓ ציוד חילוץ מתקדם לרכבים פרטיים, מסחריים ו-4x4.</li>
          <li>✓ שירות אמין, מקצועי ובמחירים הוגנים.</li>
          <li>✓ זמינות מלאה מסביב לשעון, גם בסופי שבוע וחגים.</li>
        </ul>
        
        <div className="mt-12 p-6 bg-neutral-900 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">שירותים נוספים באזור חיפה:</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-blue-400">
            <li><Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa">טיפול ברכב חשמלי תקוע באחוזה</Link></li>
            <li><Link href="/areas/haifa-general/car-stuck-in-mud-carmel-region">חילוץ רכב תקוע בבוץ באזור הכרמל</Link></li>
            <li><Link href="/areas/haifa-general/4x4-rescue-mud-carmel-forest-haifa-university">חילוץ רכבי 4x4 באזור האוניברסיטה</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 bg-neutral-900">
        <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירה וחילוץ</h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-lg">האם אתם גוררים אופנועים באזור אחוזה?</h4>
            <p className="text-neutral-400">לא, איננו עוסקים בגרירת אופנועים או קטנועים. השירות שלנו ממוקד ברכבים פרטיים, מסחריים ורכבי שטח.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg">מהו זמן ההגעה המשוער לאזור הכרמל?</h4>
            <p className="text-neutral-400">אנו עושים את מירב המאמצים להגיע תוך זמן קצר מרגע הקריאה, בהתאם לעומסי התנועה באזור אחוזה.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg">האם השירות פעיל בסופי שבוע?</h4>
            <p className="text-neutral-400">כן, אנו זמינים 24/7, כולל שבתות וחגים, כדי לתת לכם שקט נפשי בכל עת.</p>
          </div>
        </div>
      </section>
    </main>
  );
}