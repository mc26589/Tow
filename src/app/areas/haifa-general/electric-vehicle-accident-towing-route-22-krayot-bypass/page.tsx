import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרירת רכב חשמלי בכביש 22 (עוקף קריות) | שירות 24/7 מהיר',
  description: 'נתקעתם עם רכב חשמלי בכביש 22? שירות גרירה מקצועי לרכבים חשמליים 24/7. הגעה מהירה, מחיר הוגן ושמירה על הרכב. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/electric-vehicle-accident-towing-route-22-krayot-bypass',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    name: 'שירותי גרירה חיפה והקריות',
    areaServed: 'Haifa and Krayot',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '32.8156',
      longitude: '35.0567',
    },
    priceRange: '$$',
    serviceType: 'Electric Vehicle Accident Towing',
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
          <p className="text-xl mb-8">נתקעתם בכביש 22? הצוות המקצועי שלנו זמין עבורכם 24/7 עם ציוד מתקדם וייעודי לגרירת רכבים חשמליים והיברידיים בבטחה.</p>
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
        <h2 className="text-3xl font-bold mb-6">מענה מקצועי ובטוח לרכבים חשמליים</h2>
        <p className="mb-4">
          גרירת רכב חשמלי דורשת מיומנות וציוד מתאים למניעת נזק למערכות הסוללה וההנעה. אנו מתמחים בחילוץ וגרירה לאחר תאונות או תקלות בדרכים מהירות. אם אתם זקוקים לפתרונות נוספים באזור, תוכלו להיעזר בשירותי 
          <Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="text-blue-600 font-bold underline px-1">גרר פלטה בכביש 22</Link> או 
          <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600 font-bold underline px-1">שירות גרירה אמין בצומת צ'ק פוסט</Link>. חשוב להדגיש כי אנו מתמקדים ברכבים פרטיים ומסחריים ולא מספקים שירותי גרירה לאופנועים.
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על גרירת רכב חשמלי</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">האם אתם גוררים רכבים חשמליים לאחר תאונה בכביש 22?</h3>
              <p>כן, אנו ערוכים להגעה מהירה לכל נקודה בכביש עוקף קריות, כולל מחלפי כביש 22, ומציעים שירות מיומן לשמירה על רכבכם החשמלי.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">איך מזמינים שירותי גרירה מהירים באזור?</h3>
              <p>ניתן ליצור קשר דרך כפתור הוואטסאפ או החיוג המהיר בעמוד. אנו מספקים מענה רחב הכולל גם <Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-blue-600 underline">גרירה לאחר תאונה בצומת צ'ק פוסט</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">מהי רמת הזמינות שלכם בשעות הלילה?</h3>
              <p>הצוות שלנו פועל 24/7, כולל שבתות וחגים, כדי להעניק לכם שקט נפשי בכל שעה ביום או בלילה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}