import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
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
    "serviceType": "Towing and Roadside Assistance for Cars and 4x4"
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
            גרר אופנועים כבדים דרך פרויד חיפה - האם ניתן לקבל שירות?
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            אנו מתמחים בחילוץ רכבים, רכבי שטח ומסחריות. לידיעתכם, איננו מספקים שירותי גרירה לאופנועים.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">שירותי גרירה וחילוץ בחיפה</h2>
          <p className="mb-6">
            אם נתקעת עם רכב פרטי או מסחרי בדרך פרויד, הצוות שלנו ערוך להגיע אליך במהירות. אנו מציעים מחירים הוגנים ושירות מקצועי 24/7.
          </p>
          
          <div className="flex flex-col gap-4 mt-8">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-black text-white py-4 px-8 rounded-lg text-center font-bold hover:bg-gray-800 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}