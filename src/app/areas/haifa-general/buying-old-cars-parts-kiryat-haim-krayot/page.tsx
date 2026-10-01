import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "פינוי וגרירת רכבים ישנים לחלפים בקריות | שירות 24/7 מהיר",
  description: "זקוקים לפינוי רכב ישן או גרוטאה בקרית חיים והקריות? אנו מציעים שירות גרירה מקצועי, אמין וזמין 24/7. הגעה מהירה לכל נקודה. התקשרו עכשיו לקבלת שירות!",
  alternates: {
    canonical: "/areas/haifa-general/buying-old-cars-parts-kiryat-haim-krayot",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": BUSINESS_INFO.name || "שירותי גרירה וחילוץ חירום חיפה והקריות",
    "description": "שירותי גרירה ופינוי רכבים ישנים ורכבים המיועדים לחלפים בקרית חיים והקריות.",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרירה ופינוי רכבים ישנים לחלפים בקרית חיים והקריות</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            נתקעתם עם רכב ישן שתופס מקום? אנו מומחים בגרירת רכבים לפירוק ופינוי רכבי גרוטאה באזור הקריות. אם תיאמתם מראש מול <Link href="/areas/haifa-general/car-scrapping-haifa-krayot-immediate-removal" className="underline font-bold">שירות פינוי רכבי גרוטאה</Link>, אנו נדאג שהרכב יגיע ליעדו בבטחה. זקוקים לחילוץ מהיר? אנו פועלים גם בצירי התנועה המרכזיים כמו <Link href="/areas/haifa-general/towing-road-22-krayot-bypass" className="underline font-bold">כביש עוקף קריות</Link>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על גרירת רכבים ופינוי גרוטאות</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-blue-400">האם אתם מבצעים גרירה לכל סוגי הרכבים?</h3>
              <p>אנו מתמחים בגרירת רכבים פרטיים ומסחריים קלים. אם נתקעתם בדרך או שהרכב מושבת, אנו נספק פתרון גרירה במחיר הוגן, כולל סיוע לתושבי <Link href="/areas/haifa-general/cheap-towing-kiryat-motzkin-fair-price" className="text-blue-300 underline">קרית מוצקין</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400">מה האזורים בהם אתם פועלים בקריות?</h3>
              <p>השירות שלנו זמין 24/7 בכל אזור הקריות. אנו מספקים מענה מהיר ב-<Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="text-blue-300 underline">קרית ביאליק</Link>, קרית ים, קרית חיים וקרית אתא.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400">כיצד ניתן לקבל הצעת מחיר לפינוי רכב לפירוק?</h3>
              <p>אנו אמנם חברת גרירה, אך נשמח להוביל את הרכב שלכם לכל מגרש מורשה. לפרטים נוספים על מחירי פינוי וקניית רכבים לפירוק באזור הצפון, כדאי לבדוק גם אפשרויות ל-<Link href="/areas/haifa-general/cash-for-scrap-cars-kiryat-motzkin" className="text-blue-300 underline">פירוק רכבים בקרית מוצקין</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}