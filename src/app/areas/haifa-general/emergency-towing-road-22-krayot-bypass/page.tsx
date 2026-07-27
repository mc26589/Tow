import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "שירותי גרירה דחופים בכביש 22 עוקף קריות | מענה 24/7",
  description: "נתקעתם בכביש 22? שירותי גרירה וחילוץ מהירים לרכבים פרטיים ומסחריים. זמינות מלאה 24/7, מחירים הוגנים ושירות מקצועי."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22 עוקף קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "Emergency Roadside Assistance and Towing",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8190", "longitude": "35.0630" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה דחופים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? הצוות שלנו בדרך אליכם. שירות מקצועי, מהיר ובטוח.</p>
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
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בכביש 22?</h2>
        <p className="mb-4">אנו מבינים את הלחץ הכרוך בתקיעת רכב בכביש מהיר. לכן, אנו מתחייבים להגעה מהירה לכל נקודה בכביש 22.</p>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>מחירים הוגנים ושקופים ללא הפתעות.</li>
          <li>ציוד גרירה חדיש המתאים לרכבים פרטיים, מסחריים ורכבי 4x4.</li>
          <li>צוות מיומן המכיר היטב את צירי התנועה באזור חיפה והקריות.</li>
        </ul>
        <p className="mt-6 text-sm text-gray-600">* שימו לב: השירות מיועד לרכבים בלבד. איננו מספקים שירותי גרירה לאופנועים.</p>
      </section>
    </main>
  );
}