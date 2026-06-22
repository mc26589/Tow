import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב בסטלה מאריס חיפה | שירות מהיר 24/7 | מחיר הוגן",
  description: "נתקעתם עם הרכב בעלייה לסטלה מאריס בחיפה? אנו מספקים שירותי גרירה מקצועיים, מהירים ובמחיר הוגן לכל סוגי הרכבים. התקשרו עכשיו לחילוץ מהיר!",
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
            שירותי גרירה וחילוץ בסטלה מאריס חיפה והסביבה
          </h1>
          <p className="text-xl mb-8">מענה מהיר לרכבים תקועים בחיפה, 24 שעות ביממה</p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-neutral-900 p-8 rounded-lg border border-neutral-800">
          <h2 className="text-2xl font-semibold mb-4">נתקעתם בסטלה מאריס? אנו כאן לעזור</h2>
          <p className="mb-6 text-neutral-300">
            העלייה התלולה לסטלה מאריס מהווה אתגר לרכבים רבים. חשוב להבהיר: אנו מתמחים בגרירת רכבים פרטיים, רכבים מסחריים ורכבי שטח (4x4). <br />
            <strong>שימו לב: איננו מספקים שירותי גרירה לאופנועים.</strong>
          </p>
          <p className="mb-6 text-neutral-300">
            אם הרכב שלכם נתקע, אנו מציעים שירות אמין ומקצועי. לחיפושים נוספים באזור, תוכלו לבדוק שירותים נוספים כמו 
            <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-forest-near-haifa-university" className="text-blue-400 hover:underline px-1">
              חילוץ רכב תקוע בבוץ באזור אוניברסיטת חיפה
            </Link>
            או 
            <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-400 hover:underline px-1">
              שירותי גרירה דחופים בצומת הצ'ק פוסט
            </Link>.
          </p>
          
          <div className="flex flex-col gap-4 mt-8">
            <WhatsAppCTA cityName="Haifa" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-md text-center transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה בחיפה</h2>
        <div className="space-y-6 text-neutral-300">
          <div>
            <h3 className="font-bold text-white">תוך כמה זמן מגיעים לחילוץ בסטלה מאריס?</h3>
            <p>אנו עושים את מירב המאמצים להגיע תוך דקות ספורות לכל נקודה בחיפה, בהתאם לעומסי התנועה.</p>
          </div>
          <div>
            <h3 className="font-bold text-white">האם השירות כולל חילוץ רכב מרכבי השטח של הכרמל?</h3>
            <p>כן, אנו ערוכים לחילוצי רכב בדרכים מאתגרות. לפרטים נוספים ראו גם <Link href="/areas/haifa-general/emergency-mud-rescue-carmel-forest-haifa" className="text-blue-400">חילוץ רכב בבוץ בכרמל</Link>.</p>
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