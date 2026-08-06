import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרר רכבים תקועים בכביש 22 עוקף קריות | שירות 24/7",
  description: "נתקעתם בכביש 22 עוקף קריות? שירותי גרירה וחילוץ רכבים מהירים ומקצועיים. זמינות מלאה, מחירים הוגנים וצוות מיומן. התקשרו עכשיו."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
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
      "latitude": "32.8156",
      "longitude": "35.0550"
    },
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
          <h1 className="text-4xl font-bold mb-6">גרר רכבים תקועים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב בכביש 22? אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4. 
            חשוב לציין: איננו מספקים שירותי גרירה לאופנועים. אנו זמינים 24/7 למתן מענה מהיר ומקצועי במחירים הוגנים.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
          <ul className="space-y-4 text-lg">
            <li>✓ הגעה מהירה לכל נקודה לאורך כביש עוקף קריות.</li>
            <li>✓ צוות מיומן ומקצועי לטיפול ברכבים פרטיים ומסחריים.</li>
            <li>✓ שירות אמין עם הצעת מחיר הוגנת ושקופה בטלפון.</li>
            <li>✓ זמינות מלאה מסביב לשעון, גם בסופי שבוע וחגים.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}