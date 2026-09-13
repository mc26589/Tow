import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 עוקף קריות - הגעה תוך 30 דקות | 24/7",
  description: "נתקעת בכביש 22 עוקף קריות? גרר מקצועי זמין 24/7 עם הגעה מהירה ומחיר הוגן. שירותי חילוץ וגרירה לכל סוגי הרכבים. התקשרו עכשיו לחילוץ מהיר!",
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
            שירותי גרירה וחילוץ רכבים בכביש 22 (עוקף קריות)
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            נתקעת עם הרכב בכביש 22? אנו מעניקים שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים. הגעה מהירה תוך דקות, מחיר הוגן וזמינות 24/7 לאורך עוקף קריות.
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
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה וחילוץ מקצועיים בצפון</h2>
        <p className="text-lg leading-relaxed mb-6">
          תקיעת רכב בצירי תנועה מרכזיים דורשת מענה מיידי. אנו מתמחים בחילוץ רכבים ומעניקים מעטפת שירות מלאה. אם אתם זקוקים לפתרון מקיף, ניתן להיעזר בשירותי <Link href="/areas/haifa-general/fast-towing-services-road-22-krayot-bypass" className="text-blue-400 hover:underline">גרירה מהירה בכביש 22 עוקף קריות</Link>. עבור רכבים כבדים יותר, אנו מספקים <Link href="/areas/haifa-general/emergency-light-truck-towing-route-22-krayot-bypass" className="text-blue-400 hover:underline">גרירת רכב מסחרי ומשאית קלה בעוקף קריות</Link>. למי שמחפש שירות במחיר נוח יותר באזורנו, אנו מציעים גם <Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="text-blue-400 hover:underline">גרירת פלטה זולה בכביש 22</Link>. אנו מטפלים גם במצבי פריקת מצבר או תקלה בטיחותית דחופה.
        </p>

        <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירה בכביש 22</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg">האם אתם גוררים רכבים בכל שעות היממה בכביש 22?</h4>
              <p>כן, אנו מפעילים מערך גרירה הפעיל 24/7 ומכיר היטב את כל המחלפים והיציאות של כביש 22, כולל נתיבי העלייה והירידה מהכביש המהיר לכל אזור הקריות.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">מהו זמן ההגעה הממוצע לאחר קריאה?</h4>
              <p>זמן ההגעה משתנה בהתאם לעומסי התנועה, אך בזכות המיקום האסטרטגי אנו פועלים להגעה תוך 30 דקות לרוב הקריאות בקרית אתא, קרית ים וקרית ביאליק.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">מה טווח המחירים לשירותי גרירה?</h4>
              <p>אנו מקפידים על מחיר הוגן ושקוף. המחיר נקבע לפי מרחק הגרירה, סוג הרכב ותנאי הדרך. אנו מספקים הצעת מחיר מדויקת בשיחת טלפון קצרה בהתאם למיקומכם המדויק על עוקף קריות.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}