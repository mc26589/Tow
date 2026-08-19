import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 (עוקף קריות) - הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעת בכביש 22 עוקף קריות? שירותי גרירה מקצועיים לרכב 24/7. הגעה מהירה, מחיר הוגן וזמינות מלאה. התקשרו עכשיו לחילוץ מהיר!",
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
            נתקעת עם הרכב בכביש 22? אנו מעניקים שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים. הגעה מהירה, מחיר הוגן וזמינות 24/7 לאורך עוקף קריות.
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
          תקיעת רכב בצירי תנועה מרכזיים דורשת מענה מיידי. אנו מתמחים בחילוץ רכבים תקועים ומעניקים מעטפת שירות מלאה. אם נתקעתם עם רכב חשמלי, אנו מציעים שירות ייעודי של <Link href="/areas/haifa-general/electric-vehicle-breakdown-towing-route-22-krayot-bypass" className="text-blue-400 hover:underline">גרירת רכב חשמלי בכביש 22</Link>. למקרים דחופים יותר, ניתן להיעזר בשירותי <Link href="/areas/haifa-general/emergency-breakdown-towing-route-22-krayot-bypass" className="text-blue-400 hover:underline">גרירת חירום בעוקף קריות</Link>. אנו מטפלים גם במצבי פריקת מצבר ברכבים חשמליים באמצעות <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-400 hover:underline">גרירת רכב חשמלי עם מצבר פרוק</Link>.
        </p>

        <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירה בכביש 22</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg">האם אתם גוררים רכבים בכל שעות היממה בכביש 22?</h4>
              <p>כן, אנו מפעילים מערך גרירה הפעיל 24/7 ומכיר היטב את כל המחלפים והיציאות של כביש 22 עוקף קריות, כולל נתיבי העליה והירידה מהכביש המהיר.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">מהו זמן ההגעה הממוצע לאחר קריאה?</h4>
              <p>זמן ההגעה תלוי בעומסי התנועה, אך בגלל הקרבה לצירים הראשיים, אנו פועלים להגעה מהירה לכל קריאה באזור קרית אתא, קרית ים וקרית ביאליק.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">באילו מקרים כדאי להזמין גרר?</h4>
              <p>בין אם הרכב עבר תאונה, סובל מתקלה מכנית או שהמצבר התרוקן, מומלץ להזמין שירות גרר מקצועי. אנו מתמחים בחילוץ רכבים פרטיים ומסחריים בכל תנאי הדרך, כולל סיוע לאחר תאונות או תקלות בטיחות דחופות.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}