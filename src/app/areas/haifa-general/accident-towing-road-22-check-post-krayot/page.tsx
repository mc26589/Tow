import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": { "@type": "City", "name": "Haifa and Krayot" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7940", "longitude": "35.0350" },
    "priceRange": "$",
    "serviceType": "Accident Towing and Roadside Assistance"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר תאונה כביש 22 צ'ק פוסט קריות – שירות חילוץ מהיר 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בכביש 22? זקוקים לפינוי מהיר מהצ'ק פוסט? אנחנו כאן בשבילכם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a href={`tel:+${BUSINESS_INFO.phone}`} className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition">
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי גרירה מקצועיים לאחר תאונה</h2>
        <p className="mb-4">אנו מספקים שירותי גרירה וחילוץ מקצועיים ומיידיים לכל סוגי הרכבים הפרטיים, המסחריים ורכבי 4x4 שנתקעו באזור כביש עוקף קריות (כביש 22) וצומת צ'ק פוסט. הצוות שלנו ערוך להגעה מהירה לזירת האירוע.</p>
        
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 my-8">
          <h3 className="text-2xl font-semibold mb-4">חשוב לדעת</h3>
          <ul className="list-disc pr-5 space-y-2">
            <li>זמינות מלאה 24/7 לכל אזור חיפה והקריות.</li>
            <li>התמחות בפינוי רכבים לאחר תאונות בדרכים מהירות.</li>
            <li>מחירים הוגנים ושירות אדיב.</li>
            <li><strong>הערה:</strong> איננו מספקים שירותי גרירה לאופנועים.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}