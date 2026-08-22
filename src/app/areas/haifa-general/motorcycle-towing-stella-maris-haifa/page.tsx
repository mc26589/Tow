import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר בסטלה מאריס חיפה | הגעה מהירה 24/7 | מחיר הוגן",
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
          <p className="text-xl mb-8">זקוקים לגרר בסטלה מאריס? צוות החילוץ שלנו בחיפה כאן בשבילכם 24/7</p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-neutral-900 p-8 rounded-lg border border-neutral-800">
          <h2 className="text-2xl font-semibold mb-4">שירות גרירה מקצועי בסטלה מאריס והסביבה</h2>
          <p className="mb-6 text-neutral-300">
            הנסיעה בדרכים המתפתלות של אזור סטלה מאריס והכרמל עלולה להוביל לתקלות מפתיעות. אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4. אם נתקעתם באזור, אנו נספק פתרון מהיר ומקצועי. לבעיות דומות בדרכים תלולות, ראו את שירותינו ב- <Link href="/areas/haifa-general/towing-services-stuck-vehicle-steep-hill-ahuza-haifa" className="text-blue-400 hover:underline">גרירת רכב תקוע בשיפוע באחוזה</Link>.
          </p>
          <p className="mb-6 text-neutral-300">
            במקרה של רכב חשמלי שנתקע ללא טעינה, אנו מציעים <Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-400 hover:underline">שירות גרירת רכב חשמלי באחוזה</Link>. אם החילוץ נדרש בדרכי עפר באזור הכרמל, נשמח לסייע ב <Link href="/areas/haifa-general/4x4-rescue-mud-carmel-forest-haifa-university" className="text-blue-400 hover:underline">חילוץ שטח 4x4 ביערות הכרמל</Link>.
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
            <p>אנו פרוסים בכל רחבי חיפה ומשתדלים להגיע לסטלה מאריס תוך דקות ספורות, בהתאם לתנועה.</p>
          </div>
          <div>
            <h3 className="font-bold text-white">באילו אזורים נוספים בחיפה אתם פועלים?</h3>
            <p>אנו מציעים שירות מקיף כולל <Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="text-blue-400">גרירת רכב זולה באזור הצ'ק פוסט</Link> וכן מענה מהיר לדרכים בין-עירוניות כמו <Link href="/areas/haifa-general/towing-stuck-vehicle-road-22-haifa" className="text-blue-400">גרירת רכב בכביש 22</Link>.</p>
          </div>
          <div>
            <h3 className="font-bold text-white">האם אתם רוכשים רכבים תקולים?</h3>
            <p>בהחלט. אם התיקון לא כלכלי, אנו מבצעים <Link href="/areas/haifa-general/pinui-rechev-grotah-grira-check-post-haifa-krayot-lechalafim" className="text-blue-400">פינוי וקניית רכבים לפירוק בצ'ק פוסט</Link> במחיר הוגן.</p>
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