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
          <p className="text-lg md:text-xl mb-8 opacity-90">
            אנו מתמחים בגרירת רכבים פרטיים, מסחריים ו-4x4. שים לב: איננו מספקים שירותי גרירה לאופנועים.
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

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">שירותי גרירה באזור אחוזה</h2>
          <p className="mb-4">
            אנו מבינים את הצורך במענה מהיר כאשר הרכב נתקע. הצוות שלנו פועל 24/7 באזור אחוזה והסביבה כדי להעניק לך שקט נפשי.
          </p>
          <p className="font-semibold text-yellow-500">
            חשוב לציין: השירות שלנו מיועד לרכבים בלבד. איננו ערוכים לשינוע אופנועים מכל סוג שהוא.
          </p>
          <p className="mt-6">
            אנו מציעים מחירים הוגנים ושירות אדיב. לבירור עלות הגרירה לרכב שלך, צור איתנו קשר טלפוני לקבלת הצעת מחיר מדויקת.
          </p>
        </div>
      </section>
    </main>
  );
}