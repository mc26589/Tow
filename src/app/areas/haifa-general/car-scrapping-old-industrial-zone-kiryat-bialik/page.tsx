import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": "קרית ביאליק",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8285",
      "longitude": "35.0715"
    },
    "priceRange": "$",
    "serviceType": "קניית רכבים לפירוק וברזל"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק וברזל באזור התעשייה הישן של קרית ביאליק</h1>
          <p className="text-lg md:text-xl mb-8">פינוי מהיר, שירות אמין ותשלום הוגן במקום. אנו כאן לכל צורך ברכב מושבת או ישן.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              חייגו עכשיו לבירור מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">למה לבחור בנו לפירוק רכבים בקרית ביאליק?</h2>
        <p className="mb-4">אנו מציעים שירות מקצועי באזור התעשייה הישן של קרית ביאליק. אנו קונים רכבים פרטיים, מסחריים ורכבי 4x4 במצבם הנוכחי. השירות כולל גרירה ופינוי מהיר ללא עלות נוספת.</p>
        <p className="text-red-400 font-semibold">חשוב להבהיר: איננו מטפלים באופנועים או בכל סוג של כלי רכב דו-גלגלי.</p>
      </section>
    </main>
  );
}