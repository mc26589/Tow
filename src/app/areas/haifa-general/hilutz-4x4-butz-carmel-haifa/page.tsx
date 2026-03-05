import { BUSINESS_INFO } from "@/lib/data";
import { WhatsAppCTA } from "@/components/whatsapp-cta";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ 4x4 מבוץ ביער הכרמל חיפה והקריות",
    "description": "שירותי חילוץ וגרירה מקצועיים לרכבי 4x4 שנתקעו בבוץ, בחול או בשטח קשה בשבילי יער הכרמל, חיפה והקריות. זמינות 24/7, ציוד מתקדם ומחירים הוגנים.",
    "url": "https://yourdomain.com/hilutz-4x4-butz-carmel-haifa",
    "telephone": `+${BUSINESS_INFO.phone}`, // Ensure phone is in international format for schema
    "priceRange": "$",
    "areaServed": [
      {
        "@type": "Place",
        "name": "חיפה"
      },
      {
        "@type": "Place",
        "name": "הקריות"
      },
      {
        "@type": "Place",
        "name": "יער הכרמל"
      },
      {
        "@type": "Place",
        "name": "טירת הכרמל"
      },
      {
        "@type": "Place",
        "name": "נשר"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.7940,
      "longitude": 35.0000
    },
    "serviceType": [
      "חילוץ 4x4 מבוץ",
      "חילוץ רכבי שטח",
      "גרירת רכבים",
      "שירותי חילוץ חירום",
      "חילוץ רכב תקוע"
    ],
    "image": "https://yourdomain.com/images/4x4-mud-rescue.jpg"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי חילוץ 4x4 מבוץ בשבילי יער הכרמל חיפה</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            נתקעתם עם רכב השטח שלכם בבוץ עמוק או בשטח קשה בשבילי יער הכרמל או באזור חיפה והקריות?
            אנו מספקים שירותי חילוץ 4x4 מקצועיים, מהירים ואמינים, 24 שעות ביממה, 7 ימים בשבוע.
            צוותי החילוץ שלנו מצוידים בציוד המתקדם ביותר ויגיעו אליכם במהירות לכל נקודה בשטח.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out flex items-center justify-center space-x-2 text-lg">
              <span>התקשרו עכשיו לחילוץ מהיר</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary-light">חילוץ 4x4 מקצועי ביער הכרמל ובחיפה</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg mb-4">
                שבילי יער הכרמל מציעים נופים מרהיבים ואתגרי שטח מרתקים, אך לעיתים קרובות הם עלולים להפוך למלכודת בוץ או חול עבור רכבי 4x4.
                כאשר אתם מוצאים את עצמכם תקועים, ללא יכולת תנועה, אתם זקוקים לשירות חילוץ אמין ומקצועי שיגיע אליכם במהירות.
              </p>
              <p className="text-lg mb-4">
                אנו מתמחים בחילוץ רכבי שטח מכל סוג (למעט אופנועים) ממצבי קיצון – בוץ עמוק, חול טובעני, דרכים משובשות או תקלות מכניות בשטח.
                הצוותים שלנו מכירים היטב את אזור יער הכרמל, חיפה והקריות, ומצוידים ברכבי חילוץ ייעודיים ובציוד מתקדם (כננות, רצועות גרירה, ציוד הרמה)
                כדי להבטיח חילוץ בטוח ויעיל, תוך שמירה על שלמות הרכב שלכם.
              </p>
              <p className="text-lg">
                אנו זמינים עבורכם 24/7, גם בשעות הלילה המאוחרות ובסופי שבוע. אל תהססו להתקשר!
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/images/4x4-mud-rescue.jpg" alt="רכב 4x4 תקוע בבוץ ביער הכרמל" className="rounded-lg shadow-xl max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-800 text-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary-light">למה לבחור בשירותי החילוץ שלנו?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-3 text-white">זמינות 24/7</h3>
              <p className="text-gray-300">אנו זמינים עבורכם בכל שעה, ביום ובלילה, כולל שבתות וחגים, כדי לספק מענה מיידי.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-3 text-white">מקצועיות וניסיון</h3>
              <p className="text-gray-300">צוות מיומן ומנוסה בחילוץ רכבי שטח מכל מצב, עם ידע מעמיק בשטח.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-3 text-white">ציוד מתקדם</h3>
              <p className="text-gray-300">רכבי חילוץ חזקים וציוד טכני מתקדם המבטיח חילוץ בטוח ויעיל.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-3 text-white">הגעה מהירה</h3>
              <p className="text-gray-300">הכרות מעמיקה עם אזור חיפה, הקריות ויער הכרמל מאפשרת לנו להגיע אליכם במהירות.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-3 text-white">מחירים הוגנים</h3>
              <p className="text-gray-300">אנו מציעים שירותי חילוץ במחירים תחרותיים והוגנים. קבלו הצעת מחיר בטלפון.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-3 text-white">שירות אדיב</h3>
              <p className="text-gray-300">שירות לקוחות מעולה ויחס אישי לכל פונה, כי אכפת לנו מכם.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary-light">אזורי שירות עיקריים</h2>
          <p className="text-lg text-center mb-8 max-w-2xl mx-auto">
            אנו מספקים שירותי חילוץ וגרירה לרכבי 4x4, רכבים פרטיים ורכבים מסחריים (למעט אופנועים)
            בכל רחבי חיפה והקריות, כולל:
          </p>
          <ul className="grid md:grid-cols-3 gap-4 text-center text-lg list-none p-0 max-w-4xl mx-auto">
            <li className="bg-gray-800 p-4 rounded-lg shadow-md">יער הכרמל</li>
            <li className="bg-gray-800 p-4 rounded-lg shadow-md">חיפה (כל השכונות)</li>
            <li className="bg-gray-800 p-4 rounded-lg shadow-md">קריות (קרית ים, קרית מוצקין, קרית ביאליק, קרית אתא)</li>
            <li className="bg-gray-800 p-4 rounded-lg shadow-md">טירת הכרמל</li>
            <li className="bg-gray-800 p-4 rounded-lg shadow-md">נשר</li>
            <li className="bg-gray-800 p-4 rounded-lg shadow-md">עכו והסביבה</li>
          </ul>
          <div className="text-center mt-10">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out flex items-center justify-center space-x-2 text-lg">
              <span>צריכים חילוץ? התקשרו עכשיו!</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-800 text-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary-light">שאלות נפוצות</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">האם אתם מחלצים אופנועים?</h3>
              <p className="text-gray-300">
                לא, אנו מתמחים בחילוץ וגרירת רכבי 4x4, רכבים פרטיים ורכבים מסחריים בלבד.
                איננו מספקים שירותי חילוץ או גרירה לאופנועים.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">כמה זמן לוקח לכם להגיע?</h3>
              <p className="text-gray-300">
                זמן ההגעה משתנה בהתאם למיקומכם המדויק ולעומס התנועה, אך אנו עושים כל מאמץ להגיע אליכם במהירות האפשרית,
                בדרך כלל תוך 30-60 דקות באזור חיפה והקריות.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">האם אתם עובדים 24 שעות ביממה?</h3>
              <p className="text-gray-300">
                כן, שירותי החילוץ והגרירה שלנו זמינים 24 שעות ביממה, 7 ימים בשבוע, כולל סופי שבוע וחגים.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">מהו מחיר החילוץ?</h3>
              <p className="text-gray-300">
                מחיר החילוץ נקבע בהתאם למורכבות המקרה, סוג הרכב ומיקום החילוץ.
                אנו מציעים מחירים הוגנים ותחרותיים. לקבלת הצעת מחיר מדויקת, אנא התקשרו אלינו.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
