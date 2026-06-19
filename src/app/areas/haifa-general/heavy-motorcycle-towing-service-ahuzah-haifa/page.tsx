import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכבים באחוזה חיפה 24/7 | שירות מהיר ומחיר הוגן",
  description: "נתקעתם עם הרכב באחוזה? שירותי גרירה וחילוץ רכבים מקצועיים בחיפה 24/7. הגעה מהירה, מחיר שקוף ושירות אדיב. התקשרו עכשיו להזמנת גרר!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-towing-service-ahuzah-haifa",
  },
};

export default function Page() {
  return (
    <main className="bg-neutral-950 min-h-screen text-neutral-100">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            שירות גרירה וחילוץ באחוזה חיפה: רכבים פרטיים, מסחריות ורכבי שטח
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            זקוקים לחילוץ מהיר באחוזה? אנו כאן עבורכם 24/7. צוות הגרר המקצועי שלנו זמין לכל תקלה בדרך. שימו לב: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח בלבד.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="אחוזה חיפה" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              חיוג מהיר לשירות
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים באחוזה</h2>
        <p className="mb-4">
          הצוות שלנו פועל בפריסה רחבה בחיפה ובאזור אחוזה, ומעניק מענה מהיר לכל סוגי הרכבים. אם אתם מחפשים <Link href="/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing" className="text-blue-400 underline">שירות גרירה זול ושקוף באחוזה</Link>, הגעתם למקום הנכון.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>גרירת רכבים פרטיים ומשפחתיים</li>
          <li>חילוץ רכבי שטח ו-4x4</li>
          <li>גרירת רכבים מסחריים</li>
          <li>סיוע ברכבים חשמליים כולל <Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-400 underline">גרירה עקב תקלה בסוללה</Link></li>
        </ul>
        <p className="text-sm text-neutral-400">
          *הערה: השירות אינו כולל גרירת אופנועים או כלים דו-גלגליים.
        </p>
      </section>

      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירה באחוזה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">תוך כמה זמן תגיעו אלי באחוזה?</h3>
              <p className="text-neutral-300">אנו ערוכים להגעה מהירה בכל אזורי חיפה. לרוב אנו מגיעים תוך זמן קצר מרגע הקריאה בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">האם אתם גוררים רכבים שיצאו מכביש באזור הכרמל?</h3>
              <p className="text-neutral-300">כן, אנו מספקים שירותי חילוץ מקצועיים. במידה ונתקעתם בשטח, ניתן לבדוק אפשרות ל- <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-haifa" className="text-blue-400 underline">חילוץ 4x4 מקצועי באזור הכרמל</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">האם אתם קונים רכבים לפירוק באחוזה?</h3>
              <p className="text-neutral-300">במידה והרכב אינו בר תיקון, אנו עוסקים גם בתחום של <Link href="/areas/haifa-general/buying-cars-for-scrap-ahoza-haifa" className="text-blue-400 underline">קניית רכבים לפירוק</Link> באזור אחוזה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}