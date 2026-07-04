import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "חילוץ רכב בדרכים תלולות בחיפה | הגעה מהירה 24/7 | מחיר הוגן",
  description: "נתקעת בעלייה תלולה בחיפה? הצוות שלנו מתמחה בחילוץ רכבים פרטיים ומסחריים בדרכים המאתגרות של העיר. מענה מהיר, מקצועיות ושירות 24/7. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/towing-steep-roads-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
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
    "serviceType": "Emergency Vehicle Towing and Recovery"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בדרכים תלולות בחיפה</h1>
          <p className="text-xl mb-8">נתקעתם בעלייה תלולה? הצוות המקצועי שלנו מתמחה בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4 בדרכים המאתגרות של חיפה. אנו לא מטפלים באופנועים.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לחילוץ בחיפה?</h2>
        <ul className="list-disc list-inside space-y-3 text-lg mb-6">
          <li>מענה מהיר 24/7 לכל שכונות חיפה והקריות.</li>
          <li>מומחיות בחילוץ בשיפועים חדים ודרכים תלולות, כולל סיוע ל-<Link href="/areas/haifa-general/mud-rescue-4x4-carmel-forest-haifa" className="text-blue-600 underline">רכבי 4x4 באזור הכרמל</Link>.</li>
          <li>ציוד גרירה מתקדם המבטיח שמירה על הרכב שלכם.</li>
          <li>מחירים הוגנים ושירות אדיב ומקצועי.</li>
        </ul>
        <p className="text-gray-600">
          אנו מעניקים שירות מקיף גם לנהגים הזקוקים ל-<Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-600 underline">חילוץ בצירים מרכזיים</Link> או לשירותי <Link href="/areas/haifa-general/pinui-rechev-grotah-grira-check-post-haifa-krayot-lechalafim" className="text-blue-600 underline">פינוי רכב תקוע</Link>. חשוב לציין: אנו מתמחים ברכבים פרטיים ומסחריים בלבד ואיננו מספקים שירותי גרירה לאופנועים.
        </p>
      </section>

      <section className="py-12 px-6 max-w-4xl mx-auto bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על חילוץ בחיפה</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-xl">האם אתם מחלצים רכבים בדרכים בוציות בכרמל?</h3>
            <p>כן, אנו מספקים שירותי חילוץ ייעודיים לרכבי שטח שנתקעו, כולל סיוע מורכב בדרכי עפר.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">כמה זמן לוקח לכם להגיע לחילוץ בחיפה?</h3>
            <p>אנו משתדלים להגיע לכל נקודה בחיפה והקריות בזמן המהיר ביותר האפשרי, בהתאם לעומסי התנועה.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">האם השירות כולל גרירה במידת הצורך?</h3>
            <p>בוודאי. אם לא ניתן להניע את הרכב בשטח, נגרור אותו למוסך המבוקש במחיר הוגן.</p>
          </div>
        </div>
      </section>
    </main>
  );
}