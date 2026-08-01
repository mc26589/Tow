import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
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
      "latitude": "32.8156",
      "longitude": "35.0653"
    },
    "serviceType": "Emergency Towing"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה דחופים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? צוות החילוץ שלנו בדרך אליכם עם מענה מהיר ומקצועי.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all"
            >
              חיוג מהיר לשירות גרירה
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בכביש 22?</h2>
        <p className="mb-4">אנו מבינים את הדחיפות שבחילוץ רכב בכביש מהיר כמו כביש 22. אנו מציעים מחירים הוגנים ושירות אמין ללא הפתעות.</p>
        <ul className="list-disc list-inside space-y-2">
          <li>זמינות 24/7 לכל אורך עוקף קריות.</li>
          <li>ציוד גרירה חדיש המתאים לרכבים פרטיים, מסחריים ו-4x4.</li>
          <li>הגעה מהירה לכל נקודה בציר.</li>
        </ul>
        <p className="mt-6 text-sm text-neutral-400">* שים לב: איננו מספקים שירותי גרירה לאופנועים.</p>
      </section>
    </main>
  );
}