import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה - שירות גרירה חינם ופינוי מהיר",
  description: "מוכרים רכב לפירוק בחיפה? קונים את כל סוגי הרכבים עם שירות גרירה חינם, תשלום במזומן והגעה מהירה. אל תחכו, התקשרו עכשיו להצעת מחיר הוגנת!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-haifa-towing-included"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וקניית רכבים לפירוק חיפה",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה עם שירות גרירה כלול</h1>
          <p className="text-lg mb-8">זקוקים לפינוי רכב ישן, תקול או ללא טסט? אנו מציעים שירות קניית רכבים לפירוק בחיפה ובקריות הכולל גרירה חינם. אנו מתמחים ברכבים פרטיים ומסחריים. שימו לב: איננו מספקים שירותי גרירה או פירוק לאופנועים.</p>
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
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי רכב?</h2>
          <ul className="space-y-4">
            <li>✓ שירות גרירה כלול במחיר לכל אזור חיפה והקריות.</li>
            <li>✓ תשלום הוגן ומיידי במקום עבור הרכב שלכם.</li>
            <li>✓ טיפול מקצועי בכל סוגי הרכבים (פרטי, מסחרי, 4x4).</li>
            <li>✓ זמינות גבוהה ושירות מהיר ללא עיכובים.</li>
            <li>✓ נותנים שירות גם באזורים סמוכים כמו <Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="underline">צ'ק פוסט</Link> ו-<Link href="/areas/haifa-general/towing-for-scrap-kiryat-bialik" className="underline">קרית ביאליק</Link>.</li>
            <li>✓ מומחים ב-<Link href="/areas/haifa-general/car-scrapping-haifa-krayot-towing" className="underline">פירוק רכבים באזור חיפה והקריות</Link> לכל מטרה.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white text-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">שאלות נפוצות (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">האם אתם קונים כל רכב?</h3>
              <p>אנו קונים רכבים לפירוק מכל הסוגים: פרטיים, מסחריים, רכבים לאחר תאונה או רכבים ללא טסט. איננו מטפלים באופנועים.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">האם הגרירה באמת בחינם?</h3>
              <p>כן, שירות הגרירה כלול במחיר העסקה בכל רחבי חיפה והקריות, ללא עלויות נסתרות, כולל עבודה באזורי מסחר ומרכזי עיר.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">איך מתבצע התשלום על הרכב?</h3>
              <p>התשלום מתבצע במזומן או בהעברה מיידית בעת פינוי הרכב מהשטח, לאחר בדיקה זריזה של הרכב במקום.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}