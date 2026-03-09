import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata = {
  title: "גרר זול לרכב תקוע בקרית ים? שירות 24/7 מהיר ואמין!",
  description: "רכב תקוע בקרית ים? אנו מספקים שירותי גרירה וחילוץ מהירים, מקצועיים ובמחירים הוגנים 24/7 לכל סוגי הרכבים (למעט אופנועים) באזור קרית ים והקריות.",
  alternates: {
    canonical: "/grar-zol-lerchev-takua-bekiryat-yam",
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    name: 'גרר חיפה והקריות - שירותי גרירה וחילוץ 24/7 בקרית ים',
    description: 'שירותי גרירה וחילוץ מהירים, מקצועיים ובמחירים הוגנים לרכבים תקועים בקרית ים, חיפה והקריות, 24 שעות ביממה. מתמחים ברכבים פרטיים, מסחריים ו-4X4.',
    url: 'https://yourdomain.com/grar-zol-lerchev-takua-bekiryat-yam',
    telephone: `+${BUSINESS_INFO.phone}`,
    priceRange: '$',
    areaServed: [
      {
        '@type': 'Place',
        name: 'קרית ים',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '32.8200',
          longitude: '35.0600',
        },
      },
      {
        '@type': 'Place',
        name: 'חיפה והקריות',
      },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    serviceType: ['גרירת רכב', 'חילוץ רכב', 'שירותי דרך'],
    image: 'https://yourdomain.com/images/tow-truck-kiryat-yam.jpg',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">גרר זול לרכב תקוע בקרית ים? אנחנו כאן לעזור – 24/7!</h1>
          <p className="text-lg md:text-xl mb-8">
            רכבכם נתקע בקרית ים? זקוקים לשירותי גרירה מהירים, אמינים ובמחיר הוגן? אנו מספקים שירותי גרירה וחילוץ מקצועיים לכל סוגי הרכבים (למעט אופנועים) בכל שעות היממה, בקרית ים והקריות.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out">
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">גרר בקרית ים – פתרון מהיר לרכב תקוע</h2>
          <p className="text-lg mb-6 leading-relaxed">
            כאשר הרכב נתקע בקרית ים, בין אם בגלל תקלה מכנית, תאונה או כל סיבה אחרת, הצורך בגרר זמין, מהיר ואמין הוא קריטי. אנו מבינים את הלחץ והתסכול, ולכן אנו מתחייבים להגיע אליכם במהירות האפשרית ולספק שירות גרירה מקצועי ובמחיר הוגן, 24 שעות ביממה, 7 ימים בשבוע.
          </p>
          <p className="text-lg mb-6 leading-relaxed font-semibold">
            אנו מתמחים בגרירת רכבים פרטיים, רכבים מסחריים ורכבי שטח 4X4. <span className="text-red-400 font-bold">חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.</span>
          </p>

          <h3 className="text-xl md:text-3xl font-bold mt-10 mb-6 text-center">למה לבחור בשירותי הגרירה שלנו בקרית ים?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-3 text-blue-400">זמינות 24/7</h4>
              <p>הרכב נתקע באמצע הלילה או בסוף השבוע? אנחנו זמינים עבורכם בכל שעה ובכל יום, כולל חגים.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-3 text-blue-400">מחירים הוגנים</h4>
              <p>אנו מציעים שירותי גרירה במחירים תחרותיים והוגנים, ללא הפתעות. קבלו הצעת מחיר בטלפון.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-3 text-blue-400">מענה מהיר</h4>
              <p>צוות הגרר שלנו יגיע אליכם במהירות האפשרית, כדי שלא תצטרכו להמתין זמן רב.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-3 text-blue-400">מקצועיות ואמינות</h4>
              <p>צוות מנוסה ומקצועי שיטפל ברכבכם בזהירות וביעילות מרבית.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-3 text-blue-400">ציוד חדיש</h4>
              <p>אנו משתמשים בציוד גרירה מתקדם ובטיחותי, המתאים למגוון רחב של רכבים.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-3 text-blue-400">שירות אישי</h4>
              <p>אנו מעניקים יחס אישי ואדיב לכל לקוח, ומלווים אתכם עד לפתרון מלא.</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">נתקעתם בקרית ים? אל תחכו!</h3>
            <p className="text-lg mb-8">
              צרו קשר עכשיו וקבלו שירות גרירה מהיר ומקצועי.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <WhatsAppCTA cityName="Haifa and Krayot" />
              <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out">
                התקשרו עכשיו לקבלת הצעת מחיר
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">אזורי שירות עיקריים</h2>
          <p className="text-lg text-center mb-8">אנו מספקים שירותי גרירה וחילוץ בכל אזור חיפה והקריות, כולל:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center text-lg">
            <li className="bg-gray-700 p-3 rounded-md">קרית ים</li>
            <li className="bg-gray-700 p-3 rounded-md">קרית מוצקין</li>
            <li className="bg-gray-700 p-3 rounded-md">קרית ביאליק</li>
            <li className="bg-gray-700 p-3 rounded-md">קרית חיים</li>
            <li className="bg-gray-700 p-3 rounded-md">חיפה</li>
            <li className="bg-gray-700 p-3 rounded-md">עכו</li>
            <li className="bg-gray-700 p-3 rounded-md">נהריה</li>
            <li className="bg-gray-700 p-3 rounded-md">ועוד ישובים בסביבה...</li>
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">כמה זמן לוקח לגרר להגיע לקרית ים?</h3>
              <p>אנו מתחייבים למענה מהיר ככל האפשר. זמן ההגעה המדויק תלוי במיקומכם המדויק ובזמינות הגררים באותו רגע, אך אנו שואפים להגיע במהירות שיא.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">האם אתם עובדים 24 שעות ביממה?</h3>
              <p>כן, אנו מספקים שירותי גרירה וחילוץ 24 שעות ביממה, 7 ימים בשבוע, כולל סופי שבוע וחגים.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">האם אתם גוררים אופנועים?</h3>
              <p className="font-bold text-red-400">לא, איננו מספקים שירותי גרירה לאופנועים. אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח 4X4.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">איך מקבלים הצעת מחיר?</h3>
              <p>פשוט התקשרו אלינו או שלחו הודעת וואטסאפ עם פרטי המקרה (מיקום, סוג רכב, תיאור התקלה) ונקבל לכם הצעת מחיר הוגנת בטלפון.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
