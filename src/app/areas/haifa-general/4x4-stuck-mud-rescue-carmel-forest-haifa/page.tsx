import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ 4x4 ביער הכרמל | חילוץ מבוץ בחיפה 24/7 | הגעה תוך 30 דקות",
  description: "נתקעתם בבוץ ביער הכרמל? אנו מספקים שירותי חילוץ שטח 4x4 מקצועיים בחיפה והסביבה. מחיר הוגן, זמינות מלאה, הגעה מהירה לכל נקודה בכרמל. התקשרו עכשיו!",
  alternates: {
    canonical: "https://yourdomain.com/areas/haifa-general/4x4-stuck-mud-rescue-carmel-forest-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "כמה זמן לוקח לכם להגיע לחילוץ ביער הכרמל?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "אנו עושים את מירב המאמצים להגיע לנקודת התקיעה תוך זמן קצר מרגע הקריאה, בהתאם לתנאי השטח והעומסים באזור חיפה והכרמל."
        }
      },
      {
        "@type": "Question",
        "name": "האם אתם מחלצים רכבים שנתקעו בבוץ עמוק?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "כן, הצוותים שלנו מצוידים בציוד חילוץ מתקדם לרכבי שטח ומתמחים בחילוץ רכבים מכל סוג שנתקעו בבוץ עמוק ובתוואי שטח מאתגרים ביער הכרמל."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ 4x4 ביער הכרמל – חילוץ מבוץ בחיפה 24/7</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">נתקעתם בשטח? צוות מיומן לחילוץ 4x4 ביער הכרמל ובאזור חיפה. מענה מהיר, מקצועיות ללא פשרות ומחירים הוגנים לכל סוגי החילוצים.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והכרמל" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300 font-bold py-3 px-8 rounded-full text-lg">התקשרו עכשיו</a>
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-gray-200 py-12">
        <div className="container mx-auto px-4">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">מומחים בחילוץ שטח בחיפה</h2>
            <p className="text-lg leading-relaxed mb-4">
              הצוות שלנו מתמחה בחילוץ רכבי שטח באזורים מאתגרים. אם נתקעתם באזור יערות הכרמל, אנו מציעים שירות <Link href="/areas/haifa-general/emergency-mud-recovery-service-carmel-forest-haifa" className="text-blue-300 underline">חילוץ מבוץ מקצועי</Link> ומהיר. באזורים ספציפיים כמו <Link href="/areas/haifa-general/off-road-rescue-carmel-forest-danya" className="text-blue-300 underline">יער הכרמל ליד דניה</Link> או <Link href="/areas/haifa-general/car-rescue-carmel-tunnels-haifa" className="text-blue-300 underline">אזור מנהרות הכרמל</Link>, אנו ערוכים להגעה מהירה עם ציוד גרירה מתאים.
            </p>
          </section>

          <section className="bg-gray-800 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-white mb-6">שאלות נפוצות</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-blue-400">האם אתם מבצעים חילוץ אופנועים?</h3>
                <p>אנו מתמקדים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי שטח 4x4 בלבד. איננו מטפלים באופנועים.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-400">מה טווח המחירים של חילוץ שטח?</h3>
                <p>אנו מקפידים על מחיר הוגן ושקוף. התקשרו לקבלת הצעת מחיר בהתאם למיקום המדויק, שעת הקריאה ומורכבות החילוץ בשטח.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-400">האם אתם זמינים בכל שעות היממה?</h3>
                <p>כן, אנו עובדים 24 שעות ביממה, שבעה ימים בשבוע, כולל סופי שבוע וחגים, כדי לתת מענה לכל רכב שנתקע בחיפה ובסביבתה.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}