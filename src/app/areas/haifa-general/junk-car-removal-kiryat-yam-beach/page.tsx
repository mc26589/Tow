import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'פינוי רכבים לפירוק בקריית ים - שירות מהיר ומחיר הוגן | 24/7',
  description: 'נתקעתם עם רכב ישן בקריית ים? אנו מציעים פינוי רכבים לפירוק מהיר ומקצועי באזור החוף. תשלום במזומן, שירות אדיב ופינוי תוך זמן קצר. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/junk-car-removal-kiryat-yam-beach',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה ופינוי רכבים חיפה והקריות',
    'areaServed': 'Kiryat Yam',
    'priceRange': '₪',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.8350',
      'longitude': '35.0650',
    },
    'serviceType': 'Junk car removal',
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">פינוי רכבים לפירוק באזור חוף קריית ים</h1>
          <p className="text-lg mb-8 max-w-2xl">
            אנו מציעים שירות פינוי רכבים לפירוק מהיר ומקצועי באזור חוף קריית ים והסביבה. אם ברשותכם רכב ישן, תקול או מושבת, אנו נדאג לפינויו המיידי.
            אנו מתמחים בפינוי רכבים פרטיים, מסחריים ורכבי שטח (4x4). מחפשים פתרון נוסף? בדקו את השירותים שלנו של
            <Link href="/areas/haifa-general/buy-old-cars-for-scrap-kiryat-yam" className="underline mx-1">קניית רכבים ישנים לפירוק בקריית ים</Link>
            או שירותי גרירה זולים כמו <Link href="/areas/haifa-general/cheap-towing-kiryat-yam-to-kiryat-motzkin" className="underline mx-1">גרירה מקריית ים לקריית מוצקין</Link>.
            <br /><br />
            <strong>הערה חשובה:</strong> שירותי הפינוי שלנו מיועדים לרכבים בלבד. איננו מספקים שירותי פינוי או גרירה לאופנועים.
          </p>

          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
          <ul className="space-y-4 text-gray-700">
            <li>✓ שירות מהיר באזור חוף קריית ים והקריות.</li>
            <li>✓ פינוי מקצועי של רכבים לפירוק ללא עלות.</li>
            <li>✓ מחירים הוגנים עבור רכבים בעלי ערך לחלפים.</li>
            <li>✓ זמינות 24/7 לכל קריאה.</li>
          </ul>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על פינוי רכבים בקריית ים</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold">כמה זמן לוקח פינוי רכב מהחוף?</h4>
                <p>אנו משתדלים להגיע לכל קריאה בקריית ים תוך זמן קצר, לרוב תוך פחות משעה בהתאם לעומס התנועה.</p>
              </div>
              <div>
                <h4 className="font-bold">האם אתם קונים רכבים ללא טסט?</h4>
                <p>כן, אנו קונים רכבים ישנים, מושבתים או כאלו ללא טסט לפירוק וברזל.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
