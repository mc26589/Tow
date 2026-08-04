import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרר בחורב ואחוזה, חיפה | הגעה תוך 30 דקות | זמינות 24/7',
  description: 'נתקעתם עם הרכב בחורב או באחוזה בחיפה? שירות גרירה מקצועי ומהיר לכל סוגי הרכבים. מחיר הוגן ושקיפות מלאה. התקשרו עכשיו להגעה מיידית!',
  alternates: {
    canonical: '/areas/haifa-general/emergency-towing-horev-ahuza-haifa',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    name: 'שירותי גרירה חיפה והקריות',
    areaServed: 'חיפה',
    priceRange: '₪',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '32.7845',
      longitude: '34.9867',
    },
    serviceType: 'Emergency Towing',
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר חירום לרכב תקוע ברחוב חורב ואחוזה חיפה</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב באזור חורב או אחוזה? אנו מתמחים בחילוץ וגרירת רכבים פרטיים ומסחריים. 
            זמינות 24/7 עם הגעה מהירה לכל נקודה על הציר המרכזי של הכרמל. מחירים הוגנים ושירות ללא פשרות.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו באזור חורב ואחוזה?</h2>
        <ul className="space-y-4 text-lg mb-8">
          <li>✓ הגעה מהירה לכל נקודה בציר חורב-אחוזה והסביבה.</li>
          <li>✓ צוות מיומן לטיפול בכל סוגי הרכבים (פרטי, מסחרי ושטח).</li>
          <li>✓ זמינות מלאה 24/7 לכל תרחיש, גם בשיפועים מאתגרים כפי שניתן לראות בשירות <Link href="/areas/haifa-general/towing-services-stuck-vehicle-steep-hill-ahuza-haifa" className="text-blue-600 underline font-semibold">גרירה מרחובות משופעים באחוזה</Link>.</li>
          <li>✓ שקיפות מלאה במחיר - ללא הפתעות.</li>
        </ul>
        <p>
          זקוקים לשירותים נוספים באזור? ראו גם <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-haifa" className="text-blue-600 underline">חילוץ רכבי שטח מהבוץ באזור הכרמל</Link> או 
          שירות <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included" className="text-blue-600 underline">קניית רכבים לפירוק עם גרר כלול</Link>.
        </p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירה בחורב-אחוזה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">תוך כמה זמן הגרר מגיע לאזור אחוזה?</h3>
              <p>באזור חורב-אחוזה אנו מקפידים על הגעה מהירה. ברוב המקרים נגיע אליכם תוך זמן קצר מרגע הקריאה, גם בשעות עומס.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם גוררים רכבים מחניונים תת-קרקעיים?</h3>
              <p>כן, אנו נותנים שירות חילוץ וגרירה גם מחניונים תת-קרקעיים באזור, בכפוף לבדיקת גובה המתבצעת מול נציגנו בטלפון.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">יש לכם שירותי גרירה גם מחוץ לחיפה?</h3>
              <p>אנו פרוסים בכל אזור הצפון. ניתן לבדוק גם את שירותי <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-600 underline">גרירת רכבים באזור הצ'ק פוסט</Link> למי שנתקע בדרך לעיר.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}