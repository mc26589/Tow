import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי | שירות 24/7",
  description: "מחפשים קונה רכבים לפירוק בחיפה והקריות? אנו מציעים פינוי מיידי, הצעת מחיר הוגנת ושירות מקצועי לרכבים פרטיים ומסחריים. צרו קשר עכשיו."
};

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
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או תקול? אנו כאן בשבילכם 24/7.</p>
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

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">שירות מקצועי לפינוי רכבים</h2>
        <p className="mb-4">אנו מתמחים בפינוי רכבים לפירוק בכל אזור חיפה והקריות. השירות שלנו מהיר, יעיל ומבוצע על ידי צוות מנוסה.</p>
        <p className="mb-4"><strong>שים לב:</strong> אנו מטפלים ברכבים פרטיים, מסחריים ורכבי 4x4 בלבד. איננו מספקים שירות לאופנועים.</p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 border border-neutral-800 rounded-xl">
            <h3 className="text-xl font-bold mb-3">פינוי מיידי</h3>
            <p>מגיעים אליכם במהירות לכל נקודה בחיפה והקריות.</p>
          </div>
          <div className="p-6 border border-neutral-800 rounded-xl">
            <h3 className="text-xl font-bold mb-3">מחיר הוגן</h3>
            <p>הצעת מחיר הוגנת ומקצועית עבור הרכב שלכם בטלפון.</p>
          </div>
          <div className="p-6 border border-neutral-800 rounded-xl">
            <h3 className="text-xl font-bold mb-3">שירות אמין</h3>
            <p>פינוי מסודר ללא כאבי ראש וללא עלויות נסתרות.</p>
          </div>
        </div>
      </section>
    </main>
  );
}