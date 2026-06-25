import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מהיר ומזומן - שירות 24/7",
  description: "רוצים למכור רכב ישן לפירוק? קונה רכבים לפירוק בחיפה והקריות במחיר הוגן. פינוי מהיר מהשטח, ללא כאב ראש. התקשרו עכשיו להצעת מחיר משתלמת!",
  alternates: {
    canonical: "/areas/haifa-general/scrap-cars-haifa-krayot-immediate-removal",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירות פינוי וקניית רכבים לפירוק חיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "34.9896"
    },
    "priceRange": "$",
    "serviceType": "Scrap Car Removal and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב ישן או מושבת? אנו מפנים רכבים לפירוק במהירות, באמינות ובמחיר הוגן בכל רחבי חיפה והקריות.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות מקצועי לפינוי רכבים</h2>
        <p className="mb-4">אנו מתמחים בקניית רכבים לפירוק מכל הסוגים: רכבים פרטיים, רכבים מסחריים ורכבי שטח. אם אתם מחפשים <Link href="/areas/haifa-general/buy-old-cars-for-scrap-kiryat-yam" className="text-blue-600 underline">קונה רכבים לפירוק בקריית ים</Link> או זקוקים ל-<Link href="/areas/haifa-general/towing-for-scrap-kiryat-bialik" className="text-blue-600 underline">גרירה לפירוק בקריית ביאליק</Link>, אנחנו כאן בשבילכם. חשוב לציין: <strong>איננו מספקים שירות לאופנועים</strong>.</p>
        <p>השירות שלנו כולל פינוי מיידי מהשטח וטיפול מהיר בניירת. במידה ואתם זקוקים לשירותים נוספים באזור, אנו מציעים גם <Link href="/areas/haifa-general/cash-for-junk-cars-for-parts-kiryat-motzkin-immediate-pickup" className="text-blue-600 underline">קניית רכבים לפירוק בקריית מוצקין</Link>.</p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על פינוי רכבים לפירוק</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">האם אתם קונים כל סוג של רכב?</h3>
              <p>אנו קונים רכבים פרטיים, מסחריים ורכבי שטח ישנים או מושבתים. השירות אינו כולל אופנועים.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">תוך כמה זמן מתבצע הפינוי?</h3>
              <p>אנו מתחייבים לפינוי מהיר ומקצועי בכל אזור חיפה והקריות, לרוב באותו היום.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם משלמים על הרכב במזומן?</h3>
              <p>כן, אנו מציעים הצעת מחיר הוגנת ומשלמים בהתאם לסוג הרכב ומצבו בעת הפינוי.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}