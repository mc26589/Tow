import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרר חירום לכביש 22 קריות | שירות מהיר 24/7",
  description: "זקוקים לגרר בכביש 22? שירות גרירה וחילוץ מהיר ומקצועי לקריות וחיפה. זמינות 24/7, מחירים הוגנים. התקשרו עכשיו."
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
      "latitude": "32.8158",
      "longitude": "35.0653"
    },
    "priceRange": "$",
    "serviceType": "Emergency Roadside Assistance and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר חירום לכביש 22 קריות – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בכביש 22? הצוות שלנו בדרך אליכם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">זקוקים לגרר דחוף בכביש 22?</h2>
        <p className="text-lg mb-4">
          אנו מספקים שירותי גרירה וחילוץ מקצועיים ומהירים לכל אורכו של כביש 22 (עוקף קריות). 
          הצוות שלנו ערוך להגעה מהירה לכל נקודה בציר, תוך מתן מענה בטיחותי ומקצועי לרכבים פרטיים, 
          רכבים מסחריים ורכבי 4x4 שנתקעו בדרך. אנו מבינים את הדחיפות שבחילוץ בכביש מהיר ומחויבים להגעה מהירה.
        </p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו?</h3>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>זמינות מלאה: שירות 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>מקצועיות: צוות מיומן המכיר היטב את צירי התנועה בקריות ובחיפה.</li>
          <li>ציוד מתקדם: גרירה בטוחה השומרת על הרכב שלכם.</li>
          <li>שירות הוגן: מחירים הוגנים ושקופים ללא הפתעות.</li>
        </ul>
        
        <p className="text-sm text-gray-600 italic">
          חשוב לציין: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח, ואיננו מספקים שירותי גרירה לאופנועים.
        </p>
      </section>
    </main>
  );
}