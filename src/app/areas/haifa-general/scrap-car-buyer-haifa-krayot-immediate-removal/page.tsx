import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מיידי | מחיר הוגן",
  description: "רוצים למכור רכב לפירוק בחיפה והקריות? פינוי מיידי, תשלום במזומן ושירות מהיר 24/7. הגעה לכל אזור הצפון. התקשרו עכשיו לקבלת הצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/scrap-car-buyer-haifa-krayot-immediate-removal"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פינוי וקניית רכבים לפירוק חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "Scrap Car Removal"
  };

  return (
    <main className="bg-neutral-950 min-h-screen text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב ישן? אנו מציעים קניית רכבים לפירוק בחיפה והקריות במחיר הוגן. פינוי מהיר מהשטח 24/7.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">שירות פינוי רכבים מקצועי</h2>
          <p className="mb-4">אנו מתמחים בקניית רכבים לפירוק מכל הסוגים: רכבים פרטיים ומסחריים. במידה ואתם זקוקים לשירותים נוספים באזור, ניתן לבדוק גם <Link href="/areas/haifa-general/buying-cars-for-scrap-check-post-haifa" className="text-blue-400 underline">קניית רכבים לפירוק בצ'ק פוסט חיפה</Link> או <Link href="/areas/haifa-general/car-scrapping-haifa-krayot-immediate-removal" className="text-blue-400 underline">פירוק רכבים באזור חיפה והקריות</Link>.</p>
          <p className="mb-4">אנו מתמקדים ברכבים בעלי 4 גלגלים ומעלה. איננו מספקים שירותי פינוי או קנייה לאופנועים. אם הרכב שלכם נתקע בדרך, תוכלו להיעזר בשירותי <Link href="/areas/haifa-general/emergency-breakdown-towing-route-22-krayot-bypass" className="text-blue-400 underline">גרירה בחירום בכביש 22 עוקף קריות</Link>.</p>
          
          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mt-10">
            <h3 className="text-2xl font-semibold mb-4">שאלות נפוצות (FAQ)</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">האם אתם מפנים רכבים מכל אזור הקריות?</h4>
                <p>כן, אנו נותנים שירות פינוי רכבים לפירוק בכל הקריות, מקריית ים ועד קריית אתא וביאליק.</p>
              </div>
              <div>
                <h4 className="font-bold">מהו טווח המחירים לרכב לפירוק?</h4>
                <p>המחיר נקבע לפי סוג הרכב, מצבו המכני וערך המתכות בו. אנו מתחייבים להצעת מחיר הוגנת ומשתלמת.</p>
              </div>
              <div>
                <h4 className="font-bold">כמה מהר אתם מגיעים?</h4>
                <p>אנו ערוכים לפינוי מיידי בכל שעות היממה, תוך דגש על שירות מהיר ויעיל.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}