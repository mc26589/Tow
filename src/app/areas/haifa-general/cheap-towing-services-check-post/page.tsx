import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
    "areaServed": "Haifa and Krayot",
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
    "serviceType": ["Towing Service", "Roadside Assistance"]
  };

  return (
    <main className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה זולים באזור צ'ק פוסט</h1>
          <p className="text-xl mb-8">נתקעתם בצ'ק פוסט? אנחנו כאן כדי לחלץ אתכם במהירות ובמחיר הוגן.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה בצ'ק פוסט?</h2>
        <p className="mb-4">אנו מתמחים בחילוץ רכבים פרטיים, רכבים מסחריים ורכבי 4x4. חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים.</p>
        <ul className="list-disc list-inside space-y-2">
          <li>זמינות מלאה 24/7 לכל אזור צ'ק פוסט והקריות.</li>
          <li>מחירים הוגנים ושקופים ללא הפתעות.</li>
          <li>צוות מקצועי ומנוסה בטיפול בדרכים.</li>
          <li>ציוד גרירה חדיש המבטיח שמירה על הרכב שלכם.</li>
        </ul>
      </section>
    </main>
  );
}