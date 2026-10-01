import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ רכב בדרכים תלולות בחיפה | הגעה תוך 30 דקות | 24/7",
  description: "נתקעת בעלייה תלולה בחיפה? אנו מתמחים בחילוץ רכבים בדרכים המאתגרות של הכרמל והסביבה. מחיר הוגן, ציוד מתקדם ושירות מהיר 24/7. התקשרו עכשיו!",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב בדרכים תלולות בחיפה ובכרמל</h1>
          <p className="text-xl mb-8">נתקעתם בעלייה תלולה? הצוות המקצועי שלנו מתמחה בחילוץ רכבים פרטיים, מסחריים ורכבי שטח בדרכים המאתגרות של העיר. מענה מהיר בכל שכונות חיפה והסביבה, 24/7.</p>
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
          <li>זמינות מלאה 24 שעות ביממה לכל שכונות חיפה והציר הראשי.</li>
          <li>מומחיות בטיפול בחילוץ תחת שיפועים חדים ומורכבים.</li>
          <li>שירות מקצועי של <Link href="/areas/haifa-general/emergency-towing-horev-ahuza-haifa" className="text-blue-600 underline">חילוץ וגרירה באזור חורב ואחוזה</Link>.</li>
          <li>סיוע מומחים ל<Link href="/areas/haifa-general/mud-rescue-4x4-stuck-carmel-forest-haifa-university" className="text-blue-600 underline">חילוץ רכבי 4x4 באזור יערות הכרמל ואוניברסיטת חיפה</Link>.</li>
          <li>שימוש בציוד גרירה מתקדם להגנה מלאה על הרכב מפני נזקי גרירה בשיפועים.</li>
        </ul>
        <p className="text-gray-600">
          אנו מספקים שירותי חילוץ מקיפים לרכב פרטי ומסחרי. במידה ונתקעתם עקב תקלה מכנית או בוץ, מומלץ לבדוק גם אפשרות ל<Link href="/areas/haifa-general/car-rescue-mud-carmel-forest-nesher-24-7" className="text-blue-600 underline">חילוץ בוץ באזור הכרמל ונשר</Link>. במידה והרכב אינו שמיש עוד, אנו מציעים שירות <Link href="/areas/haifa-general/car-scrapping-haifa-krayot-immediate-removal" className="text-blue-600 underline">פינוי רכבים לפירוק בחיפה והקריות</Link> באופן מיידי. שימו לב: שירות זה מיועד לרכבים בלבד, אנו לא מחלצים אופנועים.
        </p>
      </section>

      <section className="py-12 px-6 max-w-4xl mx-auto bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ בדרכים תלולות</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-xl">האם אתם מבצעים חילוץ בדרכי עפר בכרמל?</h3>
            <p>כן, אנו מספקים שירותי חילוץ ייעודיים לרכבי שטח ופרטיים שנתקעו בדרכים בוציות או משופעות. ניתן לקבל פרטים נוספים על <Link href="/areas/haifa-general/off-road-rescue-carmel-forest-haifa-university" className="text-blue-600 underline">חילוץ שטח בכרמל</Link> אצל המוקדנים שלנו.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">מהו זמן ההגעה המשוער בחיפה?</h3>
            <p>אנו פרוסים ברחבי העיר ועושים כל מאמץ להגיע במהירות המרבית, לרוב בטווח של כ-30 דקות, בהתאם לעומסי התנועה בצירים הראשיים.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">האם אתם נותנים שירות גם בצומת הצ'ק פוסט?</h3>
            <p>בוודאי, אנו מספקים מענה מהיר גם לנהגים הזקוקים ל<Link href="/areas/haifa-general/cheap-towing-services-check-post" className="text-blue-600 underline">גרירה ושירותי חילוץ בצ'ק פוסט</Link> בכל שעות היממה.</p>
          </div>
        </div>
      </section>
    </main>
  );
}