import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ שטח ביערות הכרמל ודניה | 24/7 | הגעה מהירה ומחיר הוגן",
  description: "נתקעתם בבוץ ביערות הכרמל? שירות חילוץ שטח מקצועי בדניה ובאזור חיפה. הגעה מהירה, מחיר הוגן וציוד מתקדם לכל רכב. התקשרו עכשיו לחילוץ בטוח!",
  alternates: {
    canonical: "/areas/haifa-general/off-road-rescue-carmel-forest-danya",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "חילוץ רכב שטח חיפה והכרמל",
    "areaServed": "Haifa and Carmel Forest",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7685",
      "longitude": "34.9895"
    },
    "priceRange": "$$,$",
    "serviceType": "Off-road vehicle recovery and towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב שטח מבוץ ביערות הכרמל סמוך לשכונת דניה</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם בבוץ בדרכי העפר של הכרמל? צוות החילוץ שלנו מומחה בחילוץ רכבי 4x4, פרטיים ומסחריים בדניה והסביבה. אנו מספקים מענה מהיר בטוח ומקצועי. צריכים עזרה נוספת? ראו גם <Link href="/areas/haifa-general/mud-rescue-4x4-carmel-forest-haifa" className="underline font-semibold">חילוץ בוץ ושטח ביערות הכרמל</Link> או <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-forest-near-haifa-university" className="underline font-semibold">חילוץ רכב תקוע באזור האוניברסיטה</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והכרמל" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ ביערות הכרמל?</h2>
          <ul className="space-y-4 text-gray-300">
            <li>✓ זמינות מלאה 24/7 לכל קריאת חילוץ באזור דניה והכרמל.</li>
            <li>✓ ציוד חילוץ מתקדם לרכבי 4x4 ורכבים פרטיים שנתקעו בבוץ.</li>
            <li>✓ הגעה מהירה לכל נקודה ביער ובדרכים ההיקפיות.</li>
            <li>✓ שירות אמין במחירים הוגנים וללא הפתעות.</li>
          </ul>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">שאלות נפוצות על חילוץ שטח</h3>
            <div className="space-y-6 text-gray-400">
              <div>
                <h4 className="font-bold text-white">האם אתם מגיעים לכל אזור ביערות הכרמל?</h4>
                <p>כן, אנו מכירים היטב את השבילים סביב דניה, האוניברסיטה ואזור הכרמל ומגיעים לכל דרך עפר עבירה.</p>
              </div>
              <div>
                <h4 className="font-bold text-white">מהי עלות חילוץ רכב תקוע?</h4>
                <p>מחיר החילוץ נקבע בהתאם למורכבות המקרה, מרחק ההגעה ותנאי השטח. אנו מקפידים על מחיר הוגן ותחרותי.</p>
              </div>
              <div>
                <h4 className="font-bold text-white">האם אתם מחלצים רכבים פרטיים?</h4>
                <p>בהחלט. אנו מספקים מענה מקצועי גם לרכבים פרטיים שנתקעו בדרכים לא סלולות או בשולי הדרך באזור דניה. ניתן להיעזר גם בשירותי <Link href="/areas/haifa-general/cheap-car-towing-service-neve-shaanan-haifa" className="text-blue-400">גרירה בחיפה</Link> באזורים סמוכים.</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            * שימו לב: אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח בלבד. השירות אינו כולל חילוץ אופנועים.
          </p>
        </div>
      </section>
    </main>
  );
}