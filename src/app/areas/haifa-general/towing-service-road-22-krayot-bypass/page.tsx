import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרירת רכב תקוע בכביש 22 עוקף קריות | שירות 24/7",
  description: "נתקעתם בכביש 22 עוקף קריות? שירותי גרירה וחילוץ רכב מהירים ומקצועיים. זמינות 24/7, מחירים הוגנים. התקשרו עכשיו לסיוע מיידי."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22 עוקף קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "גרירת רכב וחילוץ דרך",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8156", "longitude": "35.0650" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרירת רכב תקוע בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? הצוות שלנו זמין עבורכם 24/7 לחילוץ מהיר ומקצועי בכביש 22.</p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה מקצועיים באזור הקריות</h2>
        <p className="mb-4">אנו מתמחים במתן מענה מהיר לרכבים תקועים בכביש 22. אנו מציעים מחירים הוגנים ושירות אדיב לכל סוגי הרכבים הפרטיים, המסחריים ורכבי 4x4.</p>
        <p className="text-red-600 font-semibold">שימו לב: איננו מספקים שירותי גרירה לאופנועים.</p>
      </section>
    </main>
  );
}