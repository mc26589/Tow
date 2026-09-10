import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכב בכביש 22 (עוקף קריות) - הגעה מהירה 24/7",
  description: "נתקעתם בכביש 22? שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים. הגעה תוך 30 דקות, מחיר הוגן ושירות מהיר 24/7. התקשרו עכשיו לסיוע מיידי!",
  alternates: {
    canonical: "/areas/haifa-general/towing-services-road-22-krayot-private-car",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "האם אתם גוררים רכבים מהצד של כביש 22?",
        "acceptedAnswer": { "@type": "Answer", "text": "כן, אנו מנוסים בעבודה לאורך כביש 22 (עוקף קריות) ומספקים מענה מהיר ובטוח לרכבים פרטיים ומסחריים." }
      },
      {
        "@type": "Question",
        "name": "תוך כמה זמן אתם מגיעים לכביש 22?",
        "acceptedAnswer": { "@type": "Answer", "text": "אנו שואפים להגיע לכל נקודה לאורך כביש 22 תוך כ-30 דקות, בכפוף לעומסי התנועה." }
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה לרכב תקוע בכביש 22 (עוקף קריות)</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? אנו מספקים חילוץ וגרירה מקצועיים לרכבים פרטיים ומסחריים לאורך כביש 22. זמינות מלאה, הגעה מהירה ומחיר הוגן.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="כביש 22 קריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לסיוע מיידי
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה בקריות?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות מלאה 24/7 – גם בסופי שבוע וחגים.</li>
            <li>✓ מומחיות בחילוץ רכבים תקועים ב<Link href="/areas/haifa-general/towing-road-22-krayot-bypass" className="text-blue-600 underline">כביש 22 וסביבתו</Link>.</li>
            <li>✓ שירות מהיר לתושבי האזור, כולל <Link href="/areas/haifa-general/towing-for-scrap-kiryat-bialik" className="text-blue-600 underline">קרית ביאליק</Link> וקרית מוצקין.</li>
            <li>✓ מענה דחוף למי שמחפש <Link href="/areas/haifa-general/emergency-towing-road-22-krayot-bypass" className="text-blue-600 underline">גרירה דחופה בכביש 22</Link>.</li>
          </ul>
          <p>זקוקים לשירותים נוספים? אנו מציעים גם פתרונות ל<Link href="/areas/haifa-general/towing-for-scrap-kiryat-bialik" className="text-blue-600 font-bold hover:underline">פינוי רכבים לגריטה</Link> או <Link href="/areas/haifa-general/fast-towing-services-road-22-krayot-bypass" className="text-blue-600 font-bold hover:underline">שירותי גרירה מהירים בכביש 22</Link>.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">האם אתם גוררים רכבים מהצד של כביש 22?</h3>
              <p>כן, אנו מנוסים מאוד בעבודה לאורך צירי התנועה הראשיים ובמתן מענה מהיר ובטיחותי לנוסעים.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">מהו אזור הפעילות שלכם?</h3>
              <p>אנו פרוסים בכל אזור חיפה והקריות. אם נתקעתם בנקודה מרוחקת, נשמח לסייע בהתאם ליכולתנו בצירי התנועה המרכזיים.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם גוררים אופנועים?</h3>
              <p>לא, אנו מתמחים אך ורק ברכבים פרטיים ומסחריים. לטיפול באופנועים מומלץ לפנות לספקים ייעודיים לכלים דו-גלגליים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}