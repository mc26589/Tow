import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים לפירוק",
    "areaServed": "קרית ים",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8285",
      "longitude": "35.0715"
    },
    "serviceType": "פינוי רכבים לפירוק"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בקרית ים – פינוי מיידי</h1>
          <p className="text-xl mb-8 max-w-2xl">
            אנו קונים את כל סוגי הרכבים לפירוק בקרית ים. אם הרכב שלכם עומד ללא שימוש, עבר תאונה או סובל מתקלות מכניות קשות, אנו כאן כדי לפנות אותו עבורכם באופן מיידי. 
            אנו מתמחים ברכבים פרטיים, רכבים מסחריים ורכבי שטח (4x4). 
            חשוב לציין: איננו מטפלים באופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="קרית ים" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              התקשרו עכשיו להצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי רכב לפירוק?</h2>
          <ul className="space-y-4 text-lg">
            <li>✓ פינוי מיידי מהשטח בקרית ים והסביבה.</li>
            <li>✓ שירות מקצועי ואמין ללא עלויות נסתרות.</li>
            <li>✓ הצעת מחיר הוגנת עבור הרכב שלכם.</li>
            <li>✓ טיפול בכל סוגי הרכבים (פרטי, מסחרי, 4x4).</li>
          </ul>
        </div>
      </section>
    </main>
  );
}