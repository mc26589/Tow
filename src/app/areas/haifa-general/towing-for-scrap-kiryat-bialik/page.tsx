import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "פינוי רכב לפירוק בקריית ביאליק | שירות מהיר, מחיר הוגן 24/7",
  description: "צריכים לפנות רכב לפירוק בקריית ביאליק? שירות פינוי רכבים מקצועי, מחיר הוגן ותשלום במזומן במקום. הגעה מהירה לכל שכונה. התקשרו עכשיו לקבלת הצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/towing-for-scrap-kiryat-bialik"
  }
};

export default function Page() {
  return (
    <main className="bg-neutral-950 min-h-screen">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">פינוי רכב לפירוק בקריית ביאליק – שירות מהיר ומשתלם</h1>
          <p className="text-xl mb-8">נפטרים מהרכב הישן במינימום מאמץ. פינוי רכבים לפירוק בקריית ביאליק והסביבה עם שירות מקצועי, מחיר הוגן ותשלום במזומן במקום.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition"
            >
              התקשרו עכשיו לפינוי מיידי
            </a>
            <WhatsAppCTA cityName="קריית ביאליק" />
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 text-white">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי רכב לפירוק בקריית ביאליק?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3">זמינות 24/7 לתושבי הקריות</h3>
            <p>אנו מציעים שירות מקיף. אם נתקעתם בדרך, ניתן להזמין גם <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-blue-400 underline">גרירה 24 7 עוקף קריות מחיר הוגן</Link> לכל סוגי הרכבים.</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3">מענה מהיר באזור התעשייה</h3>
            <p>אנו מתמחים באזור הקריות ומספקים פתרונות מהירים, כולל <Link href="/areas/haifa-general/affordable-flatbed-towing-kiryat-bialik-industrial-zone" className="text-blue-400 underline">שירותי גרירה למשטח בקריית ביאליק באזור התעשייה</Link> ובסביבתה.</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3">פינוי גם בערים סמוכות</h3>
            <p>השירות שלנו חוצה גבולות מוניציפליים. אנו מבצעים גם <Link href="/areas/haifa-general/scrap-car-removal-for-parts-kiryat-motzkin" className="text-blue-400 underline">פינוי רכבים לפירוק בקריית מוצקין</Link> תוך עמידה בלוחות זמנים קפדניים.</p>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 text-white border-t border-neutral-800">
        <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על פינוי רכב לפירוק</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">איך מתבצע תהליך פינוי הרכב בקריית ביאליק?</h3>
            <p className="text-neutral-300">התהליך פשוט: אתם מתקשרים, אנו מתאמים הגעה למקום הימצאות הרכב, בודקים את מצב הרכב ומשלמים לכם במזומן בעת הפינוי.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">האם אתם קונים רכבים ללא טסט?</h3>
            <p className="text-neutral-300">בוודאי. אנו קונים רכבים ללא טסט, רכבים מושבתים, רכבים שעברו תאונה וכל רכב המיועד לפירוק. אנו מציעים שירות דומה גם באזור <Link href="/areas/haifa-general/towing-for-scrap-kiryat-ata-road-22" className="text-blue-400 underline">קריית אתא על כביש 22</Link>.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">מדוע כדאי לפנות לרכב לפירוק ולא למכור כרכב נוסע?</h3>
            <p className="text-neutral-300">לעיתים עלות התיקון של הרכב עולה על ערכו בשוק. פינוי לפירוק חוסך לכם זמן, הוצאות ביטוח וטסט ומעניק לכם מזומן מידי עבור הברזל והחלפים.</p>
          </div>
        </div>
      </section>
    </main>
  );
}