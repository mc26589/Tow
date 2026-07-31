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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בצ'ק פוסט חיפה – פינוי מהיר בשטח</h1>
          <p className="text-xl mb-8">צריכים לפנות רכב תקוע או מושבת? אנו מספקים מענה מקצועי הכולל פינוי רכבים ללא עלות ותשלום הוגן במקום.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors">
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות פינוי רכבים לפירוק בצ'ק פוסט – למה אנחנו?</h2>
        <p className="mb-4">
          אזור הצ'ק פוסט הוא עורק תחבורה מרכזי. אם נתקעת עם רכב במצב לא נסיע, אנו מציעים שירות מקיף שכולל <Link href="/areas/haifa-general/cash-for-junk-cars-check-post-haifa" className="text-blue-600 underline">קניית רכבים לפירוק בצ'ק פוסט</Link> במחיר הוגן. אנו עובדים סביב השעון כדי לספק מענה גם למי שמחפש <Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="text-blue-600 underline">גרירה זולה בצ'ק פוסט</Link> במקרה של תקלה טכנית.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>פינוי רכבים מושבתים מכל נקודה באזור הצ'ק פוסט</li>
          <li>שירות מקצועי 24/7 לכל סוגי הרכבים הפרטיים והמסחריים</li>
          <li>הצעת מחיר תחרותית ומיידית בשטח</li>
          <li>חיבור ישיר לשירותי <Link href="/areas/haifa-general/sell-damaged-car-for-parts-haifa-immediate-pickup" className="text-blue-600 underline">מכירת רכב משומש לפירוק בחיפה</Link></li>
        </ul>
        <p className="text-sm text-gray-600 italic">* אנו לא מטפלים באופנועים. עבור רכבים כבדים או דו-גלגלי, אנו מפנים למענה ייעודי.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות בנושא רכבים לפירוק בצ'ק פוסט</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">באילו מקרים מומלץ למכור רכב לפירוק בצ'ק פוסט?</h3>
              <p>כאשר עלות התיקון גבוהה מערך הרכב, או כשהרכב אינו עובר טסט. אנו מציעים פתרון מיידי לחיסכון בזמן ובבירוקרטיה.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">איך קובעים את המחיר עבור רכב לפירוק?</h3>
              <p>המחיר נקבע בהתאם למשקל הרכב, חלקי חילוף זמינים ושנתון. אנו מבטיחים את המחיר ההוגן ביותר באזור חיפה והסביבה.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם השירות שלכם פועל גם מחוץ לצ'ק פוסט?</h3>
              <p>בהחלט. אנו פעילים בכל רחבי חיפה, הקריות ואף מציעים שירותי <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal" className="text-blue-600 underline">פינוי רכבים מהיר בחיפה והקריות</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}