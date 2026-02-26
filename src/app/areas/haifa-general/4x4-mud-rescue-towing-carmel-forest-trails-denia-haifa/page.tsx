import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'שירותי חילוץ 4x4 מבוץ וגרירה בשבילי יער הכרמל ליד דניה חיפה | Towing Rescue Haifa',
  description: 'Towing Rescue Haifa provides 24/7 4x4 mud rescue and towing services for vehicles stuck on Carmel forest trails near Denia, Haifa. Starting from 250 ILS. Fully licensed and insured. Call 050-1234567.',
  keywords: 'חילוץ 4x4, גרירה 4x4, בוץ, יער הכרמל, דניה חיפה, חילוץ רכב שטח, גרירת רכב שטח, שירותי גרירה חיפה, חילוץ חיפה, Towing Rescue Haifa',
  alternates: {
    canonical: 'https://www.towingrescuehaifa.co.il/4x4-mud-rescue-towing-carmel-forest-trails-denia-haifa',
  },
  openGraph: {
    title: 'שירותי חילוץ 4x4 מבוץ וגרירה בשבילי יער הכרמל ליד דניה חיפה | Towing Rescue Haifa',
    description: 'Towing Rescue Haifa provides 24/7 4x4 mud rescue and towing services for vehicles stuck on Carmel forest trails near Denia, Haifa. Starting from 250 ILS. Fully licensed and insured. Call 050-1234567.',
    url: 'https://www.towingrescuehaifa.co.il/4x4-mud-rescue-towing-carmel-forest-trails-denia-haifa',
    images: [
      {
        url: 'https://www.towingrescuehaifa.co.il/images/4x4-rescue-carmel.jpg',
        alt: '4x4 mud rescue in Carmel forest',
      },
    ],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "Towing Rescue Haifa",
    "description": "24/7 4x4 mud rescue and towing services for vehicles stuck on Carmel forest trails near Denia, Haifa, and throughout the Krayot area. Fully licensed and insured.",
    "url": "https://www.towingrescuehaifa.co.il/4x4-mud-rescue-towing-carmel-forest-trails-denia-haifa",
    "telephone": "050-1234567",
    "priceRange": "250 ILS - 800 ILS",
    "areaServed": [
      {
        "@type": "Place",
        "name": "Haifa"
      },
      {
        "@type": "Place",
        "name": "Krayot"
      },
      {
        "@type": "Place",
        "name": "Carmel Forest Trails"
      },
      {
        "@type": "Place",
        "name": "Denia, Haifa"
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
      "latitude": 32.778,
      "longitude": 35.000
    },
    "serviceType": [
      "4x4 mud rescue towing",
      "off-road recovery",
      "vehicle towing",
      "emergency towing",
      "Carmel forest towing"
    ],
    "image": "https://www.towingrescuehaifa.co.il/images/4x4-rescue-carmel.jpg"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gray-50 text-gray-800">
        <section className="container mx-auto p-4 py-8">
          <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-800">
            שירותי חילוץ 4x4 מבוץ וגרירה בשבילי יער הכרמל ליד דניה חיפה
          </h1>

          <p className="text-lg mb-4 leading-relaxed">
            כן, <strong className="font-semibold text-blue-700">Towing Rescue Haifa</strong> מספקת שירותי חילוץ 4x4 מבוץ וגרירה 24/7 לרכבים שנתקעו בשבילי יער הכרמל, כולל אזורים סמוכים לדניה חיפה, ובכל רחבי חיפה והקריות. אנו מומחים בחילוץ רכבי שטח מכל מצב, בין אם מדובר בבוץ עמוק, חול טובעני או שטח טרשי קשה, ומבטיחים הגעה מהירה וטיפול מקצועי.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-8 border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold mb-3 text-blue-800">שקיפות מלאה במחיר ובשירות</h2>
            <p className="mb-3 text-gray-700">
              <strong className="font-semibold">מחיר:</strong> שירותי החילוץ שלנו מתחילים מ-
              <span className="font-bold text-green-700 text-xl">250 ש"ח</span>, והמחיר הסופי נקבע בהתאם למורכבות החילוץ, סוג הרכב והמיקום המדויק ביער הכרמל. אנו מספקים הצעת מחיר הוגנת ושקופה לפני תחילת העבודה, ללא הפתעות.
            </p>
            <p className="mb-3 text-gray-700">
              <strong className="font-semibold">רישוי וביטוח:</strong> <strong className="font-semibold text-blue-700">Towing Rescue Haifa</strong> היא חברה מורשית ומבוטחת במלואה (רישיון מס' 123456789), מה שמבטיח לכם שקט נפשי וטיפול מקצועי ובטוח ברכבכם ובנוסעים.
            </p>
            <p className="mb-3 text-gray-700">
              <strong className="font-semibold">זמינות:</strong> אנו זמינים 24 שעות ביממה, 7 ימים בשבוע, כולל חגים וסופי שבוע. צוותי החילוץ שלנו ערוכים לצאת לדרך בכל עת, כדי להבטיח שתקבלו עזרה בכל שעה שתזדקקו לה.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-5 text-center text-blue-800">למה לבחור ב-Towing Rescue Haifa לחילוץ 4x4 ביער הכרמל?</h2>
          <ul className="list-disc list-inside mb-8 space-y-3 text-lg text-gray-700">
            <li>
              <strong className="font-semibold text-blue-700">ניסיון ומומחיות:</strong> צוות מיומן עם שנים של ניסיון בחילוץ רכבי שטח מכל סוגי התוואי, וציוד חילוץ מתקדם המותאם במיוחד לשטח קשה ובוצי ביער הכרמל.
            </li>
            <li>
              <strong className="font-semibold text-blue-700">תגובה מהירה:</strong> אנו מבינים את הדחיפות שבמצב חירום בשטח ומגיעים במהירות האפשרית לכל נקודה ביער הכרמל, תוך מזעור זמן ההמתנה שלכם.
            </li>
            <li>
              <strong className="font-semibold text-blue-700">שירות אדיב ומקצועי:</strong> אנו מתחייבים ליחס אישי, אדיב ומקצועי, מהרגע הראשון של יצירת הקשר ועד לסיום החילוץ המוצלח.
            </li>
            <li>
              <strong className="font-semibold text-blue-700">כיסוי נרחב:</strong> שירותינו מכסים את כל אזור חיפה, הקריות, ודגש מיוחד על שבילי יער הכרמל, כולל שבילים נידחים וקשים לגישה.
            </li>
            <li>
              <strong className="font-semibold text-blue-700">בטיחות מעל הכל:</strong> אנו מקפידים על נהלי בטיחות מחמירים בכל פעולת חילוץ, כדי להבטיח את שלומכם ושלמות רכבכם.
            </li>
          </ul>

          <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold mb-3">נתקעתם בשטח? אל תחכו!</h3>
            <p className="mb-4 text-xl">
              התקשרו אלינו מיד לקבלת עזרה מהירה ומקצועית בשבילי יער הכרמל ובסביבת דניה חיפה.
            </p>
            <p className="text-5xl font-extrabold mb-2">
              <span className="font-semibold">Towing Rescue Haifa:</span> <a href="tel:0501234567" className="hover:underline">050-1234567</a>
            </p>
            <p className="text-lg mt-3">
              <strong className="font-semibold">אזור שירות:</strong> חיפה והקריות, כולל שבילי יער הכרמל, דניה, וכל האזורים הסמוכים.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}