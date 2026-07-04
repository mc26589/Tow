import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'חילוץ רכב מתעלה בכביש 4 צומת צ\'ק פוסט | הגעה תוך 30 דקות 24/7',
  description: 'נתקעתם בתעלה בכביש 4 ליד צומת צ\'ק פוסט? צוות חילוץ מקצועי בדרך אליכם. שירות מהיר, אמין ומחיר הוגן לכל סוגי הרכבים. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/emergency-car-recovery-ditch-route-4-check-post',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי חילוץ וגרירה קריות וחיפה',
    'areaServed': 'Haifa and Krayot',
    'priceRange': 'הוגן',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.7940',
      'longitude': '35.0340',
    },
    'serviceType': 'Emergency Car Recovery',
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב מתעלה בכביש 4 ליד צומת צ'ק פוסט</h1>
          <p className="text-xl mb-8">זקוקים לחילוץ דחוף? הרכב נפל לתעלה? אנו כאן בשבילכם 24/7. הגעה מהירה לאזור הצ'ק פוסט, הקריות וציר התנועה המרכזי.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שירותי חילוץ מקצועיים בצומת צ'ק פוסט</h2>
          <p className="mb-4">אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4 שסטו מהכביש באזור הצ'ק פוסט. אם אתם זקוקים גם ל<Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-400 underline">גרירת רכב תקוע בכביש 22</Link> או <Link href="/areas/haifa-general/fast-towing-services-road-22-krayot-bypass" className="text-blue-400 underline">שירותי גרירה מהירים בעוקף קריות</Link>, הצוות שלנו זמין עבורכם 24/7. חשוב לציין: אנו לא מספקים שירותי חילוץ לאופנועים.</p>
          <p>הצוות שלנו מגיע מצויד בכלים המתאימים ביותר כדי להבטיח שהרכב שלכם יחולץ במינימום נזק, גם במקרים של רכבים ישנים שמיועדים ל<Link href="/areas/haifa-general/pinui-rechev-grotah-grira-check-post-haifa-krayot-lechalafim" className="text-blue-400 underline">פינוי רכבים לגריטה</Link>.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">כמה זמן לוקח לכם להגיע לצומת צ'ק פוסט?</h3>
              <p>בדרך כלל אנו מגיעים לכל נקודה באזור הצ'ק פוסט, כביש 4 וכביש 22 תוך 30 דקות, בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם מחלצים רכבים שנפלו לתעלה עמוקה?</h3>
              <p>כן, אנו ערוכים לביצוע חילוצים מורכבים. במקרים של חילוץ בשטח קשה יותר, אנו מסתייעים בידע שנצבר מ<Link href="/areas/haifa-general/mud-rescue-4x4-carmel-forest-haifa" className="text-blue-600 underline">חילוצי 4x4 ביערות הכרמל</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">מה טווח המחירים של חילוץ וגרירה באזור?</h3>
              <p>אנו מציעים מחיר הוגן ושקוף. המחיר נקבע לפי מורכבות החילוץ מהתעלה והמרחק לגרירה ליעד המבוקש בחיפה, הקריות או נשר.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}