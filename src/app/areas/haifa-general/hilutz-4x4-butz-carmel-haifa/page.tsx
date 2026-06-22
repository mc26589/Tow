import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BUSINESS_INFO } from "@/lib/data";
import { WhatsAppCTA } from "@/components/whatsapp-cta";

export const metadata: Metadata = {
  title: "חילוץ 4x4 מבוץ ביער הכרמל | חילוץ שטח 24/7 בחיפה והקריות",
  description: "נתקעתם בבוץ ביער הכרמל? שירות חילוץ 4x4 מקצועי, מהיר ואמין 24/7. הגעה תוך זמן קצר באזור חיפה והקריות במחיר הוגן. לחצו כאן לחילוץ מיידי!",
  alternates: {
    canonical: "/areas/haifa-general/hilutz-4x4-butz-carmel-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ 4x4 מבוץ ביער הכרמל חיפה והקריות",
    "description": "שירותי חילוץ וגרירה מקצועיים לרכבי 4x4 שנתקעו בבוץ, בחול או בשטח קשה בשבילי יער הכרמל, חיפה והקריות. זמינות 24/7, ציוד מתקדם ומחירים הוגנים.",
    "url": "https://yourdomain.com/hilutz-4x4-butz-carmel-haifa",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$",
    "areaServed": [
      { "@type": "Place", "name": "חיפה" },
      { "@type": "Place", "name": "הקריות" },
      { "@type": "Place", "name": "יער הכרמל" },
      { "@type": "Place", "name": "טירת הכרמל" },
      { "@type": "Place", "name": "נשר" }
    ],
    "serviceType": ["חילוץ 4x4 מבוץ", "חילוץ רכבי שטח", "גרירת רכבים", "שירותי חילוץ חירום"],
    "image": "https://yourdomain.com/images/4x4-mud-rescue.jpg"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי חילוץ 4x4 מבוץ בשבילי יער הכרמל חיפה</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            נתקעתם בבוץ ביער הכרמל? צוותי <Link href="/areas/haifa-general/emergency-mud-rescue-carmel-forest-haifa" className="underline">emergency mud rescue carmel forest haifa</Link> עומדים לרשותכם 24/7. הגעה מהירה לכל אזור חיפה והקריות.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 flex items-center justify-center space-x-2 text-lg">
              <span>התקשרו עכשיו לחילוץ מהיר</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary-light">חילוץ 4x4 מקצועי ביער הכרמל ובחיפה</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg mb-4">
                שבילי יער הכרמל הם אתגר רציני. אם הרכב שלכם נתקע, כדאי להיעזר במומחים כמו <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-forest-near-haifa-university" className="text-blue-400">car stuck in mud carmel forest near haifa university</Link> כדי לחלץ את רכבכם בבטחה.
              </p>
              <p className="text-lg mb-4">
                אנו מתמחים בחילוץ רכבי שטח ממצבי קיצון. זקוקים גם לשירותי גרירה רגילים? בדקו גם את <Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="text-blue-400">cheap towing services check post junction</Link> שלנו.
              </p>
            </div>
            <div className="flex justify-center">
              <Image src="/images/4x4-mud-rescue.jpg" alt="רכב 4x4 תקוע בבוץ ביער הכרמל" width={600} height={400} className="rounded-lg shadow-xl" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-800 text-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">צריכים עזרה נוספת בחיפה?</h2>
          <div className="flex flex-wrap justify-center gap-4">
             <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="bg-gray-700 p-4 rounded">affordable emergency car towing check post haifa</Link>
             <Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="bg-gray-700 p-4 rounded">24 7 accident recovery towing check post junction haifa</Link>
          </div>
        </div>
      </section>
    </>
  );
}