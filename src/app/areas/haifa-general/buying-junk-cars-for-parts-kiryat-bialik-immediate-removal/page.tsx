import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קניית רכבים לפירוק בקרית ביאליק | פינוי מיידי ומזומן במקום",
  description: "רוצים למכור רכב לפירוק בקרית ביאליק? אנו קונים את כל סוגי הרכבים במזומן, כולל פינוי מהיר מהשטח. מחיר הוגן ושירות מקצועי. התקשרו עכשיו לפרטים!",
  alternates: {
    canonical: "/areas/haifa-general/buying-junk-cars-for-parts-kiryat-bialik-immediate-removal"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "קניית רכבים לפירוק בקרית ביאליק",
    "areaServed": "Kiryat Bialik",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8250",
      "longitude": "35.0750"
    },
    "priceRange": "$",
    "serviceType": "Junk Car Removal and Auto Recycling"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קניית רכבים לפירוק בקרית ביאליק – פינוי מיידי מהשטח</h1>
          <p className="text-xl mb-8 max-w-2xl">
            זקוקים לפינוי רכב ישן או מושבת? אנו מתמחים בקניית רכבים לפירוק בקרית ביאליק עם שירות פינוי מהיר ומקצועי. אנו מטפלים ברכבים פרטיים, מסחריים ורכבי 4x4.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="קרית ביאליק" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לנציג
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שירות מקצועי לתושבי הקריות</h2>
          <p className="mb-4">אנו מציעים פתרון מלא לפינוי רכבים שאינם בשימוש. השירות כולל הגעה לכל נקודה בקרית ביאליק, הערכת מצב הרכב והצעת מחיר הוגנת במקום. במידה ואתם זקוקים גם לשירותי גרירה רגילים באזור, אנו ממליצים על <Link href="/areas/haifa-general/cheap-towing-kiryat-motzkin-fair-price" className="text-blue-600 underline">גרירה זולה בקרית מוצקין במחיר הוגן</Link>.</p>
          <div className="bg-red-50 border-r-4 border-red-500 p-4 mt-8">
            <p className="font-bold">חשוב לדעת:</p>
            <p>אנו מתמחים ברכבים בלבד. איננו מספקים שירותי פינוי או גרירה לאופנועים מכל סוג שהוא. למידע נוסף על פינוי נרחב, ניתן לעיין גם ב<Link href="/areas/haifa-general/buy-cars-for-scrap-haifa-krayot-immediate-removal" className="text-blue-600 underline">פינוי רכבים לברזל בקריות</Link>.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4">שאלות נפוצות על פינוי רכבים לפירוק</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold">האם אתם קונים רכבים ללא טסט או רכבים מושבתים?</p>
              <p>כן, אנו קונים כל רכב - ללא טסט, רכבים אחרי תאונה או רכבים שלא מניעים. נגיע עם גרר עד אליכם.</p>
            </div>
            <div>
              <p className="font-bold">מהו טווח המחירים לקניית רכב לפירוק?</p>
              <p>המחיר נקבע לפי סוג הרכב, השנה ומשקלו. אנו מציעים תמיד מחיר הוגן ותשלום במזומן במעמד הפינוי.</p>
            </div>
            <div>
              <p className="font-bold">האם השירות כולל העברה מהירה של הרכב?</p>
              <p>בהחלט. אנו מתחייבים לפינוי יעיל. אם אתם תקועים בדרך, תוכלו להיעזר גם בשירות <Link href="/areas/haifa-general/affordable-flatbed-towing-route-22-krayot-area" className="text-blue-600 underline">גרירת רכבים על משטח באזור הקריות וכביש 22</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}