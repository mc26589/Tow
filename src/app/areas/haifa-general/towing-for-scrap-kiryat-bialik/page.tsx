import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "פינוי רכב לפירוק בקריית ביאליק | שירות מהיר ומחיר הוגן 24/7",
  description: "צריכים לפנות רכב לפירוק בקריית ביאליק? שירות פינוי רכבים מהיר, אמין ומקצועי לכל סוגי הרכבים. הגעה מהירה, מחיר הוגן ותשלום במזומן במקום. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/towing-for-scrap-kiryat-bialik"
  }
};

export default function Page() {
  return (
    <main className="bg-neutral-950 min-h-screen">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">גרר ופינוי רכבים לפירוק בקריית ביאליק</h1>
          <p className="text-xl mb-8">פינוי רכבים לפירוק בקריית ביאליק והסביבה – שירות מהיר, אמין ומקצועי לכל סוגי הרכבים. הצעת מחיר הוגנת במקום.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
            <WhatsAppCTA cityName="קריית ביאליק" />
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 text-white">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי רכב לפירוק בקריית ביאליק?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3">זמינות מלאה 24/7</h3>
            <p>אנו זמינים עבורכם לכל קריאה בקריות. זקוקים לחילוץ דחוף? אנו מספקים <Link href="/areas/haifa-general/fast-towing-services-road-22-krayot-bypass" className="text-blue-400 underline">שירותי גרירה מהירים בכביש 22 עוקף קריות</Link> לכל רכב שנתקע בדרך.</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3">פריסה אזורית רחבה</h3>
            <p>הצוות שלנו מכיר היטב את אזור חיפה והצפון. אנו מספקים מענה מקצועי גם עבור <Link href="/areas/haifa-general/kaniyat-rekhavim-yeshanim-lehalafim-kiryat-yam-pinui-meyadi" className="text-blue-400 underline">קניית רכבים לפירוק בקריית ים עם פינוי מיידי</Link>.</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3">ציוד מקצועי לכל משימה</h3>
            <p>משתמשים בגרר חדיש לפינוי בטוח. במידה ואתם צריכים פינוי רכב תקוע באזור הצ'ק פוסט, ניתן להזמין גם <Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="text-blue-400 underline">שירותי גרירה משתלמים בצ'ק פוסט</Link>.</p>
          </div>
        </div>
        
        <div className="mt-12 p-8 bg-neutral-900 rounded-xl border border-red-900/30">
          <h3 className="text-2xl font-bold text-red-500 mb-4">חשוב לדעת</h3>
          <p>השירות שלנו מיועד לפינוי רכבים פרטיים, מסחריים וג'יפים בלבד. איננו נותנים שירותי גרירה או פינוי עבור אופנועים. אנו שומרים על מקצועיות בתחום הרכב הקל והכבד.</p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 text-white border-t border-neutral-800">
        <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על פינוי רכב לפירוק</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">תוך כמה זמן תגיעו אלי בקריית ביאליק?</h3>
            <p className="text-neutral-300">אנו מתחייבים להגעה מהירה ככל האפשר לכל רחוב בקריית ביאליק והקריות, תוך מתן עדיפות לקריאות דחופות.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">אילו רכבים אתם מפנים?</h3>
            <p className="text-neutral-300">אנו מפנים את כל סוגי הרכבים: רכבים ללא טסט, רכבים אחרי תאונה, רכבים עם תקלות מכניות משובתות וגרוטאות רכב.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">האם אתם משלמים במקום?</h3>
            <p className="text-neutral-300">כן, במידה והרכב בעל ערך לפירוק, אנו מעבירים תשלום הוגן במזומן או בהעברה בנקאית בעת הפינוי.</p>
          </div>
        </div>
      </section>
    </main>
  );
}