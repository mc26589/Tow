import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בכביש 22 (עוקף קריות) | שירות 24/7 מהיר",
  description: "נתקעתם עם רכב חשמלי בכביש 22? שירות גרירה מקצועי לרכבים חשמליים 24/7. הגעה מהירה, מחיר הוגן ושמירה על הרכב שלכם. התקשרו עכשיו!",
  alternates: {
    canonical: "/areas/haifa-general/electric-vehicle-accident-towing-route-22-krayot-bypass"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8156",
      "longitude": "35.0567"
    },
    "priceRange": "$$,$",
    "serviceType": "Electric Vehicle Accident Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרירת רכב חשמלי לאחר תאונה בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם בכביש 22? הצוות המקצועי שלנו זמין עבורכם 24/7 עם ציוד מתקדם לגרירת רכבים חשמליים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="הקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">מענה מקצועי ובטוח לרכבים חשמליים</h2>
        <p className="mb-4">אנו מתמחים בגרירת רכבים חשמליים, היברידיים ורכבים פרטיים. אנו מבינים את הרגישות בטיפול ברכבים מסוג זה לאחר תאונה ומבצעים גרירה בטוחה. למחפשים שירותים משלימים באזור, אנו מציעים גם <Link href="/areas/haifa-general/affordable-24-7-towing-kiryat-bialik-flat-tire" className="text-blue-600 font-bold">שירותי גרירה בקרית ביאליק</Link> ושירותי <Link href="/areas/haifa-general/affordable-car-towing-kiryat-motzkin-24-7" className="text-blue-600 font-bold">גרירת רכבים בקרית מוצקין</Link>. חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שאלות נפוצות על גרירת רכב חשמלי</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">האם אתם גוררים רכבים חשמליים לאחר תאונה בכביש 22?</h3>
              <p>כן, אנו ערוכים להגעה מהירה לכל נקודה בכביש עוקף קריות ומציעים שירות מקצועי לרכבים חשמליים.</p>
            </div>
            <div>
              <h3 className="font-bold">מהו זמן ההגעה הממוצע שלכם?</h3>
              <p>אנו משתדלים להגיע לכל קריאה באזור חיפה והקריות בזמן הקצר ביותר, בהתאם לעומסי התנועה.</p>
            </div>
            <div>
              <h3 className="font-bold">האם יש לכם שירותי גרירה נוספים באזור?</h3>
              <p>בהחלט. אנו מספקים שירותים כמו <Link href="/areas/haifa-general/cheap-towing-check-post-kiryat-ata" className="text-blue-600">גרירה בצומת צ'ק פוסט וקרית אתא</Link> ופתרונות גרירה לכל האזור.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}