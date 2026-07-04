import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";

export const metadata: Metadata = {
  title: "גרירה בכביש 22 קריות - הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בכביש 22? שירותי גרירה וחילוץ מקצועיים לרכבים פרטיים ומסחריים בקריות ובסביבה. זמינות 24/7, מחירים הוגנים ושירות אמין. חייגו אלינו עכשיו!",
  alternates: {
    canonical: "https://yourdomain.com/areas/haifa-general/sherutei-grira-hilutz-krayot-kavish-22",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "description": "שירותי גרירה וחילוץ חירום 24/7 לרכבים פרטיים, מסחריים ורכבי שטח (4X4) בכביש 22, חיפה והקריות.",
    "url": "https://yourdomain.com/areas/haifa-general/sherutei-grira-hilutz-krayot-kavish-22",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "areaServed": { "@type": "Place", "name": "חיפה והקריות" },
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
            נתקעתם עם רכב פרטי, מסחרי או 4X4 בכביש 22? אנו מספקים שירותי גרירה וחילוץ אמינים. למי שמחפש <Link href="/areas/haifa-general/fast-towing-services-road-22-krayot-bypass" className="underline text-yellow-300">שירות גרירה מהיר בכביש 22</Link> או <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="underline text-yellow-300">חילוץ רכב תקוע בצומת הצ'ק פוסט</Link>, אנחנו כאן בשבילכם 24/7. שימו לב: איננו גוררים אופנועים.
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
              <h3 className="text-xl font-bold text-yellow-400">מה טווח המחירים לגרירה באזור הקריות?</h3>
              <p>המחיר נקבע בהתאם למרחק הגרירה וסוג הרכב. אנו מקפידים על הצעת מחיר הוגנת ושקופה. לבירור מחיר <Link href="/areas/haifa-general/grar-zol-lerchev-takua-bekiryat-yam" className="text-blue-400">גרירה זולה בקרית ים</Link> ניתן לפנות אלינו טלפונית.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-400">האם אתם מפנים רכבים ישנים לגריטה?</h3>
              <p>כן, אנו מספקים שירותי פינוי גרוטאות. אם הרכב שלכם אינו כשיר לנסיעה, בדקו את שירותי <Link href="/areas/haifa-general/pinui-rechev-grotah-grira-check-post-haifa-krayot-lechalafim" className="text-blue-400">פינוי רכב גרוטה בחיפה והקריות</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}