import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר רכב בכביש 22 עוקף קריות | שירות מהיר 24/7 | מחיר הוגן",
  description: "נתקעת בכביש 22 עוקף קריות? אנו מספקים שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים. הגעה מהירה, מחיר הוגן ושירות 24/7. התקשרו עכשיו לחילוץ!",
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
            נתקעת עם הרכב בכביש 22? אנו מעניקים שירותי גרירה מקצועיים לרכבים פרטיים, מסחריים ורכבי 4x4. שימו לב: השירות מיועד לרכבים בלבד, איננו מספקים שירותי גרירה לאופנועים.
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
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה באזור הקריות וחיפה</h2>
        <p className="text-lg leading-relaxed mb-6">
          אנו מבינים את הדחיפות בעת תקיעת רכב בצירי תנועה מרכזיים כמו כביש 22. אם אתם זקוקים לסיוע, הצוות שלנו זמין באזור הקריות והסביבה. מעבר לשירותי גרירה, אנו מציעים מגוון פתרונות נוספים, כגון <Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="text-blue-400 hover:underline">שירותי גרירה בצומת צ'ק פוסט</Link> או פתרונות מתקדמים עבור <Link href="/areas/haifa-general/electric-vehicle-accident-towing-route-22-krayot-bypass" className="text-blue-400 hover:underline">גרירת רכב חשמלי בכביש 22</Link>.
        </p>

        <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg">האם אתם גוררים אופנועים בכביש 22?</h4>
              <p>לא, אנו מתמחים אך ורק בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי שטח. איננו ערוכים לשינוע דו-גלגלי.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">מהו זמן ההגעה המשוער בכביש עוקף קריות?</h4>
              <p>אנו משתדלים להגיע לכל קריאה בכביש 22 במהירות האפשרית, בהתאם לעומסי התנועה. לרוב הגעה מתבצעת תוך זמן קצר מרגע הקריאה.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">האם ניתן לפנות רכב שאינו נוסע באזור הקריות?</h4>
              <p>כן, אנו מספקים גם שירותי פינוי רכבים. במידה ומדובר ברכב ישן, ניתן לבדוק אפשרות ל<Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included" className="text-blue-400 hover:underline">קניית רכבים לפירוק בחיפה</Link> כולל גרירה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}