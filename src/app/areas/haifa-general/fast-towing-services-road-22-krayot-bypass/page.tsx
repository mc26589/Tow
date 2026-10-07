import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרירה בכביש 22 עוקף קריות | הגעה מהירה 24/7 | מחיר הוגן',
  description: 'נתקעתם בכביש 22? שירותי גרירה וחילוץ מקצועיים לרכב פרטי ומסחרי. הגעה מהירה 24/7 לכל הקריות. שירות אמין ומחיר הוגן. התקשרו עכשיו!',
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
            נתקעתם עם הרכב בכביש 22? אנו כאן בשבילכם. אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי שטח. 
            מחפשים <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="underline font-semibold">גרירה 24 7 עוקף קריות במחיר הוגן</Link>? הגעתם למקום הנכון.
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
              <h3 className="font-bold text-xl mb-2">זמינות מלאה</h3>
              <p>צוותי החילוץ שלנו פרוסים באזור חיפה והקריות וזמינים 24/7 לכל קריאה, כולל <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-600 underline">גרירת חירום משתלמת בכביש 22</Link>.</p>
            </li>
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">מקצועיות ללא פשרות</h3>
              <p>ציוד גרירה מתקדם המבטיח שמירה על הרכב שלכם. נתקעתם עם רכב חשמלי? ראו <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-600 underline">גרירת רכב חשמלי בכביש 22</Link>.</p>
            </li>
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">פתרון לכל סוגי הרכבים</h3>
              <p>בין אם הרכב מושבת לחלוטין או שאתם צריכים <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included" className="text-blue-600 underline">פינוי רכב לפירוק עם גרירה כלולה</Link>, אנו כאן לתת לכם מענה מהיר.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירה בכביש 22</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-xl">תוך כמה זמן תגיעו אלי בכביש 22?</h3>
            <p>אנו עושים את מירב המאמצים להגיע תוך זמן קצר מרגע הקריאה, בהתאם לעומסי התנועה בציר עוקף קריות.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">האם אתם גוררים רכבים מסחריים?</h3>
            <p>כן, אנו מספקים שירותי גרירה לרכבים פרטיים, רכבים מסחריים ורכבי שטח (4x4). שימו לב כי איננו מספקים גרירה לאופנועים.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">האם השירות כולל גרירה מאזור התעשייה הסמוך?</h3>
            <p>בהחלט. אנו מספקים שירותים גם מחוץ לכביש הראשי, כמו למשל <Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-bialik-industrial-zone" className="text-blue-600 underline">גרירת משטח באזור התעשייה קרית ביאליק</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}