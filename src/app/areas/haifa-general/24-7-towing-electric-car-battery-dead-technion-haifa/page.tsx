import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי בטכניון חיפה | שירות 24/7",
  description: "נתקעתם עם רכב חשמלי בטכניון? שירות גרירה מקצועי 24/7 לרכבים חשמליים בחיפה והקריות. מחירים הוגנים ושירות מהיר."
};

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
      "latitude": "32.7775",
      "longitude": "35.0217"
    },
    "priceRange": "$",
    "serviceType": "Electric Vehicle Towing and Battery Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירות גרירה 24/7 לרכב חשמלי עם מצבר פרוק בטכניון חיפה</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעתם בטכניון עם רכב חשמלי שהמצבר שלו התרוקן? אנו מתמחים בחילוץ וגרירת רכבים חשמליים, רכבים פרטיים ורכבי 4x4. 
            שימו לב: איננו מספקים שירותי גרירה לאופנועים.
          </p>
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

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו?</h2>
        <ul className="space-y-4 text-lg">
          <li>✅ זמינות מלאה 24/7 בכל אזור חיפה והטכניון.</li>
          <li>✅ מומחיות בטיפול ברכבים חשמליים ומערכות מצברים.</li>
          <li>✅ מחירים הוגנים ושקופים ללא הפתעות.</li>
          <li>✅ ציוד גרירה מתקדם המותאם לרכבים מודרניים.</li>
        </ul>
      </section>
    </main>
  );
}