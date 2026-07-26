import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22 עוקף קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "Emergency Roadside Assistance and Towing",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה דחופים בכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? צוות החילוץ שלנו בדרך אליכם. שירות מקצועי, אמין ובמחיר הוגן.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בכביש 22?</h2>
          <p className="mb-4">אנו מבינים את הדחיפות והסכנה בעצירה בשולי כביש מהיר כמו כביש 22. הניסיון הרב שלנו מאפשר לנו להגיע במהירות, לאבטח את הזירה ולפנות את הרכב שלכם בבטחה.</p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>מענה מהיר 24/7 לכל אורך עוקף קריות</li>
            <li>ציוד גרירה מתקדם לרכבים פרטיים, מסחריים ו-4x4</li>
            <li>שקיפות מלאה והצעת מחיר הוגנת בטלפון</li>
            <li>צוות מיומן ומנוסה בחילוצי דרך</li>
          </ul>
          <p className="text-sm text-gray-400 italic">* שים לב: השירות אינו כולל גרירת אופנועים.</p>
        </div>
      </section>
    </main>
  );
}