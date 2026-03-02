import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";

// Placeholder for BUSINESS_INFO, assuming it's defined in '@/lib/data'
// In a real application, BUSINESS_INFO would be imported from your actual data file.
const BUSINESS_INFO_PLACEHOLDER = {
  phone: "0501234567", // Example phone number
  email: "info@example.com",
  address: "Haifa, Israel",
};

export const metadata = {
  title: "גרר זול לרכב שטח בקרית מוצקין | שירותי גרירה 24/7",
  description: "מחפשים גרר זול לרכב שטח בקרית מוצקין? אנו מספקים שירותי גרירה מהירים ומקצועיים לרכבי שטח, רכבים פרטיים ומסחריים באזור הקריות וחיפה, 24/7 ובמחירים הוגנים. התקשרו עכשיו!",
  alternates: {
    canonical: "https://yourdomain.com/cheap-off-road-vehicle-towing-kiryat-motzkin",
  },
  openGraph: {
    title: "גרר זול לרכב שטח בקרית מוצקין | שירותי גרירה 24/7",
    description: "מחפשים גרר זול לרכב שטח בקרית מוצקין? אנו מספקים שירותי גרירה מהירים ומקצועיים לרכבי שטח, רכבים פרטיים ומסחריים באזור הקריות וחיפה, 24/7 ובמחירים הוגנים. התקשרו עכשיו!",
    url: "https://yourdomain.com/cheap-off-road-vehicle-towing-kiryat-motzkin",
    siteName: "שירותי גרירה 24/7 בקריות ובחיפה",
    locale: "he_IL",
    type: "website",
  },
};

export default function Page() {
  // Use the placeholder for JSON-LD and CTA if BUSINESS_INFO is not available at runtime
  const currentBusinessInfo = typeof BUSINESS_INFO !== 'undefined' ? BUSINESS_INFO : BUSINESS_INFO_PLACEHOLDER;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה 24/7 בקריות ובחיפה",
    "description": "שירותי גרירה מהירים ומקצועיים לרכבי שטח, רכבים פרטיים ומסחריים בקרית מוצקין, הקריות וחיפה. זמינות 24/7 במחירים הוגנים.",
    "url": "https://yourdomain.com/cheap-off-road-vehicle-towing-kiryat-motzkin",
    "telephone": `+${currentBusinessInfo.phone}`,
    "priceRange": "$",
    "areaServed": [
      {
        "@type": "Place",
        "name": "קרית מוצקין"
      },
      {
        "@type": "Place",
        "name": "הקריות"
      },
      {
        "@type": "Place",
        "name": "חיפה"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.8184, // Approximate center of Kiryat Motzkin
      "longitude": 35.0784
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "serviceType": "שירותי גרירה לרכבי שטח, רכבים פרטיים ומסחריים"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            גרר זול לרכב שטח בקרית מוצקין – שירותי גרירה 24/7
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            מחפשים גרר זול לרכב שטח בקרית מוצקין? אנו מספקים שירותי גרירה מקצועיים ומהירים לרכבי שטח, רכבים פרטיים ומסחריים באזור קרית מוצקין והקריות, 24 שעות ביממה, 7 ימים בשבוע, במחירים הוגנים.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a
              href={`tel:+${currentBusinessInfo.phone}`}
              className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out text-lg"
            >
              התקשרו עכשיו: {currentBusinessInfo.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            למה לבחור בנו לשירותי גרירה לרכב שטח בקרית מוצקין?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">זמינות 24/7</h3>
              <p className="text-lg">
                תקועים עם רכב השטח שלכם באמצע הלילה או בסוף השבוע? אנחנו זמינים עבורכם מסביב לשעון, בכל יום ובכל שעה, כדי להעניק לכם שקט נפשי.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">מענה מהיר</h3>
              <p className="text-lg">
                אנו מבינים את הדחיפות שבמצב חירום. צוות הגרר שלנו יגיע אליכם במהירות האפשרית בקרית מוצקין והסביבה, כדי לטפל בתקלה ביעילות.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">ציוד מתקדם לרכבי שטח</h3>
              <p className="text-lg">
                ברשותנו ציוד גרירה ייעודי וחזק המתאים במיוחד לרכבי שטח כבדים וגדולים, ומבטיח גרירה בטוחה ומקצועית ללא נזקים.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">מחירים הוגנים ומשתלמים</h3>
              <p className="text-lg">
                אנו מתחייבים למחירים זולים והוגנים עבור שירותי הגרירה שלנו, ללא פשרות על איכות השירות. קבלו הצעת מחיר בטלפון עוד היום!
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">צוות מנוסה ומקצועי</h3>
              <p className="text-lg">
                הגרריסטים שלנו מנוסים בגרירת כל סוגי הרכבים, כולל רכבי שטח מורכבים, ומספקים שירות אדיב, מקצועי ואמין.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">כיסוי נרחב</h3>
              <p className="text-lg">
                אנו משרתים את כל אזור קרית מוצקין, הקריות וחיפה, ומגיעים לכל מקום שתצטרכו אותנו, במהירות וביעילות.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            שירותי גרירה וחילוץ נוספים שאנו מציעים
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-300">גרירת רכבים פרטיים</h3>
              <p>שירותי גרירה לכל סוגי הרכבים הפרטיים, במקרה של תאונה, תקלה או חילוץ.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-300">גרירת רכבים מסחריים</h3>
              <p>פתרונות גרירה לרכבים מסחריים קלים ובינוניים, כדי להחזיר את העסק שלכם לפעילות.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-300">שירותי דרך</h3>
              <p>התנעת רכב, החלפת גלגל, מילוי דלק ושירותי חילוץ קלים נוספים.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-300">חילוץ רכבי שטח</h3>
              <p>חילוץ מקצועי מרכבי שטח שנתקעו בשטח קשה, בוץ או חול.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-300">הובלת רכבים</h3>
              <p>הובלת רכבים מנקודה לנקודה, כולל רכבים לפירוק או לאחר תאונה.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-300">לא מטפלים באופנועים</h3>
              <p className="text-red-400 font-bold">שימו לב: איננו מספקים שירותי גרירה לאופנועים.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            צריכים גרר לרכב שטח בקרית מוצקין? אנחנו כאן בשבילכם!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            אל תהססו להתקשר אלינו בכל שעה, בכל יום. אנו נשמח לספק לכם שירות מהיר, אמין ובמחיר הוגן.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a
              href={`tel:+${currentBusinessInfo.phone}`}
              className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out text-lg"
            >
              התקשרו עכשיו: {currentBusinessInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}