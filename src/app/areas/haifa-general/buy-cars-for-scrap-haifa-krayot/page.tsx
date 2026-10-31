import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | תשלום במזומן ופינוי מהיר",
  description: "רוצים למכור רכב לפירוק בחיפה והקריות? אנו קונים רכבים ללא טסט, לאחר תאונה או ישנים במחיר הוגן. פינוי מיידי מהשטח 24/7. התקשרו עכשיו להצעת מחיר!",
  alternates: {
    canonical: "/areas/haifa-general/buy-cars-for-scrap-haifa-krayot"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי קניית רכבים לפירוק בחיפה והקריות",
    "areaServed": ["Haifa", "Kiryat Bialik", "Kiryat Motzkin", "Kiryat Yam", "Kiryat Ata"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$",
    "serviceType": "Car Scrap and Towing",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "34.9896"
    }
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
          <p className="text-xl mb-8">נפטרים מהרכב הישן בראש שקט. שירות פינוי רכבים לפירוק, רכבים מושבתים או ללא טסט. שירות מקצועי, הגעה מהירה ומחיר הוגן במזומן.</p>
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

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">מדוע כדאי למכור רכב לפירוק דרכנו?</h2>
        <p className="mb-4">אנו מציעים פתרון כולל לבעלי רכבים בחיפה והקריות. אם אתם זקוקים לשירותי <Link href="/areas/haifa-general/פינוי-רכב-גרוטאה-לחלפים-קריית-מוצקין" className="text-blue-600 underline">פינוי רכב גרוטאה לחלפים קריית מוצקין</Link> או באזור הקריות, אנו נגיע עם גרר עד אליכם. למי שנתקע בדרכים באזור ציר 22, אנו ממליצים גם על שירותי <Link href="/areas/haifa-general/towing-services-road-22-krayot-bypass" className="text-blue-600 underline">towing services road 22 krayot bypass</Link> לכל צורך בגרירה דחופה.</p>
        <p className="text-red-600 font-bold mb-6">הערה: השירות ניתן לרכבים פרטיים ומסחריים בלבד. איננו מטפלים באופנועים.</p>
        <ul className="list-disc pr-6 space-y-2 mb-8">
          <li>פינוי רכבים מהשטח מהקריות ועד חיפה והסביבה</li>
          <li>מחירים הוגנים ומשתלמים עבור גרוטאות רכב</li>
          <li>שירות מקצועי של גרירה ופינוי לרכבים ללא טסט</li>
          <li>זמינות 24/7 לכל פנייה דחופה</li>
        </ul>

        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על פירוק רכבים</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">באילו אזורים אתם נותנים שירות?</h3>
              <p>אנו פועלים בכל אזור חיפה, הקריות (קריית אתא, ביאליק, מוצקין וים) וכן בדרכים הראשיות באזור.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם קונים רכבים ללא טסט?</h3>
              <p>כן, אנו רוכשים רכבים מכל סוג: רכבים ישנים, רכבים ללא טסט או רכבים שעברו תאונה ואינם במצב נסיעה.</p>
            </div>
            <div>
              <h3 className="font-bold">האם אתם מציעים גם שירותי גרירה רגילים?</h3>
              <p>בהחלט. אם נתקעתם בדרך, ניתן להיעזר גם בשירותי <Link href="/areas/haifa-general/emergency-car-breakdown-towing-route-22-check-post-haifa-cheap" className="text-blue-600 underline">emergency car breakdown towing route 22 check post haifa cheap</Link> לפתרונות גרירה מיידיים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}