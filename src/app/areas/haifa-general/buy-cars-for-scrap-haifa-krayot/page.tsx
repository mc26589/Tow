import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | שירות מהיר ומקצועי",
  description: "מחפשים מי שקונה רכבים לפירוק בחיפה והקריות? אנו מציעים שירות פינוי רכבים ישנים, תקולים או לאחר תאונה במחירים הוגנים. שירות מהיר 24/7."
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
    <main className="bg-neutral-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות</h1>
          <p className="text-xl mb-8">שירות מקצועי לפינוי רכבים ישנים, תקולים או לאחר תאונה. הצעת מחיר הוגנת ושירות מהיר.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              התקשרו עכשיו
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפירוק רכבים?</h2>
        <p className="mb-4">אנו מתמחים ברכישת רכבים לפירוק בחיפה והקריות. השירות שלנו כולל פינוי מהיר של רכבים פרטיים, מסחריים ורכבי 4x4. אנו מציעים מחירים הוגנים עבור הרכב שלכם ומבצעים את כל התהליך בצורה מסודרת.</p>
        <p className="text-red-400 font-semibold">חשוב להבהיר: אנו לא מטפלים באופנועים מכל סוג שהוא.</p>
      </section>
    </main>
  );
}