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
      "latitude": "32.8191",
      "longitude": "35.0633"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            שירותי גרירה דחופים בכביש 22 עוקף קריות
          </h1>
          <p className="text-xl mb-8">
            נתקעתם בדרך? צוות החילוץ שלנו בדרך אליכם. מענה מהיר, מקצועי ובמחירים הוגנים.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בכביש 22?</h2>
        <p className="mb-4">
          כביש 22 הוא ציר תנועה מרכזי ומהיר. אנו מבינים את הסכנה בעצירה בשולי הדרך ומגיעים במהירות האפשרית כדי לפנות אתכם ואת רכבכם למקום מבטחים.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>זמינות 24/7 לכל אורך עוקף קריות</li>
          <li>ציוד גרירה מתקדם לרכבים פרטיים, מסחריים ו-4x4</li>
          <li>שירות אדיב ומקצועי במחיר הוגן</li>
        </ul>
        <p className="mt-6 text-sm text-gray-600">
          *הערה: השירות מיועד לרכבים בלבד. איננו מספקים שירותי גרירה לאופנועים.
        </p>
      </section>
    </main>
  );
}