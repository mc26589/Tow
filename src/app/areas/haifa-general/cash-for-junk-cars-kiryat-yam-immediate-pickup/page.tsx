import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קניית רכבים לפירוק בקריית ים - מזומן במקום | פינוי מיידי 24/7",
  description: "רוצים למכור רכב לפירוק בקריית ים? מקבלים מזומן במקום! שירות מהיר, הוגן ומקצועי לכל סוגי הרכבים. פינוי מהיר מהבית בכל שעה. התקשרו עכשיו לקבלת הצעה!",
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
    "priceRange": "$$$",
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
            אנו מספקים שירות מקצועי של קניית רכבים לפירוק בקריית ים והסביבה. אם ברשותכם רכב ישן, מושבת או רכב לאחר תאונה שזקוק לפינוי מהיר, אנו נגיע עד אליכם. למי שזקוק גם לשירותי עזר בדרך, אנו מציעים גם <Link href="/areas/haifa-general/flat-tire-roadside-assistance-kiryat-yam-beach" className="underline font-semibold">סיוע בתיקון תקר בחוף קריית ים</Link> או <Link href="/areas/haifa-general/towing-service-road-22-krayot" className="underline font-semibold">שירותי גרירה בכביש 22 לקריות</Link>.
          </p>
          <div className="flex flex-col gap-4">
            <WhatsAppCTA cityName="קריית ים" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black font-bold py-3 px-6 rounded-lg text-center hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לפינוי הרכב שלכם
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
        <ul className="list-disc list-inside space-y-4 text-lg mb-8">
          <li>פינוי מיידי ומקצועי מכל רחוב בקריית ים.</li>
          <li>תשלום הוגן ומיידי במזומן במועד איסוף הרכב.</li>
          <li>מומחיות בפינוי גרוטאות רכב, כולל שירותים כמו <Link href="/areas/haifa-general/car-scrapping-old-industrial-zone-kiryat-bialik" className="text-blue-600 underline">פירוק רכבים באזור התעשייה הישן בקריית ביאליק</Link>.</li>
          <li>סיוע ופינוי לרכבים תקועים בקרבת צירים מרכזיים, בדומה לשירותי <Link href="/areas/haifa-general/affordable-emergency-towing-route-22-krayot-bypass" className="text-blue-600 underline">גרירה זולה בכביש 22</Link>.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6">שאלות נפוצות</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-xl">האם אתם קונים רכבים ללא טסט או עם תקלות?</h3>
            <p>בהחלט. אנו רוכשים כל רכב, בין אם הוא תקול, מושבת, או ללא טסט, ומפנים אותו בצורה מסודרת.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">מהו תהליך הפינוי?</h3>
            <p>לאחר שיחת הטלפון, אנו מתאמים זמן הגעה נוח עבורכם. הצוות שלנו מגיע למקום, בוחן את הרכב ומשלם במזומן מיד במקום.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">האם אתם מציעים שירותים מחוץ לקריית ים?</h3>
            <p>כן, אנו מספקים שירותי פינוי וגרירה בכל אזור חיפה והקריות, כולל <Link href="/areas/haifa-general/buying-cars-for-scrap-ahoza-haifa" className="text-blue-600 underline">קניית רכבים לפירוק באחוזה חיפה</Link> ושירותי חילוץ במקרים מורכבים בדרכים ראשיות.</p>
          </div>
        </div>
      </section>
    </main>
  );
}