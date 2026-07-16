import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב בסטלה מאריס חיפה | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם עם הרכב באזור סטלה מאריס בחיפה? אנו מספקים שירותי גרירה מקצועיים לרכבים פרטיים ומסחריים. הגעה מהירה, שירות 24/7 ומחיר הוגן. התקשרו עכשיו לחילוץ!",
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
          <p className="text-xl mb-8">נתקעתם בסטלה מאריס? אנו כאן עם מענה מהיר לרכב תקוע, 24/7</p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-neutral-900 p-8 rounded-lg border border-neutral-800">
          <h2 className="text-2xl font-semibold mb-4">שירות גרירה מקצועי בסטלה מאריס והסביבה</h2>
          <p className="mb-6 text-neutral-300">
            העלייה התלולה לסטלה מאריס והדרכים המתפתלות בכרמל מהוות אתגר לרכבים רבים. אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4. אם נתקעתם בדרכים, חשוב לפנות לבעל מקצוע מנוסה שמכיר את האזור.
          </p>
          <p className="mb-6 text-neutral-300">
            צריכים שירות נוסף באזור? אנו מציעים גם <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-400 hover:underline">חילוץ רכב תקוע בבוץ בכרמל</Link> או <Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-400 hover:underline">שירותי גרירה לרכב חשמלי באחוזה</Link>.
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
            <p>אנו משתדלים להגיע לכל נקודה בחיפה תוך זמן קצר ככל הניתן, בהתאם לעומסי התנועה באזור סטלה מאריס והכרמל.</p>
          </div>
          <div>
            <h3 className="font-bold text-white">האם אתם נותנים שירות גם באזורים נוספים בחיפה?</h3>
            <p>כן, אנו פעילים בכל אזורי חיפה והקריות. אם אתם זקוקים לשירות באזור הצ'ק פוסט, תוכלו להיעזר בשירותי <Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="text-blue-400">גרירה במחיר הוגן בצומת הצ'ק פוסט</Link>.</p>
          </div>
          <div>
            <h3 className="font-bold text-white">האם אתם גוררים רכבים שיצאו מכלל שימוש?</h3>
            <p>בהחלט. אנו מספקים מענה לרכבים תקועים וגם מבצעים <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot" className="text-blue-400">קניית רכבים לפירוק בחיפה והקריות</Link>.</p>
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
            "priceRange": "$",
            "serviceType": "Towing and Roadside Assistance"
          })
        }}
      />
    </main>
  );
}