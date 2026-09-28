import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 (עוקף קריות) - הגעה תוך 30 דקות | 24/7",
  description: "נתקעתם בכביש 22? שירות גרר מקצועי 24/7 לכל סוגי הרכבים באזור הקריות וחיפה. מחיר הוגן ושירות מהיר. התקשרו עכשיו לסיוע!",
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
        "name": "האם אתם מספקים שירותי גרירה לרכבים בכביש 22?",
        "acceptedAnswer": { "@type": "Answer", "text": "כן, אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי שטח. לתשומת לבכם, איננו מסיעים אופנועים." }
      },
      {
        "@type": "Question",
        "name": "איך מזמינים שירות גרר בכביש 22?",
        "acceptedAnswer": { "@type": "Answer", "text": "ניתן ליצור עמנו קשר טלפוני בכל שעה דרך האתר. אנו זמינים 24/7 ומגיעים לכל נקודה על כביש 22 במהירות." }
      }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">שירות גרר מקצועי בכביש 22 - עוקף קריות 24/7</h1>
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
          <h2 className="text-2xl font-bold mb-4">שירותי חילוץ ותמיכה בכביש 22</h2>
          <p className="mb-4">
            כביש 22 הוא עורק תחבורה מרכזי. אם נתקעתם בדרך, אנו מציעים מענה מיידי הכולל <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-400">גרירת רכבים באזור הצ'ק פוסט וחיפה</Link>. עבור משאיות קלות, ניתן להיעזר ב-<Link href="/areas/haifa-general/emergency-light-truck-towing-route-22-krayot-bypass" className="text-blue-400">שירותי חילוץ משאיות קלות בעוקף קריות</Link>.
          </p>
          <p className="mb-4">
            אנו מספקים פתרונות נוספים לאזור, לרבות <Link href="/areas/haifa-general/affordable-car-towing-kiryat-motzkin-24-7" className="text-blue-400">שירותי גרירה בקרית מוצקין</Link> וכן <Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="text-blue-400">גרירת רכבים זולה בקרית ביאליק</Link>. הצוות שלנו זמין לסיוע טכני ותפעולי בכל שעה.
          </p>
          <p className="text-sm text-gray-400 italic">*לתשומת לבכם: איננו מספקים שירותי גרירה לאופנועים בכל אזור הפעילות.</p>
        </div>
      </section>
    </main>
  );
}