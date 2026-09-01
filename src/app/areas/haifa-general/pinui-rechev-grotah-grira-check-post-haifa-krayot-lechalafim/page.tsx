import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";

export const metadata: Metadata = {
  title: "פינוי רכב גרוטאה בצ'ק פוסט, חיפה והקריות | שירות מהיר ומחיר הוגן",
  description: "נתקעתם עם רכב ישן? שירותי פינוי רכב גרוטאה וגרירה לפירוק בצ'ק פוסט, חיפה והקריות. מענה מהיר, פינוי מיידי ותשלום הוגן במזומן. התקשרו עכשיו!",
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
            זקוקים לפינוי רכב לפירוק? אנו מתמחים בפינוי מהיר של רכבים ישנים ותקולים מכל רחבי חיפה והקריות. תשלום במזומן וגרירה מיידית.
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
              מחפשים <Link href="/areas/haifa-general/buy-cars-for-scrap-check-post-haifa" className="text-blue-300 underline">קניית רכבים לפירוק בצ'ק פוסט</Link>? אנו מציעים שירות מקיף שחוסך לכם זמן וכאב ראש. 
              בין אם מדובר ברכב שלא מניע או רכב ללא טסט, אנו מבצעים <Link href="/areas/haifa-general/car-scrapping-haifa-krayot" className="text-blue-300 underline">פירוק רכבים בחיפה והקריות</Link> בצורה חוקית ומהירה. 
              זקוקים גם ל-<Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-300 underline">גרירה בחיפה והקריות</Link>? הצוות שלנו זמין עבורכם.
            </p>
          </section>

          <section className="mb-12">
             <h2 className="text-2xl font-bold text-blue-400 mb-6">שאלות נפוצות על פינוי רכבים</h2>
             <div className="bg-gray-800 p-6 rounded-lg space-y-6">
                <div>
                  <h3 className="font-bold text-xl text-white">האם אתם מפנים רכבים מכל אזור הצפון?</h3>
                  <p>כן, אנו מספקים מענה מהיר בצ'ק פוסט, חיפה, והקריות, כולל אזורי תעשייה ועסקים.</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">כיצד נקבע המחיר לפינוי גרוטאה?</h3>
                  <p>המחיר נקבע לפי סוג הרכב, מצבו המכני ומשקלו לצורכי פירוק. דברו איתנו לקבלת הצעת מחיר הוגנת במזומן.</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">האם ניתן להזמין גרירה דחופה?</h3>
                  <p>בהחלט. אם נתקעתם בדרך או צריכים פינוי דחוף, צרו קשר עם שירותי <Link href="/areas/haifa-general/fast-towing-flat-tire-road-22-check-post" className="text-blue-300 underline">גרירה מהירה בצ'ק פוסט</Link>.</p>
                </div>
             </div>
          </section>
        </div>
      </main>
    </>
  );
}