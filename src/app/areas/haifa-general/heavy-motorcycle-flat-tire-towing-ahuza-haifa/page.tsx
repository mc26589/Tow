import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ בחיפה והקריות",
    "description": "שירותי גרירה וחילוץ מהירים ומקצועיים לרכבים פרטיים, מסחריים ו-4X4 בחיפה, הקריות והסביבה. זמינות 24/7. אנו לא מספקים שירותי גרירה לאופנועים.",
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
        "name": "אחוזה, חיפה"
      }
    ],
    "openingHoursSpecification": [
      {
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
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.7940,
      "longitude": 34.9896
    },
    "priceRange": "$",
    "serviceType": [
      "שירותי גרירה",
      "חילוץ רכבים",
      "גרירת רכב פרטי",
      "גרירת רכב מסחרי",
      "גרירת רכב שטח 4X4",
      "שירותי דרך"
    ],
    "url": "https://yourdomain.com/heavy-motorcycle-flat-tire-towing-ahuza-haifa", // Replace with your actual domain
    "telephone": `+${BUSINESS_INFO.phone}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            גרירת אופנוע כבד עם פנצ'ר באחוזה חיפה? אנו מתמחים בגרירת רכבים פרטיים, מסחריים ו-4X4!
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            לגבי גרירת אופנוע כבד עם פנצ'ר באחוזה חיפה, חשוב לציין שאנו מתמחים בגרירה וחילוץ של רכבים פרטיים, רכבים מסחריים ורכבי שטח (4X4) בלבד. אנו לא מספקים שירותי גרירה לאופנועים.
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            עם זאת, אם נתקעתם עם רכב פרטי, מסחרי או 4X4 באזור אחוזה, חיפה או בכל מקום אחר בחיפה והקריות, אנו זמינים 24/7 להעניק לכם שירות מהיר, מקצועי ובמחירים הוגנים.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-lg">
              התקשרו עכשיו לקבלת שירות מהיר
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">שירותי גרירה וחילוץ מקצועיים בחיפה והקריות</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">גרירת רכבים פרטיים</h3>
              <p className="text-gray-300">נתקעתם עם פנצ'ר, תקלה מכנית או תאונה? אנו מספקים שירותי גרירה מהירים ובטוחים לכל סוגי הרכבים הפרטיים באחוזה, חיפה והסביבה.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">חילוץ רכבים מסחריים</h3>
              <p className="text-gray-300">רכב מסחרי תקוע יכול לגרום להפסדים. אנו מציעים שירותי חילוץ וגרירה יעילים לרכבים מסחריים קלים ובינוניים, כדי שתחזרו לעבודה במהירות.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">גרירת רכבי שטח (4X4)</h3>
              <p className="text-gray-300">בין אם נתקעתם בשטח או בכביש, צוות המומחים שלנו מצויד לגרור ולחלץ רכבי 4X4 מכל מצב, בבטחה ובמקצועיות.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">זמינות 24/7</h3>
              <p className="text-gray-300">אנו מבינים שתקלות לא מחכות. לכן, שירותי הגרירה והחילוץ שלנו זמינים עבורכם 24 שעות ביממה, 7 ימים בשבוע, כולל חגים ושבתות.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">מחירים הוגנים ושקופים</h3>
              <p className="text-gray-300">אנו מתחייבים למחירים הוגנים ותחרותיים. קבלו הצעת מחיר בטלפון ללא הפתעות, עם שקיפות מלאה לפני תחילת העבודה.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">שירות מהיר ומקצועי</h3>
              <p className="text-gray-300">צוות הגרריסטים שלנו מיומן ומצויד בציוד המתקדם ביותר, להבטחת שירות מהיר, יעיל ובטוח, תוך שמירה על רכבכם.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">צריכים עזרה מיידית באחוזה, חיפה או הקריות?</h3>
            <p className="text-lg mb-6">אל תהססו ליצור קשר. אנו בדרך אליכם!</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-lg">
                התקשרו עכשיו
              </a>
              <WhatsAppCTA cityName="Haifa and Krayot" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
