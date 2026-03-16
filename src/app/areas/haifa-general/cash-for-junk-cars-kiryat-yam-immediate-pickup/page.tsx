import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים לפירוק בחיפה והקריות",
    "areaServed": { "@type": "City", "name": "Kiryat Yam" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8356", "longitude": "35.0686" },
    "priceRange": "$",
    "serviceType": "Cash for junk cars, vehicle removal, towing services"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">קניית רכבים לפירוק בקריית ים – פינוי מיידי ומזומן במקום</h1>
          <p className="text-xl mb-8">
            אנו מספקים שירות מקצועי של קניית רכבים לפירוק בקריית ים. אם ברשותכם רכב ישן, רכב מושבת או רכב לאחר תאונה, אנו נגיע לפנות אותו באופן מיידי. אנו מתמחים ברכבים פרטיים, מסחריים ורכבי 4x4. חשוב לציין: איננו מטפלים באופנועים.
          </p>
          <div className="flex flex-col gap-4">
            <WhatsAppCTA cityName="קריית ים" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black font-bold py-3 px-6 rounded-lg text-center hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li>פינוי מיידי מכל נקודה בקריית ים.</li>
          <li>תשלום הוגן במזומן במעמד הפינוי.</li>
          <li>שירות אדיב, מהיר ומקצועי.</li>
          <li>טיפול בכל סוגי הרכבים (למעט אופנועים).</li>
        </ul>
      </section>
    </main>
  );
}