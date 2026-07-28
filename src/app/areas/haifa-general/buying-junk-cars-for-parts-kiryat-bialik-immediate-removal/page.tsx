import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קניית רכבים לפירוק בקרית ביאליק | פינוי מזומן ומיידי 24/7",
  description: "רוצים למכור רכב לפירוק בקרית ביאליק? אנו קונים כל סוגי הרכבים במזומן, כולל פינוי מהיר מהשטח תוך זמן קצר. שירות מקצועי, מחיר הוגן ותשלום במקום. התקשרו עכשיו!",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קניית רכבים לפירוק בקרית ביאליק – פינוי מזומן מהשטח</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם רכב ישן, מושבת או ללא טסט? אנו מתמחים בקניית רכבים לפירוק בקרית ביאליק עם שירות פינוי מהיר ללא עיכובים. אנו קונים רכבים פרטיים, מסחריים ורכבי 4x4 במחירים הוגנים.
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
          <h2 className="text-3xl font-bold mb-6">שירות פינוי רכבים מהיר לתושבי הקריות</h2>
          <p className="mb-4">אנו מציעים פתרון מלא לפינוי רכבים שאינם בשימוש. השירות כולל הגעה לכל שכונה בקרית ביאליק, הערכת שווי הרכב ותשלום במזומן במקום. אם ברצונכם להשוות שירותים באזור, ניתן לבדוק גם <Link href="/areas/haifa-general/scrap-car-removal-for-parts-kiryat-motzkin" className="text-blue-600 underline">פירוק רכבים בקרית מוצקין</Link> או את שירותי ה<Link href="/areas/haifa-general/scrap-car-removal-kiryat-haim-cash" className="text-blue-600 underline">פינוי רכבים בקרית חיים</Link>.</p>
          <div className="bg-red-50 border-r-4 border-red-500 p-4 mt-8">
            <p className="font-bold">חשוב לדעת:</p>
            <p>השירות מתמקד ברכבים בלבד (פרטיים ומסחריים). איננו מספקים שירותי פינוי או גרירה לאופנועים. לצורך גרירה שוטפת באזור כביש 22, אנו ממליצים על <Link href="/areas/haifa-general/towing-service-road-22-krayot-bypass" className="text-blue-600 underline">שירותי גרירה בכביש 22</Link>.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">שאלות נפוצות</h3>
          <div className="space-y-6">
            <div>
              <p className="font-bold text-lg">אילו רכבים אתם קונים לפירוק?</p>
              <p>אנו קונים רכבים מכל הסוגים: רכבים מושבתים, רכבים שעברו תאונה, רכבים עם מנוע תפוס או רכבים ללא טסט. אנו מגיעים עם גרר לכל נקודה.</p>
            </div>
            <div>
              <p className="font-bold text-lg">מהו טווח המחירים לקניית רכב לפירוק?</p>
              <p>המחיר נקבע בהתאם לדגם הרכב, השנה ומצב הברזל. אנו תמיד מציעים מחיר הוגן ותחרותי בשוק.</p>
            </div>
            <div>
              <p className="font-bold text-lg">האם השירות זמין גם באזורים סמוכים?</p>
              <p>כן, אנו נותנים שירות נרחב בכל אזור הקריות והסביבה. אם נתקעתם בדרך, ניתן להיעזר ב<Link href="/areas/haifa-general/cheap-towing-check-post-krayot" className="text-blue-600 underline">גרירה בצ'ק פוסט</Link> לפתרונות דחופים.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}