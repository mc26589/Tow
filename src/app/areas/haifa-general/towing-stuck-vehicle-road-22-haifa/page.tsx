import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";

// Mock imports for demonstration purposes, in a real app these would be defined elsewhere
// Ensure these match the actual structure of your imported components/data
const BUSINESS_INFO = {
  phone: "0501234567", // Example phone number
  name: "גרר חיפה והקריות",
  email: "info@example.com",
  address: "חיפה, ישראל",
  // Add any other relevant business information here
};

const WhatsAppCTA = ({ cityName }) => (
  <a
    href={`https://wa.me/${BUSINESS_INFO.phone}?text=אני%20צריך%20שירות%20גרירה%20ב${cityName}`}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out flex items-center justify-center gap-2"
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      {/* WhatsApp icon SVG path */}
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.2 22.04L7.59 20.6C9.06 21.47 10.77 21.91 12.5 21.91C17.96 21.91 22.41 17.46 22.41 12C22.41 6.54 17.96 2 12.04 2ZM17.15 16.45C16.92 16.86 15.72 17.44 15.35 17.5C14.98 17.57 14.75 17.6 12.1 16.5C9.46 15.4 7.73 12.6 7.6 12.4C7.47 12.2 7.36 12.07 7.6 11.8C7.84 11.53 8.13 11.44 8.29 11.27C8.46 11.1 8.56 10.97 8.69 10.7C8.83 10.43 8.89 10.3 8.98 10.1C9.07 9.9 9.16 9.8 9.29 9.53C9.42 9.26 9.36 9.13 9.26 9.03C9.16 8.93 8.92 8.86 8.79 8.8C8.66 8.73 8.53 8.7 8.4 8.7C8.27 8.7 8.07 8.7 7.87 8.7C7.67 8.7 7.4 8.77 7.16 9.03C6.92 9.29 6.2 9.97 6.2 11.3C6.2 12.63 7.19 13.9 7.33 14.1C7.47 14.3 9.2 17.03 11.9 18.13C14.1 19.03 14.5 18.9 15.03 18.87C15.56 18.84 16.63 18.2 16.86 17.5C17.09 16.8 17.09 16.6 17.03 16.5C16.98 16.4 17.15 16.45 17.15 16.45Z" />
    </svg>
    <span>שלח הודעה בוואטסאפ</span>
  </a>
);
// End mock imports

