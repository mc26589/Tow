import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ בחיפה והקריות",
    "description": "שירותי גרירת רכב מהירים, אמינים ובמחיר הוגן בצ'ק פוסט חיפה והסביבה. זמינות 24/7 לרכבים פרטיים, מסחריים ו-4X4.",
    "url": "https://yourdomain.com/affordable-car-towing-service-check-post-haifa", // Replace with actual domain
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$",
    "areaServed": {
      "@type": "Place",
      "name": "חיפה והקריות",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "32.7940", // Approximate for Check Post Haifa
        "longitude": "35.0000" // Approximate for Check Post Haifa
      }
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "https://schema.org/Monday",
        "https://schema.org/Tuesday",
        "https://schema.org/Wednesday",
        "https://schema.org/Thursday",
        "https://schema.org/Friday",
        "https://schema.org/Saturday",
        "https://schema.org/Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "image": "https://yourdomain.com/images/towing-truck.jpg", // Replace with actual image
    "serviceType": "גרירת רכב, חילוץ רכב, שירותי דרך",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "שירותי גרירה וחילוץ",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "גרירת רכב פרטי"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "גרירת רכב מסחרי"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "גרירת רכב שטח 4X4"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "החלפת גלגל"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "התנעת רכב"
          }
        }
      ]
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            שירותי גרירת רכב במחיר משתלם בצ'ק פוסט חיפה
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            זקוקים לשירותי גרירה מהירים, אמינים ובמחיר הוגן באזור צ'ק פוסט חיפה? אנו כאן לשירותכם 24/7!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out text-lg"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-gray-200 py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* SGE Answer-first content */}
          <section className="mb-12 p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              גרירת רכב במחיר הוגן בצ'ק פוסט חיפה – זמינות מיידית!
            </h2>
            <p className="text-lg mb-4">
              כן, אנו מספקים שירותי גרירת רכב מהירים, אמינים ובמחיר משתלם במיוחד
              באזור צ'ק פוסט חיפה והסביבה הקרובה. אנו מבינים את הצורך בשירות
              זמין ויעיל, במיוחד כשאתם נתקעים עם הרכב. צוות הגרריסטים המקצועי
              שלנו ערוך להגיע אליכם במהירות, 24 שעות ביממה, 7 ימים בשבוע, כדי
              להעניק לכם שקט נפשי ופתרון מהיר.
            </p>
            <p className="text-lg mb-4">
              אנו מתמחים בגרירת מגוון רחב של כלי רכב:
            </p>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>רכבים פרטיים</li>
              <li>רכבים מסחריים קלים</li>
              <li>רכבי שטח 4X4</li>
            </ul>
            <p className="text-lg font-bold text-red-400 mb-6">
              חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.
            </p>
            <div className="text-center">
              <a
                href={`tel:+${BUSINESS_INFO.phone}`}
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out text-lg"
              >
                קבלו הצעת מחיר אטרקטיבית עכשיו!
              </a>
            </div>
          </section>

          {/* Further content sections */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
              למה לבחור בנו לשירותי גרירה בצ'ק פוסט?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  זמינות 24/7
                </h3>
                <p className="text-gray-300">
                  תקועים באמצע הלילה או בסוף השבוע? אנחנו זמינים עבורכם בכל שעה,
                  בכל יום, כולל חגים. קריאה אחת ואנחנו בדרך.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  מחירים הוגנים ושקופים
                </h3>
                <p className="text-gray-300">
                  אנו מתחייבים למחירים תחרותיים והוגנים, ללא הפתעות. קבלו הצעת
                  מחיר ברורה בטלפון לפני הגעת הגרר.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  מענה מהיר באזור צ'ק פוסט
                </h3>
                <p className="text-gray-300">
                  הכרות מעמיקה עם צירי התנועה והדרכים באזור צ'ק פוסט חיפה מאפשרת
                  לנו להגיע אליכם במהירות שיא ולצמצם את זמן ההמתנה שלכם.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  מקצועיות ואמינות
                </h3>
                <p className="text-gray-300">
                  צוות הגרריסטים שלנו מנוסה ומיומן, מצויד בציוד גרירה חדיש
                  ובטוח, ומבטיח טיפול מקצועי ואחראי ברכבכם.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              שירותי חילוץ וגרירה נוספים שאנו מציעים:
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  התנעת רכב
                </h3>
                <p className="text-gray-300">
                  המצבר שבק חיים? נגיע אליכם עם כבלים ונסייע בהתנעת הרכב במהירות.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  החלפת גלגל
                </h3>
                <p className="text-gray-300">
                  פנצ'ר תפס אתכם לא מוכנים? נסייע בהחלפת הגלגל לגלגל רזרבי.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  חילוץ רכבים מורכבים
                </h3>
                <p className="text-gray-300">
                  נתקעתם בשטח או במצב מורכב? יש לנו את הציוד והידע לחלץ את רכבכם
                  בבטחה.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              צריכים גרירה בצ'ק פוסט חיפה? אל תחכו!
            </h2>
            <p className="text-xl mb-6">
              אל תתנו לתקלה ברכב לשבש לכם את היום. צרו קשר עכשיו וקבלו שירות
              מקצועי, מהיר ובמחיר הוגן.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`tel:+${BUSINESS_INFO.phone}`}
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out text-lg"
              >
                התקשרו אלינו מיד!
              </a>
              <WhatsAppCTA cityName="Haifa and Krayot" />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}