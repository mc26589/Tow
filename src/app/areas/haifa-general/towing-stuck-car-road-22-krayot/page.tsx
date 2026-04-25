import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרירת רכב תקוע בכביש 22 קריות | שירות 24/7",
  description: "נתקעתם בכביש 22? שירותי גרירה וחילוץ מהירים לקריות וחיפה. זמינות 24/7, מחירים הוגנים ושירות מקצועי לכל סוגי הרכבים."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8191", "longitude": "35.0633" },
    "priceRange": "$",
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרירת רכב תקוע בכביש 22 קריות</h1>
          <p className="text-xl mb-8">נתקעתם עם הרכב בכביש עוקף קריות (כביש 22)? אנו מספקים שירותי גרירה וחילוץ מהירים ומקצועיים לכל סוגי הרכבים הפרטיים, המסחריים ורכבי 4x4. הצוות שלנו זמין עבורכם 24 שעות ביממה.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">למה לבחור בנו לחילוץ בכביש 22?</h2>
          <ul className="space-y-4 text-lg">
            <li>✓ הגעה מהירה לכל נקודה לאורך כביש 22.</li>
            <li>✓ צוות מיומן ומקצועי עם ציוד גרירה מתקדם.</li>
            <li>✓ שירות אמין במחירים הוגנים ללא הפתעות.</li>
            <li>✓ זמינות מלאה בכל שעות היממה, כולל שבתות וחגים.</li>
          </ul>
          <p className="mt-8 text-sm text-gray-400">חשוב לציין: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי שטח. איננו מספקים שירותי גרירה לאופנועים.</p>
        </div>
      </section>
    </main>
  );
}