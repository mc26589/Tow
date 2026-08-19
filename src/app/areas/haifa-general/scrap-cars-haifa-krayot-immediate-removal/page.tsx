import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'קניית רכבים לפירוק בחיפה והקריות | פינוי מיידי | מחיר הוגן',
  description: 'מעוניינים למכור רכב לפירוק בחיפה והקריות? אנו מציעים פינוי מיידי, הצעת מחיר הוגנת ושירות מקצועי 24/7 לכל סוגי הרכבים. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/scrap-cars-haifa-krayot-immediate-removal',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירות קניית רכבים לפירוק בחיפה והקריות',
    'areaServed': ['Haifa', 'Krayot'],
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59',
    },
    'priceRange': '$',
    'serviceType': 'Scrap Car Removal',
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.7940',
      'longitude': '34.9896',
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או מושבת? אנו כאן בשבילכם 24/7 עם שירות מהיר ומקצועי.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות מקצועי לפינוי רכבים לפירוק</h2>
        <p className="mb-4">אנו מתמחים בפינוי רכבים מכל הסוגים: רכבים פרטיים, מסחריים ורכבי 4x4. אם אתם מחפשים <Link href="/areas/haifa-general/buying-cars-for-scrap-check-post-haifa" className="text-blue-600 underline">קונה רכבים לפירוק באזור הצ'ק פוסט</Link> או בכל נקודה אחרת בחיפה ובקריות, הגעתם למקום הנכון.</p>
        <p className="font-semibold text-red-600 mb-4">שימו לב: איננו מספקים שירותי פינוי או קנייה לאופנועים.</p>
        <p>התהליך שלנו פשוט, מהיר ושקוף. אנו נגיע אליכם ונספק הצעת מחיר הוגנת במקום. לעיתים אנו מסייעים גם במקרים מורכבים יותר, בדומה לשירותי <Link href="/areas/haifa-general/towing-service-bat-galim-haifa" className="text-blue-600 underline">גרר בבת גלים</Link>.</p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על פירוק רכבים</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">האם אתם קונים רכבים ללא טסט?</h3>
              <p>כן, אנו רוכשים רכבים במגוון מצבים, כולל רכבים ללא טסט, רכבים עם תקלות מנוע או רכבים מושבתים.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">כמה זמן לוקח פינוי הרכב?</h3>
              <p>אנו מתחייבים לשירות מהיר. לרוב, הגעה ופינוי מתבצעים תוך זמן קצר מרגע הקריאה בתיאום מראש.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">אילו סוגי רכבים אתם מפנים?</h3>
              <p>אנו מפנים רכבים פרטיים, מסחריים ורכבי 4x4. איננו מטפלים באופנועים או כלים דו-גלגליים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}