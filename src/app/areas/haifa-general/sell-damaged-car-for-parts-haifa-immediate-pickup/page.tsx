import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "מכירת רכב תקול לפירוק בחיפה | פינוי מיידי - מחיר הוגן",
  description: "מעוניינים למכור רכב תקול לפירוק בחיפה והקריות? אנו מציעים פינוי מיידי מהשטח, מחיר הוגן ושירות מקצועי 24/7. התקשרו עכשיו לקבלת הצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/sell-damaged-car-for-parts-haifa-immediate-pickup"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים חיפה",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Car Removal and Scrap"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">מכירת רכב תקול לפירוק בחיפה – פינוי מיידי מהשטח</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב מושבת? אנו כאן עבורכם עם שירות מהיר, אמין ומקצועי בכל אזור חיפה והקריות.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">פינוי רכבים לפירוק בחיפה – שירות מהיר</h2>
        <p className="mb-4">אם הרכב שלכם אינו נוסע, עבר תאונה או שפשוט הגיע הזמן להיפרד ממנו, אנו הכתובת שלכם. אנו מתמחים בפינוי רכבים פרטיים, מסחריים ורכבי 4x4. אם נתקעתם באזור הצפון, אנו מציעים גם פתרונות כגון <Link href="/areas/haifa-general/pinui-rechev-grotah-grira-check-post-haifa-krayot-lechalafim" className="text-blue-600 font-bold">פינוי רכב גרוטאה באזור הצ'ק פוסט</Link> המאפשר פתרון מהיר.
        </p>
        <p className="mb-4"><strong>חשוב להבהיר:</strong> אנו מתמקדים בפינוי רכבים בלבד. איננו מטפלים באופנועים, אך נשמח לסייע לבעלי רכבים אחרים הזקוקים לשירותי <Link href="/areas/haifa-general/towing-for-scrap-kiryat-ata-road-22" className="text-blue-600 font-bold">גרירה לפירוק על כביש 22</Link>.</p>
        
        <div className="bg-gray-100 p-6 rounded-xl mt-8">
          <h3 className="text-2xl font-semibold mb-4">שאלות נפוצות</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">האם אתם קונים רכבים ללא טסט?</p>
              <p>כן, אנו רוכשים ומפנים רכבים מושבתים, רכבים שעברו תאונות או רכבים ללא טסט בתהליך מהיר ומסודר.</p>
            </div>
            <div>
              <p className="font-bold">מהו טווח המחירים לרכב לפירוק?</p>
              <p>המחיר נקבע בהתאם למצב הרכב, סוגו והיכולת שלנו להפיק ממנו חלפים. אנו מציעים מחירים הוגנים ומזומן במקום.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}