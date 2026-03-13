import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גרירת רכב מסחרי דחופה בצומת הצ'ק פוסט וכביש 22 חיפה",
  description: "שירותי גרירה וחילוץ לרכבים מסחריים וטנדרים בצומת הצ'ק פוסט וכביש 22. מענה מהיר, מקצועי ובמחירים הוגנים."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday-Saturday", "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "35.0230" },
    "priceRange": "$",
    "serviceType": "Commercial Vehicle Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">גרירת רכב מסחרי דחופה בצומת הצ'ק פוסט וכביש 22 חיפה</h1>
          <p className="text-xl mb-8">
            נתקעתם עם הרכב המסחרי בצומת הצ'ק פוסט או לאורך כביש 22? אנו מתמחים בחילוץ וגרירת רכבים מסחריים, טנדרים ורכבי 4x4. 
            הצוות שלנו מכיר היטב את עומסי התנועה באזור ומגיע במהירות כדי לסייע לכם. 
            חשוב לציין: אנו לא מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו לחילוץ רכב מסחרי?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>זמינות מלאה 24/7 לכל אזור חיפה והקריות.</li>
          <li>ציוד גרירה מתקדם המותאם לרכבים מסחריים כבדים.</li>
          <li>הגעה מהירה לצומת הצ'ק פוסט וכביש 22.</li>
          <li>שירות אדיב ומקצועי במחירים הוגנים.</li>
        </ul>
      </section>
    </main>
  );
}