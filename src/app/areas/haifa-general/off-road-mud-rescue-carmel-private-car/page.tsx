import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ שטח ובוץ בכרמל לרכב פרטי | הגעה מהירה 24/7",
  description: "נתקעתם בבוץ בכרמל? שירות חילוץ שטח מקצועי לרכב פרטי עם הגעה מהירה בחיפה. צוות מיומן, מחיר הוגן ושירות ללא נזקים. התקשרו עכשיו לקבלת סיוע!",
  alternates: {
    canonical: "/areas/haifa-general/off-road-mud-rescue-carmel-private-car"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "חילוץ שטח ובוץ בכרמל לרכב פרטי",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "מחיר הוגן",
    "serviceType": "Off-road mud rescue"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ שטח ובוץ בכרמל לרכב פרטי - הגעה מהירה בחיפה!</h1>
          <p className="text-xl mb-8">נתקעתם בדרכי העפר של הכרמל? אנו כאן לחלץ אתכם בבטחה עם ציוד מקצועי וניסיון רב בשטח.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa" />
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות חילוץ שטח מקצועי באזור הכרמל</h2>
        <p className="mb-4">נתקעתם בדרכי עפר? אנו מומחים בחילוץ רכבים פרטיים ששקעו בבוץ. לשירותים משלימים, תוכלו לבדוק את שירות ה-<Link href="/areas/haifa-general/car-stuck-in-mud-carmel-forest-haifa-university" className="text-blue-600 underline">car stuck in mud carmel forest haifa university</Link> המיועד לאזור האוניברסיטה, או לבצע <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="text-blue-600 underline">4x4 mud recovery carmel forest haifa</Link> לרכבים בעלי הנעה כפולה. אם אתם זקוקים לחילוץ מורכב יותר, ראו <Link href="/areas/haifa-general/off-road-rescue-carmel-forest-haifa-university" className="text-blue-600 underline">off road rescue carmel forest haifa university</Link>.</p>
        <p>אנו מבינים את הלחץ הכרוך בתקיעה בשטח. הצוות שלנו זמין 24 שעות ביממה, מקפיד על מחיר הוגן ומבטיח טיפול בטוח ברכבכם ללא נזקים מיותרים.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על חילוץ שטח בחיפה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">מה זמן ההגעה הממוצע לחילוץ בכרמל?</h3>
              <p>אנו ממוקמים בנקודות אסטרטגיות ומשתדלים להגיע לכל נקודה בחיפה תוך זמן קצר מרגע הקריאה, בהתאם לעומסי התנועה ותנאי השטח.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם מספקים שירותי גרירה גם מעבר לחילוץ מהבוץ?</h3>
              <p>בהחלט. אם הרכב זקוק לגרירה לאחר החילוץ, אנו מציעים שירותי גרירה מקצועיים. למידע על גרירה בצירים מרכזיים, ראו <Link href="/areas/haifa-general/towing-services-road-22-krayot-bypass" className="text-blue-600 underline">towing services road 22 krayot bypass</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold">האם ניתן להזמין חילוץ לרכב שטח או מסחרי?</h3>
              <p>כן, אנו ערוכים לחילוץ מורכב של רכבי פנאי ורכבים מסחריים. במידה ואתם זקוקים לסיוע דחוף בדרך, ניתן להיעזר בשירות <Link href="/areas/haifa-general/urgent-towing-commercial-van-check-post-route-22" className="text-blue-600 underline">urgent towing commercial van check post route 22</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold">מה עושים אם הרכב אינו ניתן לתיקון בשטח?</h3>
              <p>במידה והרכב אינו בר תיקון או שמדובר ברכב ישן, ניתן לבדוק שירותי <Link href="/areas/haifa-general/car-scrapping-haifa-krayot-towing" className="text-blue-600 underline">car scrapping haifa krayot towing</Link> בתיאום איתנו.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}