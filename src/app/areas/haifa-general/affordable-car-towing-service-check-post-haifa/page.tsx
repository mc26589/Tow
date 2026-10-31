import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בצ'ק פוסט חיפה 24/7 | הגעה תוך 30 דקות | מחיר הוגן",
  description: "נתקעתם בצ'ק פוסט? גרר זמין 24/7 באזור חיפה והסביבה. שירות מקצועי, מהיר ובמחיר הוגן לכל סוגי הרכבים. התקשרו עכשיו להזמנת גרר!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-car-towing-service-check-post-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ בצ'ק פוסט",
    "description": "שירותי גרירת רכב מהירים ואמינים בצ'ק פוסט חיפה והסביבה.",
    "url": `https://yourdomain.com/areas/haifa-general/affordable-car-towing-service-check-post-haifa`,
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "מחיר הוגן",
    "areaServed": { "@type": "City", "name": "חיפה" },
    "image": "https://yourdomain.com/images/towing-truck.jpg",
    "serviceType": "גרירת רכב, חילוץ רכב"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">גרר בצ'ק פוסט חיפה - שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl md:text-2xl mb-8">נתקעתם באזור הצ'ק פוסט? הגרר שלנו בדרך אליכם! שירות גרירה אמין ומקצועי לכל סוגי הרכבים במחיר הוגן.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-bold py-3 px-8 rounded-full">התקשרו עכשיו להזמנת גרר</a>
            <WhatsAppCTA cityName="חיפה והצ'ק פוסט" />
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-gray-200 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <section className="mb-12 p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">שירותי גרירה בצ'ק פוסט והסביבה</h2>
            <p className="text-lg mb-4">
              אנו מתמחים במתן פתרונות גרירה וחילוץ למי שנתקע בדרכים באזור חיפה והקריות. בין אם אתם זקוקים לשירותי <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-yellow-400 underline">גרירה דחופה בכביש 22 צ'ק פוסט</Link>, או אם רכבכם הושבת במהלך הנסיעה, הצוות שלנו מגיע במהירות לכל צומת מרכזי. כמו כן, אנו מציעים שירותי <Link href="/areas/haifa-general/towing-services-road-22-krayot-bypass" className="text-yellow-400 underline">גרירה מקצועיים בכביש עוקף קריות</Link> לנהגים הזקוקים לפינוי בטוח.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">שאלות נפוצות על גרירה בצ'ק פוסט</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">תוך כמה זמן הגרר מגיע לצ'ק פוסט?</h3>
                <p>אנו מגיעים לרוב הנקודות תוך כ-30 דקות. זמני ההגעה תלויים בעומסי התנועה בצומת צ'ק פוסט, אך אנו עושים כל מאמץ להגיע במהירות המרבית.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">מה לעשות אם הרכב נתקע בכביש מהיר?</h3>
                <p>אם נתקעתם בדרך מהירה, מומלץ להתרחק מהרכב ולהמתין במקום בטוח. ניתן להיעזר בשירותי <Link href="/areas/haifa-general/emergency-breakdown-towing-route-22-krayot-bypass" className="text-yellow-400">גרירת חילוץ חירום בכביש 22</Link> לקבלת מענה מהיר.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">האם אתם קונים רכבים ישנים לפירוק באזור?</h3>
                <p>בהחלט. אנו מבצעים פינוי של רכבים מושבתים במחיר הוגן. למידע נוסף ניתן לבדוק דפים כמו <Link href="/areas/haifa-general/towing-for-scrap-kiryat-bialik-road-22" className="text-yellow-400">גרירת רכב לפירוק בקרית ביאליק</Link>.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}