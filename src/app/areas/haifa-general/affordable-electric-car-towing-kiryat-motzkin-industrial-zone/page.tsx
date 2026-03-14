import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרירת רכב חשמלי באזור התעשייה קריית מוצקין | שירות 24/7",
  description: "נתקעת עם רכב חשמלי באזור התעשייה קריית מוצקין? אנו מציעים שירותי גרירה מקצועיים, בטוחים ובמחיר הוגן. זמינים עבורך בכל שעה."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Kiryat Motzkin",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8350",
      "longitude": "35.0750"
    },
    "serviceType": "Electric Vehicle Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">גרירת רכב חשמלי באזור התעשייה קריית מוצקין</h1>
          <p className="text-lg md:text-xl mb-8">
            נתקעת עם הרכב החשמלי באזור התעשייה? אנו מתמחים בפינוי בטוח של רכבים חשמליים והיברידיים. 
            הצוות שלנו ערוך לטיפול מקצועי תוך שמירה על רכיבי הרכב הרגישים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לגרירת רכב חשמלי?</h2>
        <ul className="list-disc pr-6 space-y-2">
          <li>מומחיות בטיפול ברכבים חשמליים והיברידיים.</li>
          <li>זמינות מלאה 24/7 באזור התעשייה קריית מוצקין.</li>
          <li>ציוד גרירה מתקדם המותאם למשקל ולמבנה של רכבים חשמליים.</li>
          <li>מחירים הוגנים ושירות אדיב.</li>
        </ul>
        <p className="mt-6 text-sm text-gray-600">
          *חשוב לציין: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4. איננו מספקים שירותי גרירה לאופנועים.
        </p>
      </section>
    </main>
  );
}