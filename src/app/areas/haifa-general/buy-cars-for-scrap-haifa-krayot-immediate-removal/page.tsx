import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
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
      "longitude": "34.9896"
    },
    "serviceType": "Car Scrap and Removal"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או מושבת? אנו כאן לשירותכם 24/7.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition"
            >
              חייגו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות מקצועי לפינוי רכבים לפירוק</h2>
        <p className="mb-4">אנו מתמחים בקניית רכבים לפירוק בחיפה, הקריות והסביבה. השירות כולל פינוי מיידי מהשטח ללא עלות נוספת. אנו רוכשים רכבים פרטיים, מסחריים ורכבי 4x4 במצבם הנוכחי.</p>
        <p className="text-red-400 font-semibold mb-6">שים לב: איננו מטפלים בפינוי או קנייה של אופנועים מכל סוג שהוא.</p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-bold mb-3">פינוי מהיר</h3>
            <p>צוות מיומן שמגיע לכל נקודה בחיפה ובקריות לפינוי הרכב במהירות המקסימלית.</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-bold mb-3">מחיר הוגן</h3>
            <p>אנו מעריכים את הרכב ומציעים מחיר הוגן בהתאם למצבו, ללא הפתעות.</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-bold mb-3">שירות מלא</h3>
            <p>אנו דואגים לכל התהליך, כולל גרירה וטיפול מול הרשויות במידת הצורך.</p>
          </div>
        </div>
      </section>
    </main>
  );
}