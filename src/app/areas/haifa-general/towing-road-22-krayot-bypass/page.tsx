import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרר רכבים תקועים בכביש 22 עוקף קריות | שירות 24/7",
  description: "נתקעתם בכביש 22? שירותי גרירה וחילוץ רכבים מהירים ומקצועיים באזור עוקף קריות. זמינות 24/7, מחירים הוגנים ושירות אדיב."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22 עוקף קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "גרירת רכבים וחילוץ דרך",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8191", "longitude": "35.0633" }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכבים תקועים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? צוות הגרירה שלנו בדרך אליכם. שירות מהיר, אמין ומקצועי לכל סוגי הרכבים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד הגרירה
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בכביש 22?</h2>
        <p className="mb-4">אנו מבינים את הלחץ שבתקיעה בכביש מהיר כמו כביש 22. לכן, אנו מתחייבים לזמני הגעה קצרים במיוחד.</p>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>ציוד גרירה מתקדם המתאים לרכבים פרטיים, מסחריים ורכבי 4x4.</li>
          <li>מחירים הוגנים ושקופים – הצעת מחיר מסודרת בטלפון.</li>
          <li>צוות מיומן ומנוסה בעבודה בכבישים מהירים.</li>
        </ul>
        <p className="mt-6 text-sm text-gray-600">
          *חשוב לציין: אנו מתמחים בגרירת רכבים פרטיים ומסחריים בלבד ואיננו מספקים שירותי גרירה לאופנועים.
        </p>
      </section>
    </main>
  );
}