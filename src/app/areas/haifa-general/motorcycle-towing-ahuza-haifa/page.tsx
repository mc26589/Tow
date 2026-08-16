import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרר באחוזה חיפה | שירות גרירה לרכב ו-4x4 בפריסה מהירה',
  description: 'נתקעת עם הרכב באחוזה חיפה? אנו מציעים שירותי גרירה מקצועיים לרכבים פרטיים ו-4x4. הגעה מהירה, מחיר הוגן ושירות 24/7. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/motorcycle-towing-ahuza-haifa',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה חיפה והקריות',
    'areaServed': 'Haifa and Krayot',
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
    'priceRange': '$',
    'serviceType': 'Towing and Roadside Assistance for Cars and 4x4',
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירותי גרירה מקצועיים באחוזה חיפה</h1>
          <p className="text-lg mb-8">
            זקוקים לשירותי גרירה דחופים באזור אחוזה בחיפה? אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי שטח. חשוב להבהיר כי איננו נותנים מענה לאופנועים, אך נש לכל צורך אחר, אנו מציעים זמינות 24/7. זקוקים לחילוץ מורכב? אולי תרצו להציץ בפתרונות שלנו עבור <Link href="/areas/haifa-general/4x4-stuck-mud-rescue-carmel-forest-haifa" className="underline font-bold">חילוץ 4x4 בשטח כרמל</Link>.
          </p>
          <div className="flex gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לגרירת רכבים באחוזה?</h2>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>זמינות מלאה 24/7 לכל אזור חיפה</li>
            <li>ציוד גרירה מתקדם לרכבים ורכבי שטח</li>
            <li>מענה מהיר באחוזה והסביבה</li>
            <li>שקיפות מלאה ומחיר הוגן</li>
          </ul>
          
          <h3 className="text-xl font-bold mb-4">שאלות נפוצות</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">האם אתם גוררים רכבים חשמליים באחוזה?</p>
              <p className="text-gray-300">כן, אנו מספקים מענה מלא, כולל <Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-400">שירותי גרירה וסיוע לרכב חשמלי באחוזה</Link>.</p>
            </div>
            <div>
              <p className="font-bold">מהו זמן ההגעה הממוצע באזור אחוזה?</p>
              <p className="text-gray-300">בזכות מיקומנו המרכזי, אנו שואפים להגיע לכל נקודה באחוזה במהירות האפשרית, בהתאם לעומסי התנועה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}