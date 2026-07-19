import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מהיר ומזומן - שירות 24/7",
  description: "רוצים למכור רכב לפירוק בחיפה והקריות? אנו קונים רכבים ישנים, תקולים או לאחר תאונה במחיר הוגן ומזומן. פינוי מהיר מהשטח. התקשרו עכשיו לקבלת הצעה!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-haifa-krayot",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות</h1>
          <p className="text-xl mb-8">שירות מקצועי, מהיר והוגן לפינוי רכבים מכל סוג. אנו קונים רכבים פרטיים, מסחריים ורכבי 4x4 כולל פינוי מהיר מהשטח.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
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
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפירוק רכבים?</h2>
          <p className="mb-4">אנו מתמחים בפינוי רכבים לפירוק באזור חיפה, עם פריסה רחבה שכוללת גם את <Link href="/areas/haifa-general/scrap-car-removal-for-parts-kiryat-motzkin" className="text-blue-400 hover:underline">פינוי רכבים לפירוק בקריית מוצקין</Link> ושירותים מהירים ב-<Link href="/areas/haifa-general/car-scrapping-neve-shaanan-haifa" className="text-blue-400 hover:underline">שכונת נווה שאנן</Link>.</p>
          <p className="mb-4">אנו רוכשים רכבים לאחר תאונה, רכבים ישנים, רכבים ללא טסט או רכבים תקולים. השירות כולל גרירה מהירה ללא תוספת עלות, תוך שמירה על סטנדרט של מחיר הוגן.</p>
          <p>זקוקים לשירותי עזר נוספים? אנו מספקים פתרונות משלימים כמו <Link href="/areas/haifa-general/affordable-towing-check-post-haifa" className="text-blue-400 hover:underline">שירותי גרירה בצומת צ'ק פוסט</Link> לכל מי שנתקע בדרך.</p>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על פירוק רכבים</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">באילו סוגי רכבים אתם מטפלים?</h3>
              <p>אנו קונים רכבים פרטיים, מסחריים ורכבי שטח. לא ניתן לבצע פירוק או גרירה לאופנועים.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם מגיעים לכל האזור?</h3>
              <p>כן, אנו מספקים שירותי פינוי וגרירה בחיפה, הקריות, וסביבתן. לכל שאלה על אזור ספציפי או הצעת מחיר לרכב תקול, פנו אלינו בוואטסאפ.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}