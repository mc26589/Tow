import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoTowing",
  "name": "גרר מפרץ אקספרס",
  "description": "שירותי גרירת רכבי ספורט ורכבים נמוכים מקצועיים באחוזה, חיפה. הגעה מהירה, מחיר הוגן ושמירה על הרכב.",
  "url": "https://www.towingrescuehaifa.co.il/areas/haifa-general/affordable-low-clearance-sports-car-towing-ahuzah-haifa",
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
  title: "גרירת רכב ספורט נמוך באחוזה חיפה | הגעה מהירה 24/7",
  description: "נתקעתם באחוזה עם רכב נמוך? גרר מפרץ אקספרס מספקים שירותי גרירה מקצועיים לרכבי ספורט בזהירות מרבית. מחיר הוגן והגעה מהירה. התקשרו עכשיו!",
  alternates: {
    canonical: "https://www.towingrescuehaifa.co.il/areas/haifa-general/affordable-low-clearance-sports-car-towing-ahuzah-haifa",
  }
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-right mb-6">גרירת רכב ספורט ורכבים נמוכים באחוזה חיפה</h1>
        
        <section className="gradient-trust text-white py-14 rounded-2xl mb-8">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold mb-4">שירות גרירה מומחה לרכבים נמוכים</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">צריכים לגרור רכב ספורט באחוזה? אנחנו מצוידים בציוד המתאים לרכבים עם מרווח גחון נמוך כדי להבטיח אפס נזק.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <WhatsAppCTA cityName="אחוזה חיפה" />
               <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white/15 px-7 py-3.5 rounded-full font-semibold border border-white/25">📞 התקשרו: {BUSINESS_INFO.phone}</a>
            </div>
          </div>
        </section>

        <section className="container mx-auto p-4">
          <p className="text-lg mb-4 text-gray-800">
            גרירת רכבי ספורט ויוקרה דורשת מיומנות מיוחדת וציוד ייעודי. בגרר מפרץ אקספרס, אנחנו מבינים את הרגישות של רכבים נמוכים. אנו מספקים מענה מקצועי לכל האזור, ומעניקים שירותים משלימים כמו <Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="text-blue-600 underline">גרירה בצ'ק פוסט</Link> או <Link href="/areas/haifa-general/emergency-car-rescue-mud-carmel-forest" className="text-blue-600 underline">חילוץ רכבים מהשטח בכרמל</Link>.
          </p>

          <div className="bg-gray-50 border p-6 rounded-xl mb-10">
            <h2 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירת רכבים באחוזה</h2>
            <div className="space-y-4">
              <div><h3 className="font-bold">האם אתם מגררים רכבים נמוכים ללא נזק לפגוש?</h3><p>כן, אנו משתמשים במתקני הרמה מתקדמים המותאמים לרכבי ספורט עם מרווח גחון מינימלי.</p></div>
              <div><h3 className="font-bold">מהו אזור הפעילות שלכם בחיפה?</h3><p>אנו פועלים בכל העיר ובסביבתה, כולל שירותים מהירים כמו <Link href="/areas/haifa-general/fast-towing-road-22-krayot" className="text-blue-600 underline">גרירה מהירה בכביש 22</Link>.</p></div>
              <div><h3 className="font-bold">האם אתם מחלצים רכבים מהשטח?</h3><p>אנו מומחים בחילוצי 4x4, ניתן לראות מידע נוסף על <Link href="/areas/haifa-general/4x4-mud-rescue-towing-carmel-forest-trails-denia-haifa" className="text-blue-600 underline">חילוץ בבוץ ביערות הכרמל</Link>.</p></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}