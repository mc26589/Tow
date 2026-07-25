import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרר באחוזה חיפה 24/7 - שירות גרירה מהיר ומחיר הוגן',
  description: 'נתקעת עם הרכב באזור אחוזה חיפה? אנו מספקים שירותי גרירה וחילוץ רכב מקצועיים 24/7 במחיר הוגן. הגעה מהירה לכל אזור הכרמל. התקשרו עכשיו!',
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
    'priceRange': 'מחיר הוגן',
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
    'serviceType': 'Car Towing and Roadside Assistance',
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            שירותי גרירה מקצועיים באחוזה, חיפה - 24/7
          </h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעת עם הרכב? אנחנו כאן לסייע. גרירת רכבים פרטיים ומסחריים באזור אחוזה והכרמל. שימו לב: השירות אינו כולל גרירת אופנועים.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="אחוזה חיפה" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה וחילוץ באחוזה</h2>
        <p className="mb-4">
          אנו מעניקים שירותי גרירה מהירים לתושבי אחוזה והסביבה. בין אם הרכב לא מניע או שהיית מעורב בתאונה, הצוות שלנו זמין עבורך. למחפשים פתרונות נוספים, ניתן לבדוק גם
          <Link href="/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing" className="text-blue-600 font-bold px-1">שירות גרירה זול ושקוף באחוזה</Link>
          או שירותי חילוץ מקצועיים במקרה של
          <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-area" className="text-blue-600 font-bold px-1">רכב שנתקע בבוץ בכרמל</Link>.
        </p>
      </section>

      <section className="py-12 container mx-auto px-4 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6">שאלות נפוצות</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">תוך כמה זמן אתם מגיעים לאחוזה?</h3>
            <p>אנו משתדלים להגיע לכל נקודה באחוזה ובחיפה בזמן הקצר ביותר, בדרך כלל תוך 30-60 דקות בהתאם לעומסי התנועה.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם גוררים אופנועים?</h3>
            <p>לא, השירות שלנו מתמקד ברכבים פרטיים ומסחריים בלבד ואינו כולל גרירת דו-גלגלי.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם קונים רכבים לפירוק באזור?</h3>
            <p>כן, אנו עוסקים גם בפינוי רכבים, ניתן לראות פרטים נוספים על <Link href="/areas/haifa-general/buying-cars-for-scrap-ahoza-haifa" className="text-blue-600">קניית רכבים לפירוק באחוזה</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}