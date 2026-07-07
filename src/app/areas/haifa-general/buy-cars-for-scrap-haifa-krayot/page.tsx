import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות | שירות מהיר ומקצועי",
  description: "מחפשים מי קונה רכבים לפירוק בחיפה והקריות? אנו מציעים שירות פינוי רכבים לפירוק, רכבים לאחר תאונה או רכבים ללא טסט. מחירים הוגנים ושירות 24/7."
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
    <main className="bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות</h1>
          <p className="text-xl mb-8">שירות מקצועי, מהיר ואמין לפינוי רכבים מכל סוג. הצעת מחיר הוגנת בטלפון.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-200 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפירוק רכבים?</h2>
        <p className="mb-4">אנו קונים רכבים לפירוק בחיפה והקריות ומעניקים שירות מלא הכולל גרירה ופינוי ללא עלות נוספת. אנו מטפלים ברכבים פרטיים, מסחריים ורכבי 4x4 במצבם הנוכחי.</p>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>שירות מהיר בכל אזור חיפה והקריות</li>
          <li>מחירים הוגנים עבור הרכב שלך</li>
          <li>טיפול מקצועי בכל סוגי הרכבים (למעט אופנועים)</li>
          <li>זמינות 24/7 לכל קריאה</li>
        </ul>
        <p className="text-sm text-neutral-400">*הערה: השירות אינו כולל אופנועים. אנו מתמקדים ברכבים בעלי 4 גלגלים ומעלה בלבד.</p>
      </section>
    </main>
  );
}