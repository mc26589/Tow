import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'קונה רכבים לפירוק בחיפה והקריות | מזומן וגרירה חינם 24/7',
  description: 'מעוניינים למכור רכב לפירוק בחיפה והקריות? קונים את כל סוגי הרכבים במזומן, גרירה חינם והגעה מהירה לכל האזור. אל תתקעו עם גרוטאה, התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/buying-cars-for-scrap-haifa-krayot',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי פינוי וקניית רכבים לפירוק בחיפה והקריות',
    'areaServed': { '@type': 'City', 'name': 'Haifa and Krayot' },
    'openingHoursSpecification': { '@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], 'opens': '00:00', 'closes': '23:59' },
    'priceRange': 'מחיר הוגן ומיידי',
    'serviceType': 'Car Scrap and Towing',
    'geo': { '@type': 'GeoCoordinates', 'latitude': '32.7940', 'longitude': '34.9896' },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות - שירות מהיר ומזומן במקום</h1>
          <p className="text-xl mb-8">נמאס לכם מהרכב הישן? אנו קונים רכבים לברזל לפירוק, רכבים לפני גריטה ורכבים מושבתים במחיר הוגן. פינוי מקצועי לכל סוגי הרכבים באזור הצפון.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה למכור רכב לפירוק דווקא אצלנו?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ שירות פינוי רכבים מיידי בחיפה, קריית אתא, קריית ביאליק וכל אזור הקריות.</li>
            <li>✓ תשלום הוגן במזומן במקום - ללא עיכובים.</li>
            <li>✓ גרירת הרכב ללא עלות נוספת - אנו מפנים רכבים גם מצירי תנועה מרכזיים כמו <Link href="/areas/haifa-general/towing-services-road-22-krayot-bypass" className="text-blue-600 underline">כביש 22</Link>.</li>
            <li>✓ עבודה מול צוות מנוסה. זקוקים גם למידע על <Link href="/areas/haifa-general/פינוי-רכב-גרוטאה-לחלפים-קריית-מוצקין" className="text-blue-600 underline">פינוי רכב גרוטאה לחלפים בקריית מוצקין</Link>? אנחנו כאן.</li>
          </ul>
          <p className="text-lg">
            אנו מעניקים מעטפת שירות מלאה. אם אתם תקועים בדרך, ניתן להזמין גם <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-600 font-semibold underline">שירותי גרירה מהירה בצ'ק פוסט</Link> או לבצע <Link href="/areas/haifa-general/towing-for-scrap-kiryat-bialik-road-22" className="text-blue-600 font-semibold underline">גרירת רכבים לפירוק בקריית ביאליק</Link> דרך הצוותים שלנו הפרוסים בשטח.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות בנושא פירוק רכבים</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">האם אתם קונים כל רכב לפירוק?</h3>
              <p>כן, אנו רוכשים רכבים פרטיים ומסחריים במצבים שונים, כולל רכבים לאחר תאונה או רכבים עם תקלות מכניות כבדות. במידה ונתקעתם עם רכב חשמלי, אנו מציעים גם <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-600 underline">שירותי גרירה לרכבים חשמליים בחיפה</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">תוך כמה זמן תגיעו לפנות את הרכב?</h3>
              <p>הצוות שלנו פועל בפריסה ארצית רחבה ומגיע לרוב תוך זמן קצר מאוד. אם הרכב שלכם תקוע באזור המפרץ או בצירים מרכזיים, נדאג לפינוי מהיר ומקצועי.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם השירות כולל גרירה?</h3>
              <p>בוודאי. אנו מציעים שירות מקיף הכולל גרירה ופינוי ללא עלות נוספת ללקוח, כדי להקל עליכם את התהליך מתחילתו ועד סופו.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}