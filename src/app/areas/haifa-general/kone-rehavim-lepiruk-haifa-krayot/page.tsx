import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מהיר ומזומן - שירות 24/7",
  description: "רוצים למכור רכב ישן או פגום? אנו קונים רכבים לפירוק בחיפה והקריות במחיר הוגן! פינוי מהיר ומקצועי לכל סוגי הרכבים. התקשרו עכשיו לקבלת הצעה!",
  alternates: {
    canonical: "/areas/haifa-general/kone-rehavim-lepiruk-haifa-krayot"
  }
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
    "serviceType": "Car Recycling and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות</h1>
          <p className="text-xl mb-8 max-w-3xl">
            אנו מציעים שירות מקצועי ומהיר לקניית רכבים לפירוק בחיפה ובכל אזור הקריות. אם ברשותכם רכב ישן, רכב שאינו נוסע, רכב לאחר תאונה או רכב שפשוט תופס מקום, אנו כאן כדי לפנות אותו עבורכם. אנו מתמחים ברכבים פרטיים, מסחריים ורכבי 4x4. מחפשים גם <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included" className="underline font-semibold">קניית רכבים לפירוק בחיפה</Link> עם שירות גרירה כלול? הגעתם למקום הנכון.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
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
          <h2 className="text-3xl font-bold mb-8 text-center">למה לבחור בנו?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">שירות מהיר באזורכם</h3>
              <p>פריסה רחבה בחיפה והקריות, כולל שירותים מיוחדים כגון <Link href="/areas/haifa-general/car-scrapping-old-industrial-zone-kiryat-bialik" className="text-blue-600">פירוק רכבים באזור התעשייה קריית ביאליק</Link> ואזור נווה שאנן.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">מחירים הוגנים</h3>
              <p>אנו מעריכים את הרכב שלכם ומציעים הצעת מחיר הוגנת ומשתלמת. לתושבי האזור, אנו מציעים גם <Link href="/areas/haifa-general/buy-old-cars-for-scrap-kiryat-yam" className="text-blue-600">קניית רכבים לפירוק בקרית ים</Link> במחירים ללא תחרות.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">פינוי מקצועי</h3>
              <p>טיפול בכל הניירת הנדרשת ופינוי בטוח. במידה ואתם זקוקים גם לגרירה באזור, ניתן לבדוק שירותי <Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="text-blue-600">גרירה בצומת צ'ק פוסט</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">אילו סוגי רכבים אתם קונים?</h3>
              <p>אנו קונים רכבים פרטיים, רכבים מסחריים ורכבי 4x4 במצב נסיעה, לאחר תאונה או רכבים ישנים. שימו לב: איננו קונים אופנועים.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">תוך כמה זמן תגיעו לפנות את הרכב?</h3>
              <p>אנו שואפים להגיע ביום הפנייה. השירות שלנו מכסה את כל חיפה והקריות בפריסה ארצית מהירה.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם אתם מטפלים גם במקרים דחופים?</h3>
              <p>בהחלט. אם נתקעתם או שהרכב מהווה מפגע, אנו מציעים שירותי עזר וגרירה באזור, כגון <Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-blue-600">גרירת רכבים לאחר תאונה בצ'ק פוסט</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}