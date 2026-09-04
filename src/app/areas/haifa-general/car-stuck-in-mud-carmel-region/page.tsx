import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ באזור הכרמל | הגעה מהירה 24/7",
  description: "נתקעתם עם הרכב בבוץ באזור הכרמל? שירותי חילוץ מקצועיים לרכבים פרטיים ו-4x4. זמינות 24/7, ציוד חילוץ מתקדם ומחיר הוגן. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/car-stuck-in-mud-carmel-region"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה כרמל",
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
            נתקעתם עם הרכב בבוץ באזור הכרמל? אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4 שנתקעו בדרכי עפר או בשטחים בוציים. 
            בין אם מדובר ב<Link href="/areas/haifa-general/mud-rescue-4x4-stuck-carmel-forest-haifa-university" className="underline">חילוץ 4x4 באזור אוניברסיטת חיפה</Link> או <Link href="/areas/haifa-general/off-road-rescue-stuck-in-mud-carmel" className="underline">חילוץ שטח בכרמל</Link>, הצוות שלנו זמין 24/7 עם ציוד חילוץ מתקדם כדי להחזיר אתכם לכביש בבטחה.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לחילוץ בכרמל?</h2>
        <ul className="list-disc pr-6 space-y-2 mb-8">
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>ניסיון רב בחילוץ רכבים בתנאי שטח מורכבים.</li>
          <li>ציוד חילוץ מקצועי המונע נזקים לרכב.</li>
          <li>מחירים הוגנים ושירות אדיב ומקצועי.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על חילוץ רכב באזור הכרמל</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">מהו זמן ההגעה הממוצע לחילוץ בבוץ?</h3>
            <p>אנו משתדלים להגיע לכל נקודה בכרמל תוך זמן קצר, בהתאם לתנאי השטח ועומסי התנועה באזור.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם מחלצים רכבים ששקעו בבוץ עמוק?</h3>
            <p>כן, אנו ערוכים עם ציוד ייעודי לחילוץ רכבים ששקעו בבוץ עמוק או בדרכי עפר לא סלולות באזור חיפה והסביבה.</p>
          </div>
          <div>
            <h3 className="font-bold">האם השירות כולל גם גרירה לאחר החילוץ?</h3>
            <p>במידה והרכב ניזוק ולא ניתן להמשיך בנסיעה, אנו נדאג לגרירה מקצועית למוסך או לכל יעד שתבחרו.</p>
          </div>
        </div>
      </section>
    </main>
  );
}