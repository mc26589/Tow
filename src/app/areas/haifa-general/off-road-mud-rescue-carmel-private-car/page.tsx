import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ שטח ובוץ בכרמל | הגעה מהירה לרכב פרטי 24/7",
  description: "נתקעתם בבוץ בכרמל? שירות חילוץ מקצועי, מהיר ובמחיר הוגן לרכב פרטי. הגעה לכל נקודה בחיפה תוך זמן קצר. התקשרו עכשיו לחילוץ בטוח!",
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
    "priceRange": "$$$",
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
        <p className="mb-4">נתקעתם בדרכי עפר? אנו מומחים בחילוץ רכבים פרטיים ששקעו בבוץ בחיפה. לבעלי רכבי שטח הזקוקים לחילוץ מורכב בקרבת דניה, ניתן להיעזר בשירות <Link href="/areas/haifa-general/off-road-rescue-carmel-forest-danya" className="text-blue-600 underline">off road rescue carmel forest danya</Link>. אם אתם זקוקים לחילוץ דחוף באזור אחוזה, נשמח לסייע לכם דרך <Link href="/areas/haifa-general/car-towing-rescue-ahuzah-haifa-not-motorcycles" className="text-blue-600 underline">car towing rescue ahuzah haifa not motorcycles</Link>.</p>
        <p>אנו מבינים את הלחץ הכרוך בתקיעה בשטח. הצוות שלנו זמין 24 שעות ביממה, מקפיד על מחיר הוגן ומבטיח טיפול בטוח ברכבכם ללא נזקים מיותרים.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על חילוץ שטח</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">מה זמן ההגעה הממוצע לחילוץ בכרמל?</h3>
              <p>אנו ממוקמים בנקודות אסטרטגיות ומשתדלים להגיע לכל נקודה בחיפה תוך זמן קצר מרגע הקריאה, בהתאם לעומסי התנועה ותנאי השטח.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם מחלצים רכבים שסטו מהכביש?</h3>
              <p>כן, אנו מספקים שירותי חילוץ מורכבים לרכבים שסטו מהדרך. אם מדובר בחילוץ בקרבת הצ'ק פוסט, תוכלו לראות פרטים נוספים בקישור <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-600 underline">affordable emergency car towing check post haifa</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold">איזה סוגי רכבים אתם מחלצים?</h3>
              <p>אנו מתמחים בחילוץ רכבים פרטיים, רכבי פנאי ורכבים מסחריים קלים. שימו לב: השירות אינו כולל חילוץ או גרירת אופנועים.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם מספקים שירותי גרירה גם מעבר לחילוצי שטח?</h3>
              <p>בהחלט, אנו מציעים מגוון שירותי גרירה, כולל גרירת רכבים חשמליים במידת הצורך בצירי התנועה המרכזיים כגון כביש 22, ראו פרטים ב- <Link href="/areas/haifa-general/emergency-towing-electric-car-route-22-krayot" className="text-blue-600 underline">emergency towing electric car route 22 krayot</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}