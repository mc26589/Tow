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
      "latitude": "32.7858",
      "longitude": "34.9855"
    },
    "priceRange": "$",
    "serviceType": "Electric Vehicle Towing and Rescue"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרירת רכב חשמלי עם סוללה ריקה בקניון גרנד קניון חיפה</h1>
          <p className="text-lg mb-8">נתקעתם עם רכב חשמלי ללא סוללה בגרנד קניון חיפה? אנו כאן עבורכם 24/7. אנו מתמחים בחילוץ רכבים חשמליים, רכבים פרטיים, רכבי 4x4 ורכבים מסחריים. שימו לב: איננו מספקים שירותי גרירה לאופנועים.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לחילוץ מהיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו?</h2>
          <ul className="space-y-4">
            <li>✓ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>✓ מומחיות בטיפול ברכבים חשמליים והיברידיים.</li>
            <li>✓ הגעה מהירה לכל נקודה בגרנד קניון ובאזור חיפה.</li>
            <li>✓ מחירים הוגנים ושירות אדיב ומקצועי.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}