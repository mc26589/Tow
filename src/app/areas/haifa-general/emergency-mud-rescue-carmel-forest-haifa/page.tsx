import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ מהבוץ ביערות הכרמל | 24/7 הגעה מהירה ומחיר הוגן",
  description: "נתקעתם בבוץ ביערות הכרמל? שירות חילוץ רכב מהשטח 24/7 לכל סוגי הרכבים. צוות מקצועי עם ציוד מתקדם יגיע אליכם תוך דקות. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/emergency-mud-rescue-carmel-forest-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": "Haifa and Krayot",
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
    "priceRange": "$",
    "serviceType": "Emergency Vehicle Recovery and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ ביערות הכרמל - שירות 24/7</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            נתקעתם בבוץ באזור יערות הכרמל או בדרכי עפר? הצוות שלנו מתמחה בחילוץ רכבים פרטיים ורכבי 4x4. 
            זקוקים לסיוע נוסף באזור? אנו מספקים גם <Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="underline font-bold">שירותי גרירה בצ'ק פוסט חיפה</Link> במחירים נוחים.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ מיידי
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ שטח?</h2>
          <ul className="space-y-4 text-gray-300">
            <li>✓ זמינות מלאה 24/7 בכל אזור חיפה והצפון.</li>
            <li>✓ מומחיות בחילוץ רכבים מכל סוגי השטחים והבוץ.</li>
            <li>✓ הגעה מהירה לכל נקודה ביערות הכרמל.</li>
            <li>✓ שקיפות מלאה ומחיר הוגן לפני תחילת העבודה.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על חילוץ בחיפה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">האם אתם מספקים שירותים נוספים באזור חיפה?</h3>
              <p>כן, אנו נותנים מענה רחב. במידה ואתם זקוקים גם ל<Link href="/areas/haifa-general/flat-tire-roadside-assistance-kiryat-yam-beach" className="text-blue-600">תיקון פנצ'ר בקרית ים</Link> או <Link href="/areas/haifa-general/emergency-towing-cheap-kiryat-bialik" className="text-blue-600">גרירה זולה בקרית ביאליק</Link>, הצוות שלנו ערוך לכל מקרה.</p>
            </div>
            <div>
              <h3 className="font-bold">איך מתמחרים חילוץ בבוץ?</h3>
              <p>המחיר תלוי במידת השקיעה ובנגישות. אנו מחויבים למחיר הוגן ותחרותי. לבעלי רכבים ספורטיביים, נשמח להציע גם <Link href="/areas/haifa-general/affordable-low-clearance-sports-car-towing-ahuzah-haifa" className="text-blue-600">שירותי גרירה לרכב נמוך באחוזה</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold">מה עושים אם הרכב מושבת לגמרי?</h3>
              <p>במידה והרכב אינו בר תיקון בשטח, אנו מציעים שירותי פינוי או גרירה. אם מדובר ברכב ישן, נשמח לסייע ב<Link href="/areas/haifa-general/buying-cars-for-scrap-haifa-krayot" className="text-blue-600">קניית רכבים לפירוק בחיפה והקריות</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}