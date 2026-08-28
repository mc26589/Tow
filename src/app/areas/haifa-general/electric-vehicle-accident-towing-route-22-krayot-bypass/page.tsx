import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרירת רכב חשמלי בכביש 22 (עוקף קריות) - הגעה תוך 30 דקות | 24/7',
  description: 'נתקעתם עם רכב חשמלי בכביש 22? שירות גרירה מקצועי ומהיר לכל סוגי הרכבים החשמליים. מחיר הוגן, ציוד מתקדם ושירות 24/7. התקשרו עכשיו להגעה מיידית!',
  alternates: {
    canonical: '/areas/haifa-general/electric-vehicle-accident-towing-route-22-krayot-bypass',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה חיפה והקריות - רכבים חשמליים',
    'areaServed': 'Haifa and Krayot',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.8156',
      'longitude': '35.0567',
    },
    'priceRange': '$$',
    'serviceType': 'Electric Vehicle Accident Towing',
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרירת רכב חשמלי לאחר תאונה בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם בכביש 22? הצוות המקצועי שלנו זמין עבורכם 24/7 עם ציוד מתקדם וייעודי לגרירת רכבים חשמליים והיברידיים בבטחה מלאה.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="הקריות" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות מקצועי לרכבים חשמליים בכביש 22</h2>
        <p className="mb-4">
          רכב חשמלי זקוק לטיפול שונה מרכב רגיל בעת גרירה, במיוחד לאחר תאונה. אנו מבינים את חשיבות השמירה על מערכות הסוללה. אם אתם זקוקים לסיוע, ניתן להסתייע בשירותי 
          <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-blue-600 font-bold underline px-1">גרירה 24/7 עוקף קריות במחיר הוגן</Link> או לבדוק אפשרויות נוספות עבור <Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="text-blue-600 font-bold underline px-1">גרירה לאחר תאונה בכביש 22</Link>. צוות הגרר שלנו מיומן בחילוץ מהיר גם בצמתים המרכזיים.
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על גרירת רכב חשמלי</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">האם אתם גוררים רכבים חשמליים לאחר תאונה בכביש 22?</h3>
              <p>כן, אנו ערוכים להגעה מהירה לכל נקודה בכביש עוקף קריות. לרשותכם גם <Link href="/areas/haifa-general/emergency-towing-road-22-kiryat-ata-interchange" className="text-blue-600 underline">גרירת חירום במחלף קרית אתא</Link> וסביבתה.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">מה לעשות אם הרכב החשמלי הושבת כליל?</h3>
              <p>אם הרכב במצב טוטאל-לוס, אנו מספקים מענה כולל. ניתן להיעזר בשירותי <Link href="/areas/haifa-general/sell-damaged-car-for-parts-haifa-immediate-pickup" className="text-blue-600 underline">מכירת רכב תקול לחלפים בחיפה</Link> בצורה מסודרת ומהירה.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם השירות כולל גרירה גם לאזורים קרובים?</h3>
              <p>בהחלט. אנו פעילים בחיפה, קרית אתא, קרית מוצקין וסביבת כביש 22. למידע נוסף, בקרו ב-<Link href="/areas/page" className="text-blue-600 underline">אזורי השירות שלנו</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}