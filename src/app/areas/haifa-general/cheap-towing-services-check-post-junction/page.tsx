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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירותי גרירה זולים בצומת צ'ק פוסט – זמינות מיידית 24/7</h1>
          <p className="text-lg mb-8 max-w-2xl">
            נתקעתם עם הרכב באזור צומת צ'ק פוסט? אנו מציעים שירותי גרירה מקצועיים, מהירים ובמחירים הוגנים. 
            אנו מתמחים בחילוץ וגרירת רכבים פרטיים, רכבים מסחריים ורכבי 4x4. 
            חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">למה לבחור בנו בצומת צ'ק פוסט?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>מחירים הוגנים ושקופים ללא הפתעות.</li>
            <li>צוות מיומן המכיר היטב את עומסי התנועה באזור הצ'ק פוסט.</li>
            <li>ציוד גרירה חדיש המבטיח שמירה על הרכב שלכם.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}