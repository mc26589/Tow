import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import Script from "next/script";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
    "areaServed": { "@type": "Place", "name": "כביש 22, קריות" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "priceRange": "$",
    "serviceType": "Emergency Roadside Assistance and Towing",
    "geo": { "@type": "GeoCoordinates", "latitude": "32.8156", "longitude": "35.0653" }
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">גרר דחוף לכביש 22 קריות – שירות חילוץ מהיר 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בכביש עוקף קריות? אנחנו בדרך אליכם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר לגרר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h2>זקוקים לגרר דחוף בכביש 22? אנחנו כאן בשבילכם.</h2>
          <p>אם נתקעתם עם הרכב בכביש עוקף קריות (כביש 22), צוות החילוץ המקצועי שלנו זמין להגיע אליכם במהירות שיא. אנו מתמחים בחילוץ רכבים פרטיים, רכבי שטח ומסחריות קלות, ומספקים מענה מיידי לכל תקלה או תאונה לאורך ציר התנועה המרכזי של הקריות.</p>
          
          <h3>למה לבחור בנו לחילוץ בכביש 22?</h3>
          <ul>
            <li>זמינות מלאה: שירות 24/7, כולל שבתות וחגים.</li>
            <li>הגעה מהירה: פריסה רחבה באזור חיפה והקריות המאפשרת הגעה מהירה לכל נקודה בכביש 22.</li>
            <li>מקצועיות ובטיחות: ציוד חדיש וצוות מיומן המבטיח פינוי בטוח של הרכב שלכם.</li>
            <li>מחירים הוגנים: שירות אמין במחיר משתלם ללא הפתעות.</li>
          </ul>
          
          <p className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
            <strong>חשוב לציין:</strong> אנו מתמחים בגרירת רכבים פרטיים, מסחריים ורכבי 4x4. איננו מספקים שירותי גרירה לאופנועים.
          </p>
        </div>
      </section>
    </main>
  );
}