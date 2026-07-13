import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרר זול בצ\'ק פוסט חיפה | שירות גרירה מקצועי 24/7 | מחיר הוגן',
  description: 'נתקעתם עם הרכב בצ\'ק פוסט? גרר זול בצ\'ק פוסט חיפה זמין עבורכם 24/7. שירות מהיר, מקצועי ובמחיר הוגן לרכבים פרטיים ומסחריים. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/cheap-towing-check-post-haifa',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה חיפה והקריות',
    'areaServed': { '@type': 'City', 'name': 'Haifa' },
    'priceRange': '₪',
    'openingHoursSpecification': { '@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], 'opens': '00:00', 'closes': '23:59' },
    'geo': { '@type': 'GeoCoordinates', 'latitude': '32.7940', 'longitude': '35.0230' },
    'serviceType': 'Towing Service'
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול בצ'ק פוסט חיפה - שירות מקצועי ומיידי</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב באזור צ'ק פוסט? אל תתנו לזה לשבש לכם את היום. אנו מציעים שירותי גרירה מהירים, אמינים ובמחיר הוגן. 
            אנו מתמחים בגרירת רכבים פרטיים, רכבים מסחריים ורכבי 4x4. 
            חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה בצ'ק פוסט?</h2>
          <ul className="grid md:grid-cols-3 gap-8">
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">זמינות 24/7</h3>
              <p>אנחנו כאן בשבילכם בכל שעה, גם בלילה ובסופי שבוע, באזור הצ'ק פוסט והסביבה.</p>
            </li>
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">מחיר הוגן</h3>
              <p>שירות מקצועי במחיר זול ומשתלם. אנו דוגלים בשקיפות מלאה ללא הפתעות.</p>
            </li>
            <li className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">מקצועיות וניסיון</h3>
              <p>צוות מיומן המכיר היטב את צירי התנועה באזור חיפה והקריות ומגיע אליכם במהירות.</p>
            </li>
          </ul>
          
          <div className="mt-12 p-8 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">שירותי גרירה וסיוע באזור חיפה</h2>
            <p className="mb-4">אנו מציעים מעטפת שירותים רחבה באזור הצפון. מחפשים שירות נוסף? ניתן לבדוק גם <Link href="/areas/haifa-general/cheap-towing-check-post-kiryat-ata" className="text-blue-600 underline">גרר זול באזור קרית אתא</Link> או עזרה במצבי קיצון כמו <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-haifa" className="text-blue-600 underline">חילוץ שטח בחיפה</Link>.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירת רכבים בצ'ק פוסט</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">תוך כמה זמן הגרר מגיע לצ'ק פוסט?</h3>
              <p>הצוותים שלנו פזורים באזור חיפה והקריות, לרוב אנו מגיעים תוך זמן קצר מאוד מרגע הקריאה.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם השירות כולל גרירה לקרית אתא?</h3>
              <p>כן, אנו מספקים שירותי גרירה גם ליישובים סמוכים. ניתן לראות מידע נוסף על <Link href="/areas/haifa-general/cheap-towing-check-post-kiryat-ata" className="text-blue-600 underline">שירותי גרר לקרית אתא</Link> באתרנו.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם קונים רכבים לפירוק?</h3>
              <p>בהחלט. במידה והרכב שלכם ישן או לא משתלם לתיקון, אנו עוסקים גם ב<Link href="/areas/haifa-general/kone-rehavim-lepiruk-haifa-krayot" className="text-blue-600 underline">קניית רכבים לפירוק בחיפה והקריות</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}