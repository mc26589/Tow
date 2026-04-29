import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "שירותי גרירה זולים בצומת צ'ק פוסט | זמינות 24/7",
  description: "נתקעתם בצומת צ'ק פוסט? שירותי גרירה מהירים, אמינים ובמחיר הוגן. חילוץ רכבים פרטיים ומסחריים בכל שעות היממה."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה צ'ק פוסט",
    "areaServed": { "@type": "Place", "name": "צומת צ'ק פוסט, חיפה" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7858", "longitude": "35.0236" },
    "priceRange": "$",
    "serviceType": "Towing Service"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">שירותי גרירה זולים בצומת צ'ק פוסט</h1>
          <p className="text-lg mb-8 max-w-2xl">
            נתקעתם עם הרכב באזור צומת צ'ק פוסט? אנו מציעים שירותי גרירה מקצועיים לרכבים פרטיים, מסחריים ורכבי 4x4. 
            חשוב לציין: איננו מספקים שירותי גרירה לאופנועים. אנו מתחייבים למחירים הוגנים, שירות מהיר וזמינות מלאה 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו בצומת צ'ק פוסט?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>זמינות מיידית לכל אזור הצ'ק פוסט והסביבה.</li>
          <li>מחירים הוגנים ושקופים ללא הפתעות.</li>
          <li>צוות מיומן ומקצועי עם ציוד גרירה חדיש.</li>
          <li>שירות אדיב ומהיר 24 שעות ביממה.</li>
        </ul>
      </section>
    </main>
  );
}