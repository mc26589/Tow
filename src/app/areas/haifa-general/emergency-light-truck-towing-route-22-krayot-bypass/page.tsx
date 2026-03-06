import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";



export const metadata = {
  title: "גרירת חירום לרכב קל בכביש 22 (עוקף קריות) – זמינות 24/7 | חיפה והקריות",
  description: "נתקעתם עם רכב קל או מסחרי בכביש 22 (עוקף קריות)? שירותי גרירת חירום מהירים ומקצועיים 24/7 לכל סוגי הרכבים (למעט אופנועים) באזור חיפה והקריות. חייגו עכשיו!",
  alternates: {
    canonical: "https://yourdomain.com/emergency-light-truck-towing-route-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חירום חיפה והקריות",
    "description": "שירותי גרירת חירום לרכבים קלים, מסחריים ו-4X4 בכביש 22 (עוקף קריות) ובכל אזור חיפה והקריות, 24/7. מענה מהיר, מקצועי ובמחירים הוגנים.",
    "url": "https://yourdomain.com/emergency-light-truck-towing-route-22-krayot-bypass",
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
      "latitude": 32.818, // Approximate center of Haifa and Krayot
      "longitude": 35.007 // Approximate center of Haifa and Krayot
    },
    "serviceType": [
      "גרירת חירום",
      "חילוץ רכבים",
      "שירותי דרך",
      "גרירת רכב קל",
      "גרירת רכב מסחרי",
      "גרירת רכב 4X4"
    ],
    "provider": {
      "@type": "Organization",
      "name": "שירותי גרירה וחילוץ חירום חיפה והקריות",
      "url": "https://yourdomain.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            גרירת חירום לרכב קל בכביש 22 (עוקף קריות) – זמינות 24/7
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            נתקעתם עם רכב קל או מסחרי בכביש 22 (עוקף קריות)? אנו מספקים שירותי גרירת חירום מהירים ומקצועיים 24 שעות ביממה, 7 ימים בשבוע, לכל אורך הכביש ובאזור חיפה והקריות. צוותינו ערוכים להגיע אליכם במהירות עם ציוד מתאים ולספק פתרון יעיל ובטוח.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a href={`tel:+${BUSINESS_INFO.phone}`}
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              התקשרו עכשיו
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">למה לבחור בנו לגרירת רכב קל בכביש 22?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">מענה מהיר 24/7</h3>
              <p className="text-lg text-gray-300">
                אנו מבינים שכל דקה חשובה במצב חירום. צוותינו פרוסים באזור חיפה והקריות, כולל סמוך לכביש 22, ומסוגלים להגיע אליכם במהירות שיא בכל שעה, ביום ובלילה, כדי לספק שירותי גרירה וחילוץ לרכב קל או מסחרי.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">מקצועיות וציוד מתקדם</h3>
              <p className="text-lg text-gray-300">
                ברשותנו ציוד גרירה וחילוץ חדיש ומתקדם, המאפשר טיפול בטוח ויעיל במגוון רחב של רכבים קלים, רכבים מסחריים ורכבי 4X4. הנהגים שלנו מנוסים ומיומנים בטיפול בכל תקלה, תוך שמירה על בטיחותכם ועל שלמות רכבכם.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">מחירים הוגנים ושקיפות</h3>
              <p className="text-lg text-gray-300">
                אנו מתחייבים למחירים הוגנים ותחרותיים עבור שירותי גרירת חירום. תקבלו הצעת מחיר ברורה ומפורטת בטלפון, ללא הפתעות. המטרה שלנו היא לספק לכם שירות איכותי במחיר משתלם.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">כיסוי נרחב באזור</h3>
              <p className="text-lg text-gray-300">
                אנו משרתים את כל אזור חיפה והקריות, כולל את כביש 22 (עוקף קריות), כביש 4, כביש 70, וכל הערים והיישובים הסמוכים. לא משנה היכן נתקעתם, אנחנו בדרך אליכם.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">אילו סוגי רכבים אנו גוררים?</h2>
          <p className="text-xl text-gray-300 mb-6">
            אנו מתמחים בגרירת מגוון רחב של כלי רכב, כולל:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-300 mb-8 max-w-md mx-auto text-right">
            <li>רכבים פרטיים מכל הסוגים</li>
            <li>רכבים מסחריים קלים (טנדרים, ואנים, רכבי עבודה)</li>
            <li>רכבי שטח ו-4X4</li>
          </ul>
          <p className="text-xl text-red-400 font-semibold mb-8">
            <span className="font-bold">שימו לב:</span> אנו לא מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="mt-8">
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">זקוקים לגרירה מיידית בכביש 22?</h2>
          <p className="text-xl text-gray-300 mb-8">
            אל תהססו! חייגו אלינו עכשיו או שלחו הודעה בווטסאפ. אנו זמינים 24/7 כדי לספק לכם שירות גרירת חירום אמין, מהיר ומקצועי בכביש 22 (עוקף קריות) ובכל אזור חיפה והקריות.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`}
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              חייגו אלינו עכשיו
            </a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>
    </>
  );
}
