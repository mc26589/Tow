import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | שירות מהיר ומקצועי",
  description: "מחפשים מי קונה רכבים לפירוק בחיפה והקריות? אנו קונים רכבים ישנים, תקולים ולאחר תאונה במחירים הוגנים. שירות מהיר, אמין ומקצועי. צרו קשר עוד היום."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פינוי וקניית רכבים לפירוק חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות</h1>
          <p className="text-xl mb-8">שירות מקצועי לפינוי וקניית רכבים לפירוק. אנו קונים רכבים פרטיים, מסחריים ורכבי 4x4 במחירים הוגנים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לקניית הרכב שלכם?</h2>
        <p className="mb-4">אנו מתמחים בפינוי רכבים לפירוק בחיפה והקריות ומציעים שירות מהיר ללא כאב ראש. אנו מטפלים בכל סוגי הרכבים (פרטיים, מסחריים, 4x4). שימו לב: איננו מטפלים באופנועים.</p>
        <ul className="list-disc list-inside space-y-2">
          <li>הצעת מחיר הוגנת בטלפון</li>
          <li>פינוי מהיר מהשטח</li>
          <li>טיפול מלא בבירוקרטיה</li>
          <li>שירות אמין ומקצועי לתושבי הצפון</li>
        </ul>
      </section>
    </main>
  );
}