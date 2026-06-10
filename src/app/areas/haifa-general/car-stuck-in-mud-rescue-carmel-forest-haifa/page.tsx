import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב מהבוץ ביער הכרמל חיפה | 24/7 שירות מהיר ומקצועי",
  description: "נתקעתם עם הרכב בבוץ ביער הכרמל? שירותי חילוץ רכב מבוץ בחיפה והסביבה. צוות מיומן, הגעה מהירה, מחיר הוגן וזמינות 24/7. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-rescue-carmel-forest-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "description": "שירותי חילוץ רכבים ששקעו בבוץ ביער הכרמל חיפה, גרירה וחילוץ 24/7 בחיפה והקריות.",
    "url": "https://yourdomain.com/areas/haifa-general/car-stuck-in-mud-rescue-carmel-forest-haifa",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$",
    "areaServed": {
      "@type": "Place",
      "name": "חיפה והקריות"
    },
    "serviceType": ["חילוץ רכב מבוץ", "גרירת רכב", "שירותי דרך"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">חילוץ רכב שקוע בבוץ ביער הכרמל חיפה</h1>
          <p className="text-xl md:text-2xl mb-6">נתקעתם עם הרכב בבוץ ביער הכרמל? אנחנו בדרך לחלץ אתכם במהירות ובמקצועיות.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out text-lg">
              התקשרו עכשיו!
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">שירותי חילוץ רכבים מבוץ ביער הכרמל - זמינות 24/7</h2>
          <p className="mb-6 text-lg leading-relaxed">
            יער הכרמל מושך מטיילים רבים, אך השטח הבוצי מאתגר. אם הרכב שקע, אל תנסו לצאת בכוח וליצור נזק. אנו מציעים שירותי <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-400 hover:underline">חילוץ רכב מבוץ באזור הכרמל</Link> מקצועיים 24/7.
          </p>

          <h3 className="text-2xl font-bold mb-6 mt-10">למה לבחור בנו?</h3>
          <ul className="list-disc list-inside space-y-3 mb-8 text-lg">
            <li>זמינות מיידית: שירות 24/7, כולל שבתות וחגים.</li>
            <li>ציוד מתקדם: גרירה וחילוץ לכל סוגי הרכבים.</li>
            <li>ניסיון רב: פתרונות מהירים גם במקרים מורכבים ב<Link href="/areas/haifa-general/car-stuck-in-mud-carmel-region" className="text-blue-400 hover:underline">אזור הכרמל</Link>.</li>
          </ul>

          <div className="mt-16 border-t border-gray-700 pt-10">
            <h3 className="text-3xl font-bold mb-6">שאלות נפוצות</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold">כמה זמן לוקח לכם להגיע ליער הכרמל?</h4>
                <p className="text-gray-300">אנו פרוסים בחיפה והקריות ומגיעים בדרך כלל תוך זמן קצר מאוד, בהתאם לעומסי התנועה.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold">האם אתם גוררים רכבים למוסך?</h4>
                <p className="text-gray-300">בהחלט, אנו מספקים גם שירותי גרירה מקצועיים אם הרכב לא מניע לאחר החילוץ, בדומה לשירותי <Link href="/areas/haifa-general/cheap-towing-services-check-post" className="text-blue-400 hover:underline">גרירה בצומת הצ'ק פוסט</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}