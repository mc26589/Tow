import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים",
    "areaServed": "Kiryat Yam",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8357",
      "longitude": "35.0686"
    },
    "priceRange": "$",
    "serviceType": "Car Scrap and Removal"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים ישנים לפירוק ופינוי מקרית ים</h1>
          <p className="text-xl mb-8">פינוי רכבים ישנים, רכבים ללא טסט ורכבים לאחר תאונה. שירות מהיר, אמין ומקצועי בקרית ים והסביבה.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="קרית ים" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
          <p className="mb-4">אנו מתמחים בפינוי רכבים ישנים ורכבים לפירוק. השירות שלנו כולל גרירה מהירה מכל נקודה בקרית ים, תשלום הוגן במקום וטיפול מקצועי בכל סוגי הרכבים הפרטיים והמסחריים.</p>
          <p className="text-sm text-gray-400 italic">* שימו לב: אנו לא מספקים שירותי פינוי או גרירה לאופנועים.</p>
        </div>
      </section>
    </main>
  );
}