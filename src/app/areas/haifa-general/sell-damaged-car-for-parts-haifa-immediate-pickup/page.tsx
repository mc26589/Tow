import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "מכירת רכב תקול לפירוק בחיפה | פינוי מיידי",
  description: "מעוניינים למכור רכב תקול לפירוק בחיפה והקריות? אנו מציעים פינוי מיידי, שירות מקצועי ומחירים הוגנים. צרו קשר עכשיו."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים חיפה",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Car Removal and Scrap"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">מכירת רכב תקול לפירוק בחיפה – פינוי מיידי מהשטח</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב מושבת? אנו כאן עבורכם עם שירות מהיר, אמין ומקצועי בכל אזור חיפה והקריות.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">פינוי רכבים לפירוק בחיפה – שירות מהיר</h2>
        <p className="mb-4">אם הרכב שלכם אינו נוסע, עבר תאונה או שפשוט הגיע הזמן להיפרד ממנו, אנו הכתובת שלכם. אנו מתמחים בפינוי רכבים פרטיים, מסחריים ורכבי 4x4.</p>
        <p className="mb-4"><strong>חשוב להבהיר:</strong> אנו מתמקדים בפינוי רכבים בלבד ואיננו מספקים שירותי גרירה או פינוי לאופנועים.</p>
        <div className="bg-gray-100 p-6 rounded-xl mt-8">
          <h3 className="text-2xl font-semibold mb-4">למה לבחור בנו?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>פינוי מיידי מהשטח בחיפה והקריות.</li>
            <li>טיפול בכל סוגי הרכבים (למעט אופנועים).</li>
            <li>הצעת מחיר הוגנת ומשתלמת.</li>
            <li>שירות אדיב ומקצועי 24/7.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}