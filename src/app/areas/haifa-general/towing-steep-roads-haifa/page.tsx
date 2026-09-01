import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ רכב בדרכים תלולות בחיפה | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעת בעלייה תלולה בחיפה? אנו מומחים בחילוץ רכבים בדרכים המאתגרות של הכרמל והסביבה. מענה מהיר, ציוד מתקדם ומחיר הוגן 24/7. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/towing-steep-roads-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
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
      "longitude": "34.9896"
    },
    "serviceType": "Emergency Vehicle Towing and Recovery"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בדרכים תלולות בחיפה</h1>
          <p className="text-xl mb-8">נתקעתם בעלייה תלולה? הצוות המקצועי שלנו מתמחה בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4 בדרכים המאתגרות של העיר. מענה מהיר בחיפה והקריות, 24/7.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">מדוע לבחור בנו לחילוץ בדרכים המאתגרות של חיפה?</h2>
        <ul className="list-disc list-inside space-y-3 text-lg mb-6">
          <li>זמינות מלאה 24/7 לכל שכונות חיפה והציר הראשי.</li>
          <li>מומחיות מיוחדת בחילוץ בשיפועים חדים ודרכים תלולות.</li>
          <li>סיוע מקצועי גם ל-<Link href="/areas/haifa-general/4x4-mud-rescue-towing-carmel-forest-trails-denia-haifa" className="text-blue-600 underline">רכבי 4x4 באזור הכרמל והדניה</Link>.</li>
          <li>שירות מהיר ל-<Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-600 underline">נהגים הזקוקים לחילוץ בצומת הצ'ק פוסט</Link> והסביבה.</li>
          <li>ציוד גרירה מתקדם המגן על הרכב שלכם מפני נזקים בדרכים משופעות.</li>
        </ul>
        <p className="text-gray-600">
          אנו מספקים שירותי חילוץ מקיפים לרכב פרטי ומסחרי. נתקעתם בדרך עקב תקלה טכנית? ייתכן שתרצו להציץ בשירותי <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600 underline">גרירת רכב תקוע בצ'ק פוסט</Link> שלנו או לבדוק אפשרות ל-<Link href="/areas/haifa-general/car-scrapping-haifa-krayot" className="text-blue-600 underline">פינוי רכב לפירוק</Link> במידה והרכב אינו שמיש. שירות זה מיועד לרכבים בלבד, אנו לא מחלצים אופנועים.
        </p>
      </section>

      <section className="py-12 px-6 max-w-4xl mx-auto bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ בדרכים תלולות</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-xl">האם אתם מחלצים רכבים בדרכי עפר בכרמל?</h3>
            <p>כן, אנו מספקים שירותי חילוץ ייעודיים לרכבי שטח שנתקעו בדרכים בוציות או תלולות באזור הכרמל וסביבת חיפה.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">כמה זמן לוקח לכם להגיע לחילוץ בחיפה?</h3>
            <p>זמן ההגעה משתנה בהתאם לעומסי התנועה, אך אנו עושים כל מאמץ להגיע במהירות המרבית לכל שכונות העיר והצירים המרכזיים.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">מה לעשות אם נתקעתי עם רכב חשמלי?</h3>
            <p>במקרה של רכב חשמלי, ניתן להיעזר בשירותי <Link href="/areas/haifa-general/electric-vehicle-flat-battery-towing-route-22-krayot" className="text-blue-600 underline">גרירת רכב חשמלי וטעינה</Link> שלנו.</p>
          </div>
        </div>
      </section>
    </main>
  );
}