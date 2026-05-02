import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | שירות מהיר ומקצועי",
  description: "מחפשים מי קונה רכבים לפירוק בחיפה והקריות? אנו מציעים שירות פינוי רכבים לפירוק במחירים הוגנים. שירות מהיר, אמין ומקצועי לכל סוגי הרכבים.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Car Scrap and Towing"
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
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או תקול? אנו כאן בשבילכם עם שירות מהיר, אמין ומחירים הוגנים.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפירוק רכבים?</h2>
          <p className="mb-4">אנו מתמחים בקניית רכבים לפירוק בחיפה והקריות ומעניקים שירות מקצועי ללא כאב ראש. בין אם הרכב עבר תאונה, סובל מתקלה מכנית קשה או פשוט ישן מדי, אנו נדאג לפינויו המהיר.</p>
          <ul className="list-disc pr-6 mb-6">
            <li>שירות מהיר בכל אזור חיפה והקריות.</li>
            <li>מחירים הוגנים עבור הרכב שלכם.</li>
            <li>פינוי מקצועי ללא עלות נוספת.</li>
            <li>טיפול בכל סוגי הרכבים הפרטיים, המסחריים ורכבי 4x4.</li>
          </ul>
          <p className="text-sm text-gray-600 italic">*הערה: אנו לא מטפלים באופנועים. השירות מיועד לרכבים בלבד.</p>
        </div>
      </section>
    </main>
  );
}