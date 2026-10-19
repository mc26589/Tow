import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בקריות | פינוי מיידי ומזומן 24/7",
  description: "נתקעתם עם רכב ישן או מושבת? קונה רכבים לפירוק בקריות במחיר הוגן ומזומן. פינוי מהיר מהבית, שירות 24/7 בכל אזור הקריות. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-krayot-immediate-removal",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פינוי וקניית רכבים לפירוק בקריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$ - $$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8156",
      "longitude": "35.0675"
    },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בקריות עם פינוי מיידי ומזומן</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            נתקעתם עם רכב ישן, מושבת או רכב לאחר תאונה? אנו מציעים שירות מקצועי של קניית רכבים לפירוק באזור הקריות והסביבה. אנו מתחייבים לפינוי מיידי, שירות אדיב ותשלום במזומן במקום. אם נתקעתם בדרכים, אנו מציעים גם <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="underline">שירותי גרירה לקריות</Link> או לשירות <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot" className="underline">קניית רכבים לפירוק בחיפה והקריות</Link>. הצוות שלנו זמין עבורכם 24 שעות ביממה.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ פינוי מהיר מכל נקודה בקריות ובחיפה.</li>
            <li>✓ קניית רכבים פרטיים, מסחריים ורכבי ארבע על ארבע.</li>
            <li>✓ תשלום הוגן במזומן במקום ללא עיכובים.</li>
            <li>✓ מומחים בחילוץ ופינוי בציר <Link href="/areas/haifa-general/emergency-breakdown-towing-route-22-krayot-bypass" className="underline">כביש 22 בקריות</Link>.</li>
          </ul>
          
          <div className="border-t border-gray-700 pt-8 mt-8">
            <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על פינוי רכבים</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold">באילו מקרים כדאי למכור רכב לפירוק?</h4>
                <p className="text-gray-300">כאשר עלויות התיקון עולות על ערך הרכב, או כאשר מדובר ברכב ישן שאינו עובר טסט, הפתרון הטוב ביותר הוא מכירה לפירוק. אנו מבצעים גם <Link href="/areas/haifa-general/kaniyat-rekhavim-yeshanim-lehalafim-kiryat-yam-pinui-meyadi" className="underline">קניית רכבים ישנים לחלפים בקרית ים</Link> בפינוי מיידי.</p>
              </div>
              <div>
                <h4 className="font-bold">האם אתם פועלים גם באזור הצ׳ק פוסט?</h4>
                <p className="text-gray-300">בהחלט. אנו נותנים שירות נרחב בכל אזור הצ׳ק פוסט והסביבה. אם נתקעתם באזור, אנו מציעים גם <Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="underline">שירותי גרירה בצ׳ק פוסט</Link> לכל יעד שתבחרו.</p>
              </div>
              <div>
                <h4 className="font-bold">מהו הליך הפינוי?</h4>
                <p className="text-gray-300">התהליך פשוט: מתקשרים אלינו, קובעים זמן נוח, ואנחנו מגיעים עם גרר, מעבירים תשלום במזומן ומפנים את הרכב באחריות מלאה. *שימו לב: השירות אינו כולל אופנועים.</p>
              </div>
            </div>
          </div>
          <p className="mt-8 text-sm text-gray-400">
            *השירות מיועד לרכבים בעלי רישיון מוסדר. נא להצטייד בתעודת זהות וברישיון הרכב בעת הפינוי.
          </p>
        </div>
      </section>
    </main>
  );
}