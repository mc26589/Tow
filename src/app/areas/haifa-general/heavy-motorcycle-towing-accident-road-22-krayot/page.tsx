import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 (עוקף קריות) | שירות 24/7 - הגעה מהירה תוך 30 דק'",
  description: "נתקעתם בכביש 22? שירות גרר לרכב זמין 24/7 באזור הקריות וחיפה. מחיר הוגן, הגעה מהירה לזירת התאונה או התקלה. התקשרו עכשיו לסיוע מקצועי!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-accident-road-22-krayot",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "כמה זמן לוקח לגרר להגיע לתאונה בכביש 22?",
        "acceptedAnswer": { "@type": "Answer", "text": "אנו עושים את מירב המאמצים להגיע תוך 30 דקות לכל קריאה באזור חיפה והקריות, בהתאם לעומסי התנועה בכביש 22." }
      },
      {
        "@type": "Question",
        "name": "האם אתם גוררים אופנועים?",
        "acceptedAnswer": { "@type": "Answer", "text": "אנו לא מספקים שירותי גרירה לאופנועים, אלא מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח." }
      },
      {
        "@type": "Question",
        "name": "מה הטווח מחירים לגרירה באזור חיפה?",
        "acceptedAnswer": { "@type": "Answer", "text": "המחיר משתנה בהתאם למרחק הגרירה וסוג הרכב. אנו מציעים מחיר הוגן ושקוף מראש לכל לקוחותינו." }
      }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">גרר לרכב לאחר תאונה בכביש 22 - מענה מהיר 24/7</h1>
          <p className="text-lg md:text-xl mb-8">נתקעתם בעוקף קריות? הצוות שלנו זמין לסייע לכם בכל שעה עם ציוד מתקדם ומחיר הוגן.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו לסיוע
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">שירותי חילוץ מקצועיים בכביש 22</h2>
          <p className="mb-4">
            כביש 22 הוא עורק תחבורה עמוס. אם אתם זקוקים לעזרה, אנו כאן. זקוקים ל- <Link href="/areas/haifa-general/emergency-towing-road-22-kiryat-ata-interchange" className="text-blue-400">גרירת חירום במחלף קריית אתא</Link> או ל- <Link href="/areas/haifa-general/emergency-towing-electric-car-route-22-krayot" className="text-blue-400">גרירת רכב חשמלי בכביש 22</Link>? צוות הגרר שלנו מצויד לכל תרחיש. 
          </p>
          <p className="mb-4">
            אנו מספקים מענה מהיר גם ב- <Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="text-blue-400">אזור צומת צ'ק פוסט</Link> לכל מי שמחפש שירות אמין. 
          </p>
          <p className="text-sm text-gray-400 italic">*לתשומת לבכם: איננו מספקים שירותי גרירה לאופנועים.</p>
        </div>
      </section>
    </main>
  );
}