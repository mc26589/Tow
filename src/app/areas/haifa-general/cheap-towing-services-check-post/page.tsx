import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "שירותי גרירה זולים באזור צ'ק פוסט | זמינות 24/7",
  description: "מחפשים שירותי גרירה זולים באזור צ'ק פוסט? אנו מציעים חילוץ רכבים מקצועי, מהיר ובמחיר הוגן. זמינים 24 שעות ביממה לכל תקלה.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
    "areaServed": { "@type": "Place", "name": "צ'ק פוסט, חיפה" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7885", "longitude": "35.0165" },
    "priceRange": "$",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה זולים באזור צ'ק פוסט</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב באזור צ'ק פוסט? אנו כאן כדי לסייע. אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4 במחירים הוגנים ושירות ללא פשרות. 
            חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לשירותי גרירה בצ'ק פוסט?</h2>
          <ul className="space-y-4 text-lg">
            <li>✅ <strong>זמינות מלאה:</strong> שירות 24/7 לכל אורך השבוע.</li>
            <li>✅ <strong>מחיר הוגן:</strong> אנו מאמינים בשקיפות ומציעים הצעת מחיר משתלמת בטלפון.</li>
            <li>✅ <strong>מקצועיות:</strong> צוות מיומן עם ציוד גרירה חדיש המותאם לרכבים פרטיים ומסחריים.</li>
            <li>✅ <strong>מהירות תגובה:</strong> הגעה מהירה לכל נקודה בצומת צ'ק פוסט והסביבה.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}