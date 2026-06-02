import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | שירות מהיר ומקצועי",
  description: "מחפשים מי קונה רכבים לפירוק בחיפה והקריות? אנו מציעים שירות פינוי רכבים לפירוק, רכבים לאחר תאונה ורכבים ישנים במחירים הוגנים. שירות 24/7."
};

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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות</h1>
          <p className="text-xl md:text-2xl mb-8">שירות מקצועי, מהיר ואמין לפינוי רכבים לפירוק מכל הסוגים.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition-colors"
            >
              התקשרו עכשיו לקבלת הצעת מחיר
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 text-neutral-100">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפירוק רכבים?</h2>
        <p className="mb-4">אנו קונים רכבים לפירוק בחיפה והקריות ומציעים פתרון מלא לכל סוגי הרכבים: רכבים ישנים, רכבים ללא טסט, רכבים לאחר תאונה או רכבים תקולים. אנו מתחייבים למחירים הוגנים ושירות מהיר.</p>
        <p className="mb-4">חשוב להדגיש: אנו מתמחים ברכבים פרטיים, מסחריים ורכבי 4x4. איננו מטפלים באופנועים מכל סוג שהוא.</p>
        <ul className="list-disc list-inside space-y-2">
          <li>פינוי מהיר מהשטח ללא עלות גרירה</li>
          <li>טיפול מלא בניירת מול משרד התחבורה</li>
          <li>תשלום הוגן במקום</li>
          <li>זמינות 24/7 בכל אזור חיפה והקריות</li>
        </ul>
      </section>
    </main>
  );
}