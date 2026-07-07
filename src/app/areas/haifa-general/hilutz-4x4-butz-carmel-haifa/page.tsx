import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BUSINESS_INFO } from "@/lib/data";
import { WhatsAppCTA } from "@/components/whatsapp-cta";

export const metadata: Metadata = {
  title: "חילוץ 4x4 מבוץ ביער הכרמל | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ ביער הכרמל? שירות חילוץ 4x4 מקצועי, אמין ומהיר 24/7 בחיפה והקריות. ציוד מתקדם לכל סוגי השטח במחיר ללא תחרות. התקשרו עכשיו לחילוץ מיידי!",
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
    "url": "https://yourdomain.com/areas/haifa-general/hilutz-4x4-butz-carmel-haifa",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "₪₪",
    "areaServed": [
      { "@type": "Place", "name": "חיפה" },
      { "@type": "Place", "name": "הקריות" },
      { "@type": "Place", "name": "יער הכרמל" }
    ],
    "serviceType": ["חילוץ 4x4 מבוץ", "חילוץ רכבי שטח", "גרירת רכבים"],
    "image": "/images/4x4-mud-rescue.jpg"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ 4x4 מבוץ בשבילי יער הכרמל – זמינות 24/7</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            נתקעתם בשטח? אל תסתכנו. פנו למומחים של <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="underline">4x4 mud recovery carmel forest haifa</Link> ותקבלו מענה מהיר ומקצועי בכל אזור חיפה והצפון.
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary-light">חילוץ שטח מקצועי לכל סוגי הרכבים</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg mb-4">
                שבילי הכרמל יכולים להפוך לבוציים ומסוכנים בחורף. אם הרכב נתקע, פנו לשירות <Link href="/areas/haifa-general/urgent-mud-rescue-4x4-towing-carmel-forest-trails-haifa" className="text-blue-400">urgent mud rescue 4x4 towing carmel forest trails haifa</Link> המכיר את כל דרכי הגישה באזור.
              </p>
              <p className="text-lg mb-4">
                זקוקים לחילוץ מורכב? אנו זמינים גם ב-<Link href="/areas/haifa-general/mud-rescue-4x4-stuck-carmel-forest-haifa-university" className="text-blue-400">mud rescue 4x4 stuck carmel forest haifa university</Link> לכל מי שנתקע בסביבת האוניברסיטה והיער הסמוך.
              </p>
            </div>
            <div className="flex justify-center">
              <Image src="/images/4x4-mud-rescue.jpg" alt="רכב 4x4 תקוע בבוץ ביער הכרמל" width={600} height={400} className="rounded-lg shadow-xl" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white text-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות על חילוץ שטח בחיפה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">תוך כמה זמן תגיעו לחילוץ ביער הכרמל?</h3>
              <p>אנו מבינים את הדחיפות ומשתדלים להגיע לכל נקודה ביער הכרמל תוך זמן קצר, בהתאם לתנאי השטח והמרחק.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם אתם מבצעים גרירה רגילה גם בחיפה?</h3>
              <p>כן, אנו מספקים שירותי גרירה מקצועיים כמו <Link href="/areas/haifa-general/cheap-towing-check-post-haifa-fast-service" className="text-blue-600">cheap towing check post haifa fast service</Link> לכל רכב פרטי שנתקע בכבישי העיר.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">מה טווח המחירים של חילוץ 4x4?</h3>
              <p>המחיר נקבע בהתאם למורכבות החילוץ. נשמח לתת לכם הצעת מחיר הוגנת ושקופה בטלפון.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}