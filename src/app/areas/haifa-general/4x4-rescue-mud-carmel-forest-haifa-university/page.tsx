import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { BUSINESS_INFO } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "חילוץ רכב 4X4 שקוע בבוץ יערות הכרמל ליד אוניברסיטת חיפה",
  description: "נתקעתם בבוץ ביערות הכרמל? צוות חילוץ 4X4 מקצועי זמין 24/7 באזור אוניברסיטת חיפה. שירות מהיר, אמין ומקצועי."
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "שירותי חילוץ וגרירה חיפה והקריות",
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
      "latitude": 32.762,
      "longitude": 35.015
    },
    "serviceType": "4x4 Off-road Recovery and Towing"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="gradient-trust text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">חילוץ רכב 4X4 שקוע בבוץ יערות הכרמל ליד אוניברסיטת חיפה</h1>
          <p className="text-xl mb-8">נתקעתם בבוץ? אל תנסו להמשיך ללחוץ על הגז. צוות החילוץ שלנו מתמחה בחילוצי שטח 4X4 באזור הכרמל. אנו מגיעים במהירות לכל נקודה סביב אוניברסיטת חיפה והיערות הסמוכים.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA cityName="Haifa and Krayot" />
            <a 
              href={`tel:+${BUSINESS_INFO.phone}`} 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              חיוג מהיר למוקד החילוץ
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">למה לבחור בנו לחילוץ בשטח?</h2>
        <ul className="list-disc pr-6 space-y-4">
          <li>מומחיות בחילוץ רכבי 4X4 ורכבי שטח ששקעו בבוץ עמוק.</li>
          <li>זמינות מלאה 24/7 באזור חיפה, הקריות ויערות הכרמל.</li>
          <li>ציוד חילוץ מקצועי המותאם לתוואי שטח קשים.</li>
          <li>מחירים הוגנים ושירות אדיב ללא הפתעות.</li>
        </ul>
        <p className="mt-6 text-gray-700">
          חשוב לציין: אנו מתמחים בחילוץ רכבים פרטיים, מסחריים ורכבי 4X4. איננו מספקים שירותי חילוץ או גרירה לאופנועים.
        </p>
      </section>
    </main>
  );
}