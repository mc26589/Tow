import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב מהבוץ ביער הכרמל חיפה | הגעה תוך 30 דקות - 24/7",
  description: "נתקעתם בבוץ ביער הכרמל? שירות חילוץ רכב מהיר ומקצועי בחיפה והסביבה. מחיר הוגן, ציוד מתקדם וזמינות 24/7. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-rescue-carmel-forest-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "חילוץ רכב מבוץ יער הכרמל",
    "description": "שירותי חילוץ רכבים ששקעו בבוץ ביער הכרמל חיפה, גרירה וחילוץ 24/7.",
    "url": `https://yourdomain.com/areas/haifa-general/car-stuck-in-mud-rescue-carmel-forest-haifa`,
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "מחיר הוגן",
    "areaServed": {
      "@type": "Place",
      "name": "חיפה והכרמל"
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
          <p className="text-xl md:text-2xl mb-6">תקועים בשטח? הגעה מהירה לחילוץ רכב מבוץ ביער הכרמל והסביבה 24/7.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והכרמל" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out text-lg">
              התקשרו עכשיו לחילוץ!
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">שירותי חילוץ רכבים מבוץ - זמינות מלאה</h2>
          <p className="mb-6 text-lg leading-relaxed">
            יער הכרמל הוא אזור מרהיב, אך הבוץ יכול להפתיע גם נהגים מנוסים. אם הרכב שלכם שקע, הימנעו מניסיונות יציאה שיגרמו נזק לצמיגים או לגיר. אנו מציעים שירות <Link href="/areas/haifa-general/car-rescue-mud-carmel-forest-nesher-24-7" className="text-blue-400 hover:underline">חילוץ רכב מהבוץ ביער הכרמל ובאזור נשר</Link> בצורה מקצועית. במידת הצורך, אנו מעניקים סיוע גם לסטודנטים ולמטיילים בקרבת מוסדות הלימוד באמצעות <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-forest-near-haifa-university" className="text-blue-400 hover:underline">שירות חילוץ מהיר ליד אוניברסיטת חיפה</Link>.
          </p>

          <h3 className="text-2xl font-bold mb-6 mt-10">למה לבחור בשירות שלנו?</h3>
          <ul className="list-disc list-inside space-y-3 mb-8 text-lg">
            <li>זמינות מיידית: פועלים 24/7, כולל בסופי שבוע וחגים.</li>
            <li>ציוד מקצועי: חילוץ באמצעות כננות מיוחדות לכל סוגי הרכבים הפרטיים.</li>
            <li>פריסה רחבה: הגעה מהירה לכל נקודה בחיפה והקריות.</li>
          </ul>

          <div className="mt-16 border-t border-gray-700 pt-10">
            <h3 className="text-3xl font-bold mb-6">שאלות נפוצות על חילוץ ביער הכרמל</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold">כמה זמן לוקח לכם להגיע ליער הכרמל?</h4>
                <p className="text-gray-300">ברוב המקרים, הצוות שלנו מגיע ליער הכרמל תוך פחות מ-30 דקות, בהתאם לתנאי הדרך ועומסי התנועה באזור.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold">מה עושים אם הרכב לא מניע לאחר החילוץ?</h4>
                <p className="text-gray-300">אנו מספקים שירותי גרירה מקצועיים למוסך הקרוב. אם אתם זקוקים לשירותי עזר נוספים, אנו מציעים גם פתרונות כגון <Link href="/areas/haifa-general/24-7-towing-electric-car-battery-dead-technion-haifa" className="text-blue-400 hover:underline">גרירה והתנעת רכבים חשמליים בטכניון</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}