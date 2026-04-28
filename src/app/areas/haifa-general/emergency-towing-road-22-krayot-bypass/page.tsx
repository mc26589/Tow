import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22 עוקף קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "Emergency Towing and Roadside Assistance",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8191", "longitude": "35.0553" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה דחופים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם בכביש 22? אנחנו בדרך אליכם. שירות מקצועי, מהיר ובטוח.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg">
              התקשרו עכשיו לסיוע
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">מענה מהיר לכל תקלה בכביש 22</h2>
        <p className="mb-4">אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4. חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.</p>
        <p>הצוות שלנו ערוך לכל תרחיש ומבטיח פינוי בטוח מהכביש המהיר לכל יעד שתבחרו במחירים הוגנים.</p>
      </section>
    </main>
  );
}