import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ 4x4 ביער הכרמל | חילוץ מבוץ בחיפה – הגעה מהירה 24/7",
  description: "נתקעתם בבוץ ביער הכרמל? אנו מספקים שירותי חילוץ רכבי שטח 4x4 מקצועיים בחיפה והסביבה. מחיר הוגן, זמינות 24/7. התקשרו עכשיו לחילוץ מהיר!",
  keywords: ["חילוץ 4x4", "חילוץ מבוץ יער הכרמל", "גרירה בחיפה", "חילוץ רכב שטח 24/7", "חילוץ שטח בחיפה"],
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
          "text": "אנו עושים את מירב המאמצים להגיע תוך זמן קצר מרגע הקריאה, בהתאם לתנאי השטח והעומסים בחיפה."
        }
      },
      {
        "@type": "Question",
        "name": "האם אתם מחלצים רכבים שנתקעו בבוץ עמוק?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "כן, אנו מצוידים בציוד חילוץ מתקדם לרכבי שטח ומתמחים בחילוץ רכבים שנתקעו בבוץ עמוק ביער הכרמל."
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
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">נתקעתם בשטח? צוות מקצועי לחילוץ 4x4 ביער הכרמל ובאזור חיפה והקריות. מענה מהיר ומחירים הוגנים.</p>
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
              בין אם אתם צריכים <Link href="/areas/haifa-general/mud-rescue-4x4-carmel-forest-haifa" className="text-blue-300 underline">mud rescue 4x4 carmel forest haifa</Link> או <Link href="/areas/haifa-general/car-extraction-from-mud-carmel-reserve-haifa" className="text-blue-300 underline">car extraction from mud carmel reserve haifa</Link>, הצוות שלנו ערוך לכל תרחיש. אנו מספקים גם שירותי <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-blue-300 underline">גרירה 24 7 עוקף קריות מחיר הוגן</Link> לרכבים תקועים.
            </p>
          </section>

          <section className="bg-gray-800 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-white mb-6">שאלות נפוצות</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">האם אתם גוררים אופנועים?</h3>
              <p>לא, אנו מתמקדים בחילוץ וגרירת רכבים פרטיים, מסחריים ושטח בלבד (ללא אופנועים).</p>
              <h3 className="text-xl font-bold">מה טווח המחירים?</h3>
              <p>אנו מקפידים על מחיר הוגן ושקוף. התקשרו לקבלת הצעת מחיר בהתאם למיקום המדויק ומורכבות החילוץ.</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}