import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": "Kiryat Yam",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8350",
      "longitude": "35.0650"
    },
    "priceRange": "$",
    "serviceType": "Roadside Assistance, Flat Tire Change"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">סיוע בדרכים והחלפת גלגל באזור חוף קריית ים</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            נתקעתם עם פנצ'ר בחוף קריית ים? אנו כאן בשבילכם 24/7. שירות מקצועי לרכבים פרטיים, מסחריים ורכבי 4x4. 
            חשוב לציין: איננו מספקים שירותי גרירה או חילוץ לאופנועים.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לסיוע מיידי
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בקריית ים?</h2>
          <ul className="space-y-4 text-gray-300">
            <li>✓ הגעה מהירה לכל אזור חוף קריית ים והסביבה.</li>
            <li>✓ צוות מיומן ומקצועי להחלפת גלגל בבטחה.</li>
            <li>✓ מחירים הוגנים ושירות אדיב ללא הפתעות.</li>
            <li>✓ זמינות מלאה מסביב לשעון, גם בסופי שבוע.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}