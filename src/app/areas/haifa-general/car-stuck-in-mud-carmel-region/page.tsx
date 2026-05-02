import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ באזור הכרמל | שירות 24/7",
  description: "נתקעתם בבוץ באזור הכרמל? אנו מציעים שירותי חילוץ רכב מקצועיים, מהירים ובמחירים הוגנים. זמינים 24/7 לכל סוגי הרכבים."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Car Recovery and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות שלנו בדרך אליכם. שירות חילוץ מקצועי לרכבים פרטיים ו-4x4.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
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

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי חילוץ מקצועיים בכרמל</h2>
        <p className="mb-4">
          אנו מתמחים בחילוץ רכבים ששקעו בבוץ באזור הכרמל. חשוב לציין: אנו מעניקים שירות לרכבים פרטיים, מסחריים ורכבי שטח (4x4). <strong>איננו מספקים שירותי חילוץ או גרירה לאופנועים.</strong>
        </p>
        <p>
          הצוות שלנו מכיר את כל דרכי העפר והאזורים המועדים לפורענות בכרמל. אנו מגיעים עם הציוד המתאים כדי להבטיח שהרכב שלכם יחולץ בבטחה ובמינימום זמן. צרו קשר לקבלת הצעת מחיר בטלפון.
        </p>
      </section>
    </main>
  );
}