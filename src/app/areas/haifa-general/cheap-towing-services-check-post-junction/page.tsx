import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "שירותי גרירה זולים בצומת צ'ק פוסט | זמינות 24/7",
  description: "מחפשים שירותי גרירה זולים בצומת צ'ק פוסט? אנו מציעים חילוץ רכבים מהיר, מקצועי ובמחיר הוגן. זמינים לכל קריאה 24 שעות ביממה.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
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
      "latitude": "32.7885",
      "longitude": "35.0253"
    },
    "serviceType": ["Towing Service", "Roadside Assistance"]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה זולים בצומת צ'ק פוסט</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            נתקעתם עם הרכב באזור צומת צ'ק פוסט? אנו כאן כדי לסייע. שירותי גרירה מקצועיים לרכבים פרטיים, מסחריים ורכבי 4x4 במחירים הוגנים. שימו לב: איננו מספקים שירותי גרירה לאופנועים.
          </p>
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

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה בצ'ק פוסט?</h2>
        <ul className="space-y-4 text-lg">
          <li>✅ <strong>זמינות מלאה:</strong> שירות 24/7 לכל אורך השבוע.</li>
          <li>✅ <strong>מחירים הוגנים:</strong> שירות גרירה במחיר זול ומשתלם ללא הפתעות.</li>
          <li>✅ <strong>מקצועיות:</strong> צוות מיומן המכיר היטב את עומסי התנועה באזור צ'ק פוסט.</li>
          <li>✅ <strong>ציוד מתקדם:</strong> גרירה בטוחה לרכב שלכם.</li>
        </ul>
      </section>
    </main>
  );
}