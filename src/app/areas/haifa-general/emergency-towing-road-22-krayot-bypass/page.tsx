import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22 עוקף קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8190", "longitude": "35.0630" },
    "priceRange": "$",
    "serviceType": "Emergency Towing and Roadside Assistance"
  };

  return (
    <main className="bg-neutral-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">שירותי גרירה דחופים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? צוות החילוץ שלנו בדרך אליכם. מענה מהיר, מקצועי ובטוח.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים בכביש 22</h2>
        <p className="mb-4">אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4 לאורך כביש 22. הצוות שלנו מכיר את הציר היטב ויודע להגיע לכל נקודה במהירות שיא.</p>
        <p className="text-red-400 font-semibold mb-6">שים לב: אנו לא מספקים שירותי גרירה לאופנועים.</p>
        
        <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
          <h3 className="text-2xl font-bold mb-4">למה לפנות אלינו?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות 24/7 ללא הפסקה.</li>
            <li>מחירים הוגנים ושקופים.</li>
            <li>ציוד חילוץ חדיש המותאם לרכבים מודרניים.</li>
            <li>ניסיון רב בחילוץ בכבישים מהירים.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}