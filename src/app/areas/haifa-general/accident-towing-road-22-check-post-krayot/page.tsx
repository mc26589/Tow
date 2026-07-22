import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";

export const metadata: Metadata = {
  title: "גרר תאונה כביש 22 צ'ק פוסט קריות | הגעה מהירה 24/7",
  description: "נתקעתם בכביש 22 או בצ'ק פוסט? שירותי גרירה וחילוץ מקצועיים לאחר תאונה זמינים 24/7. מחיר הוגן, צוות מנוסה והגעה מהירה. התקשרו עכשיו לחילוץ!",
  alternates: {
    canonical: "/areas/haifa-general/accident-towing-road-22-check-post-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "35.0350" },
    "priceRange": "$$, שירות במחיר הוגן",
    "serviceType": "Accident Towing and Roadside Assistance"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר תאונה כביש 22 צ'ק פוסט קריות – חילוץ מהיר 24/7</h1>
          <p className="text-xl mb-8">תקועים בכביש 22? זקוקים לפינוי מהיר מהצ'ק פוסט? הצוות שלנו בדרך אליכם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition">
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים לאחר תאונה</h2>
        <p className="mb-4">
          אנו מתמחים בפינוי רכבים לאחר תאונות באזור כביש עוקף קריות (כביש 22) וצומת צ'ק פוסט. בין אם מדובר בתקלה טכנית או תאונה, אנו מספקים פתרונות מהירים. 
          לפתרונות נוספים באזור, ניתן לבדוק גם <Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-blue-400 underline">גרירה וחילוץ מהצ'ק פוסט</Link> או 
          <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-400 underline"> שירותי גרירה משתלמים לאזור הקריות</Link>.
        </p>
        
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 my-8">
          <h3 className="text-2xl font-semibold mb-4">למה לבחור בנו?</h3>
          <ul className="list-disc pr-5 space-y-2">
            <li>זמינות מלאה 24/7 לכל אזור חיפה והקריות.</li>
            <li>התמחות בפינוי רכבים לאחר תאונות בצירים מהירים.</li>
            <li>שקיפות מלאה ומחיר הוגן לכל לקוח.</li>
            <li><strong>הערה:</strong> השירות מיועד לרכבים פרטיים ומסחריים בלבד (לא מספקים גרירה לאופנועים).</li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על גרירה בציר 22</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg">כמה זמן לוקח לגרר להגיע לצ'ק פוסט?</h4>
              <p>הצוות שלנו מכיר היטב את צירי התנועה באזור חיפה והקריות. אנו משתדלים להגיע לכל קריאה בכביש 22 בזמן המהיר ביותר האפשרי בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">האם השירות כולל פינוי רכבים מסחריים?</h4>
              <p>כן, אנו גוררים מגוון רכבים פרטיים ומסחריים קלים. לבירור לגבי גרירה מיוחדת, <Link href="/areas/haifa-general/cheap-towing-check-post-haifa-fast-service" className="text-blue-400 underline">צרו קשר עם שירות הגרירה המקצועי שלנו</Link>.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">מהו טווח המחירים לגרירה באזור חיפה?</h4>
              <p>אנו מקפידים על מחיר הוגן בהתאם למרחק הגרירה וסוג הרכב, תוך שמירה על רמת שירות גבוהה ללא הפתעות.</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}