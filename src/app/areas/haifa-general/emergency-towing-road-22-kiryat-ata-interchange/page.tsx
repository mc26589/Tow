import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "חיפה והקריות",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "35.0650"
    },
    "serviceType": "Emergency Towing after accident"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה דחופים לאחר תאונה בכביש 22 מחלף קרית אתא</h1>
          <p className="text-xl mb-8 max-w-3xl">
            נקלעתם לתאונה בכביש 22 באזור מחלף קרית אתא? אנו כאן עבורכם. אנו מתמחים בחילוץ וגרירת רכבים פרטיים, מסחריים ורכבי 4x4 לאחר תאונות דרכים. 
            חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים. 
            הצוות שלנו פועל במהירות ובמקצועיות כדי לפנות את הרכב שלכם מהכביש המהיר ולמנוע עומסי תנועה וסכנה מיותרת.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו במקרה של תאונה?</h2>
          <ul className="grid md:grid-cols-3 gap-8">
            <li className="p-6 bg-white shadow-sm rounded-xl">
              <h3 className="font-bold text-xl mb-2">זמינות 24/7</h3>
              <p>אנו מבינים שתאונה יכולה לקרות בכל שעה. הצוות שלנו זמין עבורכם בכל עת, גם בשעות הלילה המאוחרות.</p>
            </li>
            <li className="p-6 bg-white shadow-sm rounded-xl">
              <h3 className="font-bold text-xl mb-2">מחירים הוגנים</h3>
              <p>אנו מאמינים בשקיפות ומציעים מחירים הוגנים ללא הפתעות, גם במצבי חירום.</p>
            </li>
            <li className="p-6 bg-white shadow-sm rounded-xl">
              <h3 className="font-bold text-xl mb-2">מקצועיות ובטיחות</h3>
              <p>ציוד גרירה מתקדם וצוות מיומן המכיר היטב את צירי התנועה באזור הקריות וחיפה.</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}