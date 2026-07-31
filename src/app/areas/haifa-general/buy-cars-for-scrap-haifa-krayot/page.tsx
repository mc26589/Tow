import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | שירות מהיר ומקצועי",
  description: "מחפשים מי קונה רכבים לפירוק בחיפה והקריות? אנו מציעים שירות פינוי רכבים לפירוק במחירים הוגנים. שירות מהיר, אמין ומקצועי לכל סוגי הרכבים.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופירוק רכבים חיפה והקריות",
    "areaServed": ["Haifa", "Kiryat Bialik", "Kiryat Motzkin", "Kiryat Yam", "Kiryat Ata"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$",
    "serviceType": "Car Scrap and Towing",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7940",
      "longitude": "34.9896"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות</h1>
          <p className="text-xl mb-8">שירות מקצועי לפינוי רכבים לפירוק, רכבים לאחר תאונה או רכבים ללא טסט. מחירים הוגנים ושירות מהיר.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
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

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפירוק רכבים?</h2>
        <p className="mb-4">אנו מתמחים ברכישת רכבים לפירוק בחיפה והקריות ומעניקים שירות אמין ללא עיכובים. אנו קונים רכבים פרטיים, מסחריים ורכבי 4x4.</p>
        <p className="text-red-600 font-bold mb-4">חשוב להבהיר: איננו מטפלים באופנועים. השירות שלנו מיועד לרכבים בלבד.</p>
        <ul className="list-disc pr-6 space-y-2">
          <li>פינוי מהיר מהשטח בחיפה והקריות</li>
          <li>מחירים הוגנים עבור הרכב שלכם</li>
          <li>טיפול מקצועי בכל סוגי הרכבים (למעט אופנועים)</li>
          <li>זמינות 24/7 לכל קריאה</li>
        </ul>
      </section>
    </main>
  );
}