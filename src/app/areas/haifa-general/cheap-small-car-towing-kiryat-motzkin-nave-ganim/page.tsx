import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרר רכב קטן זול בקרית מוצקין שכונת נווה גנים | שירות 24/7",
  description: "מחפשים גרר זול בשכונת נווה גנים בקרית מוצקין? שירות גרירה מקצועי לרכבים פרטיים ומסחריים. זמינות מיידית, מחירים הוגנים ושירות אדיב."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה קרית מוצקין",
    "areaServed": "קרית מוצקין, שכונת נווה גנים",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.835",
      "longitude": "35.075"
    },
    "serviceType": "גרירת רכבים פרטיים ומסחריים"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">גרר רכב קטן זול בקרית מוצקין שכונת נווה גנים</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב בשכונת נווה גנים? אנו כאן כדי לסייע. אנו מתמחים בגרירת רכבים פרטיים, רכבי 4x4 ורכבים מסחריים קלים. השירות שלנו זמין 24/7 עם דגש על מחיר זול ושירות מהיר.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="קרית מוצקין" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר לגרר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בשכונת נווה גנים?</h2>
        <ul className="space-y-4 text-lg">
          <li>✓ זמינות מלאה בכל שעות היממה, כולל שבתות וחגים.</li>
          <li>✓ מחירים הוגנים ושקופים ללא הפתעות.</li>
          <li>✓ ציוד גרירה חדיש המותאם לרכבים קטנים ופרטיים.</li>
          <li>✓ הגעה מהירה לכל נקודה בשכונת נווה גנים ובקריות.</li>
        </ul>
        <p className="mt-8 text-sm text-gray-600">
          *שימו לב: אנו מתמחים בגרירת רכבים פרטיים ומסחריים בלבד. איננו מספקים שירותי גרירה לאופנועים.
        </p>
      </section>
    </main>
  );
}