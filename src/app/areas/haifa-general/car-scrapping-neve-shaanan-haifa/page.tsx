import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'פינוי רכב לפירוק בנווה שאנן חיפה | מחיר הוגן ושירות מהיר 24/7',
  description: 'נתקעתם עם רכב ישן בנווה שאנן? אנו מבצעים פינוי רכב לפירוק בחיפה במהירות, במחיר הוגן וזמינות 24/7. התקשרו עכשיו לפינוי הרכב ללא כאב ראש!',
  alternates: {
    canonical: '/areas/haifa-general/car-scrapping-neve-shaanan-haifa',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי פינוי רכבים לפירוק בנווה שאנן חיפה',
    'areaServed': 'נווה שאנן, חיפה',
    'priceRange': 'הוגן',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.7858',
      'longitude': '35.0050',
    },
    'serviceType': 'פינוי רכב לפירוק',
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="gradient-trust text-white py-14 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">פינוי רכב לפירוק בנווה שאנן חיפה</h1>
          <p className="text-xl mb-8 leading-relaxed">
            מחפשים שירות אמין לפינוי רכב לפירוק בשכונת נווה שאנן בחיפה? אנו מציעים פתרון מהיר ומקצועי לכל סוגי הרכבים. אם הרכב שלכם מושבת, אנו נגיע עד אליכם. אנו מתמחים גם במתן שירותים משלימים באזור, כגון <Link href="/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing" className="underline font-semibold">שירותי גרירה זולים באחוזה</Link> וסיוע טכני לתושבי האזור, לרבות <Link href="/areas/haifa-general/24-7-towing-electric-car-battery-dead-technion-haifa" className="underline font-semibold">שירותי גרירה בטכניון</Link>. אנו מתחייבים לשירות אדיב, עמידה בלוחות זמנים ומחיר הוגן.
          </p>
          <div className="bg-black/20 p-6 rounded-xl mb-8">
            <h2 className="text-2xl font-semibold mb-4">למה לבחור בנו לפינוי רכב בנווה שאנן?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>פינוי מהיר מכל נקודה בשכונה</li>
              <li>טיפול מקצועי בכל סוגי הרכבים (פרטי, מסחרי, 4x4)</li>
              <li>הצעת מחיר הוגנת ומיידית</li>
              <li>זמינות 24/7 לכל תרחיש</li>
            </ul>
          </div>
          <p className="text-sm mb-6 italic">* איננו מספקים שירותי פינוי לאופנועים.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black py-3 px-8 rounded-lg font-bold text-center hover:bg-gray-200 transition-colors">
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על פינוי רכבים בחיפה</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">תוך כמה זמן תגיעו לפנות את הרכב בנווה שאנן?</h3>
            <p>אנו מבינים את הדחיפות ומגיעים בזמן הקצר ביותר. בזכות הצוותים שלנו הפרוסים בחיפה, אנו מבצעים פינוי יעיל לכל רחובות השכונה.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">האם אתם קונים רכבים ללא טסט?</h3>
            <p>בהחלט. אנו קונים רכבים ללא טסט, רכבים אחרי תאונה או רכבים עם תקלות מכניות כבדות. למידע נוסף על רכישת רכבים, בקרו בדף <Link href="/areas/haifa-general/car-scrapping-haifa-krayot-towing" className="text-blue-600 underline">פינוי רכב לפירוק בחיפה והקריות</Link>.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">מה קורה אם הרכב תקוע בצומת מרכזי?</h3>
            <p>אם הרכב נתקע מחוץ לשכונה בצומת סואן, אנו מציעים גם <Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-blue-600 underline">שירותי גרירה בצומת הצ'ק פוסט</Link> לכל מטרה.</p>
          </div>
        </div>
      </section>
    </main>
  );
}