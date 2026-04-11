import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט והקריות",
    "areaServed": ["Haifa", "Krayot", "Check Post"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "35.0230"
    },
    "priceRange": "$",
    "serviceType": "Emergency Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול באזור צ'ק פוסט והקריות</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            נתקעתם בדרך? אנו מציעים שירותי גרירה מהירים, מקצועיים ובמחיר הוגן באזור צ'ק פוסט, חיפה והקריות. 
            צוות מיומן זמין עבורכם 24/7 לכל סוגי הרכבים (פרטיים, מסחריים ו-4x4).
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו?</h2>
          <ul className="space-y-4 text-gray-700">
            <li>✓ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>✓ הגעה מהירה לכל נקודה בצ'ק פוסט ובקריות.</li>
            <li>✓ מחירים הוגנים ושקופים ללא הפתעות.</li>
            <li>✓ שירות מקצועי לרכבים פרטיים, מסחריים ורכבי שטח.</li>
            <li>⚠️ שים לב: איננו מספקים שירותי גרירה לאופנועים.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}