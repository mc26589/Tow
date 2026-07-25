import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'קונה רכבים לפירוק בצק פוסט חיפה | מחיר הוגן ושירות מיידי 24/7',
  description: 'מחפשים קונה רכבים לפירוק בצק פוסט חיפה? פינוי רכבים מושבתים ללא עלות, הצעת מחיר הוגנת במקום ושירות מקצועי 24/7. התקשרו עכשיו לפינוי מהיר!',
  alternates: {
    canonical: '/areas/haifa-general/buying-cars-for-scrap-check-post-haifa',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה ופינוי רכבים חיפה והקריות',
    'areaServed': 'Haifa and Krayot',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.7940',
      'longitude': '35.0240',
    },
    'priceRange': '$-$$',
    'serviceType': 'Car Scrap Removal',
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק במצב סגור צ'ק פוסט חיפה</h1>
          <p className="text-xl mb-8">פינוי רכבים מושבתים, לאחר תאונה או ללא טסט – שירות מהיר, אמין ומקצועי באזור חיפה והקריות.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors">
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי רכב לפירוק בצ'ק פוסט?</h2>
        <p className="mb-4">
          אנו מבינים את הצורך בפינוי מהיר של רכבים במצב סגור מאזור צ'ק פוסט. צוות המומחים שלנו ערוך להגיע לכל נקודה, לבצע את הפינוי בצורה בטוחה ולהעניק לכם הצעת מחיר הוגנת במקום. 
          אנו מספקים פתרונות נוספים באזור כגון <Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-blue-600 underline">גרירה וחילוץ 24/7 בצומת צ'ק פוסט</Link> לכל מי שזקוק לסיוע טכני מיידי.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>פינוי רכבים ללא עלות</li>
          <li>שירות מקצועי 24/7 באזור חיפה</li>
          <li>טיפול בכל סוגי הרכבים הפרטיים והמסחריים</li>
          <li>הצעת מחיר הוגנת ומיידית בשטח</li>
        </ul>
        <p className="text-sm text-gray-600 italic">* שים לב: אנו לא מטפלים באופנועים או דו-גלגלי מכל סוג שהוא. לבעלי דו-גלגלי, מומלץ לבדוק שירותים ייעודיים כמו <Link href="/areas/haifa-general/heavy-motorcycle-towing-check-post-highway-22" className="text-blue-600 underline">גרירת אופנועים בצ'ק פוסט</Link>.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על פינוי רכבים לפירוק</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg">האם אתם קונים כל סוג רכב לפירוק?</h3>
              <p>אנחנו קונים מגוון רחב של רכבים פרטיים ומסחריים מושבתים. לפרטים על דגמים ספציפיים, ניתן ליצור קשר ישירות.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">מהו טווח המחירים לרכב לפירוק?</h3>
              <p>המחיר נקבע בהתאם לדגם הרכב, שנת הייצור ומצבו המכני. אנו מתחייבים להצעת מחיר הוגנת בהתאם למחירי השוק.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם השירות כולל פינוי מהשטח?</h3>
              <p>בהחלט. אנו מבצעים פינוי של הרכב מהמיקום שלכם, כולל חילוץ מרחובות צדדיים או אזורי תעשייה בצ'ק פוסט.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}