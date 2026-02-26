import Script from 'next/script';

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "Towing Rescue Haifa",
    "description": "Affordable flatbed towing and emergency rescue services in Haifa and Krayot, including Route 22. Available 24/7 with transparent pricing starting from 250 ILS.",
    "url": "https://www.towingrescuehaifa.co.il/affordable-flatbed-towing-route-22-krayot-area",
    "telephone": "050-XXXXXXX",
    "priceRange": "250 ILS - 600 ILS",
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
      "latitude": 32.8200,
      "longitude": 35.0700
    },
    "serviceType": [
      "Flatbed Towing",
      "Emergency Towing",
      "Roadside Assistance",
      "Vehicle Recovery",
      "Motorcycle Towing"
    ],
    "hasOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Affordable Flatbed Towing Route 22 Krayot Area"
      },
      "priceCurrency": "ILS",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": 250,
        "maxPrice": 600
      },
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
          "name": "Route 22"
        }
      ]
    }
  };

  return (
    <>
      <Script
        id="json-ld-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-right">גרר שטוח במחיר נוח כביש 22 אזור הקריות</h1>
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 text-right">
          <p className="text-lg md:text-xl text-gray-800 mb-4 leading-relaxed">
            <strong className="text-blue-600">כן, אנו מספקים שירותי גרירה שטוחה במחיר נוח במיוחד לאורך כביש 22 ובכל אזור הקריות.</strong>
            "Towing Rescue Haifa" מתמחה במתן מענה מהיר, אמין ובטוח לכל צרכי הגרירה שלכם, 24 שעות ביממה, 7 ימים בשבוע.
          </p>
          <p className="text-md md:text-lg text-gray-700 mb-4 leading-relaxed">
            בין אם נתקעתם עם רכב פרטי, רכב שטח, או אופנוע, צוות המומחים שלנו מצויד בגררים שטוחים חדישים המבטיחים הובלה בטוחה ללא נזקים נוספים.
            אנו מבינים את הצורך בשירות מהיר ויעיל, במיוחד בכבישים ראשיים כמו כביש 22.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded-md">
            <h2 className="font-semibold text-xl mb-2">שקיפות במחיר ושירות מקצועי:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-blue-700">מחירים תחרותיים:</strong> שירותי גרירה שטוחה <strong className="text-green-600">החל מ-250 ש"ח</strong>. אנו מתחייבים למחיר הוגן ושקוף ללא הפתעות.
              </li>
              <li>
                <strong className="text-blue-700">רישיון וביטוח מלא:</strong> כחברה מורשית ומבוטחת במלואה, "Towing Rescue Haifa" מבטיחה שקט נפשי ובטיחות מרבית לרכבכם.
              </li>
              <li>
                <strong className="text-blue-700">זמינות 24/7:</strong> אנו זמינים עבורכם בכל שעה, ביום ובלילה, כולל סופי שבוע וחגים.
              </li>
              <li>
                <strong className="text-blue-700">אזור שירות:</strong> חיפה והקריות, כולל כביש 22, כביש 4, כביש 70, וכל היישובים הסמוכים.
              </li>
            </ul>
          </div>
          <p className="text-md md:text-lg text-gray-700 mb-4 leading-relaxed">
            לשירות גרירה מהיר, אמין ובמחיר נוח באזור כביש 22 והקריות, צרו קשר עם <strong className="text-blue-600">Towing Rescue Haifa</strong>.
            אנו כאן כדי לעזור לכם לחזור לדרך בבטחה.
          </p>
          <div className="text-center mt-6">
            <p className="text-xl font-bold text-gray-900 mb-2">התקשרו עכשיו לקבלת שירות מיידי:</p>
            <a href="tel:050-XXXXXXX" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-2xl transition duration-300 ease-in-out">
              050-XXXXXXX
            </a>
            <p className="text-sm text-gray-600 mt-2">Towing Rescue Haifa - שירותי גרירה וחילוץ בחיפה והקריות</p>
          </div>
        </div>
      </section>
    </>
  );
}