import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | שירות מהיר ומקצועי",
  description: "מחפשים מי קונה רכבים לפירוק בחיפה והקריות? אנו מציעים שירות פינוי רכבים לפירוק, רכבים לאחר תאונה ורכבים ללא טסט. שירות אמין, מהיר ומקצועי."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "34.9896"
    },
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
          <p className="text-xl mb-8">שירות מקצועי לפינוי וקניית רכבים לפירוק. אנו מגיעים לכל נקודה בחיפה ובקריות במהירות.</p>
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
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפירוק הרכב שלכם?</h2>
        <p className="mb-4">אנו מתמחים ברכישת רכבים לפירוק מכל הסוגים: רכבים ישנים, רכבים מושבתים, רכבים לאחר תאונות קשות או רכבים ללא טסט. השירות שלנו מותאם לתושבי חיפה והקריות ומבטיח פינוי מהיר ללא עלות נוספת.</p>
        <ul className="list-disc pr-6 space-y-2">
          <li>קניית רכבים לפירוק במחירים הוגנים.</li>
          <li>פינוי מהיר מהשטח ללא עלות גרירה.</li>
          <li>טיפול מלא בכל הבירוקרטיה מול משרד התחבורה.</li>
          <li>שירות אמין, שקוף ומקצועי.</li>
        </ul>
        <p className="mt-6 text-sm text-gray-600">
          *הערה: אנו מתמחים ברכבים פרטיים, מסחריים ורכבי שטח בלבד. איננו מספקים שירותי פירוק או גרירה לאופנועים.
        </p>
      </section>
    </main>
  );
}