import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרר בכביש 22 עוקף קריות | חילוץ רכבים 24/7 - הגעה מהירה',
  description: 'נתקעתם בכביש 22? גרר מקצועי זמין 24/7 באזור עוקף קריות. שירות אמין, מחיר הוגן והגעה מהירה לכל סוגי הרכבים. התקשרו עכשיו לחילוץ בטוח!',
  alternates: {
    canonical: '/areas/haifa-general/towing-road-22-krayot-bypass',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה בכביש 22 - עוקף קריות',
    'description': 'שירותי גרירה וחילוץ רכבים מקצועיים בכביש 22 (עוקף קריות) והסביבה.',
    'areaServed': 'Haifa and Krayot',
    'priceRange': 'הוגן ומשתלם',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.8156',
      'longitude': '35.0653',
    },
    'serviceType': 'Emergency Roadside Assistance and Towing',
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכבים תקועים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם בכביש 22? אנחנו בדרך אליכם עם שירות גרירה מהיר ומקצועי 24/7.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg">
              התקשרו עכשיו לחילוץ
            </a>
            <WhatsAppCTA cityName="כביש 22 עוקף קריות" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים בציר עוקף קריות</h2>
        <p className="mb-4">אנו מספקים מענה מיידי לכל סוגי הרכבים התקועים בכביש 22. במידה ואתם זקוקים לחילוץ מאזורים סמוכים, אנו ממליצים גם על שירותי <Link href="/areas/haifa-general/cheap-towing-check-post-junction" className="text-blue-600 underline">גרר זול באזור צומת צ'ק פוסט</Link>.</p>
        <p className="mb-4"><strong>שימו לב:</strong> אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4. איננו מספקים שירותי גרירה לאופנועים.</p>
        <p>המחירים שלנו הוגנים ושקופים. צרו קשר לקבלת הצעת מחיר בטלפון בכל שעה.</p>
      </section>

      <section className="py-12 bg-gray-50 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על גרירה בכביש 22</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">תוך כמה זמן הגרר מגיע?</h3>
            <p>אנו משתדלים להגיע לכל נקודה בכביש 22 תוך זמן קצר, בהתאם לעומסי התנועה.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם גוררים רכבים כבדים?</h3>
            <p>כן, אנו מספקים פתרונות גרירה למגוון רחב של רכבים פרטיים ומסחריים.</p>
          </div>
        </div>
      </section>
    </main>
  );
}