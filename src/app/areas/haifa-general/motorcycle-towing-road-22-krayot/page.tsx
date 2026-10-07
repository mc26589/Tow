import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 עוקף קריות - הגעה מהירה תוך 30 דקות | 24/7",
  description: "נתקעת בכביש 22 עוקף קריות? גרר מקצועי זמין 24/7 עם מחיר הוגן ושקיפות מלאה. הגעה מהירה לכל אזור הקריות והצפון. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/motorcycle-towing-road-22-krayot"
  }
};

export default function Page() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            שירותי גרירה וחילוץ רכבים בכביש 22 (עוקף קריות) 24/7
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            זקוק לגרר בעוקף קריות? אנו מעניקים שירותי חילוץ מקצועיים לרכבים פרטיים ומסחריים בכל אזור כביש 22. הגעה מהירה, מחיר הוגן וזמינות מלאה סביב השעון.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              התקשר עכשיו לחילוץ רכב
            </a>
            <WhatsAppCTA cityName="כביש 22 והקריות" />
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים בצפון - כביש 22 עוקף קריות</h2>
        <p className="text-lg leading-relaxed mb-6">
          תקיעת רכב בצירי תנועה מהירים כמו כביש 22 מחייבת מענה מקצועי ובטיחותי. אנו מתמחים בחילוץ וגרירת רכבים לכל מוסך מבוקש. למחפשים פתרונות נוספים, אנו ממליצים על <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-400 hover:underline">גרירה דחופה בעוקף קריות במחיר משתלם</Link>. במידה ומדובר בתקלה חשמלית, ניתן להיעזר בשירותי <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-400 hover:underline">גרירה לרכב חשמלי ופריקת מצבר בכביש 22</Link>. אנו מספקים מעטפת שירות מלאה, כולל גרירת רכב לאחר תאונה או תקלה מכנית מורכבת.
        </p>

        <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על שירותי גרירה בכביש 22</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg">באילו שעות ניתן לקבל שירות גרירה בכביש 22?</h4>
              <p>אנו פועלים 24 שעות ביממה, 7 ימים בשבוע, כולל סופי שבוע וחגים, ומכירים את כל המחלפים של כביש 22.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">מהו זמן ההגעה הממוצע לאחר הזמנת גרר?</h4>
              <p>אנו מתחייבים להגעה מהירה ככל הניתן, בדרך כלל תוך 30 דקות לכל נקודה לאורך כביש 22 והקריות.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">כיצד נקבע מחיר הגרירה?</h4>
              <p>המחיר נקבע בהתאם למרחק הגרירה, סוג הרכב (פרטי או מסחרי) ותנאי הדרך. אנו מקפידים על שקיפות מלאה ומחירים הוגנים ללא הפתעות.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}