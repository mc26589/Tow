import { Metadata } from "next";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קניית רכבים לפירוק בבת גלים חיפה | מזומן ופינוי מהיר 24/7",
  description: "נתקעתם עם רכב ישן בבת גלים? קניית רכבים לפירוק בחיפה במחיר הוגן! פינוי מיידי, שירות מקצועי לכל סוגי הרכבים. התקשרו עכשיו להצעת מחיר משתלמת!",
  alternates: {
    canonical: "/areas/haifa-general/cash-for-scrap-cars-bat-galim-haifa",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים בחיפה",
    "areaServed": "Haifa",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8268",
      "longitude": "34.9765"
    },
    "priceRange": "$",
    "serviceType": "Scrap car removal and towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">קניית רכבים לפירוק בבת גלים חיפה – פינוי מיידי ומזומן</h1>
          <p className="text-xl mb-8">
            זקוקים לפינוי רכב ישן בבת גלים? אנו מספקים שירות מקצועי לפינוי רכבים לפירוק. בין אם מדובר ברכב מושבת או רכב ללא טסט, אנו מציעים מענה מהיר. למידע נוסף על שירותים רחבים יותר באזור, בקרו בדף ה-<Link href="/areas/haifa-general/buying-cars-for-scrap-check-post-haifa" className="underline">קניית רכבים לפירוק בצק פוסט</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="בת גלים, חיפה" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי רכב בבת גלים?</h2>
        <ul className="space-y-4 text-lg">
          <li>✓ פינוי מיידי מהשטח בתיאום מראש.</li>
          <li>✓ תשלום הוגן במזומן עבור הרכב שלכם.</li>
          <li>✓ שירות מקצועי לכל סוגי הרכבים (פרטי, מסחרי, 4x4).</li>
          <li>✓ זמינות 24/7 לכל קריאה, כולל שירותי <Link href="/areas/haifa-general/towing-for-scrap-kiryat-ata-road-22" className="text-blue-600 underline">גרירה לפירוק בכביש 22</Link>.</li>
        </ul>
      </section>

      <section className="py-12 container mx-auto px-4 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">שאלות נפוצות (FAQ)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-xl">האם אתם מגיעים לכל רחוב בבת גלים?</h3>
            <p>כן, אנו מגיעים לכל נקודה בבת גלים ובסביבתה הקרובה בחיפה תוך זמן קצר.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">מה משפיע על המחיר שנקבל עבור הרכב?</h3>
            <p>המחיר נקבע לפי סוג הרכב, השנה ומצבו המכני. אנו מבטיחים תשלום הוגן במזומן במקום.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">האם אתם מפנים גם אופנועים?</h3>
            <p>חשוב להבהיר: אנו מתמחים בפינוי וקנייה של רכבים פרטיים ומסחריים בלבד ואיננו עוסקים באופנועים.</p>
          </div>
        </div>
      </section>
    </main>
  );
}