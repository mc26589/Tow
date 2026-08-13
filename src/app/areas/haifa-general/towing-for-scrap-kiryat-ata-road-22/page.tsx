import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר רכבים לפירוק בקריית אתא וכביש 22 | הגעה תוך 30 דקות!",
  description: "נתקעתם עם רכב לפירוק בקריית אתא? שירות גרירה מהיר ומקצועי על כביש 22 במחיר הוגן. זמינים 24/7 לכל סוגי הרכבים. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/towing-for-scrap-kiryat-ata-road-22"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "כמה זמן לוקח לכם להגיע לכביש 22?",
        "acceptedAnswer": { "@type": "Answer", "text": "אנו ערוכים למתן מענה מהיר בפריסה רחבה בקריית אתא ובכל אורך כביש 22, בדרך כלל תוך 30 דקות." }
      },
      {
        "@type": "Question",
        "name": "האם אתם קונים רכבים לפירוק באזור?",
        "acceptedAnswer": { "@type": "Answer", "text": "כן, אנו מספקים שירותי פינוי וקניית רכבים לפירוק באזור חיפה והקריות כולל ליווי מלא." }
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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכבים לפירוק בקריית אתא וכביש 22 – שירות מהיר 24/7</h1>
          <p className="text-xl mb-8">צריכים לפנות רכב תקול או מושבת? הגרר שלנו ממתין בקריית אתא ובציר כביש 22.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition">
              התקשרו עכשיו: פינוי רכב מהיר
            </a>
            <WhatsAppCTA cityName="קריית אתא וכביש 22" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות גרירה לפירוק בקריית אתא וציר 22</h2>
        <p className="mb-4">אנו מתמחים בפינוי רכבים לפירוק באזור קריית אתא וציר כביש 22. זקוקים למידע נוסף על קניית רכבים? בקרו בדף ה-<Link href="/areas/haifa-general/car-scrapping-haifa-krayot" className="text-blue-600 underline">פינוי רכבים לפירוק בחיפה והקריות</Link> שלנו.</p>
        <p className="mb-4">הצוות שלנו מעניק מענה מקצועי לכל סוגי הרכבים המסחריים והפרטיים. אנו לא מספקים שירותי גרירה לאופנועים.</p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו?</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות מלאה 24/7 לכל אורך כביש 22.</li>
          <li>מחירים הוגנים עבור פינוי רכבים לפירוק.</li>
          <li>שירות מנוסה בקריית אתא והסביבה.</li>
        </ul>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על שירותי גרירה בקריית אתא</h2>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">מהו אזור הפעילות שלכם?</h4>
              <p>אנו פרוסים בכל אזור חיפה, הקריות, ועל כביש 22. כמו כן, אנו מציעים שירותי <Link href="/areas/haifa-general/cheap-towing-check-post-haifa-fast-service" className="text-blue-600 underline">גרירה מהירה בצ'ק פוסט</Link> ובכל הסביבה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}