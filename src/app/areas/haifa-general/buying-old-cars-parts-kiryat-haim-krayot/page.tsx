import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "פינוי וגרירת רכבים ישנים לחלפים בקריות | שירות 24/7 ללא עלות",
  description: "צריכים לגרור רכב ישן לחלפים בקרית חיים והקריות? אנו מבצעים גרירת רכבי גרוטאה ורכבים מושבתים ללא עלות. שירות מקצועי, מהיר וזמין 24/7. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/buying-old-cars-parts-kiryat-haim-krayot",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": BUSINESS_INFO.name || "שירותי גרירה וחילוץ חירום חיפה והקריות",
    "description": "שירותי גרירה ופינוי רכבים ישנים, גרוטאות ורכבים המיועדים לחלפים בקרית חיים והקריות.",
    "url": "https://yourdomain.com/areas/haifa-general/buying-old-cars-parts-kiryat-haim-krayot",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "0",
    "areaServed": {
      "@type": "Place",
      "name": "חיפה והקריות"
    },
    "serviceType": ["גרירת רכבים", "פינוי רכבי גרוטאה", "גרירת רכבים לחלפים"]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">מי קונה רכבים ישנים לחלפים בקרית חיים והקריות?</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            חשוב לנו להבהיר: אנו לא קונים רכבים, אך אנו המומחים לגרירת ופינוי רכבים ישנים לחלפים. אם סגרתם עסקה מול קונה ומחפשים שירות אמין,
            אנחנו הכתובת שלכם. למידע נוסף על <Link href="/areas/haifa-general/buying-cars-for-scrap-haifa-krayot" className="underline font-bold">קניית רכבים לפירוק בחיפה והקריות</Link>, כדאי להכיר את כל האפשרויות.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות בנושא גרירת רכבים ישנים</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-blue-400">האם אתם קונים רכבים לפירוק?</h3>
              <p>לא, אנו חברת גרירה מתמחה. אנו מסייעים בפינוי הרכב לכל יעד שתבחרו, כולל מגרשי פירוק מורשים כמו ב-<Link href="/areas/haifa-general/scrap-car-removal-for-parts-kiryat-motzkin" className="text-blue-300 underline">קרית מוצקין</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400">האם השירות זמין בקריות?</h3>
              <p>כן, אנו פועלים 24/7 בכל אזור הקריות, כולל חיפה, קרית ים, קרית ביאליק וקרית מוצקין, עם פתרונות מהירים לגרירה ב-<Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="text-blue-300 underline">קרית ביאליק</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}