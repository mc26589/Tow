import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בכביש 22 הקריות - הגעה מהירה 24/7",
  description: "נתקעתם עם רכב חשמלי בכביש 22? שירות גרירה מקצועי ומחיר הוגן לרכבים חשמליים בקריות. הגעה מהירה תוך 30 דקות. התקשרו עכשיו לחילוץ בטוח!",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרירת רכב חשמלי ומצבר פרוק בכביש 22 הקריות</h1>
          <p className="text-xl mb-8">נתקעתם ללא סוללה בכביש 22? אנו מציעים שירות חילוץ מהיר לרכבים חשמליים וגרירה מקצועית לכל אזור הקריות במחיר משתלם.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full">התקשרו עכשיו לחילוץ: {BUSINESS_INFO.phone}</a>
            <WhatsAppCTA cityName="הקריות" />
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">שירותי גרירה מקצועיים בכביש 22 והסביבה</h2>
            <p className="mb-4">אנו מתמחים בטיפול ברכבים חשמליים מודרניים. למידע נוסף על פתרונות נוספים באזורנו, ניתן לעיין בשירותי <Link href="/areas/haifa-general/fast-towing-services-road-22-krayot-bypass" className="text-blue-300 underline">גרירה מהירה בכביש 22 (עוקף קריות)</Link> או לקבל סיוע ב-<Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-300 underline">תקלות רכב דחופות באזור הצ'ק פוסט</Link>. אנו מטפלים גם במקרים של <Link href="/areas/haifa-general/grar-zol-lerchev-takua-bekiryat-yam" className="text-blue-300 underline">גרירה זולה בקרית ים</Link> ופינוי גרוטאות ב-<Link href="/areas/haifa-general/towing-for-scrap-kiryat-ata-road-22" className="text-blue-300 underline">קרית אתא</Link>.</p>
          </section>

          <section className="mb-16 bg-gray-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-blue-400">שאלות נפוצות על גרירת רכבים חשמליים</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold">האם אתם מספקים טעינה ניידת בכביש 22?</h3>
                <p>כן, אנו ערוכים לסייע בטעינת חירום או גרירה בטוחה לנקודת הטעינה הקרובה ביותר בקריות, תוך שמירה על תקינות הסוללה.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">כמה זמן לוקח להגיע לנתקע בכביש 22?</h3>
                <p>אנו ממוקמים בנקודות אסטרטגיות ליד כביש 22 ומגיעים לרוב תוך 30-45 דקות מרגע הקריאה, בהתאם לעומסי התנועה באזור הקריות.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">האם המחיר לגרירת רכב חשמלי יקר יותר?</h3>
                <p>אנו מקפידים על מחיר הוגן ושקוף. התמחור נקבע לפי המרחק וסוג הרכב, ואנו נותנים דגש על שירות מהיר ומקצועי ללא הפתעות במחיר.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}