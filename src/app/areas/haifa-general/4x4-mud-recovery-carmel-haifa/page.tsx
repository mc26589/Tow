import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ 4x4 מבוץ ביער הכרמל חיפה 24/7 | גרירה וחילוץ רכבי שטח",
  description: "נתקעתם עם רכב השטח בבוץ עמוק ביער הכרמל בחיפה? אנו מספקים שירותי חילוץ 4x4 מהירים ומקצועיים 24 שעות ביממה. התקשרו עכשיו לקבלת עזרה מיידית!",
  alternates: {
    canonical: "https://yourdomain.com/4x4-mud-recovery-carmel-haifa",
  },
  openGraph: {
    title: "חילוץ 4x4 מבוץ ביער הכרמל חיפה 24/7 | גרירה וחילוץ רכבי שטח",
    description: "נתקעתם עם רכב השטח בבוץ עמוק ביער הכרמל בחיפה? אנו מספקים שירותי חילוץ 4x4 מהירים ומקצועיים 24 שעות ביממה. התקשרו עכשיו לקבלת עזרה מיידית!",
    url: "https://yourdomain.com/4x4-mud-recovery-carmel-haifa",
    type: "website",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "description": "שירותי חילוץ 4x4 מבוץ ביער הכרמל חיפה, גרירה וחילוץ רכבים 24/7 באזור חיפה והקריות. מתמחים בחילוץ רכבי שטח, רכבים פרטיים ומסחריים.",
    "url": "https://yourdomain.com/4x4-mud-recovery-carmel-haifa",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$",
    "areaServed": {
      "@type": "Place",
      "name": "חיפה והקריות"
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
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.789, // Approximate for Carmel Forest/Haifa
      "longitude": 35.000 // Approximate for Carmel Forest/Haifa
    },
    "serviceType": [
      "חילוץ 4x4",
      "חילוץ מבוץ",
      "גרירת רכבי שטח",
      "שירותי דרך",
      "חילוץ רכבים פרטיים",
      "חילוץ רכבים מסחריים"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">חילוץ 4x4 מבוץ ביער הכרמל חיפה 24/7</h1>
          <p className="text-xl md:text-2xl mb-8">נתקעתם עם רכב השטח בבוץ עמוק ביער הכרמל או באזור חיפה? אנחנו כאן כדי לחלץ אתכם במהירות ובמקצועיות!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out shadow-lg">
              התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">שירותי חילוץ 4x4 מבוץ ביער הכרמל ובחיפה</h2>
          <p className="text-lg mb-6 leading-relaxed">
            מחפשים חילוץ 4x4 מבוץ ביער הכרמל בחיפה? אנו מבינים את התסכול והדחיפות כשאתם נתקעים עם רכב השטח שלכם בשטח קשה, בבוץ עמוק או בחול טובעני.
            צוות החילוץ המקצועי שלנו זמין 24 שעות ביממה, 7 ימים בשבוע, כדי לספק לכם מענה מהיר ויעיל בכל נקודה ביער הכרמל, בחיפה ובכל אזור הקריות.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            אנו מתמחים בחילוץ רכבי שטח (4x4), רכבים פרטיים ורכבים מסחריים מכל מצב.
            <strong className="text-red-400">שימו לב: איננו מספקים שירותי גרירה או חילוץ לאופנועים.</strong>
          </p>

          <h3 className="text-2xl md:text-3xl font-bold mt-10 mb-6 text-center">למה לבחור בנו לחילוץ 4x4 ביער הכרמל?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-400">זמינות 24/7</h4>
              <p className="text-md leading-relaxed">
                נתקעתם באמצע הלילה או בסוף השבוע? אנחנו זמינים עבורכם בכל שעה, ביום ובלילה, כדי להבטיח שתקבלו עזרה מיידית כשאתם זקוקים לה ביותר.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-400">ציוד חילוץ מתקדם</h4>
              <p className="text-md leading-relaxed">
                אנו מצוידים בציוד החילוץ המתקדם והבטיחותי ביותר, כולל כננות חזקות, רצועות גרירה מקצועיות ורכבי שטח ייעודיים, המאפשרים לנו לחלץ כל רכב מכל מצב, במינימום סיכון.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-400">צוות מיומן ומנוסה</h4>
              <p className="text-md leading-relaxed">
                צוות החילוץ שלנו מורכב מאנשי מקצוע מנוסים ומיומנים, בעלי ידע נרחב בתחום חילוצי השטח. אנו מכירים היטב את השטח ביער הכרמל ובסביבתו, ומסוגלים להגיע אליכם במהירות ולטפל בכל תקלה ביעילות.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-400">מחירים הוגנים ושקופים</h4>
              <p className="text-md leading-relaxed">
                אנו מציעים שירותי חילוץ במחירים הוגנים ותחרותיים, ללא הפתעות. קבלו הצעת מחיר בטלפון לפני הגעתנו, ותיהנו משקיפות מלאה.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">נתקעתם? אל תחכו!</h3>
            <p className="text-lg mb-8">
              אל תנסו לחלץ את הרכב לבד במצבים מסוכנים. התקשרו אלינו מיד וצוות מקצועי יגיע אליכם במהירות.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <WhatsAppCTA cityName="חיפה והקריות" />
              <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out shadow-lg">
                חייגו עכשיו לקבלת עזרה: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}