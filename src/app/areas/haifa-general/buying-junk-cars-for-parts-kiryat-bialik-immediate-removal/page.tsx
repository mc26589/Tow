import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'קניית רכבים לפירוק בקרית ביאליק | מזומן ופינוי מהיר 24/7',
  description: 'מעוניינים למכור רכב לפירוק בקרית ביאליק? קונים את כל סוגי הרכבים במזומן במקום. פינוי מהיר, מחיר הוגן ושירות מקצועי. התקשרו עכשיו לפינוי מיידי מהשטח!',
  alternates: {
    canonical: '/areas/haifa-general/buying-junk-cars-for-parts-kiryat-bialik-immediate-removal',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    name: 'קניית רכבים לפירוק בקרית ביאליק',
    areaServed: 'Kiryat Bialik',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '32.8250',
      longitude: '35.0750',
    },
    priceRange: '$-$$',
    serviceType: 'Junk Car Removal and Auto Recycling',
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קניית רכבים לפירוק בקרית ביאליק – פינוי מזומן מהשטח</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם רכב ישן, מושבת או ללא טסט? אנו מתמחים בקניית רכבים לפירוק בקרית ביאליק עם שירות פינוי מהיר ללא עיכובים. אנו קונים רכבים פרטיים ומסחריים במחירים הוגנים ובתשלום במזומן.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="קרית ביאליק" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לנציג
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שירות פינוי רכבים מהיר לתושבי הקריות</h2>
          <p className="mb-4">
            אנו מציעים פתרון מלא לפינוי רכבים שאינם בשימוש. השירות כולל הגעה לכל שכונה בקרית ביאליק. אם הרכב זקוק לגרירה מהירה לנקודת הפירוק, תוכלו להסתייע בשירותי <Link href="/areas/haifa-general/towing-for-scrap-kiryat-bialik" className="text-blue-600 underline">towing for scrap kiryat bialik</Link> המקצועיים שלנו. למידע נוסף על שירותים רחבים באזור, בקרו ב<Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-towing-included" className="text-blue-600 underline">buy cars for scrap haifa krayot towing included</Link>.
          </p>
          <div className="bg-red-50 border-r-4 border-red-500 p-4 mt-8">
            <p className="font-bold">חשוב לדעת:</p>
            <p>השירות מתמקד ברכבים בלבד (פרטיים ומסחריים). לצורך גרירה שוטפת באזור כביש 22, אנו ממליצים על <Link href="/areas/haifa-general/towing-services-road-22-krayot-bypass" className="text-blue-600 underline">towing services road 22 krayot bypass</Link>.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">שאלות נפוצות</h3>
          <div className="space-y-6">
            <div>
              <p className="font-bold text-lg">אילו רכבים אתם קונים לפירוק?</p>
              <p>אנו קונים רכבים מכל הסוגים: רכבים מושבתים, רכבים שעברו תאונה, רכבים עם מנוע תפוס או רכבים ללא טסט. אנו מגיעים עם גרר לכל נקודה בקרית ביאליק.</p>
            </div>
            <div>
              <p className="font-bold text-lg">כיצד מתבצע התשלום?</p>
              <p>התשלום מתבצע במזומן במקום, מיד לאחר הערכת שווי הרכב ובדיקת הניירת הנדרשת לפינוי רכב לפירוק.</p>
            </div>
            <div>
              <p className="font-bold text-lg">האם אתם נותנים שירות גם במקרים דחופים?</p>
              <p>בהחלט. אנו ערוכים למתן פתרונות מהירים. במקרה של תקלה דחופה באזור הצ'ק פוסט, תוכלו להיעזר ב<Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="text-blue-600 underline">affordable towing check post haifa</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
