import { Metadata } from 'next';

import { BUSINESS_INFO } from "@/lib/data";
import { WhatsAppCTA } from "@/components/whatsapp-cta";

export const metadata: Metadata = {
  title: "גרירת חירום רכב תקוע בצ'ק פוסט חיפה (כביש 22) במחיר זול 24/7",
  description: "נתקעתם עם הרכב בצ'ק פוסט חיפה או בכביש 22? שירותי גרירה וחילוץ חירום מהירים, אמינים ובמחירים הוגנים 24/7. גרירת רכבים פרטיים, מסחריים ו-4x4. התקשרו עכשיו!",
  keywords: ["גרירת חירום", "צ'ק פוסט חיפה", "כביש 22", "רכב תקוע", "גרר חיפה", "מחיר זול", "גרירה 24/7", "חילוץ רכב", "שירותי דרך חיפה", "גרר קריות"],
  alternates: {
    canonical: 'https://www.yourdomain.com/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoTowing',
    'name': 'שירותי גרירה וחילוץ חירום חיפה והקריות',
    'description': 'שירותי גרירת חירום לרכבים תקועים בצ\'ק פוסט חיפה, כביש 22, וכל אזור חיפה והקריות. זמינות 24/7, מחירים הוגנים, מענה מהיר לרכבים פרטיים, מסחריים ו-4x4.',
    'url': 'https://www.yourdomain.com/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap',
    'telephone': `+${BUSINESS_INFO.phone}`,
    'priceRange': '$',
    'areaServed': [
      { '@type': 'Place', 'name': 'חיפה' },
      { '@type': 'Place', 'name': 'הקריות' },
      { '@type': 'Place', 'name': 'צ\'ק פוסט חיפה' },
      { '@type': 'Place', 'name': 'כביש 22' }
    ],
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '00:00',
        'closes': '23:59'
      }
    ],
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '32.80',
      'longitude': '35.00'
    },
    'serviceType': [
      'גרירת חירום',
      'חילוץ רכב',
      'שירותי דרך',
      'גרירת רכב תקוע',
      'גרירה בצ\'ק פוסט',
      'גרירה בכביש 22'
    ],
    'image': 'https://www.yourdomain.com/images/towing-truck-haifa.webp'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section - Answer First */}
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            גרירת חירום רכב תקוע בצ'ק פוסט חיפה (כביש 22) במחיר זול
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            נתקעתם עם הרכב בצ'ק פוסט חיפה, בכביש 22 או בסביבה? אנו מספקים שירותי גרירה וחילוץ חירום מהירים, מקצועיים ובמחירים הוגנים 24/7. התקשרו עכשיו לקבלת עזרה מיידית!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-gray-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-400">
            שירותי גרירה וחילוץ בצ'ק פוסט חיפה וכביש 22 – מענה מהיר וזול
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg mb-6 leading-relaxed">
                נתקעתם עם הרכב בצומת צ'ק פוסט, על כביש 22 (כביש עוקף קריות) או בכל נקודה אחרת באזור חיפה והקריות? אל דאגה! אנו מציעים שירותי גרירת חירום מהירים ואמינים לכל סוגי הרכבים הפרטיים, המסחריים ורכבי השטח (4x4). אנו מבינים את הלחץ והתסכול שבלהיתקע עם רכב, במיוחד באזור תנועה עמוס כמו צ'ק פוסט, ולכן אנו מתחייבים לזמן תגובה מהיר במיוחד.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                צוות הגרריסטים המקצועי שלנו מצויד בציוד גרירה וחילוץ מתקדם, המאפשר לנו לטפל בכל תקלה – החל מתקר בגלגל, דרך בעיות מנוע ועד תאונות דרכים קלות. אנו פועלים 24 שעות ביממה, 7 ימים בשבוע, כולל חגים ושבתות, כדי להבטיח שתקבלו עזרה בכל עת שתזדקקו לה.
              </p>
              <p className="text-lg font-semibold text-red-400 mb-6">
                שימו לב: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח (4x4) בלבד. איננו מספקים שירותי גרירה לאופנועים.
              </p>
              <div className="text-center md:text-left">
                <a
                  href={`tel:+${BUSINESS_INFO.phone}`}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
                >
                  התקשרו עכשיו לקבלת הצעת מחיר זולה
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <img src="/images/towing-truck-haifa.webp" alt="גרר חירום בצ'ק פוסט חיפה" width="600" height="400" className="rounded-lg shadow-xl object-cover w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-400">
            למה לבחור בנו לגרירה בצ'ק פוסט ובכביש 22?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">זמינות 24/7</h3>
              <p className="text-md">אנו זמינים עבורכם בכל שעה, בכל יום, כדי להבטיח שתקבלו עזרה מיידית כשאתם זקוקים לה ביותר.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">מחירים הוגנים</h3>
              <p className="text-md">אנו מציעים שירותי גרירה במחיר זול ותחרותי, ללא פשרות על איכות השירות והמקצועיות.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">מענה מהיר</h3>
              <p className="text-md">הגרר שלנו יגיע אליכם במהירות האפשרית, כדי לצמצם את זמן ההמתנה והתסכול שלכם.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">מקצועיות ואמינות</h3>
              <p className="text-md">צוות מנוסה ומיומן עם ציוד חדיש, המבטיח גרירה בטוחה ויעילה ללא נזקים נוספים.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">כיסוי נרחב</h3>
              <p className="text-md">אנו מכסים את כל אזור חיפה והקריות, כולל צ'ק פוסט, כביש 22, נשר, טירת כרמל ועוד.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">שירות לקוחות</h3>
              <p className="text-md">יחס אישי ואדיב לכל לקוח, עם דגש על שקיפות מלאה והסבר מפורט.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-400">
            זקוקים לגרירה מיידית בצ'ק פוסט חיפה? אל תחכו!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            אל תתנו לתקלה ברכב להרוס לכם את היום. צרו קשר עכשיו ונגיע אליכם במהירות האפשרית עם פתרון יעיל ובמחיר זול.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              התקשרו עכשיו לקבלת עזרה
            </a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>
    </>
  );
}
