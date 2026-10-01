import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרר בצ'ק פוסט חיפה 24/7 | הגעה מהירה ומחיר הוגן",
  description: "נתקעתם בצ'ק פוסט? גרר זמין 24/7 להגעה תוך 30 דקות. שירותי גרירה מקצועיים במחיר הוגן לכל סוגי הרכבים. התקשרו עכשיו לשירות מהיר!",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">גרר בצ'ק פוסט חיפה - שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl md:text-2xl mb-8">נתקעתם בצ'ק פוסט? הצוות שלנו בדרך אליכם! שירות גרירה אמין במחיר הוגן לכל סוגי הרכבים.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-bold py-3 px-8 rounded-full">התקשרו עכשיו להזמנת גרר</a>
            <WhatsAppCTA cityName="חיפה והצ'ק פוסט" />
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-gray-200 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <section className="mb-12 p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">שירותי גרירה בצ'ק פוסט והסביבה</h2>
            <p className="text-lg mb-4">
              אנו מתמחים במתן פתרונות גרירה וחילוץ לכל מי שזקוק ל-<Link href="/areas/haifa-general/cheap-towing-services-check-post" className="text-yellow-400 underline">cheap towing services check post</Link> באופן מיידי. 
              הניסיון הרב שלנו מאפשר לנו לבצע <Link href="/areas/haifa-general/towing-road-22-krayot-bypass" className="text-yellow-400 underline">towing road 22 krayot bypass</Link> בבטחה ובמהירות. 
              אם מצאתם את עצמכם עם רכב שלא מניע או מעורב בתאונה, אנו כאן לתת מענה מקצועי.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">שאלות נפוצות על גרירה בצ'ק פוסט</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">תוך כמה זמן הגרר מגיע לצ'ק פוסט?</h3>
                <p>אנו מגיעים לרוב הנקודות תוך כ-30 דקות. לתושבי הסביבה, אנו מציעים גם <Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="text-yellow-400">emergency towing cheap kiryat bialik</Link>.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">האם אתם קונים רכבים לפירוק באזור?</h3>
                <p>בהחלט. אנו מבצעים <Link href="/areas/haifa-general/car-scrapping-haifa-krayot-immediate-removal" className="text-yellow-400">car scrapping haifa krayot immediate removal</Link> בפינוי מהיר מהמקום.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">מה לעשות אם נתקעתי עם רכב בדרכים מסובכות?</h3>
                <p>במידה ומדובר בבעיות שטח או חילוצים מורכבים יותר, מומלץ לעיין בשירותינו כמו <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-region" className="text-yellow-400">car stuck in mud carmel region</Link> או <Link href="/areas/haifa-general/emergency-towing-horev-ahuza-haifa" className="text-yellow-400">emergency towing horev ahuza haifa</Link> אשר זמינים עבורכם 24/7.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}