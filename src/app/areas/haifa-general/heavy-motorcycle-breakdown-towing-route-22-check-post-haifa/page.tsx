import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירת רכבים בכביש 22 וצומת הצ'ק פוסט | הגעה תוך 30 דקות",
  description: "נתקעת בכביש 22 או בצומת הצ'ק פוסט? שירות גרירה מקצועי, מהיר ובמחיר הוגן 24/7 לרכבים פרטיים ומסחריים. הגעה מהירה לכל נקודה. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/heavy-motorcycle-breakdown-towing-route-22-check-post-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Haifa and Krayot",
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
      "longitude": "35.0230"
    },
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">גרירת רכבים וסיוע בדרך בכביש 22 (עוקף קריות) וצומת הצ'ק פוסט</h1>
          <p className="text-lg mb-8 max-w-2xl">
            נתקעת עם הרכב באזור כביש 22 או בצומת הצ'ק פוסט? אנו כאן לסייע במהירות. 
            אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4. אם נדרש שירות ספציפי כגון <Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="underline font-bold">גרירה זולה בצומת הצ'ק פוסט</Link> או שירות <Link href="/areas/haifa-general/fast-towing-road-22-krayot" className="underline font-bold">גרירה מהירה בכביש 22</Link>, הצוות שלנו זמין עבורך.
            <strong> חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.</strong>
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו באזור חיפה והקריות?</h2>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>זמינות מלאה 24/7 לכל קריאה בכל שעות היממה.</li>
          <li>הגעה מהירה לכל נקודה בכביש 22 ובצומת הצ'ק פוסט.</li>
          <li>צוות מיומן ומקצועי לטיפול ברכבים פרטיים ומסחריים.</li>
          <li>שקיפות מלאה ומחירים הוגנים ללא הפתעות.</li>
          <li>שירות מקצועי עבור <Link href="/areas/haifa-general/emergency-light-truck-towing-route-22-krayot-bypass" className="text-blue-600 underline">גרירת רכב מסחרי קל בכביש 22</Link>.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה באזור הצ'ק פוסט וכביש 22</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg">תוך כמה זמן תגיעו לצומת הצ'ק פוסט?</h3>
            <p>אנו משתדלים להגיע לכל קריאה באזור הצ'ק פוסט וכביש 22 תוך זמן קצר ככל האפשר, בהתאם לעומסי התנועה באזור הצפון.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">האם אתם מציעים גרירת אופנועים?</h3>
            <p>לא, איננו מספקים שירותי גרירה לאופנועים. אנו מתמקדים בגרירת רכבים פרטיים, רכבים מסחריים ורכבי 4x4 בלבד.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">מה עושים במקרה של תאונה בכביש 22?</h3>
            <p>במקרה של תאונה, ניתן להיעזר בשירות <Link href="/areas/haifa-general/emergency-car-recovery-ditch-route-4-check-post" className="text-blue-600 underline">חילוץ רכב לאחר תאונה</Link> המותאם בדיוק למצבים מורכבים בדרכים אלו.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">האם אתם מטפלים ברכבים חשמליים?</h3>
            <p>כן, אנו מציעים <Link href="/areas/haifa-general/emergency-towing-electric-car-route-22-krayot" className="text-blue-600 underline">גרירת רכבים חשמליים בכביש 22</Link> תוך הקפדה על נהלי בטיחות מחמירים.</p>
          </div>
        </div>
      </section>
    </main>
  );
}