import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב בצ'ק פוסט חיפה 24/7 | מחיר הוגן ושירות מהיר",
  description: "נתקעתם בצומת צ'ק פוסט בחיפה? גרירת רכב חירום 24/7 במחיר הוגן. צוות מקצועי עם ציוד מתקדם להגעה מהירה לכל קריאה. התקשרו עכשיו לקבלת שירות!",
  alternates: {
    canonical: "/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חירום חיפה והקריות",
    "description": "שירותי גרירת רכב חירום מהירים בצומת צ'ק פוסט חיפה. זמינות 24/7 לכל סוגי הרכבים במחירים נוחים.",
    "url": "https://www.yourdomain.com/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa",
    "telephone": `+${BUSINESS_INFO.phone}`,
    "priceRange": "$",
    "areaServed": {
      "@type": "Place",
      "name": "חיפה והקריות",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.795,
        "longitude": 35.015
      }
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
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
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            גרירת רכב חירום בצומת צ'ק פוסט חיפה – זמינות 24/7
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            נתקעתם עם הרכב בצומת צ'ק פוסט בחיפה? אנו מציעים שירותי גרירה מקצועיים, מהירים ובמחיר הוגן ללא הפתעות. הצוות שלנו זמין לסייע לכם 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a
              href={`tel:+${BUSINESS_INFO.phone}`}
              className="bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300 font-semibold py-3 px-8 rounded-full shadow-lg text-lg"
            >
              התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">למה לבחור בנו לגרירה באזור?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">מהירות תגובה</h3>
              <p>הצוות שלנו מכיר את עומסי התנועה בצ'ק פוסט ויודע להגיע אליכם בזמן הקצר ביותר.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">שירותים משלימים</h3>
              <p>מעבר לגרירה, אנו מציעים גם <Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="underline">שירותי גרירה זולים בצומת</Link> ותמיכה במקרי תאונות דרכים קשים.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">פינוי גרוטאות</h3>
              <p>אם הרכב הושבת לחלוטין, אנו מבצעים גם <Link href="/areas/haifa-general/buying-cars-for-scrap-check-post-haifa" className="underline">קניית רכבים לפירוק בצ'ק פוסט</Link> במחיר הוגן.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות על גרירת רכב בצ'ק פוסט</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">כמה זמן לוקח לכם להגיע לצומת צ'ק פוסט?</h3>
              <p>בדרך כלל אנו מגיעים תוך זמן קצר מאוד, בהתאם לעומסי התנועה בצומת והשעה ביום.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם גוררים רכבים מכל סוג?</h3>
              <p>אנו גוררים רכבים פרטיים, רכבים מסחריים ורכבי שטח. איננו מספקים שירותי גרירה לאופנועים.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם השירות שלכם זמין בחגים?</h3>
              <p>כן, אנו עובדים 24/7 ללא הפסקה, כולל חגים, סופי שבוע ולילות.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}