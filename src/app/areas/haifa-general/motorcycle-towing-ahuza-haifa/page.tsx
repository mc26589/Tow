import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרר באחוזה חיפה - שירותי גרירה לרכב 24/7 | מחיר הוגן',
  description: 'נתקעת עם הרכב באחוזה? שירותי גרירה מקצועיים ומהירים 24/7 לכל סוגי הרכבים באזור אחוזה והכרמל. הגעה מהירה, מחיר הוגן ושירות אדיב. התקשרו עכשיו!',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר לרכב באחוזה חיפה - שירות חילוץ מהיר 24/7</h1>
          <p className="text-xl mb-8">
            אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4 באזור אחוזה והכרמל. 
            זקוק לעזרה עם הרכב? אנו זמינים לכל קריאה 24/7 עם ציוד חדיש.
          </p>
          <div className="flex gap-4">
            <WhatsAppCTA cityName="אחוזה, חיפה" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה וחילוץ באזור חיפה</h2>
        <p className="mb-6">אנו מספקים פתרונות מתקדמים לכל סוגי התקלות בדרכים:</p>
        <ul className="list-disc pr-6 space-y-2 mb-8">
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>גרירת רכבים תקועים בדרכים הרריות - <Link href="/areas/haifa-general/towing-services-stuck-vehicle-steep-hill-ahuza-haifa" className="text-blue-600 underline">towing services stuck vehicle steep hill ahuza haifa</Link>.</li>
          <li>שירות מיוחד לחילוץ רכבי שטח - <Link href="/areas/haifa-general/4x4-rescue-mud-carmel-forest-haifa-university" className="text-blue-600 underline">4x4 rescue mud carmel forest haifa university</Link>.</li>
          <li>פתרונות לרכבים חשמליים - <Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-600 underline">24 7 towing electric vehicle battery dead ahuzah haifa</Link>.</li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg mt-10">
          <h3 className="text-xl font-bold mb-4">שאלות נפוצות (FAQ)</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">כמה זמן לוקח לגרר להגיע לאחוזה?</p>
              <p>אנו מקפידים על הגעה מהירה לכל נקודה באחוזה ובחיפה. בדרך כלל תוך 30-45 דקות תלוי בעומסי התנועה.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם גוררים אופנועים?</p>
              <p>חשוב להבהיר: איננו מספקים שירותי גרירה לאופנועים. השירות שלנו ממוקד ברכבים פרטיים, מסחריים ו-4x4 בלבד.</p>
            </div>
            <div>
              <p className="font-bold">האם המחיר באחוזה יקר יותר?</p>
              <p>אנו גובים מחיר הוגן ושקוף לכל קריאה, ללא הפתעות, בהתאם למרחק הגרירה וסוג הרכב.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}