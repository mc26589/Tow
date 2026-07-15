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
    "serviceType": "Car Scrap and Towing"
  };

  return (
    <main className="min-h-screen bg-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות</h1>
          <p className="text-xl mb-8">שירות מקצועי, מהיר ואמין לפינוי רכבים מכל סוג. הצעת מחיר הוגנת בטלפון.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition-colors"
            >
              חייגו עכשיו לשיחת ייעוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-900 text-neutral-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפירוק רכבים?</h2>
          <p className="mb-4">אנו מציעים פתרון מלא לכל מי שמחפש קונה רכבים לפירוק בחיפה והקריות. השירות שלנו כולל פינוי מהיר של רכבים ללא טסט, רכבים מושבתים או רכבים לאחר תאונה.</p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>פינוי רכבים ללא עלות גרירה</li>
            <li>טיפול מקצועי בכל סוגי הרכבים הפרטיים והמסחריים</li>
            <li>הצעת מחיר הוגנת ומשתלמת</li>
            <li>שירות זמין 24/7 בכל אזור חיפה והקריות</li>
          </ul>
          <div className="bg-neutral-800 p-6 rounded-xl border-r-4 border-red-600">
            <p className="font-bold">הערה חשובה: אנו מתמחים ברכבים פרטיים, מסחריים ורכבי שטח בלבד. איננו מספקים שירות פירוק או גרירה לאופנועים.</p>
          </div>
        </div>
      </section>
    </main>
  );
}