import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב בסטלה מאריס חיפה | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם עם הרכב בסטלה מאריס? אנו מספקים שירותי גרירה וחילוץ מקצועיים בחיפה 24/7. הגעה מהירה, מחיר הוגן ושירות לכל סוגי הרכבים. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/motorcycle-towing-stella-maris-haifa",
  },
};

export default function Page() {
  return (
    <main className="bg-neutral-950 min-h-screen text-neutral-100">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            שירותי גרירה וחילוץ רכב בסטלה מאריס חיפה
          </h1>
          <p className="text-xl mb-8">נתקעתם באזור סטלה מאריס? צוות החילוץ שלנו בחיפה כאן בשבילכם, 24/7</p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-neutral-900 p-8 rounded-lg border border-neutral-800">
          <h2 className="text-2xl font-semibold mb-4">שירות גרירה מקצועי בסטלה מאריס והסביבה</h2>
          <p className="mb-6 text-neutral-300">
            הנסיעה בדרכים המתפתלות של אזור סטלה מאריס והכרמל עלולה להיות מאתגרת. אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4. אם נתקעתם באזור, חשוב לפנות לבעל מקצוע מנוסה שמכיר היטב את נתיבי חיפה.
          </p>
          <p className="mb-6 text-neutral-300">
            זקוקים לחילוץ מורכב? אנו מציעים שירותי <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-400 hover:underline">חילוץ רכב תקוע בבוץ בכרמל</Link> או <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="text-blue-400 hover:underline">חילוץ שטח 4x4 ביערות הכרמל</Link>. במידה ומדובר בתקלה ברכב חשמלי, ניתן להזמין <Link href="/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing" className="text-blue-400 hover:underline">גרירת רכב במחיר הוגן באזור אחוזה</Link>.
          </p>
          
          <div className="flex flex-col gap-4 mt-8">
            <WhatsAppCTA cityName="Haifa" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-md text-center transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה וחילוץ בחיפה</h2>
        <div className="space-y-6 text-neutral-300">
          <div>
            <h3 className="font-bold text-white">תוך כמה זמן תגיעו לחילוץ בסטלה מאריס?</h3>
            <p>אנו משתדלים להגיע לכל נקודה בסטלה מאריס ובחיפה תוך זמן קצר, בהתאם לעומסי התנועה בצירים המובילים לכרמל.</p>
          </div>
          <div>
            <h3 className="font-bold text-white">אילו סוגי רכבים אתם גוררים?</h3>
            <p>אנו נותנים שירות לכל סוגי הרכבים הפרטיים והמסחריים הקלים. למידע על שירותים נוספים באזור הצ'ק פוסט, תוכלו לבדוק את שירותי <Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-blue-400">גרירה לאחר תאונה בצומת הצ'ק פוסט</Link>.</p>
          </div>
          <div>
            <h3 className="font-bold text-white">מה עושים אם הרכב לא ניתן לתיקון?</h3>
            <p>במקרים בהם הרכב הוגדר כאובדן להלכה או שאינו ראוי לנסיעה, אנו מספקים שירותי <Link href="/areas/haifa-general/buying-cars-for-scrap-ahoza-haifa" className="text-blue-400">קניית רכבים לפירוק באזור אחוזה</Link> והסביבה.</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoTowing",
            "name": "שירותי גרירה וחילוץ חיפה והקריות",
            "areaServed": "Haifa",
            "priceRange": "$$,$",
            "serviceType": "Towing and Roadside Assistance"
          })
        }}
      />
    </main>
  );
}