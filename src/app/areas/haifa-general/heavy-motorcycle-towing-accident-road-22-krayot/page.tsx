import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר לרכב בכביש 22 (עוקף קריות) | שירות 24/7 - הגעה מהירה",
  description: "נתקעתם בכביש 22? שירות גרר לרכב זמין 24/7 באזור הקריות וחיפה. מחיר הוגן, הגעה מהירה לזירת התאונה. התקשרו עכשיו לסיוע מקצועי!",
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
        "acceptedAnswer": { "@type": "Answer", "text": "חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים, אלא מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח." }
      },
      {
        "@type": "Question",
        "name": "מה הטווח מחירים לגרירה באזור חיפה?",
        "acceptedAnswer": { "@type": "Answer", "text": "המחיר משתנה בהתאם למרחק הגרירה וסוג הרכב. אנו מציעים מחיר הוגן ושקוף מראש לכל לקוחותינו באזור הקריות וחיפה." }
      }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">גרר לרכב לאחר תאונה בכביש 22 הקריות - זמינות 24/7</h1>
          <p className="text-lg md:text-xl mb-8">זקוקים לחילוץ וגרירה לאחר תאונה בכביש 22? צוות מיומן בדרך אליכם.</p>
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
          <h2 className="text-2xl font-bold mb-4">שירותי גרירה מקצועיים באזור כביש 22</h2>
          <p className="mb-4">
            כביש 22 (עוקף קריות) הוא עורק תנועה ראשי. אם נקלעתם לתקלה או תאונה, אל תנסו לגרור את הרכב לבד. אנו מספקים מענה מהיר. במידה ואתם זקוקים לשירותי <Link href="/areas/haifa-general/cheap-towing-check-post-junction" className="text-blue-400">גרירה זולה בצומת צ'ק פוסט</Link> או <Link href="/areas/haifa-general/electric-vehicle-breakdown-towing-route-22-krayot-bypass" className="text-blue-400">גרירת רכב חשמלי בכביש 22</Link>, אנו כאן לעזור.
          </p>
          <p className="mb-4">
            אנו מתמחים גם בשירותים נוספים כמו <Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-bialik-industrial-zone" className="text-blue-400">גרירת רכבים באזור התעשייה קריית ביאליק</Link>.
          </p>
          <p className="text-sm text-gray-400 italic">*לתשומת לבכם: איננו מספקים שירותי גרירה לאופנועים.</p>
        </div>
      </section>
    </main>
  );
}