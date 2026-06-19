import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | שירות מהיר ומחיר הוגן 24/7",
  description: "רוצים למכור רכב לפירוק בחיפה והקריות? אנו קונים את כל סוגי הרכבים במחיר הוגן, כולל פינוי וגרירה ללא עלות! שירות אמין ומהיר. התקשרו עכשיו לקבלת הצעה!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-haifa-krayot",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
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
    "serviceType": "Car Scrap and Towing"
  };

  return (
    <main className="bg-neutral-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות – שירות מהיר ומקצועי</h1>
          <p className="text-xl mb-8">מחפשים למכור רכב לפירוק? אנו מציעים שירות אמין, מהיר ומשתלם לכל סוגי הרכבים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 text-white">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפירוק רכבים?</h2>
        <div className="prose prose-invert max-w-none">
          <p>אנו קונים רכבים לפירוק בחיפה והקריות במחירים הוגנים ובתהליך מהיר. השירות שלנו זמין לתושבי האזור, לרבות אלו המחפשים <Link href="/areas/haifa-general/car-scrapping-neve-shaanan-haifa">פירוק רכבים בנווה שאנן</Link> או <Link href="/areas/haifa-general/buying-cars-for-scrap-ahoza-haifa">רכישת רכבים לפירוק באחוזה</Link>.</p>
          <p>אם ברשותך רכב ישן, תקול, לאחר תאונה או רכב שאינו עובר טסט, אנו מציעים שירות פינוי מקצועי ללא עלות גרירה. אנו מתמחים ברכישת רכבים פרטיים, מסחריים ורכבי שטח (4x4). <strong>חשוב לציין: אנו לא מטפלים באופנועים.</strong></p>
          <p>כמו כן, אנו מציעים פתרונות אזוריים נוספים כגון <Link href="/areas/haifa-general/cash-for-scrap-cars-kiryat-motzkin">קניית רכבים לפירוק בקריית מוצקין</Link> וכן <Link href="/areas/haifa-general/car-scrapping-old-industrial-zone-kiryat-bialik">פירוק רכבים באזור התעשייה קריית ביאליק</Link>.</p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 text-white">
        <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על פירוק רכבים</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl">האם אתם קונים כל סוג רכב?</h3>
            <p>אנו קונים רכבים פרטיים, רכבים מסחריים ורכבי 4x4. איננו עוסקים בפירוק אופנועים.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">האם השירות כולל גרירה?</h3>
            <p>כן, אנו מבצעים פינוי וגרירה של הרכב ללא עלות נוספת מכל נקודה בחיפה והקריות.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">תוך כמה זמן תגיעו לפנות את הרכב?</h3>
            <p>אנו שואפים להגעה מהירה ומקצועית בהתאם לעומס, בדרך כלל באותו היום. צרו קשר לתיאום מועד נוח.</p>
          </div>
        </div>
      </section>
    </main>
  );
}