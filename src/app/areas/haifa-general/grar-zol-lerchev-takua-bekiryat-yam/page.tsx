import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'גרר בקרית ים 24/7 - שירות חילוץ רכב מהיר ומחיר הוגן',
  description: 'נתקעתם עם הרכב בקרית ים? שירותי גרירה מקצועיים 24 שעות ביממה. מחירים הוגנים, זמינות מידית והגעה מהירה לכל הקריות. התקשרו עכשיו!',
  alternates: {
    canonical: '/areas/haifa-general/grar-zol-lerchev-takua-bekiryat-yam',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    name: 'גרר חיפה והקריות - שירותי גרירה וחילוץ 24/7 בקרית ים',
    description: 'שירותי גרירה וחילוץ מהירים, מקצועיים ובמחירים הוגנים לרכבים תקועים בקרית ים, חיפה והקריות, 24 שעות ביממה.',
    url: 'https://yourdomain.com/areas/haifa-general/grar-zol-lerchev-takua-bekiryat-yam',
    telephone: `+${BUSINESS_INFO.phone}`,
    priceRange: 'החל מ-250 ש"ח',
    areaServed: [
      { '@type': 'Place', name: 'קרית ים' },
      { '@type': 'Place', name: 'חיפה והקריות' }
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    },
    serviceType: ['גרירת רכב', 'חילוץ רכב', 'שירותי דרך']
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">גרר זול לרכב תקוע בקרית ים? אנחנו כאן לעזור - 24/7!</h1>
          <p className="text-lg md:text-xl mb-8">
            רכבכם נתקע בקרית ים? אנו מספקים שירותי גרירה וחילוץ מקצועיים לכל סוגי הרכבים בקרית ים והקריות.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">גרר בקרית ים - פתרון מהיר לרכב תקוע</h2>
          <p className="text-lg mb-6 leading-relaxed">
            כאשר הרכב נתקע, בין אם זה בדרך המהירה או ברחובות העיר, אנו מספקים מענה מקצועי. אנו פעילים גם באזורים סמוכים כמו ב
            <Link href="/areas/haifa-general/fast-towing-services-road-22-krayot-bypass" className="text-blue-400 underline">כביש 22 עוקף קריות</Link>. אנו מתחייבים להגיע במהירות האפשרית ולספק שירות במחיר הוגן.
          </p>
          <h3 className="text-xl md:text-3xl font-bold mt-10 mb-6 text-center">למה לבחור בשירותי הגרירה שלנו?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg"><h4>זמינות 24/7</h4><p>פעילים בכל שעות היממה, גם בסופי שבוע וחגים.</p></div>
            <div className="bg-gray-800 p-6 rounded-lg"><h4>מחירים הוגנים</h4><p>שירות גרירה משתלם ללא הפתעות בדרך.</p></div>
            <div className="bg-gray-800 p-6 rounded-lg"><h4>ציוד חדיש</h4><p>משאיות גרירה מתקדמות לטיפול בכל סוגי הרכבים.</p></div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">שאלות נפוצות</h2>
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">האם אתם גוררים רכבים מהאזור התעשייתי?</h3>
              <p>כן, אנו מספקים שירותי <Link href="/areas/haifa-general/heavy-duty-truck-towing-kiryat-haim-industrial-zone" className="text-blue-400 underline">גרירת רכבים ומשאיות מאזור התעשייה</Link> וסביבת הקריות.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">האם אתם גוררים אופנועים?</h3>
              <p>לא, אנו מתמחים ברכבים פרטיים ומסחריים בלבד.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}