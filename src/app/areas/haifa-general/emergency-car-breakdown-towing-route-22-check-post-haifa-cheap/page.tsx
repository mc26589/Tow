import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/data';
import { WhatsAppCTA } from '@/components/whatsapp-cta';

export const metadata: Metadata = {
  title: 'גרר בצ׳ק פוסט חיפה (כביש 22) - הגעה מהירה 24/7 | מחיר הוגן',
  description: 'נתקעתם בצ׳ק פוסט או בכביש 22? שירותי גרירה מקצועיים ומהירים 24/7 לכל סוגי הרכבים. מחירים זולים ושירות אמין. לחצו להתקשרות וסיוע מיידי!',
  alternates: {
    canonical: 'https://www.yourdomain.com/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה וחילוץ חירום חיפה והקריות',
    'description': 'שירותי גרירת חירום לרכבים תקועים בצ\'ק פוסט חיפה, כביש 22, וכל אזור חיפה והקריות.',
    'url': 'https://www.yourdomain.com/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap',
    'telephone': `+${BUSINESS_INFO.phone}`,
    'priceRange': '₪',
    'areaServed': [{ '@type': 'Place', 'name': 'חיפה' }, { '@type': 'Place', 'name': 'הקריות' }],
    'image': 'https://www.yourdomain.com/images/towing-truck-haifa.webp'
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            גרירת רכב בצ'ק פוסט חיפה וכביש 22 - מענה מהיר 24/7
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            נתקעתם עם הרכב בצ'ק פוסט או בכביש 22? אנו כאן לחלץ אתכם במהירות ובמחיר הוגן. התקשרו עכשיו!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              התקשרו עכשיו להזמנת גרר
            </a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">שירותי גרירה באזור חיפה והקריות</h2>
          <p className="text-lg mb-6">לצד שירותי החירום בצ'ק פוסט, אנו מציעים מגוון פתרונות נוספים כגון <Link href="/areas/haifa-general/towing-service-road-22-krayot-bypass" className="text-blue-300 underline">שירותי גרירה בכביש 22 עוקף קריות</Link> ושירותים מיוחדים של <Link href="/areas/haifa-general/cheap-towing-check-post-haifa-fast-service" className="text-blue-300 underline">גרירה מהירה בצ'ק פוסט</Link>.</p>
        </div>
      </section>

      <section className="py-12 bg-gray-100 text-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="font-bold text-lg">כמה זמן לוקח לגרר להגיע לצ'ק פוסט?</h3>
              <p>בדרך כלל אנו מגיעים לאזור הצ'ק פוסט וכביש 22 תוך זמן קצר, בהתאם לעומסי התנועה באזור.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם גוררים גם אופנועים?</h3>
              <p>לא, אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4 בלבד. איננו מספקים שירותי גרירה לאופנועים.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם השירות פעיל בשבת?</h3>
              <p>כן, אנו זמינים 24/7, כולל שבתות וחגים, לכל קריאת חירום באזור חיפה.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}