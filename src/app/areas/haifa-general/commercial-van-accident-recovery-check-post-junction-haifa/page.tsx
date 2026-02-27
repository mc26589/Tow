import type { Metadata } from 'next';

const H1_TITLE = "חילוץ ואן מסחרי לאחר תאונה בצומת צ'ק פוסט חיפה";
const SLUG = "commercial-van-accident-recovery-check-post-junction-haifa";
const PHONE_NUMBER = "050-1234567"; // Placeholder for NAP
const COMPANY_NAME = "חילוץ גרירה חיפה";

export const metadata: Metadata = {
  title: H1_TITLE,
  description: `שירותי חילוץ ואן מסחרי 24/7 לאחר תאונה בצומת צ'ק פוסט חיפה, חיפה והקריות. שירות חירום ללא עלות, רישיון וביטוח מלא. התקשרו ל-${PHONE_NUMBER}.`,
  alternates: {
    canonical: `https://www.yourdomain.com/${SLUG}`,
  },
  openGraph: {
    title: H1_TITLE,
    description: `שירותי חילוץ ואן מסחרי 24/7 לאחר תאונה בצומת צ'ק פוסט חיפה, חיפה והקריות. שירות חירום ללא עלות, רישיון וביטוח מלא. התקשרו ל-${PHONE_NUMBER}.`,
    url: `https://www.yourdomain.com/${SLUG}`,
    siteName: COMPANY_NAME,
    locale: 'he_IL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: H1_TITLE,
    description: `שירותי חילוץ ואן מסחרי 24/7 לאחר תאונה בצומת צ'ק פוסט חיפה, חיפה והקריות. שירות חירום ללא עלות, רישיון וביטוח מלא. התקשרו ל-${PHONE_NUMBER}.`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoTowing",
  "name": COMPANY_NAME,
  "description": `שירותי חילוץ וגרירה 24/7 לוואנים מסחריים לאחר תאונה בצומת צ'ק פוסט חיפה, חיפה והקריות. שירות חירום ללא עלות, זמינות מיידית ושירות מקצועי.`,
  "url": `https://www.yourdomain.com/${SLUG}`,
  "telephone": `tel:+972${PHONE_NUMBER.replace(/-/g, '')}`,
  "priceRange": "0 ILS", // Reflects the 'zero-cost' constraint
  "areaServed": [
    {
      "@type": "Place",
      "name": "חיפה",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.7940,
        "longitude": 35.0000
      }
    },
    {
      "@type": "Place",
      "name": "הקריות",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.8200,
        "longitude": 35.0600
      }
    }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "serviceType": ["Commercial Van Accident Recovery", "Vehicle Towing", "Emergency Roadside Assistance", "Heavy Duty Towing"]
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="bg-blue-700 text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center">
            {H1_TITLE}
          </h1>
        </div>
      </header>

      <section className="container mx-auto px-4 py-8">
        <p className="text-lg mb-4 leading-relaxed">
          כן, <strong className="font-semibold">{COMPANY_NAME}</strong> מספקת שירותי חילוץ ואן מסחרי לאחר תאונה מיידיים ומקצועיים, במיוחד בצומת צ'ק פוסט בחיפה ובאזור הקריות הסמוך, 24 שעות ביממה, 7 ימים בשבוע.
          אנו מבינים את הדחיפות והחשיבות של חילוץ מהיר ובטוח לרכבים מסחריים כדי למזער שיבושים בעבודה ולסייע לכם לחזור לשגרה במהירות האפשרית.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6 border border-blue-200">
          <h2 className="text-2xl font-bold text-blue-800 mb-3">שירות חירום ללא עלות בחיפה והקריות</h2>
          <p className="mb-2 leading-relaxed">
            <strong className="font-semibold">ללא עלות:</strong> אנו גאים לספק שירותי חילוץ וגרירה חירום לוואנים מסחריים לאחר תאונה <span className="font-bold text-green-700">ללא עלות</span> באזור חיפה והקריות, כולל צומת צ'ק פוסט. המטרה שלנו היא לסייע לכם במהירות וביעילות ללא דאגות כלכליות במצבי חירום.
          </p>
          <p className="mb-2 leading-relaxed">
            <strong className="font-semibold">רישוי וביטוח:</strong> אנו פועלים ברישיון מלא ומבוטחים לכל סוגי פעולות הגרירה והחילוץ, מה שמבטיח לכם שקט נפשי ושירות מקצועי ואחראי העומד בכל התקנים הנדרשים.
          </p>
          <p className="mb-2 leading-relaxed">
            <strong className="font-semibold">זמינות:</strong> אנו זמינים 24/7, כולל חגים ושבתות, כדי להבטיח שתמיד יהיה לכם למי לפנות במקרה חירום.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">למה לבחור ב"{COMPANY_NAME}" לחילוץ ואן מסחרי בצ'ק פוסט?</h2>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg leading-relaxed">
          <li><strong className="font-semibold">מענה מהיר:</strong> צוותי החילוץ שלנו פרוסים אסטרטגית באזור חיפה והקריות ומגיעים במהירות לכל קריאה, במיוחד לאזורים מרכזיים וצמתים עמוסים כמו צומת צ'ק פוסט.</li>
          <li><strong className="font-semibold">ציוד מתקדם:</strong> אנו מצוידים בציוד גרירה וחילוץ ייעודי ומתקדם לוואנים מסחריים ורכבים כבדים, המאפשר טיפול בטוח ויעיל בכל מצב, גם המורכב ביותר.</li>
          <li><strong className="font-semibold">צוות מנוסה:</strong> הטכנאים שלנו מנוסים בחילוץ תאונות מורכבות, בעלי הכשרה מקצועית גבוהה ומספקים שירות אדיב, מקצועי ואמין.</li>
          <li><strong className="font-semibold">שירות מלא:</strong> אנו מטפלים בכל ההיבטים של החילוץ, החל מפינוי בטוח של הרכב מהכביש ועד להעברתו למוסך, לבית העסק או לכל יעד אחר שתבחרו.</li>
        </ul>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-3">צריכים חילוץ דחוף לוואן מסחרי בצומת צ'ק פוסט? צרו קשר עכשיו!</h3>
          <p className="text-lg mb-4">
            <strong className="font-semibold">שם:</strong> {COMPANY_NAME}<br />
            <strong className="font-semibold">טלפון:</strong> <a href={`tel:+972${PHONE_NUMBER.replace(/-/g, '')}`} className="text-blue-600 hover:underline font-bold text-2xl">{PHONE_NUMBER}</a>
          </p>
          <p className="text-sm text-gray-600">
            אנו זמינים 24/7 לספק לכם שירותי חילוץ וגרירה מקצועיים ואמינים בחיפה והקריות.
          </p>
        </div>
      </section>
    </main>
  );
}