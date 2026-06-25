import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": ["Haifa", "Check Post", "Krayot"],
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
      "longitude": "35.0230"
    },
    "serviceType": ["Towing Service", "Roadside Assistance"]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול באזור צ'ק פוסט והקריות – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? אנחנו כאן בשבילכם עם שירות גרירה אמין, מהיר ובמחיר הוגן.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg">
              התקשרו עכשיו להצעת מחיר
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה?</h2>
          <p className="mb-4">אנו מבינים את החשיבות של זמן התגובה כאשר הרכב נתקע. הצוות שלנו מכיר היטב את אזור צ'ק פוסט והקריות ומגיע לכל נקודה במהירות שיא.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות מלאה 24/7 לכל קריאה.</li>
            <li>מחירים הוגנים ושקופים ללא הפתעות.</li>
            <li>ציוד גרירה חדיש המתאים לרכבים פרטיים, מסחריים ו-4x4.</li>
            <li>שירות מקצועי ואדיב.</li>
          </ul>
          <p className="mt-6 text-sm text-gray-400">*הערה: אנו מתמחים בגרירת רכבים בלבד ואיננו מספקים שירותי גרירה לאופנועים.</p>
        </div>
      </section>
    </main>
  );
}