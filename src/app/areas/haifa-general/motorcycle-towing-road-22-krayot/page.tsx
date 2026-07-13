import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בכביש 22 (עוקף קריות) | הגעה תוך 30 דקות | 24/7",
  description: "נתקעת בכביש 22 עוקף קריות? שירותי גרירה מקצועיים לרכבים 24/7. הגעה מהירה, מחיר הוגן ושירות אמין. התקשרו עכשיו לחילוץ מהיר!",
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
            נתקעת עם הרכב בכביש 22? אנו מעניקים שירותי גרירה מקצועיים לרכבים פרטיים, מסחריים ורכבי שטח. שירות מהיר, אמין וזמין 24/7 לאורך עוקף קריות.
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
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים באזור הקריות וחיפה</h2>
        <p className="text-lg leading-relaxed mb-6">
          תקיעת רכב בצירי תנועה מרכזיים דורשת מענה מיידי. אנו מספקים מעטפת שירות מלאה לנהגים בצפון. אם אתם זקוקים לפתרון זמין, ניתן להתרשם משירותינו כגון גרירה מהירה בכביש 22, או פתרונות מתקדמים עבור 
          <Link href="/areas/haifa-general/electric-vehicle-accident-towing-route-22-krayot-bypass" className="text-blue-400 hover:underline"> גרירת רכב חשמלי תקול בכביש 22</Link>. 
          למי שזקוק לשירות באזורים סמוכים, אנו ממליצים על <Link href="/areas/haifa-general/affordable-24-7-towing-kiryat-bialik-flat-tire" className="text-blue-400 hover:underline">גרירה בקריית ביאליק</Link> או <Link href="/areas/haifa-general/affordable-car-towing-kiryat-motzkin-24-7" className="text-blue-400 hover:underline">גרירה בקריית מוצקין</Link>.
        </p>

        <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירה בכביש 22</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg">האם אתם גוררים רכבים בכל שעות היממה בכביש 22?</h4>
              <p>כן, אנו מפעילים מערך גרירה הפעיל 24/7 ומכיר היטב את צירי התנועה המרכזיים באזור הקריות, כולל עוקף קריות.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">מהו זמן ההגעה הממוצע לאחר קריאה?</h4>
              <p>זמן ההגעה תלוי בעומסי התנועה בכביש 22, אך אנו עושים כל מאמץ להגיע במהירות המקסימלית לכל קריאה בקרית ים, קרית חיים וקרית אתא.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">אילו סוגי רכבים אתם גוררים?</h4>
              <p>אנו נותנים מענה לרכבים פרטיים, רכבים מסחריים ורכבי שטח. לבירור על <Link href="/areas/haifa-general/cheap-towing-check-post-kiryat-ata" className="text-blue-400 hover:underline">גרירה זולה בצ'ק פוסט וקרית אתא</Link> ניתן לפנות אלינו בכל עת.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}