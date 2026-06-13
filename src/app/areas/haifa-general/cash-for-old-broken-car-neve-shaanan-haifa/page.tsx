import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קניית רכבים לפירוק בנווה שאנן חיפה | תשלום במזומן ופינוי מיידי",
  description: "מעוניינים למכור רכב ישן או תקול בנווה שאנן? אנו קונים רכבים לפירוק בחיפה, משלמים במזומן ומפנים את הרכב מהשטח שלכם עוד היום. התקשרו לקבלת הצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/cash-for-old-broken-car-neve-shaanan-haifa"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים חיפה",
    "areaServed": "Neve Sha'anan, Haifa",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7858",
      "longitude": "35.0064"
    },
    "priceRange": "$$,$",
    "serviceType": "Car Removal and Scrap Services"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">קניית רכבים לפירוק בנווה שאנן חיפה – תשלום במזומן ופינוי מיידי</h1>
          <p className="text-lg mb-8">
            מחפשים למכור רכב ישן או תקול בנווה שאנן? אנו מתמחים ב-<Link href="/areas/haifa-general/car-scrapping-neve-shaanan-haifa" className="underline font-bold">קניית רכבים לפירוק בנווה שאנן</Link>, רכבים לאחר תאונה ורכבים שאינם עוברים טסט. אנו מציעים שירות מהיר, אמין ומקצועי הכולל פינוי הרכב מהשטח שלכם בחיפה. למידע נוסף על פינוי מהיר, ניתן לעיין ב-<Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-immediate-removal" className="underline font-bold">שירות קניית רכבים לפירוק עם פינוי מיידי</Link>. אנו מתמחים ברכבים פרטיים, מסחריים ורכבי 4x4.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
          <ul className="space-y-4 text-gray-300">
            <li>✓ תשלום הוגן במזומן עבור הרכב שלכם.</li>
            <li>✓ פינוי מהיר מכל נקודה בנווה שאנן ובחיפה.</li>
            <li>✓ שירות גרירה ללא עלות נוספת (בדקו גם <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included" className="text-blue-400">שירות קניית רכבים לפירוק עם גרירה כלולה</Link>).</li>
            <li>✓ טיפול מקצועי בכל סוגי הרכבים (למעט אופנועים).</li>
            <li>✓ זמינות 24/7 לכל קריאה.</li>
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על פינוי רכבים בנווה שאנן</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">באילו סוגי רכבים אתם מטפלים?</h3>
              <p>אנו קונים רכבים פרטיים, מסחריים ורכבי 4x4 לפירוק. חשוב לציין: איננו קונים אופנועים.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם מגיעים לכל רחוב בנווה שאנן?</h3>
              <p>כן, אנו נותנים שירות מלא בכל אזורי נווה שאנן, מהרחובות הראשיים ועד לרחובות הקטנים ביותר, וכן מספקים שירותי <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot" className="text-blue-600">פינוי רכבים לפירוק בחיפה והקריות</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}