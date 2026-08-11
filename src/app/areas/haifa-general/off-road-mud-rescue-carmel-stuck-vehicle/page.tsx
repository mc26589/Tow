import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ שטח בוץ בכרמל רכב תקוע | שירות 24/7",
  description: "נתקעת בבוץ בכרמל? צוות חילוץ שטח מקצועי לרכבים פרטיים ו-4x4. מענה מהיר, ציוד חילוץ מתקדם ומחירים הוגנים. התקשרו עכשיו."
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
    "serviceType": "Off-road mud rescue and towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">חילוץ שטח בוץ בכרמל: רכב תקוע? אנחנו בדרך אליך</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            נתקעת בבוץ בדרכי העפר של הכרמל? אנו מתמחים בחילוץ רכבים פרטיים, רכבי 4x4 ומסחריות. 
            חשוב לציין: איננו מספקים שירותי חילוץ לאופנועים. אנו מתמקדים במתן פתרונות חילוץ בטוחים לרכבים בעלי 4 גלגלים ומעלה.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בכרמל?</h2>
        <ul className="space-y-4 text-lg">
          <li>✓ זמינות מלאה 24/7 לכל אזור הכרמל והסביבה.</li>
          <li>✓ ציוד חילוץ מתקדם המותאם לתוואי שטח בוצי.</li>
          <li>✓ צוות מיומן המבטיח חילוץ ללא נזק לרכב.</li>
          <li>✓ מחירים הוגנים ושקיפות מלאה מול הלקוח.</li>
        </ul>
      </section>
    </main>
  );
}