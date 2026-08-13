import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ בכרמל | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ באזור הכרמל? אנחנו כאן לחילוץ מהיר ומקצועי של רכבים פרטיים ושטח. מחיר הוגן, צוות מיומן ושירות 24/7. התקשרו עכשיו לחילוץ בטוח!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-region"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה כרמל",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Car Recovery and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם בבוץ? אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח (4x4) באזור הכרמל. 
            צוות מיומן, ציוד מקצועי ומענה מהיר 24/7. 
            שימו לב: איננו מספקים שירותי חילוץ לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בכרמל?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>✓ מומחיות בחילוץ רכבים מבוץ, חול ותנאי שטח קשים.</li>
            <li>✓ מחירים הוגנים ושקיפות מלאה מול הלקוח.</li>
            <li>✓ ציוד חילוץ מתקדם המונע נזקים לרכב.</li>
          </ul>
          <p>זקוקים לשירותים נוספים? ניתן לבדוק גם <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="text-blue-600 underline">חילוץ רכבי 4x4 באזור הכרמל</Link> או <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-forest-haifa-university" className="text-blue-600 underline">חילוץ בקרבת אוניברסיטת חיפה</Link>.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ רכבים בכרמל</h2>
          <div className="space-y-6 max-w-3xl">
            <div>
              <h3 className="text-xl font-bold">תוך כמה זמן תגיעו לחלץ אותי?</h3>
              <p>אנחנו ערוכים למתן מענה מהיר בכל אזור הכרמל, בהתאם לעומסי התנועה ותנאי השטח.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם אתם מחלצים רכבים ששקעו עמוק בבוץ?</h3>
              <p>כן, אנו מצוידים בציוד מקצועי המתאים לחילוץ רכבים ששקעו בבוץ, חול או תנאי שטח מורכבים.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">האם השירות כולל גרירה במידת הצורך?</h3>
              <p>בהחלט. במידה ולא ניתן להמשיך בנסיעה לאחר החילוץ, נבצע גרירה בטוחה למוסך או לכל יעד שתבחרו באזור חיפה והקריות.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}