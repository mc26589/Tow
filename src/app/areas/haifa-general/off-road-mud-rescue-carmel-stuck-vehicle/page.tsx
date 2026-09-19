import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ שטח ובוץ בכרמל: הגעה מהירה 24/7 | מחיר הוגן",
  description: "רכב תקוע בבוץ בכרמל? צוות מקצועי לחילוצי שטח 24/7. הגעה מהירה לכל מוקדי הכרמל, דניה ואחוזה. מחיר הוגן ושירות מהיר. התקשרו עכשיו לחילוץ!",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ שטח ובוץ בכרמל: רכב תקוע? אנחנו בדרך אליך</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעת בבוץ בדרכי העפר של הכרמל? אנו מספקים שירותי חילוץ שטח מקצועיים לרכבים פרטיים ורכבי 4x4. 
            אנו מתמחים בחילוץ מהיר באזורים מאתגרים, כולל <Link href="/areas/haifa-general/off-road-rescue-carmel-forest-danya" className="underline font-bold">חילוץ בשטח ביערות הכרמל ובאזור דניה</Link>. 
            בנוסף, אנו מעניקים שירותי גרירה מקצועיים כמו <Link href="/areas/haifa-general/car-towing-rescue-ahuzah-haifa-not-motorcycles" className="underline font-bold">שירותי גרירה באחוזה חיפה</Link>. חשוב לציין: אנו לא מבצעים חילוץ או גרירה לאופנועים.
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
              <h3 className="font-bold text-xl">האם אתם מחלצים רכבים פרטיים או רק 4x4?</h3>
              <p>אנו ערוכים עם ציוד מתאים לחילוץ מגוון סוגי רכבים שתקועים בבוץ או בדרכי עפר לא סלולות, מרכבים פרטיים ועד רכבי שטח.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם השירות כולל גרירה לאחר החילוץ?</h3>
              <p>במידה והרכב זקוק לתיקון במוסך לאחר החילוץ, נוכל לסייע בתיאום גרירה ליעדים שונים באזור חיפה והקריות, כולל <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="underline font-bold">שירותי גרירה באזור צ'ק פוסט</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}