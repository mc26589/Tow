import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";

export default function Page() {


  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חירום חיפה והקריות",
    "description": "מחפשים גרירת רכב חירום זולה בצומת צ'ק פוסט חיפה? אנו מספקים שירותי גרירה מהירים, אמינים ובמחירים הוגנים 24/7 לרכבים פרטיים, מסחריים ו-4X4. התקשרו עכשיו לקבלת הצעת מחיר!",
    "url": "https://www.yourdomain.com/affordable-emergency-car-towing-check-post-haifa", // יש להחליף בכתובת ה-URL הקנונית של הדף
    "image": "https://www.yourdomain.com/images/towing-haifa-checkpost.jpg", // יש להחליף בכתובת תמונה רלוונטית
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$",
    "areaServed": {
      "@type": "Place",
      "name": "חיפה והקריות",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.795, // קואורדינטות משוערות לצומת צ'ק פוסט, חיפה
        "longitude": 35.015  // קואורדינטות משוערות לצומת צ'ק פוסט, חיפה
      }
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "serviceType": ["Emergency Towing Service", "Roadside Assistance", "Car Towing", "Vehicle Recovery"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "חיפה",
      "addressRegion": "מחוז חיפה",
      "addressCountry": "ישראל"
    }
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
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            גרירת רכב חירום זולה בצומת צ'ק פוסט חיפה והקריות – זמינות 24/7
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            נתקעתם עם הרכב בצומת צ'ק פוסט בחיפה או בסביבה ומחפשים שירות גרירה מהיר, אמין ובמחיר הוגן?
            אנו כאן לשירותכם 24 שעות ביממה, 7 ימים בשבוע!
            אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח 4X4.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300 font-semibold py-3 px-8 rounded-full shadow-lg text-lg"
            >
              התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            למה לבחור בנו לגרירת רכב בצ'ק פוסט חיפה?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">זמינות 24/7</h3>
              <p className="text-gray-300">
                אנו מבינים שתקלות לא מתרחשות בשעות נוחות. לכן, שירותי הגרירה שלנו זמינים עבורכם בכל שעה, ביום ובלילה, כולל סופי שבוע וחגים.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">מחירים הוגנים ושקופים</h3>
              <p className="text-gray-300">
                אנו מתחייבים למחירים זולים והוגנים עבור שירותי גרירת חירום בצומת צ'ק פוסט חיפה והסביבה.
                קבלו הצעת מחיר מדויקת בטלפון, ללא הפתעות.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">מענה מהיר ויעיל</h3>
              <p className="text-gray-300">
                צוות הגרריסטים המקצועי שלנו יגיע אליכם במהירות האפשרית, מצויד בציוד גרירה מתקדם,
                ויטפל ברכבכם בבטיחות ובמקצועיות מרבית.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">התמחות ברכבים שונים</h3>
              <p className="text-gray-300">
                אנו גוררים רכבים פרטיים, רכבים מסחריים קלים ורכבי שטח 4X4.
                <strong className="text-red-400"> חשוב לציין: איננו גוררים אופנועים.</strong>
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">שירות מקצועי ואדיב</h3>
              <p className="text-gray-300">
                אנו דוגלים במתן שירות אדיב, סבלני ומקצועי לכל לקוח, תוך הבנה מלאה של הלחץ והדאגה הכרוכים בתקלת רכב.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">כיסוי נרחב</h3>
              <p className="text-gray-300">
                אנו משרתים את כל אזור חיפה והקריות, עם דגש מיוחד על צומת צ'ק פוסט, נשר, יגור והסביבה הקרובה.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            שירותי הגרירה והחילוץ שלנו כוללים:
          </h2>
          <ul className="list-disc list-inside text-lg md:text-xl max-w-2xl mx-auto space-y-2 text-gray-300">
            <li>גרירת חירום לרכבים תקועים או מושבתים</li>
            <li>חילוץ רכבים מבורות, תעלות או שטחים קשים</li>
            <li>החלפת גלגל (פנצ'ר)</li>
            <li>התנעת רכב (מצבר)</li>
            <li>אספקת דלק (במקרה של מיכל ריק)</li>
            <li>הובלת רכבים למוסך או לכל יעד מבוקש</li>
          </ul>
          <p className="text-lg md:text-xl mt-8">
            לכל תקלה או צורך בגרירה, אל תהססו לפנות אלינו.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300 font-semibold py-3 px-8 rounded-full shadow-lg text-lg"
            >
              התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
