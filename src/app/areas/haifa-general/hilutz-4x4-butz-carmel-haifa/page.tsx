import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BUSINESS_INFO } from "@/lib/data";
import { WhatsAppCTA } from "@/components/whatsapp-cta";

export const metadata: Metadata = {
  title: "חילוץ 4x4 מבוץ ביער הכרמל | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ ביער הכרמל? שירות חילוץ 4x4 מקצועי בחיפה והסביבה. ציוד כבד, מחיר הוגן וזמינות 24/7. הגיעו אליכם מהר - התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/hilutz-4x4-butz-carmel-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ 4x4 מבוץ ביער הכרמל חיפה",
    "description": "שירותי חילוץ שטח מקצועיים לרכבי 4x4 וג'יפים שנתקעו בבוץ בדרכי יער הכרמל והסביבה. זמינות 24/7, מחירים הוגנים.",
    "url": "https://yourdomain.com/areas/haifa-general/hilutz-4x4-butz-carmel-haifa",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "₪₪",
    "areaServed": [
      { "@type": "Place", "name": "חיפה" },
      { "@type": "Place", "name": "יער הכרמל" },
      { "@type": "Place", "name": "נשר" }
    ],
    "serviceType": ["חילוץ 4x4 מבוץ", "גרירת רכבי שטח", "חילוץ רכב תקוע"],
    "image": "/images/4x4-mud-rescue.jpg"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ 4x4 מבוץ ביער הכרמל – זמינות 24/7</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            נתקעתם בבוץ? הצוות שלנו מתמחה ב-<Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="underline">4x4 mud recovery carmel forest haifa</Link> ומבטיח חילוץ מהיר ובטוח לכל סוגי רכבי השטח.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והכרמל" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 flex items-center justify-center space-x-2 text-lg">
              <span>התקשרו עכשיו לחילוץ מהיר</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary-light">מומחים בחילוצי שטח מורכבים</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg mb-4">
                השטח דורש ניסיון. אנו מבצעים <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-forest-haifa-university" className="text-blue-400">car stuck in mud carmel forest haifa university</Link> במקצועיות רבה. אם נתקעתם באזור נשר, אנו מציעים גם <Link href="/areas/haifa-general/car-rescue-mud-carmel-forest-nesher-24-7" className="text-blue-400">car rescue mud carmel forest nesher 24 7</Link> סביב השעון.
              </p>
              <p className="text-lg mb-4">
                זקוקים לחילוץ דחוף באזור הכרמל? שירותינו כוללים גם <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-400">car rescue from mud carmel area</Link> לכל רכב שנתקע בשבילים הבוציים.
              </p>
            </div>
            <div className="flex justify-center">
              <Image src="/images/4x4-mud-rescue.jpg" alt="חילוץ 4x4 מבוץ בכרמל" width={600} height={400} className="rounded-lg shadow-xl" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white text-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות - חילוץ שטח בחיפה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">האם אתם מחלצים מכל נקודה ביער?</h3>
              <p>כן, אנו מכירים את כל השבילים המרכזיים והצדדיים, ומספקים פתרונות גם במקומות עם גישה מאתגרת.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם יש לכם שירותי גרירה רגילים בחיפה?</h3>
              <p>בהחלט. אנו מציעים גם <Link href="/areas/haifa-general/cheap-towing-check-post-haifa-fast-service" className="text-blue-600">cheap towing check post haifa fast service</Link> לכל מי שזקוק לגרירה מהירה למוסך או לבית.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">מה עושים אם הרכב מושבת לגמרי?</h3>
              <p>במקרים של רכב שאינו בר תיקון, אנו מבצעים גם <Link href="/areas/haifa-general/car-scrapping-haifa-krayot" className="text-blue-400">car scrapping haifa krayot</Link> במחיר הוגן.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}