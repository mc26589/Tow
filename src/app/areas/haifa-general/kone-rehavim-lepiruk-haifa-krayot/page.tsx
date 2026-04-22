import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
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
    "priceRange": "$",
    "serviceType": "Car Recycling and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות</h1>
          <p className="text-xl mb-8 max-w-3xl">
            אנו מציעים שירות מקצועי ומהיר לקניית רכבים לפירוק בחיפה ובכל אזור הקריות. אם ברשותכם רכב ישן, רכב שאינו נוסע, רכב לאחר תאונה או רכב שפשוט תופס מקום, אנו כאן כדי לפנות אותו עבורכם. אנו מתמחים ברכבים פרטיים, מסחריים ורכבי 4x4. חשוב לציין: איננו מטפלים באופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">למה לבחור בנו?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">שירות מהיר באזורכם</h3>
              <p>פריסה רחבה בחיפה והקריות המאפשרת לנו להגיע אליכם בזמן הקצר ביותר.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">מחירים הוגנים</h3>
              <p>אנו מעריכים את הרכב שלכם ומציעים הצעת מחיר הוגנת ומשתלמת בהתאם למצב הרכב.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">פינוי מקצועי</h3>
              <p>טיפול בכל הניירת הנדרשת ופינוי הרכב בצורה בטוחה ומסודרת.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}