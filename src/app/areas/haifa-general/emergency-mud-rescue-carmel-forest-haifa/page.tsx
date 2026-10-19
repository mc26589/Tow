import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "חילוץ רכב מהבוץ ביערות הכרמל | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ ביערות הכרמל? שירות חילוץ רכב מהשטח 24/7. הגעה תוך 30 דקות לכל נקודה בכרמל. מחיר הוגן ושירות מקצועי. התקשרו עכשיו לחילוץ מיידי!",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ ביערות הכרמל - זמינות 24/7</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            נתקעתם בבוץ בדרכי עפר או באזור יערות הכרמל? הצוות שלנו מתמחה ב<Link href="/areas/haifa-general/car-stuck-in-mud-carmel-region" className="underline font-bold">חילוץ רכבים שנתקעו בבוץ בכרמל</Link> במהירות. 
            זקוקים לסיוע נוסף? אנו זמינים גם ל<Link href="/areas/haifa-general/emergency-mud-recovery-service-carmel-forest-haifa" className="underline font-bold">חילוץ רכבים מקצועי ביערות הכרמל</Link> בכל שעה.
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
            <li>✓ זמינות מלאה 24/7 לכל אירועי החילוץ בחיפה והסביבה.</li>
            <li>✓ מומחיות טכנית בחילוץ רכבים מבוץ עמוק ושטחים קשים ללא נזק.</li>
            <li>✓ הגעה מהירה לכל נקודה ביערות הכרמל ודרכי העפר מסביב.</li>
            <li>✓ שקיפות מלאה ומחיר הוגן שנקבע מראש לפני תחילת העבודה.</li>
            <li>✓ סיוע מקצועי גם ב<Link href="/areas/haifa-general/24-7-accident-recovery-towing-check-post-junction-haifa" className="text-blue-400">חילוץ לאחר תאונות בצומת צ׳ק פוסט</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על חילוץ בחיפה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">האם אתם נותנים מענה גם באזורים מרוחקים מהעיר?</h3>
              <p>בהחלט. אנחנו מספקים שירותי <Link href="/areas/haifa-general/emergency-breakdown-towing-route-22-krayot-bypass" className="text-blue-600">גרירה דחופה בכביש עוקף קריות</Link> וכן <Link href="/areas/haifa-general/cheap-car-towing-service-neve-shaanan-haifa" className="text-blue-600">גרירה מקצועית בנווה שאנן</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold">מה עושים אם מדובר ברכב ישן שנתקע בשטח?</h3>
              <p>במקרה של רכב תקול או ישן שלא משתלם להשקיע בו, אנו מציעים שירות של <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot" className="text-blue-600">קניית רכבים לפירוק בחיפה</Link> כולל גרירה בחינם.</p>
            </div>
            <div>
              <h3 className="font-bold">איך מתמחרים חילוץ בבוץ?</h3>
              <p>המחיר נקבע לפי מורכבות החילוץ. אנחנו מתחייבים למחיר הוגן ושקוף. לרכבים שנתקעו קרוב יותר לאזור האורבני, אנו מציעים גם <Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="text-blue-600">שירותי גרירה משתלמים בצ׳ק פוסט</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}