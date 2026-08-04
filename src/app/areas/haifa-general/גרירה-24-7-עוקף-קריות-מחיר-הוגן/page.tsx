import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרירה 24/7 בכביש 22 עוקף קריות | הגעה תוך 30 דקות - מחיר הוגן",
  description: "נתקעתם בכביש 22 עוקף קריות? גרר זמין 24/7 לכל סוגי הרכבים. הגעה מהירה, מחיר הוגן ושירות מקצועי. אל תחכו בכביש – התקשרו עכשיו לסיוע!",
  alternates: {
    canonical: "/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ 24/7 בכביש 22 עוקף קריות",
    "description": "שירותי גרירה וחילוץ מהירים ומקצועיים 24/7 לכל סוגי הרכבים בכביש 22 עוקף קריות.",
    "url": "https://yourdomain.com/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן",
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "₪₪",
    "areaServed": [
      { "@type": "Place", "name": "כביש 22 עוקף קריות" },
      { "@type": "Place", "name": "אזור חיפה והקריות" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.818", "longitude": "35.055" },
    "serviceType": ["גרירת רכב", "חילוץ רכב תקוע", "שירות גרירה 24/7", "גרירה בכביש 22"]
  };

  return (
    <>
      <Script
        id="json-ld-auto-towing"
        type="application/ld/json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            גרירת רכב 24/7 בכביש 22 עוקף קריות במחיר הוגן
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            נתקעתם באמצע הדרך? צוות הגרירה המקצועי שלנו זמין עבורכם 24/7. הגעה מהירה תוך דקות לרכבים פרטיים ומסחריים בעוקף קריות.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="כביש 22 עוקף קריות" />
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-gray-900 hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              התקשרו עכשיו: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <main className="bg-gray-900 text-gray-100 py-12">
        <div className="container mx-auto px-4">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">שירותי גרירה מקצועיים בכביש 22 עוקף קריות</h2>
            <p className="text-lg leading-relaxed mb-4">
              כביש 22 הוא עורק תחבורה ראשי. אנו מספקים <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-300 underline">affordable emergency car towing check post haifa</Link> לנהגים שנתקעו בדרכם לקריות. זקוקים לגרר פלטה? אנו מציעים גם <Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="text-blue-300 underline">affordable flatbed towing route 22 krayot area</Link> לכל סוגי הרכבים.
            </p>
            <p className="text-lg leading-relaxed">
              נתקעתם עם רכב חשמלי? היעזרו בשירות <Link href="/areas/haifa-general/affordable-electric-car-towing-check-post-krayot" className="text-blue-300 underline">affordable electric car towing check post krayot</Link>. כמו כן, במידה והרכב במצב גרוע, אנו מספקים פתרונות <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included" className="text-blue-300 underline">buy cars for scrap haifa towing included</Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">שאלות נפוצות (FAQ)</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl">מהו זמן ההגעה הממוצע לעוקף קריות?</h3>
                <p>הצוותים שלנו פועלים בפריסה ארצית בחיפה ובצפון. אנו מגיעים לרוב הנקודות בכביש 22 עוקף קריות תוך 30-45 דקות מרגע הקריאה.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl">האם המחיר כולל גרירה לצ'ק פוסט?</h3>
                <p>כן, אנו מבצעים גרירות מכל אזור עוקף קריות לכל יעד מבוקש כולל צומת צ'ק פוסט. ניתן לראות מידע נוסף על <Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="text-blue-300 underline">cheap towing check post haifa</Link>.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl">מה עושים אם הרכב לא מניע בעוקף קריות?</h3>
                <p>במקרים של מצבר גמור או תקלה טכנית, אל תנסו להמשיך לנסוע. עצרו בבטחה בשול הדרך והתקשרו אלינו. אנו מתמחים בפתרונות סיוע מהירים בדרכים.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}