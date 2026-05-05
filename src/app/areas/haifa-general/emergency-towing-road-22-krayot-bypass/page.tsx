import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרר דחוף לכביש 22 עוקף קריות | שירות 24/7",
  description: "נתקעתם בכביש 22 עוקף קריות? גרר דחוף בדרך אליכם. שירות מקצועי לרכבים פרטיים ומסחריים. זמינות מלאה 24/7.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8190",
      "longitude": "35.0550"
    },
    "priceRange": "$",
    "serviceType": "Emergency Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">גרר דחוף לכביש 22 עוקף קריות – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-lg md:text-xl mb-8">נתקעתם בדרך? הצוות שלנו בדרך אליכם עם מענה מהיר לכל סוגי הרכבים.</p>
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
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה מקצועיים בכביש 22</h2>
        <p className="mb-4">
          אנו מבינים את הדחיפות שבחילוץ רכב בכביש מהיר כמו כביש 22. הצוות שלנו ערוך להגעה מהירה, בטיחותית ומקצועית. 
          אנו מתמחים בגרירת רכבים פרטיים, רכבי שטח ורכבים מסחריים קלים. 
        </p>
        <p className="font-semibold text-red-600 mb-4">
          חשוב להבהיר: איננו מספקים שירותי גרירה לאופנועים.
        </p>
        <h3 className="text-xl font-bold mb-2">למה לבחור בנו?</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>הגעה מהירה לכל נקודה בכביש עוקף קריות.</li>
          <li>מחירים הוגנים ושקיפות מלאה.</li>
          <li>צוות מיומן ומנוסה בחילוץ רכבים.</li>
        </ul>
      </section>
    </main>
  );
}