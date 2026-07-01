import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ רכב מהבוץ ביערות הכרמל | חילוץ מהיר 24/7 | מחיר הוגן",
  description: "נתקעתם בבוץ ביערות הכרמל? שירות חילוץ רכב מקצועי באזור חיפה זמין 24/7. הגעה מהירה, ציוד מתקדם ומחירים הוגנים. התקשרו עכשיו לסיוע!",
  alternates: {
    canonical: "/areas/haifa-general/emergency-car-rescue-mud-carmel-forest",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
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
      "latitude": "32.7333",
      "longitude": "35.0000"
    },
    "serviceType": "Emergency Car Rescue and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ ביערות הכרמל – שירות חירום מהיר בחיפה</h1>
          <p className="text-xl mb-8">נתקעתם בדרכי העפר? הצוות המנוסה שלנו בדרך אליכם לחילוץ מקצועי.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="חיפה ויערות הכרמל" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">זקוקים לחילוץ רכב מהבוץ ביערות הכרמל? אנחנו כאן בשבילכם.</h2>
        <p className="mb-6">אם נתקעתם בדרכי העפר, כדאי להכיר גם את שירותי ה-<Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-600 underline">חילוץ מבוץ באזור הכרמל</Link> המקיפים שלנו. הצוות המקצועי מתמחה בחילוצי שטח מורכבים. אם אתם קרובים לאזור האוניברסיטה, ראו גם: <Link href="/areas/haifa-general/car-stuck-in-mud-carmel-forest-near-haifa-university" className="text-blue-600 underline">חילוץ רכב תקוע באוניברסיטת חיפה</Link>. אנו מגיעים עם ציוד חילוץ מתקדם כדי להחזיר אתכם לכביש בבטחה.</p>
        
        <h3 className="text-2xl font-semibold mb-3">למה לבחור בנו לחילוץ בשטח?</h3>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>זמינות מלאה:</strong> שירות חירום 24/7 לכל אזור חיפה והקריות.</li>
          <li><strong>מומחיות בשטח:</strong> ניסיון רב בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4.</li>
          <li><strong>ציוד מקצועי:</strong> שימוש באמצעי גרירה וחילוץ המותאמים לתנאי השטח של הכרמל.</li>
          <li><strong>מחירים הוגנים:</strong> שירות מקצועי במחיר משתלם ללא הפתעות.</li>
        </ul>

        <div className="bg-gray-50 p-8 rounded-xl mt-10">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על חילוץ בשטח</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">כמה זמן לוקח לכם להגיע ליערות הכרמל?</p>
              <p>אנו עושים את מירב המאמצים להגיע תוך זמן קצר מרגע הקריאה, בהתאם לעומסי התנועה באזור.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם מחלצים גם רכבים כבדים?</p>
              <p>כן, אנו ערוכים לחילוץ רכבים פרטיים, מסחריים ורכבי שטח. איננו מספקים שירותי חילוץ לאופנועים.</p>
            </div>
            <div>
              <p className="font-bold">האם ניתן להזמין גרירה לאחר החילוץ מהבוץ?</p>
              <p>בהחלט, אם הרכב אינו תקין לנסיעה, נספק שירותי גרירה מקצועיים במחיר הוגן לכל יעד שתבחרו.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}