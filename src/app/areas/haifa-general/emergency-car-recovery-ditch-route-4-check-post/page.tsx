import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ רכב מתעלה בכביש 4 צומת צ'ק פוסט | שירות 24/7",
  description: "נתקעתם בתעלה בכביש 4 ליד צומת צ'ק פוסט? צוות חילוץ מקצועי בדרך אליכם. שירות מהיר, אמין ומחירים הוגנים לכל סוגי הרכבים."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה קריות וחיפה",
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
      "longitude": "35.0340"
    },
    "serviceType": "Emergency Car Recovery"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב מתעלה בכביש 4 ליד צומת צ'ק פוסט קריות</h1>
          <p className="text-xl mb-8">זקוקים לחילוץ דחוף? הרכב נפל לתעלה? אנו כאן בשבילכם 24 שעות ביממה.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">שירותי חילוץ מקצועיים באזור הקריות</h2>
          <p className="mb-4">אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4 שסטו מהכביש או נתקעו בתעלות ניקוז לאורך כביש 4. חשוב לציין: אנו לא מספקים שירותי חילוץ או גרירה לאופנועים.</p>
          <p>הצוות שלנו מגיע מצויד בכלים המתאימים ביותר כדי להבטיח שהרכב שלכם יחולץ במינימום נזק ובמהירות המקסימלית. אנו מציעים מחירים הוגנים ושירות אדיב לכל תושבי האזור.</p>
        </div>
      </section>
    </main>
  );
}