import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה | פינוי מיידי ומזומן - שירות 24/7",
  description: "רוצים למכור רכב לפירוק בחיפה? אנו קונים רכבים ישנים ותקולים במחיר הוגן עם פינוי מיידי מהשטח. שירות מהיר ומקצועי בכל אזור חיפה והקריות. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-haifa-immediate-removal",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים חיפה",
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
    "serviceType": "Car Scrap Removal"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והסביבה – פינוי מיידי במזומן</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב ישן, תקול או ללא טסט? אנו מציעים שירות קנייה ופינוי רכבים מהיר בחיפה והקריות במחיר הוגן.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
          <p className="mb-4">אנו מומחים במתן שירותי פינוי לתושבי חיפה והקריות. אם אתם מחפשים שירות מקצועי, אנו הכתובת שלכם. אנו קונים רכבים פרטיים ומסחריים ללא התחייבות לתיקון. ניתן לבדוק גם <Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot" className="text-blue-400 underline">קניית רכבים לפירוק בחיפה והקריות</Link> אצל המומחים.</p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>פינוי מיידי מהשטח עם גרר</li>
            <li>טיפול מהיר בכל הבירוקרטיה</li>
            <li>שירות אמין ומחיר הוגן לכל רכב</li>
            <li>סיוע ברכבים שאינם מניעים או רכבים שעברו תאונה</li>
          </ul>
          <p className="text-sm text-gray-400 italic">*שימו לב: אנו לא מטפלים באופנועים או דו-גלגלי מכל סוג שהוא.</p>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על פינוי רכבים בחיפה</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">האם אתם קונים רכבים ללא טסט?</h3>
              <p>כן, אנו קונים וקונים רכבים ללא טסט, רכבים אחרי תאונה או רכבים שלא מניעים. לעיתים קרובות אנו מספקים שירותי גרירה משלימים כמו <Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="text-blue-600 underline">גרירה באזור הצ'ק פוסט</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold">מה עושים אם הרכב נתקע במקום לא נגיש?</h3>
              <p>הצוות שלנו מיומן בחילוצים מורכבים, כולל <Link href="/areas/haifa-general/car-rescue-from-mud-carmel-area" className="text-blue-600 underline">חילוץ רכבים מהבוץ באזור הכרמל</Link> או באזורים חוליים אחרים.</p>
            </div>
            <div>
              <h3 className="font-bold">האם השירות זמין גם באזורי התעשייה?</h3>
              <p>בהחלט, אנו מגיעים לכל אזורי התעשייה, כולל <Link href="/areas/haifa-general/car-scrapping-old-industrial-zone-kiryat-bialik" className="text-blue-600 underline">פינוי רכבים מאזור התעשייה בקרית ביאליק</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}