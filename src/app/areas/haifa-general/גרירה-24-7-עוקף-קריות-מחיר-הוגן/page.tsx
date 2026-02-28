import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ 24/7 חיפה והקריות",
    "description": "שירותי גרירה וחילוץ מהירים ואמינים 24/7 לרכבים פרטיים, מסחריים ו-4X4 בכביש 22 עוקף קריות ובכל אזור חיפה והקריות. זמינות מיידית ומחירים הוגנים.",
    "url": "https://yourdomain.com/גרירה-24-7-עוקף-קריות-מחיר-הוגן", // Replace 'yourdomain.com' with your actual domain
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "$",
    "areaServed": [
      {
        "@type": "Place",
        "name": "חיפה והקריות"
      },
      {
        "@type": "Place",
        "name": "כביש 22 עוקף קריות"
      },
      {
        "@type": "Place",
        "name": "קריית ים"
      },
      {
        "@type": "Place",
        "name": "קריית מוצקין"
      },
      {
        "@type": "Place",
        "name": "קריית ביאליק"
      },
      {
        "@type": "Place",
        "name": "קריית אתא"
      },
      {
        "@type": "Place",
        "name": "חיפה"
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
      "latitude": "32.818", // Approximate center of Krayot/Route 22
      "longitude": "35.055"
    },
    "serviceType": [
      "גרירת רכב",
      "חילוץ רכב",
      "שירותי גרירה 24/7",
      "גרירה בכביש 22",
      "גרירה עוקף קריות",
      "שירותי דרך"
    ]
  };

  return (
    <>
      <Script
        id="json-ld-auto-towing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            גרירת רכב 24/7 בכביש 22 עוקף קריות במחיר הוגן
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            מחפשים שירותי גרירה וחילוץ מהירים, אמינים וזמינים 24/7 בכביש 22 עוקף קריות?
            אנו כאן לשירותכם! גרירה מקצועית לרכבים פרטיים, מסחריים ו-4X4 בכל שעות היממה,
            עם התחייבות למחירים הוגנים ושירות ללא פשרות.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-gray-900 hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* SGE Answer-first content */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-400">
              שירותי גרירה וחילוץ 24/7 בכביש 22 עוקף קריות – זמינות מיידית ומחירים הוגנים
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              נתקעתם עם הרכב בכביש 22 עוקף קריות? בין אם מדובר בתקלה מכנית, תאונה קלה או כל מצב חירום אחר,
              אנו מציעים שירותי גרירה וחילוץ מהירים ומקצועיים 24 שעות ביממה, 7 ימים בשבוע.
              אנו מבינים את הדחיפות שבמצב כזה ומתחייבים להגיע אליכם במהירות האפשרית,
              לספק פתרון יעיל ובטוח, והכל במחיר הוגן ושקוף.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              אנו מתמחים בגרירת מגוון רחב של כלי רכב:
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>רכבים פרטיים</li>
                <li>רכבים מסחריים קלים</li>
                <li>רכבי שטח 4X4</li>
              </ul>
              <span className="font-bold text-red-400">שימו לב: אנו לא מספקים שירותי גרירה לאופנועים.</span>
            </p>
            <p className="text-lg leading-relaxed mb-4">
              אזור השירות שלנו כולל את כל כביש 22 עוקף קריות, כמו גם את הערים והיישובים הסמוכים
              בחיפה והקריות, כולל קריית ים, קריית מוצקין, קריית ביאליק, קריית אתא וחיפה עצמה.
            </p>
          </section>

          {/* E-E-A-T sections */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-400">
              למה לבחור בנו לשירותי גרירה בכביש 22 עוקף קריות?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-300">
                  <span className="text-blue-400 mr-2">&#10003;</span> זמינות 24/7
                </h3>
                <p className="text-md leading-relaxed">
                  תקלה ברכב לא בוחרת שעה. לכן, אנו זמינים עבורכם בכל שעה, ביום ובלילה,
                  כולל סופי שבוע וחגים. שיחת טלפון אחת ואנחנו בדרך אליכם.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-300">
                  <span className="text-blue-400 mr-2">&#10003;</span> מחירים הוגנים ושקופים
                </h3>
                <p className="text-md leading-relaxed">
                  אנו מאמינים בשקיפות מלאה. תקבלו הצעת מחיר ברורה והוגנת בטלפון,
                  ללא הפתעות או עלויות נסתרות. המטרה שלנו היא לספק שירות איכותי במחיר זול.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-300">
                  <span className="text-blue-400 mr-2">&#10003;</span> צוות מקצועי ומנוסה
                </h3>
                <p className="text-md leading-relaxed">
                  צוות הגרריסטים שלנו מיומן ומנוסה, מצויד בציוד גרירה מתקדם
                  המאפשר טיפול בטוח ויעיל בכל סוגי הרכבים והתקלות.
                  אנו מקפידים על סטנדרטים גבוהים של בטיחות ושירות.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-300">
                  <span className="text-blue-400 mr-2">&#10003;</span> שירות מהיר ואדיב
                </h3>
                <p className="text-md leading-relaxed">
                  אנו מבינים את הלחץ והתסכול שבמצב של תקלה ברכב.
                  לכן, אנו מתחייבים להגיע אליכם במהירות המרבית ולספק שירות אדיב, סבלני ומקצועי.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400">
              זקוקים לגרירה מיידית בכביש 22 עוקף קריות?
            </h2>
            <p className="text-lg mb-6">
              אל תהססו! צרו קשר עכשיו וקבלו שירות מהיר, אמין ובמחיר הוגן.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <WhatsAppCTA cityName="Haifa and Krayot" />
              <a
                href={`tel:+${BUSINESS_INFO.phone}`}
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
              >
                התקשרו עכשיו לקבלת הצעת מחיר
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
