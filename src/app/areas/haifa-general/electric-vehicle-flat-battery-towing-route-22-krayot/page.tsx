import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בכביש 22 הקריות - הגעה מהירה 24/7",
  description: "נתקעתם עם רכב חשמלי ומצבר פרוק בכביש 22? אנו מספקים שירותי גרירה מקצועיים ואמינים לרכבים חשמליים באזור הקריות במחיר הוגן. התקשרו עכשיו!");
  alternates: {
    canonical: "/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ודרך חיפה והקריות",
    "description": "שירותי גרירה וסיוע בדרך לרכבים חשמליים עם מצבר פרוק בכביש 22 הקריות, 24/7. גרירת רכבים פרטיים, מסחריים ו-4X4.",
    "url": "https://yourdomain.com/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "areaServed": { "@type": "Place", "name": "חיפה והקריות" }
  };

  return (
    <>
      <Script id="json-ld-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרירת רכב חשמלי ומצבר פרוק בכביש 22 הקריות</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב חשמלי בכביש 22? אנו מציעים חילוץ מקצועי וגרירה מהירה לכל אזור הקריות.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full">התקשרו עכשיו: 054-917-4414</a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">שירותי גרירה בכביש 22 וסביבת הקריות</h2>
            <p className="mb-4">אנו מתמחים בחילוץ רכבים חשמליים. למידע על שירותים נוספים באזור, ראו את <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-300 underline">שירותי הגרירה בכביש 22</Link> או <Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="text-blue-300 underline">גרירה באזור הצ'ק פוסט</Link>.</p>
          </section>

          <section className="mb-16 bg-gray-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-blue-400">שאלות נפוצות</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold">האם אתם גוררים רכב חשמלי שנתקע ללא סוללה?</h3>
                <p>כן, אנו ערוכים לטעינה ניידת או גרירה בטוחה לנקודת הטעינה הקרובה בקריות.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">מהו זמן ההגעה הממוצע בכביש 22?</h3>
                <p>אנו ממוקמים באזור חיפה והקריות ומגיעים בדרך כלל תוך 30-45 דקות מרגע הקריאה, תלוי בעומסי התנועה.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}