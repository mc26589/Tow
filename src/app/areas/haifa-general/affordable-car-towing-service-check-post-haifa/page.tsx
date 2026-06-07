import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "שירותי גרירת רכב בצ'ק פוסט חיפה - 24/7 במחיר הוגן",
  description: "נתקעתם עם הרכב בצ'ק פוסט? שירות גרירת רכב מהיר, מקצועי ובמחיר הוגן 24/7. הגעה מהירה לכל אזור חיפה והקריות. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-car-towing-service-check-post-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ בחיפה והקריות",
    "description": "שירותי גרירת רכב מהירים, אמינים ובמחיר הוגן בצ'ק פוסט חיפה והסביבה.",
    "url": "https://yourdomain.com/areas/haifa-general/affordable-car-towing-service-check-post-haifa",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$",
    "areaServed": { "@type": "Place", "name": "חיפה והקריות" },
    "image": "https://yourdomain.com/images/towing-truck.jpg",
    "serviceType": "גרירת רכב, חילוץ רכב, שירותי דרך"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">שירותי גרירת רכב במחיר משתלם בצ'ק פוסט חיפה</h1>
          <p className="text-xl md:text-2xl mb-8">נתקעתם בצ'ק פוסט? אנו כאן לשירותכם 24/7 עם שירות גרירה מקצועי ומהיר.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-bold py-3 px-8 rounded-full">התקשרו עכשיו לקבלת הצעת מחיר</a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-gray-200 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <section className="mb-12 p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">גרירת רכב בצ'ק פוסט - מענה מיידי</h2>
            <p className="text-lg mb-4">זקוקים לשירותי גרירה מקצועיים? אנו מבצעים חילוצים באזור צ'ק פוסט והסביבה. במידה והרכב שלכם גמור ולא ניתן לתיקון, אנו גם מספקים שירותי <Link href="/areas/haifa-general/buying-cars-for-scrap-check-post-haifa" className="text-yellow-400 underline">קניית רכבים לפירוק בצ'ק פוסט חיפה</Link>.</p>
            <ul className="list-disc list-inside text-lg mb-4 space-y-2">
              <li>גרירת רכבים פרטיים ומסחריים</li>
              <li>סיוע ברכבים תקועים בדרך</li>
              <li>שירות מקצועי לכל סוגי הרכבים הקלים</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">שאלות נפוצות (FAQ)</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">כמה זמן לוקח לגרר להגיע לצ'ק פוסט?</h3>
                <p>אנו פרוסים באזור חיפה והקריות, ולרוב מגיעים למוקדי צ'ק פוסט תוך דקות ספורות. למידע על אזורים נוספים, ניתן לבדוק גם את שירותי ה<Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-yellow-400">גרירה 24/7 בעוקף קריות</Link>.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">האם אתם גוררים רכבים לכל אזור בארץ?</h3>
                <p>אנו מתמחים באזור הצפון. לבעיות מורכבות יותר כמו רכב תקוע בבוץ באזורים הרריים, מומלץ לעיין בשירותי <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-area" className="text-yellow-400">חילוץ רכב תקוע בבוץ באזור הכרמל</Link>.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}