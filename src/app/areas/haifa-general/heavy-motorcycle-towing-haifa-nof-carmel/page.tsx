import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$",
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
    "serviceType": "Vehicle Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            גרר אופנוע כבד תקוע בדרך נוף כרמל חיפה - שירותי גרירה לרכבים
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            נתקעת בדרך נוף כרמל? אנו כאן לסייע לרכבים פרטיים, מסחריים ו-4x4.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">חשוב לדעת לגבי שירותי הגרירה שלנו</h2>
          <p className="mb-6">
            אנו מבינים את הדחיפות כאשר רכב נתקע בדרך נוף כרמל בחיפה. עם זאת, חשוב להבהיר כי אנו מתמחים בגרירת רכבים פרטיים, רכבים מסחריים ורכבי שטח (4x4). <strong>איננו מספקים שירותי גרירה לאופנועים או אופנועים כבדים.</strong>
          </p>
          <p>
            אם הרכב שלך זקוק לחילוץ, אנו מציעים שירות מקצועי, מהיר ובמחירים הוגנים. צור קשר עם המוקד שלנו לקבלת הצעת מחיר בטלפון וזמן הגעה משוער לכל נקודה בחיפה והקריות.
          </p>
        </div>
      </section>
    </main>
  );
}