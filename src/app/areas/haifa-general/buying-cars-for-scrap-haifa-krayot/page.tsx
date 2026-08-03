import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Car Scrap and Towing"
  };

  return (
    <main className="bg-slate-950 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק באזור חיפה והקריות</h1>
        <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או תקול? אנחנו כאן בשבילכם 24/7 עם שירות מקצועי, מהיר והוגן.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <WhatsAppCTA cityName="Haifa and Krayot" />
          <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-slate-200 transition">
            התקשרו עכשיו לקבלת הצעת מחיר
          </a>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">למה לבחור בנו לפירוק רכבים?</h2>
        <ul className="space-y-4 text-lg">
          <li>✓ שירות מהיר בכל אזור חיפה, הקריות והסביבה.</li>
          <li>✓ תשלום הוגן ומיידי עבור הרכב שלכם.</li>
          <li>✓ פינוי וגרירה ללא עלות נוספת.</li>
          <li>✓ טיפול מקצועי ברכבים פרטיים, מסחריים ורכבי 4x4.</li>
        </ul>
        <p className="mt-8 text-slate-400">
          *חשוב לציין: אנו מתמחים בפירוק רכבים פרטיים ומסחריים בלבד. איננו מספקים שירותי פירוק או גרירה לאופנועים.
        </p>
      </section>
    </main>
  );
}