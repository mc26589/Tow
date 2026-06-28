import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ תאונות משאיות באחוזה, חיפה | שירות מהיר 24/7 | מחיר הוגן",
  description: "נתקעתם עם המשאית באחוזה? שירות חילוץ תאונות מקצועי ומהיר 24/7. הגעה מיידית למשאיות, רכבים מסחריים ו-4X4. התקשרו עכשיו למחיר הוגן!",
  alternates: {
    canonical: "/areas/haifa-general/truck-accident-recovery-service-ahuzah-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ 24/7 באחוזה חיפה והקריות",
    "description": "שירותי גרירה וחילוץ מהירים ומקצועיים למשאיות, רכבים פרטיים, מסחריים ורכבי שטח באחוזה, חיפה והקריות, 24 שעות ביממה, 7 ימים בשבוע.",
    "url": "https://yourdomain.com/areas/haifa-general/truck-accident-recovery-service-ahuzah-haifa",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$",
    "areaServed": [{ "@type": "Place", "name": "חיפה" }, { "@type": "Place", "name": "הקריות" }, { "@type": "Place", "name": "אחוזה, חיפה" }],
    "serviceType": ["שירותי גרירה", "חילוץ משאיות", "גרירת רכבים מסחריים", "חילוץ רכבי שטח"]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            שירות חילוץ תאונות משאיות באחוזה חיפה – זמינות 24/7
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            מענה מהיר ומקצועי 24/7 לגרירה וחילוץ משאיות ורכבים מסחריים באזור אחוזה, חיפה והקריות.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-gray-900 hover:bg-gray-200 transition-colors py-3 px-8 rounded-full shadow-lg text-lg">
              התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">מחפשים חילוץ משאיות מקצועי באחוזה?</h2>
            <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
              אנו מספקים מענה מיידי לכל צורך בגרירה וחילוץ משאיות באזור אחוזה. אם אתם זקוקים גם ל-<Link href="/areas/haifa-general/24-7-towing-electric-vehicle-battery-dead-ahuzah-haifa" className="text-blue-300 underline">שירותי רכב חשמלי באחוזה</Link> או נתקעתם בדרכים סמוכות כמו ב-<Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-300 underline">כביש 22</Link>, אנו כאן לשירותכם.
            </p>
          </section>

          <section className="mb-12 bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-300">שאלות נפוצות</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl">האם אתם מחלצים רכבים שנתקעו בבוץ?</h3>
                <p>כן, אנו מתמחים בחילוצי שטח, למידע נוסף ראו <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-region" className="text-blue-300 underline">חילוץ בוץ באזור הכרמל</Link>.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl">האם אתם גוררים אופנועים?</h3>
                <p>לא, איננו מספקים שירותי גרירה לאופנועים, אנו מתמקדים במשאיות, רכבים מסחריים ורכבים פרטיים.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}