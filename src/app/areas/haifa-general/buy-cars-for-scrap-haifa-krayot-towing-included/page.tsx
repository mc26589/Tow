import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קניית רכבים לפירוק בחיפה והקריות | גרירה חינם | מחיר הוגן 24/7",
  description: "רוצים למכור רכב לפירוק בחיפה והקריות? אנו קונים את כל סוגי הרכבים במחיר הוגן וכוללים גרירה בחינם. שירות מהיר ומקצועי 24/7. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-towing-included"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירות גרירה וקניית רכבים לפירוק חיפה והקריות",
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
    "serviceType": "Car Scrap and Towing"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות שירות גרירה כלול</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב לפירוק? אנו מציעים שירות מהיר, אמין וכולל גרירה בחינם.</p>
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

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות מקצועי לפינוי רכבים</h2>
        <p className="mb-4">אנו מתמחים בקניית רכבים לפירוק מכל הסוגים: רכבים פרטיים, מסחריים ורכבי 4x4. השירות כולל גרירה מקצועית ללא עלות נוספת. למידע נוסף על שירותים באזור, ניתן לבקר גם ב<Link href="/areas/haifa-general/buying-cars-for-scrap-check-post-haifa" className="text-blue-400 underline">buying cars for scrap check post haifa</Link>.</p>
        <p className="mb-4"><strong>הערה חשובה:</strong> אנו לא מטפלים באופנועים. השירות מיועד לרכבים בעלי 4 גלגלים ומעלה בלבד.</p>
        
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-xl">האם אתם מגיעים לכל אזור חיפה והקריות?</h3>
              <p>כן, אנו מספקים מענה מהיר בכל אזורי חיפה, מהצ'ק פוסט ועד הקריות. אם נתקעתם בדרך, אנו ממליצים גם על <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-blue-400 underline">גרירה 24 7 עוקף קריות מחיר הוגן</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם שירות הגרירה כלול במחיר הפירוק?</h3>
              <p>בהחלט. אנו מאמינים בשקיפות מלאה ומציעים פינוי רכב הכולל גרירה ללא עלות נוספת ללקוח.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-neutral-900 rounded-xl border border-neutral-800">
          <h3 className="text-2xl font-semibold mb-4">למה לבחור בנו?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>שירות גרירה כלול במחיר.</li>
            <li>הצעת מחיר הוגנת ומיידית.</li>
            <li>זמינות 24/7 בחיפה והקריות.</li>
            <li>פינוי מהיר ומקצועי.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}