import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Emergency Vehicle Towing and Recovery"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי חילוץ רכב תקוע בעלייה תלולה באחוזה חיפה</h1>
          <p className="text-xl mb-8">נתקעתם בעלייה? הצוות שלנו בדרך אליכם עם פתרונות חילוץ מקצועיים לרכבים פרטיים ומסחריים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">חילוץ מקצועי לרכבים תקועים בעליות של אחוזה</h2>
        <p className="mb-4">נתקעתם עם הרכב בעלייה תלולה בשכונת אחוזה בחיפה? אנו מספקים מענה מיידי, בטוח ומקצועי לחילוץ רכבים פרטיים, מסחריים ורכבי 4x4 שנתקעו בשיפועים חדים. הצוות שלנו מכיר היטב את הטופוגרפיה המורכבת של חיפה ומגיע מצויד בציוד גרירה מתקדם המותאם לעבודה בשיפועים.</p>
        <p className="mb-4"><strong>חשוב לציין:</strong> אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי שטח. איננו מספקים שירותי חילוץ או גרירה לאופנועים.</p>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">למה לבחור בנו?</h3>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות 24/7 לכל קריאה באזור אחוזה והכרמל.</li>
          <li>מומחיות בחילוץ בשיפועים חדים ותנאי דרך מאתגרים.</li>
          <li>מחירים הוגנים ושירות אדיב.</li>
          <li>ציוד גרירה חדיש המבטיח שמירה על הרכב שלכם.</li>
        </ul>
      </section>
    </main>
  );
}