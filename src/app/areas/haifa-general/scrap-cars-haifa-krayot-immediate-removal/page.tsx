import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קניית רכבים לפירוק בחיפה והקריות | פינוי מיידי ותשלום במזומן",
  description: "מוכרים רכב ישן או מושבת? קניית רכבים לפירוק בחיפה והקריות עם פינוי מיידי ותשלום הוגן במזומן. שירות זמין 24/7. התקשרו עכשיו להצעת מחיר משתלמת!",
  alternates: {
    canonical: "/areas/haifa-general/scrap-cars-haifa-krayot-immediate-removal"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירות קניית רכבים לפירוק בחיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$$",
    "serviceType": "Scrap Car Removal",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "34.9896"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קניית רכבים לפירוק בחיפה והקריות - פינוי מיידי ותשלום הוגן</h1>
          <p className="text-xl mb-8">צריכים להיפטר מרכב ישן, מושבת או רכב לאחר תאונה? אנו מספקים שירותי פינוי מהירים ומקצועיים בכל אזור חיפה והקריות בכל שעה.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי רכבים לפירוק?</h2>
        <p className="mb-4">אנו מתמחים בפינוי רכבים מכל הסוגים: רכבים פרטיים, רכבים מסחריים ורכבי 4x4. אם נתקעתם בדרכים, אנו מציעים מענה מהיר. אנו מציעים גם פתרונות כגון <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-600 underline">גרירת רכב בכביש 22 ובצ׳ק פוסט</Link> ו-<Link href="/areas/haifa-general/cash-for-old-broken-car-neve-shaanan-haifa" className="text-blue-600 underline">קניית רכבים לפירוק בנווה שאנן</Link>. חשוב לציין: איננו מספקים שירותי גרירה או פינוי לאופנועים.</p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות בנושא קניית רכבים לפירוק</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">האם אתם פעילים גם בקריות?</h3>
              <p>כן, אנו נותנים שירות מלא בכל אזור חיפה והקריות. אם אתם זקוקים לשירותי גרירה דחופים בדרך, ניתן להזמין <Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="text-blue-600">גרירה זולה בקרית ביאליק</Link> או <Link href="/areas/haifa-general/junk-car-removal-kiryat-yam-immediate-pickup" className="text-blue-600">פינוי גרוטאות רכב בקרית ים</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">איך מתבצע התשלום על הרכב?</h3>
              <p>התשלום על הרכב מתבצע במזומן במעמד הפינוי לאחר הערכת מצב הרכב.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">האם אתם מטפלים בחילוצי שטח בחיפה?</h3>
              <p>כן, אנו מספקים שירותי חילוץ מקצועיים לרבות <Link href="/areas/haifa-general/off-road-rescue-carmel-forest-danya" className="text-blue-600">חילוצי שטח ביערות הכרמל ודניה</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}