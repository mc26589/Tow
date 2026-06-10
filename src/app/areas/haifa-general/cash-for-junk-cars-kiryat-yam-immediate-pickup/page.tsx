import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קניית רכבים לפירוק בקריית ים - מזומן במקום | פינוי מיידי",
  description: "נתקעתם עם רכב ישן? קניית רכבים לפירוק בקריית ים במזומן במקום. שירות פינוי רכבים מקצועי, הגעה מהירה לכל אזור בקריית ים. התקשרו עכשיו להצעת מחיר הוגנת!",
  alternates: { canonical: "/areas/haifa-general/cash-for-junk-cars-kiryat-yam-immediate-pickup" },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים לפירוק בחיפה והקריות",
    "areaServed": { "@type": "City", "name": "Kiryat Yam" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8356", "longitude": "35.0686" },
    "priceRange": "$$,$",
    "serviceType": "Cash for junk cars, vehicle removal"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">קניית רכבים לפירוק בקריית ים – פינוי מיידי ומזומן במקום</h1>
          <p className="text-xl mb-8">
            אנו מספקים שירות מקצועי של קניית רכבים לפירוק בקריית ים. אם ברשותכם רכב ישן, רכב מושבת או רכב לאחר תאונה, אנו נגיע לפנות אותו באופן מיידי. אנו מתמחים ברכבים פרטיים ומסחריים. במידה ואתם זקוקים גם לשירותי גרירה נוספים, ניתן לבדוק אפשרות ל-<Link href="/areas/haifa-general/cheap-towing-kiryat-yam-to-kiryat-motzkin" className="underline font-semibold">גרר זול מקריית ים לקריית מוצקין</Link>.
          </p>
          <div className="flex flex-col gap-4">
            <WhatsAppCTA cityName="קריית ים" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black font-bold py-3 px-6 rounded-lg text-center hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
        <ul className="list-disc list-inside space-y-4 text-lg mb-8">
          <li>פינוי מיידי מכל נקודה בקריית ים.</li>
          <li>תשלום הוגן במזומן במעמד הפינוי.</li>
          <li>שירות אדיב, מהיר ומקצועי לכל סוגי הרכבים.</li>
          <li>סיוע מקצועי גם לתושבי האזור, כולל <Link href="/areas/haifa-general/buying-junk-cars-for-parts-kiryat-bialik-immediate-removal" className="text-blue-600 underline">קניית רכבים לפירוק בקריית ביאליק</Link>.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6">שאלות נפוצות</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-xl">האם אתם מפנים גם רכבים ללא טסט?</h3>
            <p>כן, אנו קונים ומפנים רכבים ללא טסט, רכבים עם תקלות מכניות או רכבים שעברו תאונה.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">תוך כמה זמן תגיעו לפנות את הרכב?</h3>
            <p>אנו מציעים שירות מהיר בקריית ים, לרוב הגעה תוך זמן קצר בתיאום מראש.</p>
          </div>
        </div>
      </section>
    </main>
  );
}