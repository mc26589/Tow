import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרר רכבים לפירוק בקריית ביאליק | שירות 24/7",
  description: "זקוקים לגרר לרכב לפירוק בקריית ביאליק? שירות מקצועי, מהיר ובמחיר הוגן. פינוי רכבים פרטיים, מסחריים ו-4x4. צרו קשר עכשיו."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים",
    "areaServed": "קריית ביאליק",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8285",
      "longitude": "35.0715"
    },
    "priceRange": "$",
    "serviceType": "Towing for scrap vehicles"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכבים לפירוק בקריית ביאליק</h1>
          <p className="text-xl mb-8">פינוי מקצועי ומהיר של רכבים לפירוק. שירות אמין לכל סוגי הרכבים (למעט אופנועים).</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
            <WhatsAppCTA cityName="קריית ביאליק" />
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות גרירה אמין בקריית ביאליק</h2>
        <p className="mb-4">אנו מתמחים בפינוי רכבים המיועדים לפירוק. אם הרכב שלכם אינו נוסע או שאתם זקוקים לפינוי מהיר מהחניה, הצוות שלנו כאן עבורכם.</p>
        <p className="mb-4"><strong>חשוב לדעת:</strong> אנו מספקים שירות לרכבים פרטיים, מסחריים ורכבי 4x4 בלבד. איננו מספקים שירותי גרירה לאופנועים.</p>
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו?</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>מחירים הוגנים ושקופים ללא הפתעות.</li>
          <li>צוות מיומן המכיר היטב את אזור קריית ביאליק והקריות.</li>
        </ul>
      </section>
    </main>
  );
}