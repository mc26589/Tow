import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "35.0230"
    },
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
          <h1 className="text-4xl font-bold mb-6">גרירת רכבים וסיוע בדרך בכביש 22 (עוקף קריות) וצומת הצ'ק פוסט</h1>
          <p className="text-lg mb-8 max-w-2xl">
            נתקעת עם הרכב באזור כביש 22 או בצומת הצ'ק פוסט? אנו כאן לסייע. 
            חשוב לציין: אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4. 
            <strong>איננו מספקים שירותי גרירה לאופנועים.</strong> 
            אנו מציעים שירות מהיר, אמין ומקצועי עם הצעת מחיר הוגנת בטלפון.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA cityName="חיפה והקריות" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">למה לבחור בנו באזור חיפה והקריות?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>זמינות מלאה 24/7 לכל קריאה.</li>
          <li>הגעה מהירה לכל נקודה בכביש 22 ובצומת הצ'ק פוסט.</li>
          <li>צוות מיומן ומקצועי לטיפול ברכבים פרטיים ומסחריים.</li>
          <li>שקיפות מלאה ומחירים הוגנים ללא הפתעות.</li>
        </ul>
      </section>
    </main>
  );
}