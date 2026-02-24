import type { Metadata } from 'next';

// Define the JSON-LD schema directly in the component or as a constant
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoTowing",
  "name": "Towing Rescue Haifa",
  "description": "שירותי גרירת חילוץ תאונות 24/7 בצומת צ'ק פוסט חיפה ובאזור הקריות. זמינות מיידית, שירות מקצועי ואמין.",
  "telephone": "tel:+972501234567", // Placeholder phone number
  "url": "https://www.towingrescuehaifa.co.il/24-7-accident-recovery-towing-check-post-junction-haifa", // Example URL
  "priceRange": "250 ILS - 800 ILS",
  "areaServed": [
    {
      "@type": "Place",
      "name": "Haifa"
    },
    {
      "@type": "Place",
      "name": "Krayot"
    }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.8070, // Approximate for Check Post junction, Haifa
    "longitude": 35.0000  // Approximate for Check Post junction, Haifa
  },
  "serviceType": ["Accident Recovery Towing", "Emergency Towing", "Roadside Assistance", "Vehicle Recovery"]
};

export const metadata: Metadata = {
  title: "גרירת חילוץ תאונות 24/7 צומת צ'ק פוסט חיפה - גרירת חילוץ חיפה",
  description: "זקוקים לגרירת חילוץ תאונות בצומת צ'ק פוסט בחיפה? אנו מספקים שירות 24/7, מהיר, מקצועי ומבוטח. התקשרו עכשיו!",
  alternates: {
    canonical: "https://www.towingrescuehaifa.co.il/24-7-accident-recovery-towing-check-post-junction-haifa",
  },
  openGraph: {
    title: "גרירת חילוץ תאונות 24/7 צומת צ'ק פוסט חיפה - גרירת חילוץ חיפה",
    description: "זקוקים לגרירת חילוץ תאונות בצומת צ'ק פוסט בחיפה? אנו מספקים שירות 24/7, מהיר, מקצועי ומבוטח. התקשרו עכשיו!",
    url: "https://www.towingrescuehaifa.co.il/24-7-accident-recovery-towing-check-post-junction-haifa",
    siteName: "Towing Rescue Haifa",
    type: "website",
  },
};

export default function Page() {
  const phoneNumber = "050-1234567"; // Consistent phone number
  const companyName = "גרירת חילוץ חיפה"; // Consistent company name

  return (
    <section className="container mx-auto p-4 text-right" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">
        גרירת חילוץ תאונות 24/7 צומת צ'ק פוסט חיפה
      </h1>

      <p className="text-lg mb-4 leading-relaxed">
        <strong>כן, אנו מספקים שירותי גרירת חילוץ תאונות 24/7 בצומת צ'ק פוסט בחיפה ובסביבתה המיידית.</strong>
        {" "}
        צוות "גרירת חילוץ חיפה" זמין עבורכם בכל שעה, ביום ובלילה, כדי להעניק מענה מהיר ומקצועי לכל אירוע תאונה או תקלה באזור צומת צ'ק פוסט, חיפה והקריות.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-blue-700">למה לבחור בנו לחילוץ בצ'ק פוסט?</h2>
      <ul className="list-disc list-inside mb-6 text-lg leading-relaxed">
        <li className="mb-2">
          <strong>זמינות מיידית 24/7:</strong> אנו מבינים שאירועי תאונה אינם מתרחשים בשעות נוחות. לכן, אנו עומדים לרשותכם מסביב לשעון, כולל סופי שבוע וחגים.
        </li>
        <li className="mb-2">
          <strong>מענה מהיר:</strong> מיקומנו האסטרטגי מאפשר לנו להגיע במהירות שיא לצומת צ'ק פוסט ולכל נקודה בחיפה והקריות.
        </li>
        <li className="mb-2">
          <strong>מקצועיות ואמינות:</strong> צוות הגרריסטים שלנו מנוסה ומיומן בטיפול בכל סוגי הרכבים ובכל מצבי התאונה, תוך הקפדה על בטיחות הרכב והנוסעים.
        </li>
        <li className="mb-2">
          <strong>ציוד מתקדם:</strong> אנו משתמשים בציוד גרירה וחילוץ חדיש ומתקדם, המאפשר טיפול יעיל ובטוח גם במקרים מורכבים.
        </li>
      </ul>

      <p className="text-lg mb-4 leading-relaxed">
        בין אם מדובר בתאונה קלה או מורכבת, תקלה מכנית או פנצ'ר, אנו כאן כדי לסייע לכם לחזור לשגרה במהירות ובבטחה.
      </p>

      <div className="bg-blue-50 border-r-4 border-blue-500 text-blue-700 p-4 mb-6 shadow-md">
        <h3 className="text-xl font-bold mb-2">פרטי יצירת קשר ושירות:</h3>
        <p className="text-lg mb-1">
          <strong>שם החברה:</strong> {companyName}
        </p>
        <p className="text-lg mb-1">
          <strong>טלפון לשירות 24/7:</strong> <a href={`tel:+972${phoneNumber.replace(/-/g, '')}`} className="text-blue-600 hover:underline font-semibold">{phoneNumber}</a>
        </p>
        <p className="text-lg mb-1">
          <strong>אזורי שירות:</strong> חיפה והקריות (כולל צומת צ'ק פוסט, נשר, קרית אתא, קרית ביאליק, קרית ים, קרית מוצקין).
        </p>
        <p className="text-lg mb-1">
          <strong>מחיר התחלתי:</strong> החל מ-250 ש"ח (המחיר הסופי ייקבע בהתאם למורכבות האירוע ומרחק הגרירה).
        </p>
        <p className="text-lg">
          <strong>רישוי וביטוח:</strong> אנו חברה מורשית ומבוטחת במלואה, המספקת שירותים בהתאם לכל התקנים הנדרשים.
        </p>
      </div>

      <p className="text-lg leading-relaxed">
        אל תהססו להתקשר אלינו בכל עת. אנו כאן כדי לספק לכם שקט נפשי ופתרון מהיר ויעיל.
      </p>
    </section>
  );
}