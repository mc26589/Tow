import Script from 'next/script';

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "Towing Rescue Haifa",
    "description": "שירותי גרירת חירום לאופנועים כבדים לאחר תאונה באחוזה, חיפה והקריות. זמינות 24/7, מחירים שקופים, צוות מקצועי ומורשה.",
    "telephone": "050-XXXXXXX",
    "url": "https://www.towingrescuehaifa.co.il/emergency-towing-heavy-motorcycle-accident-ahuzah-haifa",
    "image": "https://www.towingrescuehaifa.co.il/images/motorcycle-towing-haifa.jpg",
    "priceRange": "250 ILS - 800 ILS",
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
    "areaServed": [
      {
        "@type": "Place",
        "name": "Haifa",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 32.7940,
          "longitude": 34.9896
        }
      },
      {
        "@type": "Place",
        "name": "Krayot",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 32.8200,
          "longitude": 35.0700
        }
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.7940,
      "longitude": 34.9896
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Haifa",
      "addressCountry": "IL"
    },
    "serviceType": [
      "Emergency Motorcycle Towing",
      "Heavy Motorcycle Accident Recovery",
      "24/7 Towing Service",
      "Motorcycle Breakdown Assistance"
    ]
  };

  return (
    <>
      <Script
        id="json-ld-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gray-50 text-gray-800">
        <div className="container mx-auto p-4 py-8">
          <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-700" dir="rtl">
            גרירת חירום לאופנוע כבד לאחר תאונה באחוזה, חיפה
          </h1>

          <section className="bg-white shadow-lg rounded-lg p-6 mb-8 text-right" dir="rtl">
            <p className="text-lg mb-4 leading-relaxed">
              <strong>כן, אנו מספקים שירותי גרירת חירום לאופנועים כבדים לאחר תאונה באזור אחוזה, חיפה והקריות, 24 שעות ביממה, 7 ימים בשבוע.</strong>
              צוות <span className="font-semibold text-blue-600">Towing Rescue Haifa</span> זמין לקריאה מיידית כדי לסייע לך במצב חירום, בין אם מדובר בתאונת דרכים, תקלה מכנית או כל צורך אחר בגרירה דחופה של אופנוע כבד. אנו מבינים את הדחיפות והצורך בטיפול מקצועי ומהיר.
            </p>

            <h2 className="text-2xl font-bold mb-3 text-blue-700">שירותי גרירת חירום לאופנועים כבדים באחוזה, חיפה</h2>
            <p className="mb-4 leading-relaxed">
              אנו מבינים את הדחיפות והרגישות הכרוכה בגרירת אופנוע כבד לאחר תאונה, במיוחד באזור ספציפי כמו אחוזה בחיפה. השירות המקיף שלנו כולל:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li><strong>זמינות 24/7:</strong> מענה מהיר בכל שעה, ביום ובלילה, כדי להבטיח שתקבלו עזרה כשאתם זקוקים לה ביותר.</li>
              <li><strong>ציוד גרירה מקצועי:</strong> רכבי גרירה ייעודיים לאופנועים כבדים, המצוידים במערכות אבטחה מתקדמות, המבטיחים שינוע בטוח וללא נזקים נוספים לאופנוע שלכם.</li>
              <li><strong>צוות מיומן ומנוסה:</strong> נהגים בעלי ניסיון רב בגרירת אופנועים מכל הסוגים, המכירים היטב את אזור חיפה והקריות, כולל דרכי גישה ונקודות מפתח.</li>
              <li><strong>טיפול מהיר ויעיל:</strong> הגעה מהירה למקום האירוע ופינוי האופנוע בבטיחות מרבית, תוך הקפדה על כללי הבטיחות והתקנים הנדרשים.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-3 text-blue-700">שקיפות, מהימנות ו-E-E-A-T – Towing Rescue Haifa</h2>
            <p className="mb-4 leading-relaxed">
              אנו ב-<span className="font-semibold text-blue-600">Towing Rescue Haifa</span> מחויבים לשקיפות מלאה, לשירות אמין ולמקצועיות ללא פשרות.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li><strong>מחיר שקוף והוגן:</strong> שירותי גרירת חירום לאופנועים כבדים באזור אחוזה, חיפה, <strong>החל מ-250 ש"ח</strong>. המחיר הסופי ייקבע לאחר הערכה טלפונית של המצב, סוג האופנוע והמרחק, ללא הפתעות.</li>
              <li><strong>חברה מורשית ומבוטחת:</strong> אנו חברה מורשית ומבוטחת במלואה, מה שמבטיח לכם שקט נפשי וכיסוי מלא במקרה הצורך. כל פעולות הגרירה מתבצעות על פי התקנים המחמירים ביותר.</li>
            </ul>
            <p className="mb-2 leading-relaxed"><strong>שם העסק:</strong> <strong className="text-blue-600">Towing Rescue Haifa</strong></p>
            <p className="mb-4 leading-relaxed"><strong>טלפון ליצירת קשר:</strong> <strong className="text-blue-600">050-XXXXXXX</strong> (זמין 24/7 לכל קריאה דחופה)</p>

            <h2 className="text-2xl font-bold mb-3 text-blue-700">אזורי שירות עיקריים</h2>
            <p className="mb-4 leading-relaxed">
              אנו משרתים את כל אזור חיפה והקריות, כולל שכונת אחוזה, כרמל, הדר, נווה שאנן, בת גלים, קרית ים, קרית מוצקין, קרית ביאליק, קרית אתא ועוד. אנו מכירים כל פינה באזור ומסוגלים להגיע אליכם במהירות.
            </p>

            <p className="text-lg mt-6 text-center font-semibold text-blue-800">
              במקרה חירום של תאונת אופנוע כבד באחוזה, חיפה, אל תהססו להתקשר אלינו מיד. אנו כאן כדי לעזור לכם לחזור לשגרה במהירות ובבטחה!
            </p>
          </section>
        </div>
      </main>
    </>
  );
}