import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "שירותי גרירה זולים בצומת צ'ק פוסט | זמינות 24/7",
  description: "זקוקים לגרר בצומת צ'ק פוסט? שירותי גרירה זולים, מהירים ומקצועיים לרכבים פרטיים ומסחריים. זמינים 24/7 לכל קריאה."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בצ'ק פוסט",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7858",
      "longitude": "35.0253"
    },
    "serviceType": "Towing Service"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה זולים בצומת צ'ק פוסט – מענה מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בצ'ק פוסט? אנחנו כאן כדי לחלץ אתכם במחיר הוגן ובמהירות.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר לגרר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה אמינים באזור צ'ק פוסט</h2>
        <p className="mb-4">אנו מבינים כמה מתסכל להיתקע בדרכים, במיוחד באזור עמוס כמו צומת צ'ק פוסט. לכן, אנו מציעים שירותי גרירה זולים, יעילים ומקצועיים לכל סוגי הרכבים הפרטיים, המסחריים ורכבי 4x4.</p>
        <p className="mb-4">הצוות שלנו מצויד בציוד חדיש ומכיר היטב את צירי התנועה באזור חיפה והקריות, מה שמאפשר לנו להגיע אליכם בזמן הקצר ביותר.</p>
        <div className="bg-gray-100 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-bold mb-2">חשוב לדעת:</h3>
          <p>אנו מתמחים בגרירת רכבים פרטיים ומסחריים בלבד. <strong>איננו מספקים שירותי גרירה לאופנועים.</strong></p>
        </div>
      </section>
    </main>
  );
}