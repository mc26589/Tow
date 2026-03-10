import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";

// Helper for JSON-LD
function JsonLd<T>({ data }: { data: T }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const metadata: Metadata = {
  title: "שירותי גרירה זולים באחוזה חיפה | מחירים שקופים 24/7",
  description: "מחפשים גרירה זולה באחוזה חיפה? אנו מציעים שירותי גרירה וחילוץ רכב 24/7 עם מחירים שקופים והוגנים. מענה מהיר באחוזה, חיפה והקריות.",
  alternates: {
    canonical: "https://yourdomain.com/cheap-car-towing-service-ahuzah-haifa-transparent-pricing", // Placeholder, replace with actual domain
  },
};

export default function Page() {
  const jsonLdData = {
    "@context": "http://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "description": "שירותי גרירה זולים, מהירים ושקופים באחוזה חיפה ובכל אזור חיפה והקריות, 24/7. גרירת רכבים פרטיים, מסחריים ורכבי שטח.",
    "url": "https://yourdomain.com/cheap-car-towing-service-ahuzah-haifa-transparent-pricing", // Placeholder
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$",
    "areaServed": {
      "@type": "Place",
      "name": "חיפה והקריות",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.7940, // Approximate center of Haifa
        "longitude": 34.9896
      }
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "http://schema.org/Monday",
        "http://schema.org/Tuesday",
        "http://schema.org/Wednesday",
        "http://schema.org/Thursday",
        "http://schema.org/Friday",
        "http://schema.org/Saturday",
        "http://schema.org/Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "serviceType": ["שירותי גרירה", "חילוץ רכב", "גרירת חירום", "גרירת רכבים פרטיים", "גרירת רכבים מסחריים", "גרירת רכבי שטח 4X4"]
  };

  return (
    <>
      <JsonLd data={jsonLdData} />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            שירותי גרירה זולים באחוזה חיפה: מחירים שקופים 24/7
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            מחפשים שירות גרירה אמין, מהיר ובעיקר – במחיר הוגן ושקוף באחוזה, חיפה? הגעתם למקום הנכון! אנו מספקים שירותי גרירה וחילוץ לרכבים פרטיים, מסחריים ורכבי שטח 4X4, עם התחייבות למחירים ברורים וללא הפתעות.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out shadow-lg"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            למה לבחור בנו לשירותי גרירה באחוזה חיפה?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">מחירים שקופים והוגנים</h3>
              <p className="text-gray-300">
                אנו מאמינים בשקיפות מלאה. תקבלו הצעת מחיר ברורה ומפורטת בטלפון, ללא עלויות נסתרות או הפתעות לא נעימות בסיום השירות. מחיר זול והוגן הוא הבטחה אצלנו.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">זמינות 24/7 באחוזה ובחיפה</h3>
              <p className="text-gray-300">
                הרכב נתקע באמצע הלילה? ביום שישי בצהריים? אנחנו כאן בשבילכם! שירותי גרירה וחילוץ זמינים 24 שעות ביממה, 7 ימים בשבוע, כולל חגים וסופי שבוע, בכל שכונות חיפה ובפרט באחוזה.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">מענה מהיר ומקצועי</h3>
              <p className="text-gray-300">
                צוות הגרריסטים המנוסה שלנו מצויד בציוד גרירה וחילוץ חדיש ומתקדם, ומגיע אליכם במהירות האפשרית. אנו מטפלים בכל סוגי התקלות ביעילות ובמקצועיות מרבית.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">כיסוי נרחב</h3>
              <p className="text-gray-300">
                אנו מספקים שירותי גרירה וחילוץ לא רק באחוזה ובחיפה, אלא בכל אזור הקריות והסביבה. לא משנה היכן נתקעתם, אנחנו בדרך אליכם.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">גרירה לכל סוגי הרכבים (למעט אופנועים)</h3>
              <p className="text-gray-300">
                אנו מתמחים בגרירת רכבים פרטיים, רכבים מסחריים קלים ורכבי שטח 4X4. שימו לב: איננו מספקים שירותי גרירה לאופנועים.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">שקט נפשי</h3>
              <p className="text-gray-300">
                כאשר אתם תקועים בצד הדרך, הדבר האחרון שאתם צריכים הוא דאגות נוספות. אנו מבטיחים שירות אדיב, מקצועי ויעיל שיחזיר אתכם לשגרה במהירות ובבטחה.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            נתקעתם באחוזה או בחיפה? צרו קשר עכשיו!
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
            אל תחכו! לכל צורך בגרירה או חילוץ רכב באחוזה, חיפה והקריות, אנחנו זמינים עבורכם 24/7.
            קבלו הצעת מחיר הוגנת ושקופה בשיחת טלפון קצרה.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out shadow-lg"
            >
              התקשרו לקבלת שירות מיידי
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>
    </>
  );
}