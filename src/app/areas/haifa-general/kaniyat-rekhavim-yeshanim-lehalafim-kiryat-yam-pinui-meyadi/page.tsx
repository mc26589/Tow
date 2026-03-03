import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata = {
  title: "קונים רכבים ישנים לחלפים בקרית ים – פינוי מיידי!",
  description: "מחפשים למכור רכב ישן, תקול או לפירוק בקרית ים? אנו קונים רכבים פרטיים, מסחריים ו-4X4 לחלפים, עם פינוי מהיר ומיידי ומחירים הוגנים. שירות 24/7 בחיפה והקריות.",
  alternates: {
    canonical: "https://yourdomain.com/kaniyat-rekhavim-yeshanim-lehalafim-kiryat-yam-pinui-meyadi",
  },
  openGraph: {
    title: "קונים רכבים ישנים לחלפים בקרית ים – פינוי מיידי!",
    description: "מחפשים למכור רכב ישן, תקול או לפירוק בקרית ים? אנו קונים רכבים פרטיים, מסחריים ו-4X4 לחלפים, עם פינוי מהיר ומיידי ומחירים הוגנים. שירות 24/7 בחיפה והקריות.",
    url: "https://yourdomain.com/kaniyat-rekhavim-yeshanim-lehalafim-kiryat-yam-pinui-meyadi",
    siteName: "שירותי גרירה וחילוץ חירום חיפה והקריות",
    locale: "he_IL",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoTowing",
  "name": "שירותי גרירה וחילוץ חירום חיפה והקריות",
  "description": "קונים רכבים ישנים, רכבי גרוטאות ורכבים לפירוק לחלפים בקרית ים והסביבה, עם פינוי מיידי ושירות 24/7. מחירים הוגנים ותשלום במקום. מתמחים ברכבים פרטיים, מסחריים ו-4X4.",
  "url": "https://yourdomain.com/kaniyat-rekhavim-yeshanim-lehalafim-kiryat-yam-pinui-meyadi",
  "areaServed": {
    "@type": "Place",
    "name": "חיפה והקריות",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.8184,
      "longitude": 35.0084
    }
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
  "priceRange": "$",
  "serviceType": [
    "קניית רכבים לפירוק",
    "פינוי רכבי גרוטאות",
    "קניית רכבים ישנים לחלפים",
    "גרירת רכבים תקולים",
    "קניית רכבים לאחר תאונה"
  ],
  "telephone": `+${BUSINESS_INFO.phone}`
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            קונים רכבים ישנים לחלפים בקרית ים – פינוי מיידי!
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            מחפשים למכור רכב ישן, תקול או כזה המיועד לפירוק בקרית ים? אנו קונים רכבים מכל הסוגים (פרטיים, מסחריים ו-4X4) לצורך חלפים, ומציעים פינוי מהיר ומיידי מכל מקום בקרית ים והסביבה. קבלו הצעת מחיר הוגנת עוד היום!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg">
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">למה למכור לנו את הרכב הישן שלכם?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">פינוי מהיר ומיידי</h3>
              <p className="text-gray-300">אנו מבינים את הצורך בפתרון מהיר. צוותי הגרירה שלנו זמינים להגיע אליכם לקרית ים ולפנות את הרכב תוך זמן קצר מרגע יצירת הקשר.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">מחירים הוגנים ותשלום במקום</h3>
              <p className="text-gray-300">אנו מציעים הצעות מחיר אטרקטיביות והוגנות עבור רכבים ישנים, תקולים או לפירוק. התשלום מתבצע במקום, במזומן או בהעברה בנקאית, לנוחיותכם.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">שירות מקצועי ואמין</h3>
              <p className="text-gray-300">עם ניסיון רב בתחום, אנו מבטיחים שירות אדיב, מקצועי ושקוף לכל אורך התהליך, ללא הפתעות או עיכובים.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">פתרון ירוק לסביבה</h3>
              <p className="text-gray-300">על ידי מכירת רכבכם הישן לחלפים, אתם תורמים למחזור ושימוש חוזר בחלקי רכב, ובכך מסייעים לשמור על איכות הסביבה.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">ללא טרחה וללא בירוקרטיה</h3>
              <p className="text-gray-300">אנו מטפלים בכל הניירת הנדרשת מול משרד הרישוי, כך שאתם פטורים מכל טרחה בירוקרטית. כל מה שנותר לכם הוא לקבל את התשלום.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">זמינות 24/7 בקרית ים והסביבה</h3>
              <p className="text-gray-300">שירותינו זמינים עבורכם 24 שעות ביממה, 7 ימים בשבוע, כולל חגים וסופי שבוע, בכל אזור קרית ים, הקריות וחיפה.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">אילו סוגי רכבים אנו קונים?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-300">
            אנו מתמחים בקנייה ופינוי של מגוון רחב של כלי רכב המיועדים לפירוק או לחלפים. אנו קונים:
          </p>
          <ul className="list-disc list-inside text-left inline-block text-lg mb-8 space-y-2 text-gray-200">
            <li><span className="font-semibold text-blue-300">רכבים פרטיים:</span> מכל יצרן ודגם, בכל מצב – תקולים, לאחר תאונה, ללא טסט, או כאלה שאינם כשירים לנסיעה.</li>
            <li><span className="font-semibold text-blue-300">רכבים מסחריים:</span> טנדרים, ואנים, ורכבים מסחריים קטנים ובינוניים.</li>
            <li><span className="font-semibold text-blue-300">רכבי שטח (4X4):</span> ג'יפים ורכבי שטח מכל הסוגים.</li>
          </ul>
          <p className="text-lg font-semibold text-red-400 mb-8">
            שימו לב: אנו איננו עוסקים בקנייה או פינוי של אופנועים.
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">תהליך המכירה פשוט ומהיר:</h3>
          <ol className="list-decimal list-inside text-left inline-block text-lg space-y-3 text-gray-200">
            <li><span className="font-semibold text-blue-300">יצירת קשר:</span> התקשרו אלינו או שלחו הודעת וואטסאפ עם פרטי הרכב שלכם.</li>
            <li><span className="font-semibold text-blue-300">קבלת הצעת מחיר:</span> נספק לכם הצעת מחיר אטרקטיבית בטלפון.</li>
            <li><span className="font-semibold text-blue-300">תיאום פינוי:</span> נקבע מועד נוח לפינוי הרכב מקרית ים.</li>
            <li><span className="font-semibold text-blue-300">תשלום ופינוי:</span> נגיע, נשלם לכם במקום ונפנה את הרכב במהירות ובמקצועיות.</li>
          </ol>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">אל תחכו – פנו את הרכב הישן שלכם עוד היום!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            היפטרו מהרכב הישן שתופס מקום וקבלו עליו תמורה הוגנת. אנו כאן לשירותכם 24/7 בקרית ים, חיפה והקריות.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg">
              לחצו כאן לשיחת טלפון מהירה
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
