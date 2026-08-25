import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ שטח ובוץ בכרמל: רכב תקוע? הגעה מהירה 24/7",
  description: "נתקעתם בבוץ בדרכי העפר של הכרמל? שירות חילוץ שטח מקצועי לרכבים פרטיים ו-4x4. הגעה מהירה, מחיר הוגן ושירות 24/7. התקשרו עכשיו לחילוץ מהשטח!",
  alternates: { canonical: "/areas/haifa-general/off-road-mud-rescue-carmel-stuck-vehicle" }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ שטח ובוץ בכרמל",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "₪₪",
    "serviceType": "Off-road mud rescue"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ שטח בוץ בכרמל: רכב תקוע? אנחנו בדרך אליך</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעת בבוץ בדרכי העפר של הכרמל? אנו מספקים שירותי חילוץ שטח מקצועיים לרכבים פרטיים, רכבי 4x4 ורכבים מסחריים. 
            אנו מתמחים בחילוץ מהיר גם באזורים מורכבים. לעיתים אנו פועלים גם באזורים סמוכים כמו <Link href="/areas/haifa-general/emergency-tow-stuck-car-stella-maris-haifa-hills" className="underline font-bold">חילוץ רכב תקוע בסטלה מאריס</Link> וביערות הכרמל. חשוב לציין: אנו לא מבצעים חילוץ או גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בכרמל?</h2>
          <ul className="space-y-4 text-gray-700 mb-8">
            <li>✓ זמינות 24/7 לכל קריאת חילוץ בשטח.</li>
            <li>✓ ציוד חילוץ מתקדם המתאים לתנאי בוץ ושטח קשים.</li>
            <li>✓ צוות מיומן שמכיר את כל דרכי העפר באזור הכרמל.</li>
            <li>✓ מחירים הוגנים ושקופים - הצעת מחיר מסודרת בטלפון.</li>
          </ul>

          <h2 className="text-3xl font-bold mb-6 mt-12">שאלות נפוצות על חילוץ בשטח</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">תוך כמה זמן תגיעו לחלץ אותי בכרמל?</h3>
              <p>זמן ההגעה תלוי במיקום המדויק ובתנאי השטח, אך אנו משתדלים להגיע לכל קריאה במינימום זמן מרגע הזמנת השירות.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם מחלצים גם רכבי 4x4 וגם רכבים פרטיים?</h3>
              <p>כן, אנו ערוכים עם ציוד מתאים לחילוץ מגוון סוגי רכבים שתקועים בבוץ או בדרכי עפר לא סלולות.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם השירות כולל גרירה לאחר החילוץ?</h3>
              <p>במידה והרכב זקוק לתיקון במוסך לאחר החילוץ, נוכל לסייע בתיאום הגרירה ליעדים שונים באזור חיפה והקריות.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}