import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרירה בכביש 22 עוקף קריות | הגעה מהירה 24/7 | מחיר הוגן',
  description: 'נתקעתם בכביש 22? שירותי גרירה וחילוץ מקצועיים לרכב פרטי ומסחרי. הגעה מהירה 24/7 לכל הקריות. מחיר הוגן ושירות אמין. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/fast-towing-services-road-22-krayot-bypass'
  }
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה חיפה והקריות',
    'areaServed': { '@type': 'Place', 'name': 'כביש 22 עוקף קריות' },
    'openingHoursSpecification': { '@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], 'opens': '00:00', 'closes': '23:59' },
    'priceRange': '$$',
    'serviceType': 'Towing and Roadside Assistance',
    'geo': { '@type': 'GeoCoordinates', 'latitude': '32.8190', 'longitude': '35.0630' }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה מהירים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב בכביש 22? אנו כאן בשבילכם. שירותי גרירה מקצועיים זמינים 24/7. אם אתם זקוקים ל- <Link href="/areas/haifa-general/emergency-breakdown-towing-route-22-krayot-bypass" className="underline font-semibold">גרירה דחופה בכביש 22</Link>, אנו מבטיחים הגעה מהירה לכל נקודה בציר עוקף הקריות.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
          <ul className="grid md:grid-cols-3 gap-8">
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">זמינות 24/7</h3>
              <p>ציוד חילוץ חדיש וזמינות לכל קריאה. צריכים גם <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-600 underline">גרירה זולה בצומת צ'ק פוסט</Link>? אנחנו המענה המקצועי שלכם.</p>
            </li>
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">שירות מקיף</h3>
              <p>אנו מציעים מענה לכל תקלה, כולל רכבים מושבתים. נתקעתם בדרך? אנו מבצעים גם <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600 underline">גרירת רכבים באזור הקריות</Link> והסביבה.</p>
            </li>
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">פינוי רכבים לפירוק</h3>
              <p>יש לכם רכב ישן שאינו נוסע? אנו מציעים שירות של <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot" className="text-blue-600 underline">קניית רכבים לפירוק באזור הקריות</Link> כולל גרירה בחינם.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירה בכביש 22</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-xl">תוך כמה זמן תגיעו אלי בכביש 22?</h3>
            <p>זמן ההגעה שלנו משתנה בהתאם לעומסי התנועה בציר העוקף, אך אנו עושים מאמץ להגיע במהירות המרבית לכל קריאה.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">האם אתם גוררים רכבים מסחריים?</h3>
            <p>כן, אנו גוררים רכבים פרטיים ומסחריים. שימו לב כי השירות מיועד לרכבים בלבד (ללא אופנועים).</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">האם השירות כולל פינוי לאזור הצ'ק פוסט?</h3>
            <p>בהחלט. אנו מספקים מענה מלא גם למי שמחפש <Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="text-blue-600 underline">שירותי גרירה זולים באזור צומת צ'ק פוסט</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}