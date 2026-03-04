import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

// Mock BUSINESS_INFO and WhatsAppCTA for demonstration purposes.
// In a real Next.js app, these would be imported from your actual project structure.
const BUSINESS_INFO = {
  phone: "972501234567", // Example phone number
  whatsapp: "972501234567", // Example WhatsApp number
};

const WhatsAppCTA = ({ cityName }: { cityName: string }) => (
  <a
    href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 text-white hover:bg-green-600 transition-colors duration-300 font-semibold py-3 px-8 rounded-full shadow-lg text-lg flex items-center justify-center"
  >
    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.04 2C7.34 2 3.58 5.76 3.58 10.46c0 1.95.62 3.76 1.68 5.2l-1.1 4.03 4.14-1.09c1.38.75 2.97 1.16 4.74 1.16 4.7 0 8.46-3.76 8.46-8.46S16.74 2 12.04 2zm4.56 12.45c-.19.3-.74.54-1.06.58-.32.04-.6-.07-.85-.15-.25-.08-1.47-.68-1.7-.76-.23-.08-.4-.12-.56.12-.16.24-.64.76-.78.92-.14.16-.29.18-.54.08-.25-.1-.99-.36-1.89-1.16-.7-.62-1.17-1.39-1.31-1.64-.14-.25-.02-.38.1-.5-.12-.16.27-.42.39-.59.12-.16.16-.3.24-.46.08-.16.04-.3-.02-.42-.06-.12-.56-1.34-.77-1.83-.2-.48-.4-.42-.56-.43-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.33-.26.26-.99.96-.99 2.34 0 1.38 1.02 2.71 1.16 2.9 0 .02 1.99 3.06 4.93 4.34 2.31.99 2.76.88 3.25.83.49-.05 1.2-.49 1.38-.98.19-.49.19-.9.13-.98-.06-.08-.2-.13-.42-.24z"/>
    </svg>
    וואטסאפ: {cityName}
  </a>
);

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ 24/7 באחוזה חיפה והקריות",
    "description": "שירותי גרירה וחילוץ מהירים ומקצועיים למשאיות, רכבים פרטיים, מסחריים ורכבי שטח באחוזה, חיפה והקריות, 24 שעות ביממה, 7 ימים בשבוע. מענה מיידי לתאונות ותקלות.",
    "url": "https://yourdomain.com/truck-accident-recovery-service-ahuzah-haifa",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$",
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
    "serviceType": [
      "שירותי גרירה",
      "חילוץ רכבים",
      "גרירת משאיות",
      "חילוץ משאיות",
      "גרירת רכבים מסחריים",
      "חילוץ רכבים מסחריים",
      "גרירת רכבי שטח",
      "חילוץ רכבי שטח",
      "שירותי דרך"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            שירות חילוץ תאונות משאיות באחוזה חיפה – זמינות 24/7
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            מענה מהיר ומקצועי 24/7 לגרירה וחילוץ משאיות, רכבים מסחריים ורכבי שטח באזור אחוזה, חיפה והקריות.
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

      <main className="bg-gray-900 text-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-400">
              מחפשים שירות חילוץ תאונות משאיות מקצועי ומהיר באחוזה, חיפה?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
              אנו מספקים מענה מיידי 24 שעות ביממה, 7 ימים בשבוע, לכל צורך בגרירה וחילוץ משאיות, רכבים מסחריים ורכבי שטח באזור אחוזה, חיפה והקריות. צוות המומחים שלנו מצויד בציוד המתקדם ביותר ומגיע אליכם במהירות לטפל בכל תקלה או תאונה, תוך הקפדה על בטיחות ויעילות מרבית. אנו מבינים את הדחיפות שבמצבי חירום ומחויבים להעניק לכם שירות אמין ומהיר במחירים הוגנים.
            </p>
          </section>

          <section className="mb-12 bg-gray-800 p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-300">למה לבחור בנו לחילוץ משאית באחוזה?</h2>
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li><strong className="text-blue-200">זמינות 24/7:</strong> אנו זמינים עבורכם בכל שעה, ביום ובלילה, כולל סופי שבוע וחגים.</li>
              <li><strong className="text-blue-200">מענה מהיר:</strong> צוותי החילוץ שלנו פרוסים באזור ומגיעים במהירות לכל נקודה באחוזה, חיפה והקריות.</li>
              <li><strong className="text-blue-200">ציוד מתקדם:</strong> אנו משתמשים בגוררים וציוד חילוץ ייעודי וחדיש המתאים למשאיות כבדות, רכבים מסחריים ורכבי שטח.</li>
              <li><strong className="text-blue-200">צוות מנוסה:</strong> נהגים מיומנים ומקצועיים בעלי ניסיון רב בטיפול במגוון רחב של תקלות ותאונות.</li>
              <li><strong className="text-blue-200">מחירים הוגנים:</strong> אנו מציעים שקיפות מלאה והצעת מחיר אטרקטיבית בטלפון, ללא הפתעות.</li>
              <li><strong className="text-blue-200">שירות אדיב ומקצועי:</strong> יחס אישי ותמיכה מלאה לאורך כל תהליך החילוץ.</li>
            </ul>
          </section>

          <section className="mb-12 bg-gray-800 p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-300">שירותי הגרירה והחילוץ שלנו באחוזה, חיפה:</h2>
            <p className="text-lg mb-4">אנו מתמחים במגוון רחב של שירותי גרירה וחילוץ, ואיננו מספקים שירות לאופנועים:</p>
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li><strong className="text-blue-200">גרירת משאיות:</strong> לאחר תאונה, תקלה מכנית או כל מצב חירום אחר.</li>
              <li><strong className="text-blue-200">חילוץ רכבים מסחריים:</strong> כולל טנדרים, ואנים ורכבים מסחריים קלים וכבדים.</li>
              <li><strong className="text-blue-200">גרירת רכבי שטח 4X4:</strong> חילוץ מכל תוואי שטח, בוץ, חול או מכשולים.</li>
              <li><strong className="text-blue-200">הוצאת רכבים:</strong> מבוץ, חול, תעלה או כל מצב שבו הרכב נתקע.</li>
              <li><strong className="text-blue-200">שירותי דרך קלים:</strong> החלפת גלגל, התנעת רכב, אספקת דלק (במידת הצורך).</li>
              <li><strong className="text-blue-200">הובלת רכבים:</strong> העברת רכבים תקינים ממקום למקום.</li>
            </ul>
          </section>

          <section className="mb-12 bg-gray-800 p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-300">אזורי שירות עיקריים באחוזה וחיפה:</h2>
            <p className="text-lg mb-4">אנו מספקים שירות מהיר ויעיל לכל שכונות אחוזה, חיפה והקריות, כולל:</p>
            <ul className="list-disc list-inside space-y-3 text-lg grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <li>אחוזה</li>
              <li>כרמל צרפתי</li>
              <li>מרכז הכרמל</li>
              <li>נווה שאנן</li>
              <li>רמת אשכול</li>
              <li>בת גלים</li>
              <li>הדר הכרמל</li>
              <li>קריית אליעזר</li>
              <li>וכל שאר שכונות חיפה והקריות.</li>
            </ul>
          </section>

          <section className="text-center bg-blue-600 p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">צריכים חילוץ דחוף באחוזה, חיפה?</h2>
            <p className="text-xl md:text-2xl mb-8 text-white">
              אל תחכו! צרו קשר עכשיו וצוות מקצועי בדרך אליכם.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <WhatsAppCTA cityName="Haifa and Krayot" />
              <a
                href={`tel:+${BUSINESS_INFO.phone}`}
                className="bg-white text-blue-700 hover:bg-gray-200 transition-colors duration-300 font-semibold py-3 px-8 rounded-full shadow-lg text-lg"
              >
                התקשרו עכשיו: {BUSINESS_INFO.phone}
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
