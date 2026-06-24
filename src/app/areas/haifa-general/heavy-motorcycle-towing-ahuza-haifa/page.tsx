import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר לאופנועים כבדים באחוזה חיפה - שירותי גרירה מקצועיים לרכבים</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            חשוב להבהיר: אנו מתמחים בשירותי גרירה וחילוץ לרכבים פרטיים, מסחריים ורכבי 4x4. איננו מספקים שירותי גרירה לאופנועים. אם נתקעת עם רכבך באזור אחוזה, אנו כאן עבורך 24/7.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה וחילוץ באזור אחוזה</h2>
        <p className="mb-4">אנו מבינים את החשיבות של מענה מהיר כאשר הרכב נתקע. למרות שאיננו מטפלים באופנועים, הצי שלנו ערוך לכל סוגי הרכבים האחרים:</p>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>גרירת רכבים פרטיים מכל הסוגים</li>
          <li>חילוץ רכבי שטח ו-4x4</li>
          <li>שירותי גרירה לרכבים מסחריים</li>
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע</li>
        </ul>
        <p className="text-lg font-semibold">צרו קשר לקבלת הצעת מחיר הוגנת ושירות מקצועי ללא פשרות.</p>
      </section>
    </main>
  );
}