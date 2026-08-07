import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונים רכבים לפירוק בקרית ים | פינוי מיידי ותשלום הוגן במזומן",
  description: "רוצים למכור רכב ישן או תקול בקרית ים? אנו קונים רכבים לפירוק, תאונה או גרוטאות עם פינוי מהיר, תשלום במזומן ושירות 24/7. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "https://yourdomain.com/areas/haifa-general/kaniyat-rekhavim-yeshanim-lehalafim-kiryat-yam-pinui-meyadi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoTowing",
  "name": "שירותי גרירה ופינוי רכבים לפירוק קרית ים",
  "description": "קונים רכבים ישנים, רכבי גרוטאות ורכבים לפירוק לחלפים בקרית ים והסביבה, עם פינוי מיידי ושירות 24/7. מחירים הוגנים ותשלום במקום.",
  "url": "https://yourdomain.com/areas/haifa-general/kaniyat-rekhavim-yeshanim-lehalafim-kiryat-yam-pinui-meyadi",
  "areaServed": { "@type": "City", "name": "קרית ים" },
  "priceRange": "$",
  "telephone": `+${BUSINESS_INFO.phone}`
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונים רכבים לפירוק בקרית ים – פינוי מיידי ומזומן במקום!</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">תקועים עם רכב ישן שתופס מקום? אנו קונים את כל סוגי הרכבים – פרטיים, מסחריים ושטח, בכל מצב. שירות מהיר, אמין ומקצועי בכל רחבי הקריות.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="קרית ים" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold shadow-lg">התקשרו עכשיו</a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">למה לבחור בנו לפינוי רכבים בקרית ים?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">פינוי מיידי</h3>
              <p>מפנים את הרכב ללא דיחוי. אם אתם זקוקים גם לשירותי גרירה דחופים, בדקו גם <Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="text-blue-300 underline">שירותי גרירה בקרית ביאליק</Link>.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">מחירים הוגנים</h3>
              <p>אנו מציעים את המחיר הטוב ביותר עבור <Link href="/areas/haifa-general/buying-cars-for-scrap-haifa-krayot" className="text-blue-300 underline">קניית רכבים לפירוק בחיפה והקריות</Link> תוך הקפדה על הגינות.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">זמינות 24/7</h3>
              <p>שירות מקצועי סביב השעון לכל בעיה ברכב, כולל סיוע בכבישים מהירים כמו <Link href="/areas/haifa-general/emergency-breakdown-towing-route-22-krayot-bypass" className="text-blue-300 underline">כביש 22 עוקף קריות</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות על פינוי רכבים</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-bold text-lg">באילו אזורים אתם פועלים?</h3>
              <p>אנו פועלים בכל אזור חיפה, הקריות, קרית ים, קרית מוצקין, קרית ביאליק וקרית חיים.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם קונים רכבים ללא טסט?</h3>
              <p>כן, אנו קונים רכבים בכל מצב: ללא טסט, לאחר תאונה, רכבים תקולים או רכבים המיועדים לפירוק לחלפים בלבד.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">כמה זמן לוקח פינוי הרכב?</h3>
              <p>לרוב הפינוי מתבצע תוך מספר שעות מרגע התיאום, תלוי במיקום המדויק שלכם בקרית ים ובזמינות הצוותים שלנו באזור.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}