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
    "serviceType": "Car Towing and Roadside Assistance"
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
            גרר לאופנוע כבד באחוזה חיפה - שירותי גרירה מקצועיים לרכבים
          </h1>
          <p className="text-lg md:text-xl mb-8">
            אנו מתמחים בגרירת רכבים, רכבי שטח ומסחריות. שימו לב: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה וחילוץ באחוזה</h2>
        <p className="mb-4">
          נתקעת עם הרכב באזור אחוזה? הצוות שלנו ערוך ומוכן להעניק לך שירות מקצועי, מהיר ואמין 24 שעות ביממה.
        </p>
        <p className="mb-4">
          <strong>הבהרה חשובה:</strong> אנו מתמקדים במתן שירותי גרירה לרכבים פרטיים, רכבי 4x4 ורכבים מסחריים. איננו ערוכים לשינוע אופנועים או אופנועים כבדים.
        </p>
        <p>
          אנו מציעים מחירים הוגנים ושירות ללא פשרות לכל תושבי חיפה והסביבה. צרו קשר לקבלת הצעת מחיר בטלפון.
        </p>
      </section>
    </main>
  );
}