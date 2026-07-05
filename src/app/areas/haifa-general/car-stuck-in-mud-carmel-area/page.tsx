import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ באזור הכרמל | שירות 24/7",
  description: "נתקעתם בבוץ בכרמל? צוות חילוץ מקצועי בדרך אליכם. שירות מהיר, אמין ובמחיר הוגן לרכבים פרטיים ו-4x4. התקשרו עכשיו!",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Car recovery from mud and off-road towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? אל תנסו להמשיך ללחוץ על הגז. התקשרו למומחים שלנו לחילוץ בטוח.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition">
              התקשרו עכשיו לחילוץ
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">שירות חילוץ מקצועי בשטח</h2>
          <p className="mb-4">אנו מתמחים בחילוץ רכבים שנתקעו בבוץ עמוק, חול או תוואי שטח מאתגר באזור הכרמל. הצוות שלנו מצויד בכלים המתאימים ביותר כדי להוציא את הרכב שלכם ללא נזקים מיותרים.</p>
          <p className="mb-4"><strong>חשוב לדעת:</strong> אנו מספקים שירות לרכבים פרטיים, מסחריים ורכבי שטח בלבד. איננו מספקים שירותי חילוץ לאופנועים.</p>
          <p>המחירים שלנו הוגנים ושקופים, וניתן לקבל הצעת מחיר מדויקת בשיחת טלפון מהירה.</p>
        </div>
      </section>
    </main>
  );
}