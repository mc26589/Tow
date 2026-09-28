import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בצ'ק פוסט חיפה 24/7 | הגעה תוך 30 דקות | מחיר הוגן",
  description: "נתקעתם בצ'ק פוסט? גרר זמין 24/7 להגעה מהירה תוך 30 דקות. שירותי גרירה מקצועיים במחיר הוגן לכל סוגי הרכבים. התקשרו עכשיו לשירות מהיר!",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">שירותי גרירה מקצועיים בצ'ק פוסט חיפה</h1>
          <p className="text-xl md:text-2xl mb-8">נתקעתם בצ'ק פוסט? גרר 24/7 זמין בשטח, מחיר הוגן ומענה מהיר לכל תקלה בדרך.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-bold py-3 px-8 rounded-full">התקשרו עכשיו להזמנת גרר</a>
            <WhatsAppCTA cityName="חיפה והצ'ק פוסט" />
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-gray-200 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <section className="mb-12 p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">שירות גרירה אמין ומקצועי בצ'ק פוסט</h2>
            <p className="text-lg mb-4">
              זקוקים לגרר דחוף באזור צ'ק פוסט? אנו מספקים מענה מהיר לכל סוגי הרכבים. בין אם מדובר ב<Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-yellow-400 underline">גרירת רכב לאחר תאונה בצומת צ'ק פוסט</Link> או ב<Link href="/areas/haifa-general/emergency-car-recovery-ditch-route-4-check-post" className="text-yellow-400 underline">חילוץ רכב מהתעלה בכביש 4</Link>, הצוות שלנו מיומן במתן פתרונות בשטח. אנו מתמחים בטיפול בבעיות מכניות ותאונות, תוך עמידה בסטנדרטים גבוהים של שירות.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">שאלות נפוצות על גרירה בצ'ק פוסט</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">תוך כמה זמן הגרר מגיע לצ'ק פוסט?</h3>
                <p>הצוותים שלנו ערוכים להגעה מהירה לכל אזור הצ'ק פוסט. למידע על אזורים נוספים, ניתן לבדוק גם <Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="text-yellow-400">גרירת חירום זולה בקרית ביאליק</Link>.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">האם אתם קונים רכבים לפירוק באזור?</h3>
                <p>כן, אנו מבצעים גם <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal" className="text-yellow-400">פינוי רכבים לפירוק בחיפה והקריות</Link> כולל גרירה מיידית.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">האם ניתן להזמין גרירה לרכב מסחרי?</h3>
                <p>אנו מציעים מענה מקצועי גם למקרים מורכבים כמו <Link href="/areas/haifa-general/emergency-light-truck-towing-route-22-krayot-bypass" className="text-yellow-400">גרירת רכב מסחרי קל בכביש 22</Link>.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}