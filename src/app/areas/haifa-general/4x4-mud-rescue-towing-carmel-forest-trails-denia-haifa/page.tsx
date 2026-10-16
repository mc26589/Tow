import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'חילוץ 4x4 וגרירה בבוץ בכרמל ודניה | הגעה תוך 30 דקות - 24/7',
  description: 'נתקעתם בבוץ ביער הכרמל או דניה? חילוץ 4x4 מקצועי וגרירת רכב במחיר הוגן. זמינים 24/7 להגעה מהירה לשטח. התקשרו עכשיו ונעזור לכם לצאת מהבוץ!',
  keywords: 'חילוץ 4x4, חילוץ בבוץ כרמל, גרירה בחיפה, גרירת רכב דניה, חילוץ רכב תקוע, גרר מפרץ אקספרס, חילוץ שטח דניה',
  alternates: {
    canonical: 'https://www.towingrescuehaifa.co.il/areas/haifa-general/4x4-mud-rescue-towing-carmel-forest-trails-denia-haifa',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "האם אתם מספקים חילוץ 4x4 ביער הכרמל?",
        "acceptedAnswer": { "@type": "Answer", "text": "כן, אנו מתמחים בחילוץ רכבי 4x4 וג'יפים שנתקעו בבוץ או בשטח קשה בדרכי יער הכרמל וסביבת דניה. אנו ערוכים לכל סוגי השטח." }
      },
      {
        "@type": "Question",
        "name": "כמה זמן לוקח לכם להגיע לחילוץ בדניה או בכרמל?",
        "acceptedAnswer": { "@type": "Answer", "text": "אנו זמינים 24/7 ומשתדלים להגיע לכל נקודה בחיפה והכרמל בטווח זמן קצר במיוחד, בהתאם לעומסי התנועה ותנאי השטח." }
      },
      {
        "@type": "Question",
        "name": "מהו מחיר חילוץ רכב מהבוץ?",
        "acceptedAnswer": { "@type": "Answer", "text": "המחיר נקבע בהתאם למורכבות החילוץ ומיקום הרכב. אנו מקפידים על מחיר הוגן ושקוף לכל לקוח." }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-gray-50 text-gray-800">
        <section className="gradient-trust text-white py-14 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              חילוץ 4x4 וגרירה מהירה בשבילי יער הכרמל ודניה
            </h1>
            <p className="mt-2 text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              תקועים בבוץ? מומחי חילוץ 4x4 זמינים עבורכם 24/7. הגעה מהירה, מקצועית ובמחיר הוגן.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <WhatsAppCTA cityName="אזור חיפה והכרמל" />
               <a href={`tel:+${BUSINESS_INFO.phone}`} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white rounded-full px-7 py-3.5 font-semibold text-base border border-white/25 hover:bg-white/25 transition-colors w-full sm:w-auto justify-center">
                  📞 התקשרו עכשיו: {BUSINESS_INFO.phone}
               </a>
            </div>
          </div>
        </section>

        <section className="container mx-auto p-4 py-12">
          <p className="text-lg mb-6 leading-relaxed font-rubik">
            נתקעתם עם הרכב בדרכי העפר של יער הכרמל? אנחנו ב-<strong className="font-semibold">גרר מפרץ אקספרס</strong> כאן כדי לעזור. אם אתם מחפשים <Link href="/areas/haifa-general/4x4-mud-rescue-carmel" className="text-blue-600 underline font-bold">חילוץ 4x4 בבוץ</Link> או זקוקים ל-<Link href="/areas/haifa-general/off-road-mud-rescue-carmel-private-car" className="text-blue-600 underline">חילוץ שטח לרכב פרטי</Link> באזור דניה, הצוות שלנו ערוך לכל קריאה בכל שעה.
          </p>
          
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-800">שירותי חילוץ מיוחדים בכרמל</h2>
            <p className="mb-4">אנו מבינים את האתגרים של נהיגת שטח. בין אם מדובר בחילוץ עמוק מהבוץ או גרירה רגילה מהכרמל לחיפה, אנו מבצעים זאת בזהירות מירבית. צריכים גרירה באזור אחוזה? אנו מטפלים גם ב-<Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-600 underline">גרירת רכבים חשמליים ופריקות מצבר</Link> באחוזה והסביבה.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>זמינות 24/7 לכל תרחישי החילוץ והגרירה.</li>
              <li>מומחיות בדרכי העפר של אזור דניה, הכרמל וסביבתו.</li>
              <li>מחירים הוגנים ושקופים - ללא הפתעות.</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}