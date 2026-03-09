import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";

export const metadata = {
  title: "גרירה וחילוץ רכבים בכביש 22 קריות - שירות מהיר 24/7",
  description: "נתקעתם עם רכב פרטי, מסחרי או 4X4 בכביש 22 או באזור הקריות? אנו מספקים שירותי גרירה וחילוץ חירום מהירים ואמינים 24/7. שימו לב: איננו גוררים אופנועים.",
  alternates: {
    canonical: "https://yourdomain.com/sherutei-grira-hilutz-krayot-kavish-22",
  },
  openGraph: {
    title: "גרירה וחילוץ רכבים בכביש 22 קריות - שירות מהיר 24/7",
    description: "נתקעתם עם רכב פרטי, מסחרי או 4X4 בכביש 22 או באזור הקריות? אנו מספקים שירותי גרירה וחילוץ חירום מהירים ואמינים 24/7. שימו לב: איננו גוררים אופנועים.",
    url: "https://yourdomain.com/sherutei-grira-hilutz-krayot-kavish-22",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // Replace with actual OG image
        alt: "שירותי גרירה וחילוץ חיפה והקריות",
      },
    ],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "description": "שירותי גרירה וחילוץ חירום 24/7 לרכבים פרטיים, מסחריים ורכבי שטח (4X4) בכביש 22, חיפה והקריות. זמינות מיידית ומחירים הוגנים. שימו לב: איננו גוררים אופנועים.",
    "url": "https://yourdomain.com/sherutei-grira-hilutz-krayot-kavish-22",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$",
    "areaServed": {
      "@type": "Place",
      "name": "חיפה והקריות",
      "geo": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 32.8185, // Approx center of Krayot
          "longitude": 35.0500,
        },
        "geoRadius": 15000, // 15km radius
      },
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59",
    },
    "serviceType": ["גרירת רכבים", "חילוץ רכבים", "שירותי דרך", "החלפת גלגל", "התנעת רכב"],
    "image": "https://yourdomain.com/images/towing-truck.jpg", // Placeholder
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
            גרירה וחילוץ רכבים בכביש 22 קריות - שירות מהיר 24/7
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            מחפשים שירותי גרירה וחילוץ לאופנוע כבד בכביש 22 בקריות? חשוב לנו לציין כי אנו מתמחים בגרירה וחילוץ של רכבים פרטיים, רכבים מסחריים ורכבי שטח (4X4) בלבד, ואיננו מספקים שירותי גרירה לאופנועים. אם רכבכם נתקע בכביש 22 או באזור הקריות וזקוק לגרירה או חילוץ מהיר, אנו זמינים 24/7 להעניק לכם שירות מקצועי ואמין.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg"
            >
              התקשרו עכשיו: {BUSINESS_INFO.displayPhone}
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            שירותי גרירה וחילוץ מקצועיים בכביש 22 ובקריות
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">גרירת רכבים פרטיים</h3>
              <p className="text-gray-300">
                נתקעתם עם הרכב הפרטי בכביש 22, בחיפה או באחת מערי הקריות? אנו מספקים שירותי גרירה מהירים ובטוחים לכל סוגי הרכבים הפרטיים, 24 שעות ביממה, 7 ימים בשבוע.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">חילוץ רכבים מסחריים</h3>
              <p className="text-gray-300">
                רכב מסחרי שנתקע יכול לגרום להפסדים. אנו מציעים שירותי חילוץ וגרירה מהירים לרכבים מסחריים קלים ובינוניים, כדי שתוכלו לחזור לשגרה במהירות.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">גרירת רכבי שטח (4X4)</h3>
              <p className="text-gray-300">
                בין אם נתקעתם בשטח או בכביש, אנו מצוידים בציוד המתאים לגרירה וחילוץ של רכבי 4X4 מכל מצב, תוך שמירה על בטיחות הרכב שלכם.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">שירותי דרך נוספים</h3>
              <p className="text-gray-300">
                בנוסף לגרירה וחילוץ, אנו מציעים שירותי דרך נפוצים כמו החלפת גלגל, התנעת רכב וסיוע במקרים של תדלוק שגוי או חוסר דלק.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">זמינות 24/7</h3>
              <p className="text-gray-300">
                תקלות לא מחכות לשעות הפעילות. לכן, אנו זמינים עבורכם 24 שעות ביממה, 7 ימים בשבוע, כולל חגים ושבתות, למענה מהיר בכל עת.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">מחירים הוגנים ושקופים</h3>
              <p className="text-gray-300">
                אנו מאמינים בשקיפות מלאה. קבלו הצעת מחיר הוגנת ומפורטת בטלפון, ללא הפתעות, לפני תחילת השירות.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-lg mb-6">
              נתקעתם? אל תחכו! צרו קשר עכשיו לקבלת שירות מהיר ומקצועי.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`tel:+${BUSINESS_INFO.phone}`}
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg"
              >
                התקשרו עכשיו: {BUSINESS_INFO.displayPhone}
              </a>
              <WhatsAppCTA cityName="Haifa and Krayot" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            למה לבחור בנו לשירותי גרירה וחילוץ בקריות?
          </h2>
          <ul className="list-disc list-inside text-lg max-w-2xl mx-auto space-y-3 text-gray-300">
            <li><span className="font-semibold text-yellow-400">זמינות מיידית:</span> אנו מגיעים במהירות לכל נקודה בכביש 22 ובאזור הקריות.</li>
            <li><span className="font-semibold text-yellow-400">מקצועיות ואמינות:</span> צוות מנוסה וציוד חדיש מבטיחים טיפול בטוח ויעיל.</li>
            <li><span className="font-semibold text-yellow-400">שירות 24/7:</span> תמיד זמינים, בכל שעה ובכל יום.</li>
            <li><span className="font-semibold text-yellow-400">מחירים הוגנים:</span> שקיפות מלאה והצעות מחיר אטרקטיביות.</li>
            <li><span className="font-semibold text-yellow-400">כיסוי נרחב:</span> חיפה, הקריות, כביש 22 והסביבה.</li>
          </ul>
          <div className="mt-10">
            <p className="text-xl font-semibold mb-4">
              זקוקים לעזרה? אנחנו כאן בשבילכם!
            </p>
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-10 py-4 rounded-full text-xl font-bold transition-colors duration-300 shadow-lg"
            >
              חייגו עכשיו לקבלת שירות מהיר!
            </a>
          </div>
        </div>
      </section>
    </>
  );
}