import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'פינוי רכבים לפירוק בקריית ים - מזומן במקום - הגעה תוך 30 דק\' | 24/7',
  description: 'נתקעתם עם רכב ישן בקריית ים? אנו מציעים פינוי רכבים לפירוק עם תשלום במזומן במקום. הגעה מהירה לכל אזור החוף והקריות. התקשרו עכשיו לקבלת הצעת מחיר!',
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
            אנו מתמחים בפינוי רכבים פרטיים ומסחריים. מחפשים פתרון מקיף? בדקו גם את השירותים שלנו של 
            <Link href="/areas/haifa-general/kaniyat-rekhavim-yeshanim-lehalafim-kiryat-yam-pinui-meyadi" className="underline mx-1">קניית רכבים לפירוק בקריית ים</Link> 
            או שירותי גרירה בנתיבי הצפון, כגון 
            <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="underline mx-1">גרירה בצ\'ק פוסט וקריות</Link>.
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
            <li>✓ שירות מהיר ומקצועי בכל אזור חוף קריית ים והטיילת.</li>
            <li>✓ פינוי רכבים לפירוק ללא עלות נוספת.</li>
            <li>✓ מחירים הוגנים ותשלום במזומן במעמד הפינוי.</li>
            <li>✓ זמינות 24 שעות ביממה, 7 ימים בשבוע.</li>
          </ul>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על פינוי רכבים בקריית ים</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold">תוך כמה זמן תגיעו לפנות את הרכב מהחוף?</h4>
                <p>אנו משתדלים להגיע לכל קריאה בקריית ים תוך זמן קצר, לרוב תוך פחות משעה בהתאם לעומס התנועה באזור.</p>
              </div>
              <div>
                <h4 className="font-bold">האם אתם קונים רכבים ללא טסט?</h4>
                <p>כן, אנו קונים רכבים ישנים, מושבתים או כאלו ללא טסט בתוקף עבור פירוק וברזל במחיר הוגן ושקוף.</p>
              </div>
              <div>
                <h4 className="font-bold">מה כולל שירות פינוי רכבים לפירוק?</h4>
                <p>השירות כולל פינוי מלא של הרכב, התחשבנות הוגנת במזומן ופינוי מהיר מהשטח מבלי להטריח את בעל הרכב.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}