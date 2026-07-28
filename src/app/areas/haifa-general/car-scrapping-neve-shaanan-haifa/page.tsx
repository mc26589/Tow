import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'פינוי רכב לפירוק בנווה שאנן חיפה | קונה רכבים - הגעה מהירה!',
  description: 'נתקעו עם רכב ישן בנווה שאנן? אנו מבצעים פינוי רכב לפירוק בחיפה במהירות, במחיר הוגן וזמינות 24/7. הגעה מהירה לכל רחובות השכונה. התקשרו עכשיו!',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">פינוי רכב לפירוק בנווה שאנן חיפה – הגעה מהירה והצעת מחיר הוגנת</h1>
          <p className="text-xl mb-8 leading-relaxed">
            מחפשים שירות מקצועי לפינוי רכב לפירוק בשכונת נווה שאנן? אנו מתמחים בפינוי כל סוגי הרכבים – רכבים אחרי תאונה, רכבים עם תקלות מנוע או כאלה שפשוט אינם בשימוש. אנו מספקים מענה מקיף לתושבי חיפה, לרבות סיוע גם למי שזקוק לשירותי <Link href="/areas/haifa-general/cheap-towing-check-post-junction" className="underline font-semibold">גרירה בצומת הצ'ק פוסט</Link> או <Link href="/areas/haifa-general/scrap-car-removal-for-parts-kiryat-motzkin" className="underline font-semibold">פינוי רכבים לפירוק בקריות</Link>. אנו מתחייבים לשקיפות מלאה ומחיר הוגן עבור הרכב שלכם, תוך הגעה לכל רחוב בנווה שאנן.
          </p>
          <div className="bg-black/20 p-6 rounded-xl mb-8">
            <h2 className="text-2xl font-semibold mb-4">למה לבחור בנו לפינוי רכב בנווה שאנן?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>פינוי מהיר מכל רחוב בנווה שאנן והסביבה</li>
              <li>קניית כל סוגי הרכבים (פרטיים, מסחריים ו-4x4)</li>
              <li>הצעת מחיר הוגנת במקום ללא התחייבות</li>
              <li>זמינות 24/7 לכל תקלה או פינוי דחוף</li>
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
            <p>אנו מבינים את הדחיפות ומגיעים בזמן הקצר ביותר. בזכות הצוותים שלנו הפרוסים בחיפה, אנו מבצעים פינוי יעיל לכל רחובות השכונה, לרוב עוד באותו היום.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">האם אתם קונים רכבים ללא טסט או רכבים מושבתים?</h3>
            <p>בהחלט. אנו רוכשים רכבים מכל סוג, ללא טסט, רכבים אחרי תאונה או עם תקלות מכניות. למידע נוסף, ניתן לבדוק גם את השירות שלנו ל-<Link href="/areas/haifa-general/scrap-car-removal-kiryat-haim-cash" className="text-blue-600 underline">פינוי רכבים לפירוק בקרית חיים</Link>.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">מה עושים אם הרכב נתקע מחוץ לשכונה בצומת סואן?</h3>
            <p>אם הרכב נתקע באזור מרכזי, אנו מציעים מענה מהיר עם <Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="text-blue-600 underline">שירותי גרירה מקצועיים</Link> המאפשרים פינוי בטוח בכל שעה.</p>
          </div>
        </div>
      </section>
    </main>
  );
}