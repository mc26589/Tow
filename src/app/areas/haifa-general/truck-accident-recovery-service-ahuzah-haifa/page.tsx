import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'חילוץ תאונות משאיות באחוזה, חיפה | הגעה מהירה 24/7 | מחיר הוגן',
  description: 'נתקעתם עם המשאית באחוזה? שירות חילוץ תאונות מקצועי ומהיר 24/7 באזור חיפה. גרירת משאיות ורכבים מסחריים במחיר הוגן. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/truck-accident-recovery-service-ahuzah-haifa',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה וחילוץ משאיות 24/7 באחוזה חיפה',
    'description': 'שירותי גרירה וחילוץ מקצועיים למשאיות ורכבים מסחריים באזור אחוזה, חיפה, זמינות 24 שעות ביממה.',
    'url': 'https://yourdomain.com/areas/haifa-general/truck-accident-recovery-service-ahuzah-haifa',
    'telephone': `+${BUSINESS_INFO.phone}`,
    'priceRange': '$$',
    'areaServed': [{ '@type': 'Place', 'name': 'אחוזה, חיפה' }, { '@type': 'Place', 'name': 'חיפה' }],
    'serviceType': ['חילוץ משאיות', 'גרירת רכבים מסחריים', 'חילוץ תאונות']
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            חילוץ תאונות משאיות באחוזה חיפה – זמינות 24/7
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            מענה מיידי ומקצועי לגרירה וחילוץ משאיות ורכבים מסחריים באזור אחוזה והסביבה.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="אחוזה, חיפה" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-gray-900 hover:bg-gray-200 transition-colors py-3 px-8 rounded-full shadow-lg text-lg">
              התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">זקוקים לחילוץ משאית דחוף באחוזה?</h2>
            <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
              אנו מבינים את המשמעות של משאית תקועה ללוח הזמנים שלכם. אנו מספקים מענה מהיר באזור אחוזה וסביבותיה. אם אתם זקוקים גם ל-<Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-300 underline">שירותי רכב חשמלי באחוזה</Link> או נתקעתם בדרכים ראשיות בדרך ל-<Link href="/areas/haifa-general/towing-services-road-22-krayot" className="text-blue-300 underline">כביש 22</Link>, אנו ערוכים לסייע לכם במהירות ובמקצועיות.
            </p>
          </section>

          <section className="mb-12 bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-300">שאלות נפוצות (FAQ)</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl">תוך כמה זמן תגיעו לחילוץ באחוזה?</h3>
                <p>אנו שואפים לזמני הגעה מהירים מאוד לאזור אחוזה והסביבה. צרו קשר לקבלת הערכת זמן מדויקת לפי מיקומכם הנוכחי.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl">האם אתם מספקים חילוץ שטח למשאיות?</h3>
                <p>כן, אנו מתמחים בחילוצי שטח ובוץ. למידע נוסף ראו <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-300 underline">חילוץ רכב מבוץ באזור הכרמל</Link>.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl">האם אתם גוררים אופנועים?</h3>
                <p>השירות שלנו מתמקד במשאיות, רכבים מסחריים ורכבים פרטיים בלבד, איננו מבצעים גרירת אופנועים.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}