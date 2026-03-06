import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

// Mock for demonstration purposes. In a real project, these would be imported.
// For the purpose of this output, we define them here to make the RSC code self-contained and valid.
const BUSINESS_INFO = {
  phone: "0501234567", // Example phone number
  whatsappLink: "https://wa.me/972501234567",
  businessName: "שירותי גרירה וחילוץ חירום חיפה והקריות",
};

const WhatsAppCTA = ({ cityName }: { cityName: string }) => (
  <a
    href={BUSINESS_INFO.whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out"
  >
    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.91L2.05 22L7.3 20.61C8.84 21.46 10.53 21.91 12.28 21.91H12.04C17.5 21.91 21.95 17.46 21.95 12C21.95 6.45 17.5 2 12.04 2ZM16.17 15.64C15.92 16.19 15.24 16.36 14.7 16.11C14.16 15.86 13.99 15.18 14.24 14.64C14.49 14.1 15.17 13.93 15.71 14.18C16.25 14.43 16.42 15.11 16.17 15.64ZM17.21 13.5C16.96 14.04 16.28 14.21 15.74 13.96C15.2 13.71 15.03 13.03 15.28 12.49C15.53 11.95 16.21 11.78 16.75 12.03C17.29 12.28 17.46 12.96 17.21 13.5ZM18.25 11.36C18 11.9 17.32 12.07 16.78 11.82C16.24 11.57 16.07 10.89 16.32 10.35C16.57 9.81 17.25 9.64 17.79 9.89C18.33 10.14 18.5 10.82 18.25 11.36ZM19.29 9.22C19.04 9.76 18.36 9.93 17.82 9.68C17.28 9.43 17.11 8.75 17.36 8.21C17.61 7.67 18.29 7.5 18.83 7.75C19.37 8 19.54 8.68 19.29 9.22ZM12.04 4.04C16.3 4.04 19.79 7.53 19.79 11.79C19.79 16.05 16.3 19.54 12.04 19.54C7.78 19.54 4.29 16.05 4.29 11.79C4.29 7.53 7.78 4.04 12.04 4.04ZM12.04 5.08C7.94 5.08 4.69 8.33 4.69 12.43C4.69 16.53 7.94 19.78 12.04 19.78C16.14 19.78 19.39 16.53 19.39 12.43C19.39 8.33 16.14 5.08 12.04 5.08ZM12.04 6.12C8.5 6.12 5.69 8.93 5.69 12.47C5.69 16.01 8.5 18.82 12.04 18.82C15.58 18.82 18.39 16.01 18.39 12.47C18.39 8.93 15.58 6.12 12.04 6.12ZM12.04 7.16C9.05 7.16 6.69 9.52 6.69 12.51C6.69 15.5 9.05 17.86 12.04 17.86C15.03 17.86 17.39 15.5 17.39 12.51C17.39 9.52 15.03 7.16 12.04 7.16ZM12.04 8.2C9.54 8.2 7.59 10.15 7.59 12.65C7.59 15.15 9.54 17.1 12.04 17.1C14.54 17.1 16.49 15.15 16.49 12.65C16.49 10.15 14.54 8.2 12.04 8.2ZM12.04 9.24C10.04 9.24 8.49 10.79 8.49 12.79C8.49 14.79 10.04 16.34 12.04 16.34C14.04 16.34 15.59 14.79 15.59 12.79C15.59 10.79 14.04 9.24 12.04 9.24ZM12.04 10.28C10.54 10.28 9.29 11.53 9.29 13.03C9.29 14.53 10.54 15.78 12.04 15.78C13.54 15.78 14.79 14.53 14.79 13.03C14.79 11.53 13.54 10.28 12.04 10.28ZM12.04 11.32C11.04 11.32 10.29 12.07 10.29 13.07C10.29 14.07 11.04 14.82 12.04 14.82C13.04 14.82 13.79 14.07 13.79 13.07C13.79 12.07 13.04 11.32 12.04 11.32ZM12.04 12.36C11.54 12.36 11.19 12.71 11.19 13.21C11.19 13.71 11.54 14.06 12.04 14.06C12.54 14.06 12.89 13.71 12.89 13.21C12.89 12.71 12.54 12.36 12.04 12.36Z" />
    </svg>
    שלח הודעה בווטסאפ ל-{cityName}
  </a>
);

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
