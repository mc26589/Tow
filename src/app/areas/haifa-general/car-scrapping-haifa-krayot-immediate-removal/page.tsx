import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | פינוי מיידי ומזומן במקום",
  description: "רוצים למכור רכב לפירוק בחיפה והקריות? פינוי מיידי, תשלום במזומן והגעה מהירה לכל אזור הצפון. שירות מקצועי ואמין לרכבים ללא טסט או לאחר תאונה. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/car-scrapping-haifa-krayot-immediate-removal"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פינוי וקניית רכבים לפירוק",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "Car Scrapping and Towing",
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
            אנו מציעים שירות מקצועי ומהיר לקניית רכבים לפירוק בחיפה והקריות. אם הרכב שלכם אינו נוסע, עבר תאונה או שפשוט הגיע הזמן להיפרד ממנו, אנו נגיע לפנות אותו באופן מיידי. 
            צריכים עזרה נוספת? אנו מציעים גם <Link href="/areas/haifa-general/sell-damaged-car-for-parts-haifa-immediate-pickup" className="underline">פינוי רכבים לאחר תאונה</Link> ופתרונות גרירה מקצועיים.
            <br /><br />
            *שימו לב: איננו מטפלים באופנועים.
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
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
          <ul className="space-y-4 text-lg mb-12">
            <li>✓ פינוי מיידי מהשטח בחיפה והקריות.</li>
            <li>✓ תשלום הוגן במקום עבור הרכב שלכם.</li>
            <li>✓ שירות אמין, מקצועי ומהיר ללא בירוקרטיה מיותרת.</li>
            <li>✓ טיפול בכל סוגי הרכבים: פרטיים, מסחריים ו-4x4.</li>
          </ul>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6">שאלות נפוצות</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold">באילו אזורים אתם פועלים?</h4>
                <p>אנו מעניקים שירות פינוי רכבים בכל אזור חיפה, הקריות, צ'ק פוסט והסביבה הקרובה.</p>
              </div>
              <div>
                <h4 className="font-bold">האם אתם קונים רכבים במצב נסיעה?</h4>
                <p>אנו קונים רכבים לברזל, רכבים אחרי תאונות ורכבים תקולים. לכל רכב אנו נותנים הערכת מחיר הוגנת במקום.</p>
              </div>
              <div>
                <h4 className="font-bold">מה עושים אם הרכב תקוע בדרך?</h4>
                <p>במידה והרכב נתקע, אנו ממליצים לעיין בשירותי <Link href="/areas/haifa-general/affordable-car-breakdown-towing-check-post-haifa-krayot" className="text-blue-600">גרירה וחילוץ באזור חיפה והקריות</Link> לקבלת מענה מהיר.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}