import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'חילוץ 4X4 מהבוץ בכרמל (אוניברסיטת חיפה) - הגעה מהירה 24/7',
  description: 'נתקעתם בבוץ ביערות הכרמל ליד אוניברסיטת חיפה? צוות חילוץ 4X4 מומחה בדרך אליכם! הגעה מהירה, מחיר הוגן ושירות מקצועי ללא נזק. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/4x4-rescue-mud-carmel-forest-haifa-university'
  }
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי חילוץ 4X4 בחיפה והכרמל',
    'areaServed': 'Haifa and Carmel Forest',
    'priceRange': '$$',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 32.762,
      'longitude': 35.015
    },
    'serviceType': '4x4 Off-road Recovery'
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב 4X4 שקוע בבוץ באזור אוניברסיטת חיפה ויערות הכרמל</h1>
          <p className="text-xl mb-8">השטח הפך לבוצי? אל תילחצו. צוות המומחים שלנו לחילוצי 4X4 נמצא בקרבת מקום ומכיר כל שביל מסביב לאוניברסיטה. אנו מתחייבים למענה מהיר ושירות מקצועי ללא נזק לרכב.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והכרמל" />
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בשטח?</h2>
        <ul className="list-disc pr-6 space-y-4">
          <li>מומחיות מוכחת ב-<Link href="/areas/haifa-general/4x4-vehicle-stuck-in-mud-carmel-forest" className="text-blue-600 underline">חילוץ רכבי שטח מהבוץ</Link> באזור הכרמל.</li>
          <li>זמינות מלאה 24/7 באזור חיפה, <Link href="/areas/haifa-general/mud-rescue-4x4-carmel-forest-haifa" className="text-blue-600 underline">יערות הכרמל</Link> וסביבת האוניברסיטה.</li>
          <li>ציוד חילוץ מתקדם מונע נזקים לשלדת הרכב ומבטיח טיפול בטוח.</li>
          <li>מחירים הוגנים ושירות אדיב ללא הפתעות, גם במקרים של <Link href="/areas/haifa-general/car-extraction-from-mud-carmel-reserve-haifa" className="text-blue-600 underline">חילוץ רכב משמורות טבע</Link>.</li>
        </ul>

        <div className="mt-10 p-6 bg-gray-50 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על חילוצי 4X4 בחיפה</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">כמה זמן לוקח לכם להגיע ליערות הכרמל?</p>
              <p>צוותי החילוץ שלנו פרוסים בנקודות אסטרטגיות בחיפה, כך שנגיע לרוב אזורי האוניברסיטה והיערות תוך זמן קצר מרגע הקריאה.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם מחלצים רכבים שאינם 4X4?</p>
              <p>כן, אנו מספקים שירותי <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-600 underline">גרירת רכבים רגילים</Link> שנתקעו בדרכי עפר משובשות בצידי הדרכים.</p>
            </div>
            <div>
              <p className="font-bold">מה טווח המחירים של חילוץ בשטח?</p>
              <p>המחיר נקבע לפי מורכבות החילוץ ומיקום הרכב. אנו מקפידים על שקיפות מלאה ומחיר הוגן בהשוואה לשירותי גרירה אחרים.</p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-gray-700 italic">
          חשוב לציין: אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4X4. איננו מספקים שירותי חילוץ או גרירה לאופנועים (במידה ואתם צריכים סיוע לאופנוע באחוזה, מומלץ לבדוק <Link href="/areas/haifa-general/motorcycle-towing-ahuza-haifa" className="text-blue-600 underline">שירותי גרירת אופנועים מקצועיים</Link>).
        </p>
      </section>
    </main>
  );
}
