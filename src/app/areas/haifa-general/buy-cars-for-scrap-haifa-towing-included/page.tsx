import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה - שירות גרירה חינם ופינוי מהיר במזומן",
  description: "מוכרים רכב לפירוק בחיפה? קונים רכבים לברזל או לחלפים עם גרירה חינם, תשלום במזומן והגעה מהירה עוד היום. צרו קשר לקבלת הצעת מחיר הוגנת!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "קונה רכבים לפירוק בחיפה",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Car Scrap and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה - גרירה עלינו, תשלום עליכם</h1>
          <p className="text-lg mb-8">נתקעתם עם רכב ישן, ללא טסט או לאחר תאונה? אנו מספקים שירות מקצועי של קניית רכבים לפירוק בחיפה ובקריות. אנו מבצעים פינוי מהיר הכולל גרירה בחינם. שירות יעיל לרכבים פרטיים ומסחריים (שימו לב: איננו קונים אופנועים).</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-6 py-3 rounded-lg font-bold">
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
          <ul className="space-y-4">
            <li>✓ שירות גרירה ללא עלות נוספת לכל רחבי חיפה והקריות.</li>
            <li>✓ תשלום הוגן ומיידי במזומן או בהעברה בזמן הפינוי.</li>
            <li>✓ זמינות גבוהה לעבודה באזורי תעשייה כמו <Link href="/areas/haifa-general/buy-cars-for-scrap-check-post-haifa" className="underline">צ'ק פוסט</Link>.</li>
            <li>✓ מומחיות בטיפול בנזקי רכב קשים עם שירותים כגון <Link href="/areas/haifa-general/buying-junk-cars-for-parts-kiryat-bialik-immediate-removal" className="underline">קניית רכבים לפירוק בקרית ביאליק</Link>.</li>
            <li>✓ אמינות ושקיפות - אנו דואגים להעביר את הרכב לפירוק מורשה בלבד.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white text-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות בנושא פירוק רכבים</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">האם אתם קונים רכבים ללא טסט או רכבים מושבתים?</h3>
              <p>בהחלט. אנו קונים כל סוגי הרכבים: רכבים לאחר תאונה, רכבים עם תקלות מכניות קשות, או רכבים שעמדו שנים ללא רישוי. הגרירה היא חלק מהשירות.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">כיצד מתבצע פינוי הרכב באזור חיפה והקריות?</h3>
              <p>לאחר שיחת הטלפון, אנו מתאמים זמן הגעה נוח עבורכם. הנהג שלנו מגיע למיקום הרכב, מבצע את הגרירה ומעביר את התשלום במקום. אנו מנוסים במתן שירות מהיר גם באזורים צפופים.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם ניתן לפנות רכב שנתקע בדרך?</h3>
              <p>אנו מתמחים בפינוי מהשטח. אם מדובר במקרה חירום של רכב שנתקע בשטח, אנו מציעים גם פתרונות נוספים כמו <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="underline">חילוץ רכב מבוץ באזור הכרמל</Link> או <Link href="/areas/haifa-general/cheap-towing-check-post-krayot" className="underline">גרירה זולה בצ'ק פוסט וקריות</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}