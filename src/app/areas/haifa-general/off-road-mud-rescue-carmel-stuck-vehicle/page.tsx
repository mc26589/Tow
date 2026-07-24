import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ שטח בוץ בכרמל רכב תקוע | שירות 24/7",
  description: "נתקעתם בבוץ בכרמל? שירות חילוץ שטח מקצועי לרכבים ורכבי 4x4. זמינות מיידית, מחירים הוגנים וציוד חילוץ מתקדם."
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
    "serviceType": "Off-road vehicle recovery and towing"
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
          <p className="text-xl mb-8">חילוץ מקצועי לרכבים ורכבי 4x4 שנתקעו בבוץ. שירות מהיר, אמין ובטוח.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">זקוקים לחילוץ שטח מהיר בבוץ של הכרמל?</h2>
        <p className="mb-4">אם הרכב שלכם נתקע בבוץ באזורי השטח של הכרמל, אתם זקוקים למענה מקצועי ומיידי. אנו מתמחים בחילוצי שטח מורכבים לרכבי 4x4, רכבים פרטיים ורכבים מסחריים שנתקעו בתנאי שטח קשים.</p>
        
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
          <h3 className="text-2xl font-semibold mb-4">חשוב לדעת</h3>
          <p>אנו מתמחים בחילוץ רכבים, רכבי שטח ורכבים מסחריים. <strong>איננו מבצעים חילוץ או גרירה לאופנועים.</strong></p>
        </div>

        <h3 className="text-2xl font-semibold mb-4">למה לבחור בנו?</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>זמינות 24/7 לכל אזור הכרמל והסביבה.</li>
          <li>ציוד חילוץ ייעודי לרכבי שטח שנתקעו בבוץ עמוק.</li>
          <li>מחירים הוגנים ושירות אדיב.</li>
        </ul>
      </section>
    </main>
  );
}