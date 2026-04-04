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
    "serviceType": "Electric Vehicle Towing and Battery Rescue"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            גרירה 24/7 לרכב חשמלי עם מצבר פרוק בשכונת אחוזה, חיפה
          </h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעת עם הרכב החשמלי באחוזה? אנו מספקים שירותי חילוץ וגרירה מקצועיים לרכבים חשמליים, רכבים פרטיים ורכבי 4x4. שירות מהיר, אמין ובמחירים הוגנים.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לחילוץ הרכב החשמלי שלך?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>זמינות מלאה 24/7 בכל אזור אחוזה וחיפה.</li>
          <li>מומחיות בטיפול ברכבים חשמליים ומערכות מתח גבוה.</li>
          <li>ציוד גרירה מתקדם המבטיח שמירה על הרכב.</li>
          <li>הגעה מהירה לכל נקודה בשכונה.</li>
          <li>שירות אדיב ומקצועי במחירים הוגנים.</li>
        </ul>
        <p className="mt-6 text-sm text-gray-600">
          *שימו לב: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ו-4x4. איננו מספקים שירותי גרירה לאופנועים.
        </p>
      </section>
    </main>
  );
}