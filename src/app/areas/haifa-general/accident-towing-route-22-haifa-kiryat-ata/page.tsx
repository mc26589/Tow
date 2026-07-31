import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "גרירה בכביש 22 חיפה-קריות: הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעת בכביש 22? שירותי גרירה וחילוץ מקצועיים לרכב לאחר תאונה בין חיפה לקריית אתא. הגעה מהירה תוך 30 דקות, זמינות 24/7 ומחיר הוגן. התקשרו עכשיו!",
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
          <h1 className="text-4xl font-bold mb-6">שירות גרירה לאחר תאונה בכביש 22 (עוקף קריות) - מענה מיידי</h1>
          <p className="text-xl mb-8">
            נתקעתם בכביש 22? אנו כאן עבורכם. אנו מתמחים בחילוץ וגרירת רכבים פרטיים ומסחריים לאחר תאונות באזור מחלף קריית אתא והסביבה. 
            זקוקים לפתרון מקצועי? ראו גם את שירות ה-<Link href="/areas/haifa-general/fast-towing-road-22-krayot" className="underline font-semibold">fast towing road 22 krayot</Link> הזמין לכם בכל עת. 
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
            <li>✓ צוות מיומן בטיפול ברכבים לאחר תאונה ופינוי מהיר מהכביש.</li>
            <li>✓ מחירים הוגנים ושקיפות מלאה - ללא הפתעות.</li>
            <li>✓ זמינות 24/7 לכל קריאה, כולל שבתות וחגים.</li>
          </ul>
          <p className="text-lg">זקוקים לשירותים נוספים? אנו מספקים גם <Link href="/areas/haifa-general/cheap-towing-check-post-haifa" className="text-blue-400">שירותי גרירה בצומת צ'ק פוסט</Link> ובסביבת הקריות, לצד פתרונות של <Link href="/areas/haifa-general/emergency-light-truck-towing-route-22-krayot-bypass" className="text-blue-400">emergency light truck towing route 22 krayot bypass</Link>.</p>
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
              <p>כן, אנו נותנים מענה מקצועי גם ב-<Link href="/areas/haifa-general/affordable-car-towing-kiryat-motzkin-24-7" className="text-blue-600">אזור קריית מוצקין</Link> ובכל סביבת כביש 22, עם זמינות גבוהה לכל סוגי הרכבים.</p>
            </div>
            <div>
              <h4 className="font-bold">מה טווח המחירים לגרירה בכביש 22?</h4>
              <p>מחיר הגרירה נקבע לפי מרחק וסוג הרכב. אנו מתחייבים למחיר הוגן ותחרותי בשוק הגרירה בחיפה והקריות, ומספקים גם שירותי <Link href="/areas/haifa-general/emergency-towing-electric-car-route-22-krayot" className="text-blue-600">emergency towing electric car route 22 krayot</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}