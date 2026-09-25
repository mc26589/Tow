import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בצ'ק פוסט חיפה 24/7 | מחיר הוגן והגעה מהירה עד 30 דקות",
  description: "נתקעתם בצומת צ'ק פוסט בחיפה? גרר מוסמך זמין 24/7 לכל סוגי הרכבים. שירות מהיר, מחיר נוח וטיפול מקצועי. התקשרו עכשיו להגעה תוך 30 דקות!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-towing-check-post-haifa",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen, bg-neutral-950">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            שירותי גרירה מקצועיים בצומת צ'ק פוסט חיפה
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            זקוקים לגרר בצ'ק פוסט? אנו מציעים חילוץ מהיר במחיר ללא תחרות. זמינות מלאה לרכבים פרטיים ומסחריים. במידה ואתם תקועים בדרך, אנו מציעים גם <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="underline font-bold">שירותי גרירה 24/7 בעוקף קריות</Link>.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="צ'ק פוסט חיפה" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר לגרר בצ'ק פוסט
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 text-neutral-200">
        <h2 className="text-3xl font-bold mb-6 text-white">למה להזמין גרר בצ'ק פוסט מאיתנו?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-neutral-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-white">זמינות 24/7</h3>
            <p>אנו מבינים שתקלות קורות בכל זמן. לצורך גרירת רכבים חשמליים באזור, ראו גם את ה-<Link href="/areas/haifa-general/affordable-electric-car-towing-check-post-krayot" className="text-blue-400 hover:underline">שירות הייעודי לרכב חשמלי בצ'ק פוסט וקריות</Link>.</p>
          </div>
          <div className="p-6 border border-neutral-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-white">ציוד חדיש</h3>
            <p>אנו משתמשים בציוד גרירה מתקדם. נתקעתם בדרך עוקף קריות? אנו מספקים מענה מקצועי עם ציוד מתקדם לכל תקלה בכביש 22.</p>
          </div>
          <div className="p-6 border border-neutral-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-white">פתרונות פינוי גרוטאות</h3>
            <p>הצוות שלנו מוסמך גם לטיפול ברכבים ישנים, ניתן לעיין במידע על <Link href="/areas/haifa-general/buying-cars-for-scrap-check-post-haifa" className="text-blue-400 hover:underline">קניית רכבים לפירוק בצ'ק פוסט חיפה</Link>.</p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-white">שאלות נפוצות על גרירה בצ'ק פוסט</h2>
          <div className="space-y-6">
            <div className="border-b border-neutral-800 pb-4">
              <h3 className="text-xl font-semibold text-white">מהו זמן ההגעה הממוצע בצומת צ'ק פוסט?</h3>
              <p>בשל הקרבה לצירים המרכזיים בחיפה, אנו מגיעים לרוב תוך 30 דקות. זקוקים לחילוץ דחוף בכביש 22? אנו פועלים גם ב-<Link href="/areas/haifa-general/emergency-towing-road-22-kiryat-ata-interchange" className="text-blue-400 hover:underline">מחלף קרית אתא</Link>.</p>
            </div>
            <div className="border-b border-neutral-800 pb-4">
              <h3 className="text-xl font-semibold text-white">האם אתם מספקים שירותי גרירה לרכבים חשמליים?</h3>
              <p>כן, אנו מומחים בגרירת רכבים חשמליים כולל מקרים של סוללה ריקה, תוך שימוש במשטח גרירה בטיחותי.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-8 bg-neutral-900 rounded-xl border border-neutral-800">
          <p className="text-sm text-neutral-400">
            * חשוב לציין: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח (4x4). השירות אינו כולל גרירת אופנועים מכל סוג שהוא. שירותינו ניתנים על בסיס זמינות מיידית באזור חיפה והקריות.
          </p>
        </div>
      </section>
    </main>
  );
}