export default function Page() {
  // JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ 24/7 בחיפה והקריות",
    "description": "שירותי גרירה וחילוץ מהירים ומקצועיים לרכבים פרטיים, מסחריים ורכבי שטח (4x4) בחיפה, הקריות ובכביש 22. אנו לא מספקים שירותי גרירה לאופנועים.",
    "url": "https://yourdomain.com/towing-stuck-vehicle-road-22-haifa", // Replace with your actual domain and slug
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$",
    "areaServed": {
      "@type": "Place",
      "name": "חיפה והקריות"
    },
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
      "latitude": "32.7940", // Approximate center of Haifa
      "longitude": "34.9896" // Approximate center of Haifa
    },
    "serviceType": [
      "גרירת רכב פרטי",
      "גרירת רכב מסחרי",
      "גרירת רכב שטח 4x4",
      "חילוץ רכב",
      "שירותי דרך"
    ],
    "image": "https://yourdomain.com/images/towing-truck.jpg" // Replace with your actual image URL
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
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            שירותי גרירה וחילוץ בחיפה והקריות: לאופנועים כבדים בכביש 22 – מידע חשוב
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            אנו מבינים שאתה מחפש שירותי גרירה לאופנוע כבד תקוע בכביש 22 בחיפה.
            <br className="hidden md:block" />
            <strong className="text-red-400">חשוב לנו לציין כי אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח (4x4) ואיננו מספקים שירותי גרירה לאופנועים, כולל אופנועים כבדים.</strong>
            <br />
            עם זאת, אם רכבך (פרטי, מסחרי או 4x4) נתקע בכביש 22, בחיפה או בכל מקום אחר בקריות, אנו זמינים עבורך 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.57.12.35.03.75-.24 1.02l-2.2 2.2z" />
              </svg>
              <span>התקשר עכשיו לקבלת שירות</span>
            </a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-gray-200 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <section className="mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-400 mb-8">
              שירותי גרירה וחילוץ מקצועיים לרכבים בחיפה, כביש 22 והקריות
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              אנו מציעים שירותי גרירה וחילוץ מהירים ואמינים לכל סוגי הרכבים (למעט אופנועים) שנתקעו בכביש 22, בחיפה, בקריות ובסביבה. בין אם מדובר בתקלה מכנית, תאונה, פנצ'ר או כל מצב חירום אחר, צוות הגרריסטים המנוסה שלנו עומד לרשותך 24 שעות ביממה, 7 ימים בשבוע.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              אנו מבינים את הלחץ והתסכול הכרוכים בהיתקעות עם רכב בצד הדרך, במיוחד בכביש סואן כמו כביש 22. לכן, אנו מתחייבים לזמן תגובה מהיר במיוחד, כדי להגיע אליך בהקדם האפשרי ולספק פתרון יעיל ובטוח.
            </p>
            <h3 className="text-xl md:text-3xl font-semibold text-blue-300 mb-4">
              למי השירות שלנו מיועד?
            </h3>
            <ul className="list-disc list-inside text-lg space-y-2 mb-6">
              <li><strong className="text-white">רכבים פרטיים:</strong> מכל הסוגים והדגמים.</li>
              <li><strong className="text-white">רכבים מסחריים קלים:</strong> טנדרים, ואנים ורכבי עבודה.</li>
              <li><strong className="text-white">רכבי שטח (4x4):</strong> חילוץ מורכב משטח קשה או גרירה לכביש.</li>
              <li><strong className="text-red-400">חשוב לזכור: אנו לא מספקים שירותי גרירה לאופנועים.</strong></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-400 mb-8">
              למה לבחור בנו לשירותי גרירה בחיפה והקריות?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl md:text-3xl font-semibold text-blue-300 mb-4">
                  זמינות 24/7
                </h3>
                <p className="text-lg leading-relaxed">
                  הרכב נתקע באמצע הלילה? בשישי בצהריים? אנחנו כאן בשבילך בכל שעה, בכל יום. שירותי חירום ללא הפסקה.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-3xl font-semibold text-blue-300 mb-4">
                  מענה מהיר
                </h3>
                <p className="text-lg leading-relaxed">
                  אנו ממוקמים אסטרטגית בחיפה והקריות, מה שמאפשר לנו להגיע אליך במהירות שיא, במיוחד לאורך כביש 22.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-3xl font-semibold text-blue-300 mb-4">
                  מקצועיות ואמינות
                </h3>
                <p className="text-lg leading-relaxed">
                  צוות גרריסטים מנוסה ומיומן, עם ציוד גרירה מתקדם, מבטיח טיפול בטוח ויעיל ברכבך.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-3xl font-semibold text-blue-300 mb-4">
                  מחירים הוגנים
                </h3>
                <p className="text-lg leading-relaxed">
                  אנו מציעים שירות מקצועי במחירים תחרותיים והוגנים. קבל הצעת מחיר בטלפון ללא התחייבות.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-blue-400 mb-6">
              נתקעת עם רכב (לא אופנוע) בכביש 22, חיפה או הקריות?
            </h2>
            <p className="text-xl leading-relaxed mb-8">
              אל תהסס! צור קשר עכשיו וקבל שירות גרירה או חילוץ מהיר ומקצועי.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`tel:+${BUSINESS_INFO.phone}`}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.57.12.35.03.75-.24 1.02l-2.2 2.2z" />
                </svg>
                <span>התקשר עכשיו!</span>
              </a>
              <WhatsAppCTA cityName="חיפה והקריות" />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
