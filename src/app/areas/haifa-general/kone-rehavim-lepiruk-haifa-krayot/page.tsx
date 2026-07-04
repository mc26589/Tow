import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | מזומן ופינוי מהיר 24/7",
  description: "רוצים למכור רכב לפירוק? אנו קונים רכבים בחיפה והקריות במחיר הוגן! פינוי מהיר, שירות 24/7 לכל סוגי הרכבים. התקשרו עכשיו להצעת מחיר משתלמת!",
  alternates: {
    canonical: "/areas/haifa-general/kone-rehavim-lepiruk-haifa-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי קניית רכבים לפירוק וגרירה חיפה והקריות",
    "areaServed": ["Haifa", "Krayot", "Kiryat Bialik", "Kiryat Motzkin", "Kiryat Yam", "Kiryat Ata"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "34.9896"
    },
    "priceRange": "$",
    "serviceType": "Car Scrap and Removal"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות - פינוי מיידי</h1>
          <p className="text-xl mb-8 max-w-3xl">
            זקוקים לשירות מקצועי של פינוי רכבים? אנו קונים רכבים לפירוק בחיפה והקריות ומציעים תשלום הוגן במזומן במקום. אם הרכב ישן, תקול או פגוע, אנו נדאג לפינוי מהיר מהשטח. מחפשים שירות אמין של <Link href="/areas/haifa-general/pinui-rechev-grotah-grira-check-post-haifa-krayot-lechalafim" className="underline">פינוי גרוטאות בצ'ק פוסט</Link>? התקשרו אלינו עוד היום.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">למה לבחור בנו?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">שירות פריסה רחב</h3>
              <p>פינוי מהיר בחיפה ובכל אזור הקריות. אנו מציעים גם <Link href="/areas/haifa-general/towing-for-scrap-kiryat-ata-road-22" className="text-blue-600">גרירת רכבים לפירוק בקרית אתא</Link> ועל ציר 22.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">תשלום הוגן ומיידי</h3>
              <p>אנו מעריכים את הרכב שלכם נכון. אם אתם זקוקים ל-<Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included" className="text-blue-600">קניית רכבים לפירוק בחיפה</Link> כולל גרירה, הגעתם למקום הנכון.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">פתרון כולל לכל מצב</h3>
              <p>אנו מטפלים ברכבים שאינם נוסעים. זקוקים לעזרה בדרך? ניתן להיעזר בשירותי <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-600">גרירה בצ'ק פוסט</Link> במקרה של תקלה דחופה.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">באילו אזורים אתם פועלים בקריות?</h3>
              <p>אנו מספקים שירותי פינוי לכל רחבי הקריות, כולל <Link href="/areas/haifa-general/grar-zol-lerchev-takua-bekiryat-yam" className="text-blue-600">גרירה זולה בקרית ים</Link> ופינוי גרוטאות מכל מוקדי התעשייה והמגורים.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם מפנים רכבים מכל סוג?</h3>
              <p>כן, אנו קונים רכבים פרטיים, מסחריים וגרוטאות. אם נתקעתם בדרכים באזור העוקף, אנו מציעים <Link href="/areas/haifa-general/fast-towing-services-road-22-krayot-bypass" className="text-blue-600">גרירה מהירה בעוקף קריות</Link> לכל מטרה.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">תוך כמה זמן מתבצע הפינוי?</h3>
              <p>ברוב המקרים, אנו מתאמים פינוי תוך זמן קצר מרגע הפנייה. השירות מותאם אישית ללקוח כדי לחסוך לכם זמן יקר ומאמץ.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}