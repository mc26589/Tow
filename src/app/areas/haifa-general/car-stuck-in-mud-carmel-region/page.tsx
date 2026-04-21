import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ רכב תקוע בבוץ באזור הכרמל | שירות 24/7",
  description: "נתקעתם בבוץ באזור הכרמל? צוות חילוץ מקצועי לרכבים פרטיים ורכבי שטח. מענה מהיר, ציוד מתקדם ומחירים הוגנים. התקשרו עכשיו."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה כרמל",
    "areaServed": { "@type": "Place", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Car recovery from mud and towing services"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? אנחנו בדרך אליכם. שירות חילוץ מקצועי לרכבים פרטיים ורכבי שטח.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות חילוץ מהיר ומקצועי</h2>
        <p className="mb-4">אם הרכב שלכם שקע בבוץ באזור הכרמל, אל תנסו להמשיך ללחוץ על הגז כדי לא לגרום נזק למנוע או למערכת ההנעה. הצוות שלנו מתמחה בחילוץ רכבים שנתקעו בתנאי שטח קשים.</p>
        <p className="mb-4">אנו מספקים שירות לרכבים פרטיים, רכבי 4x4 ורכבים מסחריים. <strong>שימו לב: איננו מספקים שירותי חילוץ לאופנועים.</strong></p>
        <p>אנו מציעים מחירים הוגנים ושירות אדיב 24 שעות ביממה.</p>
      </section>
    </main>
  );
}