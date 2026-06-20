import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  return (
    <main className="flex flex-col w-full">
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">גרר זול באזור צ'ק פוסט והקריות – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-lg md:text-xl mb-8">נתקעתם בדרך? הצוות שלנו כאן כדי לחלץ אתכם במהירות ובמחיר הוגן.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              חייגו עכשיו לשירות גרירה
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">שירותי גרירה אמינים בצפון</h2>
        <p className="mb-4">
          אנו מבינים כמה מתסכל להיתקע עם הרכב. לכן, אנו מציעים שירות גרירה מהיר באזור צ'ק פוסט, הקריות וחיפה. 
          השירות שלנו מתמקד ברכבים פרטיים, רכבים מסחריים ורכבי 4x4. 
          שימו לב: איננו מספקים שירותי גרירה לאופנועים.
        </p>
        <p>
          אנו מקפידים על מחיר זול והוגן לכל לקוח, תוך מתן שירות אדיב ומקצועי בכל שעות היממה.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoTowing",
            "name": "שירותי גרירה צ'ק פוסט והקריות",
            "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
            "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
            "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "35.0240" },
            "priceRange": "$",
            "serviceType": "Towing Service"
          }),
        }}
      />
    </main>
  );
}