import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירות פינוי וקניית רכבים לפירוק חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Car Scrap and Removal"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק באזור חיפה והקריות עם פינוי מיידי</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב ישן? אנו כאן כדי לפנות אותו עבורכם במהירות ובמקצועיות.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות פינוי רכבים לפירוק – מהיר, אמין ומשתלם</h2>
        <p className="mb-4">אנו מתמחים בקניית רכבים לפירוק באזור חיפה והקריות. אם הרכב שלכם אינו נוסע, עבר תאונה או פשוט הגיע לסוף דרכו, אנו נגיע עד אליכם לפינוי מיידי.</p>
        <p className="mb-4"><strong>חשוב להבהיר:</strong> אנו מתמקדים ברכבים פרטיים, מסחריים ורכבי 4x4 בלבד. איננו מספקים שירותי פינוי או קנייה לאופנועים.</p>
        
        <div className="bg-gray-100 p-6 rounded-xl mt-8">
          <h3 className="text-2xl font-semibold mb-4">למה לבחור בנו?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>פינוי מיידי מכל נקודה בחיפה והקריות.</li>
            <li>הצעת מחיר הוגנת בטלפון ללא התחייבות.</li>
            <li>טיפול מקצועי ומסודר בכל תהליך הפירוק.</li>
            <li>זמינות גבוהה לכל סוגי הרכבים (למעט אופנועים).</li>
          </ul>
        </div>
      </section>
    </main>
  );
}