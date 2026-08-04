import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ באזור הכרמל | 24/7 שירות מהיר",
  description: "נתקעתם עם הרכב בבוץ בכרמל? שירות חילוץ מקצועי, זמין 24/7, הגעה מהירה לרכבי 4x4 ופרטיים במחיר הוגן. התקשרו עכשיו לחילוץ מהיר!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-region"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה כרמל",
    "areaServed": "Haifa and Carmel Region",
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
    "serviceType": "Car recovery from mud and off-road towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל</h1>
          <p className="text-lg mb-8">
            נתקעתם עם הרכב בבוץ באזור הכרמל? אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4 שנתקעו בתנאי שטח. 
            בין אם מדובר בחילוץ בדרכי עפר או בחיפושים אחר <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-haifa" className="underline font-semibold">4x4 mud recovery carmel haifa</Link> מקצועי, הצוות שלנו זמין 24/7 עם ציוד חילוץ מתקדם. 
            חשוב לציין: אנו לא מספקים שירותי חילוץ לאופנועים. אם אתם זקוקים לעזרה בדרכים, ראו גם את השירות שלנו של <Link href="/areas/haifa-general/emergency-car-rescue-mud-carmel-forest" className="underline font-semibold">emergency car rescue mud carmel forest</Link>.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לחילוץ בכרמל?</h2>
          <ul className="list-disc pr-6 space-y-2 mb-8">
            <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>ציוד חילוץ מתקדם המותאם לדרכי עפר ובוץ.</li>
            <li>מחירים הוגנים ושירות אדיב ומקצועי.</li>
            <li>הגעה מהירה לכל נקודה באזור הכרמל והסביבה.</li>
            <li>פתרונות משלימים כגון <Link href="/areas/haifa-general/towing-services-stuck-vehicle-steep-hill-ahuza-haifa" className="text-blue-600">חילוץ רכבים באזור אחוזה</Link>.</li>
          </ul>

          <div className="mt-10">
            <h3 className="text-xl font-bold mb-4">שאלות נפוצות על חילוץ בשטח</h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold">כמה זמן לוקח לכם להגיע לחילוץ בבוץ?</p>
                <p>אנו עושים את מירב המאמצים להגיע תוך זמן קצר מרגע הקריאה, בהתאם לעומסי התנועה ותנאי השטח.</p>
              </div>
              <div>
                <p className="font-bold">האם אתם מחלצים גם רכבים כבדים?</p>
                <p>אנו מתמחים ברכבים פרטיים ורכבי 4x4. למידע על גרירה אחרת בקרו ב-<Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600">שירותי גרירה בחיפה והקריות</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}