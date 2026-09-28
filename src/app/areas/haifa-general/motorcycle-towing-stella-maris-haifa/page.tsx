import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרר בסטלה מאריס חיפה | גרירת רכבים ואופנועים 24/7 | מחיר הוגן",
  description: "נתקעתם עם הרכב או האופנוע בסטלה מאריס? שירותי גרירה מקצועיים בחיפה 24/7. הגעה מהירה, מחיר הוגן ומקצועיות ללא פשרות. התקשרו עכשיו לפתרון מיידי!",
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
            שירותי גרירה וחילוץ בסטלה מאריס חיפה
          </h1>
          <p className="text-xl mb-8">צריכים גרר דחוף בסטלה מאריס? צוות החילוץ שלנו בחיפה מגיע לכל נקודה בכרמל 24/7</p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-neutral-900 p-8 rounded-lg border border-neutral-800">
          <h2 className="text-2xl font-semibold mb-4">שירות גרירה אמין ומקצועי לכל סוגי הרכבים</h2>
          <p className="mb-6 text-neutral-300">
            הנסיעה בדרכים המתפתלות של סטלה מאריס עלולה להפתיע. אם הרכב או האופנוע שלכם שבק חיים, אנו כאן לתת מענה מקצועי. במידה ואתם זקוקים לטיפול בדרכים תלולות, אנו מציעים גם <Link href="/areas/haifa-general/towing-service-heavy-motorcycle-breakdown-ahuzah-haifa" className="text-blue-400 hover:underline">שירותי גרירת אופנועים כבדים באחוזה</Link>, ובאזור פרויד אנו מספקים <Link href="/areas/haifa-general/heavy-motorcycle-towing-freud-haifa-price" className="text-blue-400 hover:underline">גרירת אופנוע כבד בפרויד חיפה</Link> במחירים נוחים.
          </p>
          <p className="mb-6 text-neutral-300">
            במקרה של תקיעה בדרכי עפר באזור הכרמל או חילוץ 4x4 מורכב, אנו מספקים פתרונות מהירים, כגון <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-haifa" className="text-blue-400 hover:underline">חילוץ שטח 4x4 בכרמל חיפה</Link>. אל תתפשרו על איכות השירות כשמדובר בבטיחות שלכם על הכביש.
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
        <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה וחילוץ בסטלה מאריס</h2>
        <div className="space-y-6 text-neutral-300">
          <div>
            <h3 className="font-bold text-white">האם אתם מגיעים במהירות לסטלה מאריס?</h3>
            <p>כן, אנו מכירים היטב את הצירים המובילים לסטלה מאריס ושואפים להגעה מהירה ככל הניתן, גם בשעות העומס.</p>
          </div>
          <div>
            <h3 className="font-bold text-white">אילו סוגי כלים אתם גוררים?</h3>
            <p>אנו מתמחים ברכבים פרטיים, רכבים מסחריים ואופנועים. לצורך עבודה באזורים אחרים כגון הצ\"ק פוסט, אנו מציעים <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-400">גרירת רכבים תקולים בצ\"ק פוסט</Link>.</p>
          </div>
          <div>
            <h3 className="font-bold text-white">האם אתם מציעים שירותי פינוי גרוטאות?</h3>
            <p>בהחלט. אם הרכב אינו בר תיקון כלכלי, אנו מבצעים <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal" className="text-blue-400">קניית רכבים לפירוק בחיפה והקריות</Link> כולל גרירה מיידית.</p>
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