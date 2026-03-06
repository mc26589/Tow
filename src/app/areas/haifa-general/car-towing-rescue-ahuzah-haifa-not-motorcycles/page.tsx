import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";



export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חירום חיפה והקריות",
    "description": "שירותי גרירה וחילוץ 24/7 לרכבים פרטיים, מסחריים ו-4X4 בחיפה, הקריות והסביבה. אנו לא מספקים שירותי גרירה לאופנועים, קטנועים או רכבים דו-גלגליים.",
    "url": "https://yourdomain.com/car-towing-rescue-ahuzah-haifa-not-motorcycles",
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
      "latitude": 32.818, // Approximate center of Haifa
      "longitude": 34.99 // Approximate center of Haifa
    },
    "serviceType": [
      "גרירת רכב",
      "חילוץ רכב",
      "שירותי דרך",
      "גרירת רכב פרטי",
      "גרירת רכב מסחרי",
      "גרירת רכב שטח 4X4"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            שירותי גרירה וחילוץ לרכבים באחוזה, חיפה - לא לאופנועים
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            נתקעתם עם רכב פרטי, מסחרי או 4X4 באחוזה, חיפה? אנו כאן לסייע 24/7 עם שירות מהיר, מקצועי ובמחיר הוגן.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out shadow-lg flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-5 w-5 fill-current"><path d="M164.9 24.6c-7.7-18.6-28-28.8-47.8-24.8L30.9 46.6C12.4 50.2 0 67.5 0 87.8c0 10.6 4.1 20.2 10.9 27.4l112 112c14.6 14.6 34 22.6 54.5 22.6c19.9 0 39.1-7.9 53.3-22.1l112-112c8.2-8.2 12.9-19.5 12.9-31.4c0-12.1-4.7-23.4-12.9-31.6L217.7 24.6c-14.2-14.2-33.4-22.1-53.3-22.1zM480 352c0 12.1-4.7 23.4-12.9 31.6L352.3 487.4c-14.2 14.2-33.4 22.1-53.3 22.1c-19.9 0-39.1-7.9-53.3-22.1l-112-112c-14.6-14.6-22.6-34-22.6-54.5c0-19.9 7.9-39.1 22.1-53.3l112-112c8.2-8.2 19.5-12.9 31.4-12.9c12.1 0 23.4 4.7 31.6 12.9L487.4 294.3c18.6 7.7 28.8 28 24.8 47.8L480 352z" /></svg>
              <span>התקשרו עכשיו</span>
            </a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 md:py-16">
        <section className="bg-gray-900 text-white py-8 px-4 md:px-8 rounded-lg shadow-lg mb-8 border border-gray-700">
          <h2 className="text-3xl font-bold mb-4 text-center text-red-400">חשוב לדעת: אנו לא גוררים אופנועים</h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            מחפש שירותי גרירה לאופנוע כבד באחוזה, חיפה? חשוב לנו להבהיר: אנו מתמחים בגרירה וחילוץ של רכבים פרטיים, מסחריים ורכבי שטח (4X4) בלבד, ואיננו מספקים שירותי גרירה לאופנועים, קטנועים או רכבים דו-גלגליים מכל סוג.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-center">
            עם זאת, אם נתקעתם עם רכב פרטי, מסחרי או רכב שטח באזור אחוזה, חיפה, אנו זמינים 24/7 לספק לכם שירותי גרירה וחילוץ מהירים, מקצועיים ובמחירים הוגנים. אנו מגיעים במהירות לכל נקודה באחוזה ובשכונות הסמוכות בחיפה, ומעניקים פתרון יעיל לכל תקלה או תאונה.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-5 w-5 fill-current"><path d="M164.9 24.6c-7.7-18.6-28-28.8-47.8-24.8L30.9 46.6C12.4 50.2 0 67.5 0 87.8c0 10.6 4.1 20.2 10.9 27.4l112 112c14.6 14.6 34 22.6 54.5 22.6c19.9 0 39.1-7.9 53.3-22.1l112-112c8.2-8.2 12.9-19.5 12.9-31.4c0-12.1-4.7-23.4-12.9-31.6L217.7 24.6c-14.2-14.2-33.4-22.1-53.3-22.1zM480 352c0 12.1-4.7 23.4-12.9 31.6L352.3 487.4c-14.2 14.2-33.4 22.1-53.3 22.1c-19.9 0-39.1-7.9-53.3-22.1l-112-112c-14.6-14.6-22.6-34-22.6-54.5c0-19.9 7.9-39.1 22.1-53.3l112-112c8.2-8.2 19.5-12.9 31.4-12.9c12.1 0 23.4 4.7 31.6 12.9L487.4 294.3c18.6 7.7 28.8 28 24.8 47.8L480 352z" /></svg>
              <span>התקשרו עכשיו לקבלת שירות</span>
            </a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </section>

        <section className="mb-12 bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">שירותי גרירה וחילוץ לרכבים באחוזה, חיפה</h2>
          <p className="text-lg leading-relaxed mb-6">
            אנו מציעים שירותי גרירה וחילוץ מקצועיים ומהירים לכל סוגי הרכבים (למעט אופנועים) באזור אחוזה, חיפה והשכונות הסמוכות. בין אם נתקעתם עקב תקלה מכנית, תאונה, פנצ'ר או כל סיבה אחרת, צוות הגרריסטים המנוסה שלנו עומד לרשותכם 24 שעות ביממה, 7 ימים בשבוע.
          </p>
          <ul className="list-disc list-inside text-lg space-y-2 mb-6 ml-4">
            <li><strong className="text-blue-300">זמינות 24/7:</strong> שירותי חירום בכל שעה, ביום ובלילה.</li>
            <li><strong className="text-blue-300">מענה מהיר:</strong> הגעה מהירה למקום האירוע באחוזה ובכל חיפה.</li>
            <li><strong className="text-blue-300">מקצועיות ואמינות:</strong> צוות מיומן וציוד גרירה מתקדם.</li>
            <li><strong className="text-blue-300">מחירים הוגנים:</strong> הצעת מחיר שקופה בטלפון, ללא הפתעות.</li>
            <li><strong className="text-blue-300">מגוון רכבים:</strong> גרירת רכבים פרטיים, מסחריים ורכבי שטח (4X4).</li>
          </ul>
          <p className="text-lg leading-relaxed text-center font-semibold">
            אל תהססו להתקשר אלינו בכל מצב חירום. אנו נשמח לעמוד לשירותכם ולספק פתרון מהיר ויעיל.
          </p>
        </section>

        <section className="mb-12 bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">אזורי שירות נוספים בחיפה והקריות</h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            אנו מספקים שירותי גרירה וחילוץ לא רק באחוזה, אלא בכל רחבי חיפה והקריות, כולל:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-lg">
            <div className="bg-gray-800 p-4 rounded-md border border-gray-700">כרמל צרפתי</div>
            <div className="bg-gray-800 p-4 rounded-md border border-gray-700">הדר הכרמל</div>
            <div className="bg-gray-800 p-4 rounded-md border border-gray-700">נווה שאנן</div>
            <div className="bg-gray-800 p-4 rounded-md border border-gray-700">בת גלים</div>
            <div className="bg-gray-800 p-4 rounded-md border border-gray-700">צ'ק פוסט</div>
            <div className="bg-gray-800 p-4 rounded-md border border-gray-700">קריית חיים</div>
            <div className="bg-gray-800 p-4 rounded-md border border-gray-700">קריית מוצקין</div>
            <div className="bg-gray-800 p-4 rounded-md border border-gray-700">קריית ביאליק</div>
            <div className="bg-gray-800 p-4 rounded-md border border-gray-700">קריית ים</div>
          </div>
        </section>

        <section className="text-center bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">צריכים גרירה או חילוץ לרכב?</h2>
          <p className="text-xl mb-8">
            לשירות מהיר, מקצועי ובמחיר הוגן באחוזה, חיפה והסביבה – צרו קשר עכשיו!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out shadow-lg flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-5 w-5 fill-current"><path d="M164.9 24.6c-7.7-18.6-28-28.8-47.8-24.8L30.9 46.6C12.4 50.2 0 67.5 0 87.8c0 10.6 4.1 20.2 10.9 27.4l112 112c14.6 14.6 34 22.6 54.5 22.6c19.9 0 39.1-7.9 53.3-22.1l112-112c8.2-8.2 12.9-19.5 12.9-31.4c0-12.1-4.7-23.4-12.9-31.6L217.7 24.6c-14.2-14.2-33.4-22.1-53.3-22.1zM480 352c0 12.1-4.7 23.4-12.9 31.6L352.3 487.4c-14.2 14.2-33.4 22.1-53.3 22.1c-19.9 0-39.1-7.9-53.3-22.1l-112-112c-14.6-14.6-22.6-34-22.6-54.5c0-19.9 7.9-39.1 22.1-53.3l112-112c8.2-8.2 19.5-12.9 31.4-12.9c12.1 0 23.4 4.7 31.6 12.9L487.4 294.3c18.6 7.7 28.8 28 24.8 47.8L480 352z" /></svg>
              <span>התקשרו אלינו</span>
            </a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </section>
      </main>
    </div>
  );
}
