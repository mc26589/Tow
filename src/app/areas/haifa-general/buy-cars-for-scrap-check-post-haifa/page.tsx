import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בצ'ק פוסט חיפה | תשלום מיידי במזומן 24/7",
  description: "רוצים למכור רכב לפירוק באזור צ'ק פוסט חיפה? קונים רכבים במצב נסיעה, תקולים או לאחר תאונה במחיר הוגן. פינוי מהיר ומזומן במקום. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-check-post-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי קניית רכבים לפירוק וגרירה צ'ק פוסט חיפה",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "35.0240"
    },
    "priceRange": "$",
    "serviceType": "Car Scrap and Towing Services"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">קונה רכבים לפירוק בצ'ק פוסט חיפה - פינוי מהיר ותשלום במקום</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          תקועים עם רכב ישן? מחפשים קונה רכבים לפירוק בצ'ק פוסט חיפה? אנו מתמחים בפינוי כל סוגי הרכבים: רכבים מושבתים, לאחר תאונה, ללא טסט או רכבים תקולים. אנו מציעים שירות <Link href="/areas/haifa-general/buy-cars-for-scrap-check-post-haifa" className="underline font-semibold">buy cars for scrap check post haifa</Link> מהיר, אמין ומקצועי. חשוב: אנו מתמקדים ברכבים פרטיים, מסחריים ורכבי 4x4 בלבד.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <WhatsAppCTA cityName="חיפה והקריות" />
          <a 
            href={`tel:+${BUSINESS_INFO.phone}`} 
            className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
          >
            התקשרו עכשיו להצעת מחיר
          </a>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בשירותי הפינוי שלנו באזור הצ'ק פוסט?</h2>
        <ul className="space-y-4 text-lg mb-10">
          <li>✅ <strong>זמינות 24/7:</strong> מענה מהיר לכל אזור חיפה והסביבה.</li>
          <li>✅ <strong>מחיר הוגן:</strong> אנו מעריכים את הרכב שלכם לפי מצבו המכני וערך המתכת, ומציעים תשלום מיידי במזומן.</li>
          <li>✅ <strong>מקצועיות:</strong> פינוי בטוח של רכבים תקולים ללא כאב ראש מיותר.</li>
          <li>✅ <strong>פתרונות נוספים:</strong> אם אתם זקוקים גם לשירות <Link href="/areas/haifa-general/affordable-emergency-car-towing-check-post-haifa" className="text-blue-600 underline">affordable emergency car towing check post haifa</Link>, הגעתם למקום הנכון.</li>
          <li>✅ <strong>כיסוי רחב:</strong> זקוקים לסיוע גרירה באזור? בדקו גם את <Link href="/areas/haifa-general/cheap-towing-check-post-krayot" className="text-blue-600 underline">cheap towing check post krayot</Link>.</li>
        </ul>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על רכבים לפירוק</h3>
          <div className="space-y-6 text-gray-700">
            <div>
              <p className="font-bold">באילו סוגי רכבים אתם מטפלים באזור הצ'ק פוסט?</p>
              <p>אנו קונים רכבים פרטיים, מסחריים ורכבי שטח (4x4) במצב נסיעה או מושבתים. איננו עוסקים באופנועים.</p>
            </div>
            <div>
              <p className="font-bold">איך נקבע מחיר הרכב לפירוק?</p>
              <p>המחיר נקבע לפי פרמטרים כגון שנתון, דגם, מצב הרכב וערך החלקים. אנו מתחייבים להצעת מחיר הוגנת ושקופה לכל לקוח.</p>
            </div>
            <div>
              <p className="font-bold">האם אתם מציעים גרירה כלולה במחיר?</p>
              <p>כן, במסגרת שירות <Link href="/areas/haifa-general/buy-cars-for-scrap-check-post-haifa" className="text-blue-600 underline">buy cars for scrap check post haifa</Link>, אנו דואגים לפינוי הרכב מהשטח שלכם בצורה מקצועית.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}