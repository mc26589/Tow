import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה כרמל",
    "areaServed": { "@type": "Place", "name": "אזור הכרמל, חיפה והקריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "34.9896" },
    "priceRange": "$",
    "serviceType": "חילוץ רכב תקוע בבוץ"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">חילוץ רכב תקוע בבוץ באזור הכרמל</h1>
          <p className="text-lg mb-8">
            נתקעתם עם הרכב בבוץ באזור הכרמל? אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4x4 שנתקעו בדרכי עפר או בשטחים בוציים. 
            חשוב לציין: אנו לא מספקים שירותי חילוץ לאופנועים. הצוות שלנו זמין 24/7 עם ציוד חילוץ מקצועי כדי להחזיר אתכם לכביש במהירות ובבטחה.
          </p>
          <div className="flex flex-col gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black font-bold py-3 px-6 rounded-lg text-center hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לחילוץ בכרמל?</h2>
        <ul className="list-disc pr-6 space-y-2">
          <li>זמינות מלאה 24/7 לכל אזור הכרמל והסביבה.</li>
          <li>ציוד חילוץ מתקדם המותאם לתוואי השטח של הכרמל.</li>
          <li>מחירים הוגנים ושירות אדיב ומקצועי.</li>
          <li>מומחיות בחילוץ רכבי 4x4 ורכבים פרטיים.</li>
        </ul>
      </section>
    </main>
  );
}