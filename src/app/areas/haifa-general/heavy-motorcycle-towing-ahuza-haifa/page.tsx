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
    "serviceType": ["Car Towing", "Roadside Assistance", "4x4 Recovery"]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר לאופנועים כבדים באחוזה חיפה - שירות מקצועי לרכבים ורכבי שטח</h1>
          <p className="text-xl mb-8">זקוקים לחילוץ רכב באחוזה? אנו כאן לשירותכם 24/7</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">מידע חשוב בנוגע לשירותי גרירה באחוזה</h2>
          <div className="prose prose-invert">
            <p>חשוב להבהיר: אנו מתמחים בשירותי גרירה וחילוץ לרכבים פרטיים, רכבים מסחריים ורכבי 4x4 באזור אחוזה וחיפה. <strong>איננו מספקים שירותי גרירה לאופנועים או אופנועים כבדים.</strong></p>
            <p>אם נתקעת עם הרכב שלך באזור אחוזה, הצוות המקצועי שלנו זמין עבורך 24/7 עם ציוד חילוץ מתקדם ומחירים הוגנים. אנו מבינים את החשיבות של מענה מהיר באזור חיפה והקריות ומבטיחים הגעה מהירה לכל קריאה.</p>
            <p>אנו מציעים שירות אמין, מקצועי ומהיר לכל סוגי הרכבים (למעט אופנועים). לקבלת הצעת מחיר בטלפון, צרו איתנו קשר כעת.</p>
          </div>
        </div>
      </section>
    </main>
  );
}