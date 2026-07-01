import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכב בצ'ק פוסט חיפה | שירות 24/7 - הגעה מהירה!",
  description: "נתקעתם עם הרכב בצ'ק פוסט? שירות גרירת רכב מקצועי, מהיר ובמחיר הוגן 24/7. הגעה תוך דקות לכל אזור חיפה והצפון. התקשרו עכשיו להצלת הרכב!",
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
            <p className="text-lg mb-4">זקוקים לגרר דחוף בגלל תאונה או תקלה בדרכים? אנו מומחים בחילוץ וגרירה באזור צ'ק פוסט. לצערנו, אם הרכב עבר תאונה קשה בכביש 22, אנו מטפלים גם ב<Link href="/areas/haifa-general/accident-towing-road-22-check-post-krayot" className="text-yellow-400 underline">גרירה לאחר תאונה בכביש 22</Link>. אם הרכב אינו בר תיקון, אנו מספקים גם שירותי <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-immediate-removal" className="text-yellow-400 underline">פינוי רכבים לפירוק בחיפה</Link> באופן מיידי.</p>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>גרירת רכבים פרטיים ומסחריים קלים</li>
              <li>סיוע ברכבים תקועים בדרך</li>
              <li>מענה מהיר לצ'ק פוסט, מפרץ חיפה והסביבה</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">שאלות נפוצות</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">תוך כמה זמן הגרר מגיע לצ'ק פוסט?</h3>
                <p>אנו פרוסים במוקדים אסטרטגיים בחיפה, מה שמאפשר לנו להגיע לצ'ק פוסט בדרך כלל תוך זמן קצר מאוד. למידע נוסף על אזורים אחרים, ניתן לבדוק גם את שירותי ה<Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-yellow-400">גרירה 24/7 בעוקף קריות</Link>.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">האם אתם גוררים רכבים גם מחוץ לחיפה?</h3>
                <p>כן, אנו נותנים מענה רחב בכל אזור הצפון. אם נתקעתם באזורים הרריים או בדרכי עפר כמו ביערות הכרמל, אנו ממליצים לעיין בשירותי <Link href="/areas/haifa-general/car-rescue-mud-carmel-forest-nesher-24-7" className="text-yellow-400">חילוץ רכב מבוץ בכרמל ובנשר</Link>.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}