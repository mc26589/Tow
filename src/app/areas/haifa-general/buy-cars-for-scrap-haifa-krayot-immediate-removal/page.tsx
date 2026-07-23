import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "קונה רכבים לפירוק בחיפה והקריות עם פינוי מיידי | שירות 24/7",
  description: "מחפשים קונה רכבים לפירוק בחיפה והקריות? אנו מציעים פינוי מיידי, תשלום הוגן ושירות מקצועי לרכבים פרטיים ומסחריים. צרו קשר עכשיו!",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה ופינוי רכבים לפירוק",
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
          <p className="text-xl mb-8">זקוקים לפינוי רכב ישן או מושבת? אנו כאן לשירותכם עם מענה מהיר ומחירים הוגנים.</p>
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

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לפינוי הרכב שלכם?</h2>
        <p className="mb-4">אנו מתמחים בפינוי רכבים לפירוק בחיפה והקריות ומעניקים שירות מהיר ללא עיכובים. אנו קונים רכבים פרטיים, מסחריים ורכבי 4x4 במצבם הנוכחי.</p>
        <p className="font-semibold text-red-600">חשוב להבהיר: השירות שלנו מיועד לרכבים בלבד. איננו מטפלים בפינוי או גרירת אופנועים.</p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>פינוי מיידי מהשטח</li>
          <li>מחירים הוגנים ומשתלמים</li>
          <li>שירות אמין ומקצועי בכל אזור חיפה והקריות</li>
          <li>טיפול בכל סוגי הרכבים (פרטי, מסחרי, 4x4)</li>
        </ul>
      </section>
    </main>
  );
}