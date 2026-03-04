import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ 4x4 תקוע בחול בחוף קרית חיים, הקריות | זמינות 24/7",
  description: "נתקעתם עם רכב 4x4 בחול בחוף קרית חיים או באזור הקריות? שירותי חילוץ מהירים ומקצועיים 24/7 לרכבי שטח תקועים. התקשרו עכשיו!",
  keywords: ["חילוץ 4x4 קרית חיים", "רכב תקוע בחול קריות", "חילוץ רכב שטח חוף קרית חיים", "גרירה 4x4 חיפה", "שירותי חילוץ קריות", "חילוץ חירום 4x4"],
  openGraph: {
    title: "חילוץ 4x4 תקוע בחול בחוף קרית חיים, הקריות | זמינות 24/7",
    description: "נתקעתם עם רכב 4x4 בחול בחוף קרית חיים או באזור הקריות? שירותי חילוץ מהירים ומקצועיים 24/7 לרכבי שטח תקועים. התקשרו עכשיו!",
    url: "https://yourdomain.com/4x4-recovery-stuck-sand-kiryat-haim-beach-krayot",
    type: "website",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ 4x4 בחוף קרית חיים והקריות",
    "description": "שירותי חילוץ מקצועיים ומהירים לרכבי 4x4 שנתקעו בחול בחוף קרית חיים, חיפה והקריות. זמינות 24/7.",
    "url": "https://yourdomain.com/4x4-recovery-stuck-sand-kiryat-haim-beach-krayot",
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
      "latitude": 32.819,
      "longitude": 35.050
    },
    "serviceType": [
      "חילוץ רכב 4x4",
      "חילוץ רכב שטח",
      "חילוץ רכב תקוע בחול",
      "שירותי גרירה"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            חילוץ רכב 4x4 תקוע בחול בחוף קרית חיים, הקריות
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            נתקעתם עם רכב 4x4 בחול בחוף קרית חיים או באזור הקריות? אל דאגה! אנו מספקים שירותי חילוץ מהירים, מקצועיים ואמינים לרכבי שטח שנתקעו בחול, זמינים עבורכם 24/7. צוות החילוץ שלנו מצויד בציוד ייעודי ובעל ניסיון רב בחילוץ רכבים מכל סוגי השטח, כולל חולות רכים.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-600 transition-colors shadow-lg">
              התקשרו עכשיו לחילוץ מהיר!
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            למה לבחור בנו לחילוץ רכב השטח שלכם בקריות?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">זמינות 24/7</h3>
              <p className="text-gray-300">אנו מבינים שצורך בחילוץ יכול לצוץ בכל שעה. לכן, שירותינו זמינים מסביב לשעון, 7 ימים בשבוע, כולל חגים וסופי שבוע. תמיד יש מי שיענה לכם.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">מענה מהיר</h3>
              <p className="text-gray-300">כאשר אתם תקועים, כל דקה חשובה. אנו מתחייבים להגיע אליכם במהירות האפשרית לחוף קרית חיים ולכל נקודה באזור הקריות, כדי להחזיר אתכם לשגרה.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">צוות מקצועי ומנוסה</h3>
              <p className="text-gray-300">צוות החילוץ שלנו מורכב ממומחים בעלי ניסיון רב בחילוץ רכבי 4x4 מכל סוגי השטח, כולל חולות עמוקים. אנו יודעים איך לטפל ברכב שלכם בזהירות וביעילות.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">ציוד חילוץ מתקדם</h3>
              <p className="text-gray-300">אנו משתמשים בציוד החילוץ המתקדם והבטוח ביותר, המותאם במיוחד לרכבי שטח ולתנאי חול, כדי להבטיח חילוץ חלק וללא נזקים לרכבכם.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">מחירים הוגנים ושקופים</h3>
              <p className="text-gray-300">אנו מאמינים בשקיפות מלאה ובמחירים הוגנים. קבלו הצעת מחיר בטלפון ללא הפתעות, ותדעו בדיוק כמה תשלמו לפני תחילת העבודה.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">שירות לכל סוגי הרכבים (למעט אופנועים)</h3>
              <p className="text-gray-300">אנו מתמחים בחילוץ רכבים פרטיים, רכבים מסחריים ורכבי שטח 4x4. שימו לב: איננו מספקים שירותי חילוץ או גרירה לאופנועים.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-950 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            זקוקים לחילוץ מיידי בחוף קרית חיים או באזור הקריות?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            אל תהססו! התקשרו אלינו עכשיו וצוות החילוץ שלנו יצא לדרך באופן מיידי כדי לסייע לכם.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-600 transition-colors shadow-lg">
              חייגו עכשיו לקבלת עזרה!
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>
    </>
  );
}