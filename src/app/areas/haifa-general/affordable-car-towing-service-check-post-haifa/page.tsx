import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בצ'ק פוסט חיפה 24/7 | שירות מהיר ומחיר הוגן",
  description: "נתקעתם בצ'ק פוסט? גרר זמין 24/7 להגעה מהירה תוך 30 דקות. שירותי גרירה מקצועיים במחיר הוגן לכל סוגי הרכבים. התקשרו עכשיו לקבלת שירות!",
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
    "url": "https://yourdomain.com/areas/haifa-general/affordable-car-towing-service-check-post-haifa",
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
              זקוקים לגרר דחוף בגלל תאונה או תקלה בדרכים? אנו מומחים בחילוץ וגרירה באזור צ'ק פוסט. אנו מציעים מענה מקצועי הכולל <Link href="/areas/haifa-general/towing-services-road-22-krayot-bypass" className="text-yellow-400 underline">שירותי גרירה בכביש 22 עוקף קריות</Link>, ומטפלים בכל מקרה של <Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="text-yellow-400 underline">גרירה לאחר תאונה בכביש 22</Link>. אם הרכב שלכם אינו בר תיקון, אנו מבצעים גם <Link href="/areas/haifa-general/buying-cars-for-scrap-haifa-krayot" className="text-yellow-400 underline">קניית רכבים לפירוק בחיפה והקריות</Link>.
            </p>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>גרירת רכבים פרטיים ומסחריים</li>
              <li>סיוע וחילוץ מהיר באזור צ'ק פוסט</li>
              <li>טיפול מקצועי ברכבים תקועים בדרך</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">שאלות נפוצות על גרירה בצ'ק פוסט</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">תוך כמה זמן הגרר מגיע לצ'ק פוסט?</h3>
                <p>הצוותים שלנו פרוסים במוקדים אסטרטגיים, כולל גישה מהירה ל<Link href="/areas/haifa-general/fast-towing-flat-tire-road-22-check-post" className="text-yellow-400">גרירה מהירה ותיקון פנצ'ר בכביש 22</Link>, מה שמאפשר לנו הגעה מהירה מאוד.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">האם אתם מציעים גרירה לרכבים חשמליים?</h3>
                <p>כן, אנו נותנים מענה מקצועי לכל סוגי הרכבים. למידע נוסף על פתרונות גרירה מתקדמים ללא נזק, ניתן לעיין ב<Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="text-yellow-400">גרירת משטח במחיר הוגן בכביש 22</Link>.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}