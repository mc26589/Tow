import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב בצ'ק פוסט חיפה 24/7 | הגעה מהירה ומחיר הוגן",
  description: "נתקעתם בצומת צ'ק פוסט? גרירת רכב מקצועית 24/7 לכל סוגי הרכבים. הגעה מהירה, מחיר הוגן ושירות ללא הפתעות. התקשרו עכשיו להגעה מיידית!",
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
    "priceRange": "$$",
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
            נתקעתם עם הרכב בצומת צ'ק פוסט בחיפה? הצוות שלנו זמין עבורכם 24/7 עם ציוד חדיש למתן פתרון מהיר במחיר הוגן.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
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
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">למה לבחור בנו לגרירה בצ'ק פוסט?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">מענה מהיר לצ'ק פוסט</h3>
              <p>הצוות שלנו מכיר את עומסי התנועה בצ'ק פוסט ומגיע אליכם במהירות. זקוקים גם לסיוע בכביש 22? ניתן לבדוק <Link href="/areas/haifa-general/emergency-towing-road-22-kiryat-ata-interchange" className="underline text-blue-400">גרירה בכביש 22 וצומת קרית אתא</Link>.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">גרירה לאחר תאונה</h3>
              <p>טיפול מקצועי במקרים מורכבים. אם קרתה תאונה, אנחנו מציעים <Link href="/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata" className="underline text-blue-400">שירותי גרירה לאחר תאונה</Link> בבטחה מלאה.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">פתרונות לרכבים ישנים</h3>
              <p>הרכב לא מניע ולא משתלם לתקן? אנו מבצעים גם <Link href="/areas/haifa-general/sell-damaged-car-for-parts-haifa-immediate-pickup" className="underline text-blue-400">פינוי רכבים לפירוק באזור חיפה</Link> במחיר הוגן.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">שאלות נפוצות על גרירת רכב בצ'ק פוסט</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">האם אתם מגיעים לכל אזור הצ'ק פוסט?</h3>
              <p>כן, אנו נותנים מענה מלא לכל אזור התעשייה והצמתים המרכזיים בצ'ק פוסט ובחיבור לכביש עוקף קריות. למידע נוסף ראו <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="underline text-blue-600">גרירה 24/7 בעוקף קריות</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם גוררים רכבים מסחריים?</h3>
              <p>אנו מציעים שירות גרירה לרכבים פרטיים ומסחריים קלים. שירותינו אינם כוללים אופנועים.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">איך מתבצע התשלום?</h3>
              <p>התשלום שקוף וקבוע מראש ללא הפתעות. אנו מאמינים בשירות הוגן ואמין לכל לקוח.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
