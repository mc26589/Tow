import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מיידי ומזומן",
  description: "נתקעתם עם רכב ישן? קונה רכבים לפירוק בחיפה והקריות עם פינוי מהיר מהשטח. מחיר הוגן, שירות אמין ומקצועי. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
    "priceRange": "$",
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
    "serviceType": ["Car Scrap", "Towing Service", "Vehicle Removal"]
  };

  return (
    <main className="min-h-screen bg-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב ישן או מושבת? אנו קונים רכבים לפירוק ומפנים אותם מהשטח באופן מיידי.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition-colors"
            >
              חייגו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-900 text-neutral-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">שירות מקצועי לפינוי רכבים</h2>
          <p className="mb-4">אנו מתמחים בקניית רכבים לפירוק בחיפה, הקריות והסביבה. אנו מספקים שירותים משלימים כמו <Link href="/areas/haifa-general/cash-for-scrap-cars-kiryat-motzkin" className="text-blue-400 underline">קניית רכבים לפירוק בקריית מוצקין</Link> וכן <Link href="/areas/haifa-general/car-scrapping-old-industrial-zone-kiryat-bialik" className="text-blue-400 underline">פינוי רכבים לפירוק באזור התעשייה קריית ביאליק</Link>. השירות שלנו מותאם ללקוחות פרטיים ועסקיים הזקוקים לפתרון מהיר.</p>
          
          <div className="bg-neutral-800 p-6 rounded-xl border-l-4 border-red-600 mb-8">
            <p className="font-bold text-red-400">הערה חשובה: איננו מטפלים באופנועים.</p>
            <p>השירות שלנו מיועד לרכבים בעלי 4 גלגלים בלבד (פרטיות, מסחריות, 4x4).</p>
          </div>

          <h2 className="text-2xl font-bold mb-4">שאלות נפוצות</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg">תוך כמה זמן תפנו את הרכב?</h3>
              <p>אנו מציעים שירות פינוי מיידי באזור חיפה והקריות. ברוב המקרים הגעה תוך שעות בודדות.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">באילו אזורים אתם פעילים?</h3>
              <p>אנו פרוסים בכל אזור חיפה, הקריות, נווה שאנן, אחוזה והסביבה. למידע נוסף ניתן לבדוק גם את שירותי ה-<Link href="/areas/haifa-general/car-scrapping-neve-shaanan-haifa" className="text-blue-400 underline">פירוק רכבים בנווה שאנן</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}