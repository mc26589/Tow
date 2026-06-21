import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ שטח בוץ בכרמל לרכב פרטי | שירות 24/7",
  description: "נתקעתם בבוץ בכרמל? אנו מספקים שירותי חילוץ שטח מהירים לרכבים פרטיים באזור חיפה והקריות. מחירים הוגנים ומענה מיידי."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "חילוץ רכב בחיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Off-road mud rescue for private vehicles"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ שטח בוץ בכרמל לרכב פרטי</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? הצוות שלנו בדרך אליכם. שירות מקצועי לרכבים פרטיים בלבד.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות חילוץ שטח מקצועי</h2>
        <p className="mb-4">אנו מתמחים בחילוץ רכבים פרטיים ששקעו בבוץ באזור הכרמל. חשוב לציין: אנו מספקים שירות לרכבים פרטיים, רכבי שטח ומסחריים בלבד. איננו מספקים שירותי חילוץ לאופנועים.</p>
        <p>השירות ניתן במחירים הוגנים עם דגש על בטיחות הרכב שלכם.</p>
      </section>
    </main>
  );
}