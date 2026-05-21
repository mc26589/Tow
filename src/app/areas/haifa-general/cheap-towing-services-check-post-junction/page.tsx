import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "שירותי גרירה זולים בצומת צ'ק פוסט | זמינות 24/7",
  description: "זקוקים לגרר בצומת צ'ק פוסט? שירותי גרירה מקצועיים, מהירים ובמחירים הוגנים. חילוץ רכבים פרטיים ומסחריים בכל שעות היממה.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי גרירה בצומת צ'ק פוסט",
    "areaServed": { "@type": "Place", "name": "צומת צ'ק פוסט, חיפה" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
    "geo": { "@type": "GeoCoordinates", "latitude": "32.7858", "longitude": "35.0236" },
    "priceRange": "$",
    "serviceType": "Towing and Roadside Assistance"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">שירותי גרירה זולים בצומת צ'ק פוסט</h1>
          <p className="text-xl mb-8 max-w-2xl">
            נתקעתם בצומת צ'ק פוסט? אנו מציעים שירותי גרירה וחילוץ מקצועיים לרכבים פרטיים, מסחריים ורכבי 4x4. 
            אנו מתחייבים למחירים הוגנים, שירות מהיר וזמינות מלאה 24/7. 
            שימו לב: איננו מספקים שירותי גרירה לאופנועים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="צומת צ'ק פוסט" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg text-center hover:bg-gray-100 transition-colors"
            >
              חיוג מהיר למוקד
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו בצומת צ'ק פוסט?</h2>
        <ul className="grid md:grid-cols-3 gap-8">
          <li className="p-6 border border-gray-200 rounded-xl">
            <h3 className="font-bold text-xl mb-2">זמינות 24/7</h3>
            <p>אנחנו כאן בשבילכם בכל שעה, גם בסופי שבוע ובחגים.</p>
          </li>
          <li className="p-6 border border-gray-200 rounded-xl">
            <h3 className="font-bold text-xl mb-2">מחירים הוגנים</h3>
            <p>שירות גרירה איכותי במחיר משתלם ללא הפתעות.</p>
          </li>
          <li className="p-6 border border-gray-200 rounded-xl">
            <h3 className="font-bold text-xl mb-2">מקצועיות וניסיון</h3>
            <p>צוות מיומן המכיר היטב את אזור חיפה והקריות.</p>
          </li>
        </ul>
      </section>
    </main>
  );
}