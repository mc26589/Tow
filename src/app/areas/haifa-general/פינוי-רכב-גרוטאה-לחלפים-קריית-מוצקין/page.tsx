import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";

export const metadata = {
  title: "פינוי רכב גרוטאה לחלפים בקריית מוצקין - גרירה וקנייה במזומן",
  description: "שירות מקצועי ומהיר לפינוי רכב גרוטאה לחלפים בקריית מוצקין. קונים רכבים ישנים, תקולים ולפירוק במזומן. גרירה חינם והצעת מחיר הוגנת.",
  keywords: ["פינוי רכב גרוטאה קריית מוצקין", "רכב לפירוק קריית מוצקין", "קניית רכבים לחלפים קריית מוצקין", "גרירת רכבים קריית מוצקין", "קונה רכבים במזומן קריית מוצקין", "פינוי רכב ישן קריית מוצקין"],
  alternates: {
    canonical: "https://yourdomain.com/פינוי-רכב-גרוטאה-לחלפים-קריית-מוצקין",
  },
  openGraph: {
    title: "פינוי רכב גרוטאה לחלפים בקריית מוצקין - גרירה וקנייה במזומן",
    description: "שירות מקצועי ומהיר לפינוי רכב גרוטאה לחלפים בקריית מוצקין. קונים רכבים ישנים, תקולים ולפירוק במזומן. גרירה חינם והצעת מחיר הוגנת.",
    url: "https://yourdomain.com/פינוי-רכב-גרוטאה-לחלפים-קריית-מוצקין",
    images: [
      {
        url: "https://yourdomain.com/images/og-image-towing.jpg",
        alt: "משאית גרר מפנה רכב גרוטאה בקריית מוצקין",
      },
    ],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים חיפה והקריות",
    "description": "שירותי גרירה ופינוי רכבי גרוטאה לחלפים בקריית מוצקין, חיפה והקריות. קונים רכבים לפירוק במזומן.",
    "url": `https://yourdomain.com/פינוי-רכב-גרוטאה-לחלפים-קריית-מוצקין`,
    "image": "https://yourdomain.com/images/towing-truck.jpg",
    "priceRange": "$",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "areaServed": [
      { "@type": "City", "name": "קריית מוצקין" },
      { "@type": "City", "name": "חיפה" },
      { "@type": "City", "name": "קריות" },
      { "@type": "City", "name": "קריית ביאליק" },
      { "@type": "City", "name": "קריית ים" },
      { "@type": "City", "name": "קריית אתא" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.815,
      "longitude": 35.075
    },
    "serviceType": [
      "פינוי רכב גרוטאה",
      "קניית רכבים לפירוק",
      "גרירת רכבים",
      "פינוי רכבים ישנים",
      "קניית רכבים במזומן"
    ]
  };

  return (
    <>
      <Script
        id="json-ld-auto-towing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            פינוי רכב גרוטאה לחלפים בקריית מוצקין
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            קונים רכבים ישנים, תקולים ולפירוק במזומן! שירות גרירה מהיר, מקצועי והוגן 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out text-lg"
            >
              התקשרו אלינו עכשיו
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary-400">
            מחפשים פינוי רכב גרוטאה לחלפים בקריית מוצקין?
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            אם יש לכם רכב ישן, תקול, לאחר תאונה או כזה שאינו כשיר לנסיעה ועומד ללא שימוש בקריית מוצקין, אנו כאן כדי לעזור. אנו מתמחים בקנייה ופינוי של רכבי גרוטאה המיועדים לפירוק ולשימוש בחלפים, ומציעים לכם תהליך מהיר, נוח ותשלום הוגן במזומן.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            אנו מבינים את הצורך בפתרון יעיל לרכב שאינו בשימוש, ולכן אנו מספקים שירות גרירה מקצועי ללא עלות נוספת, ישירות מפתח ביתכם או מכל מקום אחר בקריית מוצקין והסביבה.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold mt-10 mb-6 text-primary-400">
            למה לבחור בנו לפינוי רכבכם בקריית מוצקין?
          </h3>
          <ul className="list-disc list-inside text-lg space-y-3 mb-8">
            <li>
              <strong className="text-primary-300">מחיר הוגן במזומן:</strong> אנו מציעים הצעת מחיר אטרקטיבית ותשלום מיידי במזומן עבור רכבכם.
            </li>
            <li>
              <strong className="text-primary-300">גרירה חינם:</strong> שירותי הגרירה כלולים במחיר ומתבצעים על ידי צוות מקצועי וציוד מתאים.
            </li>
            <li>
              <strong className="text-primary-300">שירות מהיר ויעיל:</strong> אנו זמינים 24/7 ומגיעים אליכם במהירות לביצוע הפינוי.
            </li>
            <li>
              <strong className="text-primary-300">פתרון סביבתי:</strong> אנו דואגים לפירוק ומיחזור הרכב באופן אחראי וידידותי לסביבה.
            </li>
            <li>
              <strong className="text-primary-300">כל סוגי הרכבים:</strong> קונים רכבים פרטיים, מסחריים ורכבי שטח (4X4) מכל השנים.
              <span className="text-red-400 font-semibold block mt-1">
                שימו לב: איננו מפנים אופנועים.
              </span>
            </li>
          </ul>

          <h3 className="text-2xl md:text-3xl font-bold mt-10 mb-6 text-primary-400">
            איך זה עובד? תהליך פשוט ומהיר:
          </h3>
          <ol className="list-decimal list-inside text-lg space-y-3 mb-8">
            <li>
              <strong className="text-primary-300">יצירת קשר:</strong> התקשרו אלינו או שלחו הודעת וואטסאפ עם פרטי הרכב (שנת ייצור, דגם, מצב כללי).
            </li>
            <li>
              <strong className="text-primary-300">הצעת מחיר:</strong> תקבלו הצעת מחיר הוגנת ומחייבת בטלפון.
            </li>
            <li>
              <strong className="text-primary-300">תיאום פינוי:</strong> נקבע מועד נוח עבורכם לפינוי הרכב מקריית מוצקין.
            </li>
            <li>
              <strong className="text-primary-300">תשלום וגרירה:</strong> נגיע למקום, נשלם לכם במזומן ונגרור את הרכב.
            </li>
          </ol>

          <div className="text-center mt-12">
            <p className="text-xl font-semibold mb-4">אל תחכו! פנו את הרכב הישן שלכם עוד היום וקבלו תשלום במזומן.</p>
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out text-lg"
            >
              התקשרו אלינו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 text-white py-10 md:py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-400">
            שאלות נפוצות על פינוי רכבים לחלפים
          </h2>
          <div className="max-w-3xl mx-auto text-left">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">האם אתם קונים כל סוג של רכב לפירוק?</h3>
              <p className="text-lg">
                אנו קונים מגוון רחב של רכבים פרטיים, מסחריים ורכבי שטח (4X4) המיועדים לפירוק או לשימוש בחלפים, ללא קשר למצבם המכני או הקוסמטי. עם זאת, איננו מטפלים באופנועים.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">כמה זמן לוקח תהליך הפינוי?</h3>
              <p className="text-lg">
                אנו שואפים לספק שירות מהיר ויעיל. לרוב, מרגע יצירת הקשר ועד לפינוי הרכב ותשלום, התהליך יכול להסתיים תוך מספר שעות עד יום עסקים אחד, בהתאם לזמינותכם.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">האם יש עלות לגרירה?</h3>
              <p className="text-lg">
                לא! שירות הגרירה כלול במחיר שאנו מציעים עבור רכבכם. אין עלויות נסתרות או עמלות נוספות.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">האם אני צריך להכין מסמכים כלשהם?</h3>
              <p className="text-lg">
                כן, נצטרך לראות את רישיון הרכב ותעודת זהות של בעל הרכב כדי לוודא בעלות חוקית.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}