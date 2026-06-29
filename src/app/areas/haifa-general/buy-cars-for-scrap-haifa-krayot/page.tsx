import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | שירות מהיר 24/7",
  description: "מחפשים מי קונה רכבים לפירוק בחיפה והקריות? אנו מציעים שירות פינוי רכבים ישנים, תקולים או לאחר תאונה במחירים הוגנים. שירות מקצועי ומהיר."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פירוק רכבים חיפה והקריות",
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
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפירוק רכבים?</h2>
        <p className="mb-4">אנו מתמחים בפינוי רכבים מכל הסוגים בחיפה והקריות. בין אם הרכב שלכם עבר תאונה, סובל מתקלה מכנית יקרה או פשוט ישן מדי, אנו כאן כדי לתת לכם מענה מהיר.</p>
        <ul className="list-disc pr-6 space-y-2">
          <li>שירות מהיר ומקצועי בכל אזור חיפה והקריות.</li>
          <li>קניית רכבים לפירוק במחירים הוגנים.</li>
          <li>טיפול מלא בכל הבירוקרטיה מול משרד התחבורה.</li>
          <li>פינוי רכבים פרטיים, מסחריים ורכבי 4x4.</li>
        </ul>
        <p className="mt-6 text-red-600 font-bold">הערה חשובה: אנו לא מטפלים באופנועים. השירות מיועד לרכבים בלבד.</p>
      </section>
    </main>
  );
}