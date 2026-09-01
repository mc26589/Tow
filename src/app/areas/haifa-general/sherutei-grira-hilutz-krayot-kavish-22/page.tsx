import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";

export const metadata: Metadata = {
  title: "גרירה בכביש 22 וקריות | הגעה מהירה עד 30 דקות | 24/7",
  description: "נתקעתם בכביש 22? שירותי גרירה וחילוץ מקצועיים לרכבים בקריות ובצ'ק פוסט. זמינות 24/7 במחיר הוגן ושירות מהיר. התקשרו עכשיו לפתרון מיידי!",
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
            גרירה וחילוץ רכבים בכביש 22 וקריות - שירות מקצועי 24/7
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            נתקעתם עם רכב פרטי או מסחרי בכביש 22? אנו כאן לחלץ אתכם בבטחה. אנו מספקים מענה מהיר למי שמחפש <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="underline text-yellow-300">שירותי גרירה בצומת הצ'ק פוסט</Link> או <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="underline text-yellow-300">גרירת רכב חשמלי בקריות</Link>. שימו לב: השירות אינו כולל גרירת אופנועים.
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
          <h2 className="text-3xl font-bold text-center mb-10">שאלות נפוצות על גרירה וחילוץ בכביש 22</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="text-xl font-bold text-yellow-400">תוך כמה זמן תגיעו לחלץ אותי בכביש 22?</h3>
              <p>הזמינות שלנו 24/7 מאפשרת לנו להגיע לכל נקודה בכביש 22 בזמן קצר. אם מדובר בתקלה פשוטה כגון פנצ'ר, תוכלו להיעזר ב<Link href="/areas/haifa-general/fast-towing-flat-tire-road-22-check-post" className="text-blue-400">שירותי גרירה ותיקון תקר בכביש 22</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-400">האם אתם קונים רכבים תקועים לפירוק?</h3>
              <p>בהחלט. אם הרכב אינו בר תיקון, נשמח לסייע ב<Link href="/areas/haifa-general/buy-cars-for-scrap-check-post-haifa" className="text-blue-400">פינוי רכבים לפירוק בצ'ק פוסט</Link> או באזור הקריות באופן מיידי.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-400">האם אתם נותנים שירות גם במחלפים הסמוכים?</h3>
              <p>כן, אנו נותנים מענה מלא הכולל <Link href="/areas/haifa-general/emergency-towing-road-22-kiryat-ata-interchange" className="text-blue-400">גרירת חירום במחלף קרית אתא</Link> וסביבתה לכל סוגי הרכבים הפרטיים.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}