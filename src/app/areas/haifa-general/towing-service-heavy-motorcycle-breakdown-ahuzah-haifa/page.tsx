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
    "serviceType": ["Car Towing", "Commercial Vehicle Recovery", "4x4 Rescue"]
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה וחילוץ באחוזה חיפה: רכבים פרטיים, מסחריים ו-4x4</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            חשוב להבהיר: איננו מספקים שירותי גרירה לאופנועים. אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח באזור אחוזה והסביבה. זמינות מלאה 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">מדוע לבחור בנו באזור אחוזה?</h2>
        <ul className="space-y-4 text-neutral-300">
          <li>✓ מענה מהיר לכל קריאה באזור אחוזה והכרמל.</li>
          <li>✓ ציוד חילוץ מתקדם לרכבים פרטיים, מסחריים ו-4x4.</li>
          <li>✓ שירות אמין, מקצועי ובמחירים הוגנים.</li>
          <li>✓ זמינות מלאה מסביב לשעון, גם בסופי שבוע וחגים.</li>
        </ul>
      </section>
    </main>
  );
}