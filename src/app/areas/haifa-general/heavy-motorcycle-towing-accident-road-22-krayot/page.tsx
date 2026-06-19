import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר לרכב בכביש 22 הקריות | חילוץ 24/7 מהיר ומקצועי",
  description: "נתקעתם עם הרכב בכביש 22? שירות גרירה מקצועי זמין 24/7 לאזור חיפה והקריות. מחיר הוגן, שירות אמין ופינוי מהיר. התקשרו עכשיו לסיוע!",
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
        "acceptedAnswer": { "@type": "Answer", "text": "חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים, אלא מתמחים בגרירת רכבים פרטיים ומסחריים בלבד." }
      }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">גרר לרכב לאחר תאונה בכביש 22 הקריות - שירות מקצועי ומהיר</h1>
          <p className="text-lg md:text-xl mb-8">זקוקים לסיוע לאחר תאונה? אנו כאן עבורכם 24/7 באזור חיפה והקריות.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו לסיוע
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">שירותי גרירה מהירים בכביש 22</h2>
          <p className="mb-4">
            אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4. אם נקלעתם לתאונה, ניתן להיעזר בשירותי <Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="text-blue-400">cheap towing services check post junction</Link> או לבדוק את <Link href="/areas/haifa-general/electric-vehicle-breakdown-towing-route-22-krayot-bypass" className="text-blue-400">electric vehicle breakdown towing route 22 krayot bypass</Link> במידה ומדובר ברכב חשמלי.
          </p>
          <p className="mb-4">
            <strong>חשוב להדגיש: איננו מספקים שירותי גרירה לאופנועים.</strong> במידה ואתם זקוקים לשירותי גרירה לרכב רגיל באזורים סמוכים, אנו ממליצים על <Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="text-blue-400">affordable flatbed towing route 22 krayot area</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}