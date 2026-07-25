import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";

export const metadata: Metadata = {
  title: "גרירה בכביש 22 קריות | הגעה מהירה תוך 30 דקות | 24/7",
  description: "נתקעתם בכביש 22? שירותי גרירה וחילוץ מקצועיים לרכבים בקריות ובצ'ק פוסט. זמינות 24/7, מחיר הוגן ושירות מהיר. חייגו אלינו עכשיו לפתרון מיידי!",
  alternates: {
    canonical: "https://yourdomain.com/areas/haifa-general/sherutei-grira-hilutz-krayot-kavish-22",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ כביש 22 וקריות",
    "description": "שירותי גרירה וחילוץ חירום 24/7 לרכבים פרטיים ומסחריים בכביש 22, חיפה והקריות.",
    "url": "https://yourdomain.com/areas/haifa-general/sherutei-grira-hilutz-krayot-kavish-22",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "areaServed": { "@type": "Place", "name": "כביש 22 והקריות" },
    "serviceType": ["גרירת רכבים", "חילוץ רכבים", "שירותי דרך"]
  };

  return (
    <>
      <Script
        id="json-ld-auto-towing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            גרירה וחילוץ רכבים בכביש 22 קריות - שירות מהיר 24/7
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            נתקעתם עם רכב פרטי או מסחרי בכביש 22? אנו כאן לחלץ אתכם בבטחה ובמהירות. אנו מספקים מענה מקצועי למי שמחפש <Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="underline text-yellow-300">שירותי גרירה בצומת הצ'ק פוסט</Link> או <Link href="/areas/haifa-general/affordable-electric-car-towing-check-post-krayot" className="underline text-yellow-300">גרירת רכב חשמלי בקריות</Link>. שימו לב: השירות אינו כולל גרירת אופנועים.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500">
              התקשרו עכשיו: {BUSINESS_INFO.displayPhone}
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">שאלות נפוצות על גרירה בכביש 22</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="text-xl font-bold text-yellow-400">תוך כמה זמן תגיעו לחלץ אותי בכביש 22?</h3>
              <p>הזמינות שלנו 24/7 מאפשרת לנו להגיע לרוב נקודות כביש 22 והקריות בזמן קצר. למידע נוסף על <Link href="/areas/haifa-general/flatbed-towing-electric-car-dead-battery-check-post-haifa" className="text-blue-400">שירותי גרירה עם משטח לרכב חשמלי תקוע</Link>, צרו קשר.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-400">מה טווח המחירים לגרירה?</h3>
              <p>המחיר נקבע בהתאם למרחק ולסוג הרכב, ואנו מתחייבים למחיר הוגן ושקוף. אם הרכב שלכם סיים את תפקידו, נשמח לסייע ב<Link href="/areas/haifa-general/buying-junk-cars-for-parts-kiryat-bialik-immediate-removal" className="text-blue-400">פינוי רכב גרוטה בקרית ביאליק</Link> באופן מיידי.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}