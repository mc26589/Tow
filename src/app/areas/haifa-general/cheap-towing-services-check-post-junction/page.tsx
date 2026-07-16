import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירה בצ'ק פוסט חיפה: מחיר הוגן ושירות 24/7 | הגעה מהירה",
  description: "נתקעתם בצומת צ'ק פוסט? אנו מספקים שירותי גרירה מקצועיים לרכבים ורכבים מסחריים במחירים נוחים. זמינות 24/7, צוות מיומן והגעה מהירה. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/cheap-towing-services-check-post-junction",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7936", "longitude": "35.0253" },
    "priceRange": "$",
    "serviceType": "Towing Service"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירותי גרירה זולים בצומת צ'ק פוסט</h1>
          <p className="text-lg mb-8 max-w-2xl">
            נתקעתם באזור צומת צ'ק פוסט? אנו מספקים שירותי גרירה מהירים ומקצועיים לרכבים פרטיים, מסחריים ורכבי 4x4. 
            חשוב לציין: איננו מספקים שירותי גרירה לאופנועים. אנו מתחייבים למחירים הוגנים ושירות אדיב 24/7. אם אתם זקוקים לפתרונות נוספים, ניתן לבדוק גם 
            <Link href="/areas/haifa-general/urgent-towing-commercial-van-check-post-route-22" className="underline font-semibold"> שירותי גרירה לרכב מסחרי</Link> באזור.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
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
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו בצומת צ'ק פוסט?</h2>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>זמינות מלאה בכל שעות היממה</li>
          <li>הגעה מהירה לכל נקודה בצומת צ'ק פוסט והסביבה</li>
          <li>מחירים הוגנים ושקופים ללא הפתעות</li>
          <li>שירות מקצועי המותאם לצרכי הנהגים בצפון</li>
        </ul>

        <div className="mt-10 border-t pt-8">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על שירותי גרירה באזור</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">מהו זמן ההגעה הממוצע לצומת צ'ק פוסט?</h3>
              <p>אנו עושים את מירב המאמצים להגיע תוך דקות ספורות לכל קריאה באזור הצ'ק פוסט וצירי התנועה הראשיים.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם מספקים שירותי גרירה נוספים?</h3>
              <p>כן, אנו מציעים מענה למגוון מקרים, כולל <Link href="/areas/haifa-general/towing-services-road-22-krayot">שירותי גרירה בכביש 22</Link> ומספקים פתרונות נוספים באזור חיפה והקריות.</p>
            </div>
            <div>
              <h3 className="font-bold">איך נקבע מחיר הגרירה?</h3>
              <p>המחיר נקבע בהתאם למרחק הגרירה וסוג הרכב. אנו מקפידים על מחיר הוגן ותחרותי בשוק.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}