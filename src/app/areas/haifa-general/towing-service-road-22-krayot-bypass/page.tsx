import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

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
      "longitude": "35.0653"
    },
    "serviceType": "Emergency Roadside Assistance and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר רכבים תקועים בכביש 22 עוקף קריות – שירות מהיר ומקצועי</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? צוות הגרירה שלנו בדרך אליכם עם מענה מהיר ומחירים הוגנים.</p>
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

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים בכביש 22</h2>
        <p className="mb-4">אם נתקעתם עם הרכב בכביש 22 (עוקף קריות), אנו מספקים שירותי גרירה וחילוץ מהירים ומקצועיים לכל סוגי הרכבים הפרטיים, המסחריים ורכבי 4x4. הצוות שלנו מכיר היטב את צירי התנועה באזור חיפה והקריות ומגיע לנקודת התקיעה בזמן קצר כדי להעניק לכם שקט נפשי.</p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו?</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות מלאה: שירות 24/7 לכל אורך כביש עוקף קריות.</li>
          <li>מקצועיות: ציוד גרירה מתקדם המבטיח שמירה על הרכב שלכם.</li>
          <li>מחירים הוגנים: שקיפות מלאה והצעת מחיר הוגנת ללא הפתעות.</li>
        </ul>

        <div className="mt-8 p-6 bg-gray-100 rounded-lg">
          <p className="font-bold">חשוב לציין: אנו מתמחים בגרירת רכבים פרטיים ומסחריים בלבד. איננו מספקים שירותי גרירה לאופנועים.</p>
        </div>
      </section>
    </main>
  );
}