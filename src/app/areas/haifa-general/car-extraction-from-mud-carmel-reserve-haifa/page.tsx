import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ רכב מבוץ בשמורת הכרמל חיפה | הגעה מהירה 24/7",
  description: "נתקעתם בבוץ בשמורת הכרמל? אנו מספקים חילוץ רכב מקצועי, מהיר ובמחיר הוגן 24/7. צוות מנוסה עם ציוד שטח מתקדם לכל סוגי הרכבים. התקשרו עכשיו!",
  alternates: {
    canonical: "https://yourdomain.com/areas/haifa-general/car-extraction-from-mud-carmel-reserve-haifa",
  },
};

function JsonLd() {
  const jsonLdData = {
    "@context": "http://schema.org",
    "@type": "AutoTowing",
    "name": "חילוץ רכב מבוץ בשמורת הכרמל חיפה",
    "description": "שירותי חילוץ רכב מהירים מבוץ באזור שמורת הכרמל, חיפה והסביבה.",
    "url": "https://yourdomain.com/areas/haifa-general/car-extraction-from-mud-carmel-reserve-haifa",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$$, $$$",
    "areaServed": {
      "@type": "Place",
      "name": "חיפה ושמורת הכרמל",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.745,
        "longitude": 35.005
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}

export default function Page() {
  return (
    <>
      <JsonLd />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            חילוץ רכב מבוץ בשמורת הכרמל חיפה – שירות מהיר ומקצועי 24/7
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            נתקעתם בבוץ באחת מדרכי העפר בשמורת הכרמל? אל תנסו לחלץ לבד! צוותי השטח שלנו מומחים בחילוץ רכבים מכל סוג מבוץ עמוק, חול או שטח בעייתי בחיפה והקריות. אם אתם זקוקים גם ל-<Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="underline text-blue-300">שירותי גרירה מקצועיים באזור הצ'ק פוסט</Link> או באזור הכרמל, אנחנו כאן.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והכרמל" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-gray-900 hover:bg-gray-200 transition-colors py-3 px-8 rounded-full text-lg shadow-lg">
              חייגו עכשיו לחילוץ מהיר
            </a>
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <section className="mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-primary-400">שאלות נפוצות (FAQ)</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="font-bold mb-2">כמה זמן לוקח לכם להגיע לחילוץ בשמורת הכרמל?</h3>
                <p className="text-gray-300">ברוב המקרים, הצוותים שלנו הפרוסים בחיפה והקריות מגיעים לנקודה תוך זמן קצר מאוד, בהתאם לעומסי התנועה ותנאי הדרך.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="font-bold mb-2">האם אתם מספקים שירותי גרירה לאחר החילוץ?</h3>
                <p className="text-gray-300">בהחלט. אנו מציעים שירות מקיף שכולל חילוץ מהבוץ וגרירה למוסך אם הרכב אינו תקין. ניתן לקרוא עוד על <Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="text-primary-400 underline">שירותי גרירה משתלמים בחיפה</Link>.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}