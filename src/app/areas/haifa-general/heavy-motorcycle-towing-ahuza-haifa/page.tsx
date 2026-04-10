import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה וחילוץ חיפה והקריות",
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
      "longitude": "34.9896"
    },
    "serviceType": ["Car Towing", "Roadside Assistance", "4x4 Recovery"]
  };

  return (
    <main className="bg-neutral-950 min-h-screen text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">גרר לאופנועים כבדים באחוזה חיפה – שירות מקצועי לרכבים ורכבי שטח</h1>
          <p className="text-xl mb-8">נתקעת עם הרכב באחוזה? אנו כאן לשירותך 24/7</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition"
            >
              התקשר עכשיו
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold">חשוב לדעת על שירותי הגרירה שלנו</h2>
          <p className="text-lg leading-relaxed">
            אנו מתמחים במתן שירותי גרירה וחילוץ לרכבים פרטיים, רכבים מסחריים ורכבי 4x4 באזור אחוזה וחיפה. 
            <strong>חשוב להדגיש: איננו מספקים שירותי גרירה לאופנועים או אופנועים כבדים.</strong>
          </p>
          <p className="text-lg leading-relaxed">
            אנו מציעים שירות מהיר, אמין ומקצועי עם מחירים הוגנים לכל סוגי הרכבים שאנו משרתים. הצוות שלנו מכיר היטב את אזור אחוזה ויכול להגיע אליך במהירות שיא.
          </p>
          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-bold mb-4">למה לבחור בנו?</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>זמינות מלאה 24/7 באזור חיפה והקריות</li>
              <li>ציוד חילוץ מתקדם לרכבים ורכבי שטח</li>
              <li>שירות אדיב ומקצועי</li>
              <li>הצעת מחיר הוגנת ושקופה בטלפון</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}