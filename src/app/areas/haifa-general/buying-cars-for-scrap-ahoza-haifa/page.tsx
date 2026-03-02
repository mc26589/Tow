import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata = {
  title: "קונה רכבים לפירוק באחוזה חיפה | שירות מהיר ואמין",
  description: "מחפשים קונה רכבים לפירוק באחוזה חיפה? אנו קונים רכבים ישנים, תקולים ולאחר תאונה במחירים הוגנים ובשירות מהיר בחיפה והקריות. צרו קשר לקבלת הצעת מחיר!",
  keywords: ["קונה רכבים לפירוק באחוזה חיפה", "פירוק רכבים חיפה", "גריטת רכבים אחוזה", "קניית רכבים ישנים חיפה", "רכב לפירוק חיפה", "פינוי רכבים תקולים חיפה", "קונה רכבים חיפה והקריות"],
  alternates: {
    canonical: "https://yourdomain.com/buying-cars-for-scrap-ahoza-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וקניית רכבים לפירוק בחיפה והקריות",
    "description": "קונים רכבים לפירוק באחוזה חיפה והסביבה. שירות מהיר, אמין ומחירים הוגנים לרכבים ישנים, תקולים ולאחר תאונה.",
    "url": "https://yourdomain.com/buying-cars-for-scrap-ahoza-haifa",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "areaServed": [
      {
        "@type": "Place",
        "name": "חיפה והקריות"
      },
      {
        "@type": "Place",
        "name": "אחוזה חיפה"
      }
    ],
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
      "latitude": 32.7940,
      "longitude": 34.9896
    },
    "priceRange": "$",
    "serviceType": [
      "רכישת רכבים לפירוק",
      "גריטת רכבים",
      "פינוי רכבים תקולים",
      "קניית רכבים ישנים",
      "קניית רכבים לאחר תאונה",
      "שירותי גרירה"
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
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            קונה רכבים לפירוק באחוזה חיפה – שירות מהיר ואמין
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            מחפשים שירות אמין ומהיר לקניית רכבים לפירוק באחוזה חיפה? הגעתם למקום הנכון! אנו מתמחים ברכישת כל סוגי הרכבים המיועדים לפירוק, גריטה או קבלת רכב ישן/תקול/לאחר תאונה, ומציעים מחירים הוגנים ותשלום במזומן.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out shadow-lg"
            >
              התקשרו עכשיו
            </a>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 md:py-16 text-gray-800 dark:text-gray-200">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
            למה למכור לנו את הרכב לפירוק באחוזה חיפה?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                מחירים הוגנים ותשלום מיידי
              </h3>
              <p className="mb-4">
                אנו מציעים הצעות מחיר אטרקטיביות והוגנות עבור רכבים לפירוק, בהתאם למצבם ולשווי החלפים. התשלום מתבצע במזומן ובמקום, ללא עיכובים.
              </p>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                שירות מהיר ויעיל
              </h3>
              <p className="mb-4">
                אנו מבינים את הצורך בפתרון מהיר. צוותנו זמין להגיע לאסוף את הרכב מכל מקום באחוזה חיפה והסביבה תוך זמן קצר, ולבצע את כל התהליך ביעילות ובמקצועיות.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                פינוי וגרירה חינם
              </h3>
              <p className="mb-4">
                שירותי הגרירה והפינוי של הרכב מביתכם או מכל מקום אחר באחוזה חיפה ניתנים ללא עלות נוספת. אנו דואגים לכל הלוגיסטיקה.
              </p>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                תהליך חוקי ושקוף
              </h3>
              <p className="mb-4">
                אנו פועלים ברישיון מלא ובהתאם לכל התקנות. אנו מסייעים בביצוע העברת הבעלות ודואגים לכל הניירת הנדרשת, כך שתוכלו להיות בראש שקט.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
            אילו סוגי רכבים אנו קונים לפירוק?
          </h2>
          <p className="mb-4">
            אנו קונים מגוון רחב של כלי רכב המיועדים לפירוק או גריטה, כולל:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><span className="font-semibold dark:text-white">רכבים פרטיים:</span> מכל הסוגים והדגמים, ישנים, תקולים או לאחר תאונה.</li>
            <li><span className="font-semibold dark:text-white">רכבים מסחריים:</span> טנדרים, ואנים ורכבי עבודה קלים.</li>
            <li><span className="font-semibold dark:text-white">רכבי שטח (4X4):</span> ג'יפים ורכבי שטח שאינם כשירים לנסיעה.</li>
          </ul>
          <p className="font-bold text-red-600 dark:text-red-400">
            שימו לב: אנו איננו קונים או גוררים אופנועים.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
            תהליך מכירת הרכב לפירוק באחוזה חיפה
          </h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <span className="font-semibold dark:text-white">יצירת קשר:</span> צרו עמנו קשר בטלפון או בוואטסאפ. ספרו לנו מעט על הרכב שלכם (שנת ייצור, דגם, מצב כללי).
            </li>
            <li>
              <span className="font-semibold dark:text-white">קבלת הצעת מחיר:</span> לאחר קבלת הפרטים, נספק לכם הצעת מחיר הוגנת ומשתלמת בטלפון.
            </li>
            <li>
              <span className="font-semibold dark:text-white">תיאום איסוף:</span> אם תאשרו את ההצעה, נתאם מועד נוח לאיסוף הרכב ממיקומכם באחוזה חיפה או בסביבה.
            </li>
            <li>
              <span className="font-semibold dark:text-white">תשלום ופינוי:</span> נגיע עם גרר, נבצע את התשלום במזומן במקום, ונגרור את הרכב ללא עלות.
            </li>
          </ol>
        </section>

        <section className="text-center bg-blue-700 dark:bg-blue-900 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            צריכים למכור רכב לפירוק באחוזה חיפה?
          </h2>
          <p className="text-lg mb-6">
            אל תחכו! קבלו הצעת מחיר אטרקטיבית עוד היום ופתרו את בעיית הרכב הישן או התקול שלכם במהירות ובקלות.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out shadow-lg"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
