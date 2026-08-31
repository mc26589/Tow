import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט והקריות",
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
      "longitude": "35.0240"
    },
    "serviceType": ["Emergency Towing", "Roadside Assistance"]
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
          <p className="text-xl mb-8">נתקעתם בדרך? אנו כאן בשבילכם עם שירות גרירה אמין, מהיר ובמחיר הוגן לכל סוגי הרכבים.</p>
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
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה בצ'ק פוסט והקריות?</h2>
        <p className="mb-4">אנו מבינים את החשיבות של זמן התגובה כאשר הרכב נתקע. הצוות שלנו מתמחה בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4 באזור צ'ק פוסט, מפרץ חיפה והקריות.</p>
        <p className="mb-4 font-semibold text-red-600">חשוב להבהיר: אנו מתמחים ברכבים בלבד ואיננו מספקים שירותי גרירה לאופנועים.</p>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>מחירים הוגנים ושקופים ללא הפתעות.</li>
          <li>ציוד גרירה חדיש השומר על בטיחות הרכב שלכם.</li>
          <li>הגעה מהירה לכל נקודה בצ'ק פוסט והקריות.</li>
        </ul>
      </section>
    </main>
  );
}