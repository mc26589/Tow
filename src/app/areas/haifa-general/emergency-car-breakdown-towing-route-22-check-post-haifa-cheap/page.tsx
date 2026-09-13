import { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/data';
import { WhatsAppCTA } from '@/components/whatsapp-cta';

export const metadata: Metadata = {
  title: 'גרר בצ׳ק פוסט חיפה וכביש 22 | הגעה תוך 30 דקות - 24/7',
  description: 'נתקעתם בצ׳ק פוסט או בכביש 22? גרר זמין 24/7, הגעה מהירה ומחיר הוגן לכל סוגי הרכבים. לטיפול מהיר בחילוץ וגרירה, התקשרו עכשיו!',
  alternates: {
    canonical: 'https://www.yourdomain.com/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה וחילוץ חירום חיפה והקריות',
    'description': 'שירותי גרירת חירום לרכבים תקועים בצק פוסט חיפה, כביש 22, וכל אזור חיפה והקריות.',
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
            גרירת רכב בצק פוסט חיפה וכביש 22 - מענה מהיר 24/7
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            זקוקים לגרר בצק פוסט? נתקעתם על כביש 22? הצוות שלנו זמין 24/7 לחילוץ מקצועי ומהיר לכל סוגי הרכבים במחיר משתלם.
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
          <h2 className="text-3xl font-bold mb-8 text-blue-400">שירותי גרירה מקצועיים בצפון</h2>
          <p className="text-lg mb-6">
            אנו מעניקים מעטפת שירות מלאה לאזור חיפה, החל מ-<Link href="/areas/haifa-general/fast-towing-services-road-22-krayot-bypass" className="text-blue-300 underline">גרירת רכב תקוע בכביש 22</Link> ועד ל-<Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="text-blue-300 underline">גרירת רכבים בצק פוסט</Link>. אנו מתמחים בחילוץ רכבים פרטיים ומסחריים, ומבטיחים שירות אמין במחיר הוגן.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-100 text-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות על שירותי גרר בצק פוסט</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="font-bold text-lg">מהו זמן ההגעה הממוצע לצק פוסט?</h3>
              <p>בזכות נוכחות קבועה באזור הצק פוסט וכביש 22, אנו מצליחים להגיע לרוב הקריאות תוך זמן קצר מאוד.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם גוררים רכבים כבדים?</h3>
              <p>אנו מתמחים בחילוץ רכבים פרטיים ורכבים מסחריים קלים. לבירור לגבי גרירה כבדה ניתן ליצור קשר ישירות.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">כמה עולה להזמין גרר באזור חיפה?</h3>
              <p>המחיר נקבע בהתאם למרחק הגרירה וסוג הרכב, אך אנו תמיד מקפידים על הצעת מחיר הוגנת ומשתלמת.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם השירות פעיל במהלך סוף השבוע?</h3>
              <p>כן, אנו זמינים 24/7, כולל שבתות וחגים, כדי להבטיח שלא תישאר תקוע בכבישים העמוסים כמו כביש 22.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}