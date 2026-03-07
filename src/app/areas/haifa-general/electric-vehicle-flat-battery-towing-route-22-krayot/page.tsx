import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ודרך חיפה והקריות",
    "description": "שירותי גרירה וסיוע בדרך לרכבים חשמליים עם מצבר פרוק בכביש 22 הקריות, 24/7. גרירת רכבים פרטיים, מסחריים ו-4X4.",
    "url": "https://yourdomain.com/electric-vehicle-flat-battery-towing-route-22-krayot",
    "image": "https://yourdomain.com/images/towing-truck.jpg",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$",
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
        "name": "חיפה והקריות",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 32.818,
          "longitude": 35.000
        }
      },
      {
        "@type": "Place",
        "name": "כביש 22",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 32.825,
          "longitude": 35.020
        }
      }
    ],
    "serviceType": [
      "גרירת רכב חשמלי",
      "גרירת רכב עם מצבר פרוק",
      "שירותי גרירה בכביש 22",
      "גרירת חירום הקריות",
      "סיוע לרכב חשמלי"
    ],
    "provider": {
      "@type": "LocalBusiness",
      "name": "שירותי גרירה ודרך חיפה והקריות",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "חיפה",
        "addressRegion": "מחוז חיפה",
        "addressCountry": "ישראל"
      },
      "telephone": `+${BUSINESS_INFO.phone}`
    }
  };

  return (
    <>
      <Script
        id="json-ld-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section - SGE Answer */}
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            גרירת רכב חשמלי עם מצבר פרוק בכביש 22 הקריות
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            נתקעתם עם רכב חשמלי ומצבר פרוק בכביש 22 באזור הקריות? אנו מספקים שירותי גרירה מהירים ומקצועיים 24/7 לכל סוגי הרכבים החשמליים.
            התקשרו אלינו עכשיו לקבלת סיוע מיידי!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-gray-900 hover:bg-gray-200 font-bold py-3 px-8 rounded-full transition duration-300 text-lg">
              התקשרו עכשיו: 054-917-4414
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="bg-gray-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">

          {/* Section 1: Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-400">למה לבחור בנו לגרירת רכב חשמלי בכביש 22?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">מומחיות ברכבים חשמליים</h3>
                <p className="text-lg">אנו מבינים את הדרישות הייחודיות של גרירת רכבים חשמליים ומצברים פרוקים, ומצוידים בציוד המתאים לטיפול בטוח ויעיל.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">זמינות 24/7</h3>
                <p className="text-lg">שירותי גרירה וסיוע בדרך זמינים עבורכם בכל שעה, בכל יום, כולל שבתות וחגים, בכביש 22 ובכל אזור הקריות.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">מענה מהיר</h3>
                <p className="text-lg">אנו מגיעים במהירות לכל קריאה בכביש 22 ובסביבתו, כדי להחזיר אתכם לשגרה כמה שיותר מהר.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">מחירים הוגנים</h3>
                <p className="text-lg">אנו מציעים שירותי גרירה במחירים תחרותיים והוגנים, ללא הפתעות. קבלו הצעת מחיר בטלפון.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">ציוד מתקדם</h3>
                <p className="text-lg">ברשותנו צי משאיות גרירה חדיש ומאובזר, המאפשר גרירה בטוחה ויעילה של רכבים חשמליים ורכבים אחרים.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">שירות אדיב ומקצועי</h3>
                <p className="text-lg">צוות הגרריסטים שלנו מנוסה, אדיב ומספק שירות ברמה הגבוהה ביותר, תוך דגש על בטיחות ונוחות הלקוח.</p>
              </div>
            </div>
          </section>

          {/* Section 2: Our Services (General) */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-400">שירותי הגרירה והדרך שלנו באזור הקריות</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">גרירת רכבים חשמליים</h3>
                <p className="text-lg">פתרונות גרירה מותאמים לרכבים חשמליים עם מצבר פרוק או כל תקלה אחרת.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">גרירת רכבים פרטיים</h3>
                <p className="text-lg">שירותי גרירה לכל סוגי הרכבים הפרטיים, במקרה של תאונה, תקלה מכנית או מצבר ריק.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">גרירת רכבים מסחריים</h3>
                <p className="text-lg">אנו גוררים גם רכבים מסחריים קלים ובינוניים שנתקעו בדרך.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">גרירת רכבי שטח (4X4)</h3>
                <p className="text-lg">שירותי גרירה מקצועיים לרכבי 4X4, גם בתנאי שטח מורכבים.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">החלפת גלגל</h3>
                <p className="text-lg">נתקעתם עם פנצ'ר? נגיע אליכם ונחליף את הגלגל במהירות וביעילות.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">שירותי דרך נוספים</h3>
                <p className="text-lg">סיוע בהתנעת רכבים (לא חשמליים), מילוי דלק (לרכבי בנזין/דיזל) ועוד.</p>
              </div>
            </div>
            <div className="mt-10 p-6 bg-red-800 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-3">שימו לב: אנו לא מספקים שירותי גרירה לאופנועים.</h3>
              <p className="text-lg">התמחותנו היא ברכבים פרטיים, מסחריים ורכבי שטח בלבד.</p>
            </div>
          </section>

          {/* Section 3: How It Works */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-400">איך זה עובד? גרירה מהירה בכמה צעדים</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="text-5xl mb-4 text-blue-300">1</div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">התקשרו אלינו</h3>
                <p className="text-lg">חייגו למספר שלנו וספרו לנו על מיקומכם וסוג התקלה.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="text-5xl mb-4 text-blue-300">2</div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">קבלו הצעת מחיר</h3>
                <p className="text-lg">אנו נספק לכם הצעת מחיר הוגנת בטלפון, ללא התחייבות.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="text-5xl mb-4 text-blue-300">3</div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">הגרר בדרך אליכם</h3>
                <p className="text-lg">צוות הגרירה שלנו יגיע אליכם במהירות המרבית בכביש 22 או בכל מקום אחר בקריות.</p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">זקוקים לגרירה מיידית בכביש 22 הקריות?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              אל תהססו! אנו כאן כדי לעזור לכם 24 שעות ביממה, 7 ימים בשבוע.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full transition duration-300 text-lg">
                התקשרו עכשיו: 054-917-4414
              </a>
              <WhatsAppCTA cityName="Haifa and Krayot" />
            </div>
          </section>

        </div>
      </main>
    </>
  );
}