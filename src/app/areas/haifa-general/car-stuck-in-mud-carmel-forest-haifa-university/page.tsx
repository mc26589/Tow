import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            חילוץ רכב תקוע בבוץ באזור יערות הכרמל ליד אוניברסיטת חיפה
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            נתקעתם בבוץ? הצוות שלנו זמין 24/7 לחילוץ מקצועי, מהיר ובטוח. אנו מתמחים בחילוצי שטח לרכבים פרטיים, מסחריים ורכבי 4x4.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 text-neutral-200">
        <h2 className="text-3xl font-bold mb-6 text-white">למה לבחור בנו לחילוץ באזור הכרמל?</h2>
        <ul className="space-y-4 text-lg">
          <li>✓ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>✓ מומחיות בחילוץ רכבים תקועים בבוץ ובדרכי עפר.</li>
          <li>✓ הגעה מהירה לכל נקודה סביב אוניברסיטת חיפה ויערות הכרמל.</li>
          <li>✓ מחירים הוגנים ושירות אדיב ומקצועי.</li>
        </ul>
        <p className="mt-8 text-sm text-neutral-400">
          *שימו לב: אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח. איננו מספקים שירותי חילוץ או גרירה לאופנועים.
        </p>
      </section>
    </main>
  );
}