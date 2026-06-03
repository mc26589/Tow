import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרר זול באזור צ'ק פוסט והקריות | שירות 24/7",
  description: "זקוקים לגרר באזור צ'ק פוסט והקריות? שירות גרירה מקצועי, מהיר ובמחיר הוגן. זמינים 24/7 לכל סוגי הרכבים (לא כולל אופנועים).",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט והקריות",
    "areaServed": ["Haifa", "Krayot", "Check Post"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "35.0240"
    },
    "priceRange": "$",
    "serviceType": ["Emergency Towing", "Roadside Assistance"]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר זול באזור צ'ק פוסט והקריות – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? אנחנו כאן בשבילכם עם שירות גרירה אמין ומחיר הוגן.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg">
              התקשרו עכשיו להצעת מחיר
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים באזור צ'ק פוסט והקריות</h2>
        <p className="mb-4">אנו מספקים שירותי גרירה מקצועיים, אמינים ובמחירים הוגנים לכל סוגי הרכבים הפרטיים, המסחריים ורכבי 4x4 באזור צ'ק פוסט, מפרץ חיפה והקריות. הצוות שלנו זמין עבורכם 24 שעות ביממה, 7 ימים בשבוע.</p>
        
        <div className="bg-gray-100 p-6 rounded-lg mt-8">
          <h3 className="text-2xl font-bold mb-4">חשוב לדעת</h3>
          <p>אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח. <strong>איננו מספקים שירותי גרירה לאופנועים.</strong></p>
        </div>
      </section>
    </main>
  );
}