import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרר דחוף לכביש 22 עוקף קריות | שירות 24/7",
  description: "נתקעתם בכביש 22 עוקף קריות? גרר דחוף זמין עבורכם 24/7. שירות מקצועי לרכבים פרטיים ומסחריים. התקשרו עכשיו לסיוע מהיר."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "חיפה והקריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8191", "longitude": "35.0553" },
    "priceRange": "$",
    "serviceType": "Emergency Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר דחוף לכביש 22 עוקף קריות – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? הצוות שלנו בדרך אליכם.</p>
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
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה וחילוץ מקצועיים</h2>
        <p className="mb-4">אנו מספקים מענה מיידי לכל תקלה בכביש 22. הניסיון הרב שלנו מאפשר לנו לחלץ אתכם בבטחה ובמהירות.</p>
        <p className="text-sm text-gray-600 italic">* שימו לב: אנו מתמחים ברכבים פרטיים, רכבי שטח ומסחריות. איננו מספקים שירותי גרירה לאופנועים.</p>
      </section>
    </main>
  );
}