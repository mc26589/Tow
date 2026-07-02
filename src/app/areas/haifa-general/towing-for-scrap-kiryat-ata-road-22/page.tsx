import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרר רכבים לפירוק בקריית אתא כביש 22 | שירות מהיר 24/7",
  description: "זקוקים לגרר רכבים לפירוק בקריית אתא או על כביש 22? שירות גרירה מקצועי, מהיר ובמחיר הוגן. זמינים 24/7 לכל סוגי הרכבים."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "קריית אתא" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "Towing for scrap",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "35.0700" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכבים לפירוק בקריית אתא כביש 22 – שירות מהיר ומקצועי</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב לפירוק על כביש 22? אנחנו כאן בשבילכם 24/7.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition">
              התקשרו עכשיו להצעת מחיר
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות גרירה לפירוק בקריית אתא וכביש 22</h2>
        <p className="mb-4">אנו מספקים מענה מיידי לפינוי רכבים לפירוק באזור קריית אתא וציר כביש 22. הצוות שלנו מתמחה בפינוי רכבים מכל סוג (פרטיים, מסחריים ורכבי 4x4) ומבטיח עבודה מהירה ובטוחה.</p>
        <p className="mb-4">חשוב לציין: אנו מתמקדים ברכבים ורכבים מסחריים בלבד. איננו מספקים שירותי גרירה לאופנועים.</p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו?</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות מלאה 24/7 לכל אורך כביש 22.</li>
          <li>ציוד גרירה מתקדם המותאם לרכבים ללא יכולת נסיעה.</li>
          <li>מחירים הוגנים ושקיפות מלאה.</li>
          <li>ניסיון רב בפינוי רכבים מורכבים.</li>
        </ul>
      </section>
    </main>
  );
}