import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בקרית ים | פינוי מהיר ומזומן במקום",
  description: "רוצים למכור רכב לפירוק בקרית ים? קונים את כל סוגי הרכבים במזומן ובמחיר הוגן. פינוי מיידי מהיום להיום, ללא בירוקרטיה. התקשרו עכשיו להצעת מחיר!",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בקרית ים – פינוי מיידי במזומן</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם רכב ישן או מושבת? אנו קונים את כל סוגי הרכבים לפירוק בקרית ים. אנו מציעים פינוי מהיר מהשטח, ללא כאב ראש, במזומן ובמחיר הוגן. 
            אנו מספקים שירותי <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-towing-included" className="underline">קניית רכבים לפירוק בחיפה והקריות</Link> ומגיעים לכל נקודה בעיר במהירות.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="קרית ים" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
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
            <li>✓ פינוי מיידי של רכבים ללא טסט, רכבים ישנים או רכבים שעברו תאונה בקרית ים.</li>
            <li>✓ תשלום הוגן ומזומן במקום – ללא בירוקרטיה מיותרת.</li>
            <li>✓ כיסוי מלא לכל הקריות, כולל <Link href="/areas/haifa-general/towing-for-scrap-kiryat-bialik" className="text-blue-600 underline">קניית רכבים לפירוק בקרית ביאליק</Link>.</li>
            <li>✓ פתרונות גרירה מתקדמים לכל צורך באזור הקריות, כולל <Link href="/areas/haifa-general/cheap-private-car-towing-24-7-kiryat-yam" className="text-blue-600 underline">שירותי גרירה 24/7 בקרית ים</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על פירוק רכבים בקרית ים</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">אילו סוגי רכבים אתם קונים?</h3>
              <p>אנו קונים רכבים פרטיים, רכבי שטח ומסחריים מכל הסוגים, ללא קשר למצב המכני. שירות זה מיועד לרכבים בלבד ואינו כולל אופנועים.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם אתם פעילים גם בשכונות הסמוכות ובצירים מרכזיים?</h3>
              <p>כן, אנו נותנים מענה מלא לכל אזור הקריות ומבצעים פינוי גם על צירים ראשיים. זקוקים לעזרה בדרך? ניתן לקרוא על <Link href="/areas/haifa-general/towing-services-road-22-krayot-bypass" className="text-blue-600 underline">שירותי גרירה בכביש 22</Link> במקרה הצורך.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">תוך כמה זמן תגיעו לפנות את הרכב?</h3>
              <p>המטרה שלנו היא פינוי מיידי. ברוב המוחלט של המקרים אנו מגיעים עוד באותו היום, בהתאם למיקום שלך ולזמינות הניידת באזור קרית ים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}