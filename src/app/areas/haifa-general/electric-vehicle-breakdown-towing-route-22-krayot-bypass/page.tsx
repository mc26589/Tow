import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בכביש 22 עוקף קריות | שירות 24/7 מהיר",
  description: "נתקעת עם הרכב החשמלי בכביש 22? שירות גרירה מקצועי, זמין 24/7, הגעה מהירה לכל נקודה בעוקף קריות. מחיר הוגן ושירות בטוח לרכב חשמלי. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/electric-vehicle-breakdown-towing-route-22-krayot-bypass",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22 עוקף קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "גרירת רכב חשמלי",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8190", "longitude": "35.0630" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">גרירת רכב חשמלי תקוע בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">
            נתקעת עם הרכב החשמלי בכביש 22? אנו מתמחים בחילוץ וגרירה של רכבים חשמליים, היברידיים ורכבי 4x4. 
            הצוות שלנו מבין את הרגישות של רכבים חשמליים ומבצע את הגרירה בבטחה מלאה. 
            זקוקים גם ל<Link href="/areas/haifa-general/affordable-car-towing-service-check-post-haifa" className="underline">שירותי גרירה בצומת צ'ק פוסט</Link>? אנו כאן לעזור.
            חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-blue-900 font-bold py-3 px-6 rounded-lg text-center hover:bg-gray-100 transition-colors"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לגרירה בכביש 22?</h2>
        <ul className="list-disc pr-6 space-y-2 mb-8">
          <li>זמינות 24/7 לכל אורך ציר עוקף קריות.</li>
          <li>ציוד גרירה מתקדם המותאם לרכבים חשמליים.</li>
          <li>הגעה מהירה ללא המתנה מיותרת.</li>
          <li>מחירים הוגנים ושירות אדיב.</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">שאלות נפוצות על גרירה בכביש 22</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">האם אתם גוררים רכבים חשמליים?</h3>
            <p>כן, אנו ערוכים לשינוע בטוח של רכבים חשמליים תוך שמירה על תקינות הסוללה והמערכות האלקטרוניות.</p>
          </div>
          <div>
            <h3 className="font-bold">מהו אזור הפעילות שלכם?</h3>
            <p>אנו פועלים בכל אזור חיפה והקריות, כולל מתן שירותים כמו <Link href="/areas/haifa-general/cheap-small-car-towing-kiryat-motzkin-nave-ganim" className="text-blue-600">גרירת רכבים בקרית מוצקין</Link> וסביבתה.</p>
          </div>
          <div>
            <h3 className="font-bold">האם אתם קונים רכבים לפירוק?</h3>
            <p>כן, אם הרכב אינו ראוי לנסיעה, ניתן לבדוק אפשרות ל<Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot" className="text-blue-600">קניית רכבים לפירוק בחיפה והקריות</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}