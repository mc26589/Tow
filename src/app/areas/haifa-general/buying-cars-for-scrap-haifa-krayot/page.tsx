import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק באזור חיפה והקריות | שירות מהיר 24/7",
  description: "מחפשים מי קונה רכבים לפירוק באזור חיפה והקריות? אנו מציעים שירות פינוי רכבים לפירוק, גרירה חינם ותשלום הוגן. פנו אלינו עוד היום."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "Car Scrap and Towing",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" }
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק באזור חיפה והקריות</h1>
          <p className="text-xl mb-8">שירות מקצועי, מהיר ואמין לפינוי רכבים לפירוק. אנו קונים רכבים פרטיים, מסחריים ורכבי 4x4. שימו לב: איננו מטפלים באופנועים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפירוק רכבים בחיפה?</h2>
          <ul className="space-y-4 text-lg">
            <li>✓ שירות מהיר בכל אזור חיפה, הקריות והסביבה.</li>
            <li>✓ פינוי רכבים ללא עלות גרירה.</li>
            <li>✓ תשלום הוגן ומיידי עבור הרכב שלכם.</li>
            <li>✓ טיפול מקצועי בכל סוגי הרכבים (למעט אופנועים).</li>
          </ul>
        </div>
      </section>
    </main>
  );
}