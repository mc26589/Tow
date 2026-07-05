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
      "latitude": "32.8190",
      "longitude": "35.0550"
    },
    "serviceType": "Emergency Roadside Assistance and Towing"
  };

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">גרר דחוף לכביש 22 עוקף קריות – שירות מהיר ומקצועי 24/7</h1>
          <p className="text-xl mb-8">נתקעתם בכביש 22? הצוות שלנו בדרך אליכם.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר למוקד החירום
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">זקוקים לגרר דחוף בכביש 22? אנחנו כאן בשבילכם.</h2>
          <p className="mb-6 text-lg">
            אם נתקעתם עם הרכב בכביש עוקף קריות (כביש 22), צוות המומחים שלנו זמין להגעה מהירה לכל נקודה לאורך הציר. 
            אנו מתמחים בחילוץ רכבים פרטיים, רכבי שטח ומסחריות קלות, ומבטיחים מענה מקצועי, בטוח ומהיר כדי להחזיר אתכם לשגרה. 
            <strong>חשוב לציין: איננו מספקים שירותי גרירה לאופנועים.</strong>
          </p>

          <h3 className="text-2xl font-semibold mb-4">למה לבחור בנו לחילוץ בכביש 22?</h3>
          <ul className="list-disc list-inside space-y-3 mb-8">
            <li>זמינות מלאה: שירות 24/7, גם בשעות הלילה ובסופי שבוע.</li>
            <li>הגעה מהירה: היכרות מעמיקה עם כל מחלפי כביש 22 לקיצור זמני המתנה.</li>
            <li>מחירים הוגנים: שקיפות מלאה והצעת מחיר הוגנת בטלפון ללא הפתעות.</li>
            <li>מקצועיות: ציוד גרירה חדיש המבטיח שמירה על הרכב שלכם.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}