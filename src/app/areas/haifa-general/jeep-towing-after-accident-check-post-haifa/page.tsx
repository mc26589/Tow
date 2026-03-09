import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";

// Metadata for the page
export const metadata: Metadata = {
  title: "גרר ג'יפים לאחר תאונה בצ'ק פוסט חיפה והקריות | גרר חירום 24/7",
  description: "זקוקים לגרר ג'יפים לאחר תאונה בצ'ק פוסט חיפה? אנו מספקים שירותי גרר חירום מקצועיים לג'יפים, רכבים פרטיים ומסחריים 24/7 באזור חיפה והקריות. מענה מהיר ומחירים הוגנים.",
  keywords: "גרר ג'יפים, גרר לאחר תאונה, צ'ק פוסט חיפה, גרר חיפה, גרר קריות, גרר 24/7, חילוץ ג'יפים, גרר רכבי שטח",
  alternates: {
    canonical: "https://www.yourdomain.com/jeep-towing-after-accident-check-post-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "גרר חירום חיפה והקריות",
    "description": "שירותי גרר חירום מקצועיים לג'יפים, רכבים פרטיים ורכבים מסחריים לאחר תאונה באזור צ'ק פוסט חיפה והקריות, זמינים 24/7.",
    "url": "https://www.yourdomain.com/jeep-towing-after-accident-check-post-haifa",
    "image": "https://www.yourdomain.com/images/jeep-towing-haifa.jpg", // Placeholder image
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$",
    "areaServed": {
      "@type": "Place",
      "name": "חיפה והקריות",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.80, // Approximate center of Haifa
        "longitude": 35.00 // Approximate center of Haifa
      }
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "hasOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "גרר ג'יפים לאחר תאונה",
        "description": "שירותי גרר וחילוץ לג'יפים ורכבי שטח לאחר תאונה באזור צ'ק פוסט חיפה והקריות.",
        "serviceType": "גרר ג'יפים",
        "areaServed": {
          "@type": "Place",
          "name": "צ'ק פוסט חיפה"
        }
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "חיפה",
      "addressRegion": "מחוז חיפה",
      "addressCountry": "ישראל"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            גרר ג'יפים לאחר תאונה בצ'ק פוסט חיפה והקריות
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            זקוקים לשירותי גרר מקצועיים לג'יפ שלכם לאחר תאונה באזור צ'ק פוסט חיפה? אנו מספקים שירותי גרר חירום מהירים ואמינים 24/7 לג'יפים, רכבים פרטיים ורכבים מסחריים בכל אזור חיפה והקריות, עם דגש על מענה מיידי באזור צ'ק פוסט.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg"
            >
              התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            למה לבחור בנו לגרר ג'יפים בצ'ק פוסט חיפה?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">זמינות 24/7</h3>
              <p className="text-gray-300">
                אנו זמינים עבורכם בכל שעה, בכל יום, כולל שבתות וחגים. תאונות לא מחכות, וגם אנחנו לא.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">מענה מהיר באזור צ'ק פוסט</h3>
              <p className="text-gray-300">
                מיקומנו האסטרטגי מאפשר לנו להגיע במהירות שיא לאזור צ'ק פוסט חיפה ולסביבתו, כדי לספק לכם שירות גרר מיידי.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">ציוד מתקדם לג'יפים</h3>
              <p className="text-gray-300">
                ברשותנו ציוד גרר וחילוץ ייעודי המתאים לג'יפים ורכבי שטח מכל הסוגים, המבטיח טיפול בטוח ומקצועי ברכבכם.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">צוות מנוסה ומקצועי</h3>
              <p className="text-gray-300">
                הצוות שלנו מיומן ומנוסה בטיפול במצבי חירום שונים, וידאג להובלת הג'יפ שלכם בבטחה למוסך או לכל יעד אחר.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">מחירים הוגנים ושקופים</h3>
              <p className="text-gray-300">
                אנו מציעים שירותי גרר במחירים הוגנים ותחרותיים. קבלו הצעת מחיר בטלפון ללא התחייבות.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">כיסוי מלא בחיפה והקריות</h3>
              <p className="text-gray-300">
                אנו משרתים את כל אזור חיפה והקריות, כולל צ'ק פוסט, קרית מוצקין, קרית ביאליק, קרית ים, קרית חיים וקרית אתא.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-950 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            השירותים שלנו לגרר ג'יפים ורכבים
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">גרר ג'יפים ורכבי שטח</h3>
              <p className="text-gray-300">
                שירותי גרר מקצועיים לכל סוגי הג'יפים ורכבי השטח, כולל חילוץ מדרכים קשות או לאחר תאונה.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">גרר רכבים פרטיים ומסחריים</h3>
              <p className="text-gray-300">
                אנו גוררים גם רכבים פרטיים ורכבים מסחריים קלים מכל מקום בחיפה והקריות.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">חילוץ לאחר תאונה</h3>
              <p className="text-gray-300">
                טיפול מהיר ויעיל ברכבים שניזוקו בתאונה, כולל פינוי בטוח למוסך המועדף עליכם.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">הובלת רכבים למוסך</h3>
              <p className="text-gray-300">
                הובלה בטוחה ואמינה של רכבכם לכל מוסך בחיפה והקריות, או לכל יעד אחר שתבחרו.
              </p>
            </div>
          </div>
          <div className="mt-10 text-center p-6 bg-red-800 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">הערה חשובה:</h3>
            <p className="text-lg">
              אנו מתמחים בגרר ג'יפים, רכבים פרטיים ורכבים מסחריים.
              <br />
              <strong className="text-yellow-300">איננו מספקים שירותי גרר לאופנועים.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            אזורי שירות עיקריים
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
              <li>צ'ק פוסט חיפה</li>
              <li>חיפה (כל השכונות)</li>
              <li>קרית מוצקין</li>
              <li>קרית ביאליק</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
              <li>קרית ים</li>
              <li>קרית חיים</li>
              <li>קרית אתא</li>
              <li>כביש 4</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
              <li>כביש 22 (כביש עוקף קריות)</li>
              <li>כביש 70</li>
              <li>סביבת מפרץ חיפה</li>
              <li>ועוד...</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-950 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            שאלות נפוצות (FAQ)
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                כמה זמן לוקח לגרר להגיע לאזור צ'ק פוסט חיפה?
              </h3>
              <p className="text-gray-300">
                אנו מבינים את הדחיפות ומחויבים למענה מהיר ככל האפשר. זמן ההגעה המדויק תלוי בתנועה ובמיקום המדויק, אך אנו שואפים להגיע במהירות שיא לאזור צ'ק פוסט וסביבתו.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                האם אתם מספקים שירותי גרר 24 שעות ביממה, 7 ימים בשבוע?
              </h3>
              <p className="text-gray-300">
                בהחלט! שירותי הגרר שלנו זמינים 24/7, כולל סופי שבוע וחגים, כדי להבטיח שתקבלו עזרה בכל עת שתזדקקו לה.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                האם אתם גוררים את כל סוגי הג'יפים ורכבי השטח?
              </h3>
              <p className="text-gray-300">
                כן, אנו מצוידים לגרור ולחלץ מגוון רחב של ג'יפים ורכבי שטח, כולל רכבי 4x4, טנדרים ורכבים כבדים יותר.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                מהו מחיר שירותי הגרר?
              </h3>
              <p className="text-gray-300">
                אנו מציעים מחירים הוגנים ותחרותיים. לקבלת הצעת מחיר מדויקת, אנא התקשרו אלינו וספרו לנו על מיקום הרכב וסוג התקלה.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-blue-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            זקוקים לגרר ג'יפים בצ'ק פוסט חיפה עכשיו?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            אל תהססו! צרו קשר לקבלת שירות גרר חירום מהיר ומקצועי.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg"
            >
              התקשרו אלינו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}