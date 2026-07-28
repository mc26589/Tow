import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירה בכביש 22 חיפה-קריות: הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעת בכביש 22? שירותי גרירה וחילוץ מהירים לאחר תאונה בין חיפה לקריית אתא. הגעה תוך 30 דקות, שירות 24/7 ומחיר הוגן לכל סוגי הרכבים. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/accident-towing-route-22-haifa-kiryat-ata"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "35.0650" },
    "priceRange": "$$, $$$",
    "serviceType": "Accident Towing Service"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירות גרירה לאחר תאונה בכביש 22 חיפה ליד מחלף קריית אתא</h1>
          <p className="text-xl mb-8">
            נתקעתם בכביש 22? אנו כאן עבורכם. אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4 לאחר תאונות באזור מחלף קריית אתא. 
            זקוקים למידע נוסף? ניתן לבדוק גם את שירות ה-<Link href="/areas/haifa-general/towing-service-road-22-krayot-bypass" className="underline font-semibold">towing service road 22 krayot bypass</Link> המקיף שלנו. 
            שימו לב: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בכביש 22?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ הגעה מהירה לכל נקודה לאורך כביש עוקף קריות.</li>
            <li>✓ צוות מיומן בטיפול ברכבים לאחר תאונה.</li>
            <li>✓ מחירים הוגנים ושקיפות מלאה.</li>
            <li>✓ זמינות 24/7 לכל קריאה.</li>
          </ul>
          <p className="text-lg">זקוקים לעזרה נוספת? אנו מספקים גם <Link href="/areas/haifa-general/cheap-towing-services-check-post-junction" className="text-blue-400">שירותי גרירה מקצועיים באזור צומת צ'ק פוסט</Link> לכל דורש.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">שאלות נפוצות על גרירה בכביש 22</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold">תוך כמה זמן תגיעו למחלף קריית אתא?</h4>
              <p>אנו משתדלים להגיע לכל קריאה בכביש 22 תוך זמן קצר ככל האפשר בהתאם לעומסי התנועה באזור הקריות והמפרץ.</p>
            </div>
            <div>
              <h4 className="font-bold">האם אתם גוררים רכבים מהצומת הקרובה?</h4>
              <p>כן, אנו נותנים מענה מקצועי גם ב-<Link href="/areas/haifa-general/cheap-towing-check-post-junction" className="text-blue-600">אזור צומת צ'ק פוסט</Link> ובכל הסביבה, עם זמינות גבוהה לכל סוגי הרכבים.</p>
            </div>
            <div>
              <h4 className="font-bold">מה טווח המחירים לגרירה בכביש 22?</h4>
              <p>מחיר הגרירה נקבע לפי מרחק וסוג הרכב. אנו מתחייבים למחיר הוגן ותחרותי בשוק הגרירה בחיפה והקריות.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}