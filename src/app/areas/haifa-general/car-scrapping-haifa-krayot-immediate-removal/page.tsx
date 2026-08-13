import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מיידי | מחיר הוגן",
  description: "צריכים לפנות רכב ישן או מושבת? אנו קונים רכבים לפירוק בחיפה והקריות עם פינוי מיידי, שירות מהיר ומחיר הוגן במזומן. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/car-scrapping-haifa-krayot-immediate-removal"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פינוי וקניית רכבים לפירוק חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday", "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "Car Scrapping and Removal",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            אנו מציעים שירות מקצועי ומהיר לקניית רכבים לפירוק בחיפה והקריות. אם הרכב שלכם מושבת, עבר תאונה או שפשוט הגיע הזמן להיפרד ממנו, אנו נגיע לפנות אותו באופן מיידי. אנו מתמחים ברכבים פרטיים, מסחריים ורכבי 4x4. חשוב לציין: איננו מטפלים באופנועים.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
          <ul className="space-y-4 text-lg mb-8">
            <li>✓ פינוי מיידי מהשטח בכל אזור חיפה, הקריות והסביבה.</li>
            <li>✓ הצעת מחיר הוגנת במזומן במקום.</li>
            <li>✓ שירות אמין ללא בירוקרטיה, כולל עזרה בביטול רישוי רכב.</li>
            <li>✓ קונים את כל סוגי הרכבים: רכבים לפירוק, <Link href="/areas/haifa-general/pinui-rechev-grotah-grira-check-post-haifa-krayot-lechalafim" className="text-blue-600 underline">פינוי גרוטאות באזור הצ'ק פוסט</Link> ורכבים מושבתים.</li>
          </ul>
          <p className="text-lg">
            מחפשים שירות נוסף? אנו מספקים גם פתרונות גרירה ופינוי מתקדמים, החל מ-<Link href="/areas/haifa-general/buying-old-cars-parts-kiryat-haim-krayot" className="text-blue-600 underline">קניית רכבים ישנים לחלפים בקרית חיים</Link> ועד לשירותי גרירה מקצועיים באזור הצפון.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות על פינוי רכבים לפירוק</h2>
          <div className="space-y-6 max-w-3xl">
            <div>
              <h3 className="font-bold text-xl">תוך כמה זמן תגיעו לפנות את הרכב?</h3>
              <p>באזורי חיפה והקריות אנו משתדלים להגיע תוך שעות ספורות מרגע הקריאה, בהתאם לעומסי התנועה באזורכם.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם אתם קונים רכבים שאינם נוסעים?</h3>
              <p>בהחלט. אנו מתמחים בפינוי רכבים מושבתים, לאחר תאונה או רכבים שלא עברו טסט זמן רב. אנחנו נגיע עם גרר ונעמיס את הרכב עבורכם.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">אילו מסמכים צריך להכין?</h3>
              <p>מומלץ להכין רישיון רכב ותעודה מזהה של בעל הרכב הרשום. נשמח לייעץ לכם טלפונית על תהליך מחיקת הרכב ממשרד התחבורה.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}