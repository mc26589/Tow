import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";

export const metadata: Metadata = {
  title: "פינוי רכב גרוטאה וגרירה בצ'ק פוסט, חיפה והקריות | שירות 24/7",
  description: "צריכים פינוי רכב גרוטאה בצ'ק פוסט, חיפה או בקריות? שירות מהיר, פינוי רכבים לפירוק במחיר הוגן ותשלום במזומן במקום. התקשרו עכשיו לפינוי מיידי!",
  alternates: { canonical: "/areas/haifa-general/pinui-rechev-grotah-grira-check-post-haifa-krayot-lechalafim" }
};

export default function Page() {
  const businessPhoneForJsonLd = BUSINESS_INFO.phone || "972501234567";
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבי גרוטאה חיפה והקריות",
    "description": "שירותי גרירה מקצועיים ופינוי רכבים לפירוק באזור חיפה, צ'ק פוסט והקריות.",
    "url": "https://yourdomain.com/areas/haifa-general/pinui-rechev-grotah-grira-check-post-haifa-krayot-lechalafim",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": `+${businessPhoneForJsonLd}`,
      "contactType": "customer service"
    }
  };

  return (
    <>
      <Script id="json-ld-auto-towing" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">פינוי רכב גרוטאה וגרירה בצ'ק פוסט, חיפה והקריות</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            נתקעתם עם רכב ישן? אנו מציעים שירות פינוי רכב גרוטאה מהיר וגרירה לפירוק בחיפה, בצ'ק פוסט ובכל אזור הקריות. תשלום במזומן ושירות אמין.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-6 rounded-full">התקשרו עכשיו לפינוי מהיר</a>
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-gray-200 py-12">
        <div className="container mx-auto px-4">
          <section className="mb-12 p-6 bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">שירות פינוי וגרירה מקצועי באזורכם</h2>
            <p className="mb-4">
              מחפשים <Link href="/areas/haifa-general/buying-cars-for-scrap-check-post-haifa" className="text-blue-300 underline">קניית רכבים לפירוק בצ'ק פוסט</Link>? הצוות שלנו מספק פתרון לכל סוגי הרכבים. בין אם אתם זקוקים ל-<Link href="/areas/haifa-general/towing-services-road-22-krayot-bypass" className="text-blue-300 underline">שירותי גרירה בכביש 22 עוקף קריות</Link> או מחפשים <Link href="/areas/haifa-general/scrap-car-buyer-haifa-krayot-immediate-removal" className="text-blue-300 underline">קונה רכבים לפירוק בחיפה והקריות</Link>, הגעתם למקום הנכון.
            </p>
          </section>

          <section className="mb-12">
             <h2 className="text-2xl font-bold text-blue-400 mb-6">שאלות נפוצות על פינוי רכבים</h2>
             <div className="bg-gray-800 p-6 rounded-lg space-y-6">
                <div>
                  <h3 className="font-bold text-xl text-white">האם אתם מפנים רכבים מכל אזור הצפון?</h3>
                  <p>כן, אנו מספקים מענה מהיר בכל אזור חיפה, צ'ק פוסט, הקריות והסביבה. השירות זמין גם עבור <Link href="/areas/haifa-general/towing-road-22-krayot-bypass" className="text-blue-300 underline">גרירה בכביש 22</Link> למקרים דחופים.</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">כיצד נקבע המחיר לפינוי גרוטאה?</h3>
                  <p>המחיר נקבע בהתאם לסוג הרכב ומשקלו. אנו מציעים הצעת מחיר הוגנת במקום. שירותינו כוללים גם <Link href="/areas/haifa-general/towing-service-bat-galim-haifa" className="text-blue-300 underline">גרירה בבת גלים</Link> ובכל השכונות הסמוכות.</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">האם אתם מציעים גרירה מכל סוג?</h3>
                  <p>אנו מתמחים בגרירת רכבים ופינוי גרוטאות. אם אתם זקוקים ל-<Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-blue-300 underline">גרירת תאונות בצ'ק פוסט</Link>, הצוות שלנו זמין לתת מענה מקצועי ושקט נפשי.</p>
                </div>
             </div>
          </section>
        </div>
      </main>
    </>
  );
}