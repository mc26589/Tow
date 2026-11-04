import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכב בכביש 22 (עוקף קריות) | הגעה תוך 30 דקות | 24/7",
  description: "נתקעתם בכביש 22? אנו מספקים שירותי גרירה מקצועיים, אמינים ובמחיר הוגן 24/7. הגעה מהירה לכל הקריות והסביבה. התקשרו עכשיו לסיוע מיידי!",
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
        "name": "האם אתם מגיעים לכל נקודה בכביש 22?",
        "acceptedAnswer": { "@type": "Answer", "text": "כן, אנו מספקים שירותי גרירה לכל אורך כביש 22 (עוקף קריות) ומכירים היטב את צירי התנועה באזור כדי להגיע אליכם במהירות." }
      },
      {
        "@type": "Question",
        "name": "תוך כמה זמן אתם מגיעים בממוצע?",
        "acceptedAnswer": { "@type": "Answer", "text": "אנו שואפים להגיע לכל קריאה לאורך עוקף קריות תוך כ-30 דקות, בהתאם לעומסי התנועה ושעות היום." }
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
          <p className="text-xl mb-8">נתקעתם בדרך? אנו מספקים חילוץ וגרירה מקצועיים לרכבים פרטיים ומסחריים לאורך כביש 22. זמינות מלאה 24 שעות ביממה, הגעה מהירה ומחיר הוגן.</p>
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
            <li>✓ זמינות מלאה בכל שעות היממה – גם בסופי שבוע ובחגים.</li>
            <li>✓ מומחיות בחילוץ רכבים מכל סוג בכביש 22 וסביבתו.</li>
            <li>✓ מענה מיוחד לבעיות מצבר ורכבים חשמליים: <Link href="/areas/haifa-general/electric-vehicle-accident-towing-route-22-krayot-bypass" className="text-blue-600 underline">גרירת רכב חשמלי מעורב בתאונה</Link>.</li>
            <li>✓ שירות חירום מקצועי: <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-600 underline">גרירת חירום משתלמת בכביש 22</Link> לכל רכב פרטי.</li>
          </ul>
          <p>זקוקים לטיפול מקיף? אנו מציעים גם שירותי <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-towing-included" className="text-blue-600 font-bold hover:underline">פינוי רכבים לגריטה</Link> וסיוע ב<Link href="/areas/haifa-general/towing-stuck-vehicle-road-22-haifa" className="text-blue-600 font-bold hover:underline">גרירת רכב תקוע בכביש 22</Link>.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">האם אתם גוררים מהצד של כביש 22?</h3>
              <p>כן, אנו מנוסים מאוד בעבודה לאורך צירי התנועה הראשיים ובמתן מענה בטיחותי ומהיר לכל הנוסעים בדרך.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">מהו אזור הפעילות המרכזי שלכם?</h3>
              <p>אנו פרוסים בכל אזור חיפה והקריות, בדגש על צירים כמו כביש 22 וצומת צ'ק פוסט. למידע נוסף, בדקו את שירותי <Link href="/areas/haifa-general/cheap-towing-check-post-junction" className="text-blue-600 underline">גרירה זולה בצומת צ'ק פוסט</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם מציעים שירותי חילוץ נוספים?</h3>
              <p>כן, אנו נותנים מענה גם למקרים מורכבים יותר באזור חיפה, כגון <Link href="/areas/haifa-general/4x4-mud-rescue-carmel" className="text-blue-600 underline">חילוץ שטח בכרמל</Link> או עזרה לרכבים חשמליים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}