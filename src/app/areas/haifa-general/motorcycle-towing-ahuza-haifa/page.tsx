import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר לאופנוע כבד באחוזה חיפה - שירותי גרירה מקצועיים לרכבים</h1>
          <p className="text-xl mb-8">אנו מתמחים בגרירת רכבים פרטיים, מסחריים ו-4x4. שימו לב: איננו מספקים שירותי גרירה לאופנועים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg">
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שירותי גרירה באחוזה - זמינות 24/7</h2>
          <p className="mb-4">נתקעת עם הרכב באזור אחוזה? הצוות שלנו ערוך ומוכן להגיע אליך במהירות. אנו מציעים שירותי גרירה מקצועיים במחירים הוגנים לכל סוגי הרכבים (למעט אופנועים).</p>
          <ul className="list-disc list-inside space-y-2">
            <li>חילוץ רכבים תקועים 24 שעות ביממה</li>
            <li>שירות מהיר באזור אחוזה וחיפה</li>
            <li>צוות מיומן ומקצועי</li>
            <li>מחירים הוגנים ושקופים</li>
          </ul>
        </div>
      </section>
    </main>
  );
}