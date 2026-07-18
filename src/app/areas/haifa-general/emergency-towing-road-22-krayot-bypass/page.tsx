import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרר דחוף לכביש 22 עוקף קריות | שירות 24/7",
  description: "נתקעתם בכביש 22 עוקף קריות? גרר דחוף ומקצועי בדרך אליכם. שירות מהיר לרכבים פרטיים ומסחריים. חייגו עכשיו.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22 עוקף קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "Emergency Towing",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8191", "longitude": "35.0633" }
  };

  return (
    <main className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">גרר דחוף לכביש 22 עוקף קריות – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-lg md:text-xl mb-8">נתקעתם בדרך? הצוות שלנו בדרך אליכם עם ציוד חילוץ מתקדם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition">
              התקשרו עכשיו לחילוץ
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה מקצועיים בכביש 22</h2>
        <p className="mb-4">אנו מספקים מענה מיידי לכל סוגי הרכבים (פרטיים, מסחריים ו-4x4) שנתקעו לאורך כביש עוקף קריות. אנו מבינים את הדחיפות שבחילוץ בכביש מהיר ומגיעים במהירות האפשרית.</p>
        <p className="text-red-600 font-semibold mb-6">* שימו לב: איננו מספקים שירותי גרירה לאופנועים.</p>
        
        <div className="bg-gray-100 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-2">למה לבחור בנו?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
            <li>מחירים הוגנים ושקופים ללא הפתעות.</li>
            <li>צוות מיומן ומקצועי עם ניסיון רב בחילוץ בכבישים מהירים.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}