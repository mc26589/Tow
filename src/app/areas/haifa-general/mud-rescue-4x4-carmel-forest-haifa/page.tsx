import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ רכב חיפה והקריות",
    "areaServed": "Haifa and Krayot",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7625",
      "longitude": "35.0150"
    },
    "priceRange": "$",
    "serviceType": "Mud Rescue and Off-road Recovery"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">חילוץ בוץ לרכב 4x4 ביערות הכרמל ליד אוניברסיטת חיפה</h1>
          <p className="text-xl mb-8">נתקעתם בשטח? צוות החילוץ המקצועי שלנו בדרך אליכם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              התקשרו עכשיו לחילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירותי חילוץ שטח מקצועיים</h2>
        <p className="mb-4">
          אנו מתמחים בחילוץ רכבי 4x4, רכבי שטח ורכבים פרטיים ששקעו בבוץ באזור יערות הכרמל. 
          חשוב לציין: אנו מספקים שירותי חילוץ לרכבים בלבד ואיננו מטפלים באופנועים.
        </p>
        <p className="mb-4">
          הצוות שלנו מכיר היטב את תוואי השטח סביב אוניברסיטת חיפה והכרמל. אנו מגיעים עם ציוד חילוץ ייעודי 
          כדי להבטיח שהרכב שלכם יחולץ ללא נזקים מיותרים ובמהירות המרבית.
        </p>
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mt-8">
          <h3 className="text-2xl font-semibold mb-4">למה לבחור בנו?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>זמינות 24/7 לכל קריאה</li>
            <li>ציוד חילוץ מתקדם לרכבי 4x4</li>
            <li>הגעה מהירה לכל נקודה בכרמל</li>
            <li>מחירים הוגנים ושירות אדיב</li>
          </ul>
        </div>
      </section>
    </main>
  );
}