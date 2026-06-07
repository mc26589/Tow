import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירה בצ'ק פוסט חיפה - שירות מהיר 24/7 | מחיר הוגן",
  description: "נתקעתם בצומת צ'ק פוסט בחיפה? גרירה מהירה, מקצועית ובמחיר הוגן לכל סוגי הרכבים. הגעה מהירה, זמינות מלאה 24/7. התקשרו עכשיו לפתרון מיידי!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-towing-check-post-haifa",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            גרירה במחיר הוגן לאחר תאונת דרכים בצומת צ'ק פוסט חיפה
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            נתקעתם בתאונה בצומת צ'ק פוסט? אנו כאן עבורכם 24/7 עם שירות גרירה מהיר, מקצועי ובמחיר משתלם. רכבים פרטיים, מסחריים ו-4x4 בלבד.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 text-neutral-200">
        <h2 className="text-3xl font-bold mb-6 text-white">למה לבחור בנו בצומת צ'ק פוסט?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-neutral-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-white">זמינות מלאה</h3>
            <p>אנו פועלים 24 שעות ביממה, 7 ימים בשבוע, כדי להבטיח שלא תישאר תקוע בכביש סואן. אנו מציעים גם <Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="text-blue-400 hover:underline">שירותי גרירה זולים בצ'ק פוסט</Link>.</p>
          </div>
          <div className="p-6 border border-neutral-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-white">מחירים הוגנים</h3>
            <p>אנו מאמינים בשקיפות מלאה ומציעים הצעת מחיר הוגנת ומשתלמת. זקוקים לפתרון גרירה דחוף? בדקו גם <Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-blue-400 hover:underline">גרירה וחילוץ לאחר תאונה בצומת צ'ק פוסט</Link>.</p>
          </div>
          <div className="p-6 border border-neutral-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-white">מומחיות בחילוץ</h3>
            <p>צוות מיומן המכיר את אזור חיפה והצ'ק פוסט. אם הרכב במצב גרוטאה, ניתן לבצע גם <Link href="/areas/haifa-general/buying-cars-for-scrap-check-post-haifa" className="text-blue-400 hover:underline">קניית רכבים לפירוק בצ'ק פוסט</Link>.</p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-white">שאלות נפוצות</h2>
          <div className="space-y-6">
            <div className="border-b border-neutral-800 pb-4">
              <h3 className="text-xl font-semibold text-white">האם אתם גוררים רכבים חשמליים?</h3>
              <p>כן, אנו מספקים פתרונות מתקדמים, למידע נוסף ראו <Link href="/areas/haifa-general/affordable-electric-car-towing-check-post-krayot" className="text-blue-400">גרירת רכב חשמלי בצ'ק פוסט והקריות</Link>.</p>
            </div>
            <div className="border-b border-neutral-800 pb-4">
              <h3 className="text-xl font-semibold text-white">האם השירות כולל פינוי רכבים לפירוק?</h3>
              <p>בהחלט, אנו עוסקים בפינוי גרוטאות רכב ומציעים <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included" className="text-blue-400">קניית רכבים לפירוק בחיפה עם גרירה כלולה</Link>.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-8 bg-neutral-900 rounded-xl border border-neutral-800">
          <p className="text-sm text-neutral-400">
            * חשוב לציין: השירות שלנו מיועד לרכבים פרטיים, מסחריים ורכבי 4x4 בלבד. איננו מספקים שירותי גרירה לאופנועים.
          </p>
        </div>
      </section>
    </main>
  );
}