import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי | שירות 24/7",
  description: "מחפשים קונה רכבים לפירוק בחיפה והקריות? אנו מציעים פינוי מיידי, הצעת מחיר הוגנת ושירות מקצועי לכל סוגי הרכבים. צרו קשר עכשיו!",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב ישן או מושבת? אנו כאן כדי לפנות אותו עבורכם במהירות ובמקצועיות.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי רכבים לפירוק?</h2>
        <p className="mb-4">אנו מספקים שירות אמין ומהיר לתושבי חיפה והקריות. אנו קונים רכבים פרטיים, מסחריים ורכבי 4x4 במצבם הנוכחי.</p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>פינוי מיידי מהשטח</li>
          <li>הצעת מחיר הוגנת בטלפון</li>
          <li>טיפול בכל סוגי הרכבים (למעט אופנועים)</li>
          <li>שירות מקצועי ואדיב 24/7</li>
        </ul>
        <p className="text-sm text-gray-600">*הערה: השירות אינו כולל אופנועים מכל סוג שהוא.</p>
      </section>
    </main>
  );
}