import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "description": "שירותי חילוץ רכבים ששקעו בבוץ ביער הכרמל חיפה, גרירה וחילוץ 24/7 בחיפה והקריות. חילוץ רכבים פרטיים, רכבי שטח 4X4 ורכבים מסחריים קלים.",
    "url": "https://yourdomain.com/car-stuck-in-mud-rescue-carmel-forest-haifa", // Replace with your actual domain
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$",
    "areaServed": {
      "@type": "Place",
      "name": "חיפה והקריות",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.8183, // Approximate center of Haifa
        "longitude": 34.9905
      }
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.8183,
      "longitude": 34.9905
    },
    "serviceType": [
      "חילוץ רכב מבוץ",
      "גרירת רכב",
      "שירותי דרך",
      "חילוץ רכב שטח",
      "חילוץ רכב פרטי"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">חילוץ רכב שקוע בבוץ ביער הכרמל חיפה</h1>
          <p className="text-xl md:text-2xl mb-6">נתקעתם עם הרכב בבוץ ביער הכרמל בחיפה? אל דאגה! אנו כאן כדי לחלץ אתכם במהירות ובמקצועיות.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out text-lg">
              התקשרו עכשיו!
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">שירותי חילוץ רכבים מבוץ ביער הכרמל - זמינות 24/7</h2>
          <p className="mb-6 text-lg leading-relaxed">
            יער הכרמל, על נופיו המרהיבים, מושך אליו מטיילים רבים, אך לעיתים השטח הופך מאתגר ורכבים עלולים לשקוע בבוץ, במיוחד לאחר גשמים.
            אם נקלעתם למצב כזה בלב יער הכרמל בחיפה, צוות החילוץ המקצועי שלנו עומד לרשותכם 24 שעות ביממה, 7 ימים בשבוע.
            אנו מגיעים במהירות לכל נקודה באזור חיפה והקריות, מצוידים בציוד המתאים ביותר לחילוץ בטוח ויעיל של רכבכם מכל מצב.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold mb-6 mt-10 text-center">למה לבחור בנו לחילוץ רכבכם מהבוץ?</h3>
          <ul className="list-disc list-inside space-y-3 mb-8 text-lg leading-relaxed">
            <li><strong>זמינות מיידית:</strong> שירות חילוץ 24/7, כולל שבתות וחגים.</li>
            <li><strong>מקצועיות וניסיון:</strong> צוות מיומן עם ניסיון רב בחילוצי שטח מורכבים.</li>
            <li><strong>ציוד מתקדם:</strong> רכבי חילוץ וציוד ייעודי לטיפול בכל סוגי הרכבים והשטחים.</li>
            <li><strong>מענה מהיר:</strong> אנו מבינים את הדחיפות ומגיעים אליכם בזמן הקצר ביותר.</li>
            <li><strong>מחירים הוגנים:</strong> שקיפות מלאה והצעת מחיר בטלפון, ללא הפתעות.</li>
            <li><strong>בטיחות מעל הכל:</strong> חילוץ הרכב תוך שמירה על בטיחותכם ושלמות רכבכם.</li>
          </ul>

          <h3 className="text-2xl md:text-3xl font-bold mb-6 mt-10 text-center">אילו רכבים אנו מחלצים?</h3>
          <p className="mb-4 text-lg leading-relaxed">
            אנו מתמחים בחילוץ וגרירה של מגוון רחב של כלי רכב:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8 text-lg leading-relaxed">
            <li><strong>רכבים פרטיים:</strong> כולל רכבי סדאן, האצ'בק, סטיישן ומיניוואנים.</li>
            <li><strong>רכבי שטח (4X4):</strong> ג'יפים, טנדרים ורכבי שטח אחרים שנתקעו.</li>
            <li><strong>רכבים מסחריים קלים:</strong> טנדרונים, ואנים ורכבים מסחריים קטנים.</li>
          </ul>
          <p className="mb-6 text-lg leading-relaxed font-bold text-red-400">
            שימו לב: אנו לא מספקים שירותי חילוץ או גרירה לאופנועים.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold mb-6 mt-10 text-center">אזורי שירות עיקריים</h3>
          <p className="mb-6 text-lg leading-relaxed">
            אנו מספקים שירותי חילוץ וגרירה בפריסה רחבה באזור הצפון, בדגש על:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8 text-lg leading-relaxed">
            <li><strong>חיפה:</strong> כולל יער הכרמל, שכונות העיר והסביבה.</li>
            <li><strong>הקריות:</strong> קרית ים, קרית מוצקין, קרית ביאליק, קרית אתא.</li>
            <li><strong>ישובים נוספים:</strong> נשר, טירת כרמל, עתלית, ויישובי חוף הכרמל.</li>
          </ul>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold mb-6">נתקעתם? אל תחכו! צרו קשר עכשיו לקבלת עזרה מיידית:</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <WhatsAppCTA cityName="Haifa and Krayot" />
              <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out text-lg">
                התקשרו אלינו
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
