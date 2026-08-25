import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ שטח ובוץ בכרמל לרכב פרטי | הגעה תוך 30 דקות 24/7",
  description: "נתקעתם בבוץ בכרמל? שירות חילוץ מקצועי לרכב פרטי ושטח בחיפה. צוות מנוסה, ציוד מתקדם ומחיר הוגן. הגעה מהירה לכל נקודה בחיפה - התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/off-road-mud-rescue-carmel-private-car"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "חילוץ שטח ובוץ בכרמל",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$$,$",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ שטח ובוץ בכרמל לרכב פרטי - מגיעים אליכם בחיפה!</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ בדרכי הכרמל? אנו כאן לחלץ אתכם בבטחה עם ציוד מקצועי וניסיון רב בשטח.</p>
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
        <p className="mb-4">נתקעתם בדרכי עפר? אנו מומחים בחילוץ רכבים פרטיים ורכבי שטח ששקעו בבוץ בחיפה. לבעלי רכבי 4x4 הזקוקים לחילוץ מקצועי יותר, ניתן לקבל מידע נוסף בקישור <Link href="/areas/haifa-general/4x4-mud-recovery-carmel-forest-haifa" className="text-blue-600 underline">4x4 mud recovery carmel forest haifa</Link>. אם אתם זקוקים לחילוץ דחוף באזור סטלה מאריס, תוכלו לבדוק את השירות הייעודי שלנו <Link href="/areas/haifa-general/emergency-tow-stuck-car-stella-maris-haifa-hills" className="text-blue-600 underline">emergency tow stuck car stella maris haifa hills</Link>.</p>
        <p>אנו מבינים את הלחץ הכרוך בתקיעה בשטח. הצוות שלנו זמין 24/7, מקפיד על מחיר הוגן ומבטיח טיפול בטוח ברכבכם ללא נזקים מיותרים.</p>
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
              <h3 className="font-bold">האם אתם מחלצים גם במקרים של רכב שהחליק לתעלה?</h3>
              <p>כן, מעבר לחילוצי בוץ, אנו מספקים שירותי חילוץ מורכבים יותר כגון <Link href="/areas/haifa-general/emergency-car-recovery-ditch-route-4-check-post" className="text-blue-600 underline">emergency car recovery ditch route 4 check post</Link> לכל רכב שסטה מהדרך.</p>
            </div>
            <div>
              <h3 className="font-bold">איזה סוגי רכבים אתם מחלצים?</h3>
              <p>אנו מתמחים בחילוץ רכבים פרטיים, רכבי פנאי (SUV) ורכבים מסחריים. שימו לב: איננו מחלצים אופנועים.</p>
            </div>
            <div>
              <h3 className="font-bold">מה טווח המחירים של חילוץ שטח?</h3>
              <p>המחיר נקבע בהתאם למיקום המדויק, שעת הקריאה ורמת המורכבות של החילוץ. אנו מחויבים למתן מחיר הוגן ושקוף מראש ללא הפתעות.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}