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
      "latitude": "32.7940",
      "longitude": "34.9896"
    },
    "serviceType": "Car Towing and Roadside Assistance"
  };

  return (
    <main className="bg-neutral-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר לאופנוע כבד באחוזה חיפה - שירותי גרירה מקצועיים לרכבים</h1>
          <p className="text-xl mb-8">אנו מתמחים בגרירת רכבים, רכבי שטח ומסחריות. שימו לב: איננו מספקים שירותי גרירה לאופנועים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה באחוזה - מידע חשוב</h2>
        <p className="text-lg leading-relaxed mb-4">
          אנו מבינים את הצורך בשירות מהיר באזור אחוזה והסביבה. בעוד שאיננו מטפלים באופנועים, אנו ערוכים לתת מענה מיידי לכל סוגי הרכבים האחרים.
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-300">
          <li>זמינות 24/7 לכל קריאה</li>
          <li>ציוד גרירה מתקדם לרכבים פרטיים ומסחריים</li>
          <li>מחירים הוגנים ושקופים</li>
          <li>צוות מיומן ומקצועי</li>
        </ul>
      </section>
    </main>
  );
}