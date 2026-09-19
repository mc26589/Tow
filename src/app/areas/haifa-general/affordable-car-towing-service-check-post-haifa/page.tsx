import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בצ'ק פוסט חיפה 24/7 | מחיר הוגן | הגעה מהירה תוך 30 דקות",
  description: "נתקעתם עם הרכב בצ'ק פוסט? שירות גרירה מקצועי ומהיר לכל סוגי הרכבים. מחיר הוגן, זמינות 24/7. התקשרו עכשיו להגעה מיידית!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-car-towing-service-check-post-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ בצ'ק פוסט",
    "description": "שירותי גרירת רכב מהירים, אמינים ובמחיר הוגן בצ'ק פוסט חיפה והסביבה.",
    "url": "https://yourdomain.com/areas/haifa-general/affordable-car-towing-service-check-post-haifa",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "מחיר הוגן",
    "areaServed": { "@type": "City", "name": "חיפה" },
    "image": "https://yourdomain.com/images/towing-truck.jpg",
    "serviceType": "גרירת רכב, חילוץ רכב, שירותי דרך"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">שירותי גרירת רכב מקצועיים בצ'ק פוסט חיפה</h1>
          <p className="text-xl md:text-2xl mb-8">נתקעתם בצ'ק פוסט? גרר זמין 24/7, מחיר הוגן ומענה מהיר לכל סוגי הרכבים.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-bold py-3 px-8 rounded-full">התקשרו עכשיו לקבלת גרר</a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-gray-200 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <section className="mb-12 p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">שירותי גרירה אמינים בצ'ק פוסט</h2>
            <p className="text-lg mb-4">
              זקוקים לגרר דחוף בגלל תאונה או תקלה בדרכים? אנו מומחים בחילוץ וגרירה באזור צ'ק פוסט. אם נתקעתם בדרך ראשית, אנו ממליצים על <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-yellow-400 underline">שירותי גרירה דחופים בצ'ק פוסט</Link> המבטיחים פינוי מהיר. אנו מטפלים גם ב<Link href="/areas/haifa-general/accident-towing-road-22-check-post-krayot" className="text-yellow-400 underline">גרירה לאחר תאונה בכביש 22</Link>. אם הרכב אינו בר תיקון, אנו מספקים גם שירותי <Link href="/areas/haifa-general/scrap-cars-haifa-krayot-immediate-removal" className="text-yellow-400 underline">פינוי רכבים לפירוק בחיפה</Link> באופן מיידי.
            </p>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>גרירת רכבים פרטיים ומסחריים קלים</li>
              <li>סיוע ברכבים תקועים בדרך</li>
              <li>מענה מהיר לצ'ק פוסט, מפרץ חיפה והסביבה</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">שאלות נפוצות על גרירה בצ'ק פוסט</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">תוך כמה זמן הגרר מגיע לצ'ק פוסט?</h3>
                <p>אנו פרוסים במוקדים אסטרטגיים בחיפה, מה שמאפשר לנו להגיע לצ'ק פוסט בדרך כלל תוך זמן קצר מאוד. למידע נוסף, ניתן לבדוק גם את שירותי ה<Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="text-yellow-400">גרירה הזולה בצ'ק פוסט</Link>.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">מה לעשות אם נתקעתי עם רכב חשמלי?</h3>
                <p>רכבים חשמליים דורשים טיפול מיוחד. אנו מציעים <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-yellow-400">גרירת רכב חשמלי עם מצבר ריק בכביש 22</Link> בצורה בטוחה ומקצועית.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}