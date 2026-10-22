import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר רכבים לפירוק בקריית אתא וכביש 22 | הגעה תוך 30 דקות!",
  description: "צריכים לפנות רכב לפירוק בקריית אתא או על כביש 22? שירות גרירה מהיר ומקצועי 24/7 במחיר הוגן. פינוי רכבים ללא עיכובים. התקשרו עכשיו להצעת מחיר!",
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
        "name": "כמה זמן לוקח לכם להגיע לכביש 22 בקריית אתא?",
        "acceptedAnswer": { "@type": "Answer", "text": "אנו ערוכים למתן מענה מהיר בפריסה רחבה בקריית אתא ובכל אורך כביש 22, בדרך כלל תוך 30 דקות בלבד." }
      },
      {
        "@type": "Question",
        "name": "האם אתם קונים רכבים לפירוק באזור הקריות?",
        "acceptedAnswer": { "@type": "Answer", "text": "כן, אנו מספקים שירותי פינוי וקניית רכבים לפירוק באזור חיפה והקריות, כולל ליווי מלא ופינוי מהיר." }
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
          <p className="text-xl mb-8">נתקעתם עם רכב מושבת בקריית אתא או לאורך כביש 22? אנו כאן לפינוי מהיר ומקצועי בכל שעה.</p>
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
        <p className="mb-4">אנו מתמחים בפינוי רכבים לפירוק באזור קריית אתא וציר כביש 22. זקוקים למידע נוסף? בקרו בדף ה-<Link href="/areas/haifa-general/scrap-car-buyer-haifa-krayot-immediate-removal" className="text-blue-600 underline">קונה רכבים לפירוק בחיפה והקריות</Link> שלנו.</p>
        <p className="mb-4">אם אתם תקועים בדרך, אנו מציעים גם פתרונות משלימים כמו <Link href="/areas/haifa-general/towing-road-22-krayot-bypass" className="text-blue-600 underline">גרירת רכב בכביש 22 עוקף קריות</Link> וכן שירותי <Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="text-blue-600 underline">גרירה לאחר תאונה בכביש 22</Link>.</p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו?</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות מלאה 24/7 לכל אורך כביש 22.</li>
          <li>מחירים הוגנים עבור פינוי רכבים לפירוק.</li>
          <li>שירות מקצועי בקריית אתא, ללא המתנה מיותרת.</li>
        </ul>
        <p className="mt-4 text-sm text-gray-600">*שימו לב: אנו מתמחים בגרירת רכבים ופינוי לפירוק, אך לא מספקים שירותי גרירה לאופנועים.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על גרירה ופירוק רכבים</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg">האם אתם נותנים שירות גם באזורים סמוכים לכביש 22?</h4>
              <p>בהחלט. אנו פעילים בחיפה, קריית אתא, והקריות. אם אתם זקוקים לשירות באזור אחר, אנו מציעים גם <Link href="/areas/haifa-general/buying-cars-for-scrap-check-post-haifa" className="text-blue-600 underline">קניית רכבים לפירוק בצ'ק פוסט</Link> ובסביבתה.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">מה עושים אם הרכב לא מניע על הכביש המהיר?</h4>
              <p>במקרים של רכב תקוע בכביש מהיר כמו כביש 22, חשוב לפנות בבטחה ולדאוג לגרירה מקצועית. ניתן להיעזר בשירותי <Link href="/areas/haifa-general/sherutei-grira-hilutz-krayot-kavish-22" className="text-blue-600 underline">גרירה וחילוץ בקריות ובכביש 22</Link> שלנו לפתרון מיידי.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}