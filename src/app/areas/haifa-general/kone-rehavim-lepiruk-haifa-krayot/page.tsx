import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | מזומן ופינוי מהיר 24/7",
  description: "רוצים למכור רכב לפירוק? אנו קונים רכבים בחיפה והקריות במחיר הוגן! פינוי מהיר, שירות 24/7 לכל סוגי הרכבים. התקשרו עכשיו לקבלת הצעה משתלמת!",
  alternates: {
    canonical: "/areas/haifa-general/kone-rehavim-lepiruk-haifa-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי קניית רכבים לפירוק וגרירה חיפה והקריות",
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
    "serviceType": "Car Scrap and Removal"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות</h1>
          <p className="text-xl mb-8 max-w-3xl">
            זקוקים לשירות מקצועי של פינוי רכבים? אנו קונים רכבים לפירוק בחיפה והקריות ומציעים תשלום הוגן במזומן. אם הרכב ישן, תקול או פגוע, נדאג לפינוי מהיר מהשטח. אנו מתמחים ברכבים פרטיים ומסחריים, ומציעים מענה מיידי לכל תושבי האזור.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">למה לבחור בנו?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">שירות פריסה רחב</h3>
              <p>פינוי רכבים בחיפה ובקריות. אם אתם מחפשים <Link href="/areas/haifa-general/buying-junk-cars-for-parts-kiryat-bialik-immediate-removal" className="text-blue-600">קניית רכבים לפירוק בקרית ביאליק</Link> או באזור הקריות, אנו מגיעים אליכם במהירות.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">תשלום הוגן ומיידי</h3>
              <p>אנו מעריכים את הרכב שלכם נכון. מחפשים גם <Link href="/areas/haifa-general/cash-for-junk-cars-scrap-vehicle-removal-kiryat-motzkin" className="text-blue-600">פירוק רכבים בקרית מוצקין</Link>? השירות שלנו מבטיח לכם ראש שקט ופינוי תקין של הרכב.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">פתרון כולל לכל מצב</h3>
              <p>זקוקים גם לגרירה? אנו מציעים מענה לכל צורך, כולל <Link href="/areas/haifa-general/accident-towing-road-22-check-post-krayot" className="text-blue-600">גרירה בציר 22 והצ'ק פוסט</Link> במקרה של תקלה בדרך.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">באילו אזורים אתם פועלים?</h3>
              <p>אנו פועלים בכל אזור חיפה והקריות, כולל פינוי מהיר ממרכזים עירוניים ואזורי תעשייה. במידה ונתקעתם בדרכים, תוכלו להיעזר גם בשירותי <Link href="/areas/haifa-general/גרירה-24-7-עוקף-קריות-מחיר-הוגן" className="text-blue-600">גרירה 24/7 בעוקף קריות</Link>.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">האם ניתן למכור רכב תקול או לאחר תאונה?</h3>
              <p>בהחלט. אנו קונים רכבים לפירוק בכל מצב - רכבים שאינם נוסעים, רכבים לאחר תאונה או רכבים ישנים. ניתן לבדוק גם אפשרויות ל-<Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-immediate-removal" className="text-blue-600">קניית רכבים לפירוק בחיפה</Link> עם פינוי מיידי.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">תוך כמה זמן מתבצע הפינוי?</h3>
              <p>ברוב המקרים, אנו מתאמים פינוי תוך זמן קצר מרגע הפנייה. השירות מותאם אישית ללקוח כדי לחסוך לכם זמן יקר.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}