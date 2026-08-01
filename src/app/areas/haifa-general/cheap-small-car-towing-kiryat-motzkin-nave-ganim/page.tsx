import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרר זול בנווה גנים, קרית מוצקין | שירות גרירה 24/7 מהיר',
  description: 'נתקעתם עם הרכב בנווה גנים? שירות גרר זול, מקצועי ואמין בקרית מוצקין. הגעה מהירה, מחיר הוגן ושירות 24/7 לכל סוגי הרכבים. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/cheap-small-car-towing-kiryat-motzkin-nave-ganim',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה נווה גנים קרית מוצקין',
    'areaServed': 'קרית מוצקין, נווה גנים',
    'priceRange': '₪',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.835',
      'longitude': '35.075',
    },
    'serviceType': 'גרירת רכבים פרטיים ומסחריים',
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">גרר רכב קטן וזול בקרית מוצקין - שכונת נווה גנים</h1>
          <p className="text-xl mb-8 max-w-2xl">
            זקוקים לשירותי גרירה דחופים בשכונת נווה גנים? צוות המומחים שלנו עומד לרשותכם 24/7. אנו מציעים פתרונות גרירה מקצועיים לרכבים פרטיים ומסחריים במחיר המשתלם ביותר באזור.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="קרית מוצקין" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לגרר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בנווה גנים?</h2>
        <ul className="space-y-4 text-lg mb-8">
          <li>✓ זמינות מלאה 24/7 לכל תרחיש, גם בסופי שבוע.</li>
          <li>✓ מחיר הוגן ושקיפות מלאה ללא הפתעות בחיוב.</li>
          <li>✓ ציוד גרירה מתקדם המותאם לרכבים קטנים ובינוניים.</li>
          <li>✓ שירות בפריסה רחבה, הכולל תמיכה גם בצירי תנועה מרכזיים כמו <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-600 underline">כביש עוקף קריות</Link>.</li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-xl mt-10">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על שירותי גרירה</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold">מהו זמן ההגעה הממוצע לשכונת נווה גנים?</h4>
              <p>אנו מקפידים על הגעה מהירה ככל האפשר, לרוב תוך דקות ספורות מרגע הקריאה, הודות למיקומנו האסטרטגי באזור הקריות.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם מספקים שירותי גרירה גם לרכבים תקועים בכבישים מהירים?</h4>
              <p>בהחלט. אנו מספקים מענה מקצועי גם למקרים דחופים של גרירה מנתיבי נסיעה עמוסים, כולל סיוע במקרים של <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600 underline">תקלות רכב בצומת צ'ק פוסט</Link>.</p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-600">
          *שימו לב: שירותינו מיועדים לרכבים פרטיים ומסחריים בלבד. אנו לא מבצעים גרירת אופנועים. לכל צורך אחר, צוות המוקד שלנו זמין לייעוץ טלפוני.
        </p>
      </section>
    </main>
  );
}