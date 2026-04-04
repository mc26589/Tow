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
    "serviceType": "Towing Service for Cars and Commercial Vehicles"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">גרר לרכב לאחר תאונה בכביש 22 הקריות - שירות מקצועי ומהיר</h1>
          <p className="text-lg md:text-xl mb-8">זקוקים לסיוע לאחר תאונה? אנו כאן עבורכם 24/7 באזור חיפה והקריות.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו לסיוע
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">חשוב לדעת לגבי שירותי הגרירה שלנו</h2>
          <p className="mb-4">
            אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4. <strong>חשוב להדגיש: איננו מספקים שירותי גרירה לאופנועים, כולל אופנועים כבדים.</strong>
          </p>
          <p className="mb-4">
            אם נקלעתם לתאונה בכביש 22, הצוות שלנו יגיע במהירות כדי לפנות את הרכב שלכם בבטחה. אנו מציעים שירות אמין, מקצועי ובמחירים הוגנים לכל תושבי האזור.
          </p>
        </div>
      </section>
    </main>
  );
}