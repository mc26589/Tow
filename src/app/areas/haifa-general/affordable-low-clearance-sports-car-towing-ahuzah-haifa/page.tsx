import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoTowing",
  "name": "גרר מפרץ אקספרס",
  "description": "שירותי גרירת רכבי ספורט ורכבים נמוכים מקצועיים באחוזה, חיפה. הגעה מהירה, מחיר הוגן ושמירה על הרכב.",
  "url": "https://www.towingrescuehaifa.co.il/affordable-low-clearance-sports-car-towing-ahuzah-haifa",
  "telephone": `tel:${BUSINESS_INFO.phone}`,
  "priceRange": "$",
  "areaServed": [{ "@type": "Place", "name": "Ahuzah, Haifa" }, { "@type": "Place", "name": "Haifa" }],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.7940,
    "longitude": 34.9896
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "serviceType": ["גרירת רכב ספורט", "גרירת רכב נמוך", "חילוץ רכבים חיפה"]
};

export const metadata: Metadata = {
  title: 'גרירת רכב ספורט נמוך באחוזה חיפה - מחיר הוגן 24/7',
  description: 'נתקעתם באחוזה עם רכב נמוך? גרר מפרץ אקספרס מציעים גרירת רכבי ספורט בזהירות מרבית ובמחיר הוגן. הגעה מהירה! התקשרו עכשיו.',
  alternates: {
    canonical: 'https://www.towingrescuehaifa.co.il/affordable-low-clearance-sports-car-towing-ahuzah-haifa',
  }
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-right mb-6">גרירת רכב ספורט נמוך באחוזה חיפה</h1>
        
        <section className="gradient-trust text-white py-14 rounded-2xl mb-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-extrabold mb-4">שירות גרירה מומחה לרכבים נמוכים</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">צריכים לגרור רכב ספורט באחוזה? אנחנו מצוידים בציוד המתאים לרכבים עם מרווח גחון נמוך כדי להבטיח אפס נזק.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <WhatsAppCTA cityName="אחוזה חיפה" />
               <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white/15 px-7 py-3.5 rounded-full font-semibold border border-white/25">📞 התקשרו: {BUSINESS_INFO.phone}</a>
            </div>
          </div>
        </section>

        <section className="container mx-auto p-4">
          <p className="text-lg mb-4 text-gray-800">
            גרירת רכבי ספורט ויוקרה דורשת מיומנות מיוחדת וציוד ייעודי. בגרר מפרץ אקספרס, אנחנו מבינים את הרגישות של רכבים נמוכים. אנו מספקים מענה מקצועי לכל האזור, ומעניקים שירותים משלימים כמו <Link href="/areas/haifa-general/cheap-car-towing-service-neve-shaanan-haifa" className="text-blue-600 underline">גרירה בנווה שאנן</Link> או חילוץ רכבים באזור הכרמל.
          </p>

          <div className="bg-gray-50 border p-6 rounded-xl mb-10">
            <h2 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירת רכבים באחוזה</h2>
            <div className="space-y-4">
              <div><h3 className="font-bold">האם אתם מגררים רכבים נמוכים ללא נזק לפגוש?</h3><p>כן, אנו משתמשים במתקני הרמה מיוחדים המותאמים לרכבי ספורט ורכבים בעלי מרווח גחון נמוך.</p></div>
              <div><h3 className="font-bold">מהו אזור הפעילות שלכם?</h3><p>אנחנו פרוסים בכל חיפה והקריות, כולל שירותי גרירה מקצועיים כמו <Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="text-blue-600 underline">גרירה בצ'ק פוסט</Link>.</p></div>
              <div><h3 className="font-bold">האם אתם מספקים שירותי חילוץ מהשטח?</h3><p>כן, אנו מומחים בחילוצי 4x4, ראו מידע נוסף על <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="text-blue-600 underline">חילוץ 4x4 ביערות הכרמל</Link>.</p></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}