import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'קונה רכבים לפירוק בחיפה והקריות | תשלום מזומן והגעה מהירה 24/7',
  description: 'מעוניינים למכור רכב לפירוק? קונה רכבים לפירוק בחיפה והקריות במחיר הוגן במזומן! גרירה חינם, שירות אדיב והגעה מהירה לכל האזור. התקשרו עכשיו!',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק באזור חיפה והקריות - שירות אמין ומהיר</h1>
          <p className="text-xl mb-8">נמאס לכם מהרכב הישן שתופס מקום? אנו קונים רכבים לברזל לפירוק, רכבים לפני גריטה ורכבים מושבתים במחיר הוגן. פינוי מקצועי לכל סוגי הרכבים (לא כולל אופנועים).</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה למכור רכב לפירוק דווקא אצלנו?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ שירות פינוי רכבים מיידי בחיפה, קרית אתא, קרית ביאליק וכל אזור הקריות.</li>
            <li>✓ תשלום הוגן במזומן במקום - ללא עיכובים.</li>
            <li>✓ גרירת הרכב ללא עלות נוספת - כלול בשירות.</li>
            <li>✓ עבודה מול צוות מקצועי ומנוסה שמכיר כל פינה בעיר.</li>
          </ul>
          <p className="text-lg">
            אנו מעניקים מעטפת שירות מלאה לנהגים בצפון. זקוקים למידע נוסף? בדקו גם את שירותי ה-<Link href="/areas/haifa-general/car-scrapping-haifa-krayot-towing" className="text-blue-600 font-semibold underline">car scrapping haifa krayot towing</Link> שלנו או בצעו <Link href="/areas/haifa-general/towing-for-scrap-kiryat-bialik" className="text-blue-600 font-semibold underline">towing for scrap kiryat bialik</Link> דרך המומחים שלנו.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות בנושא פירוק רכבים</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">האם אתם קונים כל סוג רכב לפירוק?</h3>
              <p>כן, אנו קונים רכבים פרטיים, מסחריים ורכבי שטח במצבים שונים, כולל רכבים לאחר תאונה או כאלו שעברו את הקילומטראז המקסימלי. לצורך חירום, מומלץ לעיין גם ב-<Link href="/areas/haifa-general/urgent-towing-commercial-van-check-post-route-22" className="text-blue-600 underline">urgent towing commercial van check post route 22</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">תוך כמה זמן תגיעו לפנות את הרכב שלי?</h3>
              <p>הצוות שלנו פרוס בכל האזור ומבצע פינויים מהירים. אם אתם נמצאים באזור הצ'ק פוסט, תוכלו להיעזר גם בשירות <Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="text-blue-600 underline">affordable towing check post haifa</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם השירות כולל פינוי וגרירה?</h3>
              <p>בוודאי. אנו מציעים שירות מקיף כולל גרירה ופינוי מלא, לפרטים נוספים בדקו את <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-towing-included" className="text-blue-600 underline">buy cars for scrap haifa krayot towing included</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}