import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

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
      "latitude": "32.7940",
      "longitude": "34.9896"
    },
    "priceRange": "$",
    "serviceType": "Car Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר לאופנוע כבד באחוזה חיפה - שירותי גרירה מקצועיים לרכבים</h1>
          <p className="text-xl mb-8">אנו מתמחים בגרירת רכבים פרטיים, מסחריים ו-4x4. שים לב: איננו מספקים שירותי גרירה לאופנועים.</p>
          <div className="flex flex-col sm:flex-row gap-4">
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
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שירותי גרירה וחילוץ באחוזה</h2>
          <p className="mb-4">נתקעת עם הרכב באזור אחוזה? הצוות שלנו ערוך ומוכן להגיע אליך במהירות. אנו מציעים שירות מקצועי, אמין ובמחירים הוגנים לכל סוגי הרכבים (למעט אופנועים).</p>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות 24/7 בכל אזור חיפה והקריות</li>
            <li>ציוד גרירה מתקדם לרכבים פרטיים ומסחריים</li>
            <li>צוות מיומן ומנוסה</li>
            <li>הצעת מחיר הוגנת ושקופה בטלפון</li>
          </ul>
        </div>
      </section>
    </main>
  );
}