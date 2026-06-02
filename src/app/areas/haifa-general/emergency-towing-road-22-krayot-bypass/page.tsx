import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרר דחוף לכביש 22 עוקף קריות | שירות 24/7",
  description: "נתקעתם בכביש 22 עוקף קריות? גרר דחוף זמין עבורכם 24/7. שירות מקצועי לרכבים פרטיים ומסחריים. התקשרו עכשיו לסיוע מהיר.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8191",
      "longitude": "35.0567"
    },
    "priceRange": "$",
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">גרר דחוף לכביש 22 עוקף קריות</h1>
          <p className="text-xl mb-8">נתקעתם בדרך? צוות החילוץ שלנו בדרך אליכם. שירות מהיר, אמין ומקצועי 24/7.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition">
              התקשרו עכשיו לסיוע
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים בכביש 22</h2>
        <p className="mb-4">אנו מבינים את הדחיפות שבחילוץ רכב בכביש מהיר כמו כביש 22. הצוות שלנו ערוך להגעה מהירה לכל נקודה לאורך עוקף קריות.</p>
        <p className="mb-4"><strong>חשוב לדעת:</strong> אנו מתמחים בגרירת רכבים פרטיים, רכבי שטח ורכבים מסחריים. איננו מספקים שירותי גרירה לאופנועים.</p>
        <p>אנו מציעים מחירים הוגנים ושירות ללא פשרות. לקבלת הצעת מחיר מדויקת וזמן הגעה משוער, צרו איתנו קשר טלפוני כעת.</p>
      </section>
    </main>
  );
}