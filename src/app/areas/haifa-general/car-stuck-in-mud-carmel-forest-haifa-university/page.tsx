import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ באוניברסיטת חיפה | יערות הכרמל | הגעה מהירה 24/7",
  description: "נתקעתם בבוץ ביערות הכרמל או ליד אוניברסיטת חיפה? חילוץ רכב מהיר, מקצועי ובטוח 24/7. הגעה תוך זמן קצר, מחיר הוגן ושירות מצוין. התקשרו עכשיו לחילוץ!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-forest-haifa-university"
  }
};

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            חילוץ רכב תקוע בבוץ: יערות הכרמל ואוניברסיטת חיפה
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            נתקעתם בבוץ בדרכי העפר סביב הכרמל? הצוות שלנו זמין 24/7 לחילוץ מקצועי, מהיר ובטוח. מתמחים בחילוצי שטח לרכבים פרטיים ומסחריים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="חיפה והכרמל" />
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
        <ul className="space-y-4 text-lg mb-8">
          <li>✓ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע לכל <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-region" className="text-blue-400 underline">חילוץ רכב בבוץ באזור הכרמל</Link>.</li>
          <li>✓ מומחיות בחילוץ רכבים תקועים בבוץ ובדרכי עפר באזור האוניברסיטה וציר מוריה.</li>
          <li>✓ הגעה מהירה לכל נקודה סביב אוניברסיטת חיפה ופארק הכרמל.</li>
          <li>✓ מחירים הוגנים ושירות אדיב ללא הפתעות.</li>
        </ul>

        <div className="bg-neutral-900 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-white">שאלות נפוצות על חילוצי שטח</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-white">כמה זמן לוקח לכם להגיע ליערות הכרמל?</h4>
              <p>אנו משתדלים להגיע לכל נקודה באזור אוניברסיטת חיפה והכרמל בזמן הקצר ביותר. מרגע הקריאה, הצוות שלנו נערך ליציאה מהירה כדי לחלץ אתכם בבטחה.</p>
            </div>
            <div>
              <h4 className="font-bold text-white">אילו סוגי רכבים אתם מחלצים?</h4>
              <p>אנחנו מתמחים בחילוץ רכבים פרטיים, רכבי 4x4 ורכבים מסחריים קלים. במידה ואתם זקוקים לשירותי גרירה נוספים, ניתן לבדוק גם שירותי <Link href="/areas/haifa-general/cheap-private-car-towing-ahuza-haifa" className="text-blue-400 underline">גרירה באחוזה ובחיפה</Link> שאנו מציעים.</p>
            </div>
            <div>
              <h4 className="font-bold text-white">האם אתם פועלים גם באזורים סמוכים?</h4>
              <p>כן, אנו נותנים מענה רחב לכל אזור הכרמל והסביבה, כולל סיוע למי שזקוק לפתרונות מקצועיים מסוג <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-area" className="text-blue-400 underline">חילוץ רכב תקוע בבוץ באזור הכרמל</Link>.</p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-neutral-400">
          *שימו לב: אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח. איננו מספקים שירותי חילוץ או גרירה לאופנועים.
        </p>
      </section>
    </main>
  );
}