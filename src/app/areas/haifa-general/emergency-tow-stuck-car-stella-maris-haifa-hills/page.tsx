import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata = {
  title: "גרר חירום רכב תקוע בעליות של סטלה מאריס חיפה – חילוץ מהיר 24/7",
  description: "נתקעתם עם הרכב בעליות התלולות של סטלה מאריס בחיפה? אנו מספקים שירותי גרר וחילוץ מהירים לרכבים פרטיים, מסחריים ו-4X4, 24/7. מחירים הוגנים ומענה מיידי.",
  alternates: {
    canonical: "/emergency-tow-stuck-car-stella-maris-haifa-hills",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרר חירום חיפה והקריות",
    "description": "שירותי גרר וחילוץ רכבים 24/7 בחיפה, הקריות, ובמיוחד בעליות סטלה מאריס. גרר לרכבים פרטיים, מסחריים ו-4X4. מענה מהיר ומקצועי.",
    "url": "https://www.yourdomain.com/emergency-tow-stuck-car-stella-maris-haifa-hills",
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "$",
    "areaServed": {
      "@type": "Place",
      "name": "חיפה והקריות",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.8185,
        "longitude": 34.9795
      }
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "serviceType": ["גרר חירום", "חילוץ רכב", "גרר 24/7", "גרר רכב תקוע", "גרר בעליות", "גרר סטלה מאריס חיפה"],
    "image": "https://www.yourdomain.com/images/tow-truck-haifa.jpg"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            גרר חירום רכב תקוע בעליות של סטלה מאריס חיפה – חילוץ מהיר 24/7
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            נתקעתם עם הרכב בעליות התלולות והמאתגרות של סטלה מאריס בחיפה? זקוקים לשירותי גרר חירום מיידיים? אנו מספקים שירותי גרר וחילוץ מהירים, אמינים ומקצועיים לרכבים פרטיים, מסחריים ורכבי שטח 4X4 באזור סטלה מאריס, חיפה והקריות, 24 שעות ביממה, 7 ימים בשבוע. אל תישארו תקועים – אנחנו בדרך!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.32.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.12.35.03.75-.24 1.02l-2.2 2.2z" />
              </svg>
              התקשרו אלינו עכשיו!
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
            למה רכבים נתקעים בעליות סטלה מאריס ואיך אנחנו עוזרים?
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">אתגרי הדרך בסטלה מאריס</h3>
              <p className="mb-4">
                עליות סטלה מאריס בחיפה ידועות בשיפועיהן התלולים, פיתוליהן החדים והנוף המרהיב, אך גם בקושי שהן מציבות לרכבים. תקלות נפוצות כוללות התחממות מנוע, כשל במערכת הבלמים, בעיות מצבר, תקרים ובעיות גיר, במיוחד ברכבים ישנים או עמוסים. נהיגה בעליות אלו דורשת מהרכב מאמץ רב, ועלולה להוביל לתקלות בלתי צפויות.
              </p>
              <p>
                הצוות שלנו מכיר היטב את תוואי השטח המאתגר של סטלה מאריס וסביבתה. אנו מצוידים בציוד גרר מתקדם המותאם לחילוץ בטוח ויעיל גם בתנאים קשים ובמקומות צרים, ומבטיחים הגעה מהירה לכל נקודה באזור.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">שירותי הגרר שלנו בסטלה מאריס</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-white">זמינות 24/7:</strong> אנחנו כאן בשבילכם בכל שעה, ביום ובלילה, כולל סופי שבוע וחגים.</li>
                <li><strong className="text-white">מענה מהיר:</strong> צוותי הגרר שלנו פרוסים באזור חיפה ומגיעים אליכם במהירות המרבית.</li>
                <li><strong className="text-white">מקצועיות ואמינות:</strong> נהגי גרר מנוסים ומיומנים עם ציוד חדיש ובטיחותי.</li>
                <li><strong className="text-white">מגוון רכבים:</strong> גרר לרכבים פרטיים, רכבים מסחריים קלים ורכבי שטח 4X4.</li>
                <li><strong className="text-white">לא מטפלים באופנועים:</strong> שימו לב, איננו מספקים שירותי גרר לאופנועים.</li>
                <li><strong className="text-white">מחירים הוגנים:</strong> שקיפות מלאה והצעת מחיר אטרקטיבית בטלפון.</li>
              </ul>
              <p className="mt-6 text-lg">
                אל תהססו להתקשר! אנו נדאג לחלץ את רכבכם בבטחה ובמהירות למוסך או לכל יעד אחר שתבחרו.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-800 text-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            איך מזמינים גרר חירום בסטלה מאריס?
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-lg max-w-2xl mx-auto">
            <li><strong className="text-blue-400">התקשרו אלינו:</strong> חייגו למספר <a href={`tel:+${BUSINESS_INFO.phone}`} className="text-blue-400 hover:underline">{BUSINESS_INFO.phone}</a> או שלחו הודעה בוואטסאפ.</li>
            <li><strong className="text-blue-400">ספרו לנו מה קרה:</strong> תארו את מיקומכם המדויק (ככל הניתן, ציינו נקודות ציון כמו "ליד מנזר סטלה מאריס", "בדרך לכרמלית", "בסמוך לרכבל") ואת סוג התקלה.</li>
            <li><strong className="text-blue-400">קבלו הצעת מחיר:</strong> נספק לכם הצעת מחיר הוגנת ומשתלמת בטלפון.</li>
            <li><strong className="text-blue-400">הגרר בדרך:</strong> צוות הגרר שלנו יגיע אליכם במהירות האפשרית ויטפל ברכבכם במקצועיות.</li>
          </ol>
          <p className="mt-8 text-xl font-semibold">
            אנו מתחייבים לשירות אדיב, מהיר ויעיל, כדי שתחזרו לשגרה כמה שיותר מהר.
          </p>
        </div>
      </section>
    </>
  );
}