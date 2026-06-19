import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": ["Haifa", "Krayot"],
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
    "priceRange": "$",
    "serviceType": "Car Scrap and Towing"
  };

  return (
    <main className="bg-neutral-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות – שירות מהיר ומקצועי</h1>
          <p className="text-xl mb-8">מחפשים למכור רכב לפירוק? אנו מציעים שירות אמין, מהיר ומשתלם לכל סוגי הרכבים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 text-white">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפירוק רכבים?</h2>
        <div className="prose prose-invert max-w-none">
          <p>אנו קונים רכבים לפירוק בחיפה והקריות במחירים הוגנים ובתהליך מהיר. אם ברשותך רכב ישן, תקול, לאחר תאונה או רכב שאינו עובר טסט, אנו מציעים שירות פינוי מקצועי ללא עלות גרירה.</p>
          <p>אנו מתמחים ברכישת רכבים פרטיים, מסחריים ורכבי שטח (4x4). <strong>חשוב לציין: אנו לא מטפלים באופנועים.</strong></p>
          <p>השירות שלנו כולל פינוי מיידי מהשטח, טיפול בכל הניירת הנדרשת מול משרד הרישוי, ותשלום הוגן במקום. הצוות שלנו זמין 24/7 לכל קריאה באזור חיפה, הקריות והסביבה.</p>
        </div>
      </section>
    </main>
  );
}