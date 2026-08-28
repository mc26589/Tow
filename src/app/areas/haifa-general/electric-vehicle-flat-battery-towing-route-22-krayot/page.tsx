import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי כביש 22 | חילוץ מהיר 30 דקות | 24/7",
  description: "נתקעתם ללא סוללה בכביש 22? שירות גרירת רכב חשמלי מקצועי באזור הקריות עם פלטפורמה ייעודית. מחיר הוגן ושירות מהיר 24/7. התקשרו עכשיו לחילוץ!",
  alternates: {
    canonical: "/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "גרירת רכב חשמלי כביש 22 עוקף קריות",
    "description": "שירותי חילוץ וגרירה לרכבים חשמליים שנתקעו ללא סוללה בכביש 22 והקריות, 24/7 עם ציוד מתאים.",
    "url": `https://yourdomain.com/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot`,
    "telephone": `+${BUSINESS_INFO.phone}`,
    "areaServed": { "@type": "Place", "name": "כביש 22, הקריות, חיפה" }
  };

  return (
    <>
      <Script id="json-ld-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרירת רכב חשמלי כביש 22 (עוקף קריות) - 24/7</h1>
          <p className="text-xl mb-8">נתקעתם ללא סוללה בכביש 22? זקוקים לחילוץ מקצועי? אנו מומחים בגרירת רכבים חשמליים עם פלטפורמה ייעודית בכל אזור הקריות.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full">התקשרו עכשיו לחילוץ: {BUSINESS_INFO.phone}</a>
            <WhatsAppCTA cityName="הקריות" />
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">שירותי גרירה לרכב חשמלי באזור הקריות</h2>
            <p className="mb-4">
              התקעתם ללא סוללה בכביש 22? אנו מספקים <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-300 underline">גרירה דחופה בכביש 22</Link> לכל דגמי הרכבים החשמליים. אנו מקפידים על גרירה באמצעות פלטפורמה בלבד כדי לשמור על בטיחות המצבר והמערכות האלקטרוניות. לשירותים משלימים באזור ניתן להיעזר ב-<Link href="/areas/haifa-general/emergency-towing-road-22-kiryat-ata-interchange" className="text-blue-300 underline">שירותי גרירה במחלף קרית אתא</Link>.
            </p>
          </section>

          <section className="mb-16 bg-gray-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-blue-400">שאלות נפוצות: גרירת רכב חשמלי בכביש 22</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold">איך מתבצעת גרירה בטוחה לרכב חשמלי?</h3>
                <p>רכב חשמלי דורש הובלה על פלטפורמה (גרר) בלבד למניעת נזק למערכת ההנעה החשמלית. אנו מצוידים בציוד המתקדם ביותר לחילוץ רכבי EV.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">האם אתם מציעים גרירת רכב במחיר הוגן?</h3>
                <p>כן, אנו דוגלים בשירות <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-blue-300 underline">גרירה 24 7 עוקף קריות במחיר הוגן</Link> ושקוף ללא הפתעות, גם בשעות לילה וסופי שבוע.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">מהו זמן ההגעה הממוצע לאזור צ'ק פוסט וקריות?</h3>
                <p>בזכות פריסה נרחבת של צוותים, אנו מבטיחים הגעה תוך 30-45 דקות מרגע הקריאה. למידע נוסף על אזורי שירות נוספים, בקרו ב-<Link href="/areas/page.tsx" className="text-blue-300 underline">עמוד אזורי השירות שלנו</Link>.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}