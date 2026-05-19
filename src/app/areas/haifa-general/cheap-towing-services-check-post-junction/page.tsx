import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "שירותי גרירה זולים בצומת צ'ק פוסט | זמינות 24/7",
  description: "זקוקים לגרר בצומת צ'ק פוסט? שירותי גרירה מהירים, אמינים ובמחירים הוגנים לכל סוגי הרכבים. זמינים 24 שעות ביממה."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בצומת צ'ק פוסט",
    "areaServed": { "@type": "City", "name": "חיפה והקריות" },
    "priceRange": "$",
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7885", "longitude": "35.0253" },
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה זולים בצומת צ'ק פוסט</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב באזור צומת צ'ק פוסט? אנו כאן כדי לסייע לכם במהירות ובמקצועיות. 
            אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4. 
            חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              התקשרו עכשיו לחילוץ
            </a>
            <WhatsAppCTA cityName="חיפה והקריות" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">למה לבחור בנו בצומת צ'ק פוסט?</h2>
          <ul className="grid md:grid-cols-3 gap-8">
            <li className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">זמינות מלאה</h3>
              <p>שירות 24/7 לכל אורך השבוע, כולל שבתות וחגים.</p>
            </li>
            <li className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">מחירים הוגנים</h3>
              <p>אנו מאמינים בשקיפות ומציעים מחיר זול והוגן ללא הפתעות.</p>
            </li>
            <li className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">מקצועיות ללא פשרות</h3>
              <p>צוות מיומן המכיר את כל דרכי הגישה באזור הצ'ק פוסט והקריות.</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}