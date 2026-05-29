import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  return (
    <main>
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול בצומת צ'ק פוסט</h1>
          <p className="text-xl mb-8">
            זקוקים לשירותי גרירה בצומת צ'ק פוסט? אנו מציעים מענה מיידי, מקצועי ובמחיר הוגן לכל סוגי הרכבים הפרטיים, המסחריים ורכבי השטח. 
            חשוב לציין: אנו מתמחים ברכבים בלבד ואיננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה בצ'ק פוסט?</h2>
        <ul className="space-y-4 text-lg">
          <li>✓ זמינות מלאה 24/7 לכל קריאה באזור צומת צ'ק פוסט והסביבה.</li>
          <li>✓ מחירים הוגנים ושקופים ללא הפתעות.</li>
          <li>✓ צוות מיומן עם ציוד גרירה חדיש ובטוח.</li>
          <li>✓ התמחות ברכבים פרטיים, מסחריים ו-4x4.</li>
        </ul>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoTowing",
            "name": "שירותי גרירה צ'ק פוסט",
            "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
            "priceRange": "$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "geo": { "@type": "GeoCoordinates", "latitude": "32.7936", "longitude": "35.0253" },
            "serviceType": "Towing Service"
          }),
        }}
      />
    </main>
  );
}