import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרר דחוף לכביש 22 עוקף קריות | שירות 24/7",
  description: "זקוקים לגרר בכביש 22 עוקף קריות? שירות גרירה וחילוץ מהיר, מקצועי ובמחירים הוגנים. זמינים 24 שעות ביממה לכל סוגי הרכבים (למעט אופנועים).",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22 עוקף קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday-Sunday", "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8156", "longitude": "35.0653" },
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
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר דחוף לכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם בכביש 22? אנו כאן עבורכם. שירות גרירה וחילוץ מהיר ומקצועי לכל סוגי הרכבים הפרטיים, המסחריים ורכבי ה-4x4. 
            אנו מבינים את הדחיפות שבחילוץ מהכביש המהיר ומגיעים במהירות האפשרית. 
            חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition text-center"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירות גרירה בכביש 22?</h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li>זמינות מלאה 24/7 לכל קריאה דחופה.</li>
          <li>הגעה מהירה לכל נקודה לאורך כביש עוקף קריות.</li>
          <li>צוות מיומן ומקצועי עם ציוד גרירה מתקדם.</li>
          <li>מחירים הוגנים ושירות אדיב ללא הפתעות.</li>
        </ul>
      </section>
    </main>
  );
}