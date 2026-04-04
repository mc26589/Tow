import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

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
            <p>אנו פועלים 24 שעות ביממה, 7 ימים בשבוע, כדי להבטיח שלא תישאר תקוע בכביש סואן.</p>
          </div>
          <div className="p-6 border border-neutral-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-white">מחירים הוגנים</h3>
            <p>אנו מאמינים בשקיפות מלאה ומציעים הצעת מחיר הוגנת ומשתלמת ללא הפתעות מיותרות.</p>
          </div>
          <div className="p-6 border border-neutral-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-white">מומחיות בחילוץ</h3>
            <p>צוות מיומן המכיר את אזור חיפה והצ'ק פוסט, עם ציוד מתקדם לטיפול ברכבים לאחר תאונה.</p>
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