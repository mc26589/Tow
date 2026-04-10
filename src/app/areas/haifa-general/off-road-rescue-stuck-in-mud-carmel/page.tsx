import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ שטח לרכב תקוע בבוץ בכרמל | שירות 24/7",
  description: "נתקעתם בבוץ בכרמל? אנו מציעים שירותי חילוץ שטח מקצועיים לרכבים פרטיים ו-4x4. מענה מהיר, ציוד מתקדם ומחירים הוגנים. התקשרו עכשיו."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "Off-road vehicle recovery and towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ שטח לרכב תקוע בבוץ בכרמל</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם בבוץ באזור הכרמל? אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4 שנתקעו בתנאי שטח. 
            חשוב לציין: אנו לא מספקים שירותי חילוץ לאופנועים. הצוות שלנו זמין 24/7 עם ציוד חילוץ מקצועי.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold text-center hover:bg-gray-100 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בשטח?</h2>
        <ul className="space-y-4 text-lg">
          <li>✓ ניסיון רב בחילוץ רכבים מבוץ עמוק ודרכי עפר בכרמל.</li>
          <li>✓ ציוד חילוץ מתקדם המותאם לרכבי שטח ורכבים פרטיים.</li>
          <li>✓ זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>✓ מחירים הוגנים ושקיפות מלאה מול הלקוח.</li>
        </ul>
      </section>
    </main>
  );
}