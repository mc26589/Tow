import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי כביש 22 הקריות - הגעה מהירה 24/7",
  description: "נתקעתם עם רכב חשמלי בכביש 22 ללא סוללה? שירות גרירה מקצועי ומהיר לכל אזור הקריות במחיר הוגן. הגעה תוך 30 דקות - התקשרו עכשיו לחילוץ בטוח!",
  alternates: {
    canonical: "/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה לרכבים חשמליים כביש 22",
    "description": "שירותי חילוץ וגרירה מקצועיים לרכבים חשמליים שנתקעו ללא סוללה בכביש 22 ובאזור הקריות, 24/7.",
    "url": "https://yourdomain.com/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "areaServed": { "@type": "Place", "name": "כביש 22, קריות, חיפה" }
  };

  return (
    <>
      <Script id="json-ld-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרירת רכב חשמלי בכביש 22 (הקריות) - שירות 24/7</h1>
          <p className="text-xl mb-8">נתקעתם עם סוללה ריקה בכביש 22? אנו מומחים בחילוץ וגרירת רכבים חשמליים בבטיחות מרבית. הגעה מהירה לקריות במחיר הוגן.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full">התקשרו עכשיו לחילוץ: {BUSINESS_INFO.phone}</a>
            <WhatsAppCTA cityName="הקריות" />
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">שירותי גרירה לרכב חשמלי באזור הקריות וכביש 22</h2>
            <p className="mb-4">
              הצטיידנו בציוד חילוץ מתקדם המתאים לרכבים חשמליים רגישים. אנו פועלים לאורך כל נתיבי <Link href="/areas/haifa-general/towing-service-road-22-krayot-bypass" className="text-blue-300 underline">גרירה מהירה בכביש 22 (עוקף קריות)</Link> וזמינים לתת מענה גם ב-<Link href="/areas/haifa-general/cheap-towing-check-post-krayot" className="text-blue-300 underline">גרירה זולה בצ'ק פוסט וקריות</Link>. בין אם מדובר בתקלה טכנית או סוללה מרוקנת, הצוות שלנו יגיע לכל נקודה בבטחה.
            </p>
          </section>

          <section className="mb-16 bg-gray-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-blue-400">שאלות נפוצות על גרירת רכבים חשמליים בכביש 22</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold">האם אתם מבצעים גרירה בטוחה לרכב חשמלי ללא נזק למנוע?</h3>
                <p>בהחלט. אנו מקפידים על גרירה באמצעות עגלת גרר (פלטפורמה) למניעת נזק למערכת ההנעה החשמלית של הרכב, בהתאם להנחיות היצרן.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">תוך כמה זמן תגיעו אלי בכביש 22?</h3>
                <p>זמני ההגעה שלנו באזור הקריות וציר כביש 22 עומדים בממוצע על 30-45 דקות, בהתאם לעומסי התנועה באזור הצ'ק פוסט והקריות.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">מה עושים אם הרכב נתקע באמצע העלייה או במקום מסוכן?</h3>
                <p>במקרים של רכב חשמלי שנתקע במיקום מסוכן על כביש 22, אנו מתעדפים את הקריאה שלכם ומגיעים במהירות האפשרית כדי לפנות את הרכב בבטחה לשוליים או לנקודת טעינה קרובה.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}