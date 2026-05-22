import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים לפירוק",
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
    "serviceType": "Car Scrap Removal"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או מושבת? אנחנו כאן בשבילכם 24/7.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות מקצועי לפינוי רכבים לפירוק</h2>
        <p className="mb-4">אנו מציעים שירות מהיר ואמין לקניית רכבים לפירוק בחיפה והקריות. אם הרכב שלכם עומד ללא שימוש, עבר תאונה או שאינו עובר טסט, אנו נגיע עד אליכם עם גרר ונפנה את הרכב באופן מיידי.</p>
        <p className="mb-4">אנו מתמחים ברכבים פרטיים, מסחריים ורכבי 4x4. <strong>שימו לב: איננו מטפלים באופנועים.</strong></p>
        <p>השירות שלנו כולל הצעת מחיר הוגנת במקום וטיפול מלא בפינוי הרכב מהשטח.</p>
      </section>
    </main>
  );
}