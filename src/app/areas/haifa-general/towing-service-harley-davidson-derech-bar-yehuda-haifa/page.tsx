import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "35.0000" },
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
          <h1 className="text-4xl font-bold mb-6">שירות גרירה וחילוץ בדרך בר יהודה חיפה</h1>
          <p className="text-lg mb-8">
            נתקעת בדרך בר יהודה בחיפה? אנו מספקים שירותי גרירה וחילוץ מקצועיים לרכבים פרטיים, רכבי שטח ורכבים מסחריים. 
            חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים (כולל הארלי דייווידסון). 
            הצוות שלנו זמין 24/7 לחילוץ מהיר במחירים הוגנים.
          </p>
          <div className="flex gap-4">
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold"
            >
              התקשר עכשיו
            </a>
            <WhatsAppCTA cityName="Haifa and Krayot" />
          </div>
        </div>
      </section>
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו בחיפה?</h2>
        <ul className="list-disc pr-5 space-y-2">
          <li>זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.</li>
          <li>הגעה מהירה לכל נקודה בדרך בר יהודה והסביבה.</li>
          <li>שירות אדיב ומקצועי במחירים הוגנים.</li>
          <li>ציוד חדיש המותאם לרכבים פרטיים ומסחריים.</li>
        </ul>
      </section>
    </main>
  );
}