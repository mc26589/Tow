import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | שירות מהיר ומחיר הוגן",
  description: "מעוניינים למכור רכב לפירוק בחיפה והקריות? אנו מציעים שירות מקצועי, פינוי מהיר ומזומן במקום. צרו קשר לקבלת הצעת מחיר הוגנת עוד היום!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-haifa-krayot"
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
          <p className="text-xl mb-8">מחפשים למכור רכב לפירוק? אנו מציעים שירות אמין, מהיר ומשתלם לכל סוגי הרכבים באזור הצפון.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 text-white">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפירוק רכבים?</h2>
        <p className="mb-4">אנו קונים רכבים לפירוק בחיפה והקריות במחירים הוגנים. השירות מותאם במיוחד לתושבי אזור הצפון, החל מ-<Link href="/areas/haifa-general/buy-cars-for-scrap-check-post-haifa" className="text-blue-400 underline">פירוק רכבים בצ'ק פוסט</Link> ועד ל-<Link href="/areas/haifa-general/cash-for-scrap-cars-kiryat-motzkin" className="text-blue-400 underline">פירוק רכבים בקרית מוצקין</Link>. אנו מטפלים ברכבים ישנים, רכבים לאחר תאונה או כאלה שאינם תקינים ומיועדים לגריטה.</p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>פינוי מהיר מכל נקודה בחיפה והקריות</li>
          <li>הערכת מחיר הוגנת בטלפון</li>
          <li>טיפול מקצועי ברכבים פרטיים ומסחריים</li>
        </ul>
        <p className="text-sm text-neutral-400 italic mb-8">* שימו לב: איננו מספקים שירותי פירוק או גרירה לאופנועים.</p>

        <div className="mt-12 bg-neutral-900 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">באילו אזורים אתם פועלים?</h4>
              <p className="text-neutral-300">אנו פועלים בכל אזור חיפה, הקריות, צ'ק פוסט והסביבה הקרובה.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם קונים כל סוג רכב?</h4>
              <p className="text-neutral-300">אנו קונים את רוב סוגי הרכבים הפרטיים והמסחריים, ללא קשר למצבם המכני (למעט אופנועים).</p>
            </div>
            <div>
              <h4 className="font-bold">האם יש צורך בגרירה בנפרד?</h4>
              <p className="text-neutral-300">ברוב המקרים אנו מספקים שירותי פינוי מלאים. אם נתקעתם בדרך, ניתן להיעזר בשירותי גרירה מקצועיים כמו <Link href="/areas/haifa-general/cheap-towing-check-post-krayot" className="text-blue-400 underline">גרירה בצ'ק פוסט</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}