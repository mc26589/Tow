import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירות קניית רכבים לפירוק בחיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$",
    "serviceType": "Scrap Car Removal",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "34.9896"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או מושבת? אנו כאן בשבילכם 24/7.</p>
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
        <h2 className="text-3xl font-bold mb-6">שירות מקצועי לפינוי רכבים לפירוק</h2>
        <p className="mb-4">אנו מתמחים בפינוי רכבים מכל הסוגים: רכבים פרטיים, מסחריים ורכבי 4x4. השירות שלנו כולל הגעה מהירה לכל נקודה בחיפה ובקריות.</p>
        <p className="font-semibold text-red-600 mb-4">שימו לב: איננו מספקים שירותי פינוי או קנייה לאופנועים.</p>
        <p>התהליך שלנו פשוט, מהיר ושקוף. צרו קשר עוד היום לקבלת הצעת מחיר הוגנת ופינוי מיידי של הרכב שלכם.</p>
      </section>
    </main>
  );
}