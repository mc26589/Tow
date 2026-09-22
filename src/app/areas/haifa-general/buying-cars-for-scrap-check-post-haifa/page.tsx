import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'קונה רכבים לפירוק בצק פוסט חיפה | מחיר הוגן ושירות מהיר',
  description: 'מחפשים קונה רכבים לפירוק בצק פוסט חיפה? פינוי רכבים מושבתים מהיר, הצעת מחיר הוגנת במקום ושירות 24/7. הגעה מהירה לכל אזור הצ\'ק פוסט. התקשרו עכשיו!',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בצ\'ק פוסט חיפה – פינוי מהיר בשטח</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב מושבת בצ\'ק פוסט? אנו מציעים שירות מקצועי, פינוי ללא עלות ותשלום הוגן במזומן במקום.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors">
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות פינוי רכבים לפירוק בצ\'ק פוסט – למה לבחור בנו?</h2>
        <p className="mb-4">
          אזור הצ\'ק פוסט מהווה צומת מרכזית בחיפה. אם נתקעתם עם רכב באזור, אנו מציעים מענה מיידי הכולל <Link href="/areas/haifa-general/buying-cars-for-scrap-haifa-krayot" className="text-blue-600 underline">קניית רכבים לפירוק בחיפה והקריות</Link> בתנאים הכי משתלמים. עבור מי שזקוק לסיוע טכני בכביש המהיר, אנו מפנים גם לשירותי <Link href="/areas/haifa-general/towing-services-road-22-krayot-bypass" className="text-blue-600 underline">גרירה בכביש 22 עוקף קריות</Link>.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>פינוי רכבים לפירוק ללא עלות מכל נקודה בצ\'ק פוסט</li>
          <li>שירות 24/7 לכל סוגי הרכבים (פרטי, מסחרי)</li>
          <li>הערכת מחיר הוגנת במקום</li>
          <li>פתרון מקיף למקרים של תאונות דרכים עם <Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="text-blue-600 underline">גרירה לאחר תאונה בכביש 22</Link></li>
        </ul>
        <p className="text-sm text-gray-600 italic">* השירות מיועד לרכבים בלבד, איננו מטפלים באופנועים.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על פינוי רכבים בצ\'ק פוסט</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">תוך כמה זמן תגיעו לפנות את הרכב?</h3>
              <p>אנו פרוסים באזור חיפה והקריות ומגיעים בדרך כלל תוך זמן קצר, במיוחד אם הרכב תקוע בצירי תנועה מרכזיים כמו כביש 22.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">איך יודעים מה המחיר עבור רכב לפירוק?</h3>
              <p>המחיר נקבע לפי משקל הרכב, חלקי חילוף תקינים ודגם הרכב. אנו מקפידים על הצעת מחיר הוגנת ומיידית.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם מספקים גם שירותי גרירה רגילים?</h3>
              <p>בהחלט, אנו מציעים מגוון פתרונות, החל מפינוי רכבים לפירוק ועד שירותי <Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="text-blue-600 underline">גרירה בטוחה וזולה באזור כביש 22</Link> למוסך או לבית.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}