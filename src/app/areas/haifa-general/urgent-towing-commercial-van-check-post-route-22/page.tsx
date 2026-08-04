import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב מסחרי דחוף בצ'ק פוסט וחיפה | הגעה מהירה 24/7",
  description: "נתקעתם עם רכב מסחרי בצומת הצ'ק פוסט או כביש 22? שירות גרירה מהיר ומקצועי לרכבים מסחריים וטנדרים. מחיר הוגן, הגעה מהירה לכל אזור חיפה. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/urgent-towing-commercial-van-check-post-route-22"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday-Saturday", "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "35.0230" },
    "priceRange": "$",
    "serviceType": "Commercial Vehicle Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">גרירת רכב מסחרי דחופה בצומת הצ'ק פוסט וכביש 22 חיפה</h1>
          <p className="text-xl mb-8">
            נתקעתם עם הרכב המסחרי בצומת הצ'ק פוסט או לאורך כביש 22? אנו מתמחים בחילוץ וגרירת רכבים מסחריים, טנדרים ורכבי 4x4. 
            אם אתם זקוקים לשירות מקצועי יותר, תוכלו לבדוק גם <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="underline">שירותי גרירת רכב דחופים באזור הצ'ק פוסט</Link> או 
            <Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="underline">גרירה זולה בצ'ק פוסט חיפה</Link>. הצוות שלנו מכיר היטב את עומסי התנועה באזור ומגיע במהירות. 
            חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לחילוץ רכב מסחרי?</h2>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>זמינות מלאה 24/7 לכל אזור חיפה והקריות.</li>
          <li>ציוד גרירה מתקדם המותאם לרכבים מסחריים כבדים.</li>
          <li>הגעה מהירה לצומת הצ'ק פוסט וכביש 22.</li>
          <li>שירות אדיב ומקצועי במחירים הוגנים.</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירת רכבים באזור</h2>
        <div className="space-y-4">
            <div>
                <h3 className="font-bold">מהו זמן ההגעה הממוצע לצומת הצ'ק פוסט?</h3>
                <p>אנו עושים את מירב המאמצים להגיע תוך 30-45 דקות, בהתאם לעומסי התנועה בצירים המרכזיים כמו כביש 22.</p>
            </div>
            <div>
                <h3 className="font-bold">האם אתם גוררים רכבים חשמליים?</h3>
                <p>כן, אנו נותנים מענה גם לרכבים חשמליים - ניתן לראות מידע נוסף בקישור ל<Link href="/areas/haifa-general/affordable-electric-car-towing-check-post-krayot" className="text-blue-600">גרירת רכב חשמלי בצ'ק פוסט</Link>.</p>
            </div>
            <div>
                <h3 className="font-bold">האם אתם קונים רכבים תקולים לפירוק?</h3>
                <p>בהחלט. אם הרכב אינו בר תיקון, אנו מציעים שירות של <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included" className="text-blue-600">קניית רכבים לפירוק בחיפה</Link> כולל גרירה על חשבוננו.</p>
            </div>
        </div>
      </section>
    </main>
  );
}