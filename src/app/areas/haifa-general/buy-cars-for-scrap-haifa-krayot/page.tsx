import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | שירות מהיר 24/7",
  description: "מחפשים מי קונה רכבים לפירוק בחיפה והקריות? אנו מציעים שירות מקצועי, פינוי מהיר ותשלום הוגן עבור רכבים ישנים, מושבתים או לאחר תאונה."
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
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות</h1>
          <p className="text-xl md:text-2xl mb-8">שירות מקצועי, מהיר ואמין לפינוי רכבים מכל סוג. הצעת מחיר הוגנת בטלפון.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition-colors"
            >
              חייגו עכשיו לשיחת ייעוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפירוק רכבים?</h2>
        <p className="mb-4">אנו מתמחים ברכישת רכבים לפירוק בחיפה והקריות. אם הרכב שלכם ישן, תקול, או עבר תאונה, אנו הכתובת שלכם. אנו מספקים שירות גרירה ללא עלות ומטפלים בכל הבירוקרטיה מול משרד התחבורה.</p>
        <p className="text-red-400 font-semibold">חשוב להבהיר: השירות שלנו מיועד לרכבים פרטיים, מסחריים ורכבי שטח בלבד. איננו מטפלים באופנועים או דו-גלגלי.</p>
      </section>
    </main>
  );
}