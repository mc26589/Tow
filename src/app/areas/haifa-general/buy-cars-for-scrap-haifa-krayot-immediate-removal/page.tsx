import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מיידי | מחיר הוגן",
  description: "נתקעתם עם רכב ישן? קונה רכבים לפירוק בחיפה והקריות בפינוי מיידי 24/7. שירות אמין, תשלום במזומן ומחיר הוגן לכל רכב. התקשרו עכשיו לקבלת הצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או תקול? אנו כאן בשבילכם 24/7 בשירות מהיר ואמין.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות מקצועי לפינוי רכבים באזור הצפון</h2>
        <p className="mb-4">אנו מתמחים בפינוי רכבים פרטיים, מסחריים ורכבי 4x4. אם אתם זקוקים גם לשירותי גרירה, ניתן לבדוק אפשרויות כגון <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-blue-600 underline">גרירה 24/7 באזור עוקף קריות במחיר הוגן</Link>.</p>
        <p className="mb-4">השירות שלנו כולל פינוי מהיר מהשטח ללא עיכובים מיותרים, כולל מקרים של רכבים תקועים. אנו פועלים בפריסה רחבה בכל אזור חיפה והקריות.</p>
        <p className="text-red-600 font-bold mb-8">חשוב להבהיר: איננו מטפלים באופנועים או בכל סוג של כלי רכב דו-גלגלי.</p>
        
        <div className="mt-8 p-6 bg-gray-50 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">למה לבחור בנו?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>פינוי מיידי לכל אזור חיפה והקריות.</li>
            <li>הצעת מחיר הוגנת בטלפון.</li>
            <li>שירות אמין, מהיר ומקצועי.</li>
            <li>קונים רכבים לברזל, לפירוק ולחלפים.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על פינוי רכבים</h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-lg">באילו אזורים אתם פועלים?</h4>
            <p>אנו מספקים שירותי פינוי וגרירה בכל אזור חיפה, הקריות, מפרץ חיפה והסביבה הקרובה.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg">האם אתם קונים רכבים נוסעים או רק רכבי גרוטאות?</h4>
            <p>אנו קונים רכבים בכל מצב, החל מרכבים שלא מניעים ועד לרכבים לפירוק. לקבלת פרטים נוספים על שירותים נוספים באזור, ראו <Link href="/areas/haifa-general/cash-for-junk-cars-scrap-vehicle-removal-kiryat-motzkin" className="text-blue-600 underline">פינוי רכבים לפירוק בקריית מוצקין</Link>.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg">כמה זמן לוקח פינוי רכב?</h4>
            <p>אנו שואפים לפינוי מיידי בהתאם לזמינות הניידת באזורכם, לרוב תוך מספר שעות מהקריאה.</p>
          </div>
        </div>
      </section>
    </main>
  );
}