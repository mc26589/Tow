import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ בכרמל | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ בדרכי הכרמל? אנחנו כאן לחילוץ רכב מהיר ומקצועי בכל אזור חיפה והסביבה. שירות 24/7, ציוד מתקדם ומחיר הוגן. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-region"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "אזור הכרמל, חיפה והקריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "חילוץ רכב תקוע בבוץ"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות שלנו בדרך אליכם עם הציוד המתאים ביותר לחילוץ בשטח.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition-colors"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות חילוץ מקצועי בתנאי שטח בכרמל</h2>
        <p className="mb-4">אם הרכב שלכם שקע בבוץ בדרכי העפר או בשטחים הפתוחים של הכרמל, אנו כאן כדי לסייע. אנו מתמחים בחילוצי שטח מורכבים לרכבים פרטיים, רכבי 4x4 ורכבים מסחריים.</p>
        <p className="mb-4">זקוקים לשירותים נוספים? אנו מספקים גם <Link href="/areas/haifa-general/cheap-car-towing-service-ahuzah-haifa-transparent-pricing" className="text-blue-400 underline">גרירה באחוזה</Link> או <Link href="/areas/haifa-general/car-stuck-in-sand-bat-galim-haifa" className="text-blue-400 underline">חילוץ מחול בבת גלים</Link> במידת הצורך.</p>
        <p className="mb-4"><strong>חשוב:</strong> אנו מתמחים בחילוץ רכבים בלבד. איננו מספקים שירותי חילוץ או גרירה לאופנועים.</p>
        
        <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 mt-8">
          <h3 className="text-2xl font-semibold mb-6">שאלות נפוצות</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg">כמה זמן לוקח לכם להגיע לחילוץ בכרמל?</h4>
              <p>אנו פרוסים בכל רחבי חיפה והכרמל ומגיעים במהירות האפשרית, לרוב תוך זמן קצר מרגע הקריאה.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">האם אתם מחלצים רכבים ששקעו בבוץ עמוק?</h4>
              <p>כן, הציוד שלנו כולל רצועות חילוץ, כננות מתקדמות וכלים ייעודיים לחילוץ רכבים ששקעו בבוץ עמוק בשטחי הכרמל.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">האם המחיר לחילוץ שטח הוא הוגן?</h4>
              <p>אנו מקפידים על מחיר הוגן ושקוף. ניתן לברר את העלות בטלפון מראש על בסיס מיקום הרכב וחומרת השקיעה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}