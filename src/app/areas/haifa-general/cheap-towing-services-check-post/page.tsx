import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
    "areaServed": "צ'ק פוסט, חיפה והקריות",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7885",
      "longitude": "35.0253"
    },
    "serviceType": ["גרירת רכבים", "חילוץ רכבים", "שירותי דרך"]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה זולים באזור צ'ק פוסט</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב באזור צ'ק פוסט? אנו מציעים שירותי גרירה מקצועיים, מהירים ובמחירים הוגנים. 
            אנו מתמחים בגרירת רכבים פרטיים, רכבים מסחריים ורכבי 4x4. 
            חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="צ'ק פוסט" />
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
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו באזור צ'ק פוסט?</h2>
          <ul className="space-y-4 text-lg">
            <li>✓ זמינות מלאה 24/7 לכל קריאה באזור צ'ק פוסט והסביבה.</li>
            <li>✓ מחירים הוגנים ושקופים ללא הפתעות.</li>
            <li>✓ צוות מיומן ומקצועי עם ציוד גרירה חדיש.</li>
            <li>✓ הגעה מהירה לכל נקודה בצומת צ'ק פוסט והכבישים הסמוכים.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}