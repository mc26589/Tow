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
    "serviceType": "Towing and Roadside Assistance for cars and commercial vehicles"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירת אופנועים כבדים באחוזה חיפה</h1>
          <p className="text-xl mb-8">חשוב לדעת: אנו מתמחים בגרירת רכבים ורכבי שטח. איננו מספקים שירותי גרירה לאופנועים.</p>
          <div className="flex gap-4">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-6 py-3 rounded-lg font-bold">
              חיוג מהיר לסיוע ברכב
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שירותי גרירה וחילוץ באחוזה</h2>
          <p className="mb-4">
            אנו מבינים את החשיבות של מענה מהיר כאשר הרכב נתקע. למרות שאיננו מטפלים באופנועים, הצוות שלנו עומד לרשותכם 24/7 עבור:
          </p>
          <ul className="list-disc pr-6 mb-6">
            <li>גרירת רכבים פרטיים מכל הסוגים</li>
            <li>חילוץ רכבי 4x4 ורכבים מסחריים</li>
            <li>שירותי דרך מקצועיים באזור אחוזה והסביבה</li>
            <li>מחירים הוגנים ושירות אדיב</li>
          </ul>
          <p>צרו קשר לקבלת הצעת מחיר בטלפון וסיוע מיידי.</p>
        </div>
      </section>
    </main>
  );
}