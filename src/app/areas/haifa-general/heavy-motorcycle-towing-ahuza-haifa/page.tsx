import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר רכבים באחוזה חיפה 24/7 - שירות מהיר ומקצועי | מחיר הוגן",
  description: "נתקעת עם הרכב באחוזה? שירותי גרירה מקצועיים 24/7 בחיפה והסביבה. מענה מהיר, מחיר הוגן וצוות מיומן. התקשרו עכשיו לקבלת שירות!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-ahuza-haifa",
  },
};

export default function Page() {
  return (
    <main className="bg-neutral-950 min-h-screen text-neutral-100">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה וחילוץ באחוזה, חיפה - 24/7</h1>
          <p className="text-xl mb-8">צריכים גרר דחוף באחוזה? אנו כאן עם ציוד חדיש ומענה מהיר לכל סוגי הרכבים</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="אחוזה חיפה" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">שירותי גרירה מקצועיים בחיפה והסביבה</h2>
          <p className="text-neutral-300 leading-relaxed">
            אנו מספקים מענה מהיר לכל תושבי שכונת אחוזה. אם אתם מחפשים <Link href="/areas/haifa-general/fast-towing-services-road-22-krayot-bypass" className="text-blue-400 hover:underline">שירותי גרירה מהירים</Link> או חילוץ רכב תקוע, הצוות שלנו עומד לרשותכם. חשוב להבהיר כי השירות שלנו מתמקד ברכבים פרטיים, רכבים מסחריים ורכבי שטח. איננו מספקים שירותי גרירה לאופנועים מכל סוג שהוא.
          </p>
          <p className="text-neutral-300 leading-relaxed">
            נתקעתם בשטח? אנו מתמחים גם ב-<Link href="/areas/haifa-general/hilutz-4x4-butz-carmel-haifa" className="text-blue-400 hover:underline">חילוץ 4x4 בבוץ בכרמל</Link> ובסיוע לרכבים פרטיים שזקוקים לפינוי למוסך. למידע נוסף על פינוי גרוטאות או רכבים ללא טסט, בקרו בעמוד <Link href="/areas/haifa-general/pinui-rechev-grotah-grira-check-post-haifa-krayot-lechalafim" className="text-blue-400 hover:underline">פינוי רכבים לגריטה</Link>.
          </p>

          <div className="mt-12 bg-neutral-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">שאלות נפוצות על שירותי גרירה באחוזה</h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold">האם אתם גוררים אופנועים באחוזה?</p>
                <p className="text-neutral-400">לא, אנו מתמקדים אך ורק ברכבים פרטיים, מסחריים ורכבי שטח (4x4).</p>
              </div>
              <div>
                <p className="font-bold">מה זמן ההגעה המשוער?</p>
                <p className="text-neutral-400">אנו משתדלים להגיע לכל נקודה באחוזה ובחיפה בזמן המהיר ביותר, בהתאם לעומסי התנועה.</p>
              </div>
              <div>
                <p className="font-bold">האם השירות פעיל בסופי שבוע?</p>
                <p className="text-neutral-400">אנו זמינים 24/7 למקרי חירום, לכל שאלה נוספת ניתן ליצור איתנו קשר ישיר.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}