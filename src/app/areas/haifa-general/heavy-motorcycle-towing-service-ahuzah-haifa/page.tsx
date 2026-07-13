import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכבים באחוזה חיפה 24/7 | חילוץ מהיר ומחיר הוגן",
  description: "נתקעתם עם הרכב באחוזה? שירותי גרירה וחילוץ מקצועיים בחיפה 24/7. הגעה מהירה, מחיר שקוף ושירות אדיב לכל סוגי הרכבים. התקשרו עכשיו להזמנת גרר!",
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
            שירות גרירה וחילוץ באחוזה חיפה: מענה מקצועי 24/7
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            זקוקים לגרר בדחיפות באחוזה? אנו מגיעים במהירות לכל נקודה בשכונה. צוות המומחים שלנו ערוך לחילוץ רכבים פרטיים, מסחריים ורכבי שטח בכל שעות היממה.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="אחוזה חיפה" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              חיוג מהיר לגרר באחוזה
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בשירותי הגרירה שלנו באחוזה?</h2>
        <p className="mb-4">
          הניסיון שלנו בכבישי חיפה מאפשר לנו להגיע לזירות תקלה בזמן קצר. אם אתם מחפשים שירות אמין באזור הכרמל, אנו מספקים מענה מקיף הכולל גם <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-haifa" className="text-blue-400 underline">חילוץ 4x4 מקצועי באזור הכרמל</Link>.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>גרירת רכבים פרטיים ומשפחתיים</li>
          <li>חילוץ מקצועי של רכבי שטח ו-4x4</li>
          <li>גרירת רכבים מסחריים עד 3.5 טון</li>
          <li>סיוע ברכבים חשמליים כולל פינוי בטוח</li>
        </ul>
        <p className="text-sm text-neutral-400">
          *הערה: השירות מתמקד ברכבים ורכבים מסחריים. איננו מספקים שירותי גרירה לדו-גלגליים.
        </p>
      </section>

      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירה באחוזה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">תוך כמה זמן צוות הגרר יגיע לאחוזה?</h3>
              <p className="text-neutral-300">אנו מבינים את הדחיפות שבחילוץ רכב. אנו פורסים ניידות גרר באזור הכרמל כדי להבטיח זמן הגעה מהיר במיוחד ללקוחותינו באחוזה.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">האם אתם מבצעים חילוצי שטח בקרבת אחוזה?</h3>
              <p className="text-neutral-300">כן, במידה ונתקעתם בשטחים פתוחים או בדרכי עפר ליד העיר, אנו מספקים גם <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="text-blue-400 underline">חילוץ רכבי 4x4 ביערות הכרמל</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">האם אתם מטפלים ברכבים שאינם ראויים לנסיעה?</h3>
              <p className="text-neutral-300">במידה והרכב הושבת עקב תאונה או תקלה קשה, אנו מציעים שירות של <Link href="/areas/haifa-general/kone-rehavim-lepiruk-haifa-krayot" className="text-blue-400 underline">קניית רכבים לפירוק בחיפה</Link> במחיר הוגן.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}