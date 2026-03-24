import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": "Kiryat Haim Industrial Zone",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8150",
      "longitude": "35.0650"
    },
    "priceRange": "$",
    "serviceType": "Heavy Duty Truck Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירות גרירת משאיות כבדות באזור התעשייה קריית חיים</h1>
          <p className="text-lg mb-8">זקוקים לחילוץ דחוף? אנו מתמחים בגרירת משאיות, רכבים מסחריים ורכבי 4x4. שירות מקצועי, מהיר ובטוח 24/7.</p>
          <div className="flex gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-6 py-3 rounded-lg font-bold">
              התקשרו עכשיו
            </a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">למה לבחור בנו?</h2>
          <p className="mb-4">אנו מבינים את החשיבות של זמן השבתה עבור משאיות ורכבים כבדים. הצוות שלנו מיומן בטיפול במצבים מורכבים באזור התעשייה של קריית חיים.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>ציוד גרירה ייעודי למשקלים כבדים.</li>
            <li>מחירים הוגנים ושקיפות מלאה.</li>
            <li>שימו לב: איננו מספקים שירותי גרירה לאופנועים.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}