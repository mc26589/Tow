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
      "latitude": "32.8191",
      "longitude": "35.0633"
    },
    "serviceType": "Emergency Roadside Assistance and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">גרר רכבים תקועים בכביש 22 עוקף קריות – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בכביש 22? הצוות שלנו בדרך אליכם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg">
              התקשרו עכשיו להזמנת גרר
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי חילוץ וגרירה בכביש 22</h2>
        <p className="mb-4">
          אם נתקעתם עם הרכב בכביש 22 (עוקף קריות), אנו כאן כדי להעניק לכם מענה מהיר ובטוח. אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4. 
          הצוות שלנו מכיר היטב את צירי התנועה בחיפה והקריות ומבטיח הגעה מהירה לכל נקודה בכביש.
        </p>
        <p className="font-semibold text-red-600">
          חשוב: אנו לא מספקים שירותי גרירה לאופנועים.
        </p>
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">למה לבחור בנו?</h3>
          <ul className="list-disc pr-5 space-y-2">
            <li>זמינות מלאה 24/7 לכל מקרה חירום.</li>
            <li>מחירים הוגנים ושקיפות מלאה.</li>
            <li>ציוד גרירה חדיש ומקצועי.</li>
            <li>ניסיון רב בחילוץ בכבישים מהירים.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}