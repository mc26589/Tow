import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "פינוי רכב לפירוק בקריית ביאליק | שירות מהיר ומחיר הוגן 24/7",
  description: "צריכים לפנות רכב לפירוק בקריית ביאליק? אנו מציעים שירות פינוי רכבים מהיר, אמין ומקצועי לכל סוגי הרכבים. התקשרו עכשיו לקבלת הצעת מחיר הוגנת!",
  alternates: {
    canonical: "/areas/haifa-general/towing-for-scrap-kiryat-bialik"
  }
};

export default function Page() {
  return (
    <main className="bg-neutral-950 min-h-screen">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">גרר רכבים לפירוק בקריית ביאליק</h1>
          <p className="text-xl mb-8">פינוי רכבים לפירוק בקריית ביאליק והסביבה – שירות מהיר, אמין ומקצועי לכל סוגי הרכבים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
            <WhatsAppCTA cityName="קריית ביאליק" />
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 text-white">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי רכב לפירוק?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3">זמינות מלאה</h3>
            <p>אנו זמינים עבורכם 24/7 לכל קריאה בקריית ביאליק והקריות. אנו מפעילים גם שירותי <Link href="/areas/haifa-general/fast-towing-services-road-22-krayot-bypass" className="text-blue-400 underline">גרירה מהירים בכביש 22</Link> לתושבי האזור.</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3">שירות מקצועי</h3>
            <p>צוות מיומן המבצע פינוי בטוח של רכבים פרטיים, מסחריים ורכבי 4x4. אם נתקעתם באזור, אנו גם מספקים <Link href="/areas/haifa-general/pinui-rechev-grotah-grira-check-post-haifa-krayot-lechalafim" className="text-blue-400 underline">שירותי גרירת רכבים לפירוק בצ'ק פוסט והקריות</Link>.</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3">מחירים הוגנים</h3>
            <p>אנו מציעים מחיר הוגן עבור פינוי הרכב שלכם. במידה ואתם זקוקים גם לפתרונות גרירה אחרים, בדקו את שירותי <Link href="/areas/haifa-general/grar-zol-lerchev-takua-bekiryat-yam" className="text-blue-400 underline">גרר זול לרכב תקוע בקריית ים</Link>.</p>
          </div>
        </div>
        
        <div className="mt-12 p-8 bg-neutral-900 rounded-xl border border-red-900/30">
          <h3 className="text-2xl font-bold text-red-500 mb-4">הערה חשובה</h3>
          <p>אנו מתמחים בפינוי רכבים, רכבים מסחריים ורכבי 4x4 בלבד. שירותינו אינם כוללים גרירה או פינוי של אופנועים מכל סוג שהוא.</p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 text-white border-t border-neutral-800">
        <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על פינוי רכב לפירוק</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">תוך כמה זמן תגיעו אלי בקריית ביאליק?</h3>
            <p className="text-neutral-300">אנו משתדלים להגיע לכל קריאה באזור הקריות תוך זמן קצר ככל האפשר, בהתאם לעומסי התנועה.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">האם אתם קונים רכבים לברזל?</h3>
            <p className="text-neutral-300">כן, אנו מבצעים רכישה ופינוי של רכבים ישנים ורכבי גרוטאות לפירוק במחיר הוגן ושקוף.</p>
          </div>
        </div>
      </section>
    </main>
  );
}