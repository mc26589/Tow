import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Kiryat Bialik",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8350",
      "longitude": "35.0700"
    },
    "serviceType": "Towing for scrap vehicles"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            גרר רכבים לפירוק בקריית ביאליק כביש 22
          </h1>
          <p className="text-xl mb-8">פינוי מהיר ומקצועי של רכבים לפירוק. שירות אמין, מחירים הוגנים ומענה 24/7.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי רכב לפירוק?</h2>
          <p className="mb-4">אנו מתמחים בפינוי רכבים לפירוק מכל סוגי הרכבים הפרטיים, המסחריים ורכבי 4x4. אם הרכב שלכם תקוע על כביש 22 או בכל נקודה בקריית ביאליק, הצוות שלנו יגיע במהירות.</p>
          <p className="text-red-400 font-semibold">שים לב: אנו לא מספקים שירותי גרירה לאופנועים.</p>
          <div className="mt-8">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-bold"
            >
              חייגו עכשיו לתיאום פינוי
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}