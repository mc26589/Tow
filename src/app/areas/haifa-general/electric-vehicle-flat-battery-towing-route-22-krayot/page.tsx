import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי כביש 22 הקריות | הגעה ב-30 דקות | 24/7",
  description: "נתקעתם ללא סוללה בכביש 22? שירות גרירה לרכב חשמלי בקריות עם ציוד ייעודי. הגעה מהירה, מחיר הוגן ושירות בטוח 24/7. התקשרו עכשיו לחילוץ!",
  alternates: {
    canonical: "/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה לרכבים חשמליים כביש 22",
    "description": "שירותי חילוץ וגרירה מקצועיים לרכבים חשמליים שנתקעו ללא סוללה בכביש 22 ובאזור הקריות, 24/7.",
    "url": "https://yourdomain.com/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "areaServed": { "@type": "Place", "name": "כביש 22, קריות, חיפה" }
  };

  return (
    <>
      <Script id="json-ld-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרירת רכב חשמלי כביש 22 (עוקף קריות) - 24/7</h1>
          <p className="text-xl mb-8">נתקעתם ללא סוללה? זקוקים לחילוץ מהיר? מומחים בגרירת רכבים חשמליים עם פלטפורמה ייעודית באזור הקריות.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full">התקשרו עכשיו לחילוץ: {BUSINESS_INFO.phone}</a>
            <WhatsAppCTA cityName="הקריות" />
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">שירותי גרירה לרכב חשמלי באזור הקריות</h2>
            <p className="mb-4">
              התקעו ללא סוללה בכביש 22? אנו מעניקים שירותי <Link href="/areas/haifa-general/towing-service-road-22-krayot" className="text-blue-300 underline">towing service road 22 krayot</Link> מקצועיים. הצוות שלנו מיומן במתן <Link href="/areas/haifa-general/affordable-electric-car-towing-check-post-krayot" className="text-blue-300 underline">affordable electric car towing check post krayot</Link> תוך הקפדה על נהלי יצרן לרכב חשמלי. אנו פועלים גם בנתיבי <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-300 underline">affordable emergency towing route 22 krayot bypass</Link> לזמינות מרבית בכל שעות היממה.
            </p>
          </section>

          <section className="mb-16 bg-gray-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-blue-400">שאלות נפוצות: גרירת רכב חשמלי בכביש 22</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold">איך מתבצעת גרירה בטוחה לרכב חשמלי?</h3>
                <p>רכב חשמלי דורש הובלה על פלטפורמה (גרר) בלבד למניעת נזק למערכת ההנעה החשמלית. הציוד שלנו מותאם בדיוק למטרה זו.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">האם אתם מספקים שירותי חילוץ נוספים בקריות?</h3>
                <p>בהחלט. אנו מבצעים <Link href="/areas/haifa-general/sherutei-grira-hilutz-krayot-kavish-22" className="text-blue-300 underline">sherutei grira hilutz krayot kavish 22</Link> לכל סוגי הרכבים ומספקים סיוע ראשוני בדרכים.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">מהו זמן ההגעה הממוצע לאזור צ'ק פוסט וקריות?</h3>
                <p>הצוותים שלנו פרוסים לאורך ציר כביש 22 והצ'ק פוסט ומבטיחים הגעה תוך 30-45 דקות מרגע הקריאה, גם בשעות עומס.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}