import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי | שירות 24/7",
  description: "מחפשים קונה רכבים לפירוק בחיפה והקריות? אנו מציעים פינוי מיידי, תשלום הוגן ושירות מקצועי לרכבים פרטיים, מסחריים ו-4x4. צרו קשר עכשיו!"
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי פינוי וקניית רכבים לפירוק",
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
    <main className="bg-neutral-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי</h1>
          <p className="text-xl mb-8">נתקעתם עם רכב ישן או מושבת? אנו כאן כדי לפנות אותו עבורכם במהירות ובמקצועיות.</p>
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

      <section className="py-16 container mx-auto px-4 text-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold">שירות אמין ומקצועי באזור חיפה והקריות</h2>
          <p>אנו מתמחים בקניית רכבים לפירוק, רכבים לברזל ורכבים ללא טסט. השירות שלנו כולל פינוי מיידי מהשטח באמצעות גרר מקצועי. אנו מטפלים ברכבים פרטיים, מסחריים ורכבי 4x4.</p>
          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-bold mb-2">הערה חשובה:</h3>
            <p>אנו מתמחים ברכבים בלבד. <strong>איננו מספקים שירותי פינוי או קנייה לאופנועים.</strong></p>
          </div>
          <h3 className="text-2xl font-semibold">למה למכור לנו את הרכב?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>פינוי מיידי ללא עיכובים.</li>
            <li>הצעת מחיר הוגנת במקום.</li>
            <li>שירות אדיב ומקצועי בכל אזור חיפה והקריות.</li>
            <li>טיפול מלא בפינוי הרכב מהשטח.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}