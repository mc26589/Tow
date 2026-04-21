import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרר מהיר לכביש 22 קריות | שירות חילוץ 24/7",
  description: "נתקעתם בכביש 22? אנו מספקים שירותי גרירה מהירים ומקצועיים לרכבים פרטיים ומסחריים באזור חיפה והקריות. זמינות מלאה מסביב לשעון."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22, חיפה והקריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "גרירת רכבים וחילוץ דרך",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8191", "longitude": "35.0553" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר מהיר לכביש 22 קריות – שירות חילוץ מקצועי 24/7</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם עם הרכב בכביש 22? אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4. 
            חשוב לציין: איננו מספקים שירותי גרירה לאופנועים. אנו מתחייבים למענה מהיר, שירות אדיב ומחירים הוגנים לכל לקוח.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors text-center"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בכביש 22?</h2>
        <ul className="grid md:grid-cols-3 gap-8">
          <li className="p-6 border rounded-xl">
            <h3 className="font-bold text-xl mb-2">זמינות מלאה</h3>
            <p>אנו עובדים 24 שעות ביממה, גם בסופי שבוע וחגים, כדי שלא תישאר תקוע בכביש.</p>
          </li>
          <li className="p-6 border rounded-xl">
            <h3 className="font-bold text-xl mb-2">מקצועיות ללא פשרות</h3>
            <p>צוות מיומן עם ציוד גרירה חדיש המותאם לרכבים פרטיים, מסחריים ורכבי שטח.</p>
          </li>
          <li className="p-6 border rounded-xl">
            <h3 className="font-bold text-xl mb-2">מחירים הוגנים</h3>
            <p>שקיפות מלאה והצעת מחיר הוגנת בטלפון לפני תחילת העבודה.</p>
          </li>
        </ul>
      </section>
    </main>
  );
}