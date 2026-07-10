import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בקרית ים | פינוי מיידי ומזומן במקום",
  description: "מעוניינים למכור רכב לפירוק בקרית ים? אנו קונים את כל סוגי הרכבים לפירוק, פינוי מהיר, מזומן במקום ומחיר הוגן. התקשרו עכשיו לפינוי הרכב מהיום להיום!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-kiryat-yam-immediate-removal"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פינוי רכבים לפירוק בקרית ים",
    "areaServed": "קרית ים",
    "priceRange": "הוגן",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8285",
      "longitude": "35.0715"
    },
    "serviceType": "פינוי וקניית רכבים לפירוק"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בקרית ים – פינוי מיידי ומזומן</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם רכב ישן? אנו קונים את כל סוגי הרכבים לפירוק בקרית ים. פינוי מהיר מהשטח, ללא כאב ראש, במזומן ובמחיר הוגן. אנו מתמחים ברכבים פרטיים ומסחריים. זקוקים לגרר דחוף? בדקו גם שירותי <Link href="/areas/haifa-general/grar-zol-lerchev-takua-bekiryat-yam" className="underline font-bold">grar zol lerchev takua bekiryat yam</Link> לכל תקלה.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="קרית ים" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בשירות פינוי רכבים שלנו?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ פינוי מיידי של רכבים ללא טסט או רכבים עומדים בקרית ים.</li>
            <li>✓ תשלום הוגן ומזומן במקום – ללא בירוקרטיה.</li>
            <li>✓ שירות מיומן המכסה את כל אזורי הקריות והסביבה.</li>
            <li>✓ עבודה מקצועית גם במצבי חירום, כולל שירותי <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600 underline">affordable car breakdown towing check post haifa krayot</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על פירוק רכבים</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">באילו סוגי רכבים אתם מטפלים?</h3>
              <p>אנו קונים רכבים פרטיים, מסחריים ושטח. לידיעתכם, איננו מפנים אופנועים.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם אתם מגיעים לכל שכונות קרית ים?</h3>
              <p>כן, אנו נותנים מענה לכל השכונות בעיר, כולל קרבה לאזורים כמו <Link href="/areas/haifa-general/scrap-car-removal-kiryat-haim-cash" className="text-blue-600">scrap car removal kiryat haim cash</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">תוך כמה זמן הרכב יפונה?</h3>
              <p>המטרה שלנו היא פינוי מיידי. ברוב המקרים נגיע עוד באותו היום, בהתאם לזמינות ולמיקום הרכב.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}