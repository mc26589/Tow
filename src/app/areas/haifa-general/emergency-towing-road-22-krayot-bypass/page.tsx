import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרר דחוף לכביש 22 עוקף קריות | שירות 24/7",
  description: "זקוקים לגרר בכביש 22 עוקף קריות? שירות גרירה וחילוץ מהיר ומקצועי לרכבים פרטיים ומסחריים. זמינות מלאה 24/7."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
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
      "latitude": "32.8156",
      "longitude": "35.0653"
    },
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
            נתקעתם עם הרכב בכביש 22? אנו כאן עבורכם. שירות גרירה וחילוץ מקצועי, מהיר ואמין לכל סוגי הרכבים הפרטיים, המסחריים ורכבי ה-4x4. 
            הצוות שלנו מכיר היטב את צירי התנועה באזור חיפה והקריות ויגיע אליכם בזמן הקצר ביותר.
            <br /><br />
            <strong>חשוב לציין:</strong> אנו מתמחים ברכבים בלבד ואיננו מספקים שירותי גרירה לאופנועים.
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

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
        <ul className="space-y-4 text-lg">
          <li>✅ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>✅ הגעה מהירה לכל נקודה בכביש עוקף קריות.</li>
          <li>✅ צוות מיומן ומקצועי עם ציוד גרירה מתקדם.</li>
          <li>✅ מחירים הוגנים ושירות אדיב ללא הפתעות.</li>
        </ul>
      </section>
    </main>
  );
}