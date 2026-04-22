import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר לאופנוע כבד באחוזה חיפה - שירותי גרירה לרכבים ורכבי שטח</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            חשוב לציין: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4 בלבד. איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים בחיפה</h2>
        <p className="mb-4">
          אם נתקעת עם רכבך באזור אחוזה או בכל נקודה בחיפה והקריות, הצוות שלנו עומד לרשותך 24/7. 
          אנו מציעים שירותי גרירה אמינים, מהירים ובמחירים הוגנים לכל סוגי הרכבים (למעט אופנועים).
        </p>
        <ul className="list-disc list-inside space-y-2 mt-6">
          <li>גרירת רכבים פרטיים ומשפחתיים</li>
          <li>חילוץ רכבי שטח ו-4x4</li>
          <li>גרירת רכבים מסחריים</li>
          <li>זמינות מלאה בכל שעות היממה</li>
        </ul>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
              "latitude": "32.7940",
              "longitude": "34.9896"
            },
            "priceRange": "$",
            "serviceType": "Car Towing and Roadside Assistance"
          }),
        }}
      />
    </main>
  );
}