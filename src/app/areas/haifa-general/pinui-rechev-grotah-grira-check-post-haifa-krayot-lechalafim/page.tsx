import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";

export const metadata: Metadata = {
  title: "פינוי רכב גרוטאה בצ'ק פוסט חיפה והקריות | שירות מהיר ומחיר הוגן",
  description: "צריכים פינוי רכב גרוטאה? שירותי גרירה מקצועיים בצ'ק פוסט, חיפה והקריות. קניית רכבים לפירוק במזומן. הגעה מהירה! התקשרו עכשיו!",
  alternates: { canonical: "/areas/haifa-general/pinui-rechev-grotah-grira-check-post-haifa-krayot-lechalafim" }
};

export default function Page() {
  const businessPhoneForJsonLd = BUSINESS_INFO.phone || "972501234567";
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבי גרוטאה חיפה והקריות",
    "description": "שירותי גרירה ופינוי רכבי גרוטאה לפירוק ולחלפים באזור צ'ק פוסט חיפה והקריות.",
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
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">פינוי רכב גרוטאה גרירה צ'ק פוסט חיפה קריות</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            שירותי גרירה לפירוק ופינוי רכבים ישנים ותקולים באזור חיפה, הקריות וצ'ק פוסט. תשלום במזומן ושירות מהיר.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-6 rounded-full">התקשרו עכשיו לקבלת הצעת מחיר</a>
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-gray-200 py-12">
        <div className="container mx-auto px-4">
          <section className="mb-12 p-6 bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">פינוי רכב גרוטאה וגרירה באזור חיפה והקריות</h2>
            <p className="mb-4">אנו מציעים שירות מקיף לפינוי רכבים לפירוק. אם אתם מחפשים <Link href="/areas/haifa-general/towing-for-scrap-kiryat-bialik" className="text-blue-300 underline">גרירה לפירוק בקרית ביאליק</Link> או <Link href="/areas/haifa-general/cash-for-junk-cars-kiryat-yam-immediate-pickup" className="text-blue-300 underline">קניית רכבים לפירוק בקרית ים</Link>, אנחנו הכתובת.</p>
          </section>

          <section className="mb-12">
             <h2 className="text-2xl font-bold text-blue-400 mb-6">שאלות נפוצות</h2>
             <div className="bg-gray-800 p-6 rounded-lg space-y-4">
                <div><h3 className="font-bold">מהו המחיר לפינוי רכב?</h3><p>המחיר משתנה בהתאם לסוג הרכב ומצבו. התקשרו לקבלת הצעת מחיר הוגנת.</p></div>
                <div><h3 className="font-bold">האם אתם קונים רכבים ללא טסט?</h3><p>כן, אנו קונים רכבים ישנים, ללא טסט או רכבים שלא עוברים נסיעה.</p></div>
                <div><h3 className="font-bold">האם אתם מפנים גם רכבים באזורי תעשייה?</h3><p>בוודאי, אנו מספקים שירותים גם באזורי תעשייה כמו צ'ק פוסט או <Link href="/areas/haifa-general/cash-for-junk-cars-for-parts-kiryat-motzkin-immediate-pickup" className="text-blue-300 underline">קרית מוצקין</Link>.</p></div>
             </div>
          </section>
        </div>
      </main>
    </>
  );
}