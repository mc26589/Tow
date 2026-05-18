import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט והקריות",
    "areaServed": ["Haifa", "Krayot", "Check Post"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "35.0240"
    },
    "priceRange": "$",
    "serviceType": ["Towing", "Roadside Assistance"]
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול באזור צ'ק פוסט והקריות – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? אנחנו כאן בשבילכם עם שירות גרירה אמין, מהיר ובמחיר הוגן.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה באזור?</h2>
        <p className="mb-4">אנו מבינים את החשיבות של זמן תגובה מהיר כאשר הרכב מושבת. הצוות שלנו מכיר היטב את צירי התנועה בצ'ק פוסט ובקריות ומגיע אליכם בזמן הקצר ביותר.</p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>זמינות מלאה 24/7 לכל קריאה</li>
          <li>מחירים הוגנים ושקופים</li>
          <li>ציוד גרירה חדיש ומתוחזק</li>
          <li>מומחיות ברכבים פרטיים, מסחריים ו-4x4</li>
        </ul>
        <p className="text-sm text-neutral-400 italic">* שימו לב: איננו מספקים שירותי גרירה לאופנועים.</p>
      </section>
    </main>
  );
